import tkdraw_img from '../imgs/tkdraw_image1.png'

export default function TkDrawSection() {
  return (
    <section id='tkdraw' className='relative w-full overflow-hidden px-4 py-20'>
      <div aria-hidden='true' className='absolute inset-0'>
        <div className='absolute inset-0 bg-gradient-to-b from-bg via-bg/90 to-bg' />
        <div className='absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:48px_48px]' />
        <div className='absolute -top-24 -left-20 h-80 w-80 rounded-full bg-[#b7ff4a]/10 blur-3xl' />
        <div className='absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-[#f6d36b]/10 blur-3xl' />
      </div>

      <div className='relative mx-auto max-w-6xl rounded-ui border border-line/40 bg-gradient-to-b from-bg/60 via-surface/20 to-bg/60 backdrop-blur-xl'>
        <div className='grid gap-10 px-6 py-10 lg:grid-cols-2 lg:items-center'>
          <div className='flex flex-col gap-5'>
            <div className='inline-flex w-fit items-center gap-3 rounded-full border border-line/40 bg-surface/35 px-4 py-2 text-text backdrop-blur-xl'>
              <div className='grid h-6 w-6 place-items-center rounded-ui border border-line/30 bg-[#b7ff4a]/10 text-[11px] font-extrabold text-[#b7ff4a]'>TK</div>
              <span className='text-xs font-extrabold tracking-widest text-[#f6d36b]'>PROJECT</span>
              <span aria-hidden='true' className='font-bold text-muted/70'>•</span>
              <span className='text-xs font-bold tracking-widest text-text/90'>TKDRAW</span>
            </div>

            <h2 className='m-0 text-4xl font-extrabold leading-[1.02] text-text sm:text-5xl'>TkDraw</h2>

            <p className='m-0 max-w-xl text-base leading-relaxed text-muted sm:text-lg'>
              A Tkinter-powered vector drawing app built from scratch: shapes, colour picker, grid toggle, pan/zoom navigation, and export as Tkinter code.
            </p>

            <div className='mt-1 flex flex-wrap gap-3'>
              <span className='rounded-full border border-line/40 bg-surface/35 px-3 py-2 text-sm text-text backdrop-blur-lg'>Tkinter</span>
              <span className='rounded-full border border-line/40 bg-surface/35 px-3 py-2 text-sm text-text backdrop-blur-lg'>Vector tools</span>
              <span className='rounded-full border border-line/40 bg-surface/35 px-3 py-2 text-sm text-text backdrop-blur-lg'>Pan + zoom</span>
              <span className='rounded-full border border-line/40 bg-surface/35 px-3 py-2 text-sm text-text backdrop-blur-lg'>Undo</span>
              <span className='rounded-full border border-line/40 bg-surface/35 px-3 py-2 text-sm text-text backdrop-blur-lg'>Export code</span>
              <span className='rounded-full border border-line/30 bg-[#b7ff4a]/10 px-3 py-2 text-sm text-text backdrop-blur-lg'>Built from scratch</span>
            </div>

            <div className='mt-2 rounded-ui border border-line/30 bg-surface/25 px-5 py-4'>
              <div className='text-xs font-extrabold tracking-widest text-muted'>CONTROLS</div>
              <div className='mt-3 flex flex-wrap gap-2 text-sm text-text/90'>
                <span className='inline-flex items-center gap-2 rounded-ui border border-line/30 bg-surface/35 px-3 py-1.5'>
                  <span className='rounded-md border border-line/30 bg-bg/40 px-2 py-0.5 font-mono text-xs'>Ctrl</span>
                  <span className='text-muted'>+ click</span>
                  <span className='text-muted'>select vertices</span>
                </span>
                <span className='inline-flex items-center gap-2 rounded-ui border border-line/30 bg-surface/35 px-3 py-1.5'>
                  <span className='rounded-md border border-line/30 bg-bg/40 px-2 py-0.5 font-mono text-xs'>Ctrl</span>
                  <span className='text-muted'>+</span>
                  <span className='rounded-md border border-line/30 bg-bg/40 px-2 py-0.5 font-mono text-xs'>Z</span>
                  <span className='text-muted'>undo</span>
                </span>
                <span className='inline-flex items-center gap-2 rounded-ui border border-line/30 bg-surface/35 px-3 py-1.5'>
                  <span className='rounded-md border border-line/30 bg-bg/40 px-2 py-0.5 font-mono text-xs'>[</span>
                  <span className='text-muted'>/</span>
                  <span className='rounded-md border border-line/30 bg-bg/40 px-2 py-0.5 font-mono text-xs'>]</span>
                  <span className='text-muted'>line width</span>
                </span>
                <span className='inline-flex items-center gap-2 rounded-ui border border-line/30 bg-surface/35 px-3 py-1.5'>
                  <span className='text-muted'>drag</span>
                  <span className='text-muted'>pan</span>
                  <span className='text-muted'>•</span>
                  <span className='text-muted'>wheel</span>
                  <span className='text-muted'>zoom</span>
                </span>
              </div>
            </div>

            <div className='mt-2 flex flex-wrap gap-4'>
              <a href='https://github.com/jaredturck/tk-draw' target='_blank' rel='noreferrer' className='inline-flex items-center justify-center rounded-ui bg-[#b7ff4a]/90 hover:bg-[#b7ff4a] px-5 py-3 text-sm font-extrabold leading-none text-bg border border-line/30 transition-colors'>GitHub</a>
            </div>
          </div>

          <div className='relative'>
            <div aria-hidden='true' className='absolute -inset-6'>
              <div className='absolute -top-4 -left-4 h-24 w-24 rounded-ui bg-[#b7ff4a]/10 blur-2xl' />
              <div className='absolute -bottom-6 right-0 h-28 w-28 rounded-ui bg-[#f6d36b]/10 blur-2xl' />
            </div>

            <div className='relative overflow-hidden rounded-ui border border-line/40 bg-surface/20 backdrop-blur-xl shadow-2xl transition-transform duration-500 hover:-translate-y-1'>
              <div className='flex items-center justify-between border-b border-line/30 bg-gradient-to-b from-surface/40 to-surface/20 px-4 py-3'>
                <div className='flex items-center gap-2'>
                  <span className='h-2.5 w-2.5 rounded-full bg-[#f6d36b]/80' />
                  <span className='h-2.5 w-2.5 rounded-full bg-[#b7ff4a]/60' />
                  <span className='h-2.5 w-2.5 rounded-full bg-muted/35' />
                </div>
                <div className='text-xs font-semibold tracking-wide text-muted'>TkDraw — Drawing Window</div>
                <div className='w-12' />
              </div>

              <div className='relative'>
                <img src={tkdraw_img} alt='TkDraw screenshot' className='w-full object-cover' />
                <div className='absolute inset-0 bg-gradient-to-t from-bg/65 via-transparent to-transparent' />
              </div>
            </div>

            <div className='mt-4 flex items-center justify-between'>
              <div className='inline-flex items-center gap-2 text-xs text-muted'>
                <span className='h-2 w-2 rounded-full bg-[#b7ff4a]/70' />
                TkDraw v1.0
              </div>
              <div className='text-xs font-semibold text-muted'>Vector editor • Tkinter • Python</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
