import type { ReactNode } from 'react'
import { SITE } from '../data/projects.js'
import { ExternalLink, Link } from '../lib/router'

export function CalibrationRule() {
  return <div className="calibration-line" aria-hidden="true" />
}

const NAV = [
  { to: '/projects', label: 'Work', match: '/projects' },
  { to: '/resumes', label: 'Résumés', match: '/resumes' },
]

export function Header({ path }: { path: string }) {
  return (
    <header className="masthead">
      <div className="shell masthead__inner">
        <Link to="/" className="wordmark">
          {SITE.name}
          <span>AI systems</span>
        </Link>
        <nav aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              data-active={path === item.to || path.startsWith(`${item.match}/`) || undefined}
            >
              {item.label}
            </Link>
          ))}
          <ExternalLink href={SITE.signhify} label="Signhify studio site">
            Signhify
          </ExternalLink>
          <ExternalLink href={SITE.github} label="GitHub profile">
            <span className="nav-github">GitHub</span>
          </ExternalLink>
        </nav>
      </div>
      <CalibrationRule />
    </header>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__inner">
          <div>
            <p>
              {SITE.name} builds AI systems and software products. Every claim on this
              site traces to a live deployment, a repository, or a test suite that can be
              re-run.
            </p>
          </div>
          <div className="footer__links">
            <ExternalLink href={SITE.github}>GitHub</ExternalLink>
            <ExternalLink href={SITE.linkedin}>LinkedIn</ExternalLink>
            <ExternalLink href={SITE.signhify}>Signhify</ExternalLink>
            <Link to="/resumes">Résumés</Link>
          </div>
        </div>
        <div className="footer__sig">
          <span>{SITE.location}</span>
          <span>Updated November 2026</span>
          <span>Design system: unslop by @heydamir, CC BY 4.0</span>
        </div>
      </div>
    </footer>
  )
}

export function Page({ children }: { children: ReactNode }) {
  return <main>{children}</main>
}
