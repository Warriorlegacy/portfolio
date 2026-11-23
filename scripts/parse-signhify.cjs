const fs = require('fs')
const file = 'C:/Users/Piyush/.local/share/kilo/tool-output/tool_1df1906cb0017uyx3TuOr7NHfQ'
const html = fs.readFileSync(file, 'utf8')
const marker = '===== https://signhify.dpdns.org/projects ====='
const page = html.slice(html.indexOf(marker))

const h3 = /<h3 class="font-display text-lg font-semibold leading-tight">([^<]+)(?:<!-- -->)?\s*<span[^>]*>·\s*(?:<!-- -->)?([^<]+)<\/span><\/h3><\/div><p class="text-sm[^"]*">([^<]+)<\/p><div class="flex flex-wrap gap-1.5">([\s\S]*?)<\/div>/g
let m
const rows = []
while ((m = h3.exec(page))) {
  const techs = [...m[4].matchAll(/>([^<>]+)<\/span>/g)].map((x) => x[1].trim()).filter(Boolean)
  rows.push({ name: m[1].trim(), category: m[2].trim(), description: m[3].trim(), tech: techs })
}
console.log('cards:', rows.length)
fs.writeFileSync('.shots/signhify-projects.json', JSON.stringify(rows, null, 2))
for (const r of rows) console.log(`- ${r.name} [${r.category}] :: ${r.tech.join(', ')}\n  ${r.description}`)
