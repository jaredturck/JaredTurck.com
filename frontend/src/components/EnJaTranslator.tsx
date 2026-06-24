const enja_examples = [
  {
    en: 'python is a high level programming language, used for tasks like AI and websites',
    ja: 'pythonは 人工知能やウェブサイトなどの 高度なプログラミング言語です',
  },
  {
    en: 'modern AI LLMs are used for language translation',
    ja: '近代のAI LLMは翻訳に使われます',
  },
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
              A fine-tuned Qwen3-1.7B model for English-to-Japanese translation. It uses supervised fine-tuning on prompt-and-completion examples, with BF16 multi-GPU training through Hugging Face Accelerate.
            </p>

            <div className='mt-3 flex flex-wrap gap-4'>
              <a href='https://github.com/jaredturck/en-ja-translator' target='_blank' rel='noreferrer' className='inline-flex items-center justify-center rounded-ui bg-accent/90 hover:bg-accent px-5 py-3 text-sm font-extrabold leading-none text-bg border border-line/30 transition-colors'>GitHub</a>
            </div>
          </div>

          <div className='overflow-hidden rounded-ui border border-line/40 bg-[#071116]/90 shadow-2xl backdrop-blur-xl'>
            <div className='flex items-center justify-between border-b border-line/30 bg-surface/35 px-5 py-4'>
              <div className='flex items-center gap-2' aria-hidden='true'>
                <span className='h-2.5 w-2.5 rounded-full bg-muted/35' />
                <span className='h-2.5 w-2.5 rounded-full bg-muted/35' />
                <span className='h-2.5 w-2.5 rounded-full bg-accent/70' />
              </div>

              <div className='text-xs font-extrabold tracking-widest text-muted'>EN2JA</div>

              <div className='inline-flex items-center gap-2 text-xs font-semibold text-text/90'>
                <span>EN</span>
                <span className='text-accent'>→</span>
                <span>JA</span>
              </div>
            </div>

            <div className='border-b border-line/30 px-5 py-3 font-mono text-sm text-muted'>
              <span className='text-accent'>$</span> python main.py
            </div>

            <div className='space-y-7 p-5 font-mono'>
              {enja_examples.map((example) => (
                <div key={example.en} className='space-y-3'>
                  <div className='leading-relaxed text-text'>
                    <span className='mr-2 font-bold text-accent'>&gt;</span>
                    {example.en}
                  </div>

                  <div className='rounded-ui border border-line/30 bg-surface/25 px-4 py-3 leading-relaxed text-text'>
                    <span className='mr-2 font-bold text-muted'>JA:</span>
                    {example.ja}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
