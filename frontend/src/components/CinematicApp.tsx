import { useState } from 'react'
import EyeOpening from './EyeOpening'
import Scene from './Scene'
import LadyCharacter from './LadyCharacter'
import DialogueBox from './DialogueBox'

type Stage = 'eye-opening' | 'scene' | 'ready'

export default function CinematicApp() {
  const [stage, setStage] = useState<Stage>('eye-opening')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleEyeComplete = () => setStage('scene')

  // Small delay after scene fades in before showing character + dialogue
  const sceneVisible = stage === 'scene' || stage === 'ready'
  const contentVisible = stage === 'ready'

  // Trigger content after scene is visible
  const handleSceneReady = () => {
    setTimeout(() => setStage('ready'), 800)
  }

  const handleSelectCategory = (slug: string) => {
    setSelectedCategory(slug)
    // TODO: navigate to scenario selection for this category
    console.log('Selected category:', slug)
  }

  return (
    <div className="cinematic-root">
      {stage === 'eye-opening' && (
        <EyeOpening onComplete={handleEyeComplete} />
      )}

      <Scene visible={sceneVisible} />

      {/* Trigger content reveal once scene is shown */}
      {sceneVisible && !contentVisible && (
        <div style={{ display: 'none' }}>
          {setTimeout(handleSceneReady, 0) as unknown as null}
        </div>
      )}

      <LadyCharacter visible={contentVisible} />
      <DialogueBox
        visible={contentVisible}
        onSelectCategory={handleSelectCategory}
      />
    </div>
  )
}
