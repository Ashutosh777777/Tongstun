import { useEffect, useState } from 'react'

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  icon: string
}

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('http://localhost:8000/api/categories/')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch categories')
        return res.json()
      })
      .then(data => {
        setCategories(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return { categories, loading, error }
}
