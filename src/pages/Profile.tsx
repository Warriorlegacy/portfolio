import { AI_LIVE_COUNT, PROJECTS, SITE, WORKERS_D1_COUNT } from '../data/projects.js'
import Portrait from '../components/Portrait'
import { SectionHead } from '../components/SectionHead'
import { ArrowUpRight } from '../components/Icons'
import { ExternalLink, Link } from '../lib/router'

const SKILLS: Array<[string, string]> = [
  ['Languages', 'TypeScript, Python, JavaScript, SQL, HTML, CSS'],
  ['AI', 'OpenAI, Anthropic, Gemini, Groq, agent orchestration, retrieval, evals, in-browser inference'],
  ['Edge and backend', 'Cloudflare Workers, Hono, D1, Node.js, Supabase, Postgres, REST'],
  ['Front end', 'React 18 and 19, Next.js, TanStack Start, Vite, Tailwind CSS'],
  ['Security', 'PBKDF2, CSRF, httpOnly sessions, RBAC, tenant isolation, SSRF defence, audit hash chains'],
  ['Verification', 'Vitest, Playwright, production smoke suites, TypeScript strict'],
  ['Growth', 'Technical SEO, Schema.org, landing pages, paid funnels, campaign reporting'],
]

const TIMELINE = [
  {
    title: 'Independent software engineer and product builder',
    period: '2026 — present',
    body: `${PROJECTS.length} catalogued projects across AI systems, SaaS, fintech, edtech, marketing and business sites. ${WORKERS_D1_COUNT} products live on Cloudflare Workers and D1 (the Bharat 5x suite included), ${AI_LIVE_COUNT} AI applications with a working deployment, and the automation that ships and audits them.`,
  },
  {
    title: 'Signhify — studio and product platform',
    period: '2026 — present',
    body: 'The studio behind the AI product line: Signhify Scroll Studio, Signhify AI, the CRM, the CLI and the blueprint marketplace. Client work ranges from brand sites to booking systems.',
  },
]

export default function Profile() {
  const liveCount = PROJECTS.filter((p) => p.live).length

  return (
    <main>
      <section className="hero" style={{ paddingBottom: 40 }}>
        <div className="shell hero__grid">
          <div>
            <p className="eyebrow">About · {SITE.location}</p>
            <h1 style={{ maxWidth: '18ch' }}>Engineer first, product builder by habit</h1>
            <p className="hero__lede">
              I build AI systems and the software around them: multi-tenant APIs, auth and
              tenancy boundaries, money paths that have to stay correct, and interfaces
              people can read. {liveCount} of the {PROJECTS.length} projects catalogued
              here are live.
            </p>
            <div className="hero__actions">
              <ExternalLink href={SITE.github} className="btn btn--primary">
                GitHub
                <ArrowUpRight />
              </ExternalLink>
              <Link to="/resumes" className="btn btn--ghost">
                Résumés
              </Link>
            </div>
          </div>
          <Portrait tag="Piyush Raj Singh" />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHead index="01" title="How I work" meta="Three rules" />
          <div className="about">
            <div>
              <p>
                A model is a component, not a product. Every AI product here has a real
                surface around it: state, permissions, error paths, and a way to check the
                output before it reaches someone who depends on it.
              </p>
              <p>
                Verification is part of the build, not a step after it. The SaaS products
                run smoke suites against the deployed worker, not a local build, because
                the deployed thing is what a customer touches.
              </p>
              <p>
                If a fact is not in the record, it does not go on the page. That rule
                applies to project claims, to the résumés, and to the numbers on this
                site.
              </p>
            </div>
            <div className="figures-row">
              <div className="figure">
                <b>{PROJECTS.length}</b>
                <span>Projects</span>
              </div>
              <div className="figure">
                <b>{liveCount}</b>
                <span>Live</span>
              </div>
              <div className="figure">
                <b>{WORKERS_D1_COUNT}</b>
                <span>Cloudflare SaaS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHead index="02" title="Experience" meta="Verified roles only" />
          <ul className="enforced">
            {TIMELINE.map((item, index) => (
              <li key={item.title}>
                <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <span>
                  <strong style={{ fontWeight: 500, color: 'var(--text)' }}>
                    {item.title}
                  </strong>
                  <span className="mono muted" style={{ display: 'block', fontSize: 11, margin: '4px 0 8px' }}>
                    {item.period}
                  </span>
                  {item.body}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHead index="03" title="Skills" meta="Grouped by discipline" />
          <dl className="meta-list" style={{ padding: 0 }}>
            {SKILLS.map(([label, value]) => (
              <div key={label} style={{ padding: '14px 0' }}>
                <dt style={{ minWidth: 150 }}>{label}</dt>
                <dd style={{ textAlign: 'right', maxWidth: '62%', whiteSpace: 'normal' }}>
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  )
}
