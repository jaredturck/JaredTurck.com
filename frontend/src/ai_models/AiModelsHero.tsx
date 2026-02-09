import use_scroll_to_section from '../hooks/UseScrollToSection'

export default function AiModelsHero() {
  const { scroll_to } = use_scroll_to_section()

  return (
    <section className='relative overflow-hidden rounded-ui border border-line/40 bg-gradient-to-b from-bg/45 via-surface/18 to-bg/55 backdrop-blur-xl shadow-2xl'>
      <div aria-hidden='true' className='pointer-events-none absolute inset-0'>
        <div className='absolute inset-0 bg-gradient-to-tr from-transparent via-surface/10 to-transparent' />
        <div className='absolute -top-48 -left-48 h-[34rem] w-[34rem] rounded-full bg-accent-2/12 blur-3xl' />
        <div className='absolute -bottom-56 right-0 h-[38rem] w-[38rem] rounded-full bg-anyhjs/10 blur-3xl' />
        <div className='absolute inset-0 bg-gradient-to-b from-bg/10 via-transparent to-bg/40' />
      </div>

      <div aria-hidden='true' className='relative h-1 w-full bg-gradient-to-r from-accent-2/90 via-anyhjs/60 to-accent/60' />

      <div className='relative grid gap-10 px-6 py-10 lg:grid-cols-2 lg:items-center'>
        <div className='flex flex-col gap-5'>
          <div className='inline-flex w-fit items-center gap-3 rounded-full border border-line/40 bg-surface/20 px-4 py-2 text-text backdrop-blur-xl'>
            <span className='text-xs font-extrabold tracking-widest text-accent-2'>LIBRARY</span>
            <span aria-hidden='true' className='font-bold text-muted/70'>•</span>
            <span className='text-xs font-bold tracking-widest text-text/90'>INTERESTING MODELS</span>
          </div>

          <h1 className='m-0 text-4xl font-extrabold leading-[1.02] text-text sm:text-5xl lg:text-6xl'>Interesting AI Models</h1>

          <p className='m-0 max-w-2xl text-base leading-relaxed text-muted sm:text-lg'>
            A curated collection of interesting Hugging Face AI models for LLMs, generation, retrieval, and utilities. Each category below contains model cards.
          </p>

          <div className='mt-1 flex flex-wrap gap-2'>
            <span className='rounded-full border border-line/40 bg-surface/18 px-3 py-2 text-xs font-semibold text-text/90 backdrop-blur-xl'>Hugging Face links</span>
            <span className='rounded-full border border-line/40 bg-surface/18 px-3 py-2 text-xs font-semibold text-text/90 backdrop-blur-xl'>Media demos</span>
            <span className='rounded-full border border-line/40 bg-surface/18 px-3 py-2 text-xs font-semibold text-text/90 backdrop-blur-xl'>Categories</span>
          </div>

          <div className='mt-3 flex flex-wrap items-center gap-3'>
            <button type='button' onClick={() => scroll_to('llms')} className='inline-flex items-center justify-center rounded-ui bg-accent-2/90 hover:bg-accent-2 px-5 py-3 text-sm font-extrabold leading-none text-bg border border-line/30 transition-colors'>Large Language Models</button>
            <button type='button' onClick={() => scroll_to('image_generation')} className='inline-flex items-center justify-center rounded-ui border border-line/40 bg-surface/18 hover:bg-surface/28 px-5 py-3 text-sm font-extrabold leading-none text-text backdrop-blur-xl transition-colors'>Image Generation</button>
            <button type='button' onClick={() => scroll_to('video_generation')} className='inline-flex items-center justify-center rounded-ui border border-line/40 bg-surface/18 hover:bg-surface/28 px-5 py-3 text-sm font-extrabold leading-none text-text backdrop-blur-xl transition-colors'>Video Generation</button>
          </div>
        </div>

        <div className='rounded-ui border border-line/40 bg-surface/16 backdrop-blur-xl overflow-hidden'>
          <div className='border-b border-line/30 bg-surface/14 px-5 py-4'>
            <div className='text-xs font-extrabold tracking-widest text-muted'>CATEGORY INDEX</div>
          </div>

          <div className='px-5 py-5'>
            <div className='flex flex-wrap gap-2'>
              <button type='button' onClick={() => scroll_to('llms')} className='rounded-full border border-line/40 bg-surface/18 hover:bg-surface/28 px-4 py-2 text-xs font-extrabold tracking-widest text-text/90 backdrop-blur-xl transition-colors'>LLMs</button>
              <button type='button' onClick={() => scroll_to('image_generation')} className='rounded-full border border-line/40 bg-surface/18 hover:bg-surface/28 px-4 py-2 text-xs font-extrabold tracking-widest text-text/90 backdrop-blur-xl transition-colors'>Image Gen</button>
              <button type='button' onClick={() => scroll_to('video_generation')} className='rounded-full border border-line/40 bg-surface/18 hover:bg-surface/28 px-4 py-2 text-xs font-extrabold tracking-widest text-text/90 backdrop-blur-xl transition-colors'>Video Gen</button>
              <button type='button' onClick={() => scroll_to('audio')} className='rounded-full border border-line/40 bg-surface/18 hover:bg-surface/28 px-4 py-2 text-xs font-extrabold tracking-widest text-text/90 backdrop-blur-xl transition-colors'>Audio</button>
              <button type='button' onClick={() => scroll_to('semantic_search')} className='rounded-full border border-line/40 bg-surface/18 hover:bg-surface/28 px-4 py-2 text-xs font-extrabold tracking-widest text-text/90 backdrop-blur-xl transition-colors'>Semantic Search</button>
              <button type='button' onClick={() => scroll_to('autocomplete')} className='rounded-full border border-line/40 bg-surface/18 hover:bg-surface/28 px-4 py-2 text-xs font-extrabold tracking-widest text-text/90 backdrop-blur-xl transition-colors'>Autocomplete</button>
              <button type='button' onClick={() => scroll_to('photo_edit')} className='rounded-full border border-line/40 bg-surface/18 hover:bg-surface/28 px-4 py-2 text-xs font-extrabold tracking-widest text-text/90 backdrop-blur-xl transition-colors'>Edit Photos</button>
              <button type='button' onClick={() => scroll_to('upscalers')} className='rounded-full border border-line/40 bg-surface/18 hover:bg-surface/28 px-4 py-2 text-xs font-extrabold tracking-widest text-text/90 backdrop-blur-xl transition-colors'>Upscalers</button>
              <button type='button' onClick={() => scroll_to('misc')} className='rounded-full border border-line/40 bg-surface/18 hover:bg-surface/28 px-4 py-2 text-xs font-extrabold tracking-widest text-text/90 backdrop-blur-xl transition-colors'>Misc</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
