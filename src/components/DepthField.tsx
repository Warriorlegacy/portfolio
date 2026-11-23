import { useEffect, useRef } from 'react'

type P = { x: number; y: number; z: number; drift: number }

export default function DepthField() {
  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let width = 0
    let height = 0
    let dpr = 1
    let points: P[] = []
    let frame = 0
    let running = true

    const build = () => {
      const rect = canvas.getBoundingClientRect()
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = width < 700 ? 34 : 74
      points = Array.from({ length: count }, () => ({
        x: (Math.random() - 0.5) * 1.9,
        y: (Math.random() - 0.5) * 1.9,
        z: 0.12 + Math.random() * 0.88,
        drift: 0.00006 + Math.random() * 0.00016,
      }))
    }

    const project = (p: P) => {
      const scale = Math.min(width, height) * 0.92
      return {
        sx: width / 2 + (p.x / p.z) * scale * 0.34,
        sy: height / 2 + (p.y / p.z) * scale * 0.34,
        r: Math.max(0.7, 2.1 / p.z),
        a: Math.min(1, 0.14 + (1 - p.z) * 0.6),
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      for (const p of points) {
        const { sx, sy, r, a } = project(p)
        if (sx < -60 || sx > width + 60 || sy < -60 || sy > height + 60) continue
        ctx.beginPath()
        ctx.arc(sx, sy, r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(97, 223, 255, ${a * 0.55})`
        ctx.fill()
      }

      for (let i = 0; i < points.length; i += 1) {
        const a = project(points[i])
        for (let j = i + 1; j < points.length; j += 1) {
          const b = project(points[j])
          const dx = a.sx - b.sx
          const dy = a.sy - b.sy
          const d = Math.hypot(dx, dy)
          if (d > 110) continue
          ctx.beginPath()
          ctx.moveTo(a.sx, a.sy)
          ctx.lineTo(b.sx, b.sy)
          ctx.strokeStyle = `rgba(155, 163, 180, ${(1 - d / 110) * 0.09})`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }
    }

    const step = () => {
      for (const p of points) {
        p.z -= p.drift * 16
        if (p.z < 0.1) {
          p.z = 1
          p.x = (Math.random() - 0.5) * 1.9
          p.y = (Math.random() - 0.5) * 1.9
        }
      }
      draw()
      if (running) frame = requestAnimationFrame(step)
    }

    build()
    draw()
    if (!reduced) frame = requestAnimationFrame(step)

    const onResize = () => {
      build()
      draw()
    }

    const onVisibility = () => {
      if (document.hidden) {
        running = false
        cancelAnimationFrame(frame)
      } else if (!reduced) {
        running = true
        frame = requestAnimationFrame(step)
      }
    }

    window.addEventListener('resize', onResize)
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      running = false
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return <canvas ref={ref} className="hero__field" aria-hidden="true" />
}
