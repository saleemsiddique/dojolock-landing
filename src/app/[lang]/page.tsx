import { notFound } from 'next/navigation'
import { type Lang } from '@/lib/translations'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

const SUPPORTED_LANGS: Lang[] = ['en', 'es']

type Props = {
  params: Promise<{ lang: string }>
}

export default async function Home({ params }: Props) {
  const { lang } = await params
  if (!SUPPORTED_LANGS.includes(lang as Lang)) notFound()
  const l = lang as Lang

  return (
    <>
      <Hero lang={l} />
      <Footer lang={l} />
    </>
  )
}
