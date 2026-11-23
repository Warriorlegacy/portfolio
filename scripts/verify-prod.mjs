import { chromium } from 'playwright'
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } })
const res = await page.goto('https://piyush-portfolio-ebon.vercel.app/', { waitUntil: 'networkidle' })
console.log('page status', res.status())
const info = await page.evaluate(() => {
  const img = document.querySelector('.portrait__media img')
  return {
    imgPresent: Boolean(img),
    complete: img ? img.complete : null,
    natural: img ? `${img.naturalWidth}x${img.naturalHeight}` : null,
    signhifyLinks: Array.from(document.querySelectorAll('a')).filter((a) => a.href.includes('signhify.dpdns.org')).length,
    navLabels: Array.from(document.querySelectorAll('.masthead nav a')).map((a) => a.textContent.trim()),
  }
})
console.log(info)
await browser.close()
