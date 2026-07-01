import signal_icon from '../imgs/SignalIcon.svg'
import wifi_icon from '../imgs/WifiIcon.svg'
import battery_icon from '../imgs/BatteryIcon.svg'
import camera_dot from '../imgs/CameraDot.svg'
import back_icon from '../imgs/BackIcon.svg'
import home_icon from '../imgs/HomeIcon.svg'
import recent_icon from '../imgs/RecentIcon.svg'
import titus_logo from '../imgs/titus_ai_logo.png'
import type { SlideProps } from './SlideShared'
import { ActionLink, ProjectBadge } from './SlideShared'

const messages = [
  ['assistant', 'How can I assist you today?'],
  ['user', 'How are you today?'],
  ['assistant', 'Doing great — want to test the model with a prompt?'],
  ['user', 'Give me a one-liner about what you do.'],
  ['assistant', 'I generate text by predicting the next token, one step at a time.'],
]

export default function TitusAiSlide({ active }: SlideProps) {
  return (
    <div className={`slide-canvas titus-slide ${active ? 'is-content-active' : ''}`}>
      <div className='titus-circuit titus-circuit-one' />
      <div className='titus-circuit titus-circuit-two' />
      <div className='titus-info'>
        <ProjectBadge mark='⌁' label='TITUS AI' accent='#20d3ff' />
        <h2>Titus AI</h2>
        <p>A GPT-style chatbot project with a clean web UI and a model-first focus on token prediction and inference flow.</p>
        <div className='titus-stats'>
          <article><span>PARAMS</span><b>159.4M</b></article>
          <article><span>DECODER</span><b>8 layers</b></article>
          <article><span>VOCAB</span><b>50,259</b></article>
        </div>
        <div className='titus-actions'>
          <ActionLink href='https://github.com/jaredturck/TitusAI' className='titus-primary'>GitHub</ActionLink>
        </div>
        <div className='titus-features'>
          <span>Decoder-only</span><span>Causal mask</span><span>Adaptive softmax</span><span>Single GPU training</span>
        </div>
      </div>

      <div className='titus-phone'>
        <div className='phone-status'><span>11:52</span><img src={camera_dot} alt='' /><div><img src={signal_icon} alt='' /><img src={wifi_icon} alt='' /><img src={battery_icon} alt='' /></div></div>
        <div className='phone-header'><div><img src={titus_logo} alt='' /><b>Titus AI</b></div><div><button type='button'>Load model</button><button type='button'>×</button></div></div>
        <div className='phone-chat'>
          {messages.map((message, index) => <div key={index} className={`phone-message ${message[0]}`}>{message[1]}</div>)}
          <div className='phone-message thinking'>Thinking…</div>
        </div>
        <div className='phone-input'><label><input type='checkbox' /> Think</label><input type='text' placeholder='Type a message…' /><button type='button'>Send</button></div>
        <div className='phone-nav'><img src={back_icon} alt='' /><img src={home_icon} alt='' /><img src={recent_icon} alt='' /></div>
      </div>
    </div>
  )
}
