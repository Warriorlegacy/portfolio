import { useEffect, useState, type CSSProperties, type ReactNode } from 'react'

const NAV_EVENT = 'portfolio:navigate'

function normalize(path: string) {
  if (!path) return '/'
  const trimmed = path.replace(/\/+$/, '')
  return trimmed === '' ? '/' : trimmed
}

export function navigate(to: string) {
  const next = normalize(to)
  if (next === normalize(window.location.pathname)) {
    window.scrollTo(0, 0)
    return
  }
  window.history.pushState({}, '', next)
  window.dispatchEvent(new Event(NAV_EVENT))
  window.scrollTo(0, 0)
}

export function usePath() {
  const [path, setPath] = useState(() => normalize(window.location.pathname))

  useEffect(() => {
    const sync = () => setPath(normalize(window.location.pathname))
    window.addEventListener('popstate', sync)
    window.addEventListener(NAV_EVENT, sync)
    return () => {
      window.removeEventListener('popstate', sync)
      window.removeEventListener(NAV_EVENT, sync)
    }
  }, [])

  return path
}

type LinkProps = {
  to: string
  children: ReactNode
  className?: string
  style?: CSSProperties
  'aria-label'?: string
}

export function Link({ to, children, className, ...rest }: LinkProps) {
  return (
    <a
      href={to}
      className={className}
      onClick={(event) => {
        if (event.defaultPrevented) return
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
        if (event.button !== 0) return
        event.preventDefault()
        navigate(to)
      }}
      {...rest}
    >
      {children}
    </a>
  )
}

export function ExternalLink({
  href,
  children,
  className,
  label,
}: {
  href: string
  children: ReactNode
  className?: string
  label?: string
}) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {children}
    </a>
  )
}
