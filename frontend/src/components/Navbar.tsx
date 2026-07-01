import useNavMenu from '../hooks/UseNavMenu'
import logo from '../imgs/logo.png'

type NavbarProps = {
  active_index: number
  on_home: () => void
  on_projects: () => void
}

export default function Navbar({ active_index, on_home, on_projects }: NavbarProps) {
  const { menu_open, toggle_menu, close_menu } = useNavMenu()

  function open_home() {
    on_home()
    close_menu()
  }

  function open_projects() {
    on_projects()
    close_menu()
  }

  return (
    <header className='carousel-header'>
      <button className='carousel-brand' type='button' onClick={open_home} aria-label='Open introduction slide'>
        <img src={logo} alt='' />
        <span>Jared Turck</span>
      </button>

      <nav className='carousel-nav' aria-label='Primary navigation'>
        <div className='carousel-nav-links'>
          <button className={active_index === 0 ? 'is-active' : ''} type='button' onClick={open_home}>Home</button>
          <button className={active_index > 0 ? 'is-active' : ''} type='button' onClick={open_projects}>Projects</button>
          <a href='https://github.com/jaredturck' target='_blank' rel='noreferrer'>GitHub</a>
          <a href='https://www.linkedin.com/in/jared-turck-655855162/' target='_blank' rel='noreferrer'>Contact</a>
        </div>

        <button className='carousel-menu-button' type='button' onClick={toggle_menu} aria-label='Toggle navigation' aria-expanded={menu_open}>
          <svg viewBox='0 0 24 24' aria-hidden='true'>
            {menu_open ? <path d='M6 6l12 12M18 6 6 18' /> : <path d='M4 7h16M4 12h16M4 17h16' />}
          </svg>
        </button>
      </nav>

      {menu_open && (
        <div className='carousel-mobile-menu'>
          <button type='button' onClick={open_home}>Home</button>
          <button type='button' onClick={open_projects}>Projects</button>
          <a href='https://github.com/jaredturck' target='_blank' rel='noreferrer'>GitHub</a>
          <a href='https://www.linkedin.com/in/jared-turck-655855162/' target='_blank' rel='noreferrer'>Contact</a>
        </div>
      )}
    </header>
  )
}
