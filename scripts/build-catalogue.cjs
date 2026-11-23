const fs = require('fs')
const src = JSON.parse(fs.readFileSync('.shots/signhify-projects.json', 'utf8'))
const byName = new Map()
for (const p of src) {
  if (!byName.has(p.name)) byName.set(p.name, p)
  else {
    const prev = byName.get(p.name)
    prev.description = `${prev.description} ${p.description}`.slice(0, 260)
    prev.tech = [...new Set([...prev.tech, ...p.tech])]
  }
}

const rows = [
  ['HireFlow Lite', 'saas', 'Applicant tracking', 'SaaS', 'https://hireflow-lite.rajpiyush092.workers.dev', true],
  ['AppointmentFlow', 'saas', 'Booking and capacity', 'SaaS', 'https://appointmentflow.rajpiyush092.workers.dev', true],
  ['LocalRank Studio', 'marketing', 'Local SEO audits', 'Marketing', 'https://localrank-studio.rajpiyush092.workers.dev', true],
  ['QuoteFlow', 'fintech', 'Quote to cash', 'FinTech', 'https://quoteflow.rajpiyush092.workers.dev', true],
  ['DocuDesk', 'saas', 'Document intake', 'SaaS', 'https://docudesk.rajpiyush092.workers.dev', true],
  ['CreativeOps', 'analytics', 'Campaign reporting', 'Analytics', 'https://creativeops.rajpiyush092.workers.dev', true],
  ['CoachingOS', 'edtech', 'Coaching centre OS', 'EdTech', 'https://coachingos.rajpiyush092.workers.dev', true],
  ['LeadPulse', 'saas', 'Lead response', 'SaaS', null, true],
  ['AuditMind AI', 'ai', 'R&D tax qualification', 'AI', 'https://auditmind-ai-red.vercel.app', false],
  ['ContractSentinel AI', 'ai', 'Contract risk and redlining', 'AI', 'https://contractsentinel-ai.vercel.app', false],
  ['CodeVortex SRE', 'devtools', 'Incident triage', 'DevOps', 'https://codevortex-sre.vercel.app', false],
  ['SynthMed AI', 'ai', 'Clinical scribe', 'AI', 'https://synthmed-ai.vercel.app', false],
  ['AdGenesis AI', 'ai', 'Ad variation engine', 'AI', 'https://adgenesis-ai.vercel.app', false],
  ['TenderBot Global', 'ai', 'RFP intelligence', 'AI', 'https://tenderbot-global.vercel.app', false],
  ['QualiCheck AI', 'ai', 'Visual metrology', 'AI', 'https://qualicheck-ai.vercel.app', false],
  ['TalentPulse AI', 'ai', 'In-browser code screening', 'AI', 'https://talentpulse-ai-nine.vercel.app', false],
  ['DataLightning AI', 'ai', 'In-browser SQL analytics', 'AI', 'https://datalightning-ai.vercel.app', false],
  ['HyperLocalize AI', 'ai', 'Subtitle localisation', 'AI', 'https://hyperlocalize-ai.vercel.app', false],
  ['Signhify AI', 'ai', 'AI workspace and studio', 'AI', 'https://signhify-ai-web.vercel.app', false],
  ['NexusVIP — Sports Betting Exchange', 'fintech', 'Betting exchange', 'FinTech', 'https://nexusvipexch.vercel.app', false],
  ['Veepee Engineers', 'business', 'Engineering brand site', 'Business', null, false],
  ['GymFlow', 'saas', 'Gym operating system', 'SaaS', 'https://gymflow-saas.vercel.app', false],
  ['AutoReels AI', 'ai', 'Short-form video pipeline', 'AI', 'https://autoreels-ai.vercel.app', false],
  ['GigMind', 'saas', 'AI gig marketplace', 'SaaS', 'https://gigmind-gamma.vercel.app', false],
  ['TuitionTrack', 'edtech', 'Coaching operations', 'EdTech', 'https://tuitiontrack-app.vercel.app', false],
  ['Signhify CRM', 'saas', 'Pipeline and automations', 'SaaS', 'https://signhify-crm.vercel.app', false],
  ['Vibe Coding', 'devtools', 'AI coding environment', 'DevTools', 'https://vibe-coding-platform-neon-kappa.vercel.app', false],
  ['Sewarth Path', 'business', 'NGO brand and donations', 'Business', 'https://sewarthpathsansthanam.vercel.app', false],
  ['JMD Bookings', 'business', 'Slot booking', 'Business', 'https://jmd-online-book.vercel.app', false],
  ['GPLE Sports', 'business', 'Sports brand platform', 'Business', 'https://gplesports.vercel.app', false],
  ['Rahul Silk', 'business', 'Textile storefront', 'Business', 'https://rahul-silk.vercel.app', false],
  ['VIP Telegram Funnel', 'marketing', 'Paid traffic funnel', 'Marketing', 'https://vip-free-tennis-page.vercel.app', false],
  ['NebulaPay', 'fintech', 'Checkout layer', 'FinTech', null, false],
  ['Aurora Analytics', 'analytics', 'Product analytics', 'Analytics', null, false],
  ['SkillForge AI', 'edtech', 'Adaptive AI tutor', 'EdTech', null, false],
  ['AdShield India', 'ai', 'Ad fraud detection', 'AI', 'https://adshield-india.vercel.app', false],
  ['AutoTube', 'ai', 'YouTube automation', 'AI', 'https://autotube-signhify.vercel.app', false],
  ['Cricket King', 'marketing', 'Telegram funnel', 'Marketing', 'https://cricket-king-rahul.vercel.app', false],
  ['Hari Cricket', 'marketing', 'Cricket community page', 'Marketing', 'https://hari-cricket.vercel.app', false],
  ['Tennis King Jackpot', 'marketing', 'Sports picks page', 'Marketing', 'https://tennis-king-jackpot.vercel.app', false],
  ['ExamAstra', 'edtech', 'Exam preparation', 'EdTech', 'https://examastra.vercel.app', false],
]

