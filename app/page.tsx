import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ServicesOverview from "@/components/services-overview"
import Testimonials from "@/components/testimonials"
import CTASection from "@/components/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesOverview />
      <Testimonials />
      <CTASection />
    </main>
  )
}
