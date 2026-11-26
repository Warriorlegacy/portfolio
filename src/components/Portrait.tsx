import { useRef, useState } from 'react'
import { PROJECTS } from '../data/projects.js'

export default function Portrait({
  tag = `${PROJECTS.length} projects shipped`,
}: {
  tag?: string
}) {
  const [failed, setFailed] = useState(false)
  const frame = useRef<HTMLDivElement | null>(null)

  const onMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (event.pointerType !== 'mouse') return
    const el = frame.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width - 0.5
    const py = (event.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `rotateY(${px * 7}deg) rotateX(${-py * 7}deg)`
  }

  const onLeave = () => {
    const el = frame.current
    if (el) el.style.transform = ''
  }

  return (
    <figure className="portrait" data-parallax="portrait">
      <div
        className="portrait__frame"
        ref={frame}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
      >
        <div className="portrait__media">
          {failed ? (
            <div className="portrait__fallback" aria-hidden="true">
              <span>PRS</span>
            </div>
          ) : (
            <img
              src="/images/piyush-profile.jpg"
              alt="Portrait of Piyush Raj Singh"
              width={1019}
              height={1112}
              loading="eager"
              decoding="async"
              onError={() => setFailed(true)}
            />
          )}
          <span className="portrait__tag">
            <i className="dot-live" aria-hidden="true" />
            {tag}
          </span>
          <figcaption className="portrait__caption">
            <span>Piyush Raj Singh</span>
            <span>AI systems engineer</span>
          </figcaption>
        </div>
      </div>
    </figure>
  )
}
