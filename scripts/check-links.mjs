import { PROJECTS } from '../src/data/projects.js'

const targets = PROJECTS.filter((p) => p.live).map((p) => ({ name: p.name, url: p.live }))
const results = []

async function check(t) {
  const started = Date.now()
  try {
    const res = await fetch(t.url, { redirect: 'follow', signal: AbortSignal.timeout(25000) })
    return { ...t, status: res.status, ms: Date.now() - started }
  } catch (e) {
    return { ...t, status: 'ERR', ms: Date.now() - started, note: String(e.message).slice(0, 60) }
  }
}

const queue = [...targets]
const workers = Array.from({ length: 6 }, async () => {
  while (queue.length) {
    const t = queue.shift()
    if (!t) break
    results.push(await check(t))
  }
})
await Promise.all(workers)

results.sort((a, b) => String(a.status).localeCompare(String(b.status)))
const bad = results.filter((r) => r.status !== 200)
console.log('checked', results.length, 'ok', results.length - bad.length, 'not-ok', bad.length)
for (const r of bad) console.log('  ', r.status, r.name, r.url, r.note ?? '')
