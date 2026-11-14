import type { SlideProps } from './SlideShared'

function Slide(props: { code: string; title: string; description: string; meta: string; className: string }) {
  return (
    <article className={props.className}>
      <div className='expertise-code'>{props.code}</div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <b>{props.meta}</b>
    </article>
  )
}

export default function ExpertiseSlide({ active }: SlideProps) {
  return (
    <div className={`slide-canvas expertise-slide ${active ? 'is-content-active' : ''}`}>
      <div className='expertise-title'>
        <p>WHAT I BUILD</p>
        <h2>Core<br />expertise</h2>
        <span>A practical mix of product thinking, engineering, and machine learning.</span>
      </div>
      <div className='expertise-orbit' aria-hidden='true'><i /><i /><i /></div>
      <section className='expertise-system'>
        <Slide code='AI' title='AI-powered applications' description='LLMs, NLP, computer vision, model integration, and useful product experiences around them.' meta='LLMs · NLP · CV · RAG' className='expertise-ai' />
        <Slide code='FS' title='Full-stack systems' description='Responsive interfaces, robust APIs, data modelling, authentication, and production-minded architecture.' meta='React · Django · REST · SQL' className='expertise-fullstack' />
        <Slide code='DT' title='Developer tools' description='Desktop utilities and experiments that turn complex workflows into simple, focused tools.' meta='Python · Tkinter · Linux' className='expertise-tools' />
      </section>
    </div>
  )
}
