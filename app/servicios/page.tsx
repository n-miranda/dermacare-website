import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ServicesPage from '@/components/sections/ServicesPage'

export default function Servicios() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container py-14 sm:py-16 lg:py-20">
        <ServicesPage />
      </main>
      <Footer />
    </div>
  )
}
