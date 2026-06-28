import use_project_carousel from '../hooks/UseProjectCarousel'
import use_reveal from '../hooks/UseReveal'

import anyhjs_img1 from '../imgs/anyhjs_img1.png'
import titus_logo from '../imgs/titus_ai_logo.png'
import tkdraw_image from '../imgs/tkdraw_image1.png'
import fisherai_image from '../imgs/fisherai_image1.png'
import spelling_image from '../imgs/spelling_correction_qwen.png'
import geoidpm_image from '../imgs/geoidpm_screenshot.png'
import ekhaya_image from '../imgs/ekhaya_screenshot.png'

const projects = [
  {
    name: 'AnyHJS',
    eyebrow: 'AI fashion marketplace',
    description: 'Outfit inspiration becomes instantly shoppable looks across brands, wrapped in a premium editorial experience.',
    image: anyhjs_img1,
    tags: ['React', 'TypeScript', 'AI/ML'],
    live: 'https://anyhjs.co.uk/',
    github: 'https://github.com/jaredturck/AnyHJS',
    accent: 'lime',
  },
  {
    name: 'Titus AI',
    eyebrow: 'Language model',
    description: 'A GPT-style chatbot and decoder-only model focused on token prediction, training, and clean inference flows.',
    image: titus_logo,
    tags: ['Python', 'PyTorch', 'NLP'],
    github: 'https://github.com/jaredturck/TitusAI',
    accent: 'cyan',
  },
  {
    name: 'Fisher AI',
    eyebrow: 'Neural chess engine',
    description: 'A desktop chess experience combining a neural-network player, evaluation runs, and local play.',
    image: fisherai_image,
    tags: ['Python', 'Pygame', 'AI/ML'],
    github: 'https://github.com/jaredturck',
    accent: 'purple',
  },
  {
    name: 'TkDraw',
    eyebrow: 'Developer tool',
    description: 'A lightweight vector editor built from scratch with selection tools, pan and zoom, undo, and export.',
    image: tkdraw_image,
    tags: ['Python', 'Tkinter', 'Vector'],
    github: 'https://github.com/jaredturck',
    accent: 'green',
  },
  {
    name: 'Spelling Correction',
    eyebrow: 'Language tooling',
    description: 'An AI-assisted spelling correction experiment designed around practical text cleanup and model evaluation.',
    image: spelling_image,
    tags: ['Python', 'Qwen', 'NLP'],
    github: 'https://github.com/jaredturck',
    accent: 'pink',
  },
  {
    name: 'GeoidPM',
    eyebrow: 'Desktop utility',
    description: 'A focused geoid and coordinate utility with a clean workflow for technical calculations.',
    image: geoidpm_image,
    tags: ['Python', 'Desktop', 'Utilities'],
    github: 'https://github.com/jaredturck',
    accent: 'amber',
  },
  {
    name: 'Ekhaya',
    eyebrow: 'Web platform',
    description: 'A polished product interface built around strong visual hierarchy, responsive UI, and purposeful motion.',
    image: ekhaya_image,
    tags: ['React', 'UI/UX', 'Frontend'],
    github: 'https://github.com/jaredturck',
    accent: 'blue',
  },
]

const expertise = [
  { icon: '✦', title: 'AI-powered applications', text: 'LLMs, NLP, computer vision, model integration, and useful product experiences around them.', meta: 'LLMs · NLP · CV · RAG' },
  { icon: '⌘', title: 'Full-stack systems', text: 'Responsive interfaces, robust APIs, data modelling, authentication, and production-minded architecture.', meta: 'React · Django · REST · SQL' },
  { icon: '◇', title: 'Developer tools', text: 'Desktop utilities and experiments that turn complex workflows into simple, focused tools.', meta: 'Python · Tkinter · Linux' },
]

