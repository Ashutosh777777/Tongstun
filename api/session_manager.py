from dataclasses import dataclass, field

@dataclass
class ConversationSession:
    session_id: str
    scenario_slug: str 
    system_prompt: str
    history: list = field(default_factory=list)

    def add_turn(self, role: str, content: str):
        self.history.append({"role": role, "content": content})

    def get_history(self) -> list:
        return self.history

sessions: dict[str, ConversationSession] = {}

def create_session(session_id: str, scenario_slug: str, system_prompt: str) -> ConversationSession:
    session = ConversationSession(
        session_id=session_id,
        scenario_slug=scenario_slug,
        system_prompt=system_prompt,
    )
    sessions[session_id] = session
    return session

def get_session(session_id: str) -> ConversationSession | None:
    return sessions.get(session_id)

def end_session(session_id: str):
    sessions.pop(session_id, None)