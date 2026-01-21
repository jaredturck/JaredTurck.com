import { NavLink } from 'react-router-dom'
import use_nav_menu from '../hooks/UseNavMenu'
import use_scroll_to_section from '../hooks/UseScrollToSection'

export default function Navbar() {
  const { menu_open, toggle_menu, close_menu } = use_nav_menu()
  const { scroll_to } = use_scroll_to_section()

  return (
    <header className='fixed top-4 left-0 right-0 z-50 px-4'>
      <div className='mx-auto max-w-6xl'>
        <nav className='flex items-center justify-between gap-4 rounded-ui border border-line/40 bg-gradient-to-b from-surface/70 via-surface-2/55 to-surface/45 px-4 py-3 backdrop-blur-xl shadow-2xl'>
          <NavLink to='/' end className='flex items-center gap-3'>
            <div className='grid h-10 w-10 place-items-center rounded-ui border border-line/40 bg-accent/10 font-semibold text-text'>JT</div>
            <span className='hidden sm:block text-sm font-semibold tracking-wide text-text'>Jared Turck</span>
          </NavLink>

          <div className='hidden md:flex items-center gap-6 text-sm'>
            <button type='button' onClick={() => scroll_to('anyhjs')} className='text-muted hover:text-text border-b border-transparent hover:border-accent/80 transition-colors'>AnyHJS</button>
            <button type='button' onClick={() => scroll_to('titusai')} className='text-muted hover:text-text border-b border-transparent hover:border-accent/80 transition-colors'>Titus AI</button>
            <button type='button' onClick={() => scroll_to('jaredcalc')} className='text-muted hover:text-text border-b border-transparent hover:border-accent/80 transition-colors'>JaredCalc</button>
            <button type='button' onClick={() => scroll_to('tkdraw')} className='text-muted hover:text-text border-b border-transparent hover:border-accent/80 transition-colors'>TkDraw</button>
            <button type='button' onClick={() => scroll_to('fisherai')} className='text-muted hover:text-text border-b border-transparent hover:border-accent/80 transition-colors'>Fisher AI</button>
            <button type='button' onClick={() => scroll_to('enja')} className='text-muted hover:text-text border-b border-transparent hover:border-accent/80 transition-colors'>EN-JA</button>
          </div>

          <a href='https://www.linkedin.com/in/jared-turck-655855162/' target='_blank' rel='noreferrer' className='hidden md:inline-flex items-center justify-center rounded-ui bg-accent/90 hover:bg-accent px-4 py-2 text-sm font-semibold text-bg border border-line/30 transition-colors'>Contact</a>

          <button type='button' aria-label='Menu' aria-expanded={menu_open} onClick={toggle_menu} className='md:hidden inline-flex items-center justify-center rounded-ui border border-line/40 bg-surface/30 hover:bg-surface/40 px-3 py-2 text-text backdrop-blur-xl transition-colors'>
            {!menu_open && (
              <svg className='h-5 w-5' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round'>
                <path d='M4 6h16' />
                <path d='M4 12h16' />
                <path d='M4 18h16' />
              </svg>
            )}
            {menu_open && (
              <svg className='h-5 w-5' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round'>
                <path d='M6 6l12 12' />
                <path d='M18 6l-12 12' />
              </svg>
            )}
          </button>
        </nav>

        {menu_open && (
          <div className='mt-2 md:hidden rounded-ui border border-line/40 bg-gradient-to-b from-surface/70 via-surface-2/55 to-surface/45 backdrop-blur-xl shadow-2xl overflow-hidden'>
            <div className='flex flex-col text-sm'>
              <button type='button' onClick={() => { scroll_to('anyhjs'); close_menu() }} className='px-4 py-3 text-left text-muted hover:text-text hover:bg-surface/25 transition-colors border-b border-line/30'>AnyHJS</button>
              <button type='button' onClick={() => { scroll_to('titusai'); close_menu() }} className='px-4 py-3 text-left text-muted hover:text-text hover:bg-surface/25 transition-colors border-b border-line/30'>Titus AI</button>
              <button type='button' onClick={() => { scroll_to('jaredcalc'); close_menu() }} className='px-4 py-3 text-left text-muted hover:text-text hover:bg-surface/25 transition-colors border-b border-line/30'>JaredCalc</button>
              <button type='button' onClick={() => { scroll_to('tkdraw'); close_menu() }} className='px-4 py-3 text-left text-muted hover:text-text hover:bg-surface/25 transition-colors border-b border-line/30'>TkDraw</button>
              <button type='button' onClick={() => { scroll_to('fisherai'); close_menu() }} className='px-4 py-3 text-left text-muted hover:text-text hover:bg-surface/25 transition-colors border-b border-line/30'>Fisher AI</button>
              <button type='button' onClick={() => { scroll_to('enja'); close_menu() }} className='px-4 py-3 text-left text-muted hover:text-text hover:bg-surface/25 transition-colors border-b border-line/30'>EN-JA</button>
              <a href='https://www.linkedin.com/in/jared-turck-655855162/' target='_blank' rel='noreferrer' onClick={close_menu} className='px-4 py-3 text-left font-semibold text-bg bg-accent/90 hover:bg-accent transition-colors'>LinkedIn</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
