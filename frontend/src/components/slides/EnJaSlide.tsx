import type { SlideProps } from './SlideShared'
import { ActionLink, ProjectBadge } from './SlideShared'

export default function EnJaSlide({ active }: SlideProps) {
  return (
    <div className={`slide-canvas enja-slide ${active ? 'is-content-active' : ''}`}>
      <div className='enja-sun' />
      <div className='enja-diagonal' />
      <section className='enja-copy'>
        <ProjectBadge label='EN -> JA TRANSLATOR' />
        <h2>English <span>-&gt;</span> Japanese</h2>
        <p>A custom tokeniser and transformer encoder/decoder designed for real-world inference and dataset iteration.</p>
        <div className='enja-features'>
          <span>Transformer</span>
          <span>Custom tokeniser</span>
          <span>Encoder / decoder</span>
          <span>Beam-ready inference</span>
        </div>
        <ActionLink href='https://github.com/jaredturck/en-ja-translator' className='enja-link'>GitHub</ActionLink>
      </section>
      <section className='enja-console'>
        <header>
          <b>AI TRANSLATION</b>
          <span>EN <i>-&gt;</i> JA</span>
        </header>
        <div className='enja-columns'>
          <div>
            <h3>ENGLISH / INPUT</h3>
            <p>The weather is beautiful today.</p>
            <p>Machine learning can help people.</p>
            <p>I am building a translation model.</p>
            <p>Where is the nearest station?</p>
          </div>
          <div>
            <h3>日本語 / OUTPUT</h3>
            <p className='translation-line-1'>今日は天気がとても良いです。</p>
            <p className='translation-line-2'>機械学習は人々を助けることができます。</p>
            <p className='translation-line-3'>私は翻訳モデルを作っています。</p>
            <p className='translation-line-4'>最寄りの駅はどこですか？</p>
          </div>
        </div>
        <footer>
          <span>tokenise</span>
          <i>-&gt;</i>
          <span>encode</span>
          <i>-&gt;</i>
          <span>decode</span>
          <i>-&gt;</i>
          <span>translate</span>
        </footer>
      </section>
    </div>
  )
}
