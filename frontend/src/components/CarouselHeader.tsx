import icon from '../images/icon.webp'
import home_icon from '../images/home.svg'
import projects_icon from '../images/projects.svg'
import github_icon from '../images/github.svg'

export default function CarouselHeader(props: { active_index: number; on_home: () => void; on_projects: () => void }) {
  return (
    <header className='pointer-events-none fixed inset-x-11 top-12 z-50 flex items-center justify-between gap-4 xl:inset-x-20 max-md:inset-x-5 max-md:top-9'>
      <button className='pointer-events-auto inline-flex min-h-12 cursor-pointer items-center gap-3 rounded-2xl border border-white/15 bg-canvas/70 p-2 pr-4 text-sm font-extrabold text-white shadow-2xl backdrop-blur-lg hover:border-cyan/50 max-md:pr-2' type='button' onClick={props.on_home} aria-label='Open introduction slide'>
        <img className='size-10 rounded-xl border border-cyan/50 object-cover' src={icon} alt='' />
        <span className='max-md:hidden'>Jared Turck</span>
      </button>

      <nav className='pointer-events-auto flex items-center gap-1 rounded-2xl border border-white/15 bg-canvas/70 p-1.5 shadow-2xl backdrop-blur-lg' aria-label='Primary navigation'>
        <button className={`grid size-10 cursor-pointer place-items-center rounded-xl hover:bg-cyan/10 focus-visible:outline-2 focus-visible:outline-cyan ${props.active_index === 0 ? 'bg-cyan/10 ring-1 ring-cyan/40' : ''}`} type='button' onClick={props.on_home} aria-label='Home' title='Home'>
          <img className='size-5' src={home_icon} alt='' />
        </button>
        <button className={`grid size-10 cursor-pointer place-items-center rounded-xl hover:bg-cyan/10 focus-visible:outline-2 focus-visible:outline-cyan ${props.active_index > 0 && props.active_index < 11 ? 'bg-cyan/10 ring-1 ring-cyan/40' : ''}`} type='button' onClick={props.on_projects} aria-label='Projects' title='Projects'>
          <img className='size-5' src={projects_icon} alt='' />
        </button>
        <a className='grid size-10 place-items-center rounded-xl hover:bg-cyan/10 focus-visible:outline-2 focus-visible:outline-cyan' href='https://github.com/jaredturck' target='_blank' rel='noreferrer' aria-label='GitHub profile' title='GitHub'>
          <img className='size-5' src={github_icon} alt='' />
        </a>
      </nav>
    </header>
  )
}
