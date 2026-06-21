import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import '../styles/globals.css'

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
  title: 'DermaCare',
  description: 'Dermatocosmiatra en Posadas. Tratamientos de piel, pestañas y cejas con estilo cálido y minimalista.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
