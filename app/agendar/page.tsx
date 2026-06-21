import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BookingPage from '@/components/sections/BookingPage'

export default function Agendar() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container py-14 sm:py-16 lg:py-20">
        <BookingPage />
      </main>
      <Footer />
    </div>
  )
}
