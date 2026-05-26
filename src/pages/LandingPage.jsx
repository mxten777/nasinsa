import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import MobileCtaBar from '../components/ui/MobileCtaBar'
import HeroSection from '../components/sections/HeroSection'
import TrustMetrics from '../components/sections/TrustMetrics'
import ServicesSection from '../components/sections/ServicesSection'
import TeamSection from '../components/sections/TeamSection'
import ProcessSection from '../components/sections/ProcessSection'
import CasesSection from '../components/sections/CasesSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import ContactSection from '../components/sections/ContactSection'
import MapSection from '../components/sections/MapSection'

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrustMetrics />
        <ServicesSection />
        <TeamSection />
        <ProcessSection />
        <CasesSection />
        <TestimonialsSection />
        <ContactSection />
        <MapSection />
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  )
}
