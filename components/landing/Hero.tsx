import Image from 'next/image'
import { Button } from '@/components/ui/Button'

const WHATSAPP_URL =
  'https://wa.me/5554992536173?text=Ol%C3%A1%20Karen%2C%20quero%20agendar%20minha%20consulta%20nutricional.'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-rose-50/60 via-white to-white">
      <div className="pointer-events-none absolute -right-40 -top-32 h-[500px] w-[500px] rounded-full bg-rose-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full bg-amber-100/50 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-24 lg:grid-cols-[1.1fr_1fr] lg:pt-32">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/70 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-rose-700 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
            Atendimento nutricional online
          </div>

          <Image
            src="/logo.svg"
            alt="Karen Nutricionista"
            width={1500}
            height={1500}
            priority
            className="h-auto w-full max-w-md py-4"
          />

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600">
            Te ajudo a transformar a sua relação com o corpo e a comida através
            da <strong className="text-stone-800">nutrição funcional</strong>.
            Aqui ajustamos a raiz, não só as calorias — porque quando a
            inflamação é tratada e o metabolismo volta a funcionar, seu corpo
            responde de forma natural, consistente e duradoura.
          </p>

          <p className="mt-4 max-w-xl text-lg leading-relaxed text-stone-600">
            Você não recebe apenas uma dieta. Recebe um{' '}
            <strong className="text-stone-800">plano estratégico</strong>{' '}
            pensado para o seu corpo — que atua na desinflamação, no equilíbrio
            intestinal e na regulação metabólica.
          </p>

          <p className="mt-6 max-w-xl border-l-2 border-rose-400 pl-4 font-serif text-lg italic leading-relaxed text-stone-800">
            O resultado? Um corpo que deixa de resistir e começa a colaborar
            com você.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={WHATSAPP_URL} size="lg">
              Agendar consulta — R$ 180
            </Button>
            <Button href="#metodo" variant="ghost" size="lg">
              Conhecer o método →
            </Button>
          </div>

          <p className="mt-5 text-sm text-stone-500">
            Consulta de 1h30 · plano personalizado · preço justo que cabe no seu bolso
          </p>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-100 shadow-sm">
            <Image
              src="/img/pic1.jpeg"
              alt="Nutricionista Karen sorrindo em consultório acolhedor"
              width={800}
              height={1000}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-stone-200 bg-white/90 px-5 py-4 shadow-sm backdrop-blur sm:block">
            <p className="font-serif text-2xl text-rose-600">+300</p>
            <p className="text-xs text-stone-600">mulheres acompanhadas</p>
          </div>
        </div>
      </div>
    </section>
  )
}
