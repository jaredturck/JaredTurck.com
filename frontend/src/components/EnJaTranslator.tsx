const enja_examples = [
  { en: 'cat', ja: '猫' },
  { en: 'cat girls', ja: '猫の子' },
  { en: 'where is the station?', ja: '駅はどこですか？' },
  { en: 'I build AI systems from scratch.', ja: '私はAIシステムを一から作ります。' },
  { en: 'translate this sentence for me', ja: 'この文を翻訳してください' },
]

const enja_features = [
  'Transformer encoder-decoder',
  'Custom byte-level tokenizer',
  'Positional embeddings (EN/JA)',
  'Adaptive softmax',
  'PyTorch',
]

export default function EnJaTranslatorSection() {
  return (
    <section id='enja' className='relative w-full overflow-hidden px-4 py-20'>
      <div aria-hidden='true' className='absolute inset-0 pointer-events-none'>
        <div className='absolute inset-0 bg-gradient-to-b from-[#2a1217]/28 via-bg to-bg' />
        <div className='absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:64px_64px]' />
        <div className='absolute inset-0 opacity-[0.05] [background-image:repeating-linear-gradient(135deg,rgba(255,255,255,0.18)_0,rgba(255,255,255,0.18)_1px,transparent_1px,transparent_14px)]' />
        <div className='absolute -top-24 right-0 h-[28rem] w-[28rem] rounded-full bg-[#ff3b3b]/10 blur-3xl' />
        <div className='absolute -bottom-40 -left-24 h-[30rem] w-[30rem] rounded-full bg-accent/10 blur-3xl' />
      </div>

      <div className='relative mx-auto max-w-6xl rounded-ui border border-line/40 bg-gradient-to-b from-bg/55 via-surface/18 to-bg/55 backdrop-blur-xl'>
        <div className='grid gap-10 px-6 py-10 lg:grid-cols-2 lg:items-center'>
          <div className='flex flex-col gap-5'>
            <div className='inline-flex w-fit items-center gap-3 rounded-full border border-line/40 bg-surface/35 px-4 py-2 text-text backdrop-blur-xl'>
              <span className='text-xs font-extrabold tracking-widest text-accent'>PROJECT</span>
              <span aria-hidden='true' className='font-bold text-muted/70'>•</span>
              <span className='text-xs font-bold tracking-widest text-text/90'>EN → JA TRANSLATOR</span>
            </div>

            <h2 className='m-0 text-4xl font-extrabold leading-[1.02] text-text sm:text-5xl'>English → Japanese Translator</h2>

            <p className='m-0 max-w-xl text-base leading-relaxed text-muted sm:text-lg'>
              A custom tokeniser + transformer encoder/decoder that translates between English and Japanese, designed for real-world inference and dataset iteration.
            </p>

            <div className='mt-1 flex flex-wrap gap-3'>
              {enja_features.map((x) => (
                <span key={x} className='rounded-full border border-line/40 bg-surface/35 px-3 py-2 text-sm text-text backdrop-blur-lg'>{x}</span>
              ))}
            </div>

            <div className='mt-3 flex flex-wrap gap-4'>
              <a href='https://github.com/jaredturck/en-ja-translator' target='_blank' rel='noreferrer' className='inline-flex items-center justify-center rounded-ui bg-accent/90 hover:bg-accent px-5 py-3 text-sm font-extrabold leading-none text-bg border border-line/30 transition-colors'>GitHub</a>
            </div>
          </div>

          <div className='rounded-ui border border-line/40 bg-gradient-to-b from-surface/30 via-surface/20 to-surface/30 backdrop-blur-xl overflow-hidden shadow-2xl'>
            <div className='flex items-center justify-between border-b border-line/30 bg-surface/25 px-5 py-4'>
              <div className='text-xs font-extrabold tracking-widest text-muted'>AI TRANSLATION</div>
              <div className='inline-flex items-center gap-2 rounded-full border border-line/30 bg-surface/30 px-3 py-1 text-xs font-semibold text-text/90'>
                <span className='text-text'>EN</span>
                <span className='text-accent enja_arrow'>→</span>
                <span className='text-text'>JA</span>
              </div>
            </div>

            <div className='grid gap-4 p-5 lg:grid-cols-2'>
              <div className='rounded-ui border border-line/30 bg-surface/25 p-4'>
                <div className='flex items-center justify-between'>
                  <div className='text-xs font-extrabold tracking-widest text-muted'>English</div>
                  <div className='text-xs font-semibold text-muted'>Input</div>
                </div>

                <div className='mt-3 space-y-2'>
                  {enja_examples.map((x) => (
                    <div key={x.en} className='rounded-ui border border-line/30 bg-bg/35 px-3 py-2 text-sm text-text shadow-sm'>
                      {x.en}
                    </div>
                  ))}
                </div>
              </div>

              <div className='rounded-ui border border-line/30 bg-surface/25 p-4'>
                <div className='flex items-center justify-between'>
                  <div className='text-xs font-extrabold tracking-widest text-muted'>Japanese</div>
                  <div className='text-xs font-semibold text-muted'>Output</div>
                </div>

                <div className='mt-3 space-y-2'>
                  {enja_examples.map((x) => (
                    <div key={x.ja} className='rounded-ui border border-line/30 bg-bg/35 px-3 py-2 text-sm text-text shadow-sm'>
                      {x.ja}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='border-t border-line/30 bg-surface/20 px-5 py-4'>
              <div className='space-y-2'>
                {enja_examples.slice(0, 3).map((x) => (
                  <div key={x.en} className='flex items-center gap-3 rounded-ui border border-line/30 bg-surface/25 px-4 py-3'>
                    <div className='min-w-0 flex-1 text-sm text-text truncate'>{x.en}</div>
                    <div className='enja_arrow text-sm font-extrabold text-accent'>→</div>
                    <div className='min-w-0 flex-1 text-sm text-text truncate text-right'>{x.ja}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
