import { useEffect, useRef, useState } from 'react'

export default function UseJaredCalcReplay(items: any) {
  const screen_ref = useRef(null)

  const [started, set_started] = useState(false)
  const [done, set_done] = useState(false)
  const [item_i, set_item_i] = useState(0)
  const [field, set_field] = useState('expr')
  const [char_i, set_char_i] = useState(0)

  useEffect(() => {
    const el = screen_ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      (entries) => {
        const e = entries[0]
        if (e && e.isIntersecting) {
          set_started(true)
          obs.disconnect()
        }
      },
      { threshold: 0.35 }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    if (done) return

    const current = items[item_i]
    if (!current) {
      set_done(true)
      return
    }

    const target = field === 'expr' ? current.expr : current.result
    const step = field === 'expr' ? 2 : 3
    const speed = field === 'expr' ? 10 : 8

    if (char_i < target.length) {
      const t = setTimeout(() => set_char_i(char_i + step), speed)
      return () => clearTimeout(t)
    }

    if (field === 'expr') {
      const t = setTimeout(() => {
        set_field('result')
        set_char_i(0)
      }, 80)
      return () => clearTimeout(t)
    }

    const t = setTimeout(() => {
      if (item_i >= items.length - 1) {
        set_done(true)
        return
      }
      set_item_i(item_i + 1)
      set_field('expr')
      set_char_i(0)
    }, 140)

    return () => clearTimeout(t)
  }, [started, done, item_i, field, char_i, items])

  const display = []
  for (let i = 0; i < items.length; i++) {
    const x = items[i]

    if (done || i < item_i) {
      display.push({ expr: x.expr, result: x.result, active: false, field: '' })
      continue
    }

    if (i === item_i) {
      const expr = field === 'expr' ? x.expr.slice(0, char_i) : x.expr
      const result =
        field === 'result' ? x.result.slice(0, char_i) : field === 'expr' ? '' : x.result

      display.push({ expr, result, active: true, field })
      break
    }

    break
  }

  return { screen_ref, display, started, done, active_field: field }
}
