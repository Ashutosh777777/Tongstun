interface SceneProps {
  visible: boolean
}

export default function Scene({ visible }: SceneProps) {
  return (
    <div className={`scene ${visible ? 'scene-visible' : ''}`}>
      <img src="/room.jpg" alt="" className="scene-bg" />
      <div className="scene-vignette" />
    </div>
  )
}
