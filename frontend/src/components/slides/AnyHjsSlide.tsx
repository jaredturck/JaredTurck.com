import { useState } from 'react'
import anyhjs_img1 from '../../images/anyhjs_img1.avif'
import anyhjs_img2 from '../../images/anyhjs_img2.avif'
import anyhjs_img3 from '../../images/anyhjs_img3.avif'
import anyhjs_img4 from '../../images/anyhjs_img4.avif'
import anyhjs_img5 from '../../images/anyhjs_img5.avif'
import anyhjs_img6 from '../../images/anyhjs_img6.avif'
import anyhjs_logo from '../../images/anyhjs_logo.webp'
import type { SlideProps } from './SlideShared'
import { ActionLink, ExternalArrow } from './SlideShared'

function ScreenshotButton(props: { image: string; number: number; active: boolean; on_select: () => void }) {
  return (
    <button className={props.active ? 'is-active' : ''} type='button' onClick={props.on_select} aria-label={`Show AnyHJS screenshot ${props.number}`}>
      <img src={props.image} alt='' />
    </button>
  )
}

export default function AnyHjsSlide({ active }: SlideProps) {
  const [screenshot, set_screenshot] = useState({ image: anyhjs_img1, number: 1 })

  return (
    <div className={`slide-canvas anyhjs-slide ${active ? 'is-content-active' : ''}`}>
      <img className='anyhjs-background raw-image' src={screenshot.image} alt='AnyHJS website preview' draggable='false' />
      <div className='anyhjs-masthead'>
        <img src={anyhjs_logo} alt='' />
        <span>ANYHJS / EDITORIAL COMMERCE</span>
      </div>
      <section className='anyhjs-copy'>
        <p>AI FASHION MARKETPLACE</p>
        <h2>AnyHJS</h2>
        <blockquote>Outfit inspiration becomes instantly shoppable looks across brands.</blockquote>
        <div className='anyhjs-actions'>
          <ActionLink href='https://anyhjs.co.uk/' className='anyhjs-primary'>Visit site</ActionLink>
          <a className='anyhjs-text-link' href='https://github.com/jaredturck/AnyHJS' target='_blank' rel='noreferrer'>
            GitHub <ExternalArrow />
          </a>
        </div>
      </section>
      <div className='anyhjs-filmstrip' aria-label='AnyHJS screenshots'>
        <ScreenshotButton image={anyhjs_img1} number={1} active={screenshot.image === anyhjs_img1} on_select={() => set_screenshot({ image: anyhjs_img1, number: 1 })} />
        <ScreenshotButton image={anyhjs_img2} number={2} active={screenshot.image === anyhjs_img2} on_select={() => set_screenshot({ image: anyhjs_img2, number: 2 })} />
        <ScreenshotButton image={anyhjs_img3} number={3} active={screenshot.image === anyhjs_img3} on_select={() => set_screenshot({ image: anyhjs_img3, number: 3 })} />
        <ScreenshotButton image={anyhjs_img4} number={4} active={screenshot.image === anyhjs_img4} on_select={() => set_screenshot({ image: anyhjs_img4, number: 4 })} />
        <ScreenshotButton image={anyhjs_img5} number={5} active={screenshot.image === anyhjs_img5} on_select={() => set_screenshot({ image: anyhjs_img5, number: 5 })} />
        <ScreenshotButton image={anyhjs_img6} number={6} active={screenshot.image === anyhjs_img6} on_select={() => set_screenshot({ image: anyhjs_img6, number: 6 })} />
      </div>
      <div className='anyhjs-edition'>COLLECTION / {String(screenshot.number).padStart(2, '0')}</div>
    </div>
  )
}
