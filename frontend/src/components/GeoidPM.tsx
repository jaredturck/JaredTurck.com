import geoidpm_logo from '../imgs/geoidpm_logo.png'
import geoidpm_screenshot from '../imgs/geoidpm_screenshot.png'

export default function GeoidPMSection() {
  return (
    <section id='geoidpm' className='w-full px-4 py-20'>
      <div className='mx-auto max-w-6xl rounded-ui border border-line/40 bg-gradient-to-b from-bg/60 via-surface/25 to-bg/60 backdrop-blur-xl'>
        <div className='grid gap-10 px-6 py-10 lg:grid-cols-2 lg:items-center'>
          <div className='flex flex-col gap-5'>
            <div className='inline-flex w-fit items-center gap-3 rounded-full border border-line/40 bg-surface/35 px-4 py-2 text-text backdrop-blur-xl'>
              <img src={geoidpm_logo} alt='GeoidPM logo' className='h-5 w-5 rounded-sm' />
              <span className='text-xs font-extrabold tracking-widest text-accent'>PROJECT</span>
              <span aria-hidden='true' className='font-bold text-muted/70'>•</span>
              <span className='text-xs font-bold tracking-widest text-text/90'>GEOID PM</span>
            </div>

            <h2 className='m-0 text-4xl font-extrabold leading-[1.02] text-text sm:text-5xl'>Geoid Project Management</h2>

            <p className='m-0 max-w-xl text-base leading-relaxed text-muted sm:text-lg'>
              A consultancy website for offshore survey management and permitting, focused on clarity, trust, and services at-a-glance.
            </p>

            <div className='mt-2 flex flex-wrap gap-4'>
              <a href='https://geoidpm.com/' target='_blank' rel='noreferrer' className='inline-flex items-center justify-center rounded-ui bg-accent/90 hover:bg-accent px-5 py-3 text-sm font-extrabold leading-none text-bg border border-line/30 transition-colors'>Visit site</a>
              <a href='https://github.com/jaredturck/GeoidPM' target='_blank' rel='noreferrer' className='inline-flex items-center justify-center rounded-ui border border-line/40 bg-surface/30 hover:bg-surface/40 px-5 py-3 text-sm font-extrabold leading-none text-text backdrop-blur-xl transition-colors'>GitHub</a>
            </div>

            <div className='mt-2 flex flex-wrap gap-2 text-sm text-text'>
              <span className='rounded-full border border-line/40 bg-surface/18 px-3 py-2 text-sm text-text backdrop-blur-lg'>Permit acquisition</span>
              <span className='rounded-full border border-line/40 bg-surface/18 px-3 py-2 text-sm text-text backdrop-blur-lg'>Cable landings + EEZ traverse</span>
              <span className='rounded-full border border-line/40 bg-surface/18 px-3 py-2 text-sm text-text backdrop-blur-lg'>Cable route survey management</span>
              <span className='rounded-full border border-line/40 bg-surface/18 px-3 py-2 text-sm text-text backdrop-blur-lg'>Site investigations</span>
              <span className='rounded-full border border-line/40 bg-surface/18 px-3 py-2 text-sm text-text backdrop-blur-lg'>Stakeholder liaison</span>
            </div>
          </div>

          <div className='rounded-ui border border-line/40 bg-surface/20 backdrop-blur-xl overflow-hidden'>
            <div className='flex items-center justify-between border-b border-line/30 bg-surface/25 px-4 py-3'>
              <div className='flex items-center gap-2'>
                <span className='h-2.5 w-2.5 rounded-full bg-accent/70' />
                <span className='h-2.5 w-2.5 rounded-full bg-accent-2/55' />
                <span className='h-2.5 w-2.5 rounded-full bg-muted/30' />
              </div>
              <div className='text-xs font-semibold tracking-wide text-muted'>geoidpm.com</div>
              <div className='w-12' />
            </div>

            <div className='relative'>
              <img src={geoidpm_screenshot} alt='GeoidPM screenshot' className='h-80 w-full object-cover object-top' />
              <div className='absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
