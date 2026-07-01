import type { CSSProperties } from 'react'
import CarouselHeader from './CarouselHeader'
import useFullscreenCarousel from '../hooks/use_fullscreen_carousel'
import arrow_left from '../icons/arrow-left.svg'
import arrow_right from '../icons/arrow-right.svg'
import { slides } from '../slides/slide_registry'

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

function get_slide_style(offset: number, drag_offset: number, accent: string, accent_2: string) {
  const distance = Math.abs(offset)
  const x_position = offset * 84
  const z_position = distance * -330
  const scale = Math.max(0.72, 1 - distance * 0.115)
  const rotation = offset * -13 + drag_offset * -0.012
  const opacity = distance > 1 ? 0 : 1

  return {
    '--slide-accent': accent,
    '--slide-accent-2': accent_2,
    transform: `translate3d(calc(-50% + ${x_position}% + ${drag_offset}px), -50%, ${z_position}px) rotateY(${rotation}deg) scale(${scale})`,
    opacity,
    zIndex: 30 - distance,
    pointerEvents: distance <= 1 ? 'auto' : 'none',
  } as CSSProperties
}

export default function FullscreenCarousel() {
  const { active_index, drag_offset, is_dragging, move, go_to, on_pointer_down, on_pointer_move, on_pointer_up } = useFullscreenCarousel(slides.length)
  const active_slide = slides[active_index]

  return (
    <main className='fullscreen-portfolio' style={{ '--active-accent': active_slide.accent, '--active-accent-2': active_slide.accent_2 } as CSSProperties}>
      <CarouselHeader active_index={active_index} on_home={() => go_to(0)} on_projects={() => go_to(1)} />

      <section
        className={`fullscreen-carousel ${is_dragging ? 'is-dragging' : ''}`}
        aria-label='Portfolio slideshow'
        onPointerDown={on_pointer_down}
        onPointerMove={on_pointer_move}
        onPointerUp={on_pointer_up}
        onPointerCancel={on_pointer_up}
      >
        <div className='fullscreen-track'>
          {slides.map((slide, index) => {
            const offset = get_slide_offset(index, active_index, slides.length)
            const distance = Math.abs(offset)
            const is_active = index === active_index
            const SlideComponent = slide.component

            return (
              <article
                key={slide.id}
                className={`fullscreen-slide ${slide.class_name} ${is_active ? 'is-active' : ''}`}
                style={get_slide_style(offset, drag_offset, slide.accent, slide.accent_2)}
                aria-hidden={!is_active}
                onClick={() => distance === 1 && go_to(index)}
              >
                <SlideComponent active={is_active} />
                <div className='slide-counter' aria-hidden='true'>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <i />
                  <span>{String(slides.length).padStart(2, '0')}</span>
                </div>
              </article>
            )
          })}
        </div>

        <button className='carousel-control carousel-control-left' type='button' onClick={event => { event.stopPropagation(); move(-1) }} aria-label='Previous slide'>
          <img src={arrow_left} alt='' />
        </button>

        <button className='carousel-control carousel-control-right' type='button' onClick={event => { event.stopPropagation(); move(1) }} aria-label='Next slide'>
          <img src={arrow_right} alt='' />
        </button>

        <div className='fullscreen-dots' aria-label='Choose slide'>
          {slides.map((slide, index) => (
            <button key={slide.id} className={index === active_index ? 'is-active' : ''} type='button' onClick={event => { event.stopPropagation(); go_to(index) }} aria-label={`Open ${slide.title}`} />
          ))}
        </div>
      </section>
    </main>
  )
}
