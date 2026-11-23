import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'
import {
  AlignmentType,
  BorderStyle,
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
} from 'docx'

import { CONTACT, EXPERIENCE, VARIANTS } from '../src/data/resume.js'
import { PROJECTS } from '../src/data/projects.js'

const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, '..')
const outDir = join(root, 'public', 'resumes')

mkdirSync(outDir, { recursive: true })

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const projectLine = (slug) => {
  const p = PROJECTS.find((x) => x.slug === slug)
  if (!p) return null
  return {
    name: p.name,
    summary: p.summary,
    tech: p.tech.join(', '),
    link: p.live ?? p.repo ?? null,
  }
}

function buildHtml(variant) {
  const sections = []

  sections.push(`
    <header>
      <h1>${esc(CONTACT.name)}</h1>
      <p class="role">${esc(variant.title)}</p>
      <p class="contact">
        ${esc(CONTACT.location)} · ${esc(CONTACT.portfolio.replace('https://', ''))} ·
        github.com/Warriorlegacy · linkedin.com/in/piyushraj-singh
      </p>
    </header>`)

  sections.push(`
    <section>
      <h2>Professional summary</h2>
      <p>${esc(variant.summary)}</p>
    </section>`)

  sections.push(`
    <section>
      <h2>Skills</h2>
      ${variant.skills
        .map(
          ([label, value]) =>
            `<p class="skill"><strong>${esc(label)}:</strong> ${esc(value)}</p>`,
        )
        .join('')}
    </section>`)

  sections.push(`
    <section>
      <h2>Experience</h2>
      <p class="job"><strong>${esc(EXPERIENCE.role)}</strong> — ${esc(EXPERIENCE.period)}</p>
      <ul>
        ${EXPERIENCE.lines.map((line) => `<li>${esc(line)}</li>`).join('')}
      </ul>
    </section>`)

  const selected = variant.projects.map(projectLine).filter(Boolean)

  sections.push(`
    <section>
      <h2>Selected projects</h2>
      <ul class="projects">
        ${selected
          .map(
            (p) => `<li><strong>${esc(p.name)}</strong> — ${esc(p.summary)}${
              p.link ? ` <span class="link">${esc(p.link)}</span>` : ''
            }</li>`,
          )
          .join('')}
      </ul>
    </section>`)

  sections.push(`
    <section>
      <h2>Links</h2>
      <p>Portfolio: ${esc(CONTACT.portfolio)}<br />
      Studio: ${esc(CONTACT.studio)}<br />
      GitHub: ${esc(CONTACT.github)}<br />
      LinkedIn: ${esc(CONTACT.linkedin)}</p>
    </section>`)

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${esc(CONTACT.name)} — ${esc(variant.title)}</title>
<style>
  @page { size: A4; margin: 14mm 15mm; }
  * { box-sizing: border-box; }
  body {
    font-family: "Calibri", "Segoe UI", Arial, sans-serif;
    font-size: 10.4pt;
    line-height: 1.42;
    color: #111;
    margin: 0;
  }
  header { border-bottom: 1.2pt solid #111; padding-bottom: 8pt; margin-bottom: 12pt; }
  h1 { font-size: 20pt; margin: 0 0 2pt; letter-spacing: -0.2pt; }
  .role { font-size: 11pt; margin: 0 0 4pt; font-weight: 600; }
  .contact { font-size: 9.2pt; margin: 0; color: #222; }
  h2 {
    font-size: 10.6pt;
    text-transform: uppercase;
    letter-spacing: 0.6pt;
    margin: 12pt 0 5pt;
    border-bottom: 0.6pt solid #999;
    padding-bottom: 2pt;
  }
  p { margin: 0 0 5pt; }
  ul { margin: 0 0 5pt; padding-left: 14pt; }
  li { margin-bottom: 4pt; }
  .skill { margin-bottom: 3pt; }
  .job { margin-bottom: 4pt; }
  .projects li { margin-bottom: 5pt; }
  .link { color: #333; font-size: 8.8pt; }
  section { break-inside: auto; }
</style>
</head>
<body>
${sections.join('\n')}
</body>
</html>`
}

const borderless = {
  top: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
  bottom: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
  left: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
  right: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
}

function buildDocx(variant) {
  const children = []

  children.push(
    new Paragraph({
      children: [new TextRun({ text: CONTACT.name, bold: true, size: 40 })],
      spacing: { after: 40 },
    }),
    new Paragraph({
      children: [new TextRun({ text: variant.title, bold: true, size: 24 })],
      spacing: { after: 40 },
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: `${CONTACT.location} | ${CONTACT.portfolio} | ${CONTACT.github} | ${CONTACT.linkedin}`,
          size: 18,
          color: '333333',
        }),
      ],
      spacing: { after: 200 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: '111111' } },
    }),
  )

  const heading = (text) =>
    new Paragraph({
      children: [new TextRun({ text: text.toUpperCase(), bold: true, size: 20 })],
      spacing: { before: 220, after: 80 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: '999999' } },
    })

  children.push(heading('Professional summary'))
  children.push(
    new Paragraph({
      children: [new TextRun({ text: variant.summary, size: 21 })],
      spacing: { after: 100 },
      alignment: AlignmentType.LEFT,
    }),
  )

  children.push(heading('Skills'))
  for (const [label, value] of variant.skills) {
    children.push(
      new Paragraph({
        children: [
          new TextRun({ text: `${label}: `, bold: true, size: 21 }),
          new TextRun({ text: value, size: 21 }),
        ],
        spacing: { after: 60 },
      }),
    )
  }

  children.push(heading('Experience'))
  children.push(
    new Paragraph({
      children: [
        new TextRun({ text: EXPERIENCE.role, bold: true, size: 21 }),
        new TextRun({ text: ` — ${EXPERIENCE.period}`, size: 21 }),
      ],
      spacing: { after: 80 },
    }),
  )
  for (const line of EXPERIENCE.lines) {
    children.push(
      new Paragraph({
        children: [new TextRun({ text: line, size: 21 })],
        bullet: { level: 0 },
        spacing: { after: 60 },
      }),
    )
  }

  children.push(heading('Selected projects'))
  for (const slug of variant.projects) {
    const p = projectLine(slug)
    if (!p) continue
    children.push(
      new Paragraph({
        children: [new TextRun({ text: p.name, bold: true, size: 21 })],
        spacing: { before: 60, after: 20 },
      }),
      new Paragraph({
        children: [new TextRun({ text: p.summary, size: 20 })],
        spacing: { after: p.link ? 20 : 80 },
      }),
    )
    if (p.link) {
      children.push(
        new Paragraph({
          children: [new TextRun({ text: p.link, size: 18, color: '333333' })],
          spacing: { after: 80 },
        }),
      )
    }
  }

  children.push(heading('Links'))
  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: `Portfolio: ${CONTACT.portfolio}\nStudio: ${CONTACT.studio}\nGitHub: ${CONTACT.github}\nLinkedIn: ${CONTACT.linkedin}`,
          size: 19,
        }),
      ],
      border: borderless,
      spacing: { after: 60 },
    }),
  )

  return new Document({
    creator: CONTACT.name,
    title: `${CONTACT.name} — ${variant.title}`,
    description: 'ATS-friendly resume generated from the portfolio data source.',
    sections: [
      {
        properties: {
          page: { margin: { top: 720, right: 780, bottom: 720, left: 780 } },
        },
        children,
      },
    ],
  })
}

const browser = await chromium.launch()
const pdfPage = await browser.newPage()
let count = 0

for (const variant of VARIANTS) {
  const html = buildHtml(variant)

  await pdfPage.setContent(html, { waitUntil: 'load' })
  await pdfPage.pdf({
    path: join(outDir, `${variant.id}.pdf`),
    format: 'A4',
    printBackground: false,
    preferCSSPageSize: true,
  })

  const doc = buildDocx(variant)
  const buffer = await Packer.toBuffer(doc)
  writeFileSync(join(outDir, `${variant.id}.docx`), buffer)

  count += 1
  console.log(`resume: ${variant.id} (.pdf, .docx)`)
}

await browser.close()
console.log(`resumes: ${count} variants generated into public/resumes`)
