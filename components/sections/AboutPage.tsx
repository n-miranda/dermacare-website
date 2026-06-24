import Button from '@/components/ui/Button'

const milestones = [
  {
    title: 'Formación en Dermatocosmiatría',
    description: 'Especialización en cuidado de piel, técnicas faciales y protocolos de belleza personalizados.',
  },
  {
    title: 'Perfeccionamiento en cejas y pestañas',
    description: 'Cursos avanzados en diseño de cejas, lifting de pestañas y técnicas de depilación profesional.',
  },
  {
    title: 'Local propio en Posadas',
    description: 'Un espacio pensado para que cada clienta se sienta cómoda, escuchada y bien cuidada.',
  },
]

export default function AboutPage() {
  return (
    <section className="space-y-14">
      <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.32em] text-muted">Sobre mí</p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">Celeste Gayoso, Dermatocosmiatra</h1>
          <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
            Mi pasión es ayudarte a sentirte bien con tu piel. En DermaCare combino técnica, calidez y atención
            personalizada para que cada tratamiento sea una experiencia serena, pensada especialmente para vos.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/agendar">Agendar cita</Button>
            <Button href="/servicios" variant="ghost">
              Ver servicios
            </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {milestones.map((milestone) => (
          <article key={milestone.title} className="rounded-[2rem] border border-surface bg-surface p-6 shadow-soft">
            <p className="text-sm uppercase tracking-[0.28em] text-muted">Trayectoria</p>
            <h2 className="mt-4 text-xl font-semibold leading-tight">{milestone.title}</h2>
            <p className="mt-3 text-sm leading-7 text-muted">{milestone.description}</p>
          </article>
        ))}
      </div>

      <div className="rounded-[2rem] border border-surface bg-surface/95 p-8 shadow-soft sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-muted">Nuestro espacio</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight">Un local pensado para tu bienestar</h2>
            <p className="mt-4 text-base leading-8 text-muted">
              Ubicado en Posadas, Misiones, el local de DermaCare fue diseñado para ofrecer calma y privacidad en
              cada sesión, con una estética cálida y minimalista que invita a relajarte desde que entrás.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-surface bg-background p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-muted">En el local</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-foreground">
              <li>• Ambiente privado y silencioso</li>
              <li>• Productos profesionales seleccionados</li>
              <li>• Atención cercana, a tu ritmo</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
