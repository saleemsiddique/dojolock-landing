'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaApple } from 'react-icons/fa'
import { IoLogoGooglePlaystore } from 'react-icons/io5'
import { t, type Lang } from '@/lib/translations'

interface Props {
  lang: Lang
}

// Crystal SVG shape
function Crystal({
  color,
  size = 28,
  opacity = 0.85,
}: {
  color: string
  size?: number
  opacity?: number
}) {
  return (
    <svg
      width={size}
      height={size * 1.6}
      viewBox="0 0 28 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      <path
        d="M14 2L26 14L14 43L2 14L14 2Z"
        fill={color}
        stroke="rgba(255,255,255,0.6)"
        strokeWidth="1"
      />
      <path
        d="M14 2L26 14H2L14 2Z"
        fill="rgba(255,255,255,0.45)"
      />
      <path
        d="M14 14L20 14L14 43L8 14L14 14Z"
        fill="rgba(0,0,0,0.08)"
      />
    </svg>
  )
}

export default function Hero({ lang }: Props) {
  const tr = t[lang]
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'invalid'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [modal, setModal] = useState<null | 'ios' | 'android'>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus('invalid')
      return
    }
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        const data = await res.json()
        setErrorMsg(data.error || tr.email_error)
        setStatus('error')
      }
    } catch {
      setErrorMsg(tr.email_error)
      setStatus('error')
    }
  }

  const otherLang = lang === 'en' ? 'es' : 'en'

  return (
    <>
      {/* Sky scene — clouds */}
      <div className="sky-scene" aria-hidden="true">
        <div className="cloud cloud-1" />
        <div className="cloud cloud-2" />
        <div className="cloud cloud-3" />
        <div className="cloud cloud-4" />
      </div>

      {/* Page wrapper */}
      <div className="page-wrapper">

        {/* Floating crystals around the card area */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            maxWidth: '600px',
            height: '100%',
            pointerEvents: 'none',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          aria-hidden="true"
        >
          {/* Top-left crystal */}
          <div className="crystal crystal-a" style={{ top: '8%', left: '-5%' }}>
            <Crystal color="#d4c8f5" size={32} />
          </div>
          {/* Top-right crystal */}
          <div className="crystal crystal-b" style={{ top: '6%', right: '-4%' }}>
            <Crystal color="#c8e8ff" size={24} />
          </div>
          {/* Mid-left crystal */}
          <div className="crystal crystal-c" style={{ top: '30%', left: '-8%' }}>
            <Crystal color="#b8f0d4" size={20} opacity={0.7} />
          </div>
          {/* Mid-right crystal */}
          <div className="crystal crystal-a" style={{ top: '35%', right: '-6%' }}>
            <Crystal color="#f5c842" size={22} opacity={0.6} />
          </div>
          {/* Bottom-left */}
          <div className="crystal crystal-b" style={{ bottom: '18%', left: '-3%' }}>
            <Crystal color="#c8e8ff" size={18} opacity={0.65} />
          </div>
          {/* Bottom-right */}
          <div className="crystal crystal-c" style={{ bottom: '20%', right: '-5%' }}>
            <Crystal color="#d4c8f5" size={26} opacity={0.75} />
          </div>
        </div>

        {/* Hero Card */}
        <main>
          <article className="hero-card" aria-label="DojoLock">

            {/* Language switcher */}
            <nav className="lang-switcher" aria-label="Language">
              <Link
                href={`/${lang}`}
                className={`lang-btn ${true ? 'active' : ''}`}
                aria-current="page"
              >
                {lang.toUpperCase()}
              </Link>
              <Link
                href={`/${otherLang}`}
                className="lang-btn"
                aria-label={tr.lang_other_label}
              >
                {tr.lang_other}
              </Link>
            </nav>

            {/* Logo */}
            <div
              style={{
                filter: 'drop-shadow(0 8px 24px rgba(245, 200, 66, 0.55))',
              }}
            >
              <Image
                src="/images/DojoLock-logo.png"
                alt="DojoLock"
                width={140}
                height={140}
                priority
                style={{ borderRadius: '24px', display: 'block' }}
              />
            </div>

            {/* App name */}
            <h1 className="wood-text">DojoLock</h1>

            {/* Description */}
            <p
              style={{
                fontFamily: 'var(--font-nunito), system-ui, sans-serif',
                fontWeight: 400,
                fontSize: '0.9375rem',
                color: '#5c3d2a',
                textAlign: 'center',
                lineHeight: 1.65,
                margin: 0,
                maxWidth: '320px',
              }}
            >
              {tr.hero_description}
            </p>

            {/* Store buttons */}
            <div className="store-buttons" aria-label="Download">
              {/* App Store */}
              <button
                className="store-btn"
                onClick={() => setModal('ios')}
                aria-label={tr.hero_store_ios}
              >
                <FaApple className="store-btn-icon" />
                <span>{tr.hero_store_ios}</span>
              </button>

              {/* Google Play */}
              <button
                className="store-btn"
                onClick={() => setModal('android')}
                aria-label={tr.hero_store_android}
              >
                <IoLogoGooglePlaystore className="store-btn-icon" />
                <span>{tr.hero_store_android}</span>
              </button>
            </div>

            {/* Email form */}
            <div className="email-form-wrap">
              {status === 'success' ? (
                <div className="email-success">&#10003; {tr.email_success}</div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="email-row">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        if (status === 'invalid' || status === 'error') setStatus('idle')
                      }}
                      placeholder={tr.email_placeholder}
                      aria-label={tr.email_placeholder}
                      className="email-input"
                    />
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="email-submit"
                    >
                      {status === 'loading' ? '...' : tr.email_cta}
                    </button>
                  </div>
                  {(status === 'invalid' || status === 'error') && (
                    <p className="email-error-msg">
                      {status === 'invalid' ? tr.email_invalid : errorMsg}
                    </p>
                  )}
                </form>
              )}
            </div>

          </article>
        </main>
      </div>

      {/* Coming Soon Modal */}
      {modal && (
        <div className="modal-overlay" onClick={() => setModal(null)} role="dialog" aria-modal="true">
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-icon">
              {modal === 'ios' ? <FaApple /> : <IoLogoGooglePlaystore />}
            </div>
            <h2 className="modal-title">{tr.modal_title}</h2>
            <p className="modal-body">
              {modal === 'ios' ? tr.modal_body_ios : tr.modal_body_android}
            </p>
            <button className="modal-close-btn" onClick={() => setModal(null)}>
              {tr.modal_close}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
