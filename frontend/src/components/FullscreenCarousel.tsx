import type { ComponentType, CSSProperties } from 'react'
import CarouselHeader from './CarouselHeader'
import useFullscreenCarousel from '../hooks/use_fullscreen_carousel'
import arrow_left from '../icons/arrow-left.svg'
import arrow_right from '../icons/arrow-right.svg'
import type { SlideProps } from '../slides/SlideShared'
import HeroSlide from '../slides/HeroSlide'
import EkhayaSlide from '../slides/EkhayaSlide'
import GeoidPmSlide from '../slides/GeoidPmSlide'
import AnyHjsSlide from '../slides/AnyHjsSlide'
import TitusAiSlide from '../slides/TitusAiSlide'
import JaredCalcSlide from '../slides/JaredCalcSlide'
import TkDrawSlide from '../slides/TkDrawSlide'
import FisherAiSlide from '../slides/FisherAiSlide'
import NeuralNetSlide from '../slides/NeuralNetSlide'
import EnJaSlide from '../slides/EnJaSlide'
import SpellingSlide from '../slides/SpellingSlide'
import ExpertiseSlide from '../slides/ExpertiseSlide'
import ProcessSlide from '../slides/ProcessSlide'
import TechnologiesSlide from '../slides/TechnologiesSlide'
import ContactSlide from '../slides/ContactSlide'

const themes = [
  'theme-hero', 'theme-ekhaya', 'theme-geoid', 'theme-anyhjs', 'theme-titus',
  'theme-calculator', 'theme-tkdraw', 'theme-fisher', 'theme-neural', 'theme-enja',
  'theme-spelling', 'theme-expertise', 'theme-process', 'theme-technologies', 'theme-contact',
]

function get_slide_offset(index: number, active_index: number, slide_count: number) {
  let offset = index - active_index

  if (offset > slide_count / 2) {
    offset -= slide_count
  }

  if (offset < -slide_count / 2) {
    offset += slide_count
  }

  return offset
}

function get_slide_style(offset: number, drag_offset: number): CSSProperties {
  const distance = Math.abs(offset)
  const x_position = offset * 84
  const z_position = distance * -330
  const scale = Math.max(0.72, 1 - distance * 0.115)
  const rotation = offset * -13 + drag_offset * -0.012
  const opacity = distance > 1 ? 0 : 1

  return {
    transform: `translate3d(calc(-50% + ${x_position}% + ${drag_offset}px), -50%, ${z_position}px) rotateY(${rotation}deg) scale(${scale})`,
    opacity,
    zIndex: 30 - distance,
    pointerEvents: distance <= 1 ? 'auto' : 'none',
  }
}

function CarouselSlide(props: { index: number; className: string; component: ComponentType<SlideProps>; carousel: ReturnType<typeof useFullscreenCarousel> }) {
  const offset = get_slide_offset(props.index, props.carousel.active_index, themes.length)
  const distance = Math.abs(offset)
  const is_active = props.index === props.carousel.active_index

  return (
    <article className={`fullscreen-slide ${props.className} ${is_active ? 'is-active' : ''}`} style={get_slide_style(offset, props.carousel.drag_offset)} aria-hidden={!is_active} onClick={() => distance === 1 && props.carousel.go_to(props.index)}>
      <props.component active={is_active} on_projects={() => props.carousel.go_to(1)} />
      <div className='slide-counter' aria-hidden='true'>
        <span>{String(props.index + 1).padStart(2, '0')}</span>
        <i />
        <span>{String(themes.length).padStart(2, '0')}</span>
      </div>
    </article>
  )
}

