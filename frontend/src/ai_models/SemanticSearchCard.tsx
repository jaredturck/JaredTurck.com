type SemanticSearchCardProps = {
  title: string
  model_id: string
  hf_url: string
  desc: string
  query?: string
  params_text?: string
}

export default function SemanticSearchCard({ title, model_id, hf_url, desc, query, params_text }: SemanticSearchCardProps) {
  return (
    <div className='rounded-ui border border-line/40 bg-gradient-to-b from-bg/50 via-surface/16 to-bg/55 backdrop-blur-xl shadow-xl overflow-hidden'>
      <div aria-hidden='true' className='h-1 w-full bg-gradient-to-r from-anyhjs/70 via-transparent to-transparent' />

      <div className='p-5 lg:p-6'>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-wrap items-center gap-2'>
            <h3 className='m-0 text-lg font-extrabold text-text'>{title}</h3>
            {params_text ? <span className='rounded-full border border-line/30 bg-surface/18 px-3 py-1 text-xs font-semibold text-text/90 backdrop-blur-xl'>{params_text}</span> : null}
            <span className='rounded-full border border-line/30 bg-surface/12 px-3 py-1 text-xs font-extrabold tracking-widest text-text/80 backdrop-blur-xl'>NO MEDIA DEMO</span>
          </div>

          <div className='text-xs font-extrabold tracking-widest text-muted'>MODEL</div>
          <div className='rounded-ui border border-line/30 bg-bg/25 px-4 py-3'>
            <div className='text-sm font-semibold text-text'>{model_id}</div>
          </div>

          <p className='m-0 text-sm leading-relaxed text-muted'>{desc}</p>

          {query ? (
            <>
              <div className='text-xs font-extrabold tracking-widest text-muted'>EXAMPLE QUERY</div>
              <div className='rounded-ui border border-line/30 bg-bg/25 px-4 py-3'>
                <div className='whitespace-pre-wrap break-words font-mono text-xs leading-relaxed text-text/90'>{query}</div>
              </div>
            </>
          ) : null}

          <div className='mt-1 flex flex-wrap gap-2'>
            <a href={hf_url} target='_blank' rel='noreferrer' className='inline-flex items-center justify-center rounded-ui border border-line/40 bg-surface/18 hover:bg-surface/28 px-4 py-2 text-xs font-extrabold tracking-widest text-text/90 backdrop-blur-xl transition-colors'>
              HUGGING FACE
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
