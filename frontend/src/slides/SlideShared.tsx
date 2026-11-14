import type { ReactNode } from 'react'

export type SlideProps = {
  active: boolean
  on_projects: () => void
}

export function ProjectBadge(props: { mark?: string; label: string }) {
  return (
    <div className='project-badge'>
      {props.mark && <span className='project-badge-mark'>{props.mark}</span>}
      <b>PROJECT</b>
      <i>•</i>
      <span>{props.label}</span>
    </div>
  )
}

export function ExternalArrow() {
  return (
    <svg className='external-arrow' viewBox='0 0 24 24' aria-hidden='true'>
      <path d='M8 16 16 8M10 8h6v6' />
    </svg>
  )
}

export function ActionLink(props: { href: string; children: ReactNode; className?: string }) {
  return (
    <a className={`project-action ${props.className ?? ''}`} href={props.href} target='_blank' rel='noreferrer'>
      <span>{props.children}</span>
      <ExternalArrow />
    </a>
  )
}

export function WindowBar(props: { label: string; className?: string }) {
  return (
    <div className={`window-bar ${props.className ?? ''}`}>
      <div><i /><i /><i /></div>
      <span>{props.label}</span>
      <em />
    </div>
  )
}
