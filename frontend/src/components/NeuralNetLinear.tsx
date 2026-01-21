export default function NeuralNetLinearSection() {
  return (
    <section id='neuralnetlinear' className='relative w-full overflow-hidden px-4 py-20'>
      <div aria-hidden='true' className='absolute inset-0'>
        <div className='absolute inset-0 bg-gradient-to-b from-[#05070a] via-bg to-[#060a10]' />
        <div className='absolute inset-0 opacity-[0.06] [background:repeating-linear-gradient(180deg,rgba(255,255,255,0.10)_0px,rgba(255,255,255,0.10)_1px,transparent_2px,transparent_6px)]' />
        <div className='absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl' />
        <div className='absolute -bottom-40 right-0 h-[34rem] w-[34rem] rounded-full bg-accent-2/10 blur-3xl' />
      </div>

      <div className='relative mx-auto max-w-6xl rounded-ui border border-line/40 bg-gradient-to-b from-bg/65 via-surface/10 to-bg/65 backdrop-blur-xl'>
        <div className='grid gap-10 px-6 py-10 lg:grid-cols-2 lg:items-center'>
          <div className='flex flex-col gap-5'>
            <div className='inline-flex w-fit items-center gap-3 rounded-full border border-line/40 bg-surface/25 px-4 py-2 text-text backdrop-blur-xl'>
              <div className='grid h-6 w-6 place-items-center rounded-ui border border-line/30 bg-accent/10 text-[11px] font-extrabold text-accent'>NN</div>
              <span className='text-xs font-extrabold tracking-widest text-accent'>PROJECT</span>
              <span aria-hidden='true' className='font-bold text-muted/70'>•</span>
              <span className='text-xs font-bold tracking-widest text-text/90'>NEURAL NET LINEAR</span>
            </div>

            <h2 className='m-0 text-4xl font-extrabold leading-[1.02] text-text sm:text-5xl'>Neural Net Linear</h2>

            <p className='m-0 max-w-xl text-base leading-relaxed text-muted sm:text-lg'>
              A neural network built from scratch in C: linear layers, activations, loss functions, and SGD — implemented at the maths level with backprop.
            </p>

            <div className='mt-1 flex flex-wrap gap-3'>
              <span className='rounded-full border border-line/40 bg-surface/25 px-3 py-2 text-sm text-text backdrop-blur-lg'>100% C</span>
              <span className='rounded-full border border-line/40 bg-surface/25 px-3 py-2 text-sm text-text backdrop-blur-lg'>No deps</span>
              <span className='rounded-full border border-line/40 bg-surface/25 px-3 py-2 text-sm text-text backdrop-blur-lg'>Backprop</span>
              <span className='rounded-full border border-line/40 bg-surface/25 px-3 py-2 text-sm text-text backdrop-blur-lg'>SGD optimizer</span>
              <span className='rounded-full border border-line/40 bg-surface/25 px-3 py-2 text-sm text-text backdrop-blur-lg'>Softmax grads</span>
              <span className='rounded-full border border-line/40 bg-surface/25 px-3 py-2 text-sm text-text backdrop-blur-lg'>ReLU grads</span>
              <span className='rounded-full border border-line/40 bg-surface/25 px-3 py-2 text-sm text-text backdrop-blur-lg'>MSE / BCE / CCE</span>
              <span className='rounded-full border border-line/40 bg-surface/25 px-3 py-2 text-sm text-text backdrop-blur-lg'>ReLU • Sigmoid • GELU • Softmax</span>
            </div>

            <div className='mt-2 flex flex-wrap gap-4'>
              <a href='https://github.com/jaredturck/neural-net-linear' target='_blank' rel='noreferrer' className='inline-flex items-center justify-center rounded-ui bg-accent/90 hover:bg-accent px-5 py-3 text-sm font-extrabold leading-none text-bg border border-line/30 transition-colors'>GitHub</a>
              <span className='inline-flex items-center gap-2 text-sm text-muted'>
                <span className='h-2 w-2 rounded-full bg-accent/80' />
                Neural net in C
              </span>
            </div>
          </div>

          <div className='relative'>
            <div aria-hidden='true' className='absolute -inset-6'>
              <div className='absolute top-6 left-6 h-24 w-24 rounded-ui bg-accent/10 blur-2xl' />
              <div className='absolute -bottom-6 right-6 h-28 w-28 rounded-ui bg-accent-2/10 blur-2xl' />
            </div>

            <div className='relative overflow-hidden rounded-ui border border-line/40 bg-[#070a0f]/70 backdrop-blur-xl shadow-2xl'>
              <div className='flex items-center justify-between border-b border-line/30 bg-gradient-to-b from-surface/25 to-transparent px-4 py-3'>
                <div className='flex items-center gap-2'>
                  <span className='h-2.5 w-2.5 rounded-full bg-accent/70' />
                  <span className='h-2.5 w-2.5 rounded-full bg-accent-2/60' />
                  <span className='h-2.5 w-2.5 rounded-full bg-muted/35' />
                </div>
                <div className='text-xs font-semibold tracking-wide text-muted'>terminal — training run</div>
                <div className='w-12' />
              </div>

              <div className='relative px-5 py-5'>
                <div aria-hidden='true' className='pointer-events-none absolute inset-0 opacity-[0.22]'>
                  <div className='absolute left-0 right-0 top-10 h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent' />
                  <div className='absolute left-0 top-14 h-40 w-full [background:linear-gradient(90deg,transparent,rgba(0,0,0,0)_30%,rgba(0,0,0,0)_70%,transparent)]' />
                </div>

                <div aria-hidden='true' className='pointer-events-none absolute inset-0'>
                  <div className='absolute left-0 top-10 h-44 w-full opacity-[0.25]'>
                    <div className='absolute left-0 top-0 h-full w-full [background-image:linear-gradient(to_right,transparent,transparent)]' />
                    <div className='absolute left-6 top-6 h-[2px] w-[120%] -rotate-[8deg] bg-gradient-to-r from-accent/0 via-accent/35 to-accent/0 animate-[pulse_2.4s_ease-in-out_infinite]' />
                    <div className='absolute left-10 top-20 h-[2px] w-[120%] -rotate-[14deg] bg-gradient-to-r from-accent/0 via-accent/18 to-accent/0' />
                    <div className='absolute left-14 top-32 h-[2px] w-[120%] -rotate-[20deg] bg-gradient-to-r from-accent/0 via-accent/12 to-accent/0' />
                  </div>
                </div>

                <div className='relative space-y-1 text-[12px] leading-relaxed text-text/90 font-mono'>
                  <p><span className='text-muted'>(env) [jared@Jared-PC neural-net-linear]$</span> python main.py</p>
                  <p><span className='text-accent'>[+]</span> Training started</p>
                  <p>Epoch 1, loss <span className='text-accent-2'>5.432217</span></p>
                  <p>Epoch 101, loss <span className='text-accent-2'>0.352506</span></p>
                  <p>Epoch 201, loss <span className='text-accent-2'>0.165082</span></p>
                  <p>Epoch 301, loss <span className='text-accent-2'>0.099537</span></p>
                  <p>Epoch 401, loss <span className='text-accent-2'>0.071228</span></p>
                  <p>Training complete at epoch 460, loss <span className='text-accent-2'>0.049664</span></p>
                  <div className='h-2' />
                  <p>Enter animal: <span className='text-text'>cat</span></p>
                  <p><span className='text-accent'>mammal</span></p>
                  <p>Enter animal: <span className='text-text'>dog</span></p>
                  <p><span className='text-accent'>mammal</span></p>
                  <p>Enter animal: <span className='text-text'>carp</span></p>
                  <p><span className='text-accent'>fish</span></p>
                  <p>Enter animal: <span className='text-text'>▍</span></p>
                </div>

              </div>

              <div className='border-t border-line/30 bg-surface/10 px-5 py-3'>
                <div className='flex flex-wrap items-center justify-between gap-3'>
                  <div className='text-xs font-semibold text-muted'>loss → drops as training converges</div>
                  <div className='inline-flex items-center gap-2 text-xs text-muted'>
                    <span className='h-2 w-2 rounded-full bg-accent/80' />
                    terminal stream (decorative)
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-4 grid gap-3 sm:grid-cols-3'>
              <div className='rounded-ui border border-line/30 bg-surface/15 px-4 py-3 backdrop-blur-xl'>
                <div className='text-xs font-extrabold tracking-widest text-muted'>LAYER</div>
                <div className='mt-1 text-sm font-semibold text-text'>Linear</div>
              </div>
              <div className='rounded-ui border border-line/30 bg-surface/15 px-4 py-3 backdrop-blur-xl'>
                <div className='text-xs font-extrabold tracking-widest text-muted'>OPTIMIZER</div>
                <div className='mt-1 text-sm font-semibold text-text'>SGD</div>
              </div>
              <div className='rounded-ui border border-line/30 bg-surface/15 px-4 py-3 backdrop-blur-xl'>
                <div className='text-xs font-extrabold tracking-widest text-muted'>GOAL</div>
                <div className='mt-1 text-sm font-semibold text-text'>From-scratch NN</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
