import type { SlideProps } from './SlideShared'

export default function ContactSlide({ active }: SlideProps) {
  return (
    <div className={`slide-canvas contact-slide ${active ? 'is-content-active' : ''}`}>
      <div className='contact-orb contact-orb-one' /><div className='contact-orb contact-orb-two' /><div className='contact-orb contact-orb-three' />
      <section>
        <p>LET’S WORK TOGETHER</p>
        <h2>Let’s build<br /><em>something great.</em></h2>
        <span>Open to ambitious products, collaborations, and interesting technical problems.</span>
      </section>
      <div className='contact-rings' aria-hidden='true'><i /><i /><i /><b /></div>
      <footer><span>© 2026 Made by Jared Turck.</span><span>Built with React + TypeScript + Tailwind.</span></footer>
    </div>
  )
}
