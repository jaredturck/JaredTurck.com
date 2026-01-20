import signal_icon from '../imgs/SignalIcon.svg'
import wifi_icon from '../imgs/WifiIcon.svg'
import battery_icon from '../imgs/BatteryIcon.svg'
import camera_dot from '../imgs/CameraDot.svg'
import back_icon from '../imgs/BackIcon.svg'
import home_icon from '../imgs/HomeIcon.svg'
import recent_icon from '../imgs/RecentIcon.svg'
import titus_logo from '../imgs/titus_ai_logo.png'

const titus_messages = [
  { role: 'assistant', text: 'How can I assist you today?' },
  { role: 'user', text: 'How are you today?' },
  { role: 'assistant', text: 'Doing great — want to test the model with a prompt?' },
  { role: 'user', text: 'Give me a one-liner about what you do.' },
  { role: 'assistant', text: 'I generate text by predicting the next token, one step at a time.' },
  { role: 'user', text: 'Cool — show me something creative.' },
  { role: 'thinking', text: 'Thinking...' },
]

export default function TitusAISection() {
  return (
    <section id='titusai' className='w-full px-4 py-20'>
      <div className='mx-auto max-w-6xl rounded-ui border border-line/40 bg-gradient-to-b from-bg/60 via-surface/25 to-bg/60 backdrop-blur-xl'>
        <div className='grid gap-10 px-6 py-10 lg:grid-cols-2 lg:items-center'>
          <div className='flex flex-col gap-5'>
            <div className='inline-flex w-fit items-center gap-3 rounded-full border border-line/40 bg-surface/35 px-4 py-2 text-text backdrop-blur-xl'>
              <img src={titus_logo} alt='Titus AI logo' className='h-5 w-5 rounded-sm' />
              <span className='text-xs font-extrabold tracking-widest text-accent-2'>PROJECT</span>
              <span aria-hidden='true' className='font-bold text-muted/70'>•</span>
              <span className='text-xs font-bold tracking-widest text-text/90'>TITUS AI</span>
            </div>

            <h2 className='m-0 text-4xl font-extrabold leading-[1.02] text-text sm:text-5xl'>Titus AI</h2>

            <p className='m-0 max-w-xl text-base leading-relaxed text-muted sm:text-lg'>
              A GPT-style chatbot project with a clean web UI and a model-first focus on token prediction and inference flow.
            </p>

            <div className='mt-2 flex flex-wrap gap-4'>
              <a href='https://github.com/jaredturck/TitusAI' target='_blank' rel='noreferrer' className='inline-flex items-center justify-center rounded-ui bg-accent-2/90 hover:bg-accent-2 px-5 py-3 text-sm font-extrabold leading-none text-bg border border-line/30 transition-colors'>Visit site</a>
              <a href='https://github.com/jaredturck/TitusAI' target='_blank' rel='noreferrer' className='inline-flex items-center justify-center rounded-ui border border-accent-2/35 bg-surface/30 hover:bg-surface/40 px-5 py-3 text-sm font-extrabold leading-none text-text backdrop-blur-xl transition-colors'>GitHub</a>
            </div>
          </div>

          <div className='relative mx-auto w-full max-w-sm'>
            <div aria-hidden='true' className='absolute -inset-6'>
              <div className='absolute -top-6 -left-6 h-24 w-24 rounded-ui bg-accent/10 blur-2xl' />
              <div className='absolute -bottom-8 right-2 h-28 w-28 rounded-ui bg-accent-2/15 blur-2xl' />
              <div className='absolute top-10 right-8 h-10 w-10 rounded-ui bg-surface/30 blur-xl' />
              <div className='absolute bottom-12 left-10 h-12 w-12 rounded-ui bg-surface/30 blur-xl' />
            </div>

            <div className='relative h-phone overflow-hidden rounded-ui border border-line/40 bg-gradient-to-b from-surface/35 via-surface-2/25 to-surface/35 backdrop-blur-xl shadow-2xl flex flex-col'>
              <div className='flex items-center justify-between px-4 pt-3 pb-2 text-xs text-muted'>
                <span className='font-semibold text-text/80'>11:52</span>
                <img src={camera_dot} alt='' className='h-5 w-5 opacity-80' />
                <div className='flex items-center gap-2'>
                  <img src={signal_icon} alt='' className='h-4 w-auto opacity-80' />
                  <img src={wifi_icon} alt='' className='h-4 w-auto opacity-80' />
                  <img src={battery_icon} alt='' className='h-4 w-auto opacity-80' />
                </div>
              </div>

              <div className='flex items-center justify-between border-b border-line/30 bg-surface/25 px-4 py-3'>
                <div className='text-sm font-extrabold tracking-wide text-text'>Titus AI</div>
                <div className='flex items-center gap-3'>
                  <button type='button' className='rounded-full border border-line/30 bg-surface/35 px-3 py-1 text-xs font-semibold text-text hover:bg-surface/45 transition-colors'>Load model</button>
                  <button type='button' aria-label='Close' className='grid h-7 w-7 place-items-center rounded-full border border-line/30 bg-surface/35 text-text/80 hover:bg-surface/45 transition-colors'>×</button>
                </div>
              </div>

              <div className='flex-1 overflow-y-auto px-4 py-4'>
                <div className='flex flex-col gap-3'>
                  {titus_messages.map((m, i) => (
                    <div key={i} className={m.role === 'user' ? 'ml-auto w-fit max-w-sm rounded-ui border border-line/20 bg-accent/85 px-4 py-3 text-sm text-bg shadow-sm' : m.role === 'thinking' ? 'w-fit max-w-sm rounded-ui border border-line/30 bg-surface/40 px-4 py-3 text-sm text-muted animate-pulse shadow-sm' : 'w-fit max-w-sm rounded-ui border border-line/30 bg-surface/45 px-4 py-3 text-sm text-text shadow-sm'}>{m.text}</div>
                  ))}
                </div>
              </div>

              <div className='border-t border-line/30 bg-surface/25 px-4 py-3'>
                <div className='flex items-center gap-3'>
                  <label className='inline-flex items-center gap-2 rounded-ui border border-line/30 bg-surface/35 px-3 py-2.5 text-xs text-text/90'>
                    <input type='checkbox' className='h-4 w-4 accent-accent' />
                    <span className='font-semibold'>Think</span>
                  </label>
                  <input type='text' placeholder='Type a message...' className='flex-1 min-w-0 rounded-ui border border-line/30 bg-surface/35 px-4 py-2.5 text-sm text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/60 shadow-sm' />
                  <button type='button' className='inline-flex items-center justify-center rounded-ui border border-line/30 bg-surface/35 px-4 py-2.5 text-sm font-semibold text-text hover:bg-surface/45 transition-colors active:bg-gradient-to-r active:from-accent/70 active:to-accent active:border-accent/60'>Send</button>
                </div>
              </div>

              <div className='border-t border-line/30 bg-surface/20 px-10 py-3'>
                <div className='flex items-center justify-between'>
                  <img src={back_icon} alt='' className='h-5 w-5 opacity-80' />
                  <img src={home_icon} alt='' className='h-5 w-5 opacity-80' />
                  <img src={recent_icon} alt='' className='h-5 w-5 opacity-80' />
                </div>
              </div>

              <div aria-hidden='true' className='pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg/30' />
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
