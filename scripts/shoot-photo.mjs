import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'
mkdirSync('D:/portfolio/.shots', { recursive: true })
const browser = await chromium.launch()
for (const [name, path, width, height] of [
  ['photo-home', '/', 1440, 1000],
  ['photo-about', '/about', 1440, 1000],
  ['photo-home-mobile', '/', 390, 844],
]) {
  const page = await browser.newPage({ viewport: { width, height } })
  await page.goto('http://localhost:4173' + path, { waitUntil: 'networkidle' })
  await page.waitForTimeout(900)
  await page.screenshot({ path: `D:/portfolio/.shots/${name}.png`, fullPage: name !== 'photo-home' })
  await page.close()
  console.log('shot', name)
}
await browser.close()
