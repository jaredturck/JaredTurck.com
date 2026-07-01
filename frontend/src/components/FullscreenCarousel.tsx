import type { CSSProperties } from 'react'
import Navbar from './Navbar'
import useFullscreenCarousel from '../hooks/UseFullscreenCarousel'
import { slides } from '../data/slides'

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

function get_slide_style(offset: number, drag_offset: number, accent: string, image_position: string, image_scale: number) {
  const distance = Math.abs(offset)
  const x_position = offset * 86
  const z_position = distance * -290
  const scale = Math.max(0.7, 1 - distance * 0.12)
  const rotation = offset * -12 + drag_offset * -0.012
  const opacity = distance > 2 ? 0 : Math.max(0.16, 1 - distance * 0.34)

  return {
    '--slide-accent': accent,
    '--image-position': image_position,
    '--image-scale': image_scale,
    transform: `translate3d(calc(-50% + ${x_position}% + ${drag_offset}px), -50%, ${z_position}px) rotateY(${rotation}deg) scale(${scale})`,
    opacity,
    zIndex: 20 - distance,
    pointerEvents: distance <= 1 ? 'auto' : 'none',
  } as CSSProperties
}

function ExternalIcon() {
  return (
    <svg viewBox='0 0 24 24' aria-hidden='true'>
      <path d='M8 16 16 8M10 8h6v6' />
    </svg>
  )
}

function ArrowIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg viewBox='0 0 24 24' aria-hidden='true'>
      {direction === 'left' ? <path d='m15 18-6-6 6-6' /> : <path d='m9 18 6-6-6-6' />}
    </svg>
  )
}

export default function FullscreenCarousel() {
  const { active_index, drag_offset, is_dragging, move, go_to, on_pointer_down, on_pointer_move, on_pointer_up } = useFullscreenCarousel(slides.length)
  const active_slide = slides[active_index]

  return (
    <main className='fullscreen-portfolio' style={{ '--active-accent': active_slide.accent } as CSSProperties}>
      <Navbar active_index={active_index} on_home={() => go_to(0)} on_projects={() => go_to(1)} />

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

            return (
              <article
                key={slide.id}
                className={`fullscreen-slide ${slide.type === 'hero' ? 'slide-hero' : 'slide-project'} ${is_active ? 'is-active' : ''}`}
                style={get_slide_style(offset, drag_offset, slide.accent, slide.image_position, slide.image_scale)}
                aria-hidden={!is_active}
                onClick={() => distance === 1 && go_to(index)}
              >
                <img className='slide-background' src={slide.image} alt='' draggable='false' loading={distance > 1 ? 'lazy' : 'eager'} />
                <div className='slide-image-wash' aria-hidden='true' />
                <div className='slide-edge-shade' aria-hidden='true' />
                <div className='slide-accent-glow' aria-hidden='true' />

                <div className='slide-copy-panel'>
                  <p className='slide-eyebrow'>{slide.eyebrow}</p>
                  <h1>{slide.title}</h1>
                  <p className='slide-description'>{slide.description}</p>

                  <div className='slide-tags' aria-label='Technologies'>
                    {slide.tags.map(tag => <span key={tag}>{tag}</span>)}
                  </div>
                </div>

                <div className='slide-actions'>
                  {slide.links.map(link => {
                    if (link.action === 'projects') {
                      return (
                        <button key={link.label} className={link.primary ? 'is-primary' : ''} type='button' tabIndex={is_active ? 0 : -1} onClick={event => { event.stopPropagation(); go_to(1) }}>
                          <span>{link.label}</span>
                          <ArrowIcon direction='right' />
                        </button>
                      )
                    }

                    return (
                      <a key={link.label} className={link.primary ? 'is-primary' : ''} href={link.href} target='_blank' rel='noreferrer' tabIndex={is_active ? 0 : -1} onClick={event => event.stopPropagation()}>
                        <span>{link.label}</span>
                        <ExternalIcon />
                      </a>
                    )
                  })}
                </div>

                <div className='slide-index' aria-hidden='true'>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <i />
                  <span>{String(slides.length).padStart(2, '0')}</span>
                </div>
              </article>
            )
          })}
        </div>

        <button className='carousel-control carousel-control-left' type='button' onClick={event => { event.stopPropagation(); move(-1) }} aria-label='Previous slide'>
          <ArrowIcon direction='left' />
        </button>

        <button className='carousel-control carousel-control-right' type='button' onClick={event => { event.stopPropagation(); move(1) }} aria-label='Next slide'>
          <ArrowIcon direction='right' />
        </button>

        <div className='fullscreen-dots' aria-label='Choose slide'>
          {slides.map((slide, index) => (
            <button key={slide.id} className={index === active_index ? 'is-active' : ''} type='button' onClick={event => { event.stopPropagation(); go_to(index) }} aria-label={`Open ${slide.title}`} />
          ))}
        </div>

        <p className='carousel-hint'>Drag or use the arrow keys</p>
      </section>
    </main>
  )
}
