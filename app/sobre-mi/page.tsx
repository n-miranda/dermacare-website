import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AboutPage from '@/components/sections/AboutPage'

export default function SobreMi() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container py-14 sm:py-16 lg:py-20">
        <AboutPage />
      </main>
      <Footer />
    </div>
  )
}
