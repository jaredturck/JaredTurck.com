import { useEffect, useState } from 'react'

export default function useAnyhjsShowcase(active: boolean, image_count: number) {
  const [image_index, set_image_index] = useState(0)

  useEffect(() => {
    if (!active) {
      return
    }

    const interval = window.setInterval(() => {
      set_image_index(current => (current + 1) % image_count)
    }, 4200)

    return () => window.clearInterval(interval)
  }, [active, image_count])

  return { image_index, set_image_index }
}