const stack = [
  { title: 'Frontend', items: ['React', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Vite'] },
  { title: 'Backend', items: ['Python', 'Django', 'Django REST', 'PostgreSQL', 'MySQL'] },
  { title: 'AI / ML', items: ['PyTorch', 'Transformers', 'Hugging Face', 'NumPy', 'Pandas'] },
  { title: 'Infra / tools', items: ['Docker', 'Linux', 'Git & GitHub', 'VS Code', 'Tkinter'] },
]

export default function PortfolioContent() {
  use_reveal()
  const { active_index, set_active_index, move, on_pointer_down, on_pointer_up } = use_project_carousel(projects.length)

  return (
    <main className='portfolio-content'>
      <section id='projects' className='project-stage section-shell' data-reveal>
        <div className='section-heading'>
          <div>
            <p className='section-kicker'>Selected projects</p>
            <h2>Things I’ve built</h2>
          </div>
          <p className='section-copy'>Drag the stack, use the arrows, or click a card to explore.</p>
        </div>

        <div className='project-carousel' onPointerDown={on_pointer_down} onPointerUp={on_pointer_up}>
          <button className='carousel-arrow carousel-arrow-left' type='button' onClick={() => move(-1)} aria-label='Previous project'>‹</button>

          <div className='project-track'>
            {projects.map((project, index) => {
              const offset = index - active_index
              const distance = Math.abs(offset)
              const style = {
                transform: `translateX(calc(-50% + ${offset * 43}%)) scale(${Math.max(0.76, 1 - distance * 0.1)}) rotateY(${offset * -4}deg)`,
                opacity: Math.max(0, 1 - distance * 0.28),
                zIndex: 20 - distance,
                pointerEvents: distance <= 1 ? 'auto' : 'none',
              } as React.CSSProperties

              return (
                <article key={project.name} className={`project-card project-${project.accent} ${index === active_index ? 'is-active' : ''}`} style={style} onClick={() => set_active_index(index)}>
                  <div className='project-card-copy'>
                    <p>{project.eyebrow}</p>
                    <h3>{project.name}</h3>
                    <span>{project.description}</span>
                    <div className='project-tags'>
                      {project.tags.map(tag => <small key={tag}>{tag}</small>)}
                    </div>
                    <div className='project-links'>
                      {project.live && <a href={project.live} target='_blank' rel='noreferrer'>Visit site ↗</a>}
                      <a href={project.github} target='_blank' rel='noreferrer'>GitHub ↗</a>
                    </div>
                  </div>

                  <div className='project-visual'>
                    <div className='project-window-bar'><i /><i /><i /><span>{project.name}</span></div>
                    <img src={project.image} alt={`${project.name} preview`} />
                    <div className='project-glow' />
                  </div>
                </article>
              )
            })}
          </div>

          <button className='carousel-arrow carousel-arrow-right' type='button' onClick={() => move(1)} aria-label='Next project'>›</button>
        </div>

        <div className='carousel-dots'>
          {projects.map((project, index) => <button key={project.name} type='button' className={index === active_index ? 'is-active' : ''} onClick={() => set_active_index(index)} aria-label={`Open ${project.name}`} />)}
        </div>
      </section>

      <section id='expertise' className='section-shell' data-reveal>
        <div className='section-heading'>
          <div><p className='section-kicker'>What I build</p><h2>Core expertise</h2></div>
          <p className='section-copy'>A practical mix of product thinking, engineering, and machine learning.</p>
        </div>
        <div className='expertise-grid'>
          {expertise.map((item, index) => (
            <article className='tilt-card' key={item.title} style={{ '--delay': `${index * 90}ms` } as React.CSSProperties}>
              <div className='expertise-icon'>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span>{item.meta}</span>
            </article>
          ))}
        </div>
      </section>

      <section id='process' className='section-shell' data-reveal>
        <div className='section-heading'><div><p className='section-kicker'>Process</p><h2>How I work</h2></div></div>
        <div className='process-line'>
          {[
            ['01', 'Ideate', 'Understand the problem, validate the idea, and define success.'],
            ['02', 'Build', 'Create a clean solution with a tight feedback loop.'],
            ['03', 'Iterate', 'Test, learn, refine, and improve the details that matter.'],
            ['04', 'Launch', 'Ship reliably and keep improving with real-world feedback.'],
          ].map((item, index) => (
            <article key={item[1]} style={{ '--delay': `${index * 110}ms` } as React.CSSProperties}>
              <div className='process-number'>{item[0]}</div><h3>{item[1]}</h3><p>{item[2]}</p>
            </article>
          ))}
        </div>
      </section>

      <section id='stack' className='section-shell' data-reveal>
        <div className='section-heading'><div><p className='section-kicker'>Tech stack</p><h2>Technologies I use</h2></div></div>
        <div className='stack-grid'>
          {stack.map((group, index) => (
            <article key={group.title} style={{ '--delay': `${index * 90}ms` } as React.CSSProperties}>
              <h3>{group.title}</h3>
              <div>{group.items.map(item => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section id='contact' className='contact-panel section-shell' data-reveal>
        <div>
          <p className='section-kicker'>Let’s work together</p>
          <h2>Let’s build something great.</h2>
          <p>Open to ambitious products, collaborations, and interesting technical problems.</p>
        </div>
        <div className='contact-actions'>
        </div>
        <div className='contact-orb' aria-hidden='true' />
      </section>
    </main>
  )
}
