import { chromium } from 'playwright'
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } })
await page.goto('http://localhost:4173/', { waitUntil: 'networkidle' })
await page.waitForTimeout(700)
console.log('reveal total', await page.locator('.reveal').count())
console.log('hidden now', await page.locator('.reveal[data-hidden="true"]').count())
console.log('capability total', await page.locator('.capability').count())
console.log('cards total', await page.locator('.card').count())
console.log('body scrollHeight', await page.evaluate(() => document.body.scrollHeight))
console.log('doc scrollHeight', await page.evaluate(() => document.documentElement.scrollHeight))
await page.evaluate(async () => {
  const step = Math.round(window.innerHeight * 0.6)
  for (let y = 0; y < 5000; y += step) {
    window.scrollTo(0, y)
    await new Promise((r) => setTimeout(r, 120))
  }
})
await page.waitForTimeout(600)
console.log('hidden after scroll', await page.locator('.reveal[data-hidden="true"]').count())
await browser.close()
