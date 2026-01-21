export default function use_scroll_to_section() {
  const scroll_to = (id: any) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const scroll_top = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return { scroll_to, scroll_top }
}
