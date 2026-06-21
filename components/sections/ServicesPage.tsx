import Button from '@/components/ui/Button'

const services = [
  {
    title: 'Tratamientos faciales personalizados',
    subtitle: 'Piel luminosa, hidratada y equilibrada',
    description:
      'Rituales diseñados para cada tipo de piel con productos suaves y resultados naturales. Incluye diagnóstico facial y recomendaciones post-tratamiento.',
    duration: '60 min — 90 min',
  },
  {
    title: 'Depilación con hilo y cera',
    subtitle: 'Acabado preciso y delicado',
    description:
      'Sesiones pensadas para el rostro y zonas sensibles, con técnica profesional que minimiza la irritación y deja la piel fresca.',
    duration: '30 min — 45 min',
  },
  {
    title: 'Diseño de cejas',
    subtitle: 'Marco perfecto para tu rostro',
    description:
      'Perfilado y modelado de cejas con observación de las facciones para lograr equilibrio y elegancia natural.',
    duration: '30 min',
  },
  {
    title: 'Lifting de pestañas',
    subtitle: 'Mirada definida sin extensiones',
    description:
      'Efecto levantado que abre la mirada, realza las pestañas naturales y aporta una apariencia descansada.',
    duration: '60 min',
  },
  {
    title: 'Tratamientos de renovación',
    subtitle: 'Reparación, brillo y suavidad',
    description:
      'Protocolos de exfoliación ligera y nutrición profunda, ideales para revitalizar la piel y restaurar su textura.',
    duration: '75 min',
  },
  {
    title: 'Asesoramiento y seguimiento',
    subtitle: 'Cuidado profesional continuo',
    description:
      'Recomendaciones de rutina y productos para mantener los resultados en casa con una experiencia personalizada.',
    duration: 'Consultoría + plan',
  },
]

export default function ServicesPage() {
  return (
    <section className="space-y-14">
      <div className="rounded-[2rem] border border-surface bg-surface/95 p-8 shadow-soft sm:p-10">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm uppercase tracking-[0.32em] text-muted">Servicios</p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Tratamientos que cuidan tu piel con calma y sofisticación.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
            Descubrí un servicio pensado para tu comodidad y bienestar. En cada sesión priorizamos una experiencia minimalista, cálida y realmente personalizada.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/agendar">Agendar cita</Button>
            <Button href="/contacto" variant="ghost">
              Consultar ubicación
            </Button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="rounded-[2rem] border border-surface bg-background p-8 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg">
            <div className="flex items-center justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-muted">{service.subtitle}</p>
                <h2 className="mt-4 text-2xl font-semibold leading-tight">{service.title}</h2>
              </div>
              <span className="rounded-2xl border border-surface bg-surface px-4 py-2 text-sm text-muted">
                {service.duration}
              </span>
            </div>
            <p className="mt-6 text-sm leading-7 text-muted">{service.description}</p>
          </article>
        ))}
      </div>

      <div className="rounded-[2rem] border border-surface bg-surface p-8 shadow-soft sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-muted">Atención exclusiva</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight">Cuidado atento en cada detalle</h2>
            <p className="mt-4 text-base leading-8 text-muted">
              Cada servicio se realiza en un espacio sereno y confortable, con protocolos que priorizan la calma y la salud de la piel.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-surface bg-background p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-muted">Valor diferencial</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-foreground">
              <li>• Ambiente cálido y minimalista</li>
              <li>• Productos seleccionados con criterio</li>
              <li>• Atención personalizada y cercana</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
