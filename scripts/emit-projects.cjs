const fs = require('fs')
const projects = JSON.parse(fs.readFileSync('.shots/projects-final.json', 'utf8'))

const header = `// @ts-check

export const SITE = {
  name: 'Piyush Raj Singh',
  first: 'Piyush',
  role: 'AI systems engineer',
  headline: 'Building intelligent systems. Engineering what comes next.',
  origin: 'https://piyush-portfolio-ebon.vercel.app',
  description:
    'Portfolio of Piyush Raj Singh, AI systems engineer and full-stack product builder. ' +
    'Forty-five shipped projects across AI systems, SaaS, fintech, edtech and marketing technology.',
  github: 'https://github.com/Warriorlegacy',
  linkedin: 'https://www.linkedin.com/in/piyushraj-singh',
  signhify: 'https://signhify.dpdns.org',
  location: 'India',
  availability: 'Open to AI and platform engineering roles',
}

export const FILTERS = [
  { id: 'all', label: 'All projects' },
  { id: 'ai', label: 'AI systems' },
  { id: 'saas', label: 'SaaS' },
  { id: 'fintech', label: 'FinTech' },
  { id: 'edtech', label: 'EdTech' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'business', label: 'Business sites' },
  { id: 'devtools', label: 'Developer tools' },
  { id: 'analytics', label: 'Analytics' },
]

/** @type {Array<{slug:string,name:string,group:string,category:string,tagline:string,summary:string,tech:string[],live:string|null,repo:string|null,featured:boolean,order:number,metrics:{label:string,value:string}[],enforced:string[]}>} */
export const PROJECTS = `

const body = JSON.stringify(projects, null, 2)

const footer = `

export const FEATURED = PROJECTS.filter((p) => p.featured)

/** @param {string} slug */
export function getProject(slug) {
  return PROJECTS.find((p) => p.slug === slug)
}

/** @param {string} group */
export function countGroup(group) {
  return group === 'all' ? PROJECTS.length : PROJECTS.filter((p) => p.group === group).length
}

export const CAPABILITIES = [
  {
    title: 'AI systems',
    body: 'Provider-agnostic LLM integration, retrieval, agent orchestration and in-browser inference. Shipped across fourteen AI products.',
  },
  {
    title: 'Product engineering',
    body: 'Full-stack TypeScript and Python. Cloudflare Workers and D1, Next.js and Supabase, schema and migrations versioned with the code.',
  },
  {
    title: 'Security',
    body: 'PBKDF2 over Web Crypto, double-submit CSRF, httpOnly sessions, SSRF-safe outbound requests, and audit logs chained by hash.',
  },
  {
    title: 'Verification',
    body: 'Vitest, Playwright and smoke suites that run against the deployed worker rather than a local build.',
  },
]
`

fs.writeFileSync('src/data/projects.js', header + body + footer)
console.log('written', (header + body + footer).length, 'bytes')
