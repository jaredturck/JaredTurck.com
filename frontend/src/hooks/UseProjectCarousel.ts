import { useEffect, useState } from 'react'

export default function use_project_carousel(project_count: number) {
  const [active_index, set_active_index] = useState(0)
  const [start_x, set_start_x] = useState(0)

  function move(direction: number) {
    set_active_index(current => Math.max(0, Math.min(current + direction, project_count - 1)))
  }

  function on_pointer_down(event: React.PointerEvent) {
    set_start_x(event.clientX)
  }

  function on_pointer_up(event: React.PointerEvent) {
    const distance = event.clientX - start_x

    if (Math.abs(distance) < 55) {
      return
    }

    move(distance > 0 ? -1 : 1)
  }

  useEffect(() => {
    function on_key_down(event: KeyboardEvent) {
      if (event.key === 'ArrowLeft') {
        move(-1)
      }

      if (event.key === 'ArrowRight') {
        move(1)
      }
    }

    window.addEventListener('keydown', on_key_down)
    return () => window.removeEventListener('keydown', on_key_down)
  })

  return { active_index, set_active_index, move, on_pointer_down, on_pointer_up }
}
