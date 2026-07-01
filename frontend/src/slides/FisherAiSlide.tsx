import fisher_image from '../imgs/fisherai_image1.png'
import type { SlideProps } from './SlideShared'
import { ActionLink, ProjectBadge, WindowBar } from './SlideShared'

export default function FisherAiSlide({ active }: SlideProps) {
  return (
    <div className={`slide-canvas fisher-slide ${active ? 'is-content-active' : ''}`}>
      <div className='fisher-coordinates fisher-file'>a b c d e f g h</div>
      <div className='fisher-coordinates fisher-rank'>8 7 6 5 4 3 2 1</div>
      <section className='fisher-analysis'>
        <ProjectBadge mark='FA' label='FISHER AI' accent='#d6b15e' />
        <h2>Fisher AI</h2>
        <p>A chess engine and GUI with a neural-network player, evaluation runs against Stockfish, and a complete desktop app for local games.</p>
        <div className='fisher-tags'><span>Python</span><span>GUI app</span><span>Neural net</span><span>Stockfish eval</span><span>ELO ~1056</span></div>
        <section className='fisher-evaluation'>
          <h3>EVALUATION SNAPSHOT</h3>
          <div><article><span>RESULTS</span><p><b>Stockfish</b> 36 · <em>Fisher</em> 4 · Draws 10</p></article><article><span>RUNTIME</span><p>130.22s / 50 games</p></article></div>
        </section>
        <ActionLink href='https://github.com/jaredturck/FisherAI' className='fisher-link'>GitHub</ActionLink>
      </section>
      <section className='fisher-window'>
        <WindowBar label='Chess GUI' />
        <img className='raw-image' src={fisher_image} alt='Fisher AI chess GUI' />
        <footer><span><i /> Fisher AI v1</span><b>Engine · Evaluation · Desktop GUI</b></footer>
      </section>
    </div>
  )
}
