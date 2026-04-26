import type { Metadata, Viewport } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nutri Karen — Nutrição Funcional para SOP, Endometriose, SIBO, GLP-1',
  description:
    'Acompanhamento nutricional online que trata a raiz: inflamação, intestino e metabolismo. Plano personalizado por R$ 180/mês. Sem restrição extrema.',
  metadataBase: new URL('https://nutrikaren.com.br'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Nutri Karen — Nutrição Funcional Personalizada',
    description:
      'Plano alimentar individualizado para SOP, endometriose, lipedema, SIBO, pós-bariátrica e GLP-1. Trate a raiz, não o sintoma.',
    url: 'https://nutrikaren.com.br',
    siteName: 'Nutri Karen',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Nutri Karen — Nutrição Funcional Personalizada',
    description:
      'Acompanhamento online para SOP, endometriose, SIBO, GLP-1 e mais.',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://nutrikaren.com.br',
  name: 'Nutri Karen',
  description:
    'Atendimento nutricional online com foco em nutrição funcional para saúde da mulher.',
  url: 'https://nutrikaren.com.br',
  priceRange: 'R$ 180',
  areaServed: 'BR',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="bg-white font-sans text-stone-900 antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  )
}
