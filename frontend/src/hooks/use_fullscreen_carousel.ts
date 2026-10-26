import { useEffect, useRef, useState } from 'react'

export default function useFullscreenCarousel(slide_count: number) {
  const [active_index, set_active_index] = useState(0)
  const [drag_offset, set_drag_offset] = useState(0)
  const [is_dragging, set_is_dragging] = useState(false)
  const drag_start_x = useRef(0)
  const drag_start_y = useRef(0)
  const drag_axis = useRef<'horizontal' | 'vertical' | null>(null)

  function move(direction: number) {
    set_active_index(current => (current + direction + slide_count) % slide_count)
  }

  function go_to(index: number) {
    set_active_index(index)
  }

  function on_pointer_down(event: React.PointerEvent<HTMLElement>) {
    const target = event.target as HTMLElement

    if (target.closest('button, a, input, label')) {
      return
    }

    drag_start_x.current = event.clientX
    drag_start_y.current = event.clientY
    drag_axis.current = null
    set_drag_offset(0)
    set_is_dragging(true)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  function on_pointer_move(event: React.PointerEvent<HTMLElement>) {
    if (!is_dragging) {
      return
    }

    const distance_x = event.clientX - drag_start_x.current
    const distance_y = event.clientY - drag_start_y.current

    if (!drag_axis.current && Math.max(Math.abs(distance_x), Math.abs(distance_y)) > 8) {
      const vertical_swipe = window.matchMedia('(max-width: 820px)').matches && Math.abs(distance_y) > Math.abs(distance_x)
      drag_axis.current = vertical_swipe ? 'vertical' : 'horizontal'
    }

    if (!drag_axis.current) {
      return
    }

    const distance = drag_axis.current === 'vertical' ? distance_y : distance_x
    set_drag_offset(Math.max(-190, Math.min(distance, 190)))
  }

  function on_pointer_up(event: React.PointerEvent<HTMLElement>) {
    if (!is_dragging) {
      return
    }

    const distance_x = event.clientX - drag_start_x.current
    const distance_y = event.clientY - drag_start_y.current
    const vertical_swipe = window.matchMedia('(max-width: 820px)').matches && Math.abs(distance_y) > Math.abs(distance_x)
    const axis = drag_axis.current || (vertical_swipe ? 'vertical' : 'horizontal')
    const distance = axis === 'vertical' ? distance_y : distance_x

    if (Math.abs(distance) > 72) {
      move(distance > 0 ? -1 : 1)
    }

    set_drag_offset(0)
    set_is_dragging(false)
    drag_axis.current = null

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  function on_pointer_cancel(event: React.PointerEvent<HTMLElement>) {
    set_drag_offset(0)
    set_is_dragging(false)
    drag_axis.current = null

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  useEffect(() => {
    function on_key_down(event: KeyboardEvent) {
      const target = event.target

      if (target instanceof HTMLElement && target.matches('input, textarea, select')) {
        return
      }

      if (event.key === 'ArrowLeft') {
        set_active_index(current => (current - 1 + slide_count) % slide_count)
      }

      if (event.key === 'ArrowRight') {
        set_active_index(current => (current + 1) % slide_count)
      }
    }

    window.addEventListener('keydown', on_key_down)
    return () => window.removeEventListener('keydown', on_key_down)
  }, [slide_count])

  return { active_index, drag_offset, is_dragging, move, go_to, on_pointer_down, on_pointer_move, on_pointer_up, on_pointer_cancel }
}
