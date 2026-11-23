import { SITE } from '../data/projects'

export type HeadInput = {
  title: string
  description: string
  path: string
  jsonLd?: Record<string, unknown>
  noindex?: boolean
}

function upsertMeta(selector: string, create: () => HTMLMetaElement, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = create()
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

function ensureMeta(attr: 'name' | 'property', key: string) {
  return () =>
    (() => {
      const el = document.createElement('meta')
      el.setAttribute(attr, key)
      return el
    })()
}

export function applyHead({ title, description, path, jsonLd, noindex }: HeadInput) {
  const url = `${SITE.origin}${path === '/' ? '/' : path}`

  document.title = title

  upsertMeta('meta[name="description"]', ensureMeta('name', 'description'), description)

  let robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]')
  if (!robots) {
    robots = document.createElement('meta')
    robots.setAttribute('name', 'robots')
    document.head.appendChild(robots)
  }
  robots.setAttribute(
    'content',
    noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large',
  )

  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.appendChild(canonical)
  }
  canonical.href = url

  const og: Array<[string, string]> = [
    ['og:type', 'website'],
    ['og:site_name', SITE.name],
    ['og:title', title],
    ['og:description', description],
    ['og:url', url],
    ['og:image', `${SITE.origin}/og-image.png`],
    ['og:image:width', '1200'],
    ['og:image:height', '630'],
    ['og:locale', 'en_US'],
  ]
  for (const [key, value] of og) {
    upsertMeta(`meta[property="${key}"]`, ensureMeta('property', key), value)
  }

  const tw: Array<[string, string]> = [
    ['twitter:card', 'summary_large_image'],
    ['twitter:title', title],
    ['twitter:description', description],
    ['twitter:image', `${SITE.origin}/og-image.png`],
  ]
  for (const [key, value] of tw) {
    upsertMeta(`meta[name="${key}"]`, ensureMeta('name', key), value)
  }

  const existing = document.head.querySelector<HTMLScriptElement>('script[data-seo-jsonld]')
  if (existing) existing.remove()
  if (jsonLd) {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.dataset.seoJsonld = 'true'
    script.textContent = JSON.stringify(jsonLd)
    document.head.appendChild(script)
  }
}

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE.name,
  jobTitle: 'Backend and systems engineer',
  url: SITE.origin,
  sameAs: [SITE.github, SITE.linkedin],
  knowsAbout: [
    'Cloudflare Workers',
    'D1',
    'TypeScript',
    'Agent orchestration',
    'PostgreSQL',
    'CI/CD',
  ],
}
