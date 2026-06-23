import { useEffect, useState } from 'react'

interface EyeOpeningProps {
  onComplete: () => void
}

export default function EyeOpening({ onComplete }: EyeOpeningProps) {
  const [phase, setPhase] = useState<'closed' | 'opening' | 'open'>('closed')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('opening'), 600)
    const t2 = setTimeout(() => setPhase('open'), 2200)
    const t3 = setTimeout(() => onComplete(), 3000)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onComplete])

  return (
    <div className={`eye-container ${phase}`}>
      <div className="eyelid eyelid-top" />
      <div className="eyelid eyelid-bottom" />
    </div>
  )
}
