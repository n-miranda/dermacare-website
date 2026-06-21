import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container py-14 sm:py-16 lg:py-20">
        <HeroSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  )
}
