import { Link } from 'react-router-dom'
import UseJaredCalcReplay from '../hooks/UseJaredCalcReplay'

const calc_demo = [
  {
    expr: 'sqrt(2)^2 + sqrt(2) - (2 - sqrt(2))',
    result: '2.828427124746189402770824017',
  },
  {
    expr: 'sin((pi/2) - asin(sin(pi/6))) + cos(acos(half))',
    result: '1.366025403784438374543697137',
  },
  {
    expr: '((12345 & 255) | (42 << 8)) xor (999 % 256)',
    result: '10974',
  },
  {
    expr: '(10 C 3) * (8 P 2) + (6! / (3! * 2!))',
    result: '6780',
  },
]

const calc_keys = [
  { t: 'sin', v: 'fn' },
  { t: 'cos', v: 'fn' },
  { t: 'ln', v: 'fn' },
  { t: 'γ', v: 'fn' },

  { t: '(', v: 'op' },
  { t: ')', v: 'op' },
  { t: '^', v: 'op' },
  { t: '÷', v: 'op' },

  { t: '7', v: 'num' },
  { t: '8', v: 'num' },
  { t: '9', v: 'num' },
  { t: '×', v: 'op' },

  { t: '4', v: 'num' },
  { t: '5', v: 'num' },
  { t: '6', v: 'num' },
  { t: '-', v: 'op' },

  { t: '1', v: 'num' },
  { t: '2', v: 'num' },
  { t: '3', v: 'num' },
  { t: '+', v: 'op' },

  { t: 'π', v: 'fn' },
  { t: '0', v: 'num' },
  { t: '!', v: 'fn' },
  { t: '=', v: 'eq' },
]

