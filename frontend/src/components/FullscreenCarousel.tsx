import type { ComponentType, CSSProperties } from 'react'
import CarouselHeader from './CarouselHeader'
import useFullscreenCarousel from '../hooks/use_fullscreen_carousel'
import arrow_left from '../images/arrow-left.svg'
import arrow_right from '../images/arrow-right.svg'
import type { SlideProps } from './slides/SlideShared'
import HeroSlide from './slides/HeroSlide'
import EkhayaSlide from './slides/EkhayaSlide'
import GeoidPmSlide from './slides/GeoidPmSlide'
import AnyHjsSlide from './slides/AnyHjsSlide'
import TitusAiSlide from './slides/TitusAiSlide'
import JaredCalcSlide from './slides/JaredCalcSlide'
import TkDrawSlide from './slides/TkDrawSlide'
import FisherAiSlide from './slides/FisherAiSlide'
import NeuralNetSlide from './slides/NeuralNetSlide'
import EnJaSlide from './slides/EnJaSlide'
import SpellingSlide from './slides/SpellingSlide'
import ExpertiseSlide from './slides/ExpertiseSlide'
import ProcessSlide from './slides/ProcessSlide'
import TechnologiesSlide from './slides/TechnologiesSlide'
import ContactSlide from './slides/ContactSlide'

const slide_count = 15

function get_slide_offset(index: number, active_index: number, slide_count: number) {
  const offset = index - active_index
  return offset - Math.sign(offset) * slide_count * Number(Math.abs(offset) > slide_count / 2)
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

function CarouselSlide(props: { index: number; component: ComponentType<SlideProps>; carousel: ReturnType<typeof useFullscreenCarousel> }) {
  const offset = get_slide_offset(props.index, props.carousel.active_index, slide_count)
  const distance = Math.abs(offset)
  const is_active = props.index === props.carousel.active_index

  return (
    <article className={`fullscreen-slide ${is_active ? 'is-active' : ''}`} style={get_slide_style(offset, props.carousel.drag_offset)} aria-hidden={!is_active} onClick={() => distance === 1 && props.carousel.go_to(props.index)}>
      <props.component active={is_active} on_projects={() => props.carousel.go_to(1)} />
      <div className='slide-counter' aria-hidden='true'>
        <span>{String(props.index + 1).padStart(2, '0')}</span>
        <i />
        <span>{String(slide_count).padStart(2, '0')}</span>
      </div>
    </article>
  )
}

export default function FullscreenCarousel() {
  const carousel = useFullscreenCarousel(slide_count)

  return (
    <main className='fullscreen-portfolio'>
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
          <CarouselSlide index={0} component={HeroSlide} carousel={carousel} />
          <CarouselSlide index={1} component={EkhayaSlide} carousel={carousel} />
          <CarouselSlide index={2} component={GeoidPmSlide} carousel={carousel} />
          <CarouselSlide index={3} component={AnyHjsSlide} carousel={carousel} />
          <CarouselSlide index={4} component={TitusAiSlide} carousel={carousel} />
          <CarouselSlide index={5} component={JaredCalcSlide} carousel={carousel} />
          <CarouselSlide index={6} component={TkDrawSlide} carousel={carousel} />
          <CarouselSlide index={7} component={FisherAiSlide} carousel={carousel} />
          <CarouselSlide index={8} component={NeuralNetSlide} carousel={carousel} />
          <CarouselSlide index={9} component={EnJaSlide} carousel={carousel} />
          <CarouselSlide index={10} component={SpellingSlide} carousel={carousel} />
          <CarouselSlide index={11} component={ExpertiseSlide} carousel={carousel} />
          <CarouselSlide index={12} component={ProcessSlide} carousel={carousel} />
          <CarouselSlide index={13} component={TechnologiesSlide} carousel={carousel} />
          <CarouselSlide index={14} component={ContactSlide} carousel={carousel} />
        </div>

        <button className='carousel-control carousel-control-left' type='button' onClick={event => { event.stopPropagation(); carousel.move(-1) }} aria-label='Previous slide'>
          <img src={arrow_left} alt='' />
        </button>

        <button className='carousel-control carousel-control-right' type='button' onClick={event => { event.stopPropagation(); carousel.move(1) }} aria-label='Next slide'>
          <img src={arrow_right} alt='' />
        </button>

        <div className='fullscreen-dots'>
          {Array.from({ length: slide_count }, (_, index) => (
            <button key={index} className={carousel.active_index === index ? 'is-active' : ''} type='button' onClick={event => { event.stopPropagation(); carousel.go_to(index) }} />
          ))}
        </div>
      </section>
    </main>
  )
}
