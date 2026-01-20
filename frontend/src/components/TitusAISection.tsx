export default function TitusAISection() {
  return (
    <section id='titusai' className='w-full px-4 py-20'>
      <div className='mx-auto max-w-6xl rounded-ui border border-line/40 bg-gradient-to-b from-bg/60 via-surface/25 to-bg/60 backdrop-blur-xl'>
        <div className='grid gap-10 px-6 py-10 lg:grid-cols-2 lg:items-center'>
          <div className='flex flex-col gap-5'>
            <div className='inline-flex w-fit items-center gap-3 rounded-full border border-line/40 bg-surface/35 px-4 py-2 text-text backdrop-blur-xl'>
              <span className='text-xs font-extrabold tracking-widest text-accent-2'>PROJECT</span>
              <span aria-hidden='true' className='font-bold text-muted/70'>•</span>
              <span className='text-xs font-bold tracking-widest text-text/90'>TITUS AI</span>
            </div>

            <h2 className='m-0 text-4xl font-extrabold leading-[1.02] text-text sm:text-5xl'>Titus AI</h2>

            <p className='m-0 max-w-xl text-base leading-relaxed text-muted sm:text-lg'>
              A GPT-style chatbot project with a clean web UI and a model-first focus on token prediction and inference flow.
            </p>

            <div className='mt-2 flex flex-wrap gap-4'>
              <a href='https://github.com/jaredturck/TitusAI' target='_blank' rel='noreferrer' className='inline-flex items-center justify-center rounded-ui bg-accent-2/90 hover:bg-accent-2 px-5 py-3 text-sm font-extrabold leading-none text-bg border border-line/30 transition-colors'>Visit site</a>
              <a href='https://github.com/jaredturck/TitusAI' target='_blank' rel='noreferrer' className='inline-flex items-center justify-center rounded-ui border border-accent-2/35 bg-surface/30 hover:bg-surface/40 px-5 py-3 text-sm font-extrabold leading-none text-text backdrop-blur-xl transition-colors'>GitHub</a>
            </div>
          </div>

          <div className='relative mx-auto w-full max-w-sm'>
            <div aria-hidden='true' className='absolute -inset-6'>
              <div className='absolute -top-6 -left-6 h-24 w-24 rounded-ui bg-accent/10 blur-2xl' />
              <div className='absolute -bottom-8 right-2 h-28 w-28 rounded-ui bg-accent-2/15 blur-2xl' />
              <div className='absolute top-10 right-8 h-10 w-10 rounded-ui bg-surface/30 blur-xl' />
              <div className='absolute bottom-12 left-10 h-12 w-12 rounded-ui bg-surface/30 blur-xl' />
            </div>

            <div className='relative h-phone overflow-hidden rounded-ui border border-line/40 bg-gradient-to-b from-surface/35 via-surface-2/25 to-surface/35 backdrop-blur-xl shadow-2xl'>
              <div className='flex items-center justify-between px-4 py-3 text-xs text-muted'>
                <span className='font-semibold text-text/80'>11:52</span>
                <div className='flex items-center gap-2'>
                  <span className='h-2 w-2 rounded-full bg-muted/40' />
                  <span className='h-2 w-2 rounded-full bg-muted/30' />
                  <span className='h-2 w-2 rounded-full bg-muted/20' />
                </div>
              </div>

              <div className='flex h-full flex-col'>
                <div className='flex items-center justify-between border-b border-line/30 bg-surface/25 px-4 py-3'>
                  <div className='text-xs font-semibold tracking-wide text-muted'>model_30_Dec_2025-22_27.pth</div>
                  <div className='grid h-6 w-6 place-items-center rounded-full border border-line/30 bg-surface/35 text-muted'>×</div>
                </div>

                <div className='flex-1 px-4 py-4'>
                  <div className='flex flex-col gap-3'>
                    <div className='w-fit max-w-sm rounded-ui border border-line/30 bg-surface/45 px-4 py-3 text-sm text-text shadow-sm'>How can I assist you today?</div>
                    <div className='ml-auto w-fit max-w-sm rounded-ui border border-line/20 bg-accent/85 px-4 py-3 text-sm text-bg shadow-sm'>How are you today?</div>
                    <div className='w-fit max-w-sm rounded-ui border border-line/30 bg-surface/40 px-4 py-3 text-sm text-muted animate-pulse'>Thinking...</div>
                  </div>
                </div>

                <div className='border-t border-line/30 bg-surface/25 px-4 py-3'>
                  <div className='flex items-center gap-3'>
                    <div className='inline-flex items-center gap-2 rounded-ui border border-line/30 bg-surface/35 px-3 py-2 text-xs text-text/90'>
                      <span className='h-3 w-3 rounded-sm border border-line/40 bg-surface/40' />
                      <span className='font-semibold'>Think</span>
                    </div>

                    <div className='flex-1 rounded-ui border border-line/30 bg-surface/35 px-3 py-2 text-sm text-muted'>Type a message...</div>

                    <div className='inline-flex items-center justify-center rounded-ui border border-line/30 bg-surface/35 px-4 py-2 text-sm font-semibold text-text hover:bg-surface/45 transition-colors'>Send</div>
                  </div>
                </div>

                <div aria-hidden='true' className='pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg/30' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
