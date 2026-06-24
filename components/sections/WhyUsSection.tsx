'use client'

import { motion } from 'framer-motion'

const points = [
  { emoji: '🤝', title: 'Atención personalizada', desc: 'Cada clienta es única. Escuchamos tus necesidades y diseñamos el tratamiento ideal para vos.' },
  { emoji: '🌿', title: 'Productos seleccionados', desc: 'Usamos productos profesionales elegidos con criterio, seguros para todo tipo de piel.' },
  { emoji: '🏡', title: 'Espacio cálido y privado', desc: 'Un ambiente sereno y confortable en el corazón de Posadas, pensado para que te relajes.' },
]

export default function WhyUsSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-muted">¿Por qué elegirnos?</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">Lo que nos hace diferentes 💛</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="rounded-[2rem] border border-surface bg-surface p-8 shadow-soft"
            >
              <span className="text-4xl">{p.emoji}</span>
              <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
