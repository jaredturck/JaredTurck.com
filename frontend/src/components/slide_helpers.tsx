import type { ReactNode } from 'react'

export type SlideProps = {
  active: boolean
  on_projects: () => void
}

export function ProjectBadge(props: { mark?: string; label: string; className?: string }) {
  return (
    <div className={`inline-flex max-w-full items-center gap-2 rounded-full border px-3 py-2 text-xs tracking-widest backdrop-blur-md ${props.className ?? 'border-cyan/30 bg-surface/55 text-cyan'}`}>
      {props.mark && <span className='grid min-w-6 place-items-center rounded-lg bg-current/15 px-1.5 py-1 text-xs font-black'>{props.mark}</span>}
      <b>PROJECT</b>
      <i className='not-italic text-white/50'>|</i>
      <span className='text-white/90'>{props.label}</span>
    </div>
  )
}

export function ExternalArrow() {
  return (
    <svg className='size-4 shrink-0 fill-none stroke-current' viewBox='0 0 24 24' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
      <path d='M8 16 16 8M10 8h6v6' />
    </svg>
  )
}

export function ActionLink(props: { href: string; children: ReactNode; className?: string }) {
  return (
    <a className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-extrabold backdrop-blur-lg transition-colors focus-visible:outline-2 focus-visible:outline-cyan ${props.className ?? 'border-white/20 bg-canvas/60 text-white hover:bg-surface/75'}`} href={props.href} target='_blank' rel='noreferrer'>
      <span>{props.children}</span>
      <ExternalArrow />
    </a>
  )
}

export function WindowBar(props: { label: string; className?: string }) {
  return (
    <div className={`flex min-h-10 items-center justify-between gap-3 border-b border-white/10 px-4 py-2 text-xs font-semibold text-white/70 ${props.className ?? 'bg-surface'}`}>
      <div className='flex gap-1.5' aria-hidden='true'>
        <i className='size-2.5 rounded-full bg-cyan' />
        <i className='size-2.5 rounded-full bg-teal' />
        <i className='size-2.5 rounded-full bg-white/35' />
      </div>
      <span>{props.label}</span>
      <em className='w-9' />
    </div>
  )
}

export function ScreenshotButton(props: { image: string; number: number; active: boolean; on_select: () => void }) {
  return (
    <button className={`h-10 w-16 cursor-pointer overflow-hidden rounded-lg border transition-all duration-200 ${props.active ? '-translate-y-0.5 border-lime opacity-100' : 'border-transparent opacity-50 hover:-translate-y-0.5 hover:opacity-100'}`} type='button' onClick={props.on_select} aria-label={`Show AnyHJS screenshot ${props.number}`}>
      <img className='h-full w-full object-cover' src={props.image} alt='' />
    </button>
  )
}

export function Statistic(props: { label: string; value: string }) {
  return (
    <article className='rounded-xl border border-cyan/20 bg-surface/70 p-3 max-md:p-2'>
      <span className='block text-xs font-extrabold tracking-wider text-white/60'>{props.label}</span>
      <b className='mt-1 block text-base max-md:text-sm'>{props.value}</b>
    </article>
  )
}

export function NeuralLayer(props: { label: string; children: ReactNode }) {
  return (
    <div className='relative z-10 grid justify-items-center gap-3'>
      <span className='font-mono text-xs text-white/60'>{props.label}</span>
      <div className='grid gap-4'>{props.children}</div>
    </div>
  )
}

export function Slide(props: { code: string; title: string; description: string; meta: string; className: string }) {
  return (
    <article className={`absolute min-h-5/12 w-3/7 rounded-2xl border p-5 shadow-2xl transition duration-700 ease-out max-md:relative max-md:inset-auto max-md:mb-3 max-md:min-h-0 max-md:w-full max-md:translate-z-0 max-md:p-3.5 ${props.className}`}>
      <div className='grid size-10 place-items-center rounded-xl border border-current/45 font-mono text-xs font-black'>{props.code}</div>
      <h3 className='mt-4 text-xl text-white'>{props.title}</h3>
      <p className='mt-3 text-sm leading-5 text-white/70 max-md:text-xs max-md:leading-normal'>{props.description}</p>
      <b className='mt-5 block text-xs'>{props.meta}</b>
    </article>
  )
}

export function ProcessStep(props: { number: string; title: string; description: string; className: string; above?: boolean }) {
  return (
    <article className={`absolute ml-4 min-h-44 w-1/5 rounded-2xl border border-white/10 bg-surface/80 p-4 shadow-2xl max-md:relative max-md:inset-auto max-md:mb-3 max-md:ml-14 max-md:mt-0 max-md:min-h-0 max-md:w-auto ${props.above ? 'bottom-1/2 mb-6' : 'top-1/2 mt-6'} ${props.className}`}>
      <div className={`absolute left-4 grid size-10 place-items-center rounded-full border border-teal bg-surface text-xs font-black text-teal max-md:-left-14 max-md:bottom-auto max-md:top-3 ${props.above ? '-bottom-12' : '-top-12'}`}>{props.number}</div>
      <h3 className='text-xl text-white'>{props.title}</h3>
      <p className='mt-3 text-sm leading-5 text-white/70'>{props.description}</p>
    </article>
  )
}

export function TechnologyGroup(props: { title: string; className: string; children: ReactNode }) {
  return (
    <section className={`absolute z-10 min-w-60 w-1/4 rounded-2xl border bg-surface/80 p-4 shadow-2xl transition duration-500 max-md:relative max-md:inset-auto max-md:min-w-0 max-md:w-auto max-md:translate-none max-md:p-3 max-md:mt-0 ${props.className}`}>
      <h3 className='text-xs tracking-widest'>{props.title}</h3>
      <div className='mt-3 flex flex-wrap gap-2 text-white/80 *:inline-flex *:items-center *:gap-1 *:rounded-full *:border *:px-2 *:py-1.5 *:text-xs max-md:gap-1 max-md:*:px-1.5 max-md:*:py-1'>{props.children}</div>
    </section>
  )
}
