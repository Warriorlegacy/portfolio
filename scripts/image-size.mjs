import { chromium } from 'playwright'
const browser = await chromium.launch()
const page = await browser.newPage()
const url = 'file:///D:/portfolio/public/images/piyush-profile.jpg'
const size = await page.evaluate(async (src) => {
  const img = new Image()
  img.src = src
  await img.decode()
  return { w: img.naturalWidth, h: img.naturalHeight }
}, url)
console.log(size.w + 'x' + size.h, 'ratio', (size.w / size.h).toFixed(3))
await browser.close()
