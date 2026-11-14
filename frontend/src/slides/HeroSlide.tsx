import hero_image from '../imgs/hero_section.avif'
import type { SlideProps } from './SlideShared'

export default function HeroSlide({ active, on_projects }: SlideProps) {
  return (
    <div className={`slide-canvas hero-slide ${active ? 'is-content-active' : ''}`}>
      <img className='hero-image raw-image' src={hero_image} alt='' draggable='false' />
      <div className='hero-copy glass-local'>
        <div className='hero-kicker'><span>AI PORTFOLIO</span><i>•</i><b>FULL STACK + ML</b></div>
        <h1>Jared Turck</h1>
        <p>Senior full stack developer focused on AI-powered products, scalable backends, and clean, modern UI.</p>
        <div className='hero-tags'>
          <span>Python</span>
          <span>React</span>
          <span>TypeScript</span>
          <span>Django</span>
          <span>Django REST</span>
          <span>PyTorch</span>
          <span>NumPy</span>
          <span>Hugging Face</span>
          <span>PostgreSQL</span>
          <span>Docker</span>
          <span>Linux</span>
        </div>
        <button className='hero-project-button' type='button' onClick={on_projects}>View projects <b>→</b></button>
      </div>
      <div className='hero-caption'>Building useful AI products from model to interface.</div>
    </div>
  )
}
