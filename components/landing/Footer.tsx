import Link from 'next/link'
import { Instagram, MessageCircle, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-2xl text-stone-900">Nutri Karen</p>
          <p className="mt-2 text-sm text-stone-500">
            Nutrição funcional · saúde da mulher.
          </p>
          <p className="mt-2 text-xs text-stone-400">CRN-2 12819P</p>
        </div>

        <div>
          <p className="text-sm font-medium text-stone-900">Navegação</p>
          <ul className="mt-3 space-y-2 text-sm text-stone-600">
            <li>
              <Link href="#metodo" className="hover:text-rose-600">
                O método
              </Link>
            </li>
            <li>
              <Link href="#investimento" className="hover:text-rose-600">
                Investimento
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:text-rose-600">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-stone-900">Contato</p>
          <ul className="mt-3 space-y-2 text-sm text-stone-600">
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              <a
                href="https://wa.me/5554992536173"
                className="hover:text-rose-600"
              >
                (54) 99253-6173
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="h-4 w-4" />
              <a
                href="https://www.instagram.com/nutri.karencabral/"
                className="hover:text-rose-600"
              >
                @nutri.karencabral
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a
                href="mailto:nutricionistakarencabral@hotmail.com"
                className="hover:text-rose-600"
              >
                nutricionistakarencabral@hotmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-stone-100 py-6 text-center text-xs text-stone-500">
        © {new Date().getFullYear()} Nutri Karen · Todos os direitos reservados.
      </div>
    </footer>
  )
}
