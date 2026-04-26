const areas = [
  {
    name: 'Emagrecimento e Metabolismo',
    desc: 'Pacientes bariátricos, usuárias de canetas emagrecedoras (GLP-1) e tratamento de doenças metabólicas.',
  },
  {
    name: 'Saúde da Mulher',
    desc: 'Abordagem específica para SOP (Síndrome dos Ovários Policísticos), Lipedema e Endometriose.',
  },
  {
    name: 'Saúde Digestiva e Intestinal',
    desc: 'Inflamação crônica, SIBO, IMO, Síndrome do Intestino Irritável (SII) e constipação.',
  },
  {
    name: 'Comportamento Alimentar',
    desc: 'Ajustando sua relação com a comida para que o processo seja leve e sustentável.',
  },
]

export function WhoItsFor() {
  return (
    <section className="bg-stone-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-rose-600">
            Áreas de atuação
          </p>
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-stone-900 sm:text-4xl">
            Saúde real, tratando{' '}
            <span className="italic text-rose-600">a base do problema.</span>
          </h2>
          <p className="mt-5 text-lg text-stone-600">
            Atendimento com ciência e acolhimento para quem já tentou de tudo e
            continua sem respostas.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {areas.map((a) => (
            <div
              key={a.name}
              className="rounded-2xl border border-stone-200 bg-white p-7 transition hover:border-rose-200 hover:shadow-sm"
            >
              <p className="font-serif text-xl text-stone-900">{a.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
