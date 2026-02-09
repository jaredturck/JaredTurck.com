import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LLMCard from './LLMCard'
import AiModelsHero from './AiModelsHero'
import { ModelsSection } from './ModelsSection'
import llm_models from './llm_models'
import ImageGenCard from './ImageGenCard'
import image_generation_models from './image_models'

export default function AiModelsPage() {
  
  return (
    <div className='w-full'>
      <Navbar />

      <main className='w-full px-4 pt-28 pb-20'>
        <div className='mx-auto max-w-6xl'>
          <AiModelsHero />

          <div className='mt-10 grid gap-6'>
            <ModelsSection id='llms' title='Large Language Models' desc='Instruction, chat, reasoning, and coding-focused LLMs.' count_text='18 models' bar_class='from-accent-2/80 via-anyhjs/50 to-accent/50'>
              {llm_models.map((m: any, idx: any) => (
                <div key={m.model_id + '-' + idx} className='w-full'>
                  <LLMCard title={m.title} model_id={m.model_id} hf_url={'https://huggingface.co/' + m.model_id} desc={m.desc} params_text={m.params_text} prompt={m.prompt} output={m.output} />
                </div>
              ))}
            </ModelsSection>

            <ModelsSection id='image_generation' title='Image Generation' desc='Text-to-image models with example image carousels per card.' count_text='9 models' bar_class='from-accent/70 via-transparent to-transparent'>
              {image_generation_models.map((m, idx) => (
                <div key={m.model_id + '-' + idx} className='w-full'>
                  <ImageGenCard title={m.title} model_id={m.model_id} hf_url={m.hf_url} desc={m.desc} params_text={m.params_text} imgs={m.imgs} />
                </div>
              ))}
            </ModelsSection>

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
