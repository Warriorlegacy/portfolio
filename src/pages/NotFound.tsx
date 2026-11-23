import { ArrowLeft } from '../components/Icons'
import { Link } from '../lib/router'

export default function NotFound() {
  return (
    <main>
      <div className="shell empty">
        <p className="eyebrow">404</p>
        <h1>That address does not exist</h1>
        <p className="secondary" style={{ marginTop: 12, maxWidth: '44ch' }}>
          The page may have moved. The work index lists every project on this site.
        </p>
        <div className="hero__actions">
          <Link to="/projects" className="btn btn--primary">
            <ArrowLeft />
            All projects
          </Link>
          <Link to="/" className="btn btn--ghost">
            Home
          </Link>
        </div>
      </div>
    </main>
  )
}
