import anyhjs_img1 from '../imgs/anyhjs_img1.png'
import anyhjs_img2 from '../imgs/anyhjs_img2.png'
import anyhjs_img3 from '../imgs/anyhjs_img3.png'
import anyhjs_img4 from '../imgs/anyhjs_img4.png'
import anyhjs_img5 from '../imgs/anyhjs_img5.png'
import anyhjs_img6 from '../imgs/anyhjs_img6.png'
import anyhjs_logo from '../imgs/anyhjs_logo.png'
import useAnyhjsShowcase from '../hooks/use_anyhjs_showcase'
import type { SlideProps } from './SlideShared'
import { ActionLink, ExternalArrow } from './SlideShared'

const images = [anyhjs_img1, anyhjs_img2, anyhjs_img3, anyhjs_img4, anyhjs_img5, anyhjs_img6]

export default function AnyHjsSlide({ active }: SlideProps) {
  const { image_index, set_image_index } = useAnyhjsShowcase(active, images.length)

  return (
    <div className={`slide-canvas anyhjs-slide ${active ? 'is-content-active' : ''}`}>
      <img className='anyhjs-background raw-image' src={images[image_index]} alt='AnyHJS website preview' draggable='false' />
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
          <a className='anyhjs-text-link' href='https://github.com/jaredturck/AnyHJS' target='_blank' rel='noreferrer'>GitHub <ExternalArrow /></a>
        </div>
      </section>
      <div className='anyhjs-filmstrip' aria-label='AnyHJS screenshots'>
        {images.map((image, index) => (
          <button key={image} className={index === image_index ? 'is-active' : ''} type='button' onClick={() => set_image_index(index)} aria-label={`Show AnyHJS screenshot ${index + 1}`}>
            <img src={image} alt='' />
          </button>
        ))}
      </div>
      <div className='anyhjs-edition'>COLLECTION / {String(image_index + 1).padStart(2, '0')}</div>
    </div>
  )
}
