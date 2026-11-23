import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const { PDFParse } = require('pdf-parse')

const parser = new PDFParse({ data: readFileSync('public/resumes/ai-systems-engineer.pdf') })
const result = await parser.getText()
const text = result.text || ''
console.log('pages:', result.total ?? '?', 'chars:', text.length)
for (const probe of ['Piyush Raj Singh', 'Professional summary', 'Experience', 'Cloudflare Workers', 'Selected projects']) {
  console.log(probe, '->', text.toLowerCase().includes(probe.toLowerCase()) ? 'OK' : 'MISSING')
}
console.log('--- first 200 chars ---')
console.log(text.slice(0, 200).replace(/\n{2,}/g, '\n'))
await parser.destroy()
