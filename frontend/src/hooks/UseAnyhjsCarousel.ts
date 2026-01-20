import { useState } from 'react'

export default function use_anyhjs_carousel() {
  const [active_index, set_active_index] = useState(0)
  return { active_index, set_active_index }
}
