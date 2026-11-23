import { chromium } from 'playwright'
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 390, height: 844 } })
await page.goto('http://localhost:4173/', { waitUntil: 'networkidle' })
await page.waitForTimeout(600)
console.log('height', await page.evaluate(() => document.documentElement.scrollHeight))
console.log('hidden before', await page.locator('.reveal[data-hidden="true"]').count())
await page.evaluate(async () => {
  const step = 400
  for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
    window.scrollTo(0, y)
    await new Promise((r) => setTimeout(r, 120))
  }
  window.scrollTo(0, 0)
  await new Promise((r) => setTimeout(r, 300))
})
await page.waitForTimeout(500)
console.log('hidden after', await page.locator('.reveal[data-hidden="true"]').count())
console.log('capability opacity', await page.locator('.capability').first().evaluate((el) => getComputedStyle(el).opacity))
await browser.close()
