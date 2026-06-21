const services = [
  {
    title: 'Tratamientos faciales personalizados',
    description: 'Protocolos suaves y efectivos para hidratar, equilibrar y potenciar el brillo natural de la piel.',
  },
  {
    title: 'Depilación con hilo y cera',
    description: 'Acabados precisos y delicados en rostro y cuerpo, con una experiencia cómoda y profesional.',
  },
  {
    title: 'Cejas y pestañas premium',
    description: 'Desde diseño de cejas hasta lifting de pestañas, cada servicio es preparado según tu estilo.',
  },
]

export default function ServicesSection() {
  return (
    <section className="mt-20 space-y-10">
      <div className="max-w-2xl space-y-3">
        <p className="text-sm uppercase tracking-[0.32em] text-muted">Servicios destacados</p>
        <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">Rituales de belleza pensados para tu piel</h2>
        <p className="text-base leading-8 text-muted">
          Una selección de tratamientos íntimos y profesionales, con una estética suave y una propuesta clara para cada etapa del cuidado facial.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="rounded-[2rem] border border-surface bg-surface p-6 shadow-soft">
            <p className="text-sm uppercase tracking-[0.28em] text-muted">Servicio</p>
            <h3 className="mt-4 text-2xl font-semibold leading-tight">{service.title}</h3>
            <p className="mt-4 text-sm leading-7 text-muted">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
