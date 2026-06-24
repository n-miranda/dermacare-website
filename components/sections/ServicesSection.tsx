'use client'

import { motion } from 'framer-motion'
import { Sparkles, Eye, Leaf, Smile, Star } from 'lucide-react'

const services = [
  { icon: Smile, emoji: '💆', title: 'Cosmetología facial', desc: 'Protocolos suaves para hidratar, equilibrar y potenciar el brillo natural de tu piel.' },
  { icon: Eye, emoji: '👁️', title: 'Pestañas', desc: 'Lifting y extensiones que definen tu mirada de forma natural y elegante.' },
  { icon: Leaf, emoji: '🌿', title: 'Depilación', desc: 'Acabados precisos en rostro y cuerpo con técnica profesional y confort.' },
  { icon: Star, emoji: '🤍', title: 'Diseño de cejas', desc: 'Perfilado y modelado que enmarca tu rostro con armonía y elegancia.' },
  { icon: Sparkles, emoji: '✨', title: 'Tratamientos personalizados', desc: 'Protocolos únicos adaptados a tu tipo de piel, con resultados naturales y duraderos.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' } }),
}

export default function ServicesSection() {
  return (
    <section className="bg-surface/60 py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-muted">Nuestros servicios</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">¿Qué hacemos? 🌸</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-muted">
            Una selección de tratamientos íntimos y profesionales, pensados para cada etapa del cuidado de tu piel.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              className="group rounded-[2rem] border border-surface bg-background p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-3xl">{s.emoji}</span>
              <h3 className="mt-4 text-xl font-semibold leading-tight">{s.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{s.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
