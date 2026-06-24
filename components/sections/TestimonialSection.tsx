'use client'

import { motion } from 'framer-motion'

export default function TestimonialSection() {
  return (
    <section className="bg-surface/60 py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl rounded-[2rem] border border-surface bg-background p-10 text-center shadow-soft"
        >
          <span className="text-4xl">🌸</span>
          <blockquote className="mt-6 font-serif text-2xl font-medium leading-relaxed text-foreground sm:text-3xl">
            "Me fui sintiéndome completamente renovada. El trato de Celeste es único."
          </blockquote>
          <p className="mt-6 text-sm text-muted">— Clienta satisfecha, Posadas</p>
        </motion.div>
      </div>
    </section>
  )
}
