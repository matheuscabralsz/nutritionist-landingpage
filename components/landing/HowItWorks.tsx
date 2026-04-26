const steps = [
  {
    n: '01',
    title: 'Agendamento facilitado',
    body: 'Todo o contato inicial e marcação são feitos de forma direta e rápida pelo WhatsApp.',
  },
  {
    n: '02',
    title: 'Preparação estratégica',
    body: 'Antes do nosso encontro você preenche um questionário de pré-consulta, para que eu estude o seu caso com antecedência e nosso tempo juntas seja 100% focado em soluções.',
  },
  {
    n: '03',
    title: 'Atenção plena — 1h30',
    body: 'Consulta com escuta ativa e profunda, analisando rotina e objetivos. Incluo simulações visuais de porções para você entender quantidades de forma prática.',
  },
  {
    n: '04',
    title: 'Plano + acompanhamento',
    body: 'Você recebe plano alimentar personalizado, estratégias comportamentais e canal aberto no WhatsApp durante todo o mês.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-rose-600">
            A experiência da consulta online
          </p>
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-stone-900 sm:text-4xl">
            Não é uma alternativa —{' '}
            <span className="italic text-rose-600">
              é a evolução do cuidado nutricional.
            </span>
          </h2>
          <p className="mt-5 text-lg text-stone-600">
            Acompanhamento de alto nível sem enfrentar trânsito ou salas de
            espera, no conforto do seu ambiente. A metodologia é organizada e
            acolhedora — para você se sentir segura e amparada em cada etapa.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2">
          {steps.map((s) => (
            <li
              key={s.n}
              className="rounded-2xl border border-stone-200 bg-white p-7"
            >
              <p className="font-serif text-3xl text-rose-500/80">{s.n}</p>
              <p className="mt-3 font-serif text-xl text-stone-900">{s.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
