import use_scroll_to_section from '../hooks/UseScrollToSection'

export default function Footer() {
  const { scroll_to, scroll_top } = use_scroll_to_section()

  return (
    <footer className='w-full border-t border-line/40 bg-black px-4 py-10'>
      <div className='mx-auto max-w-6xl'>
        <div className='flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between'>
          <div className='flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-text/80'>
            <button type='button' onClick={() => scroll_to('anyhjs')} className='hover:text-text transition-colors'>AnyHJS</button>
            <button type='button' onClick={() => scroll_to('titusai')} className='hover:text-text transition-colors'>Titus AI</button>
            <button type='button' onClick={() => scroll_to('jaredcalc')} className='hover:text-text transition-colors'>JaredCalc</button>
            <button type='button' onClick={() => scroll_to('tkdraw')} className='hover:text-text transition-colors'>TkDraw</button>
            <button type='button' onClick={() => scroll_to('fisherai')} className='hover:text-text transition-colors'>Fisher AI</button>
            <button type='button' onClick={() => scroll_to('neurallinear')} className='hover:text-text transition-colors'>Neural Net Linear</button>
            <button type='button' onClick={() => scroll_to('enja')} className='hover:text-text transition-colors'>EN→JA</button>
            <button type='button' onClick={() => scroll_to('spelling')} className='hover:text-text transition-colors'>Spelling</button>
          </div>

          <div className='flex flex-wrap items-center gap-3'>
            <a href='https://github.com/jaredturck' target='_blank' rel='noreferrer' className='inline-flex items-center justify-center rounded-ui border border-line/40 bg-surface/20 hover:bg-surface/30 px-4 py-2 text-sm font-extrabold leading-none text-text backdrop-blur-xl transition-colors'>
              GitHub
            </a>
            <button type='button' onClick={scroll_top} className='inline-flex items-center justify-center rounded-ui border border-line/40 bg-surface/20 hover:bg-surface/30 px-4 py-2 text-sm font-extrabold leading-none text-text backdrop-blur-xl transition-colors'>
              ↑ Top
            </button>
          </div>
        </div>

        <div className='mt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between'>
          <div className='text-xs font-semibold text-muted'>
            © 2026 Made by Jared Turck.
          </div>
          <div className='text-xs text-muted/80'>
            Built with React + TypeScript + Tailwind.
          </div>
        </div>
      </div>
    </footer>
  )
}
