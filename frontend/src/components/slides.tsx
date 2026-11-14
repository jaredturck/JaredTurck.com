import { useState } from 'react'
import type { SlideProps } from './slide_helpers'
import { ActionLink, ExternalArrow, NeuralLayer, ProcessStep, ProjectBadge, ScreenshotButton, Slide, Statistic, TechnologyGroup, WindowBar } from './slide_helpers'

import hero_image from '../images/hero_section.avif'

import ekhaya_logo from '../images/ekhaya_logo.webp'
import ekhaya_screenshot from '../images/ekhaya_screenshot.avif'

import geoidpm_logo from '../images/geoidpm_logo.webp'
import geoidpm_screenshot from '../images/geoidpm_screenshot.avif'

import anyhjs_img1 from '../images/anyhjs_img1.avif'
import anyhjs_img2 from '../images/anyhjs_img2.avif'
import anyhjs_img3 from '../images/anyhjs_img3.avif'
import anyhjs_img4 from '../images/anyhjs_img4.avif'
import anyhjs_img5 from '../images/anyhjs_img5.avif'
import anyhjs_img6 from '../images/anyhjs_img6.avif'
import anyhjs_logo from '../images/anyhjs_logo.webp'

import signal_icon from '../images/SignalIcon.svg'
import wifi_icon from '../images/WifiIcon.svg'
import battery_icon from '../images/BatteryIcon.svg'
import camera_dot from '../images/CameraDot.svg'
import back_icon from '../images/BackIcon.svg'
import home_icon from '../images/HomeIcon.svg'
import recent_icon from '../images/RecentIcon.svg'
import titus_logo from '../images/titus_ai_logo.webp'

import tkdraw_image from '../images/tkdraw_image1.webp'

import fisher_image from '../images/fisherai_image1.avif'

import spelling_image from '../images/spelling_correction_image1.webp'
import spelling_qwen_image from '../images/spelling_correction_qwen.webp'

