import { chromium } from 'playwright'
import { readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const roots = [
  'C:/Users/Piyush/Downloads/Telegram Desktop',
  'C:/Users/Piyush/Pictures',
  'C:/Users/Piyush/OneDrive/Pictures',
]
const files = []
for (const r of roots) {
  try {
    for (const f of readdirSync(r)) {
      if (/\.(jpg|jpeg|png|webp)$/i.test(f)) {
        const p = join(r, f)
        const st = statSync(p)
        if (st.size > 30000) files.push(p)
      }
    }
  } catch {}
}

const browser = await chromium.launch()
const page = await browser.newPage()
const results = []
for (const f of files) {
  const url = 'file:///' + f.replace(/\\/g, '/').replace(/ /g, '%20')
  try {
    const r = await page.evaluate(async (src) => {
      const img = new Image()
      img.src = src
      await img.decode()
      const c = document.createElement('canvas')
      c.width = 40
      c.height = 40
      const ctx = c.getContext('2d')
      ctx.drawImage(img, 0, 0, 40, 40)
      const d = ctx.getImageData(0, 0, 40, 40).data
      const px = (x, y) => {
        const i = (y * 40 + x) * 4
        return [d[i], d[i + 1], d[i + 2]]
      }
      const corners = [px(1, 1), px(38, 1), px(1, 38), px(38, 38)]
      const avg = corners.reduce((a, c) => [a[0] + c[0] / 4, a[1] + c[1] / 4, a[2] + c[2] / 4], [0, 0, 0])
      return { w: img.naturalWidth, h: img.naturalHeight, avg: avg.map(Math.round) }
    }, url)
    const [R, G, B] = r.avg
    const yellow = R > 170 && G > 150 && B < 110
    results.push({ f, ...r, yellow })
  } catch (e) {
    // skip undecodable
  }
}
await browser.close()
console.log('scanned', results.length)
for (const r of results.filter((x) => x.yellow)) console.log('YELLOW', r.f, r.w + 'x' + r.h, r.avg.join(','))
console.log('--- portrait-ish aspect + bright corners ---')
for (const r of results.filter((x) => !x.yellow && x.w > 600).slice(0, 12)) console.log(r.f, r.w + 'x' + r.h, r.avg.join(','))
