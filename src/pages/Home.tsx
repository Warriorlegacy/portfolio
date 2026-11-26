import {
  BHARAT_ECOSYSTEM,
  BHARAT_HUB,
  CAPABILITIES,
  PROJECTS,
  SITE,
  WORKERS_D1_COUNT,
} from '../data/projects.js'
import DepthField from '../components/DepthField'
import Portrait from '../components/Portrait'
import { SectionHead } from '../components/SectionHead'
import { ArrowRight, ArrowUpRight } from '../components/Icons'
import { ExternalLink, Link } from '../lib/router'

const HOME_PICKS = [
  'upi-smart-collect',
  'signhify',
  'veripay',
  'signhify-ai',
  'auditmind-ai',
  'quoteflow',
  'hireflow-lite',
  'gymflow',
  'autoreels-ai',
]

const selected = HOME_PICKS.map((slug) => PROJECTS.find((p) => p.slug === slug)).filter(
  (p): p is (typeof PROJECTS)[number] => Boolean(p),
)

const liveCount = PROJECTS.filter((p) => p.live).length
const aiCount = PROJECTS.filter((p) => p.group === 'ai').length

export default function Home() {
  return (
    <main>
      <section className="hero">
        <DepthField />
        <div className="shell hero__grid">
          <div>
            <p className="eyebrow">Hello, I am Piyush Raj Singh</p>
            <h1>
              <span className="line-mask">
                <span>Building intelligent</span>
              </span>
              <span className="line-mask">
                <span>systems, and engineering</span>
              </span>
              <span className="line-mask">
                <span>what comes next</span>
              </span>
            </h1>
            <p className="hero__lede">
              From AI applications and autonomous workflows to multi-tenant SaaS, I turn
              complex ideas into working software, then verify it with tests that run
              against the deployed build.
            </p>
            <div className="hero__actions">
              <Link to="/projects" className="btn btn--primary">
                Explore my work
                <ArrowRight />
              </Link>
              <Link to="/resumes" className="btn btn--ghost">
                Download a résumé
              </Link>
            </div>
            <p className="hero__status">
              <i className="dot-live" aria-hidden="true" />
              {SITE.availability} · {SITE.location}
            </p>
            <p className="hero__links">
              <span className="mono">Official site</span>
              <ExternalLink href={SITE.signhify}>signhify.dpdns.org</ExternalLink>
            </p>
          </div>

          <Portrait tag={`${PROJECTS.length} projects shipped`} />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHead index="01" title="Selected work" meta={`${selected.length} of ${PROJECTS.length}`} />
          <div className="grid-projects">
            {selected.map((project, index) => (
              <Link
                to={`/projects/${project.slug}`}
                className="card reveal"
                key={project.slug}
              >
                <div className="card__top">
                  <span className="card__index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="card__cat">{project.category}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <div className="card__foot">
                  <span className="card__tech">{project.tech.slice(0, 3).join(' · ')}</span>
                  <span className="card__live">
                    {project.live ? <i aria-hidden="true" /> : null}
                    {project.live ? 'Live' : 'Source'}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="hero__actions">
            <Link to="/projects" className="link-arrow">
              All {PROJECTS.length} projects
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="bharat">
        <div className="shell">
          <SectionHead
            index="02"
            title="Bharat ecosystem"
            meta={`${BHARAT_ECOSYSTEM.length} platforms on the edge`}
          />
          <div className="eco">
            <div className="eco__intro reveal">
              <p>
                Five Indian-market platforms that share one constraint: the boring parts
                have to work on a cheap phone with a weak connection. Invoices are
                checked against Section 43B(h), leaf disease is diagnosed on the canvas,
                contracts are audited without leaving the device, UPI money goes straight
                to the merchant, and resumes print in a column a parser can read.
              </p>
              <p>
                Workers, D1, Turnstile and Pages carry the whole estate at zero monthly
                cost. Every app ships as its own Android build, and the hub bundles all
                five for a single install.
              </p>
              <div className="hero__actions">
                {BHARAT_HUB ? (
                  <ExternalLink href={BHARAT_HUB.live ?? '#'} className="btn btn--primary">
                    Open the {BHARAT_HUB.name}
                    <ArrowUpRight />
                  </ExternalLink>
                ) : null}
                {BHARAT_HUB ? (
                  <ExternalLink href={BHARAT_HUB.apk ?? '#'} className="btn btn--ghost">
                    Unified Android APK
                  </ExternalLink>
                ) : null}
              </div>
            </div>

            <ul className="eco__list">
              {BHARAT_ECOSYSTEM.map((project, index) => (
                <li className="eco__row reveal" key={project.slug}>
                  <span className="mono eco__index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="eco__meta">
                    <Link to={`/projects/${project.slug}`}>
                      <strong>{project.name}</strong>
                    </Link>
                    <span>{project.tagline}</span>
                  </div>
                  <div className="eco__links">
                    <ExternalLink href={project.live ?? '#'} className="link-arrow">
                      Live
                      <ArrowUpRight />
                    </ExternalLink>
                    <ExternalLink href={project.apk ?? '#'} className="eco__apk">
                      APK
                    </ExternalLink>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHead index="03" title="What I work on" meta="Four disciplines" />
          <div className="capabilities">
            {CAPABILITIES.map((item) => (
              <div className="capability reveal" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="shell">
          <SectionHead index="04" title="About" meta="Engineer and product builder" />
          <div className="about">
            <div className="reveal">
              <p>
                I work where AI meets product: language models wired into software that
                someone can actually use. That means retrieval and agent workflows on one
                side, and schemas, role boundaries and money paths on the other.
              </p>
              <p>
                Most of what I ship is multi-tenant and edge-hosted. {WORKERS_D1_COUNT} products
                run on Cloudflare Workers with D1 behind them, each with authentication,
                tenant scope in the queries rather than the views, and a smoke suite that
                runs against production. The AI products take the opposite approach where
                it matters: contract review, clinical notes and code screening run in the
                browser so the document never leaves the device.
              </p>
            </div>
            <div className="figures-row reveal">
              <div className="figure">
                <b>{PROJECTS.length}</b>
                <span>Projects catalogued</span>
              </div>
              <div className="figure">
                <b>{liveCount}</b>
                <span>Live deployments</span>
              </div>
              <div className="figure">
                <b>{aiCount}</b>
                <span>AI products</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHead index="05" title="Contact" meta="Open to work" />
          <div className="contact">
            <div>
              <h2>Have an interesting idea? Let us build it</h2>
              <p>
                AI systems, platform engineering, or a product that needs to ship. Reach
                me on GitHub or LinkedIn, and the résumé centre has a profile for each
                kind of role.
              </p>
            </div>
            <div className="hero__actions" style={{ marginTop: 0 }}>
              <ExternalLink href={SITE.github} className="btn btn--primary">
                GitHub
                <ArrowUpRight />
              </ExternalLink>
              <ExternalLink href={SITE.linkedin} className="btn btn--ghost">
                LinkedIn
              </ExternalLink>
              <ExternalLink href={SITE.signhify} className="btn btn--ghost">
                Signhify
              </ExternalLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
