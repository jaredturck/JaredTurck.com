

type ModelsSectionProps = {
  id: string
  title: string
  desc: string
  count_text: string
  bar_class: string
  children?: any
}

export function ModelsSection({ id, title, desc, count_text, bar_class, children }: ModelsSectionProps) {
  return (
    <section id={id} className='scroll-mt-32 rounded-ui border border-line/40 bg-gradient-to-b from-bg/50 via-surface/16 to-bg/55 backdrop-blur-xl shadow-xl overflow-hidden'>
      <div aria-hidden='true' className={'h-1 w-full bg-gradient-to-r ' + bar_class} />
      <div className='px-6 py-6'>
        <div className='flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between'>
          <div>
            <h2 className='m-0 text-2xl font-extrabold text-text'>{title}</h2>
            <p className='m-0 mt-2 max-w-3xl text-sm leading-relaxed text-muted'>{desc}</p>
          </div>
          <div className='mt-4 sm:mt-0 inline-flex items-center gap-2 rounded-full border border-line/30 bg-surface/18 px-4 py-2 text-xs font-semibold text-text/90 backdrop-blur-xl'>{count_text}</div>
        </div>

        <div data-models-slot={id} className='mt-6 flex flex-col gap-4'>
          {children}
        </div>
      </div>
    </section>
  )
}
