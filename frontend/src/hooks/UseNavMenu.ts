import { useState } from 'react'

export default function useNavMenu() {
  const [menu_open, set_menu_open] = useState(false)

  function toggle_menu() {
    set_menu_open(current => !current)
  }

  function close_menu() {
    set_menu_open(false)
  }

  return { menu_open, toggle_menu, close_menu }
}
