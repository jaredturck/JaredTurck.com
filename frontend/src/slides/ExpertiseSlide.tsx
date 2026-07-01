import type { SlideProps } from './SlideShared'

const expertise = [
  { id: 'AI', title: 'AI-powered applications', text: 'LLMs, NLP, computer vision, model integration, and useful product experiences around them.', meta: 'LLMs · NLP · CV · RAG', class_name: 'expertise-ai' },
  { id: 'FS', title: 'Full-stack systems', text: 'Responsive interfaces, robust APIs, data modelling, authentication, and production-minded architecture.', meta: 'React · Django · REST · SQL', class_name: 'expertise-fullstack' },
  { id: 'DT', title: 'Developer tools', text: 'Desktop utilities and experiments that turn complex workflows into simple, focused tools.', meta: 'Python · Tkinter · Linux', class_name: 'expertise-tools' },
]

export default function ExpertiseSlide({ active }: SlideProps) {
  return (
    <div className={`slide-canvas expertise-slide ${active ? 'is-content-active' : ''}`}>
      <div className='expertise-title'><p>WHAT I BUILD</p><h2>Core<br />expertise</h2><span>A practical mix of product thinking, engineering, and machine learning.</span></div>
      <div className='expertise-orbit' aria-hidden='true'><i /><i /><i /></div>
      <section className='expertise-system'>
        {expertise.map((item, index) => (
          <article className={item.class_name} key={item.title} style={{ '--card-depth': `${35 + index * 18}px`, '--card-delay': `${140 + index * 110}ms` } as React.CSSProperties}>
            <div className='expertise-code'>{item.id}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <b>{item.meta}</b>
          </article>
        ))}
      </section>
    </div>
  )
}
