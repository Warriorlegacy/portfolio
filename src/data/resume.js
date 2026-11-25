// @ts-check

/**
 * Canonical resume source. Every PDF and DOCX in /public/resumes is generated
 * from this file by scripts/generate-resumes.mjs.
 *
 * Facts only: no invented employers, dates, degrees, certifications or metrics.
 */

export const CONTACT = {
  name: 'Piyush Raj Singh',
  location: 'India',
  github: 'https://github.com/Warriorlegacy',
  linkedin: 'https://www.linkedin.com/in/piyushraj-singh',
  portfolio: 'https://piyush-portfolio-ebon.vercel.app',
  studio: 'https://signhify.dpdns.org',
}

export const EXPERIENCE = {
  role: 'Independent software engineer and product builder',
  period: '2026 — present',
  lines: [
    'Built and shipped 53 catalogued products across AI systems, SaaS, fintech, edtech, marketing technology and business sites.',
    'Designed multi-tenant SaaS products and the 5-platform BharatOS suite on Cloudflare Workers with D1 behind them, including quote-to-cash invoicing, applicant tracking, appointment booking, document intake, UPI billing and local SEO auditing.',
    'Implemented authentication and tenancy: PBKDF2 over Web Crypto, double-submit CSRF, httpOnly sessions, role scoping on the route and tenant scope inside queries.',
    'Verified releases with smoke suites run against the deployed worker — 45/45 QuoteFlow, 95/95 HireFlow Lite, 10/10 LocalRank Studio, 24/24 AppointmentFlow, 28/28 UPI Smart Collect — alongside Vitest and Playwright suites.',
    'Built browser-side AI products that keep data on the device: contract redlining, clinical note structuring, Kubernetes incident triage, in-browser SQL analytics and code screening.',
  ],
}

/**
 * @typedef {Object} Variant
 * @property {string} id
 * @property {string} title
 * @property {string} focus
 * @property {string[]} targets
 * @property {string} summary
 * @property {Array<[string, string]>} skills
 * @property {string[]} projects
 * @property {string[]} keywords
 */

