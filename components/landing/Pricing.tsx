import { Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const WHATSAPP_URL =
  'https://wa.me/5554992536173?text=Ol%C3%A1%20Karen%2C%20quero%20agendar%20minha%20consulta%20nutricional.'

const included = [
  'Questionário de pré-consulta estratégico',
  'Consulta online de 1h30 com escuta ativa',
  'Simulação visual de porções durante a consulta',
  'Plano alimentar personalizado para o seu paladar',
  'Estratégias comportamentais para manter a constância',
  'Suporte direto via WhatsApp durante o mês',
  'Guia de Chás Funcionais',
  'E-book Ciclo das Sementes (saúde feminina)',
  'E-book de Shakes Saudáveis',
  'E-book de Receitas Exclusivas',
]

export function Pricing() {
  return (
    <section id="investimento" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-rose-600">
            Nutrição consciente e acessível
          </p>
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-stone-900 sm:text-4xl">
            Um investimento que{' '}
            <span className="italic text-rose-600">cabe no seu bolso.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-stone-600">
            Acredito que o acesso à saúde e à alimentação funcional pode — e
            deve — ser acessível. Por isso, ofereço atendimento técnico, humano
            e totalmente personalizado por um valor justo, sem abrir mão da
            qualidade.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-3xl border-2 border-rose-200 bg-white shadow-sm ring-4 ring-rose-100/40">
          <div className="border-b border-stone-100 bg-gradient-to-br from-rose-50 to-white px-8 py-10 text-center sm:px-12">
            <p className="font-serif text-xl text-stone-900">
              Acompanhamento Nutricional
            </p>
            <p className="mt-1 text-sm text-stone-600">
              Plano mensal · atendimento online
            </p>
            <div className="mt-6 flex items-baseline justify-center gap-1">
              <span className="font-serif text-2xl text-stone-500">R$</span>
              <span className="font-serif text-6xl tracking-tight text-stone-900">
                180
              </span>
              <span className="text-sm text-stone-500">/mês</span>
            </div>
          </div>

          <div className="px-8 py-10 sm:px-12">
            <p className="mb-6 text-sm font-medium uppercase tracking-wider text-stone-500">
              O que está incluso
            </p>
            <ul className="space-y-3">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-stone-700"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col items-center gap-3">
              <Button
                href={WHATSAPP_URL}
                size="lg"
                className="w-full sm:w-auto"
              >
                Quero agendar minha consulta
              </Button>
              <p className="text-xs text-stone-500">
                Pagamento via PIX · emissão de NF
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
