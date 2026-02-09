import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import use_scroll_to_section from '../hooks/UseScrollToSection'

type ModelsSectionProps = {
  id: string
  title: string
  desc: string
  count_text: string
  bar_class: string
}

function ModelsSection({ id, title, desc, count_text, bar_class }: ModelsSectionProps) {
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

        <div data-models-slot={id} className='mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3' />
      </div>
    </section>
  )
}

export default function AiModelsPage() {
  const { scroll_to } = use_scroll_to_section()

  return (
    <div className='w-full'>
      <Navbar />

      <main className='w-full px-4 pt-28 pb-20'>
        <div className='mx-auto max-w-6xl'>
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

          <div className='mt-10 grid gap-6'>
            <ModelsSection id='llms' title='Large Language Models' desc='Instruction, chat, reasoning, and coding-focused LLMs.' count_text='18 models' bar_class='from-accent-2/80 via-anyhjs/50 to-accent/50' />
            <ModelsSection id='image_generation' title='Image Generation' desc='Text-to-image models with example image carousels per card.' count_text='9 models' bar_class='from-accent/70 via-transparent to-transparent' />
            <ModelsSection id='video_generation' title='Video Generation' desc='Text-to-video models with an embedded clip per card.' count_text='8 models' bar_class='from-anyhjs/70 via-transparent to-transparent' />
            <ModelsSection id='audio' title='Audio' desc='Audio generation, TTS, ASR, and real-time speech models.' count_text='6 models' bar_class='from-accent-2/70 via-transparent to-transparent' />
            <ModelsSection id='semantic_search' title='Semantic Text Search' desc='Embedding + retrieval models, including text-image semantic search.' count_text='4 models' bar_class='from-anyhjs/60 via-transparent to-transparent' />
            <ModelsSection id='autocomplete' title='Autocomplete + Mask Fill' desc='Masked-token and completion models (BERT-style).' count_text='3 models' bar_class='from-accent/60 via-transparent to-transparent' />
            <ModelsSection id='photo_edit' title='Edit Photos' desc='Image editing and background removal style models.' count_text='3 models' bar_class='from-accent-2/60 via-transparent to-transparent' />
            <ModelsSection id='upscalers' title='Image Upscalers' desc='Super-resolution models and upscalers.' count_text='2 models' bar_class='from-anyhjs/55 via-transparent to-transparent' />
            <ModelsSection id='misc' title='Miscellaneous' desc='Useful models that don’t fit cleanly into the other categories.' count_text='10 models' bar_class='from-accent/55 via-transparent to-transparent' />
          </div>

          <div className='mt-10'>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
