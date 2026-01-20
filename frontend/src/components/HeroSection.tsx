import { Link } from 'react-router-dom'
import hero_img from '../imgs/hero_section.png'

export default function HeroSection() {
  return (
    <section className='group relative w-full overflow-hidden min-h-hero'>
      <div aria-hidden='true' className='absolute inset-0'>
        <img src={hero_img} alt='' className='absolute inset-0 h-full w-full object-cover object-center scale-105 opacity-80 transition-transform duration-700 will-change-transform group-hover:scale-110' />
        <div className='absolute inset-0 bg-gradient-to-b from-bg/35 via-bg/70 to-bg' />
        <div className='absolute -top-32 -left-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl transition-transform duration-700 group-hover:scale-110' />
        <div className='absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-accent-2/25 blur-3xl transition-transform duration-700 group-hover:scale-105' />
        <div className='absolute inset-0 bg-gradient-to-tr from-transparent via-surface/10 to-transparent' />
      </div>

      <div className='relative mx-auto flex min-h-hero max-w-6xl items-center px-4 pt-24 pb-16'>
        <div className='flex w-full max-w-3xl flex-col gap-5'>
          <div className='inline-flex w-fit items-center gap-3 rounded-full border border-line/40 bg-surface/35 px-4 py-2 text-text backdrop-blur-xl'>
            <span className='text-xs font-extrabold tracking-widest text-accent'>AI PORTFOLIO</span>
            <span aria-hidden='true' className='font-bold text-muted/70'>•</span>
            <span className='text-xs font-bold tracking-widest text-text/90'>FULL STACK + ML</span>
          </div>

          <h1 className='m-0 max-w-2xl text-4xl font-extrabold leading-[1.02] text-text sm:text-5xl lg:text-6xl'>Jared Turck</h1>

          <p className='m-0 max-w-2xl text-base leading-relaxed text-muted sm:text-lg'>Senior full stack developer focused on AI-powered products, scalable backends, and clean, modern UI.</p>

          <div className='mt-2 flex flex-wrap gap-3'>
            <span className='rounded-full border border-accent/30 bg-accent/10 px-3 py-2 text-sm text-text backdrop-blur-lg'>Python</span>
            <span className='rounded-full border border-accent/30 bg-accent/10 px-3 py-2 text-sm text-text backdrop-blur-lg'>React</span>
            <span className='rounded-full border border-line/40 bg-surface/35 px-3 py-2 text-sm text-text backdrop-blur-lg'>TypeScript</span>
            <span className='rounded-full border border-line/40 bg-surface/35 px-3 py-2 text-sm text-text backdrop-blur-lg'>Django</span>
            <span className='rounded-full border border-line/40 bg-surface/35 px-3 py-2 text-sm text-text backdrop-blur-lg'>Django REST</span>
            <span className='rounded-full border border-line/40 bg-surface/35 px-3 py-2 text-sm text-text backdrop-blur-lg'>PyTorch</span>
            <span className='rounded-full border border-line/40 bg-surface/35 px-3 py-2 text-sm text-text backdrop-blur-lg'>NumPy</span>
            <span className='rounded-full border border-line/40 bg-surface/35 px-3 py-2 text-sm text-text backdrop-blur-lg'>Hugging Face</span>
            <span className='rounded-full border border-line/40 bg-surface/35 px-3 py-2 text-sm text-text backdrop-blur-lg'>PostgreSQL</span>
            <span className='rounded-full border border-line/40 bg-surface/35 px-3 py-2 text-sm text-text backdrop-blur-lg'>MySQL</span>
            <span className='rounded-full border border-line/40 bg-surface/35 px-3 py-2 text-sm text-text backdrop-blur-lg'>Docker</span>
            <span className='rounded-full border border-line/40 bg-surface/35 px-3 py-2 text-sm text-text backdrop-blur-lg'>Linux</span>
          </div>

          <div className='mt-4 flex flex-wrap gap-4'>
            <Link to='/#anyhjs' className='inline-flex items-center justify-center rounded-ui bg-accent/90 hover:bg-accent px-5 py-3 text-sm font-extrabold leading-none text-bg border border-line/30 transition-colors'>View projects</Link>
            <Link to='/#contact' className='inline-flex items-center justify-center rounded-ui border border-line/40 bg-surface/30 hover:bg-surface/40 px-5 py-3 text-sm font-extrabold leading-none text-text backdrop-blur-xl transition-colors'>Contact</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
