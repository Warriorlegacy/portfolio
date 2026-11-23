import { useMemo, useState } from 'react'
import { FILTERS, PROJECTS } from '../data/projects.js'
import { SectionHead } from '../components/SectionHead'
import { Link } from '../lib/router'

export default function Work() {
  const [group, setGroup] = useState('all')
  const [query, setQuery] = useState('')

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: PROJECTS.length }
    for (const p of PROJECTS) map[p.group] = (map[p.group] ?? 0) + 1
    return map
  }, [])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return PROJECTS.filter((p) => {
      const inGroup = group === 'all' || p.group === group
      if (!inGroup) return false
      if (!q) return true
      return (
        p.name.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.tech.join(' ').toLowerCase().includes(q)
      )
    })
  }, [group, query])

  return (
    <main>
      <section className="hero" style={{ paddingBottom: 32 }}>
        <div className="shell">
          <p className="eyebrow">Work · 2026</p>
          <h1 style={{ maxWidth: '22ch' }}>
            {PROJECTS.length} projects, {PROJECTS.filter((p) => p.live).length} of them live
          </h1>
          <p className="hero__lede">
            AI systems, SaaS products, fintech, edtech, marketing funnels and business
            sites. Filter by discipline, or search a technology.
          </p>
        </div>
      </section>

      <div className="filter-bar">
        <div className="shell filter-bar__inner">
          {FILTERS.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className="chip-btn"
              aria-pressed={group === filter.id}
              onClick={() => setGroup(filter.id)}
            >
              {filter.label}
              <span>{counts[filter.id] ?? 0}</span>
            </button>
          ))}
          <label className="search">
            <span className="mono muted" style={{ fontSize: 11 }}>
              Search
            </span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="React, AI, Supabase"
              aria-label="Search projects"
            />
          </label>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="shell">
          <div className="count-line">
            <span>
              {results.length} {results.length === 1 ? 'project' : 'projects'}
              {group === 'all' ? '' : ` · ${FILTERS.find((f) => f.id === group)?.label}`}
            </span>
            <span>{query ? `matching “${query}”` : 'sorted by recency'}</span>
          </div>

          {results.length === 0 ? (
            <div className="empty" style={{ paddingTop: 32 }}>
              <SectionHead index="00" title="No matches" meta="Try another term" />
              <p className="secondary">
                Nothing matches that filter and search together. Clear the search, or pick
                a different discipline.
              </p>
            </div>
          ) : (
            <div className="grid-projects">
              {results.map((project) => (
                <Link
                  to={`/projects/${project.slug}`}
                  className="card"
                  key={project.slug}
                >
                  <div className="card__top">
                    <span className="card__index">
                      {String(project.order).padStart(2, '0')}
                    </span>
                    <span className="card__cat">{project.category}</span>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <div className="card__foot">
                    <span className="card__tech">
                      {project.tech.slice(0, 3).join(' · ')}
                    </span>
                    <span className="card__live">
                      {project.live ? <i aria-hidden="true" /> : null}
                      {project.live ? 'Live' : 'Source'}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
