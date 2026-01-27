import Navbar from './Navbar'
import HeroSection from './HeroSection'
import AnyHJSSection from './AnyHJSSection'
import TitusAISection from './TitusAISection'
import JaredCalcSection from './JaredCalcSection'
import TkDrawSection from './TKDraw'
import FisherAISection from './FisherAI'
import NeuralNetLinearSection from './NeuralNetLinear'
import EnJaTranslatorSection from './EnJaTranslator'
import SpellingCorrectionSection from './SpellingCorrection'
import GeoidPMSection from './GeoidPM'
import EkhayaSection from './EkhayaSection'
import Footer from './Footer'

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AnyHJSSection />
      <TitusAISection />
      <JaredCalcSection />
      <TkDrawSection />
      <FisherAISection />
      <NeuralNetLinearSection />
      <EnJaTranslatorSection />
      <SpellingCorrectionSection />
      <GeoidPMSection />
      <EkhayaSection />
      <Footer />
    </div>
  )
}
