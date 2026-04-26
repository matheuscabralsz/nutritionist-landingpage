import {
  Sparkles,
  Leaf,
  HeartHandshake,
  FileText,
  MessageCircle,
  Compass,
} from 'lucide-react'

const features = [
  {
    icon: Compass,
    title: 'Investigação aprofundada',
    body: 'Consulta de 1h30 com anamnese funcional — histórico, sintomas, exames, rotina, ciclo e relação com a comida.',
  },
  {
    icon: Leaf,
    title: 'Plano 100% individualizado',
    body: 'Nada de dietas prontas. Sua estratégia é feita para o seu corpo, sua condição e sua realidade.',
  },
  {
    icon: Sparkles,
    title: 'Foco na raiz',
    body: 'Tratamos inflamação, intestino e metabolismo — a tríade que destrava emagrecimento e energia.',
  },
  {
    icon: MessageCircle,
    title: 'Suporte via WhatsApp',
    body: 'Dúvidas durante o mês respondidas por mim — você não fica sozinha entre consultas.',
  },
  {
    icon: FileText,
    title: 'E-books autorais',
    body: 'Receitas, guias de substituições e materiais educativos para você aplicar no dia a dia.',
  },
  {
    icon: HeartHandshake,
    title: 'Sem restrição extrema',
    body: 'Abordagem humana e sustentável. Comida como cuidado — não como castigo.',
  },
]

export function SolutionSection() {
  return (
    <section id="metodo" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-rose-600">
            Minha abordagem
          </p>
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-stone-900 sm:text-4xl">
            Cada paciente é única —{' '}
            <span className="italic text-rose-600">
              e merece um olhar atento.
            </span>
          </h2>
          <p className="mt-5 text-lg text-stone-600">
            Meu trabalho é pautado em tratamentos personalizados, criados para
            atender exatamente ao que o seu corpo precisa no momento. O objetivo
            central de cada consulta é entregar ferramentas que transformem sua
            relação com a comida e elevem sua qualidade de vida — sempre
            priorizando a sua individualidade.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group rounded-2xl border border-stone-200 bg-white p-7 transition hover:border-rose-200 hover:shadow-sm"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50 text-rose-600 transition group-hover:bg-rose-100">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="font-serif text-xl text-stone-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
