import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ContactPage from '@/components/sections/ContactPage'

export default function Contacto() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container py-14 sm:py-16 lg:py-20">
        <ContactPage />
      </main>
      <Footer />
    </div>
  )
}
