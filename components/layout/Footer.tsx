import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Facebook } from 'lucide-react'

const links = [
  { href: '/servicios', label: 'Servicios' },
  { href: '/sobre-mi', label: 'Sobre mí' },
  { href: '/contacto', label: 'Contacto' },
  { href: '/agendar', label: 'Agendar' },
]

export default function Footer() {
  return (
    <footer className="border-t border-surface bg-background">
      <div className="container py-12">
        <div className="grid gap-10 sm:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-2xl border border-surface bg-surface">
                <Image src="/images/logo.png" alt="Logo DermaCare" fill sizes="40px" />
              </div>
              <span className="font-serif text-base font-semibold">DermaCare</span>
            </Link>
            <p className="text-sm leading-7 text-muted">
              Dermatocosmiatría & estética en Posadas, Misiones.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-muted">Páginas</p>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted transition hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-muted">Redes</p>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-surface bg-surface text-muted transition hover:text-foreground"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-surface bg-surface text-muted transition hover:text-foreground"
              >
                <Facebook size={16} />
              </a>
            </div>
            <p className="mt-4 text-sm text-muted">Posadas, Misiones, Argentina</p>
          </div>
        </div>

        <div className="mt-10 border-t border-surface pt-6 text-center">
          <p className="text-xs text-muted">© {new Date().getFullYear()} DermaCare — Celeste Gayoso. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