export default function FullscreenCarousel() {
  const carousel = useFullscreenCarousel(themes.length)

  return (
    <main className={`fullscreen-portfolio ${themes[carousel.active_index]}`}>
      <CarouselHeader active_index={carousel.active_index} on_home={() => carousel.go_to(0)} on_projects={() => carousel.go_to(1)} />

      <section
        className={`fullscreen-carousel ${carousel.is_dragging ? 'is-dragging' : ''}`}
        aria-label='Portfolio slideshow'
        onPointerDown={carousel.on_pointer_down}
        onPointerMove={carousel.on_pointer_move}
        onPointerUp={carousel.on_pointer_up}
        onPointerCancel={carousel.on_pointer_cancel}
      >
        <div className='fullscreen-track'>
          <CarouselSlide index={0} className='theme-hero' component={HeroSlide} carousel={carousel} />
          <CarouselSlide index={1} className='theme-ekhaya' component={EkhayaSlide} carousel={carousel} />
          <CarouselSlide index={2} className='theme-geoid' component={GeoidPmSlide} carousel={carousel} />
          <CarouselSlide index={3} className='theme-anyhjs' component={AnyHjsSlide} carousel={carousel} />
          <CarouselSlide index={4} className='theme-titus' component={TitusAiSlide} carousel={carousel} />
          <CarouselSlide index={5} className='theme-calculator' component={JaredCalcSlide} carousel={carousel} />
          <CarouselSlide index={6} className='theme-tkdraw' component={TkDrawSlide} carousel={carousel} />
          <CarouselSlide index={7} className='theme-fisher' component={FisherAiSlide} carousel={carousel} />
          <CarouselSlide index={8} className='theme-neural' component={NeuralNetSlide} carousel={carousel} />
          <CarouselSlide index={9} className='theme-enja' component={EnJaSlide} carousel={carousel} />
          <CarouselSlide index={10} className='theme-spelling' component={SpellingSlide} carousel={carousel} />
          <CarouselSlide index={11} className='theme-expertise' component={ExpertiseSlide} carousel={carousel} />
          <CarouselSlide index={12} className='theme-process' component={ProcessSlide} carousel={carousel} />
          <CarouselSlide index={13} className='theme-technologies' component={TechnologiesSlide} carousel={carousel} />
          <CarouselSlide index={14} className='theme-contact' component={ContactSlide} carousel={carousel} />
        </div>

        <button className='carousel-control carousel-control-left' type='button' onClick={event => { event.stopPropagation(); carousel.move(-1) }} aria-label='Previous slide'>
          <img src={arrow_left} alt='' />
        </button>

        <button className='carousel-control carousel-control-right' type='button' onClick={event => { event.stopPropagation(); carousel.move(1) }} aria-label='Next slide'>
          <img src={arrow_right} alt='' />
        </button>

        <div className='fullscreen-dots' aria-label='Choose slide'>
          <button className={carousel.active_index === 0 ? 'is-active' : ''} type='button' onClick={event => { event.stopPropagation(); carousel.go_to(0) }} aria-label='Open Jared Turck' />
          <button className={carousel.active_index === 1 ? 'is-active' : ''} type='button' onClick={event => { event.stopPropagation(); carousel.go_to(1) }} aria-label='Open Ekhaya' />
          <button className={carousel.active_index === 2 ? 'is-active' : ''} type='button' onClick={event => { event.stopPropagation(); carousel.go_to(2) }} aria-label='Open Geoid Project Management' />
          <button className={carousel.active_index === 3 ? 'is-active' : ''} type='button' onClick={event => { event.stopPropagation(); carousel.go_to(3) }} aria-label='Open AnyHJS' />
          <button className={carousel.active_index === 4 ? 'is-active' : ''} type='button' onClick={event => { event.stopPropagation(); carousel.go_to(4) }} aria-label='Open Titus AI' />
          <button className={carousel.active_index === 5 ? 'is-active' : ''} type='button' onClick={event => { event.stopPropagation(); carousel.go_to(5) }} aria-label='Open JaredCalc' />
          <button className={carousel.active_index === 6 ? 'is-active' : ''} type='button' onClick={event => { event.stopPropagation(); carousel.go_to(6) }} aria-label='Open TkDraw' />
          <button className={carousel.active_index === 7 ? 'is-active' : ''} type='button' onClick={event => { event.stopPropagation(); carousel.go_to(7) }} aria-label='Open Fisher AI' />
          <button className={carousel.active_index === 8 ? 'is-active' : ''} type='button' onClick={event => { event.stopPropagation(); carousel.go_to(8) }} aria-label='Open Neural Net Linear' />
          <button className={carousel.active_index === 9 ? 'is-active' : ''} type='button' onClick={event => { event.stopPropagation(); carousel.go_to(9) }} aria-label='Open English to Japanese' />
          <button className={carousel.active_index === 10 ? 'is-active' : ''} type='button' onClick={event => { event.stopPropagation(); carousel.go_to(10) }} aria-label='Open Spelling Correction AI' />
          <button className={carousel.active_index === 11 ? 'is-active' : ''} type='button' onClick={event => { event.stopPropagation(); carousel.go_to(11) }} aria-label='Open Core expertise' />
          <button className={carousel.active_index === 12 ? 'is-active' : ''} type='button' onClick={event => { event.stopPropagation(); carousel.go_to(12) }} aria-label='Open How I work' />
          <button className={carousel.active_index === 13 ? 'is-active' : ''} type='button' onClick={event => { event.stopPropagation(); carousel.go_to(13) }} aria-label='Open Technologies I use' />
          <button className={carousel.active_index === 14 ? 'is-active' : ''} type='button' onClick={event => { event.stopPropagation(); carousel.go_to(14) }} aria-label='Open Let’s build something great' />
        </div>
      </section>
    </main>
  )
}
