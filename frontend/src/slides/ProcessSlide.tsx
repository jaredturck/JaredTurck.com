import type { SlideProps } from './SlideShared'

const steps = [
  ['01', 'Idea', 'Understand the problem, define the scope and requirements.'],
  ['02', 'Build', 'Build clean, maintainable software to a high standard.'],
  ['03', 'Test', 'Test against requirements and resolve issues before release.'],
  ['04', 'Ship', 'Release reliable software and support it in production.'],
]

export default function ProcessSlide({ active }: SlideProps) {
  return (
    <div className={`slide-canvas process-slide ${active ? 'is-content-active' : ''}`}>
      <header><p>PROCESS</p><h2>How I work</h2><span>Turning requirements into reliable software.</span></header>
      <section className='process-track'>
        <div className='process-line'><i /></div>
        {steps.map((step, index) => (
          <article key={step[0]} className={index % 2 === 0 ? 'above' : 'below'} style={{ '--step-left': `${index * 25 + 1.5}%`, '--step-delay': `${350 + index * 150}ms` } as React.CSSProperties}>
            <div>{step[0]}</div><h3>{step[1]}</h3><p>{step[2]}</p>
          </article>
        ))}
      </section>
      <div className='process-loop'>SCOPE · BUILD · TEST · SHIP</div>
    </div>
  )
}
