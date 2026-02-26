import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Work_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
})

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://yellowlab.agency'),
  title: {
    default: 'Yellow Lab | Estratégia, Criação e Tecnologia',
    template: '%s | Yellow Lab',
  },
  description: 'Agência criativa que une marketing estratégico com tecnologia e IA. Branding, conteúdo, social media, tráfego pago, web design, SaaS e agentes de IA.',
  keywords: [
    'agência de marketing', 'marketing digital', 'branding', 'identidade visual',
    'tráfego pago', 'social media', 'web design', 'desenvolvimento de sites',
    'agentes de IA', 'automação', 'SaaS', 'estratégia digital', 'Yellow Lab',
  ],
  authors: [{ name: 'Yellow Lab', url: 'https://yellowlab.agency' }],
  creator: 'Yellow Lab',
  publisher: 'Yellow Lab',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Yellow Lab | Estratégia, Criação e Tecnologia',
    description: 'Agência criativa que une marketing estratégico com tecnologia e IA. Branding, conteúdo, social media, tráfego pago, web design, SaaS e agentes de IA.',
    url: 'https://yellowlab.agency',
    siteName: 'Yellow Lab',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Yellow Lab — Estratégia, Criação e Tecnologia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yellow Lab | Estratégia, Criação e Tecnologia',
    description: 'Agência criativa que une marketing estratégico com tecnologia e IA.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://yellowlab.agency',
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${workSans.variable}`}>
      <body className="font-sans antialiased bg-[#000000] text-[#ffffff]">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