/** @type {Variant[]} */
export const VARIANTS = [
  {
    id: 'ai-systems-engineer',
    title: 'AI systems engineer',
    focus: 'AI Engineer · AI Systems Engineer · Agentic AI · AI Automation',
    targets: [
      'AI Engineer',
      'AI Systems Engineer',
      'Agentic AI Developer',
      'AI Automation Engineer',
    ],
    summary:
      'AI systems engineer who ships applications where a language model is a component, not the whole product. Fourteen AI products are live, covering contract redlining, clinical note structuring, Kubernetes incident triage, in-browser analytics and subtitle localisation. Works across TypeScript, Python, Cloudflare Workers, D1 and React, with models from OpenAI, Anthropic, Google and Groq behind a single provider-agnostic interface.',
    skills: [
      ['Models', 'OpenAI, Anthropic Claude, Google Gemini, Groq Llama, provider-agnostic routing, BYOK, structured outputs'],
      ['AI engineering', 'Agent orchestration, document retrieval, prompt and eval harnesses, in-browser inference with DuckDB-WASM and Pyodide, Web Speech, canvas metrology'],
      ['Languages', 'TypeScript, Python, JavaScript, SQL'],
      ['Backend', 'Node.js, Hono, Cloudflare Workers, D1, Supabase and Postgres, REST'],
      ['Frontend', 'React 18 and 19, Next.js, TanStack Start, Tailwind CSS'],
      ['Verification', 'Vitest, Playwright, smoke suites against the deployed build, TypeScript strict'],
    ],
    projects: [
      'auditmind-ai',
      'contractsentinel-ai',
      'synthmed-ai',
      'codevortex-sre',
      'signhify-ai',
      'datalightning-ai',
      'talentpulse-ai',
      'hyperlocalize-ai',
    ],
    keywords: [
      'AI engineer',
      'LLM',
      'agentic',
      'RAG',
      'orchestration',
      'TypeScript',
      'Python',
      'Cloudflare Workers',
      'D1',
      'React',
      'prompt engineering',
      'evals',
    ],
  },
  {
    id: 'full-stack-engineer',
    title: 'Full-stack engineer',
    focus: 'Full-Stack Developer · Software Engineer · React / Node.js',
    targets: [
      'Full-Stack Developer',
      'Software Engineer',
      'React / Next.js Developer',
      'Node.js Developer',
    ],
    summary:
      'Full-stack product engineer who owns a feature from schema to interface. Built eight multi-tenant SaaS products on Cloudflare Workers and D1, each with authentication, role scoping, migrations and a test suite, and shipped them with React front ends and server-rendered metadata.',
    skills: [
      ['Languages', 'TypeScript, Python, JavaScript, SQL'],
      ['Frontend', 'React 18 and 19, Next.js, TanStack Start, Vite, Tailwind CSS, accessible component design'],
      ['Backend', 'Hono, Node.js, Cloudflare Workers, REST, request validation, idempotency'],
      ['Data', 'D1 and SQLite, Postgres and Supabase, Drizzle ORM, migrations as code'],
      ['Security', 'PBKDF2 over Web Crypto, double-submit CSRF, httpOnly sessions, RBAC, audit hash chains, SSRF defence'],
      ['Delivery', 'GitHub Actions, Wrangler deploys, Vercel, Vitest, Playwright, production smoke suites'],
    ],
    projects: [
      'quoteflow',
      'hireflow-lite',
      'appointmentflow',
      'gymflow',
      'tuitiontrack',
      'signhify-crm',
    ],
    keywords: [
      'full-stack',
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
      'REST API',
      'Postgres',
      'D1',
      'Cloudflare Workers',
      'RBAC',
      'testing',
    ],
  },
  {
    id: 'frontend-engineer',
    title: 'Frontend engineer',
    focus: 'Frontend Developer · React Engineer · UI Engineer',
    targets: [
      'Frontend Developer',
      'React Developer',
      'Next.js Engineer',
      'UI Engineer',
    ],
    summary:
      'Front-end engineer focused on layout, motion and the parts of an interface people read first. Builds marketing sites, dashboards and product surfaces in React and TypeScript, with a bias toward readable type, honest contrast and interfaces that survive small screens.',
    skills: [
      ['Languages', 'TypeScript, JavaScript, HTML, CSS, SQL'],
      ['Frameworks', 'React 18 and 19, Next.js, TanStack Start, Vite, Astro'],
      ['Styling', 'Tailwind CSS, CSS custom properties, fluid type scales, responsive grids'],
      ['Motion', 'GSAP ScrollTrigger, CSS transitions, IntersectionObserver, prefers-reduced-motion fallbacks'],
      ['Quality', 'Semantic HTML, keyboard navigation, focus states, ARIA, contrast, Core Web Vitals'],
      ['Tooling', 'Playwright visual checks, Lighthouse, Vite build budgets'],
    ],
    projects: [
      'veepee-engineers',
      'gple-sports',
      'rahul-silk',
      'vip-telegram-funnel',
      'nebulapay',
      'examastra',
    ],
    keywords: [
      'frontend',
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind',
      'responsive',
      'accessibility',
      'animation',
      'performance',
    ],
  },
  {
    id: 'backend-engineer',
    title: 'Backend engineer',
    focus: 'Backend Developer · API Engineer · Platform Engineer',
    targets: [
      'Backend Developer',
      'Software Engineer',
      'API Developer',
      'Node.js / Python Engineer',
    ],
    summary:
      'Backend engineer working at the edge and in the database. Designs multi-tenant schemas, role boundaries and money paths that have to stay correct — GST invoicing with integer paise arithmetic, serialised receipts, append-only quote versions — then proves them with tests and a smoke run against the deployed worker.',
    skills: [
      ['Languages', 'TypeScript, Python, SQL, JavaScript'],
      ['Runtime', 'Cloudflare Workers, Node.js, Hono, Wrangler, Workers Static Assets'],
      ['Data', 'D1 and SQLite, Postgres and Supabase, Drizzle ORM, schema design, migrations, idempotent writes'],
      ['Security', 'PBKDF2, CSRF, session cookies, RBAC, tenant isolation in queries, SSRF-safe fetching, audit hash chains'],
      ['APIs', 'REST design, request validation, pagination, CSV import and export with formula escaping'],
      ['Operations', 'GitHub Actions, scheduled workflows, smoke suites against production, structured logging'],
    ],
    projects: [
      'quoteflow',
      'localrank-studio',
      'hireflow-lite',
      'appointmentflow',
      'jmd-bookings',
      'docudesk',
    ],
    keywords: [
      'backend',
      'API',
      'TypeScript',
      'Python',
      'Cloudflare Workers',
      'D1',
      'Postgres',
      'SQL',
      'auth',
      'multi-tenant',
      'testing',
    ],
  },
  {
    id: 'performance-marketing',
    title: 'Performance marketing',
    focus: 'Paid Acquisition · Growth · Digital Marketing',
    targets: [
      'Paid Acquisition Specialist',
      'Performance Marketer',
      'Digital Marketing Specialist',
      'Growth Marketer',
    ],
    summary:
      'Performance marketer who builds the landing pages, funnels and measurement himself. Runs paid traffic into high-conversion pages, audits local search presence, and connects campaign reporting to the creative that produced it, so an optimisation decision has a source.',
    skills: [
      ['Channels', 'Meta Ads, Google Ads, Telegram funnel distribution, social media management'],
      ['Conversion', 'Landing page architecture, offer framing, urgency mechanics, social proof, A/B iteration'],
      ['Search', 'Technical SEO audits, local presence checks, Schema.org, Core Web Vitals, sitemaps and metadata'],
      ['Measurement', 'Campaign reporting dashboards, creative-level attribution, cohort reads, UTM discipline'],
      ['Craft', 'Astro and Next.js landing builds, copy, responsive layout, form and event instrumentation'],
      ['Automation', 'Scheduled content pipelines, AI copy variation, ad-fraud filtering'],
    ],
    projects: [
      'localrank-studio',
      'cricket-king',
      'hari-cricket',
      'tennis-king-jackpot',
      'vip-telegram-funnel',
      'adgenesis-ai',
      'adshield-india',
      'creativeops',
    ],
    keywords: [
      'performance marketing',
      'Meta Ads',
      'Google Ads',
      'SEO',
      'CRO',
      'landing pages',
      'analytics',
      'funnels',
      'growth',
      'A/B testing',
    ],
  },
  {
    id: 'general-master',
    title: 'General profile',
    focus: 'AI, full-stack and product engineering',
    targets: [
      'Software Engineer',
      'Product Engineer',
      'AI Engineer',
      'Technical Product Builder',
    ],
    summary:
      'Engineer and product builder working across AI systems, full-stack development and go-to-market. Fifty-three shipped projects, including the Bharat 5x suite, multi-tenant SaaS products on Cloudflare Workers and fourteen AI applications, with the same standard applied to each: a working deployment, a written constraint list and tests that can be re-run.',
    skills: [
      ['Languages', 'TypeScript, Python, JavaScript, SQL, HTML, CSS'],
      ['Product', 'SaaS architecture, multi-tenancy, onboarding, billing paths, admin surfaces, documentation'],
      ['AI', 'LLM integration, agent workflows, retrieval, in-browser inference, evaluation'],
      ['Backend', 'Cloudflare Workers, Hono, Node.js, D1, Postgres, Supabase, REST'],
      ['Frontend', 'React, Next.js, TanStack Start, Tailwind CSS, motion and accessibility'],
      ['Growth', 'SEO, landing pages, paid funnels, campaign reporting'],
      ['Delivery', 'GitHub Actions, Wrangler, Vercel, Vitest, Playwright, smoke suites'],
    ],
    projects: [
      'signhify-ai',
      'quoteflow',
      'hireflow-lite',
      'gymflow',
      'auditmind-ai',
      'localrank-studio',
    ],
    keywords: [
      'software engineer',
      'product engineer',
      'AI',
      'full-stack',
      'TypeScript',
      'Python',
      'SaaS',
      'Cloudflare',
      'React',
      'SEO',
    ],
  },
]
