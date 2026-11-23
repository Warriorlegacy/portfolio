import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { SITE, PROJECTS } from '../src/data/projects.js'
import { allRoutes, headFor, NOT_FOUND_HEAD } from '../src/lib/heads.js'

const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, '..')
const dist = join(root, 'dist')
const origin = SITE.origin

const shell = readFileSync(join(dist, 'index.html'), 'utf8')

const START = '<!-- SEO:START -->'
const END = '<!-- SEO:END -->'

function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function absolute(path) {
  return path === '/' ? `${origin}/` : `${origin}${path}`
}

function headHtml(head) {
  const url = absolute(head.path)
  const tags = [
    `<title>${esc(head.title)}</title>`,
    `<meta name="description" content="${esc(head.description)}" />`,
    `<meta name="author" content="${esc(SITE.name)}" />`,
    `<meta name="robots" content="${head.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'}" />`,
    `<meta name="theme-color" content="#F4F1E9" />`,
    `<link rel="canonical" href="${esc(url)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(SITE.name)}" />`,
    `<meta property="og:title" content="${esc(head.title)}" />`,
    `<meta property="og:description" content="${esc(head.description)}" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:image" content="${origin}/og-image.png" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(head.title)}" />`,
    `<meta name="twitter:description" content="${esc(head.description)}" />`,
    `<meta name="twitter:image" content="${origin}/og-image.png" />`,
  ]

  if (head.jsonLd) {
    tags.push(
      `<script type="application/ld+json">${JSON.stringify(head.jsonLd)}</script>`,
    )
  }

  return `${START}\n    ${tags.join('\n    ')}\n    ${END}`
}

function withHead(head) {
  const block = headHtml(head)
  const startIndex = shell.indexOf(START)
  const endIndex = shell.indexOf(END)

  if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) {
    throw new Error('SEO markers missing from dist/index.html')
  }

  return (
    shell.slice(0, startIndex) +
    block +
    shell.slice(endIndex + END.length)
  )
}

let written = 0

for (const route of allRoutes()) {
  const head = headFor(route.path)
  const html = withHead(head)
  const target =
    route.path === '/'
      ? join(dist, 'index.html')
      : join(dist, route.path.slice(1), 'index.html')

  mkdirSync(dirname(target), { recursive: true })
  writeFileSync(target, html, 'utf8')
  written += 1
}

writeFileSync(join(dist, '404.html'), withHead(NOT_FOUND_HEAD), 'utf8')

const today = new Date().toISOString().slice(0, 10)

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes()
  .map(
    (route) => `  <url>
    <loc>${absolute(route.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

writeFileSync(join(dist, 'sitemap.xml'), sitemap, 'utf8')

writeFileSync(
  join(dist, 'robots.txt'),
  `User-agent: *
Allow: /

Sitemap: ${origin}/sitemap.xml
`,
  'utf8',
)

const GROUPS = [
  ['AI systems', 'ai'],
  ['SaaS products', 'saas'],
  ['FinTech', 'fintech'],
  ['EdTech', 'edtech'],
  ['Marketing and funnels', 'marketing'],
  ['Business sites', 'business'],
  ['Developer tools', 'devtools'],
  ['Analytics', 'analytics'],
]

const grouped = GROUPS.map(([label, id]) => {
  const items = PROJECTS.filter((p) => p.group === id)
  if (!items.length) return ''
  return `## ${label}

${items
  .map(
    (p) =>
      `- [${p.name}](${absolute(`/projects/${p.slug}`)}): ${p.tagline}.${p.live ? ` Live at ${p.live}.` : ''}`,
  )
  .join('\n')}`
}).filter(Boolean)

const liveCount = PROJECTS.filter((p) => p.live).length

const llms = `# ${SITE.name}

> AI systems engineer and product builder. ${PROJECTS.length} catalogued projects, ${liveCount} of them publicly deployed, across AI systems, SaaS, fintech, edtech and marketing technology. Every claim on the site traces to a live deployment, a repository or a test suite.

## Pages

- [Home](${origin}/): who this is and what has shipped
- [Work](${origin}/projects): index of all ${PROJECTS.length} projects, filterable by discipline
- [Résumé centre](${origin}/resumes): six role-specific ATS resumes, PDF and DOCX
- [About](${origin}/about): how the work is built

${grouped.join('\n\n')}

## Contact

- GitHub: ${SITE.github}
- LinkedIn: ${SITE.linkedin}
- Studio: ${SITE.signhify}
`

writeFileSync(join(dist, 'llms.txt'), llms, 'utf8')

console.log(
  `seo: wrote ${written} route documents, sitemap.xml, robots.txt and llms.txt into dist/`,
)