type LLMCardProps = {
  title: string
  model_id: string
  hf_url: string
  desc: string
  prompt: string
  output: string
  params_text?: string
}

export default function LLMCard({ title, model_id, hf_url, desc, prompt, output, params_text }: LLMCardProps) {
  return (
    <div className='rounded-ui border border-line/40 bg-gradient-to-b from-bg/50 via-surface/16 to-bg/55 backdrop-blur-xl shadow-xl overflow-hidden'>
      <div aria-hidden='true' className='h-1 w-full bg-gradient-to-r from-accent-2/80 via-anyhjs/50 to-accent/50' />

      <div className='p-5 lg:p-6'>
        <div className='grid gap-5 lg:grid-cols-2 lg:items-start'>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-wrap items-center gap-2'>
              <h3 className='m-0 text-lg font-extrabold text-text'>{title}</h3>
              {params_text ? (
                <span className='rounded-full border border-line/30 bg-surface/18 px-3 py-1 text-xs font-semibold text-text/90 backdrop-blur-xl'>{params_text}</span>
              ) : null}
            </div>

            <div className='text-xs font-extrabold tracking-widest text-muted'>MODEL</div>
            <div className='rounded-ui border border-line/30 bg-bg/25 px-4 py-3'>
              <div className='text-sm font-semibold text-text'>{model_id}</div>
            </div>

            <p className='m-0 text-sm leading-relaxed text-muted'>{desc}</p>

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
              <div className='text-xs font-extrabold tracking-widest text-muted'>EXAMPLE OUTPUT</div>
            </div>

            <div className='px-4 py-4'>
              <pre className='m-0 whitespace-pre-wrap break-words font-mono text-xs leading-relaxed text-text/90'>
                <span className='text-muted'>$</span> python ai_model.py "{model_id}"
                {'\n'}
                <span className='text-accent-2'>{'>'}</span> {prompt}
                {'\n\n'}
                {output}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
