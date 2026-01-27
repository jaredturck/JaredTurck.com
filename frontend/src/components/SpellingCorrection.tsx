import spelling_img from '../imgs/spelling_correction_image1.png'

const spelling_features = [
  'LSTM model',
  'Character-level',
  'GUI app',
  'Highlights corrections',
]

export default function SpellingCorrectionSection() {
  return (
    <section id='spelling' className='relative w-full overflow-hidden px-4 py-20'>
      <div aria-hidden='true' className='absolute inset-0 pointer-events-none'>
        <div className='absolute inset-0 bg-gradient-to-b from-[#113251]/26 via-bg to-bg' />
        <div className='absolute inset-0 opacity-[0.08] [background-image:repeating-linear-gradient(to_bottom,rgba(255,255,255,0.14)_0,rgba(255,255,255,0.14)_1px,transparent_1px,transparent_16px)]' />
        <div className='absolute top-10 left-10 h-52 w-72 rotate-[-10deg] rounded-ui bg-[#f7d154]/10 blur-2xl' />
        <div className='absolute -bottom-40 right-0 h-[34rem] w-[34rem] rounded-full bg-accent/10 blur-3xl' />
        <div className='absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#7cf7c7]/8 blur-3xl' />
      </div>

      <div className='relative mx-auto max-w-6xl rounded-ui border border-line/40 bg-gradient-to-b from-bg/60 via-surface/25 to-bg/60 backdrop-blur-xl'>
        <div className='grid gap-10 px-6 py-10 lg:grid-cols-2 lg:items-center'>
          <div className='flex flex-col gap-5'>
            <div className='inline-flex w-fit items-center gap-3 rounded-full border border-line/40 bg-surface/35 px-4 py-2 text-text backdrop-blur-xl'>
              <div className='grid h-5 w-5 place-items-center rounded-sm border border-line/40 bg-surface/35 text-[10px] font-extrabold text-text'>SC</div>
              <span className='text-xs font-extrabold tracking-widest text-muted'>PROJECT</span>
              <span aria-hidden='true' className='font-bold text-muted/70'>•</span>
              <span className='text-xs font-bold tracking-widest text-text/90'>SPELLING CORRECTION AI</span>
            </div>

            <h2 className='m-0 text-4xl font-extrabold leading-[1.02] text-text sm:text-5xl'>Spelling Correction AI</h2>

            <p className='m-0 max-w-xl text-base leading-relaxed text-muted sm:text-lg'>
              An LSTM model trained to correct spelling mistakes, shown in a lightweight desktop GUI with clear markup-style feedback.
            </p>

            <div className='mt-2 flex flex-wrap gap-3'>
              {spelling_features.map((x) => (
                <span key={x} className='inline-flex items-center rounded-full border border-line/40 bg-surface/35 px-3 py-2 text-xs font-semibold text-text backdrop-blur-lg'>
                  {x}
                </span>
              ))}
            </div>

            <div className='mt-3 flex flex-wrap gap-4'>
              <a href='https://github.com/jaredturck/Spelling-Correction-AI' target='_blank' rel='noreferrer' className='inline-flex items-center justify-center rounded-ui bg-accent/90 hover:bg-accent px-5 py-3 text-sm font-extrabold leading-none text-bg border border-line/30 transition-colors'>
                GitHub
              </a>
            </div>
          </div>

          <div className='relative'>
            <div className='rounded-ui border border-line/40 bg-surface/20 backdrop-blur-xl overflow-hidden shadow-2xl'>
              <div className='flex items-center justify-between border-b border-line/30 bg-surface/25 px-4 py-3'>
                <div className='flex items-center gap-2'>
                  <span className='h-2.5 w-2.5 rounded-full bg-muted/40' />
                  <span className='h-2.5 w-2.5 rounded-full bg-muted/30' />
                  <span className='h-2.5 w-2.5 rounded-full bg-muted/20' />
                </div>
                <div className='text-xs font-semibold tracking-wide text-muted'>Spelling Correction</div>
                <div className='w-12' />
              </div>

              <div className='relative'>
                <img src={spelling_img} alt='Spelling Correction AI screenshot' className='w-full object-cover' />
                <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/65 via-transparent to-transparent' />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
