import type { Metadata } from 'next'
import { Baloo_2, Nunito } from 'next/font/google'
import { t, type Lang } from '@/lib/translations'
import { notFound } from 'next/navigation'
import '../globals.css'

const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-baloo-2',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-nunito-var',
  display: 'swap',
})

const SUPPORTED_LANGS: Lang[] = ['en', 'es']

type Props = {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}

export async function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  if (!SUPPORTED_LANGS.includes(lang as Lang)) return {}
  const tr = t[lang as Lang]
  return {
    metadataBase: new URL('https://dojolock.app'),
    title: tr.meta_title,
    description: tr.meta_description,
    alternates: {
      canonical: `https://dojolock.app/${lang}`,
      languages: {
        en: 'https://dojolock.app/en',
        es: 'https://dojolock.app/es',
        'x-default': 'https://dojolock.app/en',
      },
    },
    openGraph: {
      title: tr.meta_title,
      description: tr.meta_description,
      url: `https://dojolock.app/${lang}`,
      siteName: 'DojoLock',
      locale: lang === 'es' ? 'es_ES' : 'en_US',
      alternateLocale: lang === 'es' ? 'en_US' : 'es_ES',
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: tr.meta_title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: tr.meta_title,
      description: tr.meta_description,
      images: ['/og-image.png'],
    },
  }
}

export default async function LangLayout({ children, params }: Props) {
  const { lang } = await params
  if (!SUPPORTED_LANGS.includes(lang as Lang)) notFound()

  return (
    <html lang={lang} className={`${baloo.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  )
}
