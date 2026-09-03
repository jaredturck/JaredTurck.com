import { createPortal } from 'react-dom'

const email_parts = [
  [79, 68, 87, 64, 65, 81, 80, 87, 70, 78, 29],
  [101],
  [66, 72, 68, 76, 73],
  [11],
  [70, 74, 72],
]
const email_key = 37

type ContactModalProps = {
  on_close: () => void
}

function decode_email_part(part: number[]) {
  return String.fromCharCode(...part.map(value => value ^ email_key))
}

export default function ContactModal({ on_close }: ContactModalProps) {
  return createPortal(
    <div className='contact-modal-backdrop' onClick={on_close}>
      <section className='contact-modal' role='dialog' aria-modal='true' aria-labelledby='contact-modal-title' onClick={event => event.stopPropagation()}>
        <button className='contact-modal-close' type='button' onClick={on_close} aria-label='Close contact dialog'>×</button>
        <span className='contact-modal-kicker'>CONTACT</span>
        <h2 id='contact-modal-title'>Get in touch</h2>
        <p>If you need to get in touch with me, you can use the following email address.</p>
        <div className='contact-email' aria-label='Email address'>
          {email_parts.map((part, index) => <span key={index}>{decode_email_part(part)}</span>)}
        </div>
      </section>
    </div>,
    document.body,
  )
}
