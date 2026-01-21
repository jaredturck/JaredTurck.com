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
          <section className='relative overflow-x-auto lg:overflow-hidden rounded-ui border border-line/40 bg-gradient-to-b from-bg/45 via-surface/18 to-bg/55 backdrop-blur-xl shadow-2xl'>
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
                  <img src={titus_logo} alt='Titus AI logo' className='h-5 w-5 rounded-sm' />
                  <span className='text-xs font-extrabold tracking-widest text-accent-2'>PROJECT</span>
                  <span aria-hidden='true' className='font-bold text-muted/70'>•</span>
                  <span className='text-xs font-bold tracking-widest text-text/90'>TITUS AI</span>
                </div>

                <h1 className='m-0 text-4xl font-extrabold leading-[1.02] text-text sm:text-5xl lg:text-6xl'>Titus AI</h1>

                <p className='m-0 max-w-2xl text-base leading-relaxed text-muted sm:text-lg'>
                  TitusAI is a decoder-only GPT model trained on raw text to predict the next token. Built from scratch, tuned over hundreds of hours, and designed with a model-first workflow for inference and iteration.
                </p>

                <div className='mt-1 flex flex-wrap gap-2'>
                  <span className='rounded-full border border-line/40 bg-surface/18 px-3 py-2 text-xs font-semibold text-text/90 backdrop-blur-xl'>Decoder-only</span>
                  <span className='rounded-full border border-line/40 bg-surface/18 px-3 py-2 text-xs font-semibold text-text/90 backdrop-blur-xl'>159.4M params</span>
                  <span className='rounded-full border border-line/40 bg-surface/18 px-3 py-2 text-xs font-semibold text-text/90 backdrop-blur-xl'>RTX 3090 training</span>
                  <span className='rounded-full border border-line/40 bg-surface/18 px-3 py-2 text-xs font-semibold text-text/90 backdrop-blur-xl'>Adaptive softmax</span>
                </div>

                <div className='mt-3 flex flex-wrap items-center gap-4'>
                  <a href='https://github.com/jaredturck/TitusAI' target='_blank' rel='noreferrer' className='inline-flex items-center justify-center rounded-ui bg-accent-2/90 hover:bg-accent-2 px-5 py-3 text-sm font-extrabold leading-none text-bg border border-line/30 transition-colors'>GitHub</a>
                  <a href='https://github.com/jaredturck/TitusAI' target='_blank' rel='noreferrer' className='inline-flex items-center justify-center rounded-ui border border-line/40 bg-surface/18 hover:bg-surface/28 px-5 py-3 text-sm font-extrabold leading-none text-text backdrop-blur-xl transition-colors'>Read repo</a>
                </div>
              </div>

              <div className='grid gap-4'>
                <div className='rounded-ui border border-line/40 bg-surface/16 backdrop-blur-xl'>
                  <div className='flex items-center justify-between border-b border-line/30 bg-surface/14 px-5 py-4'>
                    <div className='flex items-center gap-3'>
                      <div className='grid h-9 w-9 place-items-center rounded-ui border border-line/30 bg-accent-2/15 text-accent-2 font-extrabold'>S</div>
                      <div className='text-sm font-extrabold tracking-widest text-text'>SNAPSHOT</div>
                    </div>
                    <div className='text-xs font-semibold tracking-widest text-muted'>AT A GLANCE</div>
                  </div>

                  <div className='grid grid-cols-2 gap-3 px-5 py-5 sm:grid-cols-4'>
                    <div className='rounded-ui border border-line/30 bg-bg/25 px-4 py-3'>
                      <div className='text-xs font-extrabold tracking-widest text-muted'>LAYERS</div>
                      <div className='mt-1 text-lg font-extrabold text-text'>8</div>
                    </div>
                    <div className='rounded-ui border border-line/30 bg-bg/25 px-4 py-3'>
                      <div className='text-xs font-extrabold tracking-widest text-muted'>D_MODEL</div>
                      <div className='mt-1 text-lg font-extrabold text-text'>1024</div>
                    </div>
                    <div className='rounded-ui border border-line/30 bg-bg/25 px-4 py-3'>
                      <div className='text-xs font-extrabold tracking-widest text-muted'>NHEADS</div>
                      <div className='mt-1 text-lg font-extrabold text-text'>16</div>
                    </div>
                    <div className='rounded-ui border border-line/30 bg-bg/25 px-4 py-3'>
                      <div className='text-xs font-extrabold tracking-widest text-muted'>VOCAB</div>
                      <div className='mt-1 text-lg font-extrabold text-text'>50k</div>
                    </div>
                  </div>

                  <div className='px-5 pb-5'>
                    <div className='rounded-ui border border-line/30 bg-bg/20 px-5 py-4'>
                      <div className='text-xs font-extrabold tracking-widest text-muted'>FORMULA</div>
                      <pre className='mt-3 m-0 whitespace-pre-wrap break-words rounded-ui border border-line/30 bg-bg/35 px-4 py-3 text-xs text-text/90 font-mono'>
