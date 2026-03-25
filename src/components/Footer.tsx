'use client'

import Image from 'next/image'
import { t, type Lang } from '@/lib/translations'

interface Props {
  lang: Lang
}

export default function Footer({ lang }: Props) {
  const tr = t[lang]
  return (
    <footer className="site-footer">
      <div className="footer-logo">
        <Image
          src="/images/DojoLock-logo.png"
          alt="DojoLock"
          width={36}
          height={36}
          style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <p className="footer-tagline">{tr.footer_tagline}</p>
      <p className="footer-credit">
        {tr.footer_built_by} <span>{tr.footer_developer}</span>
      </p>
      <p className="footer-copy">{tr.footer_copyright}</p>
    </footer>
  )
}
