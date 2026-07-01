import ekhaya_logo from '../imgs/ekhaya_logo.png'
import ekhaya_screenshot from '../imgs/ekhaya_screenshot.png'
import type { SlideProps } from './SlideShared'
import { ActionLink } from './SlideShared'

export default function EkhayaSlide({ active }: SlideProps) {
  return (
    <div className={`slide-canvas ekhaya-slide ${active ? 'is-content-active' : ''}`}>
      <img className='ekhaya-background raw-image' src={ekhaya_screenshot} alt='Ekhaya AI home discovery website' />
      <section className='ekhaya-search-card'>
        <header><img src={ekhaya_logo} alt='' /><div><span>AI HOME DISCOVERY</span><b>Ekhaya</b></div></header>
        <h2>Find a home that fits <em>your lifestyle.</em></h2>
        <p>Search live listings in plain English and let neural ranking surface the homes that fit best.</p>
        <div className='ekhaya-query'><span>“quiet area near a good school, three bedrooms, low crime”</span><button type='button'>⌕</button></div>
        <div className='ekhaya-features'><span>Neural ranking</span><span>Live crawler</span><span>Market-wide coverage</span></div>
        <div className='ekhaya-actions'><ActionLink href='https://ekhaya.uk/' className='ekhaya-primary'>Visit site</ActionLink><ActionLink href='https://github.com/jaredturck/Ekhaya'>GitHub</ActionLink></div>
      </section>
      <div className='ekhaya-map-pin pin-one'>⌂</div><div className='ekhaya-map-pin pin-two'>⌂</div><div className='ekhaya-map-pin pin-three'>⌂</div>
    </div>
  )
}
