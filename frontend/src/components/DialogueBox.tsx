interface DialogueBoxProps {
  visible: boolean
  onStart: () => void
}

export default function DialogueBox({ visible, onStart }: DialogueBoxProps) {
  return (
    <div className={`dialogue-box ${visible ? 'dialogue-visible' : ''}`}>
      <p className="dialogue-eyebrow">GUIDE</p>
      <p className="dialogue-question">
        Ready to level up your conversations?
      </p>
      <div className="dialogue-choices">
        <button className="dialogue-btn dialogue-btn-primary" onClick={onStart}>
          Start Yapping ✦
        </button>
      </div>
    </div>
  )
}
