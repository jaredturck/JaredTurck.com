import type { SlideProps } from './SlideShared'

const groups = [
  { title: 'FRONTEND', items: ['React', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Vite'], class_name: 'stack-frontend' },
  { title: 'BACKEND', items: ['Python', 'Django', 'Django REST', 'PostgreSQL', 'MySQL'], class_name: 'stack-backend' },
  { title: 'AI / ML', items: ['PyTorch', 'Transformers', 'Hugging Face', 'NumPy', 'Pandas'], class_name: 'stack-ai' },
  { title: 'INFRA / TOOLS', items: ['Docker', 'Linux', 'Git & GitHub', 'VS Code', 'Tkinter'], class_name: 'stack-infra' },
]

export default function TechnologiesSlide({ active }: SlideProps) {
  return (
    <div className={`slide-canvas technologies-slide ${active ? 'is-content-active' : ''}`}>
      <header><p>TECH STACK</p><h2>Technologies I use</h2></header>
      <div className='stack-core'><span>PRODUCT</span><b>STACK</b><i /></div>
      <svg className='stack-connections' viewBox='0 0 1200 680' aria-hidden='true'><path d='M600 340 270 165M600 340 930 165M600 340 270 520M600 340 930 520' /></svg>
      {groups.map((group, index) => (
        <section className={`stack-cluster ${group.class_name}`} key={group.title} style={{ '--cluster-depth': `${35 + index * 8}px`, '--cluster-delay': `${180 + index * 100}ms` } as React.CSSProperties}>
          <h3>{group.title}</h3><div>{group.items.map(item => <span key={item}><i />{item}</span>)}</div>
        </section>
      ))}
    </div>
  )
}
