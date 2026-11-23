const fs = require('fs')
const path = require('path')
const files = [
  'C:/Users/Piyush/.local/share/kilo/kilo.db',
  'C:/Users/Piyush/.local/share/kilo/kilo.db-wal',
]
const outDir = '.shots/candidates'
fs.mkdirSync(outDir, { recursive: true })

const sig = Buffer.from([0xff, 0xd8, 0xff])
const eoi = Buffer.from([0xff, 0xd9])
const seen = new Set()
let count = 0

for (const file of files) {
  if (!fs.existsSync(file)) {
    console.log('missing', file)
    continue
  }
  const buf = fs.readFileSync(file)
  console.log(file, buf.length)
  let i = 0
  while (true) {
    i = buf.indexOf(sig, i)
    if (i === -1) break
    const end = buf.indexOf(eoi, i + 3)
    if (end === -1) break
    const len = end + 2 - i
    if (len > 20000 && len < 8000000) {
      const slice = buf.subarray(i, end + 2)
      const key = `${len}:${slice.subarray(0, 64).toString('hex')}`
      if (!seen.has(key)) {
        seen.add(key)
        const name = `${outDir}/cand-${count}.jpg`
        fs.writeFileSync(name, slice)
        count += 1
      }
    }
    i = end + 2
  }
}
console.log('candidates', count)
