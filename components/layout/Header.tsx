import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { href: '/servicios', label: 'Servicios' },
  { href: '/sobre-mi', label: 'Sobre mí' },
  { href: '/contacto', label: 'Contacto' },
  { href: '/agendar', label: 'Agendar' },
]

export default function Header() {
  return (
    <header className="border-b border-surface/80 bg-background/80 backdrop-blur-sm">
      <div className="container flex items-center justify-between py-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-3xl border border-surface bg-surface">
            <Image src="/images/logo.png" alt="Logo DermaCare" fill sizes="48px" />
          </div>
          <p className="font-serif text-lg font-semibold">DermaCare</p>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-muted transition hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
