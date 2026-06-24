import { useState } from 'react'
import EyeOpening from './EyeOpening'
import Scene from './Scene'
import LadyCharacter from './LadyCharacter'
import DialogueBox from './DialogueBox'

type Stage = 'eye-opening' | 'scene' | 'ready'

export default function CinematicApp() {
  const [stage, setStage] = useState<Stage>('eye-opening')

  // Scene starts visible immediately — it's hidden behind the eyelids anyway
  const sceneVisible = true

  // Lady and dialogue appear after eyes finish opening
  const contentVisible = stage === 'scene' || stage === 'ready'

  const handleEyeComplete = () => {
    setStage('scene')
    setTimeout(() => setStage('ready'), 800)
  }

  const handleSelectCategory = (slug: string) => {
    console.log('Selected category:', slug)
    // TODO: navigate to scenario selection
  }

  return (
    <div className="cinematic-root">
      <Scene visible={sceneVisible} />

      {stage === 'eye-opening' && (
        <EyeOpening onComplete={handleEyeComplete} />
      )}

      <LadyCharacter visible={contentVisible} />
      <DialogueBox
        visible={contentVisible}
        onSelectCategory={handleSelectCategory}
      />
    </div>
  )
}