const extra = [
  {
    slug: 'autogram',
    name: 'Autogram',
    group: 'ai',
    category: 'AI automation',
    tagline: 'Scheduled publishing pipeline',
    summary: 'A GitHub Actions pipeline that renders, stages and publishes short video to Instagram and YouTube, with content memory so a scheduled slot cannot republish an asset it already sent.',
    tech: ['Python', 'TypeScript', 'GitHub Actions', 'Remotion', 'Composio'],
    live: null,
    repo: 'https://github.com/Warriorlegacy/Autogram',
    featured: false,
  },
  {
    slug: 'signhify-cli',
    name: 'Signhify CLI',
    group: 'devtools',
    category: 'Developer tools',
    tagline: 'Document workflow in the terminal',
    summary: 'A command line surface over the Signhify document flow, so repetitive signing and template work can run in a script instead of a browser.',
    tech: ['TypeScript', 'Node.js', 'CLI'],
    live: 'https://signhify-cli.vercel.app',
    repo: null,
    featured: false,
  },
  {
    slug: 'signhify-studio',
    name: 'Signhify Studio',
    group: 'devtools',
    category: 'Showcase',
    tagline: 'Read-only automation showcase',
    summary: 'A static snapshot of the Signhify Autopilot dashboard. No signups, no writes, nothing behind the surface that a visitor can change.',
    tech: ['React', 'Static build', 'Vercel'],
    live: null,
    repo: 'https://github.com/Warriorlegacy/signhify-showcase',
    featured: false,
  },
  {
    slug: 'dxfvec',
    name: 'DXFVec',
    group: 'devtools',
    category: 'Developer tools',
    tagline: 'Vector work on DXF drawings',
    summary: 'Reads CAD exchange files and works with their geometry as vectors. Built for drawings that need measuring or reshaping outside a heavyweight CAD seat.',
    tech: ['TypeScript', 'Geometry', 'Web'],
    live: null,
    repo: 'https://github.com/Warriorlegacy/dxfvec',
    featured: false,
  },
]

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[—–]/g, ' ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const projects = rows.map((row, index) => {
  const [name, group, tagline, category, live, featured] = row
  const src = byName.get(name) || {}
  const tech = src.tech || []
  return {
    slug: slugify(name),
    name,
    group,
    category,
    tagline,
    summary: (src.description || '').replace(/&amp;/g, '&').replace(/&#x27;/g, "'").replace(/&quot;/g, '"'),
    tech,
    live,
    repo: null,
    featured,
    order: index + 1,
  }
})

for (const e of extra) {
  projects.push({ ...e, order: projects.length + 1 })
}

fs.writeFileSync('.shots/catalogue.json', JSON.stringify(projects, null, 2))
console.log('projects:', projects.length)
console.log('with live:', projects.filter((p) => p.live).length)
console.log('missing summary:', projects.filter((p) => !p.summary).map((p) => p.name).join(', '))
console.log('missing tech:', projects.filter((p) => !p.tech.length).map((p) => p.name).join(', '))
