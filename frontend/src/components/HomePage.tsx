import Navbar from './Navbar'
import HeroSection from './HeroSection'
import AnyHJSSection from './AnyHJSSection'

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AnyHJSSection />
      <p className='px-4 pt-6'>homepage for now</p>
    </div>
  )
}
