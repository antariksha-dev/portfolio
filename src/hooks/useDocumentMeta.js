import { useEffect } from 'react'

export function useDocumentMeta(title, description) {
  useEffect(() => {
    const previousTitle = document.title
    if (title) document.title = title

    const meta = document.querySelector('meta[name="description"]')
    const previousDescription = meta?.getAttribute('content')
    if (meta && description) {
      meta.setAttribute('content', description)
    }

    return () => {
      document.title = previousTitle
      if (meta && previousDescription != null) {
        meta.setAttribute('content', previousDescription)
      }
    }
  }, [title, description])
}
