import { useState } from 'react'
import TownMap from '../components/TownMap'
import { useCategories } from '../hooks/useCategories'

interface MapViewProps {
  onSelectScenario: (slug: string) => void
  onBack: () => void
}

const ALL = 'all'

export default function MapView({ onSelectScenario, onBack }: MapViewProps) {
  const { categories } = useCategories()
  const [selected, setSelected] = useState<string[]>([ALL])

  const activeCategories = selected.includes(ALL)
    ? categories.map(c => c.slug)
    : selected

  const toggleCategory = (slug: string) => {
    if (slug === ALL) {
      setSelected([ALL])
      return
    }
    const withoutAll = selected.filter(s => s !== ALL)
    if (withoutAll.includes(slug)) {
      const next = withoutAll.filter(s => s !== slug)
      setSelected(next.length === 0 ? [ALL] : next)
    } else {
      setSelected([...withoutAll, slug])
    }
  }

  return (
    <div className="map-view">
      {/* Side panel */}
      <aside className="map-panel">
        <button className="map-back-btn" onClick={onBack}>← Back</button>
        <p className="map-panel-title">Categories</p>

        <button
          className={`map-cat-btn ${selected.includes(ALL) ? 'map-cat-btn--active' : ''}`}
          onClick={() => toggleCategory(ALL)}
        >
          <span className="map-cat-icon">🗺️</span>
          <span>All</span>
        </button>

        {categories.map(cat => {
          const isActive = selected.includes(cat.slug)
          return (
            <button
              key={cat.slug}
              className={`map-cat-btn ${isActive && !selected.includes(ALL) ? 'map-cat-btn--active' : ''}`}
              onClick={() => toggleCategory(cat.slug)}
            >
              <span className="map-cat-icon">{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          )
        })}

        <p className="map-panel-hint">Click a lit location on the map to begin</p>
      </aside>

      {/* Map */}
      <div className="map-canvas">
        <TownMap
          activeCategories={activeCategories}
          onSelectScenario={onSelectScenario}
        />
      </div>
    </div>
  )
}
