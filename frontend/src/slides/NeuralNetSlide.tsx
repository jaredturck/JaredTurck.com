import type { SlideProps } from './SlideShared'
import { ActionLink, ProjectBadge } from './SlideShared'

const layers = [
  { label: 'INPUT', nodes: 4 },
  { label: 'LINEAR 01', nodes: 5 },
  { label: 'ReLU', nodes: 5 },
  { label: 'OUTPUT', nodes: 3 },
]

export default function NeuralNetSlide({ active }: SlideProps) {
  return (
    <div className={`slide-canvas neural-slide ${active ? 'is-content-active' : ''}`}>
      <div className='neural-scanline' />
      <section className='neural-copy'>
        <ProjectBadge mark='NN' label='NEURAL NET LINEAR' accent='#43efc2' />
        <h2>Neural Net Linear</h2>
        <p>A neural network built from scratch in C: linear layers, activations, loss functions, SGD, and backprop implemented at the maths level.</p>
        <div className='neural-tags'><span>100% C</span><span>No dependencies</span><span>Backprop</span><span>SGD optimizer</span><span>Softmax grads</span><span>MSE / BCE / CCE</span></div>
        <div className='neural-terminal'><span>$ ./train --epochs 200</span><b>loss 0.0182 · accuracy 98.4%</b></div>
        <ActionLink href='https://github.com/jaredturck/neural-net-linear' className='neural-link'>Open repository</ActionLink>
      </section>
      <section className='neural-lab'>
        <header><span>MODEL GRAPH / LIVE</span><b>BACKPROP ENABLED</b></header>
        <div className='neural-network'>
          {layers.map((layer, layer_index) => (
            <div className='neural-layer' key={layer.label}>
              <span>{layer.label}</span>
              <div>{Array.from({ length: layer.nodes }).map((_, node_index) => <i key={node_index} style={{ '--node-delay': `${(layer_index * 5 + node_index) * 70}ms` } as React.CSSProperties} />)}</div>
            </div>
          ))}
          <svg viewBox='0 0 900 390' aria-hidden='true'>
            <path d='M120 80 330 55M120 80 330 130M120 160 330 55M120 160 330 205M120 240 330 130M120 320 330 280M350 55 565 80M350 130 565 155M350 205 565 230M350 280 565 305M585 80 800 110M585 155 800 195M585 230 800 280M585 305 800 195' />
          </svg>
        </div>
        <div className='neural-metrics'><article><span>ACTIVATIONS</span><b>ReLU · Sigmoid · GELU</b></article><article><span>OPTIMIZER</span><b>Stochastic gradient descent</b></article><article><span>MEMORY</span><b>Manual allocation</b></article></div>
      </section>
    </div>
  )
}
