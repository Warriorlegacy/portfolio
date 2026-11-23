import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initMotion(): () => void {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const revealTargets = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
  let observer: IntersectionObserver | null = null

  if (!reduced && revealTargets.length) {
    for (const el of revealTargets) el.dataset.hidden = 'true'

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.removeAttribute('data-hidden')
          observer?.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.05 },
    )

    for (const el of revealTargets) observer.observe(el)
  }

  if (reduced) {
    return () => observer?.disconnect()
  }

  const ctx = gsap.context(() => {
    const headline = gsap.utils.toArray<HTMLElement>('.line-mask > span')
    if (headline.length) {
      gsap.from(headline, {
        yPercent: 115,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.09,
      })
    }

    const hero = document.querySelector('.hero')
    if (hero) {
      gsap.to('[data-parallax="portrait"]', {
        yPercent: -7,
        ease: 'none',
        scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 0.6 },
      })

      gsap.to('.hero__field', {
        yPercent: 9,
        ease: 'none',
        scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
      })
    }
  })

  ScrollTrigger.refresh()

  return () => {
    observer?.disconnect()
    ctx.revert()
  }
}
