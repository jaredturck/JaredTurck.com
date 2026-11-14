import { useState } from 'react'
import type { ComponentType, CSSProperties } from 'react'
import CarouselHeader from './CarouselHeader'
import arrow_left from '../images/arrow-left.svg'
import arrow_right from '../images/arrow-right.svg'
import type { SlideProps } from './slide_helpers'
import {
  HeroSlide,
  EkhayaSlide,
  GeoidPmSlide,
  AnyHjsSlide,
  TitusAiSlide,
  JaredCalcSlide,
  TkDrawSlide,
  FisherAiSlide,
  NeuralNetSlide,
  EnJaSlide,
  SpellingSlide,
  ExpertiseSlide,
  ProcessSlide,
  TechnologiesSlide,
  ContactSlide,
} from './slides'

const slide_count = 15

function get_slide_offset(index: number, active_index: number, slide_count: number) {
  const offset = index - active_index
  return offset - Math.sign(offset) * slide_count * Number(Math.abs(offset) > slide_count / 2)
}

function get_slide_style(offset: number): CSSProperties {
  const distance = Math.abs(offset)
  const x_position = offset * 84
  const z_position = distance * -330
  const scale = Math.max(0.72, 1 - distance * 0.115)
  const rotation = offset * -13
  const opacity = distance > 1 ? 0 : 1

  return {
    transform: `translate3d(calc(-50% + ${x_position}%), -50%, ${z_position}px) rotateY(${rotation}deg) scale(${scale})`,
    opacity,
    zIndex: 30 - distance,
    pointerEvents: distance <= 1 ? 'auto' : 'none',
  }
}

function CarouselSlide(props: { index: number; component: ComponentType<SlideProps>; active_index: number; on_select: (index: number) => void }) {
  const offset = get_slide_offset(props.index, props.active_index, slide_count)
  const distance = Math.abs(offset)
  const is_active = props.index === props.active_index

  return (
    <article className={`absolute left-1/2 top-1/2 h-11/12 w-15/16 origin-center overflow-hidden rounded-3xl border bg-surface shadow-2xl shadow-black/70 transform-3d transition-all duration-700 ease-out motion-reduce:transition-none xl:w-10/11 max-md:h-15/16 max-md:w-23/24 ${is_active ? 'border-cyan/60' : 'border-cyan/40'}`} style={get_slide_style(offset)} aria-hidden={!is_active} onClick={() => distance === 1 && props.on_select(props.index)}>
      <props.component active={is_active} on_projects={() => props.on_select(1)} />
      <div className='pointer-events-none absolute left-11 top-24 z-40 flex items-center gap-3 text-xs font-bold tracking-widest text-white/60 max-md:left-5 max-md:top-20 max-sm:hidden' aria-hidden='true'>
        <span>{String(props.index + 1).padStart(2, '0')}</span>
        <i className='h-px w-9 bg-linear-to-r from-cyan to-transparent' />
        <span>{String(slide_count).padStart(2, '0')}</span>
      </div>
    </article>
  )
}

export default function FullscreenCarousel() {
  const [active_index, set_active_index] = useState(0)

  return (
    <main className='relative isolate h-dvh w-full overflow-hidden bg-canvas bg-linear-to-br from-cyan/10 via-transparent to-teal/10 font-sans text-white scheme-dark'>
      <svg className='pointer-events-none absolute inset-0 -z-10 h-full w-full stroke-white/2' aria-hidden='true'>
        <defs>
          <pattern id='portfolio-grid' width='64' height='64' patternUnits='userSpaceOnUse'>
            <path d='M64 0H0V64' fill='none' />
          </pattern>
        </defs>
        <rect width='100%' height='100%' fill='url(#portfolio-grid)' />
      </svg>
      <CarouselHeader active_index={active_index} on_home={() => set_active_index(0)} on_projects={() => set_active_index(1)} />

      <section className='relative h-dvh w-full overflow-hidden perspective-distant perspective-origin-center' aria-label='Portfolio slideshow'>
        <div className='absolute inset-0 transform-3d'>
          <CarouselSlide index={0} component={HeroSlide} active_index={active_index} on_select={set_active_index} />
          <CarouselSlide index={1} component={EkhayaSlide} active_index={active_index} on_select={set_active_index} />
          <CarouselSlide index={2} component={GeoidPmSlide} active_index={active_index} on_select={set_active_index} />
          <CarouselSlide index={3} component={AnyHjsSlide} active_index={active_index} on_select={set_active_index} />
          <CarouselSlide index={4} component={TitusAiSlide} active_index={active_index} on_select={set_active_index} />
          <CarouselSlide index={5} component={JaredCalcSlide} active_index={active_index} on_select={set_active_index} />
          <CarouselSlide index={6} component={TkDrawSlide} active_index={active_index} on_select={set_active_index} />
          <CarouselSlide index={7} component={FisherAiSlide} active_index={active_index} on_select={set_active_index} />
          <CarouselSlide index={8} component={NeuralNetSlide} active_index={active_index} on_select={set_active_index} />
          <CarouselSlide index={9} component={EnJaSlide} active_index={active_index} on_select={set_active_index} />
          <CarouselSlide index={10} component={SpellingSlide} active_index={active_index} on_select={set_active_index} />
          <CarouselSlide index={11} component={ExpertiseSlide} active_index={active_index} on_select={set_active_index} />
          <CarouselSlide index={12} component={ProcessSlide} active_index={active_index} on_select={set_active_index} />
          <CarouselSlide index={13} component={TechnologiesSlide} active_index={active_index} on_select={set_active_index} />
          <CarouselSlide index={14} component={ContactSlide} active_index={active_index} on_select={set_active_index} />
        </div>

        <button className='fixed left-1 top-1/2 z-50 grid size-14 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-white/25 bg-canvas/55 shadow-lg backdrop-blur-sm transition-colors hover:border-white/45 hover:bg-canvas/80 focus-visible:outline-2 focus-visible:outline-cyan max-md:size-12 max-sm:mt-8' type='button' onClick={() => set_active_index(index => (index - 1 + slide_count) % slide_count)} aria-label='Previous slide'>
          <img className='size-9' src={arrow_left} alt='' />
        </button>

        <button className='fixed right-1 top-1/2 z-50 grid size-14 -translate-y-1/2 cursor-pointer place-items-center rounded-full border border-white/25 bg-canvas/55 shadow-lg backdrop-blur-sm transition-colors hover:border-white/45 hover:bg-canvas/80 focus-visible:outline-2 focus-visible:outline-cyan max-md:size-12 max-sm:mt-8' type='button' onClick={() => set_active_index(index => (index + 1) % slide_count)} aria-label='Next slide'>
          <img className='size-9' src={arrow_right} alt='' />
        </button>

        <div className='fixed bottom-10 left-1/2 z-50 flex max-w-full -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/10 bg-canvas/70 px-2 py-1.5 shadow-xl backdrop-blur-lg max-md:bottom-8 max-md:gap-1'>
          {Array.from({ length: slide_count }, (_, index) => (
            <button key={index} className={`h-2 shrink-0 cursor-pointer rounded-full transition-all duration-200 motion-reduce:transition-none max-md:h-1.5 ${active_index === index ? 'w-8 bg-cyan shadow-sm shadow-cyan/50 max-md:w-6' : 'w-2 bg-white/30 hover:bg-white/60 max-md:w-1.5'}`} type='button' onClick={() => set_active_index(index)} />
          ))}
        </div>
      </section>
    </main>
  )
}
