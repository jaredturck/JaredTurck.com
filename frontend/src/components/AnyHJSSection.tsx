import use_anyhjs_carousel from '../hooks/UseAnyhjsCarousel'

import anyhjs_img1 from '../imgs/anyhjs_img1.png'
import anyhjs_img2 from '../imgs/anyhjs_img2.png'
import anyhjs_img3 from '../imgs/anyhjs_img3.png'
import anyhjs_img4 from '../imgs/anyhjs_img4.png'
import anyhjs_img5 from '../imgs/anyhjs_img5.png'
import anyhjs_img6 from '../imgs/anyhjs_img6.png'

export default function AnyHJSSection() {
  const { active_index, set_active_index } = use_anyhjs_carousel()
  const anyhjs_imgs = [anyhjs_img1, anyhjs_img2, anyhjs_img3, anyhjs_img4, anyhjs_img5, anyhjs_img6]

  return (
    <section id='anyhjs' className='w-full px-4 py-20'>
      <div className='mx-auto max-w-6xl rounded-ui border border-line/40 bg-gradient-to-b from-bg/60 via-surface/25 to-bg/60 backdrop-blur-xl'>
        <div className='grid gap-10 px-6 py-10 lg:grid-cols-2 lg:items-center'>
          <div className='flex flex-col gap-5'>
            <div className='inline-flex w-fit items-center gap-3 rounded-full border border-line/40 bg-surface/35 px-4 py-2 text-text backdrop-blur-xl'>
              <span className='text-xs font-extrabold tracking-widest text-anyhjs'>FEATURED PROJECT</span>
              <span aria-hidden='true' className='font-bold text-muted/70'>•</span>
              <span className='text-xs font-bold tracking-widest text-text/90'>ANYHJS</span>
            </div>

            <h2 className='m-0 text-4xl font-extrabold leading-[1.02] text-text sm:text-5xl'>AnyHJS</h2>

            <p className='m-0 max-w-xl text-base leading-relaxed text-muted sm:text-lg'>
              An AI-powered fashion marketplace concept: outfit inspiration into instantly shoppable looks across brands, with a premium editorial feel.
            </p>

            <div className='mt-2 flex flex-wrap gap-4'>
              <a href='https://anyhjs.co.uk/' target='_blank' rel='noreferrer' className='inline-flex items-center justify-center rounded-ui bg-anyhjs/90 hover:bg-anyhjs px-5 py-3 text-sm font-extrabold leading-none text-bg border border-line/30 transition-colors'>Visit site</a>
              <a href='https://github.com/jaredturck/AnyHJS' target='_blank' rel='noreferrer' className='inline-flex items-center justify-center rounded-ui border border-anyhjs/35 bg-surface/30 hover:bg-surface/40 px-5 py-3 text-sm font-extrabold leading-none text-text backdrop-blur-xl transition-colors'>GitHub</a>
            </div>
          </div>

          <div className='rounded-ui border border-line/40 bg-surface/20 backdrop-blur-xl overflow-hidden'>
            <div className='flex items-center justify-between border-b border-line/30 bg-surface/25 px-4 py-3'>
              <div className='flex items-center gap-2'>
                <span className='h-2.5 w-2.5 rounded-full bg-anyhjs/70' />
                <span className='h-2.5 w-2.5 rounded-full bg-muted/40' />
                <span className='h-2.5 w-2.5 rounded-full bg-muted/30' />
              </div>
              <div className='text-xs font-semibold tracking-wide text-muted'>anyhjs.co.uk</div>
              <div className='w-12' />
            </div>

            <div className='relative'>
              <img src={anyhjs_imgs[active_index]} alt='AnyHJS screenshot' className='h-80 w-full object-cover object-top transition-transform duration-700 group-hover:scale-105' />
              <div className='absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent' />
            </div>

            <div className='flex items-center gap-3 px-4 py-4'>
              <button type='button' onClick={() => set_active_index(0)} className={active_index === 0 ? 'h-10 w-14 rounded-ui border border-line/30 bg-anyhjs/10' : 'h-10 w-14 rounded-ui border border-line/30 bg-surface/35'} />
              <button type='button' onClick={() => set_active_index(1)} className={active_index === 1 ? 'h-10 w-14 rounded-ui border border-line/30 bg-anyhjs/10' : 'h-10 w-14 rounded-ui border border-line/30 bg-surface/35'} />
              <button type='button' onClick={() => set_active_index(2)} className={active_index === 2 ? 'h-10 w-14 rounded-ui border border-line/30 bg-anyhjs/10' : 'h-10 w-14 rounded-ui border border-line/30 bg-surface/35'} />
              <button type='button' onClick={() => set_active_index(3)} className={active_index === 3 ? 'h-10 w-14 rounded-ui border border-line/30 bg-anyhjs/10' : 'h-10 w-14 rounded-ui border border-line/30 bg-surface/35'} />
              <button type='button' onClick={() => set_active_index(4)} className={active_index === 4 ? 'h-10 w-14 rounded-ui border border-line/30 bg-anyhjs/10' : 'h-10 w-14 rounded-ui border border-line/30 bg-surface/35'} />
              <button type='button' onClick={() => set_active_index(5)} className={active_index === 5 ? 'h-10 w-14 rounded-ui border border-line/30 bg-anyhjs/10' : 'h-10 w-14 rounded-ui border border-line/30 bg-surface/35'} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