logits = Decoder(
  dropout(source_embeddings * sqrt(d_model) + position_embeddings),
  mask
)
                      </pre>
                    </div>
                  </div>
                </div>

                <div className='rounded-ui border border-line/40 bg-gradient-to-r from-anyhjs/10 via-surface/14 to-accent/10 px-5 py-5 backdrop-blur-xl'>
                  <div className='text-xs font-extrabold tracking-widest text-muted'>WHY IT’S INTERESTING</div>
                  <div className='mt-2 text-sm leading-relaxed text-text/90'>A small-but-serious transformer built end-to-end: data curation, training runs, sampling, and UI. The page below breaks it down.</div>
                </div>
              </div>
            </div>
          </section>

          <section className='mt-10 grid gap-6 lg:grid-cols-12'>
            <div className='lg:col-span-7 rounded-ui border border-line/40 bg-gradient-to-b from-bg/50 via-surface/16 to-bg/55 backdrop-blur-xl shadow-xl overflow-x-auto lg:overflow-hidden'>
              <div aria-hidden='true' className='h-1 w-full bg-gradient-to-r from-accent-2/80 via-transparent to-transparent' />
              <div className='flex items-center justify-between border-b border-line/30 bg-surface/14 px-6 py-4'>
                <div className='flex items-center gap-3'>
                  <div className='grid h-9 w-9 place-items-center rounded-ui border border-line/30 bg-accent-2/15 text-accent-2 font-extrabold'>A</div>
                  <div className='text-sm font-extrabold tracking-widest text-text'>ARCHITECTURE</div>
                </div>
                <div className='text-xs font-semibold tracking-widest text-muted'>MODEL SHAPE</div>
              </div>

              <div className='px-6 py-6'>
                <div className='grid gap-3 sm:grid-cols-2'>
                  {architecture_stats.map((s) => (
                    <div key={s.k} className={(s.k === 'Adaptive softmax' || s.k === 'Trainable params') ? 'sm:col-span-2 rounded-ui border border-line/30 bg-surface/18 px-5 py-4' : 'rounded-ui border border-line/30 bg-surface/18 px-5 py-4'}>
                      <div className='text-xs font-extrabold tracking-widest text-muted'>{s.k}</div>
                      <div className='mt-1 text-sm font-semibold text-text'>{s.v}</div>
                    </div>
                  ))}
                </div>

                <div className='mt-6 rounded-ui border border-line/30 bg-surface/14 px-5 py-4'>
                  <div className='text-xs font-extrabold tracking-widest text-muted'>PARAMETER BREAKDOWN</div>
                  <div className='mt-3 flex flex-wrap gap-3'>
                    {param_breakdown.map((s) => (
                      <div key={s.k} className='inline-flex items-center gap-3 rounded-full border border-line/30 bg-surface/18 px-4 py-2 text-sm text-text backdrop-blur-xl'>
                        <span className='font-semibold text-text/90'>{s.k}</span>
                        <span className='font-extrabold text-accent-2'>{s.v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className='lg:col-span-5 rounded-ui border border-line/40 bg-gradient-to-b from-bg/50 via-surface/16 to-bg/55 backdrop-blur-xl shadow-xl overflow-x-auto lg:overflow-hidden'>
              <div aria-hidden='true' className='h-1 w-full bg-gradient-to-r from-accent/70 via-transparent to-transparent' />
              <div className='flex items-center justify-between border-b border-line/30 bg-surface/14 px-6 py-4'>
                <div className='flex items-center gap-3'>
                  <div className='grid h-9 w-9 place-items-center rounded-ui border border-line/30 bg-accent/15 text-accent font-extrabold'>F</div>
                  <div className='text-sm font-extrabold tracking-widest text-text'>FORWARD PASS</div>
                </div>
                <div className='text-xs font-semibold tracking-widest text-muted'>INFERENCE</div>
              </div>

              <div className='px-6 py-6'>
                <div className='rounded-ui border border-line/30 bg-surface/18 px-5 py-4'>
                  <div className='text-xs font-extrabold tracking-widest text-muted'>KEY IDEAS</div>
                  <div className='mt-3 grid gap-3'>
                    <div className='rounded-ui border border-line/30 bg-bg/20 px-5 py-4'>
                      <div className='text-sm font-semibold text-text'>Causal triangular mask</div>
                      <div className='mt-2 text-sm leading-relaxed text-muted'>Ensures the model only attends to previous tokens when predicting the next token.</div>
                    </div>
                    <div className='rounded-ui border border-line/30 bg-bg/20 px-5 py-4'>
                      <div className='text-sm font-semibold text-text'>Scaled embeddings</div>
                      <div className='mt-2 text-sm leading-relaxed text-muted'>Multiplying token embeddings by sqrt(d_model) gives them more weight relative to positional embeddings.</div>
                    </div>
                    <div className='rounded-ui border border-line/30 bg-bg/20 px-5 py-4'>
                      <div className='text-sm font-semibold text-text'>Dropout</div>
                      <div className='mt-2 text-sm leading-relaxed text-muted'>Dropout 0.1 during training helps reduce overfitting and improves generalisation.</div>
                    </div>
                  </div>
                </div>

                <div className='mt-4 rounded-ui border border-line/30 bg-gradient-to-r from-accent/10 via-surface/14 to-transparent px-5 py-4'>
                  <div className='text-xs font-extrabold tracking-widest text-muted'>NOTE</div>
                  <div className='mt-2 text-sm leading-relaxed text-text/90'>This is the classic decoder workflow: masked self-attention + MLP blocks, tuned for stability and quality with clean scaling choices.</div>
                </div>
              </div>
            </div>

            <div className='lg:col-span-7 rounded-ui border border-line/40 bg-gradient-to-b from-bg/50 via-surface/16 to-bg/55 backdrop-blur-xl shadow-xl overflow-x-auto lg:overflow-hidden'>
              <div aria-hidden='true' className='h-1 w-full bg-gradient-to-r from-anyhjs/80 via-transparent to-transparent' />
              <div className='flex items-center justify-between border-b border-line/30 bg-surface/14 px-6 py-4'>
                <div className='flex items-center gap-3'>
                  <div className='grid h-9 w-9 place-items-center rounded-ui border border-line/30 bg-anyhjs/12 text-anyhjs font-extrabold'>D</div>
                  <div className='text-sm font-extrabold tracking-widest text-text'>DATASETS</div>
                </div>
                <div className='text-xs font-semibold tracking-widest text-muted'>TONE + COVERAGE</div>
              </div>

              <div className='px-6 py-6'>
                <div className='grid gap-3'>
                  {dataset_items.map((x) => (
                    <div key={x.t} className='rounded-ui border border-line/30 bg-surface/18 px-5 py-4'>
                      <div className='flex items-start gap-3'>
                        <div className='mt-0.5 h-2.5 w-2.5 rounded-full bg-anyhjs/70' />
                        <div className='flex-1'>
                          <div className='text-sm font-extrabold text-text'>{x.t}</div>
                          <div className='mt-2 text-sm leading-relaxed text-muted'>{x.d}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className='mt-6 rounded-ui border border-line/30 bg-surface/14 px-5 py-4'>
                  <div className='text-xs font-extrabold tracking-widest text-muted'>DATA CURATION</div>
                  <div className='mt-2 text-sm leading-relaxed text-text/90'>The mix is deliberate: fundamentals (Wikipedia), voice and cadence (Shakespeare + novels), and structured Q&A (distilled Falcon outputs).</div>
                </div>
              </div>
            </div>

            <div className='lg:col-span-5 rounded-ui border border-line/40 bg-gradient-to-b from-bg/50 via-surface/16 to-bg/55 backdrop-blur-xl shadow-xl overflow-x-auto lg:overflow-hidden'>
              <div aria-hidden='true' className='h-1 w-full bg-gradient-to-r from-accent-2/70 via-accent/40 to-transparent' />
              <div className='flex items-center justify-between border-b border-line/30 bg-surface/14 px-6 py-4'>
                <div className='flex items-center gap-3'>
                  <div className='grid h-9 w-9 place-items-center rounded-ui border border-line/30 bg-accent-2/15 text-accent-2 font-extrabold'>T</div>
                  <div className='text-sm font-extrabold tracking-widest text-text'>TRAINING</div>
                </div>
                <div className='text-xs font-semibold tracking-widest text-muted'>HARDWARE</div>
              </div>

              <div className='px-6 py-6'>
                <div className='grid gap-3'>
                  {training_stats.map((s) => (
                    <div key={s.k} className='rounded-ui border border-line/30 bg-surface/18 px-5 py-4'>
                      <div className='text-xs font-extrabold tracking-widest text-muted'>{s.k}</div>
                      <div className='mt-1 text-sm font-semibold text-text'>{s.v}</div>
                    </div>
                  ))}
                </div>

                <div className='mt-4 rounded-ui border border-line/30 bg-gradient-to-r from-accent-2/10 via-surface/14 to-transparent px-5 py-4'>
                  <div className='text-xs font-extrabold tracking-widest text-muted'>NOTES</div>
                  <div className='mt-2 text-sm leading-relaxed text-text/90'>Training was run on a home server over several weeks, iterating on datasets, sampling quality, and model behaviour until it felt consistent.</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
