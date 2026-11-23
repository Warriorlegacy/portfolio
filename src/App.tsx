import { useEffect } from 'react'
import { usePath } from './lib/router'
import { headFor } from './lib/heads.js'
import { applyHead } from './lib/seo'
import { initMotion } from './lib/motion'
import { Footer, Header } from './components/Chrome'
import Home from './pages/Home'
import Work from './pages/Work'
import CaseStudy from './pages/CaseStudy'
import Resumes from './pages/Resumes'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'

export default function App() {
  const path = usePath()

  useEffect(() => {
    const head = headFor(path)
    applyHead({
      title: head.title,
      description: head.description,
      path: head.path,
      jsonLd: head.jsonLd,
      noindex: head.noindex,
    })
  }, [path])

  useEffect(() => {
    const cleanup = initMotion()
    return cleanup
  }, [path])

  let page = <NotFound />

  if (path === '/') {
    page = <Home />
  } else if (path === '/projects') {
    page = <Work />
  } else if (path === '/resumes') {
    page = <Resumes />
  } else if (path === '/resume' || path === '/about') {
    page = <Profile />
  } else if (path.startsWith('/projects/')) {
    const slug = path.slice('/projects/'.length)
    page = <CaseStudy slug={slug} />
  }

  return (
    <>
      <Header path={path} />
      {page}
      <Footer />
    </>
  )
}
