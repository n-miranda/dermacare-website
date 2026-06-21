import Button from '@/components/ui/Button'

const steps = [
  {
    title: 'Elegí el servicio',
    description: 'Seleccioná el tratamiento que más se adapte a lo que estás buscando.',
  },
  {
    title: 'Elegí fecha y horario',
    description: 'Seleccioná el día y la franja horaria que mejor te quede.',
  },
  {
    title: 'Confirmá tu cita',
    description: 'Recibirás la confirmación por WhatsApp para coordinar los detalles.',
  },
]

export default function BookingPage() {
  return (
    <section className="space-y-14">
      <div className="rounded-[2rem] border border-surface bg-surface/95 p-8 shadow-soft sm:p-10">
        <div className="max-w-2xl space-y-6">
          <p className="text-sm uppercase tracking-[0.32em] text-muted">Agendar cita</p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">Reservá tu próximo tratamiento.</h1>
          <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
            Muy pronto vas a poder agendar tu cita directamente desde acá. Por ahora, coordinemos por WhatsApp.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contacto">Coordinar por WhatsApp</Button>
            <Button href="/servicios" variant="ghost">
              Ver servicios
            </Button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <article key={step.title} className="rounded-[2rem] border border-surface bg-background p-6 shadow-soft">
            <p className="text-sm uppercase tracking-[0.28em] text-muted">Paso {index + 1}</p>
            <h2 className="mt-4 text-xl font-semibold leading-tight">{step.title}</h2>
            <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
          </article>
        ))}
      </div>

      <div className="rounded-[2rem] border border-dashed border-surface bg-surface/60 p-10 text-center shadow-soft">
        <p className="text-sm uppercase tracking-[0.28em] text-muted">Próximamente</p>
        <p className="mt-4 text-lg leading-8 text-foreground">
          El sistema de agendamiento online con selección de servicio, fecha y horario estará disponible en una
          próxima fase.
        </p>
      </div>
    </section>
  )
}
