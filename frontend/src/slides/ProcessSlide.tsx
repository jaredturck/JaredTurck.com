import type { SlideProps } from './SlideShared'

const steps = [
  ['01', 'Ideate', 'Understand the problem, validate the idea, and define success.'],
  ['02', 'Build', 'Create a clean solution with a tight feedback loop.'],
  ['03', 'Iterate', 'Test, learn, refine, and improve the details that matter.'],
  ['04', 'Launch', 'Ship reliably and keep improving with real-world feedback.'],
]

export default function ProcessSlide({ active }: SlideProps) {
  return (
    <div className={`slide-canvas process-slide ${active ? 'is-content-active' : ''}`}>
      <header><p>PROCESS</p><h2>How I work</h2><span>Four stages, one continuous feedback loop.</span></header>
      <section className='process-track'>
        <div className='process-line'><i /></div>
        {steps.map((step, index) => (
          <article key={step[0]} className={index % 2 === 0 ? 'above' : 'below'} style={{ '--step-left': `${index * 25 + 1.5}%`, '--step-delay': `${350 + index * 150}ms` } as React.CSSProperties}>
            <div>{step[0]}</div><h3>{step[1]}</h3><p>{step[2]}</p>
          </article>
        ))}
      </section>
      <div className='process-loop'>REPEAT · REFINE · SHIP · LEARN</div>
    </div>
  )
}
