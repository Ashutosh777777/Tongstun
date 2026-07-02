from kokoro_onnx import Kokoro
import numpy as np
import soundfile as sf
import io

kokoro = Kokoro("kokoro-v0_19.onnx", "voices.json")

def synthesize(text: str, voice: str = "af_sarah") -> bytes:
    samples, sample_rate = kokoro.create(text, voice=voice, speed=1.0, lang="en-us")
    buffer = io.BytesIO()
    sf.write(buffer, samples, sample_rate, format="WAV")
    return buffer.getvalue()