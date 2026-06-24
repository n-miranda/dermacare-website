'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="flex min-h-[calc(100vh-73px)] flex-col items-center justify-center bg-background px-4 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="flex flex-col items-center gap-6"
      >
        <div className="relative h-28 w-28 overflow-hidden rounded-[2rem] border border-surface bg-surface shadow-soft">
          <Image src="/images/logo.png" alt="Logo DermaCare" fill sizes="112px" priority />
        </div>

        <span className="rounded-full border border-surface bg-surface px-4 py-1.5 text-xs uppercase tracking-[0.28em] text-muted">
          Dermatocosmiatría & Estética · Posadas
        </span>

        <h1 className="max-w-2xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          Belleza natural para pieles luminosas ✨
        </h1>

        <p className="max-w-xl text-base leading-8 text-muted sm:text-lg">
          Tratamientos personalizados de piel, pestañas y cejas con un enfoque cálido,
          minimalista y profesional. Cada sesión es pensada para vos.
        </p>

        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/servicios"
            className="rounded-xl border border-surface bg-surface px-7 py-3.5 text-sm font-medium text-foreground transition hover:bg-surface/80"
          >
            Ver servicios
          </Link>
          <Link
            href="/agendar"
            className="rounded-xl border border-accent bg-accent px-7 py-3.5 text-sm font-medium text-white transition hover:bg-accent/90"
          >
            ✨ Reservar turno
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
