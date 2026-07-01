import type { ReactNode } from 'react'

export type SlideProps = {
  active: boolean
}

type ProjectBadgeProps = {
  mark?: string
  label: string
  accent?: string
}

export function ProjectBadge({ mark, label, accent }: ProjectBadgeProps) {
  return (
    <div className='project-badge' style={{ '--badge-accent': accent } as React.CSSProperties}>
      {mark && <span className='project-badge-mark'>{mark}</span>}
      <b>PROJECT</b>
      <i>•</i>
      <span>{label}</span>
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

type ActionLinkProps = {
  href: string
  children: ReactNode
  className?: string
}

export function ActionLink({ href, children, className = '' }: ActionLinkProps) {
  return (
    <a className={`project-action ${className}`} href={href} target='_blank' rel='noreferrer'>
      <span>{children}</span>
      <ExternalArrow />
    </a>
  )
}

type WindowBarProps = {
  label: string
  className?: string
}

export function WindowBar({ label, className = '' }: WindowBarProps) {
  return (
    <div className={`window-bar ${className}`}>
      <div><i /><i /><i /></div>
      <span>{label}</span>
      <em />
    </div>
  )
}
