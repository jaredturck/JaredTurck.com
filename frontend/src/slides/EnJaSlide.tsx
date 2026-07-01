import type { SlideProps } from './SlideShared'
import { ActionLink, ProjectBadge } from './SlideShared'

const examples = [
  ['The weather is beautiful today.', '今日は天気がとても良いです。'],
  ['Machine learning can help people.', '機械学習は人々を助けることができます。'],
  ['I am building a translation model.', '私は翻訳モデルを作っています。'],
  ['Where is the nearest station?', '最寄りの駅はどこですか？'],
]

export default function EnJaSlide({ active }: SlideProps) {
  return (
    <div className={`slide-canvas enja-slide ${active ? 'is-content-active' : ''}`}>
      <div className='enja-sun' />
      <div className='enja-diagonal' />
      <section className='enja-copy'>
        <ProjectBadge label='EN → JA TRANSLATOR' accent='#ff5b62' />
        <h2>English <span>→</span> Japanese</h2>
        <p>A custom tokeniser and transformer encoder/decoder designed for real-world inference and dataset iteration.</p>
        <div className='enja-features'><span>Transformer</span><span>Custom tokeniser</span><span>Encoder / decoder</span><span>Beam-ready inference</span></div>
        <ActionLink href='https://github.com/jaredturck/en-ja-translator' className='enja-link'>GitHub</ActionLink>
      </section>
      <section className='enja-console'>
        <header><b>AI TRANSLATION</b><span>EN <i>→</i> JA</span></header>
        <div className='enja-columns'>
          <div><h3>ENGLISH / INPUT</h3>{examples.map(example => <p key={example[0]}>{example[0]}</p>)}</div>
          <div><h3>日本語 / OUTPUT</h3>{examples.map((example, index) => <p key={example[1]} style={{ '--line-delay': `${index * 100}ms` } as React.CSSProperties}>{example[1]}</p>)}</div>
        </div>
        <footer><span>tokenise</span><i>→</i><span>encode</span><i>→</i><span>decode</span><i>→</i><span>translate</span></footer>
      </section>
    </div>
  )
}
