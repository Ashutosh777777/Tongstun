import asyncio
import tempfile
import os
import uuid
import json
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware

from stt import transcribe
from llm import get_response
from tts import synthesize
from session_manager import create_session, get_session, end_session

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.websocket("/ws/conversation")
async def conversation_ws(websocket: WebSocket):
    await websocket.accept()
    session = None

    try:
        # First message must be session init
        init_data = await websocket.receive_json()
        session_id = str(uuid.uuid4())
        session = create_session(
            session_id=session_id,
            scenario_slug=init_data["scenario_slug"],
            system_prompt=init_data["system_prompt"],
        )

        # Send session ID back
        await websocket.send_json({"type": "session_started", "session_id": session_id})

        # AI speaks first
        opening = get_response(session.system_prompt, [], "Please introduce yourself and set the scene in one or two sentences.")
        session.add_turn("assistant", opening)
        audio = synthesize(opening)
        await websocket.send_json({"type": "ai_text", "text": opening})
        await websocket.send_bytes(audio)

        # Main conversation loop
        while True:
            message = await websocket.receive()

            if "bytes" in message and message["bytes"]:
                # Audio chunk from user mic
                audio_bytes = message["bytes"]

                with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as f:
                    f.write(audio_bytes)
                    tmp_path = f.name

                try:
                    # STT
                    user_text = await asyncio.to_thread(transcribe, tmp_path)
                    await websocket.send_json({"type": "user_text", "text": user_text})

                    # LLM
                    ai_response = await asyncio.to_thread(
                        get_response, session.system_prompt, session.get_history(), user_text
                    )
                    session.add_turn("user", user_text)
                    session.add_turn("assistant", ai_response)

                    # TTS
                    audio_response = await asyncio.to_thread(synthesize, ai_response)
                    await websocket.send_json({"type": "ai_text", "text": ai_response})
                    await websocket.send_bytes(audio_response)

                finally:
                    os.unlink(tmp_path)

            elif "text" in message:
                data = json.loads(message["text"])
                if data.get("type") == "end_session":
                    break

    except WebSocketDisconnect:
        pass
    finally:
        if session:
            end_session(session.session_id)
        await websocket.close()