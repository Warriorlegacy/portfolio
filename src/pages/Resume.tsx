import { PROJECTS, SITE } from '../data/projects'
import { SectionHead } from '../components/SectionHead'
import { ExternalLink, Link } from '../lib/router'

const EXPERIENCE = [
  {
    role: 'Independent engineer',
    meta: '2026 — present · Contract and product work',
    points: [
      'Shipped eight multi-tenant SaaS products on Cloudflare Workers and D1: QuoteFlow, HireFlow Lite, LocalRank Studio, AppointmentFlow, CoachingOS, CreativeOps, DocuDesk and LeadPulse.',
      'Built the auth and tenancy layer: PBKDF2 over Web Crypto, double-submit CSRF, httpOnly sessions, role scoping at the route, and tenant scope applied inside queries.',
      'Wrote a bounded crawler and outbound fetch paths with SSRF defence that refuses loopback, RFC1918 addresses and cloud metadata endpoints.',
      'Verified deployments with smoke suites run against the live worker: 45/45 QuoteFlow, 95/95 HireFlow Lite, 10/10 LocalRank Studio, 24/24 AppointmentFlow.',
      'Automated publishing and auditing with GitHub Actions workflows that hold credentials in CI and keep content memory so a scheduled slot cannot repost an asset.',
    ],
  },
]

const SKILLS = [
  ['Languages', 'TypeScript, JavaScript, Python, SQL'],
  ['Edge runtime', 'Cloudflare Workers, Workers Static Assets, D1, Hono, Wrangler'],
  ['Front end', 'React 18, Vite, Tailwind CSS'],
  ['Data', 'D1 / SQLite, Drizzle ORM, sql.js'],
  ['Testing', 'Vitest, Playwright, production smoke suites, TypeScript strict'],
  ['Security', 'PBKDF2, CSRF, SSRF defence, RBAC, audit hash chains, httpOnly sessions'],
  ['Discovery', 'Schema.org JSON-LD, Open Graph, canonical URLs, sitemaps, llms.txt'],
  ['Delivery', 'GitHub Actions, Wrangler deploys, D1 migrations, Vercel'],
]

const SELECTED = ['quoteflow', 'hireflow-lite', 'localrank-studio', 'appointmentflow']
  .map((slug) => PROJECTS.find((p) => p.slug === slug)!)
  .filter(Boolean)

export default function Resume() {
  return (
    <main>
      <div className="shell">
        <header className="resume__head enter">
          <div>
            <h1>{SITE.name}</h1>
            <p>
              Backend and systems engineer. I build multi-tenant APIs, auth and tenancy
              boundaries, invoicing logic and scheduled automation on Cloudflare Workers
              and D1, and I verify each one with tests that run against the deployed build.
            </p>
          </div>
          <div className="hero__actions" style={{ marginTop: 0 }}>
            <ExternalLink href={SITE.github} className="btn btn--primary">
              GitHub
            </ExternalLink>
            <ExternalLink href={SITE.linkedin} className="btn btn--ghost">
              LinkedIn
            </ExternalLink>
          </div>
        </header>

        <section className="resume__grid">
          <p className="resume__label">Experience</p>
          <div>
            {EXPERIENCE.map((entry) => (
              <div className="entry" key={entry.role}>
                <h3>{entry.role}</h3>
                <p className="entry__meta">{entry.meta}</p>
                <ul>
                  {entry.points.map((point) => (
                    <li key={point}>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="resume__grid">
          <p className="resume__label">Selected work</p>
          <div>
            {SELECTED.map((project) => (
              <div className="entry" key={project.slug}>
                <h3>
                  <Link to={`/projects/${project.slug}`}>{project.name}</Link>
                </h3>
                <p className="entry__meta">
                  {project.metrics.map((m) => `${m.label} ${m.value}`).join(' · ')}
                </p>
                <ul>
                  {project.enforced.slice(0, 2).map((item) => (
                    <li key={item}>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="resume__grid">
          <p className="resume__label">Skills</p>
          <dl className="skill-groups">
            {SKILLS.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="resume__grid">
          <p className="resume__label">Verification</p>
          <div>
            <div className="entry">
              <ul>
                <li>
                  <span>
                    Every figure on this page comes from a project&rsquo;s own test suite
                    or a smoke run against the deployed worker. Nothing here is a
                    projection.
                  </span>
                </li>
                <li>
                  <span>
                    Full project detail, including the enforced behaviours for each
                    system, is on the{' '}
                    <Link to="/projects" className="link-arrow" style={{ display: 'inline' }}>
                      work index
                    </Link>
                    .
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="section" style={{ paddingBottom: 24 }}>
          <SectionHead index="—" title="Contact" meta="Open to work" />
          <p className="secondary" style={{ maxWidth: '60ch' }}>
            Reach me through GitHub or LinkedIn. Both are linked in the header of this
            page and in the footer below.
          </p>
        </div>
      </div>
    </main>
  )
}
