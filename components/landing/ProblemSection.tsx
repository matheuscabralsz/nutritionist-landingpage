const symptoms = [
  {
    q: 'Faço dieta e não emagreço.',
    a: 'Seu metabolismo está travado por inflamação crônica.',
  },
  {
    q: 'Meu intestino vive ruim.',
    a: 'Constipação, gases e inchaço não são "normais" — são sinais.',
  },
  {
    q: 'TPM, cólica e cansaço extremos.',
    a: 'Há um padrão hormonal por trás disso — e ele se trata.',
  },
  {
    q: 'Recaio com comida toda semana.',
    a: 'Não é compulsão por fraqueza — é resposta do seu corpo.',
  },
  {
    q: 'Me sinto inchada o tempo todo.',
    a: 'Retenção e inflamação caminham juntas.',
  },
  {
    q: 'Cada dieta nova funciona menos.',
    a: 'Dietas restritivas pioram o metabolismo a longo prazo.',
  },
]

export function ProblemSection() {
  return (
    <section className="bg-stone-50 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-rose-600">
            Você se reconhece?
          </p>
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-stone-900 sm:text-4xl">
            Não é a sua força de vontade.{' '}
            <span className="italic text-rose-600">
              É o seu corpo pedindo ajuda.
            </span>
          </h2>
          <p className="mt-5 text-lg text-stone-600">
            Enquanto você continua se culpando, a inflamação avança, o intestino
            piora e o ciclo de recaídas se fortalece. Cada tentativa frustrada
            aumenta o custo físico e emocional.
          </p>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {symptoms.map((s) => (
            <li
              key={s.q}
              className="rounded-2xl border border-stone-200 bg-white p-6 transition hover:border-rose-200 hover:shadow-sm"
            >
              <p className="font-serif text-lg text-stone-900">“{s.q}”</p>
              <p className="mt-2 text-sm text-stone-600">{s.a}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
