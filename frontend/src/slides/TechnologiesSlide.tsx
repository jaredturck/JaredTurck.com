import type { ReactNode } from 'react'
import type { SlideProps } from './SlideShared'

function TechnologyGroup(props: { title: string; className: string; children: ReactNode }) {
  return (
    <section className={`stack-cluster ${props.className}`}>
      <h3>{props.title}</h3>
      <div>{props.children}</div>
    </section>
  )
}

export default function TechnologiesSlide({ active }: SlideProps) {
  return (
    <div className={`slide-canvas technologies-slide ${active ? 'is-content-active' : ''}`}>
      <header>
        <p>TECH STACK</p>
        <h2>Technologies I use</h2>
      </header>
      <div className='stack-core'><span>PRODUCT</span><b>STACK</b><i /></div>
      <svg className='stack-connections' viewBox='0 0 1200 680' aria-hidden='true'><path d='M600 340 270 165M600 340 930 165M600 340 270 520M600 340 930 520' /></svg>
      <TechnologyGroup title='FRONTEND' className='stack-frontend'>
        <span><i />React</span>
        <span><i />TypeScript</span>
        <span><i />HTML/CSS</span>
        <span><i />Tailwind CSS</span>
        <span><i />Vite</span>
      </TechnologyGroup>
      <TechnologyGroup title='BACKEND' className='stack-backend'>
        <span><i />Python</span>
        <span><i />Django</span>
        <span><i />Django REST</span>
        <span><i />PostgreSQL</span>
        <span><i />MySQL</span>
      </TechnologyGroup>
      <TechnologyGroup title='AI / ML' className='stack-ai'>
        <span><i />PyTorch</span>
        <span><i />Transformers</span>
        <span><i />Hugging Face</span>
        <span><i />NumPy</span>
        <span><i />Pandas</span>
      </TechnologyGroup>
      <TechnologyGroup title='INFRA / TOOLS' className='stack-infra'>
        <span><i />Docker</span>
        <span><i />Linux</span>
        <span><i />Git &amp; GitHub</span>
        <span><i />VS Code</span>
        <span><i />Tkinter</span>
      </TechnologyGroup>
    </div>
  )
}
