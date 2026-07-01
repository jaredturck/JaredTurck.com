import logo from '../imgs/logo.png'
import home_icon from '../icons/home.svg'
import projects_icon from '../icons/projects.svg'
import github_icon from '../icons/github.svg'

type CarouselHeaderProps = {
  active_index: number
  on_home: () => void
  on_projects: () => void
}

export default function CarouselHeader({ active_index, on_home, on_projects }: CarouselHeaderProps) {
  return (
    <header className='carousel-header'>
      <button className='carousel-brand' type='button' onClick={on_home} aria-label='Open introduction slide'>
        <img src={logo} alt='' />
        <span>Jared Turck</span>
      </button>

      <nav className='carousel-nav' aria-label='Primary navigation'>
        <button className={active_index === 0 ? 'is-active' : ''} type='button' onClick={on_home} aria-label='Home' data-tooltip='Home'>
          <img src={home_icon} alt='' />
        </button>
        <button className={active_index > 0 && active_index < 11 ? 'is-active' : ''} type='button' onClick={on_projects} aria-label='Projects' data-tooltip='Projects'>
          <img src={projects_icon} alt='' />
        </button>
        <a href='https://github.com/jaredturck' target='_blank' rel='noreferrer' aria-label='GitHub profile' data-tooltip='GitHub'>
          <img src={github_icon} alt='' />
        </a>
      </nav>
    </header>
  )
}
