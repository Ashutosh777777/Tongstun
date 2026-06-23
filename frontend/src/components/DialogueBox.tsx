import { useCategories } from '../hooks/useCategories'

interface DialogueBoxProps {
  visible: boolean
  onSelectCategory: (slug: string) => void
}

export default function DialogueBox({ visible, onSelectCategory }: DialogueBoxProps) {
  const { categories, loading, error } = useCategories()

  return (
    <div className={`dialogue-box ${visible ? 'dialogue-visible' : ''}`}>
      <p className="dialogue-eyebrow">GUIDE</p>
      <p className="dialogue-question">
        Welcome. Which scenario would you like to practice?
      </p>

      <div className="dialogue-choices">
        {loading && <span className="dialogue-loading">Loading...</span>}
        {error && <span className="dialogue-error">Couldn't load scenarios</span>}
        {!loading && !error && categories.map(cat => (
          <button
            key={cat.id}
            className="dialogue-btn"
            onClick={() => onSelectCategory(cat.slug)}
          >
            {cat.icon && <span className="dialogue-btn-icon">{cat.icon}</span>}
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  )
}
