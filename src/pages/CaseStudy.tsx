import { PROJECTS, getProject } from '../data/projects.js'
import { ArrowLeft, ArrowUpRight } from '../components/Icons'
import { ExternalLink, Link } from '../lib/router'

export default function CaseStudy({ slug }: { slug: string }) {
  const project = getProject(slug)

  if (!project) {
    return (
      <main>
        <div className="shell empty">
          <h1>That project does not exist</h1>
          <p className="secondary" style={{ marginTop: 12 }}>
            The address may be out of date.
          </p>
          <div className="hero__actions">
            <Link to="/projects" className="link-arrow">
              <ArrowLeft />
              All projects
            </Link>
          </div>
        </div>
      </main>
    )
  }

  const index = PROJECTS.findIndex((p) => p.slug === project.slug)
  const prev = index > 0 ? PROJECTS[index - 1] : null
  const next = index < PROJECTS.length - 1 ? PROJECTS[index + 1] : null

  return (
    <main>
      <div className="shell">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/projects">Work</Link>
          <span aria-hidden="true">/</span>
          <span>{project.name}</span>
        </nav>

        <header className="study__head">
          <div>
            <h1>{project.name}</h1>
            <p className="study__tagline">{project.tagline}</p>
          </div>
          <div className="study__actions">
            {project.live ? (
              <ExternalLink href={project.live} className="btn btn--primary">
                Live site
                <ArrowUpRight />
              </ExternalLink>
            ) : null}
            {project.repo ? (
              <ExternalLink href={project.repo} className="btn btn--ghost">
                Source
                <ArrowUpRight />
              </ExternalLink>
            ) : null}
            {project.apk ? (
              <ExternalLink href={project.apk} className="btn btn--ghost">
                Android APK
                <ArrowUpRight />
              </ExternalLink>
            ) : null}
          </div>
        </header>

        <div className="study__body">
          <div>
            <div className="prose">
              <p>{project.summary}</p>
            </div>

            {project.enforced.length > 0 ? (
              <section className="block">
                <p className="block__label">What the implementation enforces</p>
                <ul className="enforced">
                  {project.enforced.map((item, i) => (
                    <li key={item}>
                      <span aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {project.enforced.length === 0 ? (
              <section className="block">
                <p className="block__label">Scope</p>
                <p className="secondary" style={{ fontSize: 15, lineHeight: 1.65 }}>
                  {project.live
                    ? 'Deployed and publicly reachable at the address in the sidebar.'
                    : 'Built and verified locally. There is no public deployment for this project, so no demo link is listed.'}
                </p>
              </section>
            ) : null}
          </div>

          <aside className="aside">
            <div className="panel">
              <div className="panel__head">
                {project.metrics.length > 0 ? 'Verification' : 'Details'}
              </div>
              {project.metrics.length > 0 ? (
                <div className="figures">
                  {project.metrics.map((metric) => (
                    <div className="figure" key={metric.label}>
                      <b>{metric.value}</b>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>
              ) : null}
              <dl className="meta-list">
                <div>
                  <dt>Category</dt>
                  <dd>{project.category}</dd>
                </div>
                <div>
                  <dt>Year</dt>
                  <dd>2026</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd>{project.live ? 'Live' : 'Built'}</dd>
                </div>
              </dl>
            </div>

            <div className="panel">
              <div className="panel__head">Stack</div>
              <div className="stacklist">
                {project.tech.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <nav className="pager" aria-label="Project navigation">
          <div>
            {prev ? (
              <Link to={`/projects/${prev.slug}`}>
                <small>Previous</small>
                <strong>{prev.name}</strong>
              </Link>
            ) : null}
          </div>
          <div>
            {next ? (
              <Link to={`/projects/${next.slug}`}>
                <small>Next</small>
                <strong>{next.name}</strong>
              </Link>
            ) : null}
          </div>
        </nav>
      </div>
    </main>
  )
}
