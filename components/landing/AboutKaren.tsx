import Image from 'next/image'

const credentials = [
  'CRN-2 12819P — atendimento baseado em evidências',
  '10+ anos de trajetória com nutrição funcional',
  'Foco em saúde da mulher, bariátrica e GLP-1',
  'Atendimento 100% online, em todo o Brasil',
]

export function AboutKaren() {
  return (
    <section className="bg-amber-50/60 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-100 shadow-sm">
          <Image
            src="/img/pic2.jpeg"
            alt="Nutricionista Karen Cabral"
            width={700}
            height={700}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-rose-600">
            Quem é a Nutri?
          </p>
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-stone-900 sm:text-4xl">
            Oi, eu sou a <span className="italic text-rose-600">Karen.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-stone-700">
            Minha trajetória com a nutrição começou há mais de <strong>10 anos</strong>,
            quando minha saúde estava gritando por ajuda. Sofria com sobrepeso,
            ansiedade, Síndrome Fúngica e problemas intestinais.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-stone-700">
            Como você pode ver, minha história com a alimentação não começou nos
            livros — começou na vida real, igual a sua.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-stone-700">
            Ao longo dos anos, percebi que a maioria das pessoas{' '}
            <strong>não falha nas dietas</strong> — elas estão só tentando
            resolver o problema no lugar errado. Corpos inflamados, intestinos
            desregulados e metabolismos travados não respondem a estratégias
            superficiais. Foi por isso que escolhi a{' '}
            <strong>nutrição funcional</strong> como base do meu trabalho.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-stone-700">
            Meu foco não é só o emagrecimento. É devolver{' '}
            <strong>equilíbrio, energia, saúde e autonomia</strong>. Meu
            objetivo é que você não precise mais começar toda segunda-feira — e
            que você possa comer o seu chocolate e hambúrguer em paz, sem culpa
            e sem inflamar o seu corpo.
          </p>

          <blockquote className="mt-8 border-l-4 border-rose-400 bg-white/70 py-4 pl-5 pr-4 font-serif text-xl italic leading-relaxed text-stone-800">
            Resultados duradouros não vêm de controle. Vêm de equilíbrio.
          </blockquote>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {credentials.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-stone-700">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-rose-500" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <a
              href="https://www.instagram.com/nutri.karencabral/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-rose-600 hover:text-rose-700"
            >
              Conheça meu Instagram @nutri.karencabral →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
