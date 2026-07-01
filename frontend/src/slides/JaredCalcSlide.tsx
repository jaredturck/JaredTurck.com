import useJaredCalcReplay from '../hooks/use_jared_calc_replay'
import type { SlideProps } from './SlideShared'
import { ActionLink, ProjectBadge } from './SlideShared'

const calc_demo = [
  { expr: 'sqrt(2)^2 + sqrt(2) - (2 - sqrt(2))', result: '2.828427124746189402770824017' },
  { expr: 'sin((pi/2) - asin(sin(pi/6))) + cos(acos(half))', result: '1.366025403784438374543697137' },
  { expr: '((12345 & 255) | (42 << 8)) xor (999 % 256)', result: '10974' },
]

const keys = ['sin', 'cos', 'ln', 'γ', '(', ')', '^', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', 'π', '0', '!', '=']

export default function JaredCalcSlide({ active }: SlideProps) {
  const replay = useJaredCalcReplay(active, calc_demo)

  return (
    <div className={`slide-canvas calculator-slide ${active ? 'is-content-active' : ''}`}>
      <div className='calculator-rulers'><i /><i /><i /></div>
      <section className='calculator-copy'>
        <ProjectBadge mark='JC' label='JAREDCALC' accent='#d8bd78' />
        <h2>JaredCalc</h2>
        <p>A scientific calculator built from scratch: custom AST parser, constants, bitwise operations, combinatorics, and maths functions without dependencies.</p>
        <div className='calculator-chips'><span>100% Python</span><span>No dependencies</span><span>AST evaluator</span><span>Taylor-series trig</span><span>Constants + units</span></div>
        <ActionLink href='https://github.com/jaredturck/JaredCalc' className='calculator-link'>GitHub</ActionLink>
      </section>

      <section className='calculator-body'>
        <div className='calculator-screen'>
          <header><b>JAREDCALC</b><span>AST</span></header>
          <div className='calculator-expression'>{replay.expression}<i className={replay.field === 'expr' ? 'is-visible' : ''}>▍</i></div>
          <div className='calculator-result'><span>= </span>{replay.result}<i className={replay.field === 'result' ? 'is-visible' : ''}>▍</i></div>
        </div>
        <div className='calculator-keys'>
          {keys.map(key => <button key={key} className={key === '=' ? 'equals' : ['÷', '×', '-', '+', '^', '(', ')'].includes(key) ? 'operator' : ['sin', 'cos', 'ln', 'γ', 'π', '!'].includes(key) ? 'function' : ''} type='button'>{key}</button>)}
        </div>
        <footer><span>Built from scratch</span><b>no dependencies</b></footer>
      </section>
    </div>
  )
}
