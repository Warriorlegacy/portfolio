const fs = require('fs')
const catalogue = JSON.parse(fs.readFileSync('.shots/catalogue.json', 'utf8'))

const METRICS = {
  quoteflow: [['Unit tests', '19/19'], ['Smoke tests', '45/45'], ['Roles', '6']],
  'hireflow-lite': [['Smoke tests', '95/95'], ['Browser tests', '7/7'], ['Unit tests', '8/8']],
  'localrank-studio': [['Unit tests', '33/33'], ['Smoke tests', '10/10'], ['Roles', '4']],
  appointmentflow: [['Tests', '49'], ['Smoke tests', '24/24'], ['Roles', '4']],
  coachingos: [['Tenancy', 'Per centre'], ['Deploy', 'Workers + D1'], ['Mirror', 'Netlify']],
  creativeops: [['Deploy', 'Workers + D1'], ['Demo data', 'Synthetic'], ['Roles', '3']],
  docudesk: [['Deploy', 'Workers + D1'], ['State', 'Intake → review'], ['Tenancy', 'Per client']],
  leadpulse: [['Coverage', 'CI verified'], ['Hosting', 'Node service'], ['Scope', 'Agency']],
}

const ENFORCED = {
  quoteflow: [
    'GST dual mode: CGST and SGST for intra-state supply, IGST across states, with integer paise arithmetic throughout.',
    'Quote revisions are append-only snapshots. Editing produces a new version instead of overwriting the approved one.',
    'Digital approval records the customer IP and timestamp against the version they accepted.',
    'Technicians are scoped to their own jobs and receive HTTP 403 on invoice and ledger routes.',
    'Payments arrive as recorded offline receipts with serialised numbers and a reconciled balance.',
    'CSV exports escape leading formula characters so a spreadsheet cannot execute cell content.',
  ],
  'hireflow-lite': [
    'Passwords are derived with PBKDF2 over Web Crypto and sessions are httpOnly cookies.',
    'Every state change writes to an audit log that chains each entry to the hash of the previous one.',
    'Stage history is append-only; a candidate cannot be moved backwards without a recorded reason.',
    'Resumes are private. The candidate portal uses an expiring hashed token, noindex and no-referrer.',
    'Retention rules run on a schedule and anonymise candidates past their window.',
    'CSV import and export escape formula characters on the way in and on the way out.',
  ],
  'localrank-studio': [
    'The crawler is bounded and refuses loopback, RFC1918 addresses, cloud metadata endpoints and redirects that resolve to private ranges.',
    'Health scoring is deterministic, so the same page produces the same number twice.',
    'Local presence is checked against a fixed ten-point list rather than a subjective review.',
    'Issued client reports are immutable.',
    'Tenant isolation is enforced below the route layer, not in the view.',
    'CSV exports strip formula prefixes.',
  ],
  appointmentflow: [
    'Availability is calculated server-side from capacity, schedules and booked intervals.',
    'Booking requests carry an idempotency key, so a retried submission cannot create a second appointment.',
    'Cancellation and rescheduling write a new record instead of mutating the original booking.',
    'Owner, admin, receptionist and staff each see a different surface, enforced on the route.',
    'Private customer fields are masked outside the booking owner scope.',
    'The shell is a PWA with an offline read state rather than an offline write queue.',
  ],
  coachingos: [
    'Every record is scoped to a centre, and cross-tenant reads are rejected at the query layer.',
    'Class schedules are stored as intervals, so overlaps are detectable rather than implied by a timetable view.',
    'Student and fee records are separated so a fee change does not rewrite attendance history.',
  ],
  creativeops: [
    'Experiments store the hypothesis before results, so an outcome cannot be reinterpreted after the fact.',
    'Campaign and creative records stay linked, which keeps a metric traceable to the asset that moved it.',
    'Owner, analyst and viewer roles see different read and write surfaces.',
  ],
  docudesk: [
    'A document moves through explicit intake and review states, so upload is not treated as completion.',
    'Client work is tracked separately from the documents that started it.',
    'Tenant scope is applied to every document query.',
  ],
  leadpulse: [
    'Response time is derived from stored timestamps rather than a typed field.',
    'Lead state transitions are recorded, so a lead cannot be marked replied without a reply event.',
    'The service runs under continuous integration rather than a manual release.',
  ],
}

const out = catalogue.map((p) => ({
  ...p,
  metrics: (METRICS[p.slug] || []).map(([label, value]) => ({ label, value })),
  enforced: ENFORCED[p.slug] || [],
}))

fs.writeFileSync('.shots/projects-final.json', JSON.stringify(out, null, 2))
console.log('ok', out.length)
