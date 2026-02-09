import use_image_carousel from '../hooks/UseImageCarousel'

type ImageGenCardProps = {
  title: string
  model_id: string
  hf_url: string
  desc: string
  prompt: string
  imgs: string[]
  params_text?: string
}

export default function ImageGenCard({ title, model_id, hf_url, desc, prompt, imgs, params_text }: ImageGenCardProps) {
  const { active_index, set_active_index } = use_image_carousel()
  const safe_imgs = imgs && imgs.length ? imgs : ['https://placehold.co/1400x900?text=IMAGE+PLACEHOLDER']

  return (
    <div className='rounded-ui border border-line/40 bg-gradient-to-b from-bg/50 via-surface/16 to-bg/55 backdrop-blur-xl shadow-xl overflow-hidden'>
      <div aria-hidden='true' className='h-1 w-full bg-gradient-to-r from-accent/80 via-anyhjs/45 to-accent-2/55' />

      <div className='p-5 lg:p-6'>
        <div className='grid gap-5 lg:grid-cols-2 lg:items-start'>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-wrap items-center gap-2'>
              <h3 className='m-0 text-lg font-extrabold text-text'>{title}</h3>
              {params_text ? <span className='rounded-full border border-line/30 bg-surface/18 px-3 py-1 text-xs font-semibold text-text/90 backdrop-blur-xl'>{params_text}</span> : null}
            </div>

            <div className='text-xs font-extrabold tracking-widest text-muted'>MODEL</div>
            <div className='rounded-ui border border-line/30 bg-bg/25 px-4 py-3'>
              <div className='text-sm font-semibold text-text'>{model_id}</div>
            </div>

            <p className='m-0 text-sm leading-relaxed text-muted'>{desc}</p>

            <div className='text-xs font-extrabold tracking-widest text-muted'>PROMPT</div>
            <div className='rounded-ui border border-line/30 bg-bg/25 px-4 py-3'>
              <div className='whitespace-pre-wrap break-words font-mono text-xs leading-relaxed text-text/90'>{prompt}</div>
            </div>

            <div className='mt-1 flex flex-wrap gap-2'>
              <a href={hf_url} target='_blank' rel='noreferrer' className='inline-flex items-center justify-center rounded-ui border border-line/40 bg-surface/18 hover:bg-surface/28 px-4 py-2 text-xs font-extrabold tracking-widest text-text/90 backdrop-blur-xl transition-colors'>
                HUGGING FACE
              </a>
            </div>
          </div>

          <div className='rounded-ui border border-line/30 bg-bg/30 overflow-hidden'>
            <div className='flex items-center justify-between border-b border-line/30 bg-surface/14 px-4 py-3'>
              <div className='flex items-center gap-2'>
                <span className='h-2.5 w-2.5 rounded-full bg-accent/70' />
                <span className='h-2.5 w-2.5 rounded-full bg-accent-2/70' />
                <span className='h-2.5 w-2.5 rounded-full bg-anyhjs/70' />
              </div>

              <div className='text-xs font-extrabold tracking-widest text-muted'>SAMPLES</div>

              <div className='flex items-center gap-2'>
                <button type='button' onClick={() => set_active_index(active_index === 0 ? safe_imgs.length - 1 : active_index - 1)} className='h-8 w-10 rounded-ui border border-line/30 bg-surface/18 hover:bg-surface/28 text-sm font-extrabold text-text/90 transition-colors' disabled={safe_imgs.length <= 1}>
                  ‹
                </button>
                <button type='button' onClick={() => set_active_index(active_index === safe_imgs.length - 1 ? 0 : active_index + 1)} className='h-8 w-10 rounded-ui border border-line/30 bg-surface/18 hover:bg-surface/28 text-sm font-extrabold text-text/90 transition-colors' disabled={safe_imgs.length <= 1}>
                  ›
                </button>
              </div>
            </div>

            <div className='relative'>
              <img src={safe_imgs[active_index]} alt={title + ' sample'} className='h-80 w-full object-cover object-center' />
              <div className='absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent' />
            </div>

            <div className='flex flex-wrap items-center gap-2 px-4 py-4'>
              {safe_imgs.map((_, i) => (
                <button key={title + '_dot_' + i} type='button' onClick={() => set_active_index(i)} className={active_index === i ? 'h-10 w-14 rounded-ui border border-line/30 bg-accent/10' : 'h-10 w-14 rounded-ui border border-line/30 bg-surface/18 hover:bg-surface/28 transition-colors'} />
              ))}
              <div className='ml-auto text-xs font-semibold tracking-wide text-muted'>{active_index + 1} / {safe_imgs.length}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
