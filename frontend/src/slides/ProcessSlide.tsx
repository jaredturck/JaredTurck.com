import type { SlideProps } from './SlideShared'

function ProcessStep(props: { number: string; title: string; description: string; className: string }) {
  return (
    <article className={props.className}>
      <div>{props.number}</div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </article>
  )
}

export default function ProcessSlide({ active }: SlideProps) {
  return (
    <div className={`slide-canvas process-slide ${active ? 'is-content-active' : ''}`}>
      <header>
        <p>PROCESS</p>
        <h2>How I work</h2>
        <span>Turning requirements into reliable software.</span>
      </header>
      <section className='process-track'>
        <div className='process-line'><i /></div>
        <ProcessStep number='01' title='Idea' description='Understand the problem, define the scope and requirements.' className='above process-idea' />
        <ProcessStep number='02' title='Build' description='Build clean, maintainable software to a high standard.' className='below process-build' />
        <ProcessStep number='03' title='Test' description='Test against requirements and resolve issues before release.' className='above process-test' />
        <ProcessStep number='04' title='Ship' description='Release reliable software and support it in production.' className='below process-ship' />
      </section>
      <div className='process-loop'>SCOPE · BUILD · TEST · SHIP</div>
    </div>
  )
}
