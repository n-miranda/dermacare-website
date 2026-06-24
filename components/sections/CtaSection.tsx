'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CtaSection() {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] border border-accent/20 bg-accent/5 p-12 text-center shadow-soft"
        >
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            ¿Lista para tu transformación? ✨
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-8 text-muted">
            Agendá tu cita hoy y viví la experiencia DermaCare: cálida, profesional y pensada para vos.
          </p>
          <Link
            href="/agendar"
            className="mt-8 inline-flex items-center gap-2 rounded-xl border border-accent bg-accent px-8 py-4 text-sm font-medium text-white transition hover:bg-accent/90"
          >
            Agendar ahora →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
