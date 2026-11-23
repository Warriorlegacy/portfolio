import type { ReactNode } from 'react'

export function SectionHead({
  index,
  title,
  meta,
}: {
  index: string
  title: string
  meta?: ReactNode
}) {
  return (
    <div className="section-head">
      <span className="section-head__index">{index}</span>
      <h2>{title}</h2>
      {meta ? <span className="section-head__meta">{meta}</span> : null}
    </div>
  )
}
