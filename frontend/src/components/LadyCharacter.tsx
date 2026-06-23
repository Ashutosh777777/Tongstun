interface LadyCharacterProps {
  visible: boolean
}

export default function LadyCharacter({ visible }: LadyCharacterProps) {
  return (
    <div className={`lady-wrapper ${visible ? 'lady-visible' : ''}`}>
      <div className="lady-glow" />
      <img src="/lady.png" alt="Guide character" className="lady-img" />
    </div>
  )
}
