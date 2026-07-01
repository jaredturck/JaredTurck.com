import tkdraw_image from '../imgs/tkdraw_image1.png'
import type { SlideProps } from './SlideShared'
import { ActionLink, ProjectBadge, WindowBar } from './SlideShared'

export default function TkDrawSlide({ active }: SlideProps) {
  return (
    <div className={`slide-canvas tkdraw-slide ${active ? 'is-content-active' : ''}`}>
      <svg className='tkdraw-guide-lines' viewBox='0 0 1000 600' aria-hidden='true'>
        <path d='M40 520 320 170 570 445 840 80' />
        <path d='M120 80 280 250 670 170 940 420' />
        <circle cx='320' cy='170' r='8' /><circle cx='570' cy='445' r='8' /><circle cx='840' cy='80' r='8' />
      </svg>
      <section className='tkdraw-palette'>
        <ProjectBadge mark='TK' label='TKDRAW' accent='#b7ff4a' />
        <h2>TkDraw</h2>
        <p>A Tkinter-powered vector drawing app built from scratch: shapes, colour picker, grid toggle, pan/zoom navigation, and export as Tkinter code.</p>
        <div className='tkdraw-tools'><span>Tkinter</span><span>Vector tools</span><span>Pan + zoom</span><span>Undo</span><span>Export code</span></div>
        <div className='tkdraw-controls'>
          <b>CONTROLS</b>
          <div><span><kbd>Ctrl</kbd> + click · select vertices</span><span><kbd>Ctrl</kbd> + <kbd>Z</kbd> · undo</span><span><kbd>[</kbd> / <kbd>]</kbd> · line width</span><span>drag pan · wheel zoom</span></div>
        </div>
        <ActionLink href='https://github.com/jaredturck/tk-draw' className='tkdraw-link'>GitHub</ActionLink>
      </section>
      <section className='tkdraw-window'>
        <WindowBar label='TkDraw — Drawing Window' />
        <img className='raw-image' src={tkdraw_image} alt='TkDraw drawing application' />
        <footer><span><i /> TkDraw v1.0</span><b>Vector editor · Tkinter · Python</b></footer>
      </section>
    </div>
  )
}
