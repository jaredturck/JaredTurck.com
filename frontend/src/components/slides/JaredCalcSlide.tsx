import type { SlideProps } from './SlideShared'
import { ActionLink, ProjectBadge } from './SlideShared'

export default function JaredCalcSlide({ active }: SlideProps) {
  return (
    <div className={`slide-canvas calculator-slide ${active ? 'is-content-active' : ''}`}>
      <div className='calculator-rulers'>
        <i />
        <i />
        <i />
      </div>
      <section className='calculator-copy'>
        <ProjectBadge mark='JC' label='JAREDCALC' />
        <h2>JaredCalc</h2>
        <p>A scientific calculator built from scratch: custom AST parser, constants, bitwise operations, combinatorics, and maths functions without dependencies.</p>
        <div className='calculator-chips'>
          <span>100% Python</span>
          <span>No dependencies</span>
          <span>AST evaluator</span>
          <span>Taylor-series trig</span>
          <span>Constants + units</span>
        </div>
        <ActionLink href='https://github.com/jaredturck/JaredCalc' className='calculator-link'>GitHub</ActionLink>
      </section>

      <section className='calculator-body'>
        <div className='calculator-screen'>
          <header>
            <b>JAREDCALC</b>
            <span>AST</span>
          </header>
          <div className='calculator-expression'>sqrt(2)^2 + sqrt(2) - (2 - sqrt(2))</div>
          <div className='calculator-result'><span>= </span>2.828427124746189402770824017</div>
        </div>
        <div className='calculator-keys'>
          <button className='function' type='button'>sin</button>
          <button className='function' type='button'>cos</button>
          <button className='function' type='button'>ln</button>
          <button className='function' type='button'>gamma</button>
          <button className='operator' type='button'>(</button>
          <button className='operator' type='button'>)</button>
          <button className='operator' type='button'>^</button>
          <button className='operator' type='button'>/</button>
          <button type='button'>7</button>
          <button type='button'>8</button>
          <button type='button'>9</button>
          <button className='operator' type='button'>*</button>
          <button type='button'>4</button>
          <button type='button'>5</button>
          <button type='button'>6</button>
          <button className='operator' type='button'>-</button>
          <button type='button'>1</button>
          <button type='button'>2</button>
          <button type='button'>3</button>
          <button className='operator' type='button'>+</button>
          <button className='function' type='button'>pi</button>
          <button type='button'>0</button>
          <button className='function' type='button'>!</button>
          <button className='equals' type='button'>=</button>
        </div>
        <footer>
          <span>Built from scratch</span>
          <b>no dependencies</b>
        </footer>
      </section>
    </div>
  )
}
