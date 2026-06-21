import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div className="rounded-[2rem] border border-surface bg-surface/95 p-8 shadow-soft sm:p-10">
        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-[2rem] border border-surface bg-background">
          <Image src="/images/logo.png" alt="Logo DermaCare" width={90} height={90} />
        </div>
        <span className="text-sm uppercase tracking-[0.32em] text-muted">Dermatocosmiatría & estética</span>
        <h1 className="mt-6 max-w-xl text-4xl font-semibold leading-tight tracking-[0.01em] sm:text-5xl">
          Belleza natural para pieles luminosas y cejas perfectas.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
          Tratamientos personalizados de piel, pestañas y cejas con un enfoque cálido, minimalista y profesional.
          Cada consulta es diseñada para resaltar tu belleza auténtica.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="/agendar">Agendar cita</Button>
          <Button href="/contacto" variant="ghost">
            Contacto
          </Button>
        </div>
      </div>
      <div className="rounded-[2rem] border border-surface bg-surface/95 p-8 shadow-soft sm:p-10">
        <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-surface bg-background/70 px-4 py-2 text-sm text-muted">
          Cuidado de piel en Posadas • Atención personalizada
        </div>
        <div className="space-y-6">
          <p className="text-lg leading-8 text-foreground">
            Un espacio sereno y acogedor para tus tratamientos faciales y de cejas. El diseño del sitio refleja una experiencia cálida, con mucha claridad visual y aire para que cada servicio respire.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-surface bg-background p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-muted">Servicio destacado</p>
              <h2 className="mt-3 text-xl font-semibold">Lifting de pestañas</h2>
              <p className="mt-2 text-sm text-muted">Definición natural y efecto levantado en solo una sesión.</p>
            </div>
            <div className="rounded-3xl border border-surface bg-background p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-muted">Servicio destacado</p>
              <h2 className="mt-3 text-xl font-semibold">Diseño de cejas</h2>
              <p className="mt-2 text-sm text-muted">Cejas armoniosas que enmarcan tu rostro con elegancia.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
