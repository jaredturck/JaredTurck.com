import { useState } from 'react'

export default function use_nav_menu() {
  const [menu_open, set_menu_open] = useState(false)

  function toggle_menu() {
    set_menu_open(!menu_open)
  }

  function close_menu() {
    set_menu_open(false)
  }

  return { menu_open, toggle_menu, close_menu }
}
