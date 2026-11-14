import icon from '../imgs/icon.webp'
import home_icon from '../icons/home.svg'
import projects_icon from '../icons/projects.svg'
import github_icon from '../icons/github.svg'

export default function CarouselHeader(props: { active_index: number; on_home: () => void; on_projects: () => void }) {
  return (
    <header className='carousel-header'>
      <button className='carousel-brand' type='button' onClick={props.on_home} aria-label='Open introduction slide'>
        <img src={icon} alt='' />
        <span>Jared Turck</span>
      </button>

      <nav className='carousel-nav' aria-label='Primary navigation'>
        <button className={props.active_index === 0 ? 'is-active' : ''} type='button' onClick={props.on_home} aria-label='Home' data-tooltip='Home'>
          <img src={home_icon} alt='' />
        </button>
        <button className={props.active_index > 0 && props.active_index < 11 ? 'is-active' : ''} type='button' onClick={props.on_projects} aria-label='Projects' data-tooltip='Projects'>
          <img src={projects_icon} alt='' />
        </button>
        <a href='https://github.com/jaredturck' target='_blank' rel='noreferrer' aria-label='GitHub profile' data-tooltip='GitHub'>
          <img src={github_icon} alt='' />
        </a>
      </nav>
    </header>
  )
}
