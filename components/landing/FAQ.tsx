'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Como funciona o atendimento nutricional online?',
    a: 'Funciona de forma muito mais estratégica do que uma consulta tradicional. Aqui não é sobre "passar uma dieta". É sobre investigar o que está travando o seu corpo, entender seus sintomas e montar um plano que realmente faça sentido para você. Você sai com clareza, direção e uma estratégia personalizada, não com mais uma tentativa.',
  },
  {
    q: 'Atendimento online realmente funciona ou é perda de tempo?',
    a: 'Funciona, e o problema nunca foi o formato. O que não funciona é abordagem superficial. Se você já fez consultas que não geraram resultado, provavelmente não foi por ser online… foi porque ninguém foi na raiz do problema.',
  },
  {
    q: 'Vou receber uma dieta pronta igual todo mundo?',
    a: 'Não. E se você já recebeu algo assim antes, provavelmente esse é um dos motivos de não ter funcionado. Seu corpo não é padrão. Então seu plano também não pode ser.',
  },
  {
    q: 'Vou precisar cortar tudo que eu gosto?',
    a: 'Se fosse só cortar comida, você já teria resolvido. O problema não é falta de restrição, é falta de estratégia. Aqui você aprende a comer de forma inteligente, sem viver em guerra com a comida.',
  },
  {
    q: 'Em quanto tempo começo a ver resultado?',
    a: 'Depende do quanto o seu corpo está desregulado hoje. Mas a maioria das pessoas começa a sentir diferença rápido, principalmente em inchaço, energia e funcionamento intestinal. O emagrecimento vem como consequência… não como sofrimento.',
  },
  {
    q: 'E se meu problema não for alimentação?',
    a: 'Na maioria das vezes, não é só. O que trava o corpo geralmente está ligado a inflamação, intestino e metabolismo desregulado. Por isso focar só na comida não resolve. Aqui, o olhar é completo.',
  },
  {
    q: 'Já passo em médico. Ainda preciso disso?',
    a: 'Se só o tratamento atual resolvesse tudo, você não estaria buscando outra solução. A nutrição funcional entra justamente onde muitas abordagens não chegam: na causa.',
  },
  {
    q: 'Já tentei de tudo. O que garante que agora vai ser diferente?',
    a: 'Nada muda… se você continuar tentando resolver o problema do mesmo jeito. Se você focou só em dieta até hoje, faz sentido não ter funcionado. Aqui o foco não é o peso, é o que impede seu corpo de responder.',
  },
  {
    q: 'Tenho dificuldade em seguir planos. Isso vai funcionar pra mim?',
    a: 'Se o plano não funciona na sua vida, ele não serve pra você. Simples assim. Aqui, a estratégia é construída para ser possível, não perfeita.',
  },
  {
    q: 'Não tenho tempo. Isso é pra mim?',
    a: 'Se você não tem tempo, você precisa ainda mais de algo que funcione. Porque continuar tentando e falhando também consome tempo, e energia.',
  },
  {
    q: 'Tenho muitos sintomas ao mesmo tempo. Isso é normal?',
    a: 'Sim, e geralmente eles estão conectados. Seu corpo não está "cheio de problemas". Ele está mostrando sinais de um mesmo desequilíbrio.',
  },
  {
    q: 'Esse tipo de abordagem é muito restritiva?',
    a: 'Restrição nunca resolveu o problema, só adiou. Aqui o foco é ajustar o que está causando o desequilíbrio, não viver cortando tudo.',
  },
  {
    q: 'E se eu não conseguir emagrecer mesmo assim?',
    a: 'Essa é exatamente a situação da maioria dos pacientes que chegam aqui. E o padrão é sempre o mesmo: muito esforço… pouca resposta. Quando o corpo é tratado da forma certa, ele responde.',
  },
  {
    q: 'Uso Ozempic / GLP-1. Ainda preciso de acompanhamento?',
    a: 'Sim, talvez mais do que nunca. Porque a medicação controla o sintoma, mas não resolve a causa. Sem estratégia, o risco de voltar tudo depois é alto.',
  },
  {
    q: 'Fiz bariátrica e voltei a engordar. Tem solução?',
    a: 'Tem, e isso é mais comum do que parece. A cirurgia muda a estrutura, mas não resolve o metabolismo, a inflamação e o comportamento. Se isso não for ajustado, o corpo volta ao padrão.',
  },
  {
    q: 'Tenho SOP / endometriose / lipedema. Isso realmente melhora com alimentação?',
    a: 'Sim, porque o problema não é só hormonal. Existe um componente inflamatório e metabólico forte que precisa ser tratado. Sem isso, os sintomas continuam voltando.',
  },
  {
    q: 'Meu intestino nunca funciona bem. Isso tem solução mesmo?',
    a: 'Tem, mas não com soluções rápidas. O intestino não desregula do nada… e também não se resolve do nada. Precisa de estratégia certa.',
  },
  {
    q: 'Vou precisar mudar minha vida inteira?',
    a: 'Não. Você só precisa parar de fazer o que não funciona e começar a fazer o que faz sentido pro seu corpo.',
  },
  {
    q: 'E se eu estiver cansada de tentar?',
    a: 'Talvez o problema nunca tenha sido você. Talvez você só esteja usando a estratégia errada até hoje.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-rose-600">
            Tire suas dúvidas
          </p>
          <h2 className="font-serif text-3xl leading-tight tracking-tight text-stone-900 sm:text-4xl">
            Perguntas <span className="italic text-rose-600">frequentes.</span>
          </h2>
        </div>

        <ul className="mt-12 divide-y divide-stone-200 overflow-hidden rounded-2xl border border-stone-200 bg-white">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <li key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-stone-50"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg text-stone-900">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-rose-500 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pr-14 text-stone-600">
                    <p className="leading-relaxed">{f.a}</p>
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  )
}
