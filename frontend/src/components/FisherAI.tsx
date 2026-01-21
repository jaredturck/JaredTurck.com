import fisherai_img from '../imgs/fisherai_image1.png'

export default function FisherAISection() {
  return (
    <section id='fisherai' className='relative w-full overflow-hidden px-4 py-20'>
      <div aria-hidden='true' className='absolute inset-0'>
        <div className='absolute inset-0 bg-gradient-to-b from-[#0e4d5a]/30 via-bg to-bg' />
        <div className='absolute inset-0 opacity-[0.06] [background-image:linear-gradient(45deg,rgba(255,255,255,0.6)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.6)_75%,rgba(255,255,255,0.6)),linear-gradient(45deg,rgba(255,255,255,0.6)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.6)_75%,rgba(255,255,255,0.6))] [background-size:48px_48px] [background-position:0_0,24px_24px]' />
        <div className='absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#d6b15e]/12 blur-3xl' />
        <div className='absolute -bottom-40 right-0 h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-3xl' />
      </div>

      <div className='relative mx-auto max-w-6xl rounded-ui border border-line/40 bg-gradient-to-b from-bg/55 via-surface/20 to-bg/55 backdrop-blur-xl'>
        <div className='grid gap-10 px-6 py-10 lg:grid-cols-2 lg:items-center'>
          <div className='flex flex-col gap-5'>
            <div className='inline-flex w-fit items-center gap-3 rounded-full border border-line/40 bg-surface/35 px-4 py-2 text-text backdrop-blur-xl'>
              <div className='grid h-6 w-6 place-items-center rounded-ui border border-line/30 bg-[#d6b15e]/10 text-[11px] font-extrabold text-[#d6b15e]'>FA</div>
              <span className='text-xs font-extrabold tracking-widest text-[#d6b15e]'>PROJECT</span>
              <span aria-hidden='true' className='font-bold text-muted/70'>•</span>
              <span className='text-xs font-bold tracking-widest text-text/90'>FISHER AI</span>
            </div>

            <h2 className='m-0 text-4xl font-extrabold leading-[1.02] text-text sm:text-5xl'>Fisher AI</h2>

            <p className='m-0 max-w-xl text-base leading-relaxed text-muted sm:text-lg'>
              A chess engine + GUI with a neural-network player. Includes evaluation runs against Stockfish and a full desktop app to play games locally.
            </p>

            <div className='mt-1 flex flex-wrap gap-3'>
              <span className='rounded-full border border-line/40 bg-surface/35 px-3 py-2 text-sm text-text backdrop-blur-lg'>Python</span>
              <span className='rounded-full border border-line/40 bg-surface/35 px-3 py-2 text-sm text-text backdrop-blur-lg'>GUI app</span>
              <span className='rounded-full border border-line/40 bg-surface/35 px-3 py-2 text-sm text-text backdrop-blur-lg'>Neural net</span>
              <span className='rounded-full border border-line/40 bg-surface/35 px-3 py-2 text-sm text-text backdrop-blur-lg'>Stockfish eval</span>
              <span className='rounded-full border border-line/30 bg-[#d6b15e]/10 px-3 py-2 text-sm text-text backdrop-blur-lg'>ELO ~1056</span>
            </div>

            <div className='mt-2 rounded-ui border border-line/30 bg-surface/25 px-5 py-4'>
              <div className='text-xs font-extrabold tracking-widest text-muted'>EVALUATION SNAPSHOT</div>
              <div className='mt-3 grid gap-3 sm:grid-cols-2'>
                <div className='rounded-ui border border-line/30 bg-bg/30 px-4 py-3'>
                  <div className='text-xs font-extrabold tracking-widest text-muted'>RESULTS</div>
                  <div className='mt-1 text-sm text-text'>
                    <span className='font-extrabold text-[#d6b15e]'>Stockfish</span> 36 • <span className='font-extrabold text-accent'>Fisher</span> 4 • Draws 10
                  </div>
                </div>
                <div className='rounded-ui border border-line/30 bg-bg/30 px-4 py-3'>
                  <div className='text-xs font-extrabold tracking-widest text-muted'>RUNTIME</div>
                  <div className='mt-1 text-sm font-semibold text-text'>130.22s (50 games)</div>
                </div>
              </div>
            </div>

            <div className='mt-2 flex flex-wrap gap-4'>
              <a href='https://github.com/jaredturck/FisherAI' target='_blank' rel='noreferrer' className='inline-flex items-center justify-center rounded-ui bg-accent/90 hover:bg-accent px-5 py-3 text-sm font-extrabold leading-none text-bg border border-line/30 transition-colors'>GitHub</a>
              <span className='inline-flex items-center gap-2 text-sm text-muted'>
                <span className='h-2 w-2 rounded-full bg-[#d6b15e]/80' />
                Chess GUI + engine
              </span>
            </div>
          </div>

          <div className='relative'>
            <div aria-hidden='true' className='absolute -inset-6'>
              <div className='absolute -top-6 -left-6 h-28 w-28 rounded-ui bg-[#d6b15e]/10 blur-2xl' />
              <div className='absolute -bottom-8 right-2 h-32 w-32 rounded-ui bg-accent/10 blur-2xl' />
            </div>

            <div className='relative overflow-hidden rounded-ui border border-line/40 bg-surface/20 backdrop-blur-xl shadow-2xl transition-transform duration-500 hover:-translate-y-1'>
              <div className='flex items-center justify-between border-b border-line/30 bg-gradient-to-b from-surface/40 to-surface/20 px-4 py-3'>
                <div className='flex items-center gap-2'>
                  <span className='h-2.5 w-2.5 rounded-full bg-[#d6b15e]/80' />
                  <span className='h-2.5 w-2.5 rounded-full bg-accent/60' />
                  <span className='h-2.5 w-2.5 rounded-full bg-muted/35' />
                </div>
                <div className='text-xs font-semibold tracking-wide text-muted'>Chess GUI</div>
                <div className='w-12' />
              </div>

              <div className='relative'>
                <img src={fisherai_img} alt='Fisher AI chess GUI screenshot' className='w-full object-cover' />
                <div className='absolute inset-0 bg-gradient-to-t from-bg/55 via-transparent to-transparent' />
              </div>
            </div>

            <div className='mt-4 flex items-center justify-between'>
              <div className='inline-flex items-center gap-2 text-xs text-muted'>
                <span className='h-2 w-2 rounded-full bg-[#d6b15e]/80' />
                Fisher AI v1
              </div>
              <div className='text-xs font-semibold text-muted'>Engine • Evaluation • Desktop GUI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
