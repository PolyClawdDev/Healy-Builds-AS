import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import ServicesSection from '@/components/home/ServicesSection'
import ProjectsGallery from '@/components/home/ProjectsGallery'
import Testimonials from '@/components/home/Testimonials'
import CTASection from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesSection />
      <ProjectsGallery />
      <Testimonials />
      <CTASection />
    </>
  )
}
