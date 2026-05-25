import AartiSection from '../sections/AartiSection'
import ExperienceSection from '../sections/ExperienceSection'
import Footer from '../sections/Footer'
import GallerySection from '../sections/GallerySection'
import HeroSection from '../sections/HeroSection'
import PlanVisitSection from '../sections/PlanVisitSection'
import ReviewSection from '../sections/ReviewSection'
import TraditionsSection from '../sections/TraditionsSection'

function HomePage() {
  return (
    <main className="min-h-screen bg-[#fbf3e8] text-[#211815]">
      <HeroSection />
      <ExperienceSection />
      <TraditionsSection />
      <ReviewSection />
      <AartiSection />
      <PlanVisitSection />
      <GallerySection />
      <Footer />
    </main>
  )
}

export default HomePage
