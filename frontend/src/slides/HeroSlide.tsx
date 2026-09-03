import { lazy, Suspense, useState } from 'react'
import hero_image from '../imgs/hero_section.png'
import type { SlideProps } from './SlideShared'
import '../styles/contact_modal.css'

const ContactModal = lazy(() => import('../components/ContactModal'))
const hero_tags = ['Python', 'React', 'TypeScript', 'Django', 'Django REST', 'PyTorch', 'NumPy', 'Hugging Face', 'PostgreSQL', 'Docker', 'Linux']

export default function HeroSlide({ active }: SlideProps) {
  const [contact_open, set_contact_open] = useState(false)

  return (
    <div className={`slide-canvas hero-slide ${active ? 'is-content-active' : ''}`}>
      <img className='hero-image raw-image' src={hero_image} alt='' draggable='false' />
      <div className='hero-copy glass-local'>
        <div className='hero-kicker'><span>AI PORTFOLIO</span><i>•</i><b>FULL STACK + ML</b></div>
        <h1>Jared Turck</h1>
        <p>Senior full stack developer focused on AI-powered products, scalable backends, and clean, modern UI.</p>
        <div className='hero-tags'>{hero_tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        <div className='hero-actions'>
          <button className='hero-project-button' type='button' onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight' }))}>View projects <b>→</b></button>
          <button className='hero-contact-button' type='button' onClick={() => set_contact_open(true)}>Contact</button>
        </div>
      </div>
      <div className='hero-caption'>Building useful AI products from model to interface.</div>
      {contact_open && active && <Suspense fallback={null}><ContactModal on_close={() => set_contact_open(false)} /></Suspense>}
    </div>
  )
}
