export type Lang = 'en' | 'es'

export const t = {
  en: {
    meta_title: 'DojoLock — Earn your screen time',
    meta_description:
      'Lock distracting apps. Unlock them by doing pushups, journaling, or talking to an AI monk. You earn every minute.',

    lang_other: 'ES',
    lang_other_href: '/es',
    lang_other_label: 'Cambiar a español',

    hero_description: 'Lock your distracting apps. Earn them back with pushups, journaling, and discipline.',
    hero_store_ios: 'App Store',
    hero_store_android: 'Google Play',
    hero_coming_soon: 'Coming Soon',

    modal_title: 'Coming Soon',
    modal_body_ios: 'The App Store version is on its way. Drop your email below to be first in line.',
    modal_body_android: 'The Google Play version is on its way. Drop your email below to be first in line.',
    modal_close: 'Got it',

    email_placeholder: 'Your email',
    email_cta: 'Notify me',
    email_success: "Done! We'll notify you at launch.",
    email_error: 'Something went wrong. Try again.',
    email_invalid: 'Please enter a valid email.',

    footer_built_by: 'Built by',
    footer_developer: 'Saleem Siddique',
    footer_copyright: '© 2026 DojoLock. All rights reserved.',
    footer_tagline: 'Earn your time.',
  },
  es: {
    meta_title: 'DojoLock — Gana tu tiempo de pantalla',
    meta_description:
      'Bloquea apps distractoras. Desbloquéalas haciendo flexiones, escribiendo o hablando con un monje IA. Cada minuto se gana.',

    lang_other: 'EN',
    lang_other_href: '/en',
    lang_other_label: 'Switch to English',

    hero_description: 'Bloquea tus apps distractoras. Recupéralas con flexiones, escritura y disciplina.',
    hero_store_ios: 'App Store',
    hero_store_android: 'Google Play',
    hero_coming_soon: 'Próximamente',

    modal_title: 'Próximamente',
    modal_body_ios: 'La versión de App Store está en camino. Deja tu email abajo para ser el primero.',
    modal_body_android: 'La versión de Google Play está en camino. Deja tu email abajo para ser el primero.',
    modal_close: 'Entendido',

    email_placeholder: 'Tu email',
    email_cta: 'Avísame',
    email_success: '¡Listo! Te avisamos al lanzar.',
    email_error: 'Algo salió mal. Intenta de nuevo.',
    email_invalid: 'Ingresa un email válido.',

    footer_built_by: 'Desarrollado por',
    footer_developer: 'Saleem Siddique',
    footer_copyright: '© 2026 DojoLock. Todos los derechos reservados.',
    footer_tagline: 'Gana tu tiempo.',
  },
} as const

export type Translations = (typeof t)['en']
