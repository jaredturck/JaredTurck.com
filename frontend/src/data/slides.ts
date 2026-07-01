import hero_image from '../imgs/hero_section.png'
import anyhjs_image from '../imgs/anyhjs_img1.png'
import titus_image from '../imgs/titus_ai_logo.png'
import fisher_image from '../imgs/fisherai_image1.png'
import tkdraw_image from '../imgs/tkdraw_image1.png'
import spelling_image from '../imgs/spelling_correction_qwen.png'
import geoidpm_image from '../imgs/geoidpm_screenshot.png'
import ekhaya_image from '../imgs/ekhaya_screenshot.png'

export type SlideLink = {
  label: string
  href?: string
  action?: 'projects'
  primary?: boolean
}

export type PortfolioSlide = {
  id: string
  type: 'hero' | 'project'
  title: string
  eyebrow: string
  description: string
  image: string
  image_position: string
  image_scale: number
  tags: string[]
  links: SlideLink[]
  accent: string
}

export const slides: PortfolioSlide[] = [
  {
    id: 'intro',
    type: 'hero',
    title: 'Jared Turck',
    eyebrow: 'AI portfolio · Full stack + ML',
    description: 'Senior full stack developer focused on AI-powered products, scalable backends, and clean, modern UI.',
    image: hero_image,
    image_position: 'center center',
    image_scale: 1.03,
    tags: ['Python', 'React', 'TypeScript', 'Django', 'Django REST', 'PyTorch', 'NumPy', 'Hugging Face', 'PostgreSQL', 'Docker', 'Linux'],
    links: [
      { label: 'View projects', action: 'projects', primary: true },
      { label: 'Contact', href: 'https://www.linkedin.com/in/jared-turck-655855162/' },
    ],
    accent: '#19d4ff',
  },
  {
    id: 'anyhjs',
    type: 'project',
    title: 'AnyHJS',
    eyebrow: 'AI fashion marketplace',
    description: 'Outfit inspiration becomes instantly shoppable looks across brands, wrapped in a premium editorial experience.',
    image: anyhjs_image,
    image_position: 'center top',
    image_scale: 1.02,
    tags: ['React', 'TypeScript', 'AI/ML'],
    links: [
      { label: 'Visit site', href: 'https://anyhjs.co.uk/', primary: true },
      { label: 'GitHub', href: 'https://github.com/jaredturck/AnyHJS' },
    ],
    accent: '#c7ff1a',
  },
  {
    id: 'titus-ai',
    type: 'project',
    title: 'Titus AI',
    eyebrow: 'Language model',
    description: 'A GPT-style chatbot and decoder-only model focused on token prediction, training, and clean inference flows.',
    image: titus_image,
    image_position: 'center center',
    image_scale: 1.08,
    tags: ['Python', 'PyTorch', 'NLP'],
    links: [
      { label: 'GitHub', href: 'https://github.com/jaredturck/TitusAI', primary: true },
    ],
    accent: '#19d4ff',
  },
  {
    id: 'fisher-ai',
    type: 'project',
    title: 'Fisher AI',
    eyebrow: 'Neural chess engine',
    description: 'A desktop chess experience combining a neural-network player, evaluation runs, and local play.',
    image: fisher_image,
    image_position: 'center center',
    image_scale: 1.03,
    tags: ['Python', 'Pygame', 'AI/ML'],
    links: [
      { label: 'GitHub', href: 'https://github.com/jaredturck', primary: true },
    ],
    accent: '#9b7bff',
  },
  {
    id: 'tkdraw',
    type: 'project',
    title: 'TkDraw',
    eyebrow: 'Developer tool',
    description: 'A lightweight vector editor built from scratch with selection tools, pan and zoom, undo, and export.',
    image: tkdraw_image,
    image_position: 'center center',
    image_scale: 1.04,
    tags: ['Python', 'Tkinter', 'Vector'],
    links: [
      { label: 'GitHub', href: 'https://github.com/jaredturck', primary: true },
    ],
    accent: '#54e69f',
  },
  {
    id: 'spelling-correction',
    type: 'project',
    title: 'Spelling Correction',
    eyebrow: 'Language tooling',
    description: 'An AI-assisted spelling correction experiment designed around practical text cleanup and model evaluation.',
    image: spelling_image,
    image_position: 'center center',
    image_scale: 1.05,
    tags: ['Python', 'Qwen', 'NLP'],
    links: [
      { label: 'GitHub', href: 'https://github.com/jaredturck', primary: true },
    ],
    accent: '#ff72c7',
  },
  {
    id: 'geoidpm',
    type: 'project',
    title: 'GeoidPM',
    eyebrow: 'Desktop utility',
    description: 'A focused geoid and coordinate utility with a clean workflow for technical calculations.',
    image: geoidpm_image,
    image_position: 'center top',
    image_scale: 1.02,
    tags: ['Python', 'Desktop', 'Utilities'],
    links: [
      { label: 'GitHub', href: 'https://github.com/jaredturck', primary: true },
    ],
    accent: '#ffbd59',
  },
  {
    id: 'ekhaya',
    type: 'project',
    title: 'Ekhaya',
    eyebrow: 'Web platform',
    description: 'A polished product interface built around strong visual hierarchy, responsive UI, and purposeful motion.',
    image: ekhaya_image,
    image_position: 'center top',
    image_scale: 1.02,
    tags: ['React', 'UI/UX', 'Frontend'],
    links: [
      { label: 'GitHub', href: 'https://github.com/jaredturck', primary: true },
    ],
    accent: '#5d8dff',
  },
]
