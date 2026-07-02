import ollama

def get_response(system_prompt: str, history: list, user_message: str) -> str:
    messages = [{"role": "system", "content": system_prompt}]
    messages.extend(history)
    messages.append({"role": "user", "content": user_message})

    response = ollama.chat(
        model="llama3.2",
        messages=messages,
    )
    return response["message"]["content"]