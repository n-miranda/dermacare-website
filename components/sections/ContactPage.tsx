import Button from '@/components/ui/Button'

const contactDetails = [
  {
    label: 'Ubicación',
    value: 'Posadas, Misiones, Argentina',
  },
  {
    label: 'WhatsApp',
    value: '+54 9 376 000-0000',
  },
  {
    label: 'Horario de atención',
    value: 'Lunes a sábado, 9:00 a 19:00 hs',
  },
]

const socialLinks = [
  { label: 'Instagram', value: '@dermacare.posadas' },
  { label: 'Facebook', value: 'DermaCare Posadas' },
]

export default function ContactPage() {
  return (
    <section className="space-y-14">
      <div className="rounded-[2rem] border border-surface bg-surface/95 p-8 shadow-soft sm:p-10">
        <div className="max-w-2xl space-y-6">
          <p className="text-sm uppercase tracking-[0.32em] text-muted">Contacto</p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">Hablemos sobre tu próximo tratamiento.</h1>
          <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
            Escribinos por WhatsApp o redes sociales para coordinar tu cita o consultar sobre nuestros servicios.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/agendar">Agendar cita</Button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-surface bg-background p-8 shadow-soft">
          <p className="text-sm uppercase tracking-[0.28em] text-muted">Datos de contacto</p>
          <ul className="mt-6 space-y-5">
            {contactDetails.map((detail) => (
              <li key={detail.label}>
                <p className="text-xs uppercase tracking-[0.24em] text-muted">{detail.label}</p>
                <p className="mt-1 text-lg font-medium text-foreground">{detail.value}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[2rem] border border-surface bg-background p-8 shadow-soft">
          <p className="text-sm uppercase tracking-[0.28em] text-muted">Redes sociales</p>
          <ul className="mt-6 space-y-5">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <p className="text-xs uppercase tracking-[0.24em] text-muted">{social.label}</p>
                <p className="mt-1 text-lg font-medium text-foreground">{social.value}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
