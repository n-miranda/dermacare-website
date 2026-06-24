import Image from 'next/image'
import Link from 'next/link'

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
              <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-xl border border-surface bg-surface text-muted transition hover:text-foreground">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-xl border border-surface bg-surface text-muted transition hover:text-foreground">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
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
