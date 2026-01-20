import Navbar from './Navbar'
import titus_logo from '../imgs/titus_ai_logo.png'

const architecture_stats = [
  { k: 'Decoder layers', v: '8' },
  { k: 'd_model', v: '1024' },
  { k: 'Attention heads', v: '16' },
  { k: 'FFN dim', v: '4096' },
  { k: 'Vocab embeddings', v: '50,259' },
  { k: 'Positional embeddings', v: '200' },
  { k: 'Adaptive softmax', v: 'Head 2,000 • Tail 10,000' },
  { k: 'Trainable params', v: '159.4M' },
]

const param_breakdown = [
  { k: 'Embeddings', v: '~51M' },
  { k: 'Transformer layers', v: '~100M' },
  { k: 'Adaptive softmax', v: '~7M' },
]

const dataset_items = [
  { t: 'Wikipedia articles (Wikidump subset)', d: 'Baseline English + common concepts' },
  { t: 'William Shakespeare (complete works)', d: 'Old-English flavour + roleplay tone' },
  { t: 'Romantic novels (small collection)', d: 'Dialogue + stylistic variation' },
  { t: 'Distilled Falcon outputs', d: 'Q&A coverage across topics' },
]

const training_stats = [
  { k: 'OS', v: 'Arch Linux' },
  { k: 'GPU', v: 'RTX 3090 (24GB VRAM)' },
  { k: 'RAM', v: '64GB' },
  { k: 'Storage', v: '1TB NVMe (datasets)' },
  { k: 'Runtime', v: '100s of hours over weeks' },
  { k: 'Setup', v: 'Single-GPU home server' },
]

