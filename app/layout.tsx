import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  preload: true,
})

const sans = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  preload: true,
})

export const metadata: Metadata = {
  title: 'DermaCare — Celeste Gayoso',
  description: 'Dermatocosmiatra en Posadas, Misiones. Tratamientos personalizados de piel, pestañas y cejas.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-background text-foreground">
        <Navbar />
        <main className="pt-[73px]">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
