import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import WhyUsSection from '@/components/sections/WhyUsSection'
import TestimonialSection from '@/components/sections/TestimonialSection'
import CtaSection from '@/components/sections/CtaSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <TestimonialSection />
      <CtaSection />
    </div>
  )
}
