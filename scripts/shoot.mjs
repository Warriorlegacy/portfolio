import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'

const out = 'D:/portfolio/.shots'
mkdirSync(out, { recursive: true })

const browser = await chromium.launch()

const shots = [
  ['home-desktop', '/', 1440, 1000],
  ['work-desktop', '/projects', 1440, 1000],
  ['resumes-desktop', '/resumes', 1440, 1000],
  ['case-desktop', '/projects/auditmind-ai', 1440, 1000],
  ['about-desktop', '/about', 1440, 1000],
  ['home-mobile', '/', 390, 844],
  ['work-mobile', '/projects', 390, 844],
  ['resumes-mobile', '/resumes', 390, 844],
]

for (const [name, path, width, height] of shots) {
  const page = await browser.newPage({ viewport: { width, height } })
  const errors = []
  page.on('pageerror', (e) => errors.push(String(e)))
  page.on('console', (m) => {
    if (m.type() === 'error') errors.push(m.text())
  })

  await page.goto('http://localhost:4173' + path, { waitUntil: 'networkidle' })
  await page.waitForTimeout(500)

  await page.evaluate(async () => {
    const step = Math.round(window.innerHeight * 0.6)
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo(0, y)
      await new Promise((r) => setTimeout(r, 110))
    }
    window.scrollTo(0, 0)
    await new Promise((r) => setTimeout(r, 300))
  })

  await page.waitForTimeout(600)
  await page.screenshot({ path: `${out}/${name}.png`, fullPage: true })

  if (errors.length) console.log('ERRORS', name, errors.slice(0, 3))
  await page.close()
  console.log('shot', name)
}

await browser.close()
console.log('done')