export default function TitusAIPage() {
  return (
    <div className='w-full'>
      <Navbar />

      <main className='w-full px-4 pt-28 pb-20'>
        <div className='mx-auto max-w-6xl'>
          <header className='flex flex-col items-center text-center'>
            <div className='inline-flex w-fit items-center gap-3 rounded-full border border-line/40 bg-surface/35 px-4 py-2 text-text backdrop-blur-xl'>
              <img src={titus_logo} alt='Titus AI logo' className='h-5 w-5 rounded-sm' />
              <span className='text-xs font-extrabold tracking-widest text-accent-2'>PROJECT</span>
              <span aria-hidden='true' className='font-bold text-muted/70'>•</span>
              <span className='text-xs font-bold tracking-widest text-text/90'>TITUS AI</span>
            </div>

            <h1 className='mt-6 m-0 text-4xl font-extrabold leading-[1.02] text-text sm:text-5xl lg:text-6xl'>Titus AI</h1>

            <p className='mt-4 m-0 max-w-2xl text-base leading-relaxed text-muted sm:text-lg'>
              TitusAI is a GPT-style decoder model trained on raw text to predict the next token. Built from scratch, tuned over hundreds of hours, and designed with a model-first workflow for inference and iteration.
            </p>

            <div className='mt-6 flex flex-wrap items-center justify-center gap-4'>
              <a href='https://github.com/jaredturck/TitusAI' target='_blank' rel='noreferrer' className='inline-flex items-center justify-center rounded-ui bg-accent-2/90 hover:bg-accent-2 px-5 py-3 text-sm font-extrabold leading-none text-bg border border-line/30 transition-colors'>GitHub</a>
              <a href='https://github.com/jaredturck/TitusAI' target='_blank' rel='noreferrer' className='inline-flex items-center justify-center rounded-ui border border-accent-2/35 bg-surface/30 hover:bg-surface/40 px-5 py-3 text-sm font-extrabold leading-none text-text backdrop-blur-xl transition-colors'>Read repo</a>
            </div>
          </header>

          <section className='mt-12 grid gap-6 lg:grid-cols-2'>
            <div className='rounded-ui border border-line/40 bg-gradient-to-b from-bg/60 via-surface/25 to-bg/60 backdrop-blur-xl'>
              <div className='flex items-center justify-between border-b border-line/30 bg-surface/20 px-6 py-4'>
                <div className='flex items-center gap-3'>
                  <div className='grid h-9 w-9 place-items-center rounded-ui border border-line/30 bg-accent-2/15 text-accent-2 font-extrabold'>A</div>
                  <div className='text-sm font-extrabold tracking-widest text-text'>ARCHITECTURE</div>
                </div>
              </div>

              <div className='px-6 py-6'>
                <div className='flex flex-wrap gap-3'>
                  {architecture_stats.map((s) => (
                    <div key={s.k} className='rounded-ui border border-line/30 bg-surface/30 px-4 py-3 backdrop-blur-xl'>
                      <div className='text-xs font-extrabold tracking-widest text-muted'>{s.k}</div>
                      <div className='mt-1 text-sm font-semibold text-text'>{s.v}</div>
                    </div>
                  ))}
                </div>

                <div className='mt-6 rounded-ui border border-line/30 bg-surface/25 px-5 py-4'>
                  <div className='text-xs font-extrabold tracking-widest text-muted'>PARAMETER BREAKDOWN</div>
                  <div className='mt-3 flex flex-wrap gap-3'>
                    {param_breakdown.map((s) => (
                      <div key={s.k} className='inline-flex items-center gap-3 rounded-full border border-line/30 bg-surface/30 px-4 py-2 text-sm text-text backdrop-blur-xl'>
                        <span className='font-semibold text-text/90'>{s.k}</span>
                        <span className='font-extrabold text-accent-2'>{s.v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className='rounded-ui border border-line/40 bg-gradient-to-b from-bg/60 via-surface/25 to-bg/60 backdrop-blur-xl'>
              <div className='flex items-center justify-between border-b border-line/30 bg-surface/20 px-6 py-4'>
                <div className='flex items-center gap-3'>
                  <div className='grid h-9 w-9 place-items-center rounded-ui border border-line/30 bg-accent/15 text-accent font-extrabold'>F</div>
                  <div className='text-sm font-extrabold tracking-widest text-text'>FORWARD PASS</div>
                </div>
              </div>

              <div className='px-6 py-6'>
                <div className='rounded-ui border border-line/30 bg-surface/30 px-5 py-4'>
                  <div className='text-xs font-extrabold tracking-widest text-muted'>FORMULA</div>
                  <pre className='mt-3 m-0 whitespace-pre-wrap rounded-ui border border-line/30 bg-bg/40 px-4 py-3 text-xs text-text/90 font-mono'>
logits = Decoder(
  dropout(source_embeddings * sqrt(d_model) + position_embeddings),
  mask
)
                  </pre>
                </div>

                <div className='mt-6 grid gap-3'>
                  <div className='rounded-ui border border-line/30 bg-surface/25 px-5 py-4'>
                    <div className='text-sm font-semibold text-text'>Causal triangular mask</div>
                    <div className='mt-2 text-sm leading-relaxed text-muted'>Ensures the model only attends to previous tokens when predicting the next token.</div>
                  </div>

                  <div className='rounded-ui border border-line/30 bg-surface/25 px-5 py-4'>
                    <div className='text-sm font-semibold text-text'>Scaled embeddings</div>
                    <div className='mt-2 text-sm leading-relaxed text-muted'>Multiplying token embeddings by sqrt(d_model) gives them more weight relative to positional embeddings.</div>
                  </div>

                  <div className='rounded-ui border border-line/30 bg-surface/25 px-5 py-4'>
                    <div className='text-sm font-semibold text-text'>Dropout</div>
                    <div className='mt-2 text-sm leading-relaxed text-muted'>Dropout 0.1 during training helps reduce overfitting and improves generalisation.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className='rounded-ui border border-line/40 bg-gradient-to-b from-bg/60 via-surface/25 to-bg/60 backdrop-blur-xl'>
              <div className='flex items-center justify-between border-b border-line/30 bg-surface/20 px-6 py-4'>
                <div className='flex items-center gap-3'>
                  <div className='grid h-9 w-9 place-items-center rounded-ui border border-line/30 bg-anyhjs/10 text-anyhjs font-extrabold'>D</div>
                  <div className='text-sm font-extrabold tracking-widest text-text'>DATASETS</div>
                </div>
              </div>

              <div className='px-6 py-6'>
                <div className='grid gap-3'>
                  {dataset_items.map((x) => (
                    <div key={x.t} className='rounded-ui border border-line/30 bg-surface/25 px-5 py-4'>
                      <div className='text-sm font-extrabold text-text'>{x.t}</div>
                      <div className='mt-2 text-sm leading-relaxed text-muted'>{x.d}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='rounded-ui border border-line/40 bg-gradient-to-b from-bg/60 via-surface/25 to-bg/60 backdrop-blur-xl'>
              <div className='flex items-center justify-between border-b border-line/30 bg-surface/20 px-6 py-4'>
                <div className='flex items-center gap-3'>
                  <div className='grid h-9 w-9 place-items-center rounded-ui border border-line/30 bg-accent/15 text-accent font-extrabold'>T</div>
                  <div className='text-sm font-extrabold tracking-widest text-text'>TRAINING</div>
                </div>
              </div>

              <div className='px-6 py-6'>
                <div className='flex flex-wrap gap-3'>
                  {training_stats.map((s) => (
                    <div key={s.k} className='rounded-ui border border-line/30 bg-surface/30 px-4 py-3 backdrop-blur-xl'>
                      <div className='text-xs font-extrabold tracking-widest text-muted'>{s.k}</div>
                      <div className='mt-1 text-sm font-semibold text-text'>{s.v}</div>
                    </div>
                  ))}
                </div>

                <div className='mt-6 rounded-ui border border-line/30 bg-surface/25 px-5 py-4'>
                  <div className='text-sm font-semibold text-text'>Notes</div>
                  <div className='mt-2 text-sm leading-relaxed text-muted'>Training was run on a home server over several weeks on a single GPU, iterating on datasets, prompts, and sampling quality to shape the model’s voice and reliability.</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
