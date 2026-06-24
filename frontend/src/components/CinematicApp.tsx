import { useState } from 'react'
import EyeOpening from './EyeOpening'
import Scene from './Scene'
import LadyCharacter from './LadyCharacter'
import DialogueBox from './DialogueBox'
import MapView from '../pages/MapView'

type Stage = 'eye-opening' | 'landing' | 'zoom-out' | 'map'

export default function CinematicApp() {
  const [stage, setStage] = useState<Stage>('eye-opening')

  const handleEyeComplete = () => {
    setStage('landing')
  }

  const handleStart = () => {
    // Trigger zoom transition then show map
    setStage('zoom-out')
    setTimeout(() => setStage('map'), 700)
  }

  const handleBack = () => {
    setStage('zoom-out')
    setTimeout(() => setStage('landing'), 50)
    // re-enter from map side
    setTimeout(() => setStage('landing'), 700)
  }

  const handleSelectScenario = (slug: string) => {
    console.log('Selected scenario:', slug)
    // TODO: navigate to voice conversation screen
  }

  if (stage === 'map') {
    return (
      <div className="cinematic-root map-enter">
        <MapView onSelectScenario={handleSelectScenario} onBack={handleBack} />
      </div>
    )
  }

  return (
    <div className={`cinematic-root ${stage === 'zoom-out' ? 'cinematic-zoom-out' : ''}`}>
      <Scene visible={true} />

      {stage === 'eye-opening' && (
        <EyeOpening onComplete={handleEyeComplete} />
      )}

      <LadyCharacter visible={stage === 'landing'} />
      <DialogueBox
        visible={stage === 'landing'}
        onStart={handleStart}
      />
    </div>
  )
}
