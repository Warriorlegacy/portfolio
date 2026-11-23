// @ts-check
import { PROJECTS, SITE } from '../data/projects.js'

/**
 * @typedef {Object} Head
 * @property {string} title
 * @property {string} description
 * @property {string} path
 * @property {Record<string, unknown>} [jsonLd]
 * @property {boolean} [noindex]
 */

/**
 * @param {string} text
 * @param {number} max
 */
function clip(text, max) {
  if (text.length <= max) return text
  const cut = text.slice(0, max - 1)
  const lastSpace = cut.lastIndexOf(' ')
  return `${cut.slice(0, lastSpace > 20 ? lastSpace : cut.length).replace(/[,;:.\s]+$/, '')}…`
}

const ORIGIN = SITE.origin

const person = {
  '@type': 'Person',
  name: SITE.name,
  jobTitle: 'AI systems engineer',
  url: ORIGIN,
  sameAs: [SITE.github, SITE.linkedin, SITE.signhify],
  knowsAbout: [
    'AI systems',
    'LLM integration',
    'Cloudflare Workers',
    'D1',
    'TypeScript',
    'Python',
    'React',
    'SaaS architecture',
  ],
}

/** @type {Head} */
export const HOME_HEAD = {
  path: '/',
  title: 'Piyush Raj Singh — AI systems engineer and product builder',
  description:
    `Portfolio of Piyush Raj Singh: ${PROJECTS.length} shipped projects across AI systems, SaaS, fintech and edtech, verified with tests against the deployed build.`,
  jsonLd: {
    '@context': 'https://schema.org',
    '@graph': [
      person,
      {
        '@type': 'ProfilePage',
        name: `${SITE.name} — AI systems engineer`,
        url: `${ORIGIN}/`,
        about: { '@type': 'Person', name: SITE.name },
        mainEntity: person,
      },
    ],
  },
}

/** @type {Head} */
export const WORK_HEAD = {
  path: '/projects',
  title: `Work — ${PROJECTS.length} projects, ${PROJECTS.filter((p) => p.live).length} live | Piyush Raj Singh`,
  description:
    'AI systems, multi-tenant SaaS, fintech, edtech, marketing funnels and business sites. Filter by discipline or search a technology.',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Work — Piyush Raj Singh',
    url: `${ORIGIN}/projects`,
    isPartOf: { '@type': 'WebSite', name: SITE.name, url: ORIGIN },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: PROJECTS.length,
      itemListElement: PROJECTS.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: project.name,
        url: `${ORIGIN}/projects/${project.slug}`,
      })),
    },
  },
}

/** @type {Head} */
export const RESUMES_HEAD = {
  path: '/resumes',
  title: 'Résumé centre — six ATS profiles | Piyush Raj Singh',
  description:
    'Six role-specific, ATS-friendly resumes: AI systems, full-stack, frontend, backend, performance marketing and a general profile. PDF and DOCX.',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Résumé centre — Piyush Raj Singh',
    url: `${ORIGIN}/resumes`,
    isPartOf: { '@type': 'WebSite', name: SITE.name, url: ORIGIN },
  },
}

/** @type {Head} */
export const ABOUT_HEAD = {
  path: '/about',
  title: 'About — Piyush Raj Singh, AI systems engineer',
  description:
    'How Piyush Raj Singh builds: AI as a component, verification against the deployed build, and no claim that is not in the record.',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: 'About — Piyush Raj Singh',
    url: `${ORIGIN}/about`,
    mainEntity: person,
  },
}

/** @type {Head} */
export const NOT_FOUND_HEAD = {
  path: '/404',
  title: 'Page not found | Piyush Raj Singh',
  description: 'That address does not exist on this site.',
  noindex: true,
}

/**
 * @param {string} slug
 * @returns {Head | null}
 */
export function projectHead(slug) {
  const project = PROJECTS.find((p) => p.slug === slug)
  if (!project) return null
  return {
    path: `/projects/${project.slug}`,
    title: clip(`${project.name} — ${project.tagline}`, 62),
    description: clip(project.summary, 158),
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: project.name,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description: clip(project.summary, 300),
      url: project.live ?? project.repo ?? `${ORIGIN}/projects/${project.slug}`,
      ...(project.apk ? { downloadUrl: project.apk } : {}),
      author: person,
      isPartOf: { '@type': 'WebSite', name: SITE.name, url: ORIGIN },
    },
  }
}

/**
 * @param {string} path
 * @returns {Head}
 */
export function headFor(path) {
  if (path === '/') return HOME_HEAD
  if (path === '/projects') return WORK_HEAD
  if (path === '/resumes') return RESUMES_HEAD
  if (path === '/about' || path === '/resume') return ABOUT_HEAD
  if (path.startsWith('/projects/')) {
    const found = projectHead(path.slice('/projects/'.length))
    if (found) return found
  }
  return NOT_FOUND_HEAD
}

/** Every indexable route, in sitemap priority order. */
export function allRoutes() {
  return [
    { path: '/', priority: '1.0' },
    { path: '/projects', priority: '0.9' },
    ...PROJECTS.map((p) => ({ path: `/projects/${p.slug}`, priority: '0.7' })),
    { path: '/resumes', priority: '0.9' },
    { path: '/about', priority: '0.8' },
  ]
}
