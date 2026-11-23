import { VARIANTS } from '../data/resume.js'
import { SectionHead } from '../components/SectionHead'
import { ArrowUpRight } from '../components/Icons'
import { Link } from '../lib/router'

export default function Resumes() {
  return (
    <main>
      <div className="shell">
        <header className="resume-hero">
          <p className="eyebrow">Résumé centre · Updated November 2026</p>
          <h1>The right profile, for the right opportunity</h1>
          <p>
            Six resumes, each written for a different role rather than renamed. Single
            column, standard headings, real text, no tables and no graphics, so an
            applicant tracking system reads them the way a person does. Every file is
            generated from one data source, so the PDF and DOCX always match.
          </p>
        </header>

        <section style={{ paddingBottom: 72 }}>
          <SectionHead index="00" title="Choose a profile" meta="6 variants · PDF + DOCX" />
          <div className="resume-grid">
            {VARIANTS.map((variant, index) => (
              <article className="resume-card" key={variant.id}>
                <div className="resume-card__head">
                  <h2>{variant.title}</h2>
                  <span className="resume-card__index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <p>{variant.focus}</p>
                <div className="targets">
                  {variant.targets.map((target) => (
                    <span className="chip" key={target}>
                      {target}
                    </span>
                  ))}
                </div>
                <div className="resume-card__actions">
                  <a
                    className="btn btn--primary btn--small"
                    href={`/resumes/${variant.id}.pdf`}
                    download
                  >
                    PDF
                    <ArrowUpRight size={12} />
                  </a>
                  <a
                    className="btn btn--ghost btn--small"
                    href={`/resumes/${variant.id}.docx`}
                    download
                  >
                    DOCX
                  </a>
                  <a
                    className="btn btn--ghost btn--small"
                    href={`/resumes/${variant.id}.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Preview
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <SectionHead index="01" title="How these are built" meta="ATS notes" />
          <div className="about">
            <div>
              <p>
                Each variant changes the summary, the skill grouping, the keyword set and
                the six projects it leads with. The experience and contact blocks are
                identical, because those are facts and facts do not change per
                application.
              </p>
              <p>
                Nothing here is invented: no employer names, no dates that were not in the
                project record, no certifications, no numeric proficiency scores. If a
                fact is missing from the record, it is missing from the resume.
              </p>
            </div>
            <div className="figures-row">
              <div className="figure">
                <b>{VARIANTS.length}</b>
                <span>Profile variants</span>
              </div>
              <div className="figure">
                <b>12</b>
                <span>Files published</span>
              </div>
              <div className="figure">
                <b>1</b>
                <span>Data source</span>
              </div>
            </div>
          </div>
          <div className="hero__actions">
            <Link to="/projects" className="link-arrow">
              See the work behind the resumes
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
