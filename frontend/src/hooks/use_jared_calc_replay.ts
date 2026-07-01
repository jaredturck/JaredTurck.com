import { useEffect, useState } from 'react'

type CalcItem = {
  expr: string
  result: string
}

export default function useJaredCalcReplay(active: boolean, items: CalcItem[]) {
  const [item_index, set_item_index] = useState(0)
  const [field, set_field] = useState<'expr' | 'result'>('expr')
  const [char_index, set_char_index] = useState(0)

  useEffect(() => {
    if (!active) {
      return
    }

    const current = items[item_index]
    const target = field === 'expr' ? current.expr : current.result

    if (char_index < target.length) {
      const timeout = window.setTimeout(() => set_char_index(current_index => current_index + (field === 'expr' ? 2 : 3)), field === 'expr' ? 22 : 18)
      return () => window.clearTimeout(timeout)
    }

    if (field === 'expr') {
      const timeout = window.setTimeout(() => {
        set_field('result')
        set_char_index(0)
      }, 180)
      return () => window.clearTimeout(timeout)
    }

    const timeout = window.setTimeout(() => {
      set_item_index(current_index => (current_index + 1) % items.length)
      set_field('expr')
      set_char_index(0)
    }, 1100)

    return () => window.clearTimeout(timeout)
  }, [active, char_index, field, item_index, items])

  return {
    expression: field === 'expr' ? items[item_index].expr.slice(0, char_index) : items[item_index].expr,
    result: field === 'result' ? items[item_index].result.slice(0, char_index) : '',
    field,
  }
}