export default function JaredCalcSection() {
  const replay = UseJaredCalcReplay(calc_demo)

  return (
    <section id='jaredcalc' className='w-full px-4 py-20'>
      <div className='mx-auto max-w-6xl rounded-ui border border-line/40 bg-gradient-to-b from-bg/60 via-surface/25 to-bg/60 backdrop-blur-xl'>
        <div className='grid gap-10 px-6 py-10 lg:grid-cols-2 lg:items-center'>
          <div className='flex flex-col gap-5'>
            <div className='inline-flex w-fit items-center gap-3 rounded-full border border-line/40 bg-surface/35 px-4 py-2 text-text backdrop-blur-xl'>
              <div className='grid h-6 w-6 place-items-center rounded-ui border border-line/40 bg-accent/10 text-xs font-extrabold text-text'>JC</div>
              <span className='text-xs font-extrabold tracking-widest text-accent'>PROJECT</span>
              <span aria-hidden='true' className='font-bold text-muted/70'>•</span>
              <span className='text-xs font-bold tracking-widest text-text/90'>JAREDCALC</span>
            </div>

            <h2 className='m-0 text-4xl font-extrabold leading-[1.02] text-text sm:text-5xl'>JaredCalc</h2>

            <p className='m-0 max-w-xl text-base leading-relaxed text-muted sm:text-lg'>
              A scientific calculator built from scratch: custom AST parser, constants, bitwise ops, combinatorics, and maths functions without dependencies.
            </p>

            <div className='mt-1 flex flex-wrap gap-2'>
              <span className='rounded-full border border-line/40 bg-surface/30 px-3 py-2 text-xs font-semibold text-text backdrop-blur-xl'>100% Python</span>
              <span className='rounded-full border border-line/40 bg-surface/30 px-3 py-2 text-xs font-semibold text-text backdrop-blur-xl'>No deps</span>
              <span className='rounded-full border border-line/40 bg-surface/30 px-3 py-2 text-xs font-semibold text-text backdrop-blur-xl'>AST evaluator</span>
              <span className='rounded-full border border-line/40 bg-surface/30 px-3 py-2 text-xs font-semibold text-text backdrop-blur-xl'>Taylor-series trig</span>
              <span className='rounded-full border border-line/40 bg-surface/30 px-3 py-2 text-xs font-semibold text-text backdrop-blur-xl'>Constants + units</span>
              <span className='rounded-full border border-line/40 bg-surface/30 px-3 py-2 text-xs font-semibold text-text backdrop-blur-xl'>Bitwise + comb</span>
            </div>

            <div className='mt-3 flex flex-wrap gap-4'>
              <Link to='/jaredcalc' className='inline-flex items-center justify-center rounded-ui bg-accent/90 hover:bg-accent px-5 py-3 text-sm font-extrabold leading-none text-bg border border-line/30 transition-colors'>Read more</Link>
              <a href='https://github.com/jaredturck/JaredCalc' target='_blank' rel='noreferrer' className='inline-flex items-center justify-center rounded-ui border border-line/40 bg-surface/30 hover:bg-surface/40 px-5 py-3 text-sm font-extrabold leading-none text-text backdrop-blur-xl transition-colors'>GitHub</a>
            </div>
          </div>

          <div className='relative mx-auto w-full max-w-md'>
            <div aria-hidden='true' className='absolute -inset-6'>
              <div className='absolute -top-6 -left-6 h-24 w-24 rounded-ui bg-accent/10 blur-2xl' />
              <div className='absolute -bottom-10 right-2 h-28 w-28 rounded-ui bg-anyhjs/10 blur-2xl' />
              <div className='absolute top-12 right-10 h-10 w-10 rounded-ui bg-surface/25 blur-xl' />
            </div>

            <div className='relative rounded-ui border border-line/40 bg-gradient-to-b from-[#f6f3ee] via-[#efe7de] to-[#e5ddd4] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.35)]'>
              <div aria-hidden='true' className='pointer-events-none absolute inset-0 rounded-ui bg-gradient-to-b from-white/55 via-transparent to-black/5' />
              <div aria-hidden='true' className='pointer-events-none absolute inset-0 rounded-ui shadow-[inset_0_1px_0_rgba(255,255,255,0.75),inset_0_-18px_40px_rgba(0,0,0,0.10)]' />

              <div className='relative'>
                <div ref={replay.screen_ref} className='rounded-ui border border-black/10 bg-gradient-to-b from-white/75 via-[#eaf2f3] to-[#dfe9ea] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-14px_34px_rgba(0,0,0,0.08)]'>
                  <div className='flex items-center justify-between text-[0.7rem]'>
                    <span className='font-extrabold tracking-widest text-[#0b0b0b]/60'>JAREDCALC</span>
                    <span className='rounded-full border border-black/10 bg-white/40 px-2 py-1 font-semibold text-[#0b0b0b]/60'>AST</span>
                  </div>

                  <div className='mt-4 flex flex-col gap-3'>
                    {replay.display.map((x, i) => (
                      <div key={i} className='rounded-ui border border-black/10 bg-white/35 px-3 py-2'>
                        <div className='text-[0.72rem] font-mono text-[#0b0b0b]/70 break-words'>
                          {x.expr}
                          {x.active && x.field === 'expr' ? <span className='ml-1 inline-block animate-pulse text-[#0b0b0b]/55'>▍</span> : null}
                        </div>
                        <div className='mt-1 text-[1.02rem] font-extrabold font-mono text-[#0b0b0b] break-words'>
                          <span className='text-[#0a6b78]'>= </span>
                          {x.result}
                          {x.active && x.field === 'result' ? <span className='ml-1 inline-block animate-pulse text-[#0b0b0b]/55'>▍</span> : null}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className='mt-5 grid grid-cols-4 gap-3'>
                  {calc_keys.map((k, i) => (
                    <button
                      key={i}
                      type='button'
                      className={
                        k.v === 'eq'
                          ? 'h-12 rounded-ui border border-black/10 bg-gradient-to-b from-[#17b6c6] to-[#0e97a6] text-white text-sm font-extrabold shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_12px_18px_rgba(0,0,0,0.18)] transition-[transform,box-shadow] duration-150 ease-out active:translate-y-[1px] active:shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_7px_12px_rgba(0,0,0,0.20)]'
                          : k.v === 'op'
                          ? 'h-12 rounded-ui border border-black/10 bg-[#e8d8c7] text-[#0b0b0b]/85 text-sm font-extrabold shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_12px_18px_rgba(0,0,0,0.14)] transition-[transform,box-shadow,background] duration-150 ease-out hover:bg-[#eddccc] active:translate-y-[1px] active:shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_7px_12px_rgba(0,0,0,0.16)]'
                          : k.v === 'fn'
                          ? 'h-12 rounded-ui border border-black/10 bg-[#efe3d7] text-[#0b0b0b]/85 text-sm font-extrabold shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_12px_18px_rgba(0,0,0,0.14)] transition-[transform,box-shadow,background] duration-150 ease-out hover:bg-[#f2e7dc] active:translate-y-[1px] active:shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_7px_12px_rgba(0,0,0,0.16)]'
                          : 'h-12 rounded-ui border border-black/10 bg-[#f4eee6] text-[#0b0b0b]/85 text-sm font-extrabold shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_12px_18px_rgba(0,0,0,0.14)] transition-[transform,box-shadow,background] duration-150 ease-out hover:bg-[#f7f1ea] active:translate-y-[1px] active:shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_7px_12px_rgba(0,0,0,0.16)]'
                      }
                    >
                      {k.t}
                    </button>
                  ))}
                </div>

                <div className='mt-4 flex items-center justify-between px-1 text-[0.72rem] font-semibold text-[#0b0b0b]/55'>
                  <span>Built from scratch</span>
                  <span className='rounded-full border border-black/10 bg-white/30 px-2 py-1'>no eval()</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
