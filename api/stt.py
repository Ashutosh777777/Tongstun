from faster_whisper import WhisperModel
model = WhisperModel("large-v2", device="cuda", compute_type="float16")

def transcribe(audio_path: str) -> str:
    segments, _ = model.transcribe(audio_path, beam_size=5, language="en")
    return " ".join(segment.text.strip() for segment in segments)