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
  metadataBase: new URL('https://bluebolt.agency'),
  title: {
    default: 'Blue Bolt | Mais Pacientes Novos para a Sua Clínica',
    template: '%s | Blue Bolt',
  },
  description: 'A Blue Bolt enche a agenda da sua clínica com pacientes novos — sem depender do passa-a-palavra. Google Partner certificada. Diagnóstico gratuito em 30 minutos.',
  keywords: [
    'marketing digital clínicas Portugal', 'captação de pacientes', 'agenda cheia clínica',
    'marketing clínica dentária', 'marketing saúde Portugal', 'pacientes novos clínica',
    'Google Ads clínicas', 'SEO clínica dentária', 'Blue Bolt agency', 'crescimento clínica',
    'marketing médico Portugal', 'visibilidade Google clínica',
  ],
  authors: [{ name: 'Blue Bolt', url: 'https://bluebolt.agency' }],
  creator: 'Blue Bolt',
  publisher: 'Blue Bolt',
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
    title: 'Blue Bolt | Mais Pacientes Novos para a Sua Clínica',
    description: 'A Blue Bolt enche a agenda da sua clínica com pacientes novos — sem depender do passa-a-palavra. Google Partner certificada. Diagnóstico gratuito em 30 minutos.',
    url: 'https://bluebolt.agency',
    siteName: 'Blue Bolt',
    locale: 'pt_PT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blue Bolt | Mais Pacientes Novos para a Sua Clínica',
    description: 'A Blue Bolt enche a agenda da sua clínica — Google Partner certificada. Diagnóstico gratuito em 30 minutos.',
  },
  alternates: {
    canonical: 'https://bluebolt.agency',
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
    <html lang="pt-PT" className={`${spaceGrotesk.variable} ${workSans.variable}`}>
      <body className="font-sans antialiased bg-[#000000] text-[#ffffff]">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
