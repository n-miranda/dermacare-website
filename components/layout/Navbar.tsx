'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/sobre-mi', label: 'Sobre mí' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-shadow duration-300 ${
          scrolled ? 'bg-background/95 shadow-soft backdrop-blur-sm' : 'bg-background/80 backdrop-blur-sm'
        }`}
      >
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-surface bg-surface">
              <Image src="/images/logo.png" alt="Logo DermaCare" fill sizes="44px" />
            </div>
            <span className="font-serif text-lg font-semibold">DermaCare</span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/agendar"
              className="rounded-xl border border-accent bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-accent/90"
            >
              ✨ Agendar cita
            </Link>
          </nav>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-surface bg-surface text-foreground transition hover:bg-surface/80 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              className="fixed inset-y-0 right-0 z-50 flex w-72 flex-col gap-2 bg-background px-6 py-8 shadow-xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-serif text-lg font-semibold">DermaCare</span>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-surface bg-surface"
                >
                  <X size={18} />
                </button>
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-foreground transition hover:bg-surface"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/agendar"
                onClick={() => setOpen(false)}
                className="mt-4 rounded-xl border border-accent bg-accent px-4 py-3 text-center text-sm font-medium text-white transition hover:bg-accent/90"
              >
                ✨ Agendar cita
              </Link>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
