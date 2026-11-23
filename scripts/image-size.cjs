const fs = require('fs')
const buf = fs.readFileSync('public/images/piyush-profile.jpg')
let i = 2
let dims = null
while (i < buf.length - 9) {
  if (buf[i] !== 0xff) { i++; continue }
  const marker = buf[i + 1]
  const len = buf.readUInt16BE(i + 2)
  if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
    dims = { h: buf.readUInt16BE(i + 5), w: buf.readUInt16BE(i + 7) }
    break
  }
  i += 2 + len
}
console.log(dims ? `${dims.w}x${dims.h} ratio ${(dims.w / dims.h).toFixed(3)}` : 'not found')