export function HeroSlide({ active, on_projects }: SlideProps) {
  return (
    <div className='absolute inset-0 overflow-hidden bg-surface transform-3d'>
      <img className='absolute inset-0 h-full w-full object-cover object-center' src={hero_image} alt='' draggable='false' />
      <div className={`absolute bottom-16 left-8 z-10 w-5/8 max-w-2xl translate-z-14 rounded-3xl border border-white/20 bg-surface/75 p-6 shadow-2xl shadow-black/40 backdrop-blur-lg backdrop-saturate-125 transition-all delay-150 duration-700 motion-reduce:transition-none xl:left-12 xl:p-7 max-md:inset-x-5 max-md:max-h-2/3 max-md:w-auto max-md:overflow-y-auto max-md:p-4 max-sm:inset-x-3 max-sm:bottom-14 ${active ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
        <div className='flex flex-wrap items-center gap-3 text-xs font-extrabold tracking-widest text-white/90'>
          <span className='text-cyan'>AI PORTFOLIO</span>
          <i className='not-italic text-white/50'>|</i>
          <b>FULL STACK + ML</b>
        </div>
        <h1 className='mt-3 text-6xl font-normal leading-none tracking-tighter xl:text-7xl 2xl:text-8xl max-md:text-5xl'>Jared Turck</h1>
        <p className='mt-4 text-base leading-normal text-white/80 xl:text-lg'>Senior full stack developer focused on AI-powered products, scalable backends, and clean, modern UI.</p>
        <div className='mt-5 flex flex-wrap gap-2 text-xs text-white/90'>
          <span className='rounded-full border border-white/15 bg-white/5 px-3 py-1.5'>Python</span>
          <span className='rounded-full border border-white/15 bg-white/5 px-3 py-1.5'>React</span>
          <span className='rounded-full border border-white/15 bg-white/5 px-3 py-1.5'>TypeScript</span>
          <span className='rounded-full border border-white/15 bg-white/5 px-3 py-1.5'>Django</span>
          <span className='rounded-full border border-white/15 bg-white/5 px-3 py-1.5'>Django REST</span>
          <span className='rounded-full border border-white/15 bg-white/5 px-3 py-1.5 max-md:hidden'>PyTorch</span>
          <span className='rounded-full border border-white/15 bg-white/5 px-3 py-1.5 max-md:hidden'>NumPy</span>
          <span className='rounded-full border border-white/15 bg-white/5 px-3 py-1.5 max-md:hidden'>Hugging Face</span>
          <span className='rounded-full border border-white/15 bg-white/5 px-3 py-1.5 max-md:hidden'>PostgreSQL</span>
          <span className='rounded-full border border-white/15 bg-white/5 px-3 py-1.5 max-md:hidden'>Docker</span>
          <span className='rounded-full border border-white/15 bg-white/5 px-3 py-1.5 max-md:hidden'>Linux</span>
        </div>
        <button className='mt-5 inline-flex cursor-pointer items-center gap-3 rounded-xl border border-cyan bg-cyan px-4 py-3 text-sm font-extrabold text-canvas hover:bg-cyan focus-visible:outline-2 focus-visible:outline-cyan' type='button' onClick={on_projects}>View projects <b>-&gt;</b></button>
      </div>
      <div className='absolute bottom-8 right-10 z-10 text-xs uppercase tracking-widest text-white/60 max-md:hidden'>Building useful AI products from model to interface.</div>
    </div>
  )
}

export function EkhayaSlide({ active }: SlideProps) {
  return (
    <div className='absolute inset-0 overflow-hidden bg-surface transform-3d'>
      <img className='absolute inset-0 h-full w-full object-cover object-top' src={ekhaya_screenshot} alt='Ekhaya AI home discovery website' />
      <section className={`absolute bottom-18 left-9 xl:left-12 z-20 w-1/2 max-w-2xl translate-z-16 rounded-2xl border border-ekhaya/50 bg-linear-to-br from-surface/90 to-canvas/90 p-6 text-white shadow-2xl shadow-black/42 backdrop-blur-lg transition duration-700 delay-150 max-md:inset-x-3 max-md:bottom-14 max-md:max-h-2/3 max-md:w-auto max-md:max-w-none max-md:translate-z-0 max-md:overflow-y-auto max-md:p-4 ${active ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
        <header className='flex items-center gap-3'>
          <img className='size-10 rounded-lg' src={ekhaya_logo} alt='' />
          <div>
            <span className='block text-xs font-extrabold tracking-widest text-ekhaya'>AI HOME DISCOVERY</span>
            <b className='mt-1 block text-sm'>Ekhaya</b>
          </div>
        </header>
        <h2 className='mt-4 text-4xl font-normal leading-none tracking-tight xl:text-5xl'>Find a home that fits <em className='inline-block not-italic text-ekhaya xl:inline'>your lifestyle.</em></h2>
        <p className='mt-3 max-w-xl leading-normal text-white/80'>Search live listings in plain English and let neural ranking surface the homes that fit best.</p>
        <div className='mt-4 flex items-center gap-3 rounded-xl border border-ekhaya/25 bg-white/5 p-3'>
          <span className='min-w-0 flex-1 text-xs text-white/90'>"quiet area near a good school, three bedrooms, low crime"</span>
          <button className='size-8 shrink-0 rounded-lg bg-ekhaya text-lg text-surface' type='button'>Go</button>
        </div>
        <div className='mt-4 flex flex-wrap gap-2 max-md:gap-1.5 text-xs text-white/80'>
          <span className='rounded-full border border-blue/20 px-2.5 py-1.5 max-md:px-1.5'>Neural ranking</span>
          <span className='rounded-full border border-blue/20 px-2.5 py-1.5 max-md:px-1.5'>Live crawler</span>
          <span className='rounded-full border border-blue/20 px-2.5 py-1.5 max-md:px-1.5'>Market-wide coverage</span>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          <ActionLink href='https://ekhaya.uk/' className='border-ekhaya bg-ekhaya text-surface hover:bg-ekhaya/10'>Visit site</ActionLink>
          <ActionLink href='https://github.com/jaredturck/Ekhaya'>GitHub</ActionLink>
        </div>
      </section>
      <div className='absolute top-1/3 right-1/6 z-10 grid size-9 -rotate-45 place-items-center rounded-full rounded-bl-none border border-ekhaya/50 bg-surface/80 text-ekhaya max-md:hidden'>+</div>
      <div className='absolute top-1/6 right-1/3 z-10 grid size-9 -rotate-45 place-items-center rounded-full rounded-bl-none border border-ekhaya/50 bg-surface/80 text-ekhaya max-md:hidden'>+</div>
      <div className='absolute right-1/12 bottom-1/4 z-10 grid size-9 -rotate-45 place-items-center rounded-full rounded-bl-none border border-ekhaya/50 bg-surface/80 text-ekhaya max-md:hidden'>+</div>
    </div>
  )
}

export function GeoidPmSlide({ active }: SlideProps) {
  return (
    <div className='absolute inset-0 overflow-hidden bg-surface transform-3d'>
      <img className='absolute inset-0 h-full w-full object-cover object-top' src={geoidpm_screenshot} alt='Geoid Project Management website' />
      <svg className='pointer-events-none absolute inset-0 z-10 size-full fill-none stroke-teal/50 stroke-2' viewBox='0 0 1200 800' aria-hidden='true'>
        <path d='M50 680C220 560 280 690 460 560s250-10 360-170 230-60 330-200' />
        <path d='M40 725c180-120 310 20 455-115s265-45 390-180 205-55 285-175' />
        <path d='M20 770c240-95 330 15 485-90s250-65 390-185 210-70 290-140' />
      </svg>
      <section className={`absolute bottom-18 left-9 xl:left-12 z-20 w-11/24 max-w-xl translate-z-14 rounded-2xl border border-teal/50 bg-surface/85 p-6 text-white shadow-2xl shadow-black/38 backdrop-blur-lg transition duration-700 delay-150 max-md:inset-x-3 max-md:bottom-14 max-md:max-h-2/3 max-md:w-auto max-md:max-w-none max-md:translate-z-0 max-md:overflow-y-auto max-md:p-4 ${active ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
        <div className='flex items-center gap-3'>
          <img className='size-9 rounded-lg' src={geoidpm_logo} alt='' />
          <ProjectBadge label='GEOID PM' className='border-teal/30 bg-surface/55 text-teal' />
        </div>
        <h2 className='mt-3 text-5xl font-normal leading-none tracking-tight max-md:text-4xl xl:text-7xl'>Geoid Project<br />Management</h2>
        <p className='mt-4 max-w-lg leading-normal text-white/80'>Offshore survey management and permitting presented with clarity, trust, and services at a glance.</p>
        <ul className='whitespace-nowrap max-md:hidden mt-4 grid list-inside list-disc grid-cols-2 gap-x-4 gap-y-2 text-xs text-white/90 marker:text-teal'>
          <li>Permit acquisition</li>
          <li>Cable landings + EEZ traverse</li>
          <li>Cable route survey management</li>
          <li>Site investigations</li>
          <li>Stakeholder liaison</li>
        </ul>
        <div className='mt-4 flex flex-wrap gap-3'>
          <ActionLink href='https://geoidpm.com/' className='border-teal bg-teal text-canvas hover:bg-teal/10'>Visit site</ActionLink>
          <ActionLink href='https://github.com/jaredturck/GeoidPM'>GitHub</ActionLink>
        </div>
      </section>
      <div className='absolute right-8 bottom-6 z-10 flex gap-4 font-mono text-xs tracking-wider text-white/80 max-md:hidden'>
        50.9548 deg N | 1.3634 deg W <span className='text-teal'>DEPTH / ROUTE / PERMIT</span>
      </div>
    </div>
  )
}

export function AnyHjsSlide({ active }: SlideProps) {
  const [screenshot, set_screenshot] = useState({ image: anyhjs_img1, number: 1 })

  return (
    <div className='absolute inset-0 overflow-hidden bg-canvas transform-3d'>
      <img className='absolute inset-0 h-full w-full object-cover object-top' src={screenshot.image} alt='AnyHJS website preview' draggable='false' />
      <div className='absolute right-9 top-24 z-20 flex items-center gap-3 rounded-full border border-white/20 bg-black/80 px-3 py-2 text-xs font-extrabold tracking-widest text-white max-md:right-4'>
        <img className='size-6 rounded-full object-cover' src={anyhjs_logo} alt='' />
        <span>ANYHJS / EDITORIAL COMMERCE</span>
      </div>
      <section className={`absolute bottom-18 left-9 z-20 w-11/24 max-w-xl translate-z-16 rounded-r-3xl border border-l-4 border-lime/60 bg-linear-to-br from-black/95 to-black/75 px-7 py-7 shadow-2xl transition-all delay-150 duration-700 motion-reduce:transition-none xl:left-12 max-md:inset-x-5 max-md:bottom-16 max-md:w-auto max-md:p-4 max-sm:inset-x-3 max-sm:bottom-14 ${active ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
        <p className='text-xs font-black tracking-widest text-lime'>AI FASHION MARKETPLACE</p>
        <h2 className='mt-2 font-serif text-7xl font-medium leading-none tracking-tighter xl:text-8xl 2xl:text-9xl'>AnyHJS</h2>
        <blockquote className='mt-5 max-w-md font-serif text-base leading-relaxed text-white/90 xl:text-lg'>Outfit inspiration becomes instantly shoppable looks across brands.</blockquote>
        <div className='mt-5 flex flex-wrap items-center gap-4'>
          <ActionLink href='https://anyhjs.co.uk/' className='border-lime bg-lime text-canvas hover:bg-lime'>Visit site</ActionLink>
          <a className='inline-flex items-center gap-1 text-sm font-extrabold text-white' href='https://github.com/jaredturck/AnyHJS' target='_blank' rel='noreferrer'>
            GitHub <ExternalArrow />
          </a>
        </div>
      </section>
      <div className='absolute bottom-16 right-9 z-30 flex gap-2 rounded-2xl border border-white/15 bg-black/80 p-2 max-md:hidden' aria-label='AnyHJS screenshots'>
        <ScreenshotButton image={anyhjs_img1} number={1} active={screenshot.image === anyhjs_img1} on_select={() => set_screenshot({ image: anyhjs_img1, number: 1 })} />
        <ScreenshotButton image={anyhjs_img2} number={2} active={screenshot.image === anyhjs_img2} on_select={() => set_screenshot({ image: anyhjs_img2, number: 2 })} />
        <ScreenshotButton image={anyhjs_img3} number={3} active={screenshot.image === anyhjs_img3} on_select={() => set_screenshot({ image: anyhjs_img3, number: 3 })} />
        <ScreenshotButton image={anyhjs_img4} number={4} active={screenshot.image === anyhjs_img4} on_select={() => set_screenshot({ image: anyhjs_img4, number: 4 })} />
        <ScreenshotButton image={anyhjs_img5} number={5} active={screenshot.image === anyhjs_img5} on_select={() => set_screenshot({ image: anyhjs_img5, number: 5 })} />
        <ScreenshotButton image={anyhjs_img6} number={6} active={screenshot.image === anyhjs_img6} on_select={() => set_screenshot({ image: anyhjs_img6, number: 6 })} />
      </div>
      <div className='vertical-caption absolute right-10 top-40 text-xs font-black tracking-widest text-lime max-md:hidden'>COLLECTION / {String(screenshot.number).padStart(2, '0')}</div>
    </div>
  )
}

export function TitusAiSlide({ active }: SlideProps) {
  return (
    <div className='absolute inset-0 overflow-hidden bg-canvas bg-linear-to-br from-surface via-canvas to-cyan/15 text-white transform-3d'>
      <svg className='pointer-events-none absolute inset-0 size-full fill-none stroke-cyan/5' aria-hidden='true'>
        <defs>
          <pattern id='titus-grid' width='48' height='48' patternUnits='userSpaceOnUse'>
            <path d='M48 0H0V48' />
          </pattern>
        </defs>
        <rect width='100%' height='100%' fill='url(#titus-grid)' />
      </svg>
      <div className='absolute -top-48 -right-40 size-136 rounded-full border border-cyan/20' />
      <div className='absolute -bottom-56 left-88 size-88 rounded-full border border-cyan/20' />
      <div className='absolute top-1/2 left-12 z-10 max-xl:left-9 w-11/24 max-w-xl -translate-y-9/20 translate-z-12 max-md:inset-x-3.5 max-md:top-auto max-md:bottom-14 max-md:z-20 max-md:max-h-4/9 max-md:w-auto max-md:translate-y-0 max-md:translate-z-24 max-md:overflow-y-auto max-md:rounded-2xl max-md:bg-surface/90 max-md:p-4 max-md:backdrop-blur-lg'>
        <ProjectBadge mark='~' label='TITUS AI' className='border-cyan/30 bg-surface/55 text-cyan' />
        <h2 className='mt-4 text-5xl leading-none font-normal tracking-tighter max-md:text-4xl lg:text-6xl xl:text-7xl'>Titus AI</h2>
        <p className='mt-4 max-w-xl text-sm leading-relaxed text-white/75 lg:text-base'>A GPT-style chatbot project with a clean web UI and a model-first focus on token prediction and inference flow.</p>
        <div className='mt-5 grid grid-cols-3 gap-3'>
          <Statistic label='PARAMS' value='159.4M' />
          <Statistic label='DECODER' value='8 layers' />
          <Statistic label='VOCAB' value='50,259' />
        </div>
        <div className='mt-5'>
          <ActionLink href='https://github.com/jaredturck/TitusAI' className='border-cyan bg-cyan/80 text-canvas hover:bg-cyan/60'>GitHub</ActionLink>
        </div>
        <div className='mt-5 flex flex-wrap gap-2 text-xs text-white/75'>
          <span className='rounded-full border border-cyan/20 px-2.5 py-1.5'>Decoder-only</span>
          <span className='rounded-full border border-cyan/20 px-2.5 py-1.5'>Causal mask</span>
          <span className='rounded-full border border-cyan/20 px-2.5 py-1.5'>Adaptive softmax</span>
          <span className='rounded-full border border-cyan/20 px-2.5 py-1.5'>Single GPU training</span>
        </div>
      </div>

      <div className={`absolute top-1/10 right-1/12 z-10 max-xl:right-1/24 flex h-3/4 w-1/3 max-w-sm flex-col overflow-hidden rounded-2xl border border-cyan/30 bg-surface shadow-2xl translate-z-20 transition-all delay-150 duration-700 max-md:inset-x-3.5 max-md:top-22 max-md:h-9/20 max-md:w-auto ${active ? 'translate-y-0 rotate-y-0 opacity-100' : 'translate-y-8 -rotate-y-3 opacity-0'}`}>
        <div className='flex items-center justify-between px-4 pt-3 pb-2 text-xs text-white/75'>
          <span>11:52</span>
          <img className='size-4' src={camera_dot} alt='' />
          <div className='flex items-center gap-2'>
            <img className='size-3.5' src={signal_icon} alt='' />
            <img className='size-3.5' src={wifi_icon} alt='' />
            <img className='size-3.5' src={battery_icon} alt='' />
          </div>
        </div>
        <div className='flex items-center justify-between gap-2 border-y border-cyan/10 bg-surface/60 px-4 py-3'>
          <div className='flex items-center gap-2'>
            <img className='size-5 rounded-sm object-contain' src={titus_logo} alt='' />
            <b className='text-xs'>Titus AI</b>
          </div>
          <div className='flex items-center gap-2'>
            <button className='rounded-full border border-white/12 bg-white/3 px-2 py-1 text-xs text-white' type='button'>Load model</button>
            <button className='rounded-full border border-white/12 bg-white/3 px-2 py-1 text-xs text-white' type='button'>x</button>
          </div>
        </div>
        <div className='flex min-h-0 flex-1 flex-col gap-2.5 overflow-hidden p-3 text-xs leading-snug max-md:p-2'>
          <div className='max-w-5/6 shrink-0 rounded-xl border border-white/9 bg-white/5 px-3 py-2.5 max-sm:px-2 max-sm:py-1.5 text-white'>How can I assist you today?</div>
          <div className='max-w-5/6 shrink-0 self-end rounded-xl bg-cyan/60 px-3 py-2.5 max-sm:px-2 max-sm:py-1.5 text-canvas'>How are you today?</div>
          <div className='max-w-5/6 shrink-0 rounded-xl border border-white/9 bg-white/5 px-3 py-2.5 max-sm:px-2 max-sm:py-1.5 text-white'>Doing great - want to test the model with a prompt?</div>
          <div className='max-w-5/6 shrink-0 self-end rounded-xl bg-cyan/60 px-3 py-2.5 max-sm:px-2 max-sm:py-1.5 text-canvas'>Give me a one-liner about what you do.</div>
          <div className='max-w-5/6 shrink-0 rounded-xl border border-white/9 bg-white/5 px-3 py-2.5 max-sm:px-2 max-sm:py-1.5 text-white'>I generate text by predicting the next token, one step at a time.</div>
          <div className='max-w-5/6 shrink-0 animate-pulse rounded-xl border border-white/9 bg-white/5 px-3 py-2.5 max-sm:px-2 max-sm:py-1.5 text-white/60 motion-reduce:animate-none'>Thinking...</div>
        </div>
        <div className='flex items-center gap-2 border-t border-cyan/10 p-3 max-sm:hidden'>
          <label className='flex min-w-0 items-center gap-1 rounded-xl border border-white/10 bg-surface px-2 py-2 text-xs text-white/90'>
            <input type='checkbox' /> Think
          </label>
          <input className='min-w-0 flex-1 rounded-xl border border-white/10 bg-surface px-2 py-2 text-xs text-white/90' type='text' placeholder='Type a message...' />
          <button className='rounded-xl border border-white/10 bg-surface px-2 py-2 text-xs text-white/90' type='button'>Send</button>
        </div>
        <div className='flex items-center justify-around border-t border-cyan/10 px-10 py-2'>
          <img className='size-4 opacity-70' src={back_icon} alt='' />
          <img className='size-4 opacity-70' src={home_icon} alt='' />
          <img className='size-4 opacity-70' src={recent_icon} alt='' />
        </div>
      </div>
    </div>
  )
}

export function JaredCalcSlide() {
  return (
    <div className='absolute inset-0 overflow-hidden bg-canvas bg-linear-to-br from-canvas via-surface to-cyan/15 text-white transform-3d'>
      <svg className='pointer-events-none absolute inset-0 size-full fill-none stroke-gold/5' aria-hidden='true'>
        <defs>
          <pattern id='calculator-grid' width='48' height='48' patternUnits='userSpaceOnUse'>
            <path d='M48 0H0V48' />
          </pattern>
        </defs>
        <rect width='100%' height='100%' fill='url(#calculator-grid)' />
      </svg>
      <div className='absolute top-26 left-12 flex gap-8'>
        <i className='h-1 w-20 border-t border-dashed border-gold/30' />
        <i className='h-1 w-20 border-t border-dashed border-gold/30' />
        <i className='h-1 w-20 border-t border-dashed border-gold/30' />
      </div>
      <section className='absolute top-1/2 left-12 z-10 max-xl:left-9 w-11/24 max-w-xl -translate-y-9/20 translate-z-12 max-md:inset-x-3.5 max-md:top-auto max-md:bottom-14 max-md:z-20 max-md:max-h-4/9 max-md:w-auto max-md:translate-y-0 max-md:translate-z-24 max-md:overflow-y-auto max-md:rounded-2xl max-md:bg-surface/90 max-md:p-4 max-md:backdrop-blur-lg'>
        <ProjectBadge mark='JC' label='JAREDCALC' className='border-gold/30 bg-surface/55 text-gold' />
        <h2 className='mt-4 font-serif text-6xl leading-none font-normal tracking-tighter text-paper max-md:text-4xl xl:text-7xl'>JaredCalc</h2>
        <p className='mt-4 max-w-xl text-base leading-relaxed text-paper/90'>A scientific calculator built from scratch: custom AST parser, constants, bitwise operations, combinatorics, and maths functions without dependencies.</p>
        <div className='mt-5 flex flex-wrap gap-2 text-xs text-paper'>
          <span className='rounded-full border border-gold/20 bg-gold/5 px-2.5 py-1.5'>100% Python</span>
          <span className='rounded-full border border-gold/20 bg-gold/5 px-2.5 py-1.5'>No dependencies</span>
          <span className='rounded-full border border-gold/20 bg-gold/5 px-2.5 py-1.5'>AST evaluator</span>
          <span className='rounded-full border border-gold/20 bg-gold/5 px-2.5 py-1.5'>Taylor-series trig</span>
          <span className='rounded-full border border-gold/20 bg-gold/5 px-2.5 py-1.5'>Constants + units</span>
        </div>
        <ActionLink href='https://github.com/jaredturck/JaredCalc' className='mt-5 border-gold bg-gold text-canvas hover:bg-cyan/60'>GitHub</ActionLink>
      </section>

      <section className='absolute top-1/10 right-1/12 z-10 max-xl:right-1/24 w-3/8 max-w-md rounded-3xl border border-black/25 bg-paper bg-linear-to-br from-gold via-paper/75 to-cyan/40 p-5 text-canvas shadow-2xl translate-z-20 max-md:inset-x-3.5 max-md:top-22 max-md:h-9/20 max-md:w-auto max-md:p-3'>
        <div className='min-h-48 rounded-2xl border border-black/18 bg-paper bg-linear-to-b from-paper to-gold/80 p-4 shadow-inner max-md:min-h-24 max-md:p-3'>
          <header className='flex items-center justify-between text-xs tracking-wider text-canvas/60'>
            <b>JAREDCALC</b>
            <span className='rounded-full border border-black/15 px-2 py-1'>AST</span>
          </header>
          <div className='mt-9 min-h-14 font-mono text-xs leading-relaxed wrap-anywhere max-md:mt-3 max-md:min-h-7'>sqrt(2)^2 + sqrt(2) - (2 - sqrt(2))</div>
          <div className='mt-3 min-h-10 font-mono text-base font-extrabold break-all max-md:mt-2'><span className='text-cyan/60'>= </span>2.828427124746189402770824017</div>
        </div>
        <div className='mt-4 grid grid-cols-4 gap-2 text-xs font-extrabold text-canvas max-md:gap-1'>
          <button className='h-10 rounded-xl border border-black/16 bg-paper shadow-sm active:translate-y-0.5 max-md:h-6' type='button'>sin</button>
          <button className='h-10 rounded-xl border border-black/16 bg-paper shadow-sm active:translate-y-0.5 max-md:h-6' type='button'>cos</button>
          <button className='h-10 rounded-xl border border-black/16 bg-paper shadow-sm active:translate-y-0.5 max-md:h-6' type='button'>ln</button>
          <button className='h-10 rounded-xl border border-black/16 bg-paper shadow-sm active:translate-y-0.5 max-md:h-6' type='button'>gamma</button>
          <button className='h-10 rounded-xl border border-black/16 bg-gold shadow-sm active:translate-y-0.5 max-md:h-6' type='button'>(</button>
          <button className='h-10 rounded-xl border border-black/16 bg-gold shadow-sm active:translate-y-0.5 max-md:h-6' type='button'>)</button>
          <button className='h-10 rounded-xl border border-black/16 bg-gold shadow-sm active:translate-y-0.5 max-md:h-6' type='button'>^</button>
          <button className='h-10 rounded-xl border border-black/16 bg-gold shadow-sm active:translate-y-0.5 max-md:h-6' type='button'>/</button>
          <button className='h-10 rounded-xl border border-black/16 bg-paper shadow-sm active:translate-y-0.5 max-md:h-6' type='button'>7</button>
          <button className='h-10 rounded-xl border border-black/16 bg-paper shadow-sm active:translate-y-0.5 max-md:h-6' type='button'>8</button>
          <button className='h-10 rounded-xl border border-black/16 bg-paper shadow-sm active:translate-y-0.5 max-md:h-6' type='button'>9</button>
          <button className='h-10 rounded-xl border border-black/16 bg-gold shadow-sm active:translate-y-0.5 max-md:h-6' type='button'>*</button>
          <button className='h-10 rounded-xl border border-black/16 bg-paper shadow-sm active:translate-y-0.5 max-md:h-6' type='button'>4</button>
          <button className='h-10 rounded-xl border border-black/16 bg-paper shadow-sm active:translate-y-0.5 max-md:h-6' type='button'>5</button>
          <button className='h-10 rounded-xl border border-black/16 bg-paper shadow-sm active:translate-y-0.5 max-md:h-6' type='button'>6</button>
          <button className='h-10 rounded-xl border border-black/16 bg-gold shadow-sm active:translate-y-0.5 max-md:h-6' type='button'>-</button>
          <button className='h-10 rounded-xl border border-black/16 bg-paper shadow-sm active:translate-y-0.5 max-md:h-6' type='button'>1</button>
          <button className='h-10 rounded-xl border border-black/16 bg-paper shadow-sm active:translate-y-0.5 max-md:h-6' type='button'>2</button>
          <button className='h-10 rounded-xl border border-black/16 bg-paper shadow-sm active:translate-y-0.5 max-md:h-6' type='button'>3</button>
          <button className='h-10 rounded-xl border border-black/16 bg-gold shadow-sm active:translate-y-0.5 max-md:h-6' type='button'>+</button>
          <button className='h-10 rounded-xl border border-black/16 bg-paper shadow-sm active:translate-y-0.5 max-md:h-6' type='button'>pi</button>
          <button className='h-10 rounded-xl border border-black/16 bg-paper shadow-sm active:translate-y-0.5 max-md:h-6' type='button'>0</button>
          <button className='h-10 rounded-xl border border-black/16 bg-paper shadow-sm active:translate-y-0.5 max-md:h-6' type='button'>!</button>
          <button className='h-10 rounded-xl border border-black/16 bg-linear-to-b from-cyan/70 to-surface text-white shadow-sm active:translate-y-0.5 max-md:h-6' type='button'>=</button>
        </div>
        <footer className='mt-4 flex flex-wrap justify-between gap-2 text-xs text-canvas/60'>
          <span>Built from scratch</span>
          <b>no dependencies</b>
        </footer>
      </section>
    </div>
  )
}

export function TkDrawSlide({ active }: SlideProps) {
  return (
    <div className='absolute inset-0 overflow-hidden bg-canvas bg-linear-to-br from-lime/10 via-transparent to-gold/10 transform-3d'>
      <svg className='pointer-events-none absolute inset-0 size-full fill-none stroke-lime/30 stroke-1' viewBox='0 0 1000 600' preserveAspectRatio='none' aria-hidden='true'>
        <defs>
          <pattern id='tkdraw-grid' width='42' height='42' patternUnits='userSpaceOnUse'>
            <path className='stroke-white' d='M42 0H0V42' strokeOpacity={0.0224} />
          </pattern>
        </defs>
        <rect width='1000' height='600' fill='url(#tkdraw-grid)' stroke='none' />
        <path d='M40 520 320 170 570 445 840 80' strokeDasharray='9 12' />
        <path d='M120 80 280 250 670 170 940 420' strokeDasharray='9 12' />
        <circle className='fill-gold stroke-canvas stroke-3' cx='320' cy='170' r='8' />
        <circle className='fill-gold stroke-canvas stroke-3' cx='570' cy='445' r='8' />
        <circle className='fill-gold stroke-canvas stroke-3' cx='840' cy='80' r='8' />
      </svg>
      <section className='absolute top-1/2 left-9 xl:left-12 z-10 mt-9 w-11/24 max-w-xl -translate-y-1/2 translate-z-12 rounded-2xl border border-lime/25 bg-surface/85 p-6 text-white shadow-2xl shadow-black/35 backdrop-blur-lg max-md:inset-x-3 max-md:top-auto max-md:bottom-14 max-md:z-30 max-md:mt-0 max-md:max-h-4/9 max-md:w-auto max-md:max-w-none max-md:translate-y-0 max-md:translate-z-0 max-md:overflow-y-auto max-md:p-4'>
        <ProjectBadge mark='TK' label='TKDRAW' className='border-lime/30 bg-surface/55 text-lime' />
        <h2 className='mt-3 text-6xl font-normal leading-none tracking-tight max-md:text-4xl xl:text-7xl'>TkDraw</h2>
        <p className='mt-4 leading-normal text-white/75'>A Tkinter-powered vector drawing app built from scratch: shapes, colour picker, grid toggle, pan/zoom navigation, and export as Tkinter code.</p>
        <div className='mt-4 flex flex-wrap gap-2 text-xs text-white/90'>
          <span className='rounded-full border border-lime/15 px-2.5 py-1.5 max-md:px-1.5'>Tkinter</span>
          <span className='rounded-full border border-lime/15 px-2.5 py-1.5 max-md:px-1.5'>Vector tools</span>
          <span className='rounded-full border border-lime/15 px-2.5 py-1.5 max-md:px-1.5'>Pan + zoom</span>
          <span className='rounded-full border border-lime/15 px-2.5 py-1.5 max-md:px-1.5'>Undo</span>
          <span className='rounded-full border border-lime/15 px-2.5 py-1.5 max-md:px-1.5'>Export code</span>
        </div>
        <div className='max-md:hidden mt-4 rounded-xl border border-white/10 bg-white/2.5 p-3'>
          <b className='mb-2 block text-xs tracking-widest text-gold'>CONTROLS</b>
          <div className='flex flex-wrap gap-2 text-xs text-white/90'>
            <span className='rounded-full border border-lime/15 px-2.5 py-1.5 max-md:px-1.5'><kbd className='rounded border border-white/14 bg-canvas px-1 font-mono'>Ctrl</kbd> + click | select vertices</span>
            <span className='rounded-full border border-lime/15 px-2.5 py-1.5 max-md:px-1.5'><kbd className='rounded border border-white/14 bg-canvas px-1 font-mono'>Ctrl</kbd> + <kbd className='rounded border border-white/14 bg-canvas px-1 font-mono'>Z</kbd> | undo</span>
            <span className='rounded-full border border-lime/15 px-2.5 py-1.5 max-md:px-1.5'><kbd className='rounded border border-white/14 bg-canvas px-1 font-mono'>[</kbd> / <kbd className='rounded border border-white/14 bg-canvas px-1 font-mono'>]</kbd> | line width</span>
            <span className='rounded-full border border-lime/15 px-2.5 py-1.5 max-md:px-1.5'>drag pan | wheel zoom</span>
          </div>
        </div>
        <ActionLink href='https://github.com/jaredturck/tk-draw' className='mt-4 border-lime bg-lime text-canvas hover:bg-lime/10'>GitHub</ActionLink>
      </section>
      <section className={`absolute top-1/8 right-8 xl:right-1/16 z-20 flex w-8/15 max-w-2xl translate-z-18 flex-col overflow-hidden rounded-2xl border border-lime/30 bg-surface shadow-2xl shadow-black/48 transition duration-700 delay-150 max-md:inset-x-3 max-md:top-22 max-md:h-4/9 max-md:w-auto max-md:max-w-none max-md:translate-z-0 ${active ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
        <WindowBar label='TkDraw - Drawing Window' />
        <img className='block max-h-108 w-full bg-paper object-contain max-md:min-h-0 max-md:flex-1' src={tkdraw_image} alt='TkDraw drawing application' />
        <footer className='flex flex-wrap justify-between gap-2 px-4 py-3 text-xs text-white/60'>
          <span className='flex items-center gap-2'><i className='size-2 rounded-full bg-lime' /> TkDraw v1.0</span>
          <b>Vector editor | Tkinter | Python</b>
        </footer>
      </section>
    </div>
  )
}

export function FisherAiSlide({ active }: SlideProps) {
  return (
    <div className='absolute inset-0 overflow-hidden bg-canvas bg-linear-to-br from-cyan/10 via-transparent to-gold/10 transform-3d'>
      <svg className='pointer-events-none absolute inset-0 size-full fill-white opacity-10' aria-hidden='true'>
        <defs>
          <pattern id='fisher-board' width='44' height='44' patternUnits='userSpaceOnUse'>
            <rect width='22' height='22' />
            <rect x='22' y='22' width='22' height='22' />
          </pattern>
        </defs>
        <rect width='100%' height='100%' fill='url(#fisher-board)' />
      </svg>
      <div className='absolute right-1/12 bottom-14 z-0 flex w-1/2 justify-between font-mono text-xs uppercase text-gold/30 max-md:hidden'>
        <span>a</span>
        <span>b</span>
        <span>c</span>
        <span>d</span>
        <span>e</span>
        <span>f</span>
        <span>g</span>
        <span>h</span>
      </div>
      <div className='absolute top-1/8 right-8 z-0 flex h-3/4 flex-col justify-between font-mono text-xs text-gold/30 max-md:hidden'>
        <span>8</span>
        <span>7</span>
        <span>6</span>
        <span>5</span>
        <span>4</span>
        <span>3</span>
        <span>2</span>
        <span>1</span>
      </div>
      <section className='absolute top-1/2 left-9 xl:left-12 z-10 mt-6 w-11/24 max-w-xl -translate-y-1/2 translate-z-12 text-white max-md:inset-x-3 max-md:top-auto max-md:bottom-14 max-md:z-30 max-md:mt-0 max-md:max-h-4/9 max-md:w-auto max-md:max-w-none max-md:translate-y-0 max-md:translate-z-0 max-md:overflow-y-auto max-md:rounded-2xl max-md:bg-surface/90 max-md:p-4 max-md:backdrop-blur-lg'>
        <ProjectBadge mark='FA' label='FISHER AI' className='border-gold/30 bg-surface/55 text-gold' />
        <h2 className='mt-4 text-6xl font-normal leading-none tracking-tight max-md:text-4xl xl:text-7xl'>Fisher AI</h2>
        <p className='mt-4 max-w-xl leading-normal text-white/75'>A chess engine and GUI with a neural-network player, evaluation runs against Stockfish, and a complete desktop app for local games.</p>
        <div className='mt-4 flex flex-wrap gap-2 text-xs text-white/90'>
          <span className='rounded-full border border-gold/20 bg-gold/5 px-2.5 py-1.5 max-md:px-1.5'>Python</span>
          <span className='rounded-full border border-gold/20 bg-gold/5 px-2.5 py-1.5 max-md:px-1.5'>GUI app</span>
          <span className='rounded-full border border-gold/20 bg-gold/5 px-2.5 py-1.5 max-md:px-1.5'>Neural net</span>
          <span className='rounded-full border border-gold/20 bg-gold/5 px-2.5 py-1.5 max-md:px-1.5'>Stockfish eval</span>
          <span className='rounded-full border border-gold/20 bg-gold/5 px-2.5 py-1.5 max-md:px-1.5'>ELO ~1056</span>
        </div>
        <section className='max-md:hidden mt-4 rounded-xl border border-cyan/20 bg-surface/70 p-3'>
          <h3 className='mb-3 text-xs font-normal tracking-widest text-white/60'>EVALUATION SNAPSHOT</h3>
          <div className='grid grid-cols-5 gap-2'>
            <article className='col-span-3 rounded-xl border border-white/8 p-3'>
              <span className='text-xs font-extrabold tracking-wider text-white/60'>RESULTS</span>
              <p className='mt-1 text-xs'>
                <b className='text-gold'>Stockfish</b> 36 | <em className='font-extrabold not-italic text-cyan'>Fisher</em> 4 | Draws 10
              </p>
            </article>
            <article className='col-span-2 rounded-xl border border-white/8 p-3'>
              <span className='text-xs font-extrabold tracking-wider text-white/60'>RUNTIME</span>
              <p className='mt-1 text-xs'>130.22s / 50 games</p>
            </article>
          </div>
        </section>
        <ActionLink href='https://github.com/jaredturck/FisherAI' className='mt-4 border-cyan bg-cyan text-canvas hover:bg-cyan/10'>GitHub</ActionLink>
      </section>
      <section className={`absolute top-1/12 right-8 xl:right-1/16 z-20 flex w-1/2 max-w-2xl translate-z-20 flex-col overflow-hidden rounded-2xl border border-gold/35 bg-surface shadow-2xl shadow-black/50 transition duration-700 delay-150 max-md:inset-x-3 max-md:top-22 max-md:h-4/9 max-md:w-auto max-md:max-w-none max-md:translate-z-0 ${active ? 'translate-y-0 rotate-y-0 opacity-100' : 'translate-y-6 -rotate-y-3 opacity-0'}`}>
        <WindowBar label='Chess GUI' />
        <img className='block max-h-120 w-full bg-canvas object-contain max-md:min-h-0 max-md:flex-1' src={fisher_image} alt='Fisher AI chess GUI' />
        <footer className='flex flex-wrap justify-between gap-2 px-4 py-3 text-xs text-white/60'>
          <span className='flex items-center gap-2'><i className='size-2 rounded-full bg-gold' /> Fisher AI v1</span>
          <b>Engine | Evaluation | Desktop GUI</b>
        </footer>
      </section>
    </div>
  )
}

export function NeuralNetSlide({ active }: SlideProps) {
  return (
    <div className='absolute inset-0 overflow-hidden bg-canvas bg-linear-to-br from-canvas via-surface to-cyan/15 text-white transform-3d'>
      <svg className='pointer-events-none absolute inset-0 size-full fill-none stroke-white/2' aria-hidden='true'>
        <defs>
          <pattern id='neural-lines' width='8' height='8' patternUnits='userSpaceOnUse'>
            <path d='M0 0H8' />
          </pattern>
        </defs>
        <rect width='100%' height='100%' fill='url(#neural-lines)' />
      </svg>
      <div className={`pointer-events-none absolute inset-x-0 top-0 z-0 h-1/8 bg-linear-to-b from-transparent via-teal/20 to-transparent ${active ? 'animate-pulse' : 'opacity-0'} motion-reduce:animate-none`} />
      <section className='absolute top-1/2 left-12 z-10 max-xl:left-9 w-4/9 max-w-xl -translate-y-9/20 translate-z-12 max-md:inset-x-3.5 max-md:top-auto max-md:bottom-14 max-md:z-20 max-md:max-h-4/9 max-md:w-auto max-md:translate-y-0 max-md:translate-z-24 max-md:overflow-y-auto max-md:rounded-2xl max-md:bg-surface/90 max-md:p-4 max-md:backdrop-blur-lg'>
        <ProjectBadge mark='NN' label='NEURAL NET LINEAR' className='border-teal/30 bg-surface/55 text-teal' />
        <h2 className='mt-4 text-5xl leading-none font-normal tracking-tighter max-md:text-4xl lg:text-6xl xl:text-7xl'>Neural Net Linear</h2>
        <p className='mt-4 text-base leading-relaxed text-white/75'>A neural network built from scratch in C: linear layers, activations, loss functions, SGD, and backprop implemented at the maths level.</p>
        <div className='mt-4 flex flex-wrap gap-2 font-mono text-xs text-white/80'>
          <span className='rounded-lg border border-teal/20 bg-teal/5 px-2.5 py-1.5'>100% C</span>
          <span className='rounded-lg border border-teal/20 bg-teal/5 px-2.5 py-1.5'>No dependencies</span>
          <span className='rounded-lg border border-teal/20 bg-teal/5 px-2.5 py-1.5'>Backprop</span>
          <span className='rounded-lg border border-teal/20 bg-teal/5 px-2.5 py-1.5'>SGD optimizer</span>
          <span className='rounded-lg border border-teal/20 bg-teal/5 px-2.5 py-1.5'>Softmax grads</span>
          <span className='rounded-lg border border-teal/20 bg-teal/5 px-2.5 py-1.5'>MSE / BCE / CCE</span>
        </div>
        <div className='mt-4 grid gap-2 rounded-xl border border-teal/20 bg-canvas/75 p-3 font-mono text-xs max-sm:hidden'>
          <span className='text-teal'>$ ./train --epochs 200</span>
          <b className='text-white/60'>loss 0.0182 | accuracy 98.4%</b>
        </div>
        <ActionLink href='https://github.com/jaredturck/neural-net-linear' className='mt-4 border-teal bg-surface/60 text-teal hover:bg-teal/10'>Open repository</ActionLink>
      </section>
      <section className={`absolute top-1/8 right-1/20 z-10 max-xl:right-1/24 h-7/10 w-5/9 max-w-3xl rounded-2xl border border-teal/20 bg-canvas/80 p-4 shadow-2xl translate-z-18 transition-all delay-150 duration-700 max-md:inset-x-3.5 max-md:top-22 max-md:h-9/20 max-md:w-auto max-md:overflow-auto ${active ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
        <header className='flex justify-between gap-2 font-mono text-xs tracking-wider text-white/60'>
          <span>MODEL GRAPH / LIVE</span>
          <b className='text-teal'>BACKPROP ENABLED</b>
        </header>
        <div className='relative mt-3 grid h-7/10 grid-cols-4 items-center max-md:min-w-128'>
          <NeuralLayer label='INPUT'>
            <i className='size-5 animate-pulse rounded-full border border-teal bg-surface ring-4 ring-teal/5 motion-reduce:animate-none' />
            <i className='size-5 animate-pulse rounded-full border border-teal bg-surface ring-4 ring-teal/5 motion-reduce:animate-none' />
            <i className='size-5 animate-pulse rounded-full border border-teal bg-surface ring-4 ring-teal/5 motion-reduce:animate-none' />
            <i className='size-5 animate-pulse rounded-full border border-teal bg-surface ring-4 ring-teal/5 motion-reduce:animate-none' />
          </NeuralLayer>
          <NeuralLayer label='LINEAR 01'>
            <i className='size-5 animate-pulse rounded-full border border-teal bg-surface ring-4 ring-teal/5 motion-reduce:animate-none' />
            <i className='size-5 animate-pulse rounded-full border border-teal bg-surface ring-4 ring-teal/5 motion-reduce:animate-none' />
            <i className='size-5 animate-pulse rounded-full border border-teal bg-surface ring-4 ring-teal/5 motion-reduce:animate-none' />
            <i className='size-5 animate-pulse rounded-full border border-teal bg-surface ring-4 ring-teal/5 motion-reduce:animate-none' />
            <i className='size-5 animate-pulse rounded-full border border-teal bg-surface ring-4 ring-teal/5 motion-reduce:animate-none' />
          </NeuralLayer>
          <NeuralLayer label='ReLU'>
            <i className='size-5 animate-pulse rounded-full border border-teal bg-surface ring-4 ring-teal/5 motion-reduce:animate-none' />
            <i className='size-5 animate-pulse rounded-full border border-teal bg-surface ring-4 ring-teal/5 motion-reduce:animate-none' />
            <i className='size-5 animate-pulse rounded-full border border-teal bg-surface ring-4 ring-teal/5 motion-reduce:animate-none' />
            <i className='size-5 animate-pulse rounded-full border border-teal bg-surface ring-4 ring-teal/5 motion-reduce:animate-none' />
            <i className='size-5 animate-pulse rounded-full border border-teal bg-surface ring-4 ring-teal/5 motion-reduce:animate-none' />
          </NeuralLayer>
          <NeuralLayer label='OUTPUT'>
            <i className='size-5 animate-pulse rounded-full border border-teal bg-surface ring-4 ring-teal/5 motion-reduce:animate-none' />
            <i className='size-5 animate-pulse rounded-full border border-teal bg-surface ring-4 ring-teal/5 motion-reduce:animate-none' />
            <i className='size-5 animate-pulse rounded-full border border-teal bg-surface ring-4 ring-teal/5 motion-reduce:animate-none' />
          </NeuralLayer>
          <svg className='pointer-events-none absolute inset-0 size-full fill-none stroke-teal/20 stroke-1' viewBox='0 0 900 390' aria-hidden='true'>
            <path d='M120 80 330 55M120 80 330 130M120 160 330 55M120 160 330 205M120 240 330 130M120 320 330 280M350 55 565 80M350 130 565 155M350 205 565 230M350 280 565 305M585 80 800 110M585 155 800 195M585 230 800 280M585 305 800 195' />
          </svg>
        </div>
        <div className='grid grid-cols-3 gap-2'>
          <article className='rounded-xl border border-white/8 bg-white/2.5 p-2.5'>
            <span className='block font-mono text-xs tracking-wide text-white/50'>ACTIVATIONS</span>
            <b className='mt-1 block text-xs text-white/75'>ReLU | Sigmoid | GELU</b>
          </article>
          <article className='rounded-xl border border-white/8 bg-white/2.5 p-2.5'>
            <span className='block font-mono text-xs tracking-wide text-white/50'>OPTIMIZER</span>
            <b className='mt-1 block text-xs text-white/75'>Stochastic gradient descent</b>
          </article>
          <article className='rounded-xl border border-white/8 bg-white/2.5 p-2.5'>
            <span className='block font-mono text-xs tracking-wide text-white/50'>MEMORY</span>
            <b className='mt-1 block text-xs text-white/75'>Manual allocation</b>
          </article>
        </div>
      </section>
    </div>
  )
}

export function EnJaSlide({ active }: SlideProps) {
  return (
    <div className='absolute inset-0 overflow-hidden bg-canvas bg-linear-to-br from-coral/10 via-canvas to-cyan/10 text-white transform-3d'>
      <svg className='pointer-events-none absolute inset-0 size-full fill-none stroke-white/1' aria-hidden='true'>
        <defs>
          <pattern id='translation-grid' width='56' height='56' patternUnits='userSpaceOnUse'>
            <path d='M56 0H0V56' />
          </pattern>
        </defs>
        <rect width='100%' height='100%' fill='url(#translation-grid)' />
      </svg>
      <div className='absolute top-22 right-18 size-40 rounded-full bg-coral/15 shadow-2xl shadow-coral/15' />
      <div className='absolute -top-1/5 left-1/2 h-3/2 w-px rotate-15 bg-linear-to-b from-transparent via-coral/55 to-cyan/55' />
      <section className='absolute top-1/2 left-12 z-10 max-xl:left-9 w-4/9 max-w-xl -translate-y-9/20 translate-z-12 max-md:inset-x-3.5 max-md:top-auto max-md:bottom-14 max-md:z-20 max-md:max-h-4/9 max-md:w-auto max-md:translate-y-0 max-md:translate-z-24 max-md:overflow-y-auto max-md:rounded-2xl max-md:bg-surface/90 max-md:p-4 max-md:backdrop-blur-lg'>
        <ProjectBadge label='EN -> JA TRANSLATOR' className='border-coral/30 bg-surface/55 text-coral' />
        <h2 className='mt-4 text-5xl leading-none font-normal tracking-tighter max-md:text-4xl lg:text-6xl xl:text-7xl xl:whitespace-nowrap max-sm:max-w-64'>English <span className='text-coral'>-&gt;</span> Japanese</h2>
        <p className='mt-4 text-base leading-relaxed text-white/75'>A custom tokeniser and transformer encoder/decoder designed for real-world inference and dataset iteration.</p>
        <div className='mt-4 flex flex-wrap gap-2 text-xs max-sm:hidden'>
          <span className='rounded-full border border-coral/20 px-2.5 py-1.5'>Transformer</span>
          <span className='rounded-full border border-coral/20 px-2.5 py-1.5'>Custom tokeniser</span>
          <span className='rounded-full border border-coral/20 px-2.5 py-1.5'>Encoder / decoder</span>
          <span className='rounded-full border border-coral/20 px-2.5 py-1.5'>Beam-ready inference</span>
        </div>
        <ActionLink href='https://github.com/jaredturck/en-ja-translator' className='mt-4 border-coral bg-coral text-canvas hover:bg-coral/90'>GitHub</ActionLink>
      </section>
      <section className={`absolute top-1/8 right-1/20 z-10 max-xl:right-1/24 w-5/9 max-w-3xl overflow-hidden rounded-2xl border border-coral/25 bg-surface/90 shadow-2xl translate-z-18 transition-all delay-150 duration-700 max-md:inset-x-3.5 max-md:top-22 max-md:h-9/20 max-md:w-auto max-md:overflow-auto ${active ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
        <header className='flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 text-xs tracking-wider'>
          <b>AI TRANSLATION</b>
          <span className='rounded-full border border-white/10 px-2 py-1'>EN <i className='text-coral not-italic'>-&gt;</i> JA</span>
        </header>
        <div className='grid grid-cols-2 gap-3 p-4 max-md:min-w-136'>
          <div className='rounded-xl border border-white/8 bg-white/2.5 p-3'>
            <h3 className='mb-3 text-xs tracking-wider text-white/60'>ENGLISH / INPUT</h3>
            <p className='mt-2 rounded-lg border border-white/7 bg-black/22 px-3 py-2 text-xs leading-snug text-white/90'>The weather is beautiful today.</p>
            <p className='mt-2 rounded-lg border border-white/7 bg-black/22 px-3 py-2 text-xs leading-snug text-white/90'>Machine learning can help people.</p>
            <p className='mt-2 rounded-lg border border-white/7 bg-black/22 px-3 py-2 text-xs leading-snug text-white/90'>I am building a translation model.</p>
            <p className='mt-2 rounded-lg border border-white/7 bg-black/22 px-3 py-2 text-xs leading-snug text-white/90'>Where is the nearest station?</p>
          </div>
          <div className='rounded-xl border border-white/8 bg-white/2.5 p-3'>
            <h3 className='mb-3 text-xs tracking-wider text-white/60'>日本語 / OUTPUT</h3>
            <p className={`mt-2 rounded-lg border border-white/7 bg-black/22 px-3 py-2 text-xs leading-snug text-white/90 transition-all duration-500 delay-0 ${active ? 'translate-x-0 opacity-100' : 'translate-x-3 opacity-0'}`}>今日は天気がとても良いです。</p>
            <p className={`mt-2 rounded-lg border border-white/7 bg-black/22 px-3 py-2 text-xs leading-snug text-white/90 transition-all duration-500 delay-100 ${active ? 'translate-x-0 opacity-100' : 'translate-x-3 opacity-0'}`}>機械学習は人々を助けることができます。</p>
            <p className={`mt-2 rounded-lg border border-white/7 bg-black/22 px-3 py-2 text-xs leading-snug text-white/90 transition-all duration-500 delay-200 ${active ? 'translate-x-0 opacity-100' : 'translate-x-3 opacity-0'}`}>私は翻訳モデルを作っています。</p>
            <p className={`mt-2 rounded-lg border border-white/7 bg-black/22 px-3 py-2 text-xs leading-snug text-white/90 transition-all duration-500 delay-300 ${active ? 'translate-x-0 opacity-100' : 'translate-x-3 opacity-0'}`}>最寄りの駅はどこですか？</p>
          </div>
        </div>
        <footer className='flex items-center justify-center gap-2 whitespace-nowrap border-t border-white/8 p-3 font-mono text-xs text-white/50'>
          <span>tokenise</span>
          <i className='text-cyan not-italic'>-&gt;</i>
          <span>encode</span>
          <i className='text-cyan not-italic'>-&gt;</i>
          <span>decode</span>
          <i className='text-cyan not-italic'>-&gt;</i>
          <span>translate</span>
        </footer>
      </section>
    </div>
  )
}

export function SpellingSlide({ active }: SlideProps) {
  return (
    <div className='absolute inset-0 overflow-hidden bg-paper text-surface transform-3d'>
      <svg className='pointer-events-none absolute inset-0 size-full fill-none stroke-blue/20 stroke-1' aria-hidden='true'>
        <defs>
          <pattern id='spelling-lines' width='32' height='32' patternUnits='userSpaceOnUse'>
            <path d='M0 31H32' />
          </pattern>
        </defs>
        <rect width='100%' height='100%' fill='url(#spelling-lines)' stroke='none' />
      </svg>
      <div className='absolute inset-y-0 left-1/8 w-0.5 bg-coral/40' />
      <section className='absolute top-1/2 left-9 xl:left-14 z-10 mt-8 w-4/9 max-w-xl -translate-y-1/2 translate-z-12 -rotate-2 rounded-xl border border-surface/15 bg-paper/90 p-6 shadow-2xl shadow-canvas/20 max-md:inset-x-3 max-md:top-auto max-md:bottom-14 max-md:z-30 max-md:mt-0 max-md:max-h-4/9 max-md:w-auto max-md:max-w-none max-md:translate-y-0 max-md:translate-z-0 max-md:rotate-0 max-md:overflow-y-auto max-md:p-4'>
        <ProjectBadge mark='SC' label='SPELLING CORRECTION AI' className='border-gold/30 bg-surface text-gold' />
        <h2 className='mt-4 font-serif text-5xl font-normal leading-none tracking-tight max-md:text-4xl xl:text-7xl'>Spelling<br />Correction AI</h2>
        <p className='mt-4 leading-normal text-surface/75'>An LSTM model trained to correct spelling mistakes, presented in a lightweight desktop GUI with clear markup-style feedback.</p>
        <div className='mt-4 flex items-center gap-3 font-mono font-extrabold'>
          <del className='text-coral decoration-2'>recieve</del>
          <span>-&gt;</span>
          <ins className='border-b-2 border-teal text-surface no-underline'>receive</ins>
        </div>
        <div className='max-md:hidden mt-4 flex flex-wrap gap-2 text-xs text-surface'>
          <span className='rounded-full border border-surface/15 px-2.5 py-1.5'>LSTM model</span>
          <span className='rounded-full border border-surface/15 px-2.5 py-1.5'>Character-level</span>
          <span className='rounded-full border border-surface/15 px-2.5 py-1.5'>GUI app</span>
          <span className='rounded-full border border-surface/15 px-2.5 py-1.5'>Highlights corrections</span>
        </div>
        <ActionLink href='https://github.com/jaredturck/Spelling-Correction-AI' className='mt-4 border-gold bg-gold text-canvas hover:bg-gold/10'>GitHub</ActionLink>
      </section>
      <section className={`absolute top-1/10 right-1/16 z-20 w-11/24 max-w-xl translate-z-16 rotate-1 overflow-hidden rounded-2xl border border-surface/20 bg-paper shadow-2xl shadow-surface/20 transition duration-700 delay-150 max-md:top-22 max-md:left-3 max-md:right-auto max-md:w-3/4 max-md:translate-z-0 ${active ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
        <WindowBar label='Spelling Correction' className='bg-surface' />
        <img className='block w-full' src={spelling_image} alt='Spelling correction application' />
      </section>
      <section className={`absolute right-8 bottom-1/16 z-30 w-3/10 max-w-sm translate-z-20 -rotate-2 overflow-hidden rounded-2xl border border-surface/20 bg-paper shadow-2xl shadow-surface/20 transition duration-700 delay-300 max-md:top-40 max-md:right-2 max-md:bottom-auto max-md:w-1/2 max-md:translate-z-0 ${active ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
        <WindowBar label='Qwen comparison' className='bg-surface' />
        <img className='block w-full' src={spelling_qwen_image} alt='Qwen spelling correction comparison' />
      </section>
      <div className='absolute top-1/8 left-5/12 z-0 -rotate-12 font-serif text-6xl font-black text-coral/30'>OK</div>
      <div className='absolute bottom-1/16 left-1/6 z-0 -rotate-12 font-serif text-6xl font-black text-surface/25'>Aa</div>
    </div>
  )
}

export function ExpertiseSlide({ active }: SlideProps) {
  return (
    <div className='absolute inset-0 overflow-hidden bg-canvas bg-linear-to-br from-surface via-canvas to-purple/20 transform-3d'>
      <svg className='pointer-events-none absolute inset-0 size-full fill-none stroke-white/10 opacity-16' aria-hidden='true'>
        <defs>
          <pattern id='expertise-grid' width='48' height='48' patternUnits='userSpaceOnUse'>
            <path d='M48 0H0V48' />
          </pattern>
        </defs>
        <rect width='100%' height='100%' fill='url(#expertise-grid)' />
      </svg>
      <div className='absolute left-12 top-1/2 z-10 w-1/4 -translate-y-1/2 translate-z-12 max-md:inset-x-6 max-md:top-24 max-md:w-auto max-md:translate-none'>
        <p className='text-xs font-black tracking-widest text-cyan'>WHAT I BUILD</p>
        <h2 className='mt-3 text-5xl leading-none tracking-tighter text-white lg:text-6xl xl:text-7xl 2xl:text-8xl'>Core<br />expertise</h2>
        <span className='mt-4 block leading-relaxed text-white/75 max-md:max-w-lg max-sm:hidden'>A practical mix of product thinking, engineering, and machine learning.</span>
      </div>
      <div className='absolute left-1/5 top-1/5 size-112 rounded-full border border-white/5 max-md:hidden' aria-hidden='true'>
        <i className='absolute left-1/2 top-2 size-2 rounded-full bg-cyan shadow-lg shadow-cyan/50' />
        <i className='absolute right-5 top-2/3 size-2 rounded-full bg-purple shadow-lg shadow-purple/50' />
        <i className='absolute bottom-8 left-1/5 size-2 rounded-full bg-cyan shadow-lg shadow-cyan/50' />
      </div>
      <section className='absolute right-10 top-1/6 z-10 h-7/10 w-2/3 transform-3d max-md:inset-x-4 max-md:bottom-20 max-md:top-3/10 max-md:h-auto max-md:w-auto max-md:overflow-auto max-md:touch-pan-y max-md:touch-pinch-zoom'>
        <Slide code='AI' title='AI-powered applications' description='LLMs, NLP, computer vision, model integration, and useful product experiences around them.' meta='LLMs | NLP | CV | RAG' className={`left-0 top-0 translate-z-9 border-cyan/35 bg-surface bg-linear-to-br from-cyan/10 to-transparent text-cyan delay-150 ${active ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`} />
        <Slide code='FS' title='Full-stack systems' description='Responsive interfaces, robust APIs, data modelling, authentication, and production-minded architecture.' meta='React | Django | REST | SQL' className={`right-0 top-1/8 translate-z-14 border-blue/35 bg-surface bg-linear-to-br from-blue/10 to-transparent text-blue delay-300 ${active ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`} />
        <Slide code='DT' title='Developer tools' description='Desktop utilities and experiments that turn complex workflows into simple, focused tools.' meta='Python | Tkinter | Linux' className={`bottom-0 left-1/4 translate-z-18 border-purple/35 bg-surface bg-linear-to-br from-purple/10 to-transparent text-purple delay-300 ${active ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`} />
      </section>
    </div>
  )
}

export function ProcessSlide({ active }: SlideProps) {
  return (
    <div className='absolute inset-0 overflow-hidden bg-canvas bg-linear-to-br from-surface via-canvas to-purple/20 transform-3d'>
      <header className='absolute left-12 top-36 z-10 max-md:left-6 max-md:top-24'>
        <p className='text-xs font-black tracking-widest text-teal'>PROCESS</p>
        <h2 className='mt-3 text-6xl leading-none tracking-tighter text-white max-md:text-5xl xl:text-7xl 2xl:text-8xl'>How I work</h2>
        <span className='mt-3 block text-white/75 max-sm:hidden'>Turning requirements into reliable software.</span>
      </header>
      <section className={`absolute inset-x-10 top-2/5 h-2/5 transition-opacity duration-700 max-md:inset-x-5 max-md:bottom-20 max-md:top-3/10 max-md:h-auto max-md:overflow-auto max-md:touch-pan-y max-md:touch-pinch-zoom ${active ? 'opacity-100' : 'opacity-0'}`}>
        <div className='absolute left-0 top-1/2 h-0.5 w-full overflow-hidden bg-white/10 max-md:left-5 max-md:top-0 max-md:h-full max-md:w-0.5'>
          <i className='block size-full bg-linear-to-r from-teal to-blue' />
        </div>
        <ProcessStep number='01' title='Idea' description='Understand the problem, define the scope and requirements.' className='left-0' above />
        <ProcessStep number='02' title='Build' description='Build clean, maintainable software to a high standard.' className='left-1/4' />
        <ProcessStep number='03' title='Test' description='Test against requirements and resolve issues before release.' className='left-1/2' above />
        <ProcessStep number='04' title='Ship' description='Release reliable software and support it in production.' className='left-3/4' />
      </section>
      <div className='absolute bottom-8 right-10 text-xs tracking-widest text-white/32'>SCOPE | BUILD | TEST | SHIP</div>
    </div>
  )
}

export function TechnologiesSlide({ active }: SlideProps) {
  return (
    <div className='absolute inset-0 overflow-hidden bg-canvas bg-linear-to-br from-surface via-canvas to-purple/20 transform-3d'>
      <svg className='pointer-events-none absolute inset-0 size-full opacity-12' aria-hidden='true'>
        <defs>
          <pattern id='technology-dots' width='32' height='32' patternUnits='userSpaceOnUse'>
            <circle cx='1' cy='1' r='1' className='fill-white/20' />
          </pattern>
        </defs>
        <rect width='100%' height='100%' fill='url(#technology-dots)' />
      </svg>
      <header className='absolute left-12 top-30 z-10 max-md:left-6 max-md:top-24'>
        <p className='text-xs font-black tracking-widest text-cyan'>TECH STACK</p>
        <h2 className='mt-3 text-5xl leading-none tracking-tighter text-white max-md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl'>Technologies I use</h2>
      </header>
      <div className='absolute left-1/2 top-1/2 z-20 grid size-36 -translate-x-1/2 -translate-y-1/2 translate-z-20 place-items-center rounded-full border border-cyan/40 bg-canvas/90 shadow-2xl shadow-cyan/10 max-md:hidden'>
        <span className='self-end text-xs tracking-widest text-white/60'>PRODUCT</span>
        <b className='mt-1 self-start text-xl text-white'>STACK</b>
        <i className='absolute -inset-2 rounded-full border border-dashed border-cyan/25' />
      </div>
      <svg className='absolute inset-0 size-full fill-none stroke-cyan/20 stroke-1 max-md:hidden' viewBox='0 0 1200 680' strokeDasharray='8 12' aria-hidden='true'>
        <path d='M600 340 270 165M600 340 930 165M600 340 270 520M600 340 930 520' />
      </svg>
      <div className='contents max-md:absolute max-md:inset-x-2.5 max-md:bottom-11 max-md:top-2/7 max-md:grid max-md:grid-cols-2 max-md:content-between max-md:items-end max-md:gap-3 max-md:overflow-auto max-md:touch-pan-y max-md:touch-pinch-zoom'>
        <TechnologyGroup title='FRONTEND' className={`left-14 top-1/4 mt-4 translate-z-9 border-cyan/30 text-cyan delay-150 **:border-cyan/20 ${active ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <span><i className='size-1 rounded-full bg-cyan' />React</span>
          <span><i className='size-1 rounded-full bg-cyan' />TypeScript</span>
          <span><i className='size-1 rounded-full bg-cyan' />HTML/CSS</span>
          <span><i className='size-1 rounded-full bg-cyan' />Tailwind CSS</span>
          <span><i className='size-1 rounded-full bg-cyan' />Vite</span>
        </TechnologyGroup>
        <TechnologyGroup title='BACKEND' className={`right-14 top-1/4 mt-4 translate-z-11 border-teal/30 text-teal delay-300 **:border-teal/20 ${active ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <span><i className='size-1 rounded-full bg-teal' />Python</span>
          <span><i className='size-1 rounded-full bg-teal' />Django</span>
          <span><i className='size-1 rounded-full bg-teal' />Django REST</span>
          <span><i className='size-1 rounded-full bg-teal' />PostgreSQL</span>
          <span><i className='size-1 rounded-full bg-teal' />MySQL</span>
        </TechnologyGroup>
        <TechnologyGroup title='AI / ML' className={`bottom-1/12 left-14 translate-z-13 border-purple/30 text-purple delay-300 **:border-purple/20 ${active ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <span><i className='size-1 rounded-full bg-purple' />PyTorch</span>
          <span><i className='size-1 rounded-full bg-purple' />Transformers</span>
          <span><i className='size-1 rounded-full bg-purple' />Hugging Face</span>
          <span><i className='size-1 rounded-full bg-purple' />NumPy</span>
          <span><i className='size-1 rounded-full bg-purple' />Pandas</span>
        </TechnologyGroup>
        <TechnologyGroup title='INFRA / TOOLS' className={`bottom-1/12 right-14 translate-z-15 border-blue/30 text-blue delay-500 **:border-blue/20 ${active ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <span><i className='size-1 rounded-full bg-blue' />Docker</span>
          <span><i className='size-1 rounded-full bg-blue' />Linux</span>
          <span><i className='size-1 rounded-full bg-blue' />Git &amp; GitHub</span>
          <span><i className='size-1 rounded-full bg-blue' />VS Code</span>
          <span><i className='size-1 rounded-full bg-blue' />Tkinter</span>
        </TechnologyGroup>
      </div>
    </div>
  )
}

export function ContactSlide() {
  return (
    <div className='absolute inset-0 overflow-hidden bg-canvas bg-linear-to-br from-canvas via-surface to-purple/20 transform-3d'>
      <div className='pointer-events-none absolute right-1/12 top-1/6 size-96 rounded-full bg-transparent blur-3xl' />
      <div className='pointer-events-none absolute bottom-0 left-0 size-112 rounded-full bg-transparent blur-3xl' />
      <section className='absolute left-1/12 top-1/2 z-10 w-2/3 max-w-4xl -translate-y-1/2 translate-z-14 max-md:left-6 max-md:w-3/4 max-sm:left-4 max-sm:w-11/12'>
        <p className='text-xs font-black tracking-widest text-teal'>LET'S WORK TOGETHER</p>
        <h2 className='mt-3 text-7xl leading-none tracking-tighter text-white max-md:text-6xl xl:text-8xl 2xl:text-9xl'>Let's build<br /><em className='contact-outline not-italic text-transparent'>something great.</em></h2>
        <span className='mt-5 block max-w-2xl leading-relaxed text-white/75'>Open to ambitious products, collaborations, and interesting technical problems.</span>
      </section>
      <div className='absolute right-1/12 top-1/2 size-96 -translate-y-1/2 translate-z-15 max-md:-right-24 max-md:size-80 max-md:opacity-55 max-sm:-right-40 max-sm:opacity-30' aria-hidden='true'>
        <i className='absolute inset-0 rounded-full border border-teal/20' />
        <i className='absolute inset-12 rounded-full border border-blue/30' />
        <i className='absolute inset-24 rounded-full border border-dashed border-teal/20' />
        <b className='absolute inset-36 rounded-full border border-teal/20 bg-radial from-teal via-cyan to-blue shadow-2xl shadow-teal/30' />
      </div>
      <footer className='absolute inset-x-9 bottom-7 flex justify-between gap-4 text-xs text-white/42 max-md:inset-x-4 max-md:bottom-12 max-md:flex-wrap max-md:gap-1'>
        <span>(c) 2026 Made by Jared Turck.</span>
        <span>Built with React + TypeScript + Tailwind.</span>
      </footer>
    </div>
  )
}
