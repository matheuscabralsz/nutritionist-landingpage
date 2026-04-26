import { Leaf, Flower2, GlassWater, Utensils } from 'lucide-react'

const ebooks = [
  {
    icon: Leaf,
    title: 'Guia de Chás Funcionais',
    desc: 'Infusões que apoiam digestão, sono, hormônios e desinflamação.',
  },
  {
    icon: Flower2,
    title: 'E-book Ciclo das Sementes',
    desc: 'Seeding cycling para equilibrar o ciclo menstrual naturalmente.',
  },
  {
    icon: GlassWater,
    title: 'E-book de Shakes Saudáveis',
    desc: 'Receitas práticas para refeições rápidas que não inflamam.',
  },
  {
    icon: Utensils,
    title: 'E-book de Receitas Exclusivas',
    desc: 'Pratos saborosos do dia a dia — sem fórmulas genéricas.',
  },
]

export function KitExclusivo() {
  return (
    <section className="bg-amber-50/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-rose-600">
            Meu kit exclusivo
          </p>
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-stone-900 sm:text-4xl">
            Materiais autorais para{' '}
            <span className="italic text-rose-600">
              potencializar seus resultados.
            </span>
          </h2>
          <p className="mt-5 text-lg text-stone-600">
            Meu foco não é depender da sua motivação — é criar uma estrutura
            sólida. Eu desenvolvo o caminho para que sua rotina funcione de
            verdade, sem termos genéricos ou listas confusas.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ebooks.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-stone-200 bg-white p-7 transition hover:border-rose-200 hover:shadow-sm"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg text-stone-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-stone-500">
          Todos os e-books estão inclusos no acompanhamento mensal.
        </p>
      </div>
    </section>
  )
}
