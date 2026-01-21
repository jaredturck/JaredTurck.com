import Navbar from './Navbar'
import HeroSection from './HeroSection'
import AnyHJSSection from './AnyHJSSection'
import TitusAISection from './TitusAISection'
import JaredCalcSection from './JaredCalcSection'

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AnyHJSSection />
      <TitusAISection />
      <JaredCalcSection />
      <p className='px-4 pt-6'>homepage for now</p>
    </div>
  )
}
