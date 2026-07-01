import spelling_image from '../imgs/spelling_correction_image1.png'
import spelling_qwen_image from '../imgs/spelling_correction_qwen.png'
import type { SlideProps } from './SlideShared'
import { ActionLink, ProjectBadge, WindowBar } from './SlideShared'

export default function SpellingSlide({ active }: SlideProps) {
  return (
    <div className={`slide-canvas spelling-slide ${active ? 'is-content-active' : ''}`}>
      <div className='spelling-margin' />
      <section className='spelling-note'>
        <ProjectBadge mark='SC' label='SPELLING CORRECTION AI' accent='#ffd75c' />
        <h2>Spelling<br />Correction AI</h2>
        <p>An LSTM model trained to correct spelling mistakes, presented in a lightweight desktop GUI with clear markup-style feedback.</p>
        <div className='spelling-example'><del>recieve</del><span>→</span><ins>receive</ins></div>
        <div className='spelling-tags'><span>LSTM model</span><span>Character-level</span><span>GUI app</span><span>Highlights corrections</span></div>
        <ActionLink href='https://github.com/jaredturck/Spelling-Correction-AI' className='spelling-link'>GitHub</ActionLink>
      </section>
      <section className='spelling-window spelling-window-main'>
        <WindowBar label='Spelling Correction' />
        <img className='raw-image' src={spelling_image} alt='Spelling correction application' />
      </section>
      <section className='spelling-window spelling-window-qwen'>
        <WindowBar label='Qwen comparison' />
        <img className='raw-image' src={spelling_qwen_image} alt='Qwen spelling correction comparison' />
      </section>
      <div className='spelling-mark spelling-mark-one'>✓</div>
      <div className='spelling-mark spelling-mark-two'>Aa</div>
    </div>
  )
}
