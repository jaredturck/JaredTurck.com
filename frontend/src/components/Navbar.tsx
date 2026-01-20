import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className='sticky top-4 z-50 px-4'>
      <nav className='mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-ui border border-line/40 bg-gradient-to-b from-surface/70 via-surface-2/55 to-surface/45 px-4 py-3 backdrop-blur-xl shadow-2xl'>
        <NavLink to='/' end className='flex items-center gap-3'>
          <div className='grid h-10 w-10 place-items-center rounded-ui border border-line/40 bg-accent/10 font-semibold text-text'>JT</div>
          <span className='hidden sm:block text-sm font-semibold tracking-wide text-text'>Jared Turck</span>
        </NavLink>

        <div className='hidden md:flex items-center gap-6 text-sm'>
          <Link to='/#anyhjs' className='text-muted hover:text-text border-b border-transparent hover:border-accent/80 transition-colors'>AnyHJS</Link>
          <Link to='/#titusai' className='text-muted hover:text-text border-b border-transparent hover:border-accent/80 transition-colors'>Titus AI</Link>
          <Link to='/#jaredcalc' className='text-muted hover:text-text border-b border-transparent hover:border-accent/80 transition-colors'>JaredCalc</Link>
          <Link to='/#tkdraw' className='text-muted hover:text-text border-b border-transparent hover:border-accent/80 transition-colors'>TkDraw</Link>
          <Link to='/#fisherai' className='text-muted hover:text-text border-b border-transparent hover:border-accent/80 transition-colors'>Fisher AI</Link>
          <Link to='/#enja' className='text-muted hover:text-text border-b border-transparent hover:border-accent/80 transition-colors'>EN-JA</Link>
        </div>

        <Link to='/#contact' className='inline-flex items-center justify-center rounded-ui bg-accent/90 hover:bg-accent px-4 py-2 text-sm font-semibold text-bg border border-line/30 transition-colors'>Contact</Link>
      </nav>
    </header>
  )
}
