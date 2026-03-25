import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://dojolock.app/en',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          es: 'https://dojolock.app/es',
        },
      },
    },
    {
      url: 'https://dojolock.app/es',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          en: 'https://dojolock.app/en',
        },
      },
    },
  ]
}
