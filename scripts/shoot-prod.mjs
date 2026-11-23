import { chromium } from 'playwright'
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } })
const errors = []
page.on('pageerror', (e) => errors.push(String(e)))
page.on('console', (m) => m.type() === 'error' && errors.push(m.text()))

for (const [name, path] of [['prod-home', '/'], ['prod-resumes', '/resumes'], ['prod-work', '/projects']]) {
  await page.goto('https://piyush-portfolio-ebon.vercel.app' + path, { waitUntil: 'networkidle' })
  await page.waitForTimeout(500)
  await page.evaluate(async () => {
    const step = Math.round(window.innerHeight * 0.6)
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo(0, y)
      await new Promise((r) => setTimeout(r, 100))
    }
    window.scrollTo(0, 0)
    await new Promise((r) => setTimeout(r, 250))
  })
  await page.waitForTimeout(500)
  await page.screenshot({ path: `D:/portfolio/.shots/${name}.png`, fullPage: true })
  console.log('shot', name)
}
console.log('console errors:', errors.length ? errors.slice(0, 5) : 'none')
await browser.close()
