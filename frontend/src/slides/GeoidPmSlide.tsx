import geoidpm_logo from '../imgs/geoidpm_logo.png'
import geoidpm_screenshot from '../imgs/geoidpm_screenshot.png'
import type { SlideProps } from './SlideShared'
import { ActionLink, ProjectBadge } from './SlideShared'

export default function GeoidPmSlide({ active }: SlideProps) {
  return (
    <div className={`slide-canvas geoid-slide ${active ? 'is-content-active' : ''}`}>
      <img className='geoid-background raw-image' src={geoidpm_screenshot} alt='Geoid Project Management website' />
      <svg className='geoid-contours' viewBox='0 0 1200 800' aria-hidden='true'>
        <path d='M50 680C220 560 280 690 460 560s250-10 360-170 230-60 330-200' />
        <path d='M40 725c180-120 310 20 455-115s265-45 390-180 205-55 285-175' />
        <path d='M20 770c240-95 330 15 485-90s250-65 390-185 210-70 290-140' />
      </svg>
      <section className='geoid-legend'>
        <div className='geoid-brand-row'><img src={geoidpm_logo} alt='' /><ProjectBadge label='GEOID PM' accent='#27d5d0' /></div>
        <h2>Geoid Project<br />Management</h2>
        <p>Offshore survey management and permitting presented with clarity, trust, and services at a glance.</p>
        <ul><li>Permit acquisition</li><li>Cable landings + EEZ traverse</li><li>Cable route survey management</li><li>Site investigations</li><li>Stakeholder liaison</li></ul>
        <div className='geoid-actions'><ActionLink href='https://geoidpm.com/' className='geoid-primary'>Visit site</ActionLink><ActionLink href='https://github.com/jaredturck/GeoidPM'>GitHub</ActionLink></div>
      </section>
      <div className='geoid-coordinates'>50.9548° N · 1.3634° W <span>DEPTH / ROUTE / PERMIT</span></div>
    </div>
  )
}
