const calc_examples = [
  {
    expr: 'sqrt(2)^2 + sqrt(2) - (2 - sqrt(2))',
    result: '2.828427124746189402770824017',
  },
  {
    expr: 'ln(exp(ln(2.pi)) + exp(ln(3.e)) + exp(ln(5)))',
    result: '2.967231497222256653145677774',
  },
  {
    expr: '((12345 & 255) | (42 << 8)) xor (999 % 256)',
    result: '10974',
  },
]

export default function JaredCalcSection() {
  return (
    <section id='jaredcalc' className='w-full px-4 py-20'>
      <div className='mx-auto max-w-6xl rounded-ui border border-line/40 bg-gradient-to-b from-bg/60 via-surface/25 to-bg/60 backdrop-blur-xl'>
        <div className='grid gap-10 px-6 py-10 lg:grid-cols-2 lg:items-center'>
          <div className='flex flex-col gap-5'>
            <div className='inline-flex w-fit items-center gap-3 rounded-full border border-line/40 bg-surface/35 px-4 py-2 text-text backdrop-blur-xl'>
              <span className='text-xs font-extrabold tracking-widest text-accent'>PROJECT</span>
              <span aria-hidden='true' className='font-bold text-muted/70'>•</span>
              <span className='text-xs font-bold tracking-widest text-text/90'>JAREDCALC</span>
            </div>

            <h2 className='m-0 text-4xl font-extrabold leading-[1.02] text-text sm:text-5xl'>JaredCalc</h2>

            <p className='m-0 max-w-xl text-base leading-relaxed text-muted sm:text-lg'>
              A scientific calculator built from scratch in Python, with support for maths functions, constants, combinatorics, bitwise operations, and arbitrary-precision results.
            </p>

            <div className='mt-3 flex flex-wrap gap-4'>
              <a href='https://github.com/jaredturck/JaredCalc' target='_blank' rel='noreferrer' className='inline-flex items-center justify-center rounded-ui bg-accent/90 hover:bg-accent px-5 py-3 text-sm font-extrabold leading-none text-bg border border-line/30 transition-colors'>GitHub</a>
            </div>
          </div>

          <div className='relative'>
            <div aria-hidden='true' className='absolute -inset-6'>
              <div className='absolute -top-6 left-8 h-24 w-24 rounded-full bg-[#d7bf7a]/20 blur-2xl' />
              <div className='absolute -bottom-8 right-6 h-28 w-28 rounded-full bg-[#4f8492]/20 blur-2xl' />
            </div>

            <div className='relative overflow-hidden rounded-ui border border-black/15 bg-gradient-to-br from-[#e4d4b3] via-[#c6b58f] to-[#8b9981] shadow-2xl'>
              <div className='flex items-center justify-between border-b border-black/15 bg-white/15 px-5 py-4'>
                <div className='flex items-center gap-2' aria-hidden='true'>
                  <span className='h-2.5 w-2.5 rounded-full bg-[#725d39]/45' />
                  <span className='h-2.5 w-2.5 rounded-full bg-[#725d39]/45' />
                  <span className='h-2.5 w-2.5 rounded-full bg-[#0a6b78]/80' />
                </div>

                <div className='text-xs font-extrabold tracking-widest text-[#241f17]/65'>JAREDCALC</div>

                <div className='text-xs font-semibold text-[#241f17]/70'>PYTHON</div>
              </div>

              <div className='border-b border-black/15 bg-black/5 px-5 py-3 font-mono text-sm text-[#241f17]/70'>
                <span className='font-bold text-[#0a6b78]'>$</span> python main.py
              </div>

              <div className='space-y-5 p-5 font-mono'>
                {calc_examples.map((example) => (
                  <div key={example.expr} className='space-y-2'>
                    <div className='break-words text-sm leading-relaxed text-[#241f17]/80'>
                      <span className='mr-2 font-bold text-[#0a6b78]'>&gt;</span>
                      {example.expr}
                    </div>

                    <div className='break-words rounded-ui border border-black/10 bg-white/20 px-4 py-3 text-sm font-bold leading-relaxed text-[#17130d]'>
                      {example.result}
                    </div>
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
