import type { ComponentType } from 'react'
import type { SlideProps } from './SlideShared'
import HeroSlide from './HeroSlide'
import AnyHjsSlide from './AnyHjsSlide'
import TitusAiSlide from './TitusAiSlide'
import JaredCalcSlide from './JaredCalcSlide'
import TkDrawSlide from './TkDrawSlide'
import FisherAiSlide from './FisherAiSlide'
import NeuralNetSlide from './NeuralNetSlide'
import EnJaSlide from './EnJaSlide'
import SpellingSlide from './SpellingSlide'
import GeoidPmSlide from './GeoidPmSlide'
import EkhayaSlide from './EkhayaSlide'
import ExpertiseSlide from './ExpertiseSlide'
import ProcessSlide from './ProcessSlide'
import TechnologiesSlide from './TechnologiesSlide'
import ContactSlide from './ContactSlide'

export type SlideDefinition = {
  id: string
  title: string
  accent: string
  accent_2: string
  class_name: string
  component: ComponentType<SlideProps>
}

export const slides: SlideDefinition[] = [
  { id: 'intro', title: 'Jared Turck', accent: '#18d5ff', accent_2: '#37dbc7', class_name: 'theme-hero', component: HeroSlide },
  { id: 'anyhjs', title: 'AnyHJS', accent: '#c7ff1a', accent_2: '#edf9b0', class_name: 'theme-anyhjs', component: AnyHjsSlide },
  { id: 'titus-ai', title: 'Titus AI', accent: '#20d3ff', accent_2: '#007a98', class_name: 'theme-titus', component: TitusAiSlide },
  { id: 'jaredcalc', title: 'JaredCalc', accent: '#d8bd78', accent_2: '#168497', class_name: 'theme-calculator', component: JaredCalcSlide },
  { id: 'tkdraw', title: 'TkDraw', accent: '#b7ff4a', accent_2: '#f6d36b', class_name: 'theme-tkdraw', component: TkDrawSlide },
  { id: 'fisher-ai', title: 'Fisher AI', accent: '#d6b15e', accent_2: '#10cbe6', class_name: 'theme-fisher', component: FisherAiSlide },
  { id: 'neural-linear', title: 'Neural Net Linear', accent: '#43efc2', accent_2: '#19a9ff', class_name: 'theme-neural', component: NeuralNetSlide },
  { id: 'enja', title: 'English to Japanese', accent: '#ff5b62', accent_2: '#21d5ed', class_name: 'theme-enja', component: EnJaSlide },
  { id: 'spelling', title: 'Spelling Correction AI', accent: '#ffd75c', accent_2: '#63aaff', class_name: 'theme-spelling', component: SpellingSlide },
  { id: 'geoidpm', title: 'Geoid Project Management', accent: '#27d5d0', accent_2: '#0c6f83', class_name: 'theme-geoid', component: GeoidPmSlide },
  { id: 'ekhaya', title: 'Ekhaya', accent: '#54d784', accent_2: '#4d8cff', class_name: 'theme-ekhaya', component: EkhayaSlide },
  { id: 'expertise', title: 'Core expertise', accent: '#24d7ff', accent_2: '#8c73ff', class_name: 'theme-expertise', component: ExpertiseSlide },
  { id: 'process', title: 'How I work', accent: '#23dbd2', accent_2: '#7585ff', class_name: 'theme-process', component: ProcessSlide },
  { id: 'technologies', title: 'Technologies I use', accent: '#1fdcff', accent_2: '#8c6fff', class_name: 'theme-technologies', component: TechnologiesSlide },
  { id: 'contact', title: 'Let’s build something great', accent: '#52e4d2', accent_2: '#697dff', class_name: 'theme-contact', component: ContactSlide },
]
