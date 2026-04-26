import { Button } from '@/components/ui/Button'

const WHATSAPP_URL =
  'https://wa.me/5554992536173?text=Ol%C3%A1%20Karen%2C%20quero%20agendar%20minha%20consulta%20nutricional.'

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rose-500 to-rose-600 py-24 text-white">
      <div className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-3xl leading-tight tracking-tight sm:text-5xl">
          Seu corpo merece um plano que{' '}
          <em className="text-amber-200">enxergue você por inteiro.</em>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-rose-50">
          Agende sua consulta e comece a destravar inflamação, intestino e
          metabolismo — a partir da raiz.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={WHATSAPP_URL} size="lg" variant="inverted">
            Agendar consulta — R$ 180
          </Button>
          <span className="text-sm text-rose-100">
            Resposta em até 1 dia útil
          </span>
        </div>
      </div>
    </section>
  )
}
