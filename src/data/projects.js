// @ts-check

export const SITE = {
  name: 'Piyush Raj Singh',
  first: 'Piyush',
  role: 'AI systems engineer',
  headline: 'Building intelligent systems. Engineering what comes next.',
  origin: 'https://piyush-portfolio-ebon.vercel.app',
  description:
    'Portfolio of Piyush Raj Singh, AI systems engineer and full-stack product builder. ' +
    'Shipped projects across AI systems, SaaS, fintech, edtech and marketing technology.',
  github: 'https://github.com/Warriorlegacy',
  linkedin: 'https://www.linkedin.com/in/piyushraj-singh',
  signhify: 'https://signhify.dpdns.org',
  location: 'India',
  availability: 'Open to AI and platform engineering roles',
}

export const FILTERS = [
  { id: 'all', label: 'All projects' },
  { id: 'ai', label: 'AI systems' },
  { id: 'saas', label: 'SaaS' },
  { id: 'fintech', label: 'FinTech' },
  { id: 'edtech', label: 'EdTech' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'business', label: 'Business sites' },
  { id: 'devtools', label: 'Developer tools' },
  { id: 'analytics', label: 'Analytics' },
]

/** @type {Array<{slug:string,name:string,group:string,category:string,tagline:string,summary:string,tech:string[],live:string|null,repo:string|null,apk?:string,bharat?:boolean,featured:boolean,order:number,metrics:{label:string,value:string}[],enforced:string[]}>} */
export const PROJECTS = [
  {
    "slug": "veripay",
    "name": "VeriPay",
    "group": "fintech",
    "category": "FinTech",
    "tagline": "Section 43B(h) compliance",
    "summary": "A B2B compliance and escrow workspace for Indian MSME invoices: the 15 or 45 day statutory clock on every bill, driver proof of delivery, and direct UPI settlement in one ledger.",
    "tech": ["Cloudflare Workers","Hono","D1","Turnstile","TypeScript"],
    "live": "https://veripay-os.rajpiyush092.workers.dev",
    "repo": null,
    "apk": "https://veripay-os.rajpiyush092.workers.dev/VeriPay-v1.0.0-android.apk",
    "bharat": true,
    "featured": true,
    "order": 0,
    "metrics": [
      {
        "label": "Statutory clock",
        "value": "15 / 45 days"
      },
      {
        "label": "Tax at risk",
        "value": "31.2%"
      },
      {
        "label": "Install",
        "value": "5.12 MB APK"
      }
    ],
    "enforced": [
      "The due date is computed from the invoice date: 15 days with no written agreement, 45 days with one, because Section 43B(h) turns on exactly that distinction.",
      "The exposure figure is shown as 31.2% of the disputed invoice value, with the 19.5% penal interest labelled as compounding rather than asserted as money already lost.",
      "Invoices are parsed in the browser from .pdf, .txt or .csv, so the supplier's document is not posted to a parsing service.",
      "The ledger records settlement; it does not claim a bank confirmation. A static UPI QR only opens a payment request.",
      "Proof of delivery is a shared link behind Turnstile, and the driver's pinned location and camera capture are attached to that invoice."
    ]
  },
  {
    "slug": "kisanpulse",
    "name": "KisanPulse",
    "group": "saas",
    "category": "AgriTech",
    "tagline": "Mandi arbitrage and leaf diagnosis",
    "summary": "An offline-first agri workspace: a camera leaf doctor that runs without a connection, and a 100 km mandi matrix ranked by net in-hand price after freight and cess.",
    "tech": ["WebAssembly","Canvas","Web Speech","Geolocation","Workers","D1"],
    "live": "https://kisanpulse-os.rajpiyush092.workers.dev",
    "repo": null,
    "apk": "https://kisanpulse-os.rajpiyush092.workers.dev/KisanPulse-v1.0.0-android.apk",
    "bharat": true,
    "featured": true,
    "order": 1,
    "metrics": [
      {
        "label": "Mandi radius",
        "value": "100 km"
      },
      {
        "label": "Locales",
        "value": "6"
      },
      {
        "label": "Install",
        "value": "5.11 MB APK"
      }
    ],
    "enforced": [
      "Leaf diagnosis reads raw canvas pixels in the browser, so the camera flow keeps working with the radio off.",
      "Mandi ranking uses net in-hand per quintal: modal price minus freight at ₹1.40 per km per quintal and the 1.5% APMC cess, not the headline quote.",
      "Distances come from the device's own GPS through a Haversine calculation rather than a server-side lookup.",
      "Lot volume changes the freight line, so 10, 160 and 500 quintal lots are priced against the same mandi table before a recommendation is made.",
      "The dispatch alert is a WhatsApp draft the farmer sends themselves; the app does not message a group on its own."
    ]
  },
  {
    "slug": "vakilstack",
    "name": "VakilStack",
    "group": "ai",
    "category": "LegalTech",
    "tagline": "In-memory contract audit",
    "summary": "A confidential contract auditor for Indian agreements that flags void clauses against the Contract Act, arbitration precedent and DPDP 2023 without uploading the document.",
    "tech": ["In-memory AST","Diff engine","Workers AI","TypeScript"],
    "live": "https://vakilstack-os.rajpiyush092.workers.dev",
    "repo": null,
    "apk": "https://vakilstack-os.rajpiyush092.workers.dev/VakilStack-v1.0.0-android.apk",
    "bharat": true,
    "featured": true,
    "order": 2,
    "metrics": [
      {
        "label": "Contract uploads",
        "value": "Zero"
      },
      {
        "label": "Audit basis",
        "value": "Named sections"
      },
      {
        "label": "Install",
        "value": "0.94 MB APK"
      }
    ],
    "enforced": [
      "Contract text is parsed in browser memory and never posted to a server, which is what makes the tool usable for privileged work.",
      "Post-termination non-competes are flagged as void under Section 27 of the Indian Contract Act 1872 instead of being marked as a style issue.",
      "The enforceability index names the sections that failed, so the score can be argued with rather than taken on faith.",
      "A sole-arbitrator appointment is tested against the Perkins Eastman position before the arbitration clause may pass.",
      "Export writes a clean agreement and a print view; the original stays untouched in memory and is not stored."
    ]
  },
  {
    "slug": "bharatstack",
    "name": "BharatStack",
    "group": "saas",
    "category": "E-Commerce",
    "tagline": "Zero-commission storefront",
    "summary": "A D2C storefront for Indian merchants where the money goes straight to the merchant's own UPI VPA, orders land on WhatsApp, and the catalog exports as an ONDC Beckn payload.",
    "tech": ["Beckn v1.0","Dynamic UPI QR","WhatsApp link","Workers"],
    "live": "https://bharatstack-os.rajpiyush092.workers.dev",
    "repo": null,
    "apk": "https://bharatstack-os.rajpiyush092.workers.dev/BharatStack-v1.0.0-android.apk",
    "bharat": true,
    "featured": false,
    "order": 3,
    "metrics": [
      {
        "label": "Commission",
        "value": "0%"
      },
      {
        "label": "Payments",
        "value": "Direct UPI"
      },
      {
        "label": "Install",
        "value": "5.11 MB APK"
      }
    ],
    "enforced": [
      "The buyer pays the merchant's own VPA, so the platform takes no commission and no gateway MDR on an order.",
      "Amounts are stored in integer paise and the UPI deep link carries the exact amount and INR as the currency.",
      "HSN codes and GST slabs are suggestions the merchant confirms before a product can be listed.",
      "The ONDC export writes a Beckn catalog payload; the app does not claim to be live on an ONDC network until a buyer app actually pulls that catalog.",
      "Orders leave as a structured WhatsApp message to the merchant; receiving it is not treated as payment confirmation."
    ]
  },
  {
    "slug": "placementforge",
    "name": "PlacementForge",
    "group": "edtech",
    "category": "EdTech",
    "tagline": "ATS resume compiler",
    "summary": "A single-column ATS resume compiler with a deterministic score against a pasted job description, a Google XYZ bullet rewriter and a voice mock interview scored on STAR structure.",
    "tech": ["Web Speech","TF-IDF scoring","Print CSS","Workers"],
    "live": "https://placementforge-os.rajpiyush092.workers.dev",
    "repo": null,
    "apk": "https://placementforge-os.rajpiyush092.workers.dev/PlacementForge-v1.0.0-android.apk",
    "bharat": true,
    "featured": false,
    "order": 4,
    "metrics": [
      {
        "label": "ATS score",
        "value": "Deterministic"
      },
      {
        "label": "Layout",
        "value": "Single column"
      },
      {
        "label": "Install",
        "value": "5.11 MB APK"
      }
    ],
    "enforced": [
      "The ATS score is term matching between the parsed resume and the pasted job description, so the same input always produces the same number.",
      "Skills, metrics density and formatting compliance each report their own figure; a profile with no content shows 0% rather than a flattering default.",
      "The resume prints in one column so the parser reads the same text a recruiter sees, and multi-column graphics are never offered as an option.",
      "Missing hard skills are listed by name, which is the part a candidate can act on tonight.",
      "Mock interviews use the browser microphone and speaker, and the transcript is scored on STAR structure locally."
    ]
  },
  {
    "slug": "bharat-os-hub",
    "name": "BharatOS Hub",
    "group": "devtools",
    "category": "Showcase",
    "tagline": "Launcher for the five platforms",
    "summary": "The launcher that links the five Bharat platforms and ships the suite as one Android build, so a reviewer can reach every app from a single install.",
    "tech": ["Cloudflare Workers","Capacitor","TypeScript"],
    "live": "https://billion-dollar-os.rajpiyush092.workers.dev",
    "repo": null,
    "apk": "https://billion-dollar-os.rajpiyush092.workers.dev/BharatOS-v1.0.0-android.apk",
    "bharat": true,
    "featured": false,
    "order": 5,
    "metrics": [
      {
        "label": "Platforms",
        "value": "5"
      },
      {
        "label": "Suite install",
        "value": "5.39 MB APK"
      },
      {
        "label": "Source of truth",
        "value": "One registry"
      }
    ],
    "enforced": [
      "The hub links each deployed Worker and its release APK; it does not host a second copy of any app.",
      "Per-app APK links are the files served from each Worker, so the install and the demo cannot drift apart.",
      "The suite build packages all five apps for offline demos while per-app installs stay available."
    ]
  },
  {
    "slug": "upi-smart-collect",
    "name": "UPI Smart Collect",
    "group": "fintech",
    "category": "FinTech",
    "tagline": "UPI QR, invoices and dues",
    "summary": "A free UPI QR and payment-link tool for Indian tutors, shops and freelancers, with invoice PDFs that carry the QR and a customer dues ledger that labels every manual entry as merchant-reported.",
    "tech": [
      "React 19",
      "Cloudflare Workers",
      "D1",
      "Vite",
      "Capacitor"
    ],
    "live": "https://upi-smart-collect-309944.freebuff.site",
    "repo": null,
    "featured": true,
    "order": 6,
    "metrics": [
      {
        "label": "Unit tests",
        "value": "28/28"
      },
      {
        "label": "Typecheck",
        "value": "clean"
      },
      {
        "label": "Surfaces",
        "value": "Web · PWA · APK"
      }
    ],
    "enforced": [
      "A static UPI QR only opens a payment request; the app never claims to have received or verified the money.",
      "Every manual ledger entry is labelled 'Marked received by merchant — not independently verified'.",
      "Provider verification stays disabled until a real signed webhook is configured and matched server-side.",
      "Bank and UPI CSV statement imports match against pending references by 12-digit UTR, invoice number, or unique outstanding amounts within 45 days.",
      "The payment collection queue drafts WhatsApp reminders with public pay links for merchants to send directly.",
      "No UPI PIN, OTP, card number or bank password is ever requested.",
      "The guest QR generator runs in the browser with no login and no server call.",
      "Fixed amounts are formatted in integer paise with two decimals in the UPI URI."
    ]
  },
  {
    "slug": "hireflow-lite",
    "name": "HireFlow Lite",
    "group": "saas",
    "category": "SaaS",
    "tagline": "Applicant tracking",
    "summary": "Privacy-conscious applicant tracking for startups and boutique recruiters — careers pages, private resumes, consent capture and an append-only hiring pipeline.",
    "tech": [
      "Cloudflare Workers",
      "Hono",
      "D1",
      "React 18"
    ],
    "live": "https://hireflow-lite.rajpiyush092.workers.dev",
    "repo": null,
    "featured": true,
    "order": 7,
    "metrics": [
      {
        "label": "Smoke tests",
        "value": "95/95"
      },
      {
        "label": "Browser tests",
        "value": "7/7"
      },
      {
        "label": "Unit tests",
        "value": "8/8"
      }
    ],
    "enforced": [
      "Passwords are derived with PBKDF2 over Web Crypto and sessions are httpOnly cookies.",
      "Every state change writes to an audit log that chains each entry to the hash of the previous one.",
      "Stage history is append-only; a candidate cannot be moved backwards without a recorded reason.",
      "Resumes are private. The candidate portal uses an expiring hashed token, noindex and no-referrer.",
      "Retention rules run on a schedule and anonymise candidates past their window.",
      "CSV import and export escape formula characters on the way in and on the way out."
    ]
  },
  {
    "slug": "appointmentflow",
    "name": "AppointmentFlow",
    "group": "saas",
    "category": "SaaS",
    "tagline": "Booking and capacity",
    "summary": "Booking and staff-capacity SaaS for small service businesses, with server-computed availability, rescheduling and ICS export.",
    "tech": [
      "React 18",
      "Vite",
      "Hono",
      "Cloudflare Workers"
    ],
    "live": "https://appointmentflow.rajpiyush092.workers.dev",
    "repo": null,
    "featured": true,
    "order": 8,
    "metrics": [
      {
        "label": "Tests",
        "value": "49"
      },
      {
        "label": "Smoke tests",
        "value": "24/24"
      },
      {
        "label": "Roles",
        "value": "4"
      }
    ],
    "enforced": [
      "Availability is calculated server-side from capacity, schedules and booked intervals.",
      "Booking requests carry an idempotency key, so a retried submission cannot create a second appointment.",
      "Cancellation and rescheduling write a new record instead of mutating the original booking.",
      "Owner, admin, receptionist and staff each see a different surface, enforced on the route.",
      "Private customer fields are masked outside the booking owner scope.",
      "The shell is a PWA with an offline read state rather than an offline write queue."
    ]
  },
  {
    "slug": "localrank-studio",
    "name": "LocalRank Studio",
    "group": "marketing",
    "category": "Marketing",
    "tagline": "Local SEO audits",
    "summary": "Technical website audits, a local SEO checklist and client reporting for agencies — with a crawler that refuses to touch private networks.",
    "tech": [
      "Cloudflare Workers",
      "Hono",
      "D1",
      "React"
    ],
    "live": "https://localrank-studio.rajpiyush092.workers.dev",
    "repo": null,
    "featured": true,
    "order": 9,
    "metrics": [
      {
        "label": "Unit tests",
        "value": "33/33"
      },
      {
        "label": "Smoke tests",
        "value": "10/10"
      },
      {
        "label": "Roles",
        "value": "4"
      }
    ],
    "enforced": [
      "The crawler is bounded and refuses loopback, RFC1918 addresses, cloud metadata endpoints and redirects that resolve to private ranges.",
      "Health scoring is deterministic, so the same page produces the same number twice.",
      "Local presence is checked against a fixed ten-point list rather than a subjective review.",
      "Issued client reports are immutable.",
      "Tenant isolation is enforced below the route layer, not in the view.",
      "CSV exports strip formula prefixes."
    ]
  },
  {
    "slug": "quoteflow",
    "name": "QuoteFlow",
    "group": "fintech",
    "category": "FinTech",
    "tagline": "Quote to cash",
    "summary": "Quote-to-cash for service businesses: versioned quotes, digital approval, field jobs and GST tax invoices with serialized receipts.",
    "tech": [
      "Cloudflare Workers",
      "Hono",
      "D1",
      "React"
    ],
    "live": "https://quoteflow.rajpiyush092.workers.dev",
    "repo": null,
    "featured": true,
    "order": 10,
    "metrics": [
      {
        "label": "Unit tests",
        "value": "19/19"
      },
      {
        "label": "Smoke tests",
        "value": "45/45"
      },
      {
        "label": "Roles",
        "value": "6"
      }
    ],
    "enforced": [
      "GST dual mode: CGST and SGST for intra-state supply, IGST across states, with integer paise arithmetic throughout.",
      "Quote revisions are append-only snapshots. Editing produces a new version instead of overwriting the approved one.",
      "Digital approval records the customer IP and timestamp against the version they accepted.",
      "Technicians are scoped to their own jobs and receive HTTP 403 on invoice and ledger routes.",
      "Payments arrive as recorded offline receipts with serialised numbers and a reconciled balance.",
      "CSV exports escape leading formula characters so a spreadsheet cannot execute cell content."
    ]
  },
  {
    "slug": "docudesk",
    "name": "DocuDesk",
    "group": "saas",
    "category": "SaaS",
    "tagline": "Document intake",
    "summary": "Secure document intake, review and client work tracking for teams that collect files from clients.",
    "tech": [
      "Cloudflare Workers",
      "Hono",
      "D1",
      "React"
    ],
    "live": "https://docudesk.rajpiyush092.workers.dev",
    "repo": null,
    "featured": true,
    "order": 11,
    "metrics": [
      {
        "label": "Deploy",
        "value": "Workers + D1"
      },
      {
        "label": "State",
        "value": "Intake → review"
      },
      {
        "label": "Tenancy",
        "value": "Per client"
      }
    ],
    "enforced": [
      "A document moves through explicit intake and review states, so upload is not treated as completion.",
      "Client work is tracked separately from the documents that started it.",
      "Tenant scope is applied to every document query."
    ]
  },
  {
    "slug": "creativeops",
    "name": "CreativeOps",
    "group": "analytics",
    "category": "Analytics",
    "tagline": "Campaign reporting",
    "summary": "Paid-campaign reporting and a creative-experiment workspace, with client-facing report portals.",
    "tech": [
      "Cloudflare Workers",
      "Hono",
      "D1",
      "React"
    ],
    "live": "https://creativeops.rajpiyush092.workers.dev",
    "repo": null,
    "featured": true,
    "order": 12,
    "metrics": [
      {
        "label": "Deploy",
        "value": "Workers + D1"
      },
      {
        "label": "Demo data",
        "value": "Synthetic"
      },
      {
        "label": "Roles",
        "value": "3"
      }
    ],
    "enforced": [
      "Experiments store the hypothesis before results, so an outcome cannot be reinterpreted after the fact.",
      "Campaign and creative records stay linked, which keeps a metric traceable to the asset that moved it.",
      "Owner, analyst and viewer roles see different read and write surfaces."
    ]
  },
  {
    "slug": "coachingos",
    "name": "CoachingOS",
    "group": "edtech",
    "category": "EdTech",
    "tagline": "Coaching centre OS",
    "summary": "An operating system for tuition and coaching centres — students, batches and class schedules for multiple centres in one place.",
    "tech": [
      "Cloudflare Workers",
      "Hono",
      "D1",
      "React"
    ],
    "live": "https://coachingos.rajpiyush092.workers.dev",
    "repo": null,
    "featured": true,
    "order": 13,
    "metrics": [
      {
        "label": "Tenancy",
        "value": "Per centre"
      },
      {
        "label": "Deploy",
        "value": "Workers + D1"
      },
      {
        "label": "Mirror",
        "value": "Netlify"
      }
    ],
    "enforced": [
      "Every record is scoped to a centre, and cross-tenant reads are rejected at the query layer.",
      "Class schedules are stored as intervals, so overlaps are detectable rather than implied by a timetable view.",
      "Student and fee records are separated so a fee change does not rewrite attendance history."
    ]
  },
  {
    "slug": "leadpulse",
    "name": "LeadPulse",
    "group": "saas",
    "category": "SaaS",
    "tagline": "Lead response",
    "summary": "A lead-response CRM for agencies and local service businesses — capture leads, track response times and run the follow-up workflow.",
    "tech": [
      "Node.js",
      "TypeScript"
    ],
    "live": null,
    "repo": null,
    "featured": true,
    "order": 14,
    "metrics": [
      {
        "label": "Coverage",
        "value": "CI verified"
      },
      {
        "label": "Hosting",
        "value": "Node service"
      },
      {
        "label": "Scope",
        "value": "Agency"
      }
    ],
    "enforced": [
      "Response time is derived from stored timestamps rather than a typed field.",
      "Lead state transitions are recorded, so a lead cannot be marked replied without a reply event.",
      "The service runs under continuous integration rather than a manual release."
    ]
  },
  {
    "slug": "auditmind-ai",
    "name": "AuditMind AI",
    "group": "ai",
    "category": "AI",
    "tagline": "R&D tax qualification",
    "summary": "Instant IRS Section 41 qualification engine with ASC 730 R&D wage allocation and automated audit risk redlining in the browser.",
    "tech": [
      "React 19",
      "Groq Llama-3.3",
      "jsPDF",
      "Canvas"
    ],
    "live": "https://auditmind-ai-red.vercel.app",
    "repo": null,
    "featured": false,
    "order": 15,
    "metrics": [],
    "enforced": []
  },
  {
    "slug": "contractsentinel-ai",
    "name": "ContractSentinel AI",
    "group": "ai",
    "category": "AI",
    "tagline": "Contract risk and redlining",
    "summary": "Autonomous contract risk assessment and non-destructive DOCX redlining with zero server data transfer.",
    "tech": [
      "React 19",
      "JSZip",
      "OOXML Parser",
      "Groq AI"
    ],
    "live": "https://contractsentinel-ai.vercel.app",
    "repo": null,
    "featured": false,
    "order": 16,
    "metrics": [],
    "enforced": []
  },
  {
    "slug": "codevortex-sre",
    "name": "CodeVortex SRE",
    "group": "devtools",
    "category": "DevOps",
    "tagline": "Incident triage",
    "summary": "Zero-latency incident triage engine converting messy Kubernetes stack traces into verified syntax-valid code diffs.",
    "tech": [
      "React 19",
      "AST Engine",
      "Groq AI",
      "Tailwind CSS v4"
    ],
    "live": "https://codevortex-sre.vercel.app",
    "repo": null,
    "featured": false,
    "order": 17,
    "metrics": [],
    "enforced": []
  },
  {
    "slug": "synthmed-ai",
    "name": "SynthMed AI",
    "group": "ai",
    "category": "AI",
    "tagline": "Clinical scribe",
    "summary": "Clinical scribe transforming raw patient dialogue into structured SOAP clinical notes with verified ICD-10 and CPT billing codes.",
    "tech": [
      "React 19",
      "Web Speech API",
      "Medical Ontology Engine",
      "Tailwind CSS"
    ],
    "live": "https://synthmed-ai.vercel.app",
    "repo": null,
    "featured": false,
    "order": 18,
    "metrics": [],
    "enforced": []
  },
  {
    "slug": "adgenesis-ai",
    "name": "AdGenesis AI",
    "group": "ai",
    "category": "AI",
    "tagline": "Ad variation engine",
    "summary": "Instantly generates 50+ optimized ad variations across Meta, Google, TikTok, and LinkedIn with dynamic ROAS budget allocation.",
    "tech": [
      "React 19",
      "Bandit Reinforcement Engine",
      "Recharts",
      "Tailwind CSS"
    ],
    "live": "https://adgenesis-ai.vercel.app",
    "repo": null,
    "featured": false,
    "order": 19,
    "metrics": [],
    "enforced": []
  },
  {
    "slug": "tenderbot-global",
    "name": "TenderBot Global",
    "group": "ai",
    "category": "AI",
    "tagline": "RFP intelligence",
    "summary": "Government contracting intelligence platform extracting RFP requirements, scoring win probabilities, and drafting compliant proposals.",
    "tech": [
      "React 19",
      "FAR Matrix Scanner",
      "Groq AI",
      "Tailwind CSS"
    ],
    "live": "https://tenderbot-global.vercel.app",
    "repo": null,
    "featured": false,
    "order": 20,
    "metrics": [],
    "enforced": []
  },
  {
    "slug": "qualicheck-ai",
    "name": "QualiCheck AI",
    "group": "ai",
    "category": "AI",
    "tagline": "Visual metrology",
    "summary": "In-browser computer vision metrology detecting microscopic micro-scratches, solder voids, and component misalignments at 60 FPS.",
    "tech": [
      "React 19",
      "HTML5 Canvas Metrology",
      "Web Workers",
      "Tailwind CSS"
    ],
    "live": "https://qualicheck-ai.vercel.app",
    "repo": null,
    "featured": false,
    "order": 21,
    "metrics": [],
    "enforced": []
  },
  {
    "slug": "talentpulse-ai",
    "name": "TalentPulse AI",
    "group": "ai",
    "category": "AI",
    "tagline": "In-browser code screening",
    "summary": "Executes candidate Python code directly in the browser via Pyodide WebAssembly with AST anti-cheat telemetry and code quality scoring.",
    "tech": [
      "React 19",
      "Pyodide WASM",
      "Monaco Editor",
      "Tailwind CSS"
    ],
    "live": "https://talentpulse-ai-nine.vercel.app",
    "repo": null,
    "featured": false,
    "order": 22,
    "metrics": [],
    "enforced": []
  },
  {
    "slug": "datalightning-ai",
    "name": "DataLightning AI",
    "group": "ai",
    "category": "AI",
    "tagline": "In-browser SQL analytics",
    "summary": "Ultra-fast SQL analytics processing million-row Parquet and CSV files in browser memory with natural language Text-to-SQL generation.",
    "tech": [
      "React 19",
      "DuckDB-WASM",
      "Recharts",
      "Tailwind CSS"
    ],
    "live": "https://datalightning-ai.vercel.app",
    "repo": null,
    "featured": false,
    "order": 23,
    "metrics": [],
    "enforced": []
  },
  {
    "slug": "hyperlocalize-ai",
    "name": "HyperLocalize AI",
    "group": "ai",
    "category": "AI",
    "tagline": "Subtitle localisation",
    "summary": "Localizes video subtitles across 12+ international markets with automated millisecond audio-timing preservation and cultural idiom adaptation.",
    "tech": [
      "React 19",
      "SRT Engine",
      "Web Audio API",
      "Tailwind CSS"
    ],
    "live": "https://hyperlocalize-ai.vercel.app",
    "repo": null,
    "featured": false,
    "order": 24,
    "metrics": [],
    "enforced": []
  },
  {
    "slug": "signhify-ai",
    "name": "Signhify AI",
    "group": "ai",
    "category": "AI",
    "tagline": "AI workspace and studio",
    "summary": "An AI workspace that learns how you work, remembers what matters, and improves with every interaction — 7 specialized agents, BYOK, open source. Signhify's own AI studio — a full-stack coding and product intelligence platform built to accelerate how we sh",
    "tech": [
      "Next.js",
      "TanStack",
      "Supabase",
      "Multi-provider AI",
      "TanStack Start",
      "Claude",
      "OpenAI"
    ],
    "live": "https://signhify-ai-web.vercel.app",
    "repo": null,
    "featured": false,
    "order": 25,
    "metrics": [],
    "enforced": []
  },
  {
    "slug": "nexusvip-sports-betting-exchange",
    "name": "NexusVIP — Sports Betting Exchange",
    "group": "fintech",
    "category": "FinTech",
    "tagline": "Betting exchange",
    "summary": "Enterprise peer-to-peer sports betting exchange with in-memory order matching, dynamic worst-case liability calculation, 5-tier agent downlines, and 1-tap Telegram Bot OTP verification.",
    "tech": [
      "React 18",
      "TypeScript",
      "Node.js",
      "Express"
    ],
    "live": "https://nexusvipexch.vercel.app",
    "repo": null,
    "featured": false,
    "order": 26,
    "metrics": [],
    "enforced": []
  },
  {
    "slug": "veepee-engineers",
    "name": "Veepee Engineers",
    "group": "business",
    "category": "Business",
    "tagline": "Engineering brand site",
    "summary": "Cinematic brand site for an engineering firm — services, capabilities and case work presented as a confident industrial portfolio.",
    "tech": [
      "TanStack Start",
      "Tailwind",
      "Lovable"
    ],
    "live": null,
    "repo": null,
    "featured": false,
    "order": 27,
    "metrics": [],
    "enforced": []
  },
  {
    "slug": "gymflow",
    "name": "GymFlow",
    "group": "saas",
    "category": "SaaS",
    "tagline": "Gym operating system",
    "summary": "Multi-tenant gym OS — memberships, attendance, billing and front-desk ops collapsed into one cinematic dashboard.",
    "tech": [
      "Next.js",
      "Supabase",
      "Stripe",
      "Tailwind"
    ],
    "live": "https://gymflow-saas.vercel.app",
    "repo": null,
    "featured": false,
    "order": 28,
    "metrics": [],
    "enforced": []
  },
  {
    "slug": "autoreels-ai",
    "name": "AutoReels AI",
    "group": "ai",
    "category": "AI",
    "tagline": "Short-form video pipeline",
    "summary": "Long-form video → publish-ready short-form reels. An AI pipeline that runs end-to-end with zero human edit.",
    "tech": [
      "Python",
      "ffmpeg",
      "OpenAI",
      "Whisper"
    ],
    "live": "https://autoreels-ai.vercel.app",
    "repo": null,
    "featured": false,
    "order": 29,
    "metrics": [],
    "enforced": []
  },
  {
    "slug": "gigmind",
    "name": "GigMind",
    "group": "saas",
    "category": "SaaS",
    "tagline": "AI gig marketplace",
    "summary": "AI-matched gig marketplace where freelancers and clients discover, scope and ship work in days.",
    "tech": [
      "Next.js",
      "Postgres",
      "Vercel AI SDK"
    ],
    "live": "https://gigmind-gamma.vercel.app",
    "repo": null,
    "featured": false,
    "order": 30,
    "metrics": [],
    "enforced": []
  },
  {
    "slug": "tuitiontrack",
    "name": "TuitionTrack",
    "group": "edtech",
    "category": "EdTech",
    "tagline": "Coaching operations",
    "summary": "All-in-one operations layer for coaching institutes — students, attendance, fees and parent reporting.",
    "tech": [
      "React",
      "Supabase",
      "Resend"
    ],
    "live": "https://tuitiontrack-app.vercel.app",
    "repo": null,
    "featured": false,
    "order": 31,
    "metrics": [],
    "enforced": []
  },
  {
    "slug": "signhify-crm",
    "name": "Signhify CRM",
    "group": "saas",
    "category": "SaaS",
    "tagline": "Pipeline and automations",
    "summary": "Our own pipeline engine — leads, deals, automations and AI follow-ups, powering every Signhify project.",
    "tech": [
      "Next.js",
      "Supabase",
      "n8n"
    ],
    "live": "https://signhify-crm.vercel.app",
    "repo": null,
    "featured": false,
    "order": 32,
    "metrics": [],
    "enforced": []
  },
  {
    "slug": "vibe-coding",
    "name": "Vibe Coding",
    "group": "devtools",
    "category": "DevTools",
    "tagline": "AI coding environment",
    "summary": "Prototype of an AI-native coding environment — the seed that grew into Signhify AI.",
    "tech": [
      "React",
      "Monaco",
      "Claude"
    ],
    "live": "https://vibe-coding-platform-neon-kappa.vercel.app",
    "repo": null,
    "featured": false,
    "order": 33,
    "metrics": [],
    "enforced": []
  },
  {
    "slug": "sewarth-path",
    "name": "Sewarth Path",
    "group": "business",
    "category": "Business",
    "tagline": "NGO brand and donations",
    "summary": "Brand and digital home for an NGO running campaigns, donations and community programs across India.",
    "tech": [
      "Next.js",
      "Razorpay"
    ],
    "live": "https://sewarthpathsansthanam.vercel.app",
    "repo": null,
    "featured": false,
    "order": 34,
    "metrics": [],
    "enforced": []
  },
  {
    "slug": "jmd-bookings",
    "name": "JMD Bookings",
    "group": "business",
    "category": "Business",
    "tagline": "Slot booking",
    "summary": "Friction-free appointment and slot booking with automated reminders and live availability.",
    "tech": [
      "Next.js",
      "Supabase",
      "WhatsApp API"
    ],
    "live": "https://jmd-online-book.vercel.app",
    "repo": null,
    "featured": false,
    "order": 35,
    "metrics": [],
    "enforced": []
  },
  {
    "slug": "gple-sports",
    "name": "GPLE Sports",
    "group": "business",
    "category": "Business",
    "tagline": "Sports brand platform",
    "summary": "Sports brand presentation surface — fixtures, fan engagement, partner showcases.",
    "tech": [
      "React",
      "Tailwind"
    ],
    "live": "https://gplesports.vercel.app",
    "repo": null,
    "featured": false,
    "order": 36,
    "metrics": [],
    "enforced": []
  },
  {
    "slug": "rahul-silk",
    "name": "Rahul Silk",
    "group": "business",
    "category": "Business",
    "tagline": "Textile storefront",
    "summary": "Storefront-led brand site for a heritage textile house — catalogue, story, enquiry.",
    "tech": [
      "Next.js"
    ],
    "live": "https://rahul-silk.vercel.app",
    "repo": null,
    "featured": false,
    "order": 37,
    "metrics": [],
    "enforced": []
  },
  {
    "slug": "vip-telegram-funnel",
    "name": "VIP Telegram Funnel",
    "group": "marketing",
    "category": "Marketing",
    "tagline": "Paid traffic funnel",
    "summary": "High-conversion landing engineered around paid-traffic mechanics — CRO, social proof, deep funnel.",
    "tech": [
      "Astro",
      "Tailwind"
    ],
    "live": "https://vip-free-tennis-page.vercel.app",
    "repo": null,
    "featured": false,
    "order": 38,
    "metrics": [],
    "enforced": []
  },
  {
    "slug": "nebulapay",
    "name": "NebulaPay",
    "group": "fintech",
    "category": "FinTech",
    "tagline": "Checkout layer",
    "summary": "Cinematic fintech checkout layer — embeddable Pay-with-Nebula button, dark glass UI, sub-200ms perceived latency.",
    "tech": [
      "Next.js",
      "Stripe",
      "Cloudflare Workers"
    ],
    "live": null,
    "repo": null,
    "featured": false,
    "order": 39,
    "metrics": [],
    "enforced": []
  },
  {
    "slug": "aurora-analytics",
    "name": "Aurora Analytics",
    "group": "analytics",
    "category": "Analytics",
    "tagline": "Product analytics",
    "summary": "Real-time product analytics with AI-narrated dashboards — Aurora explains why your numbers moved overnight.",
    "tech": [
      "TanStack Start",
      "ClickHouse",
      "OpenAI"
    ],
    "live": null,
    "repo": null,
    "featured": false,
    "order": 40,
    "metrics": [],
    "enforced": []
  },
  {
    "slug": "skillforge-ai",
    "name": "SkillForge AI",
    "group": "edtech",
    "category": "EdTech",
    "tagline": "Adaptive AI tutor",
    "summary": "Adaptive AI tutor that turns a curriculum into a per-learner journey — adjusts pace, depth and tone in real time.",
    "tech": [
      "Next.js",
      "Supabase",
      "Claude"
    ],
    "live": null,
    "repo": null,
    "featured": false,
    "order": 41,
    "metrics": [],
    "enforced": []
  },
  {
    "slug": "adshield-india",
    "name": "AdShield India",
    "group": "ai",
    "category": "AI",
    "tagline": "Ad fraud detection",
    "summary": "AI-powered ad fraud detection and protection layer for Indian performance marketers — blocks invalid traffic in real time.",
    "tech": [
      "Next.js",
      "Python",
      "ML",
      "Supabase"
    ],
    "live": "https://adshield-india.vercel.app",
    "repo": null,
    "featured": false,
    "order": 42,
    "metrics": [],
    "enforced": []
  },
  {
    "slug": "autotube",
    "name": "AutoTube",
    "group": "ai",
    "category": "AI",
    "tagline": "YouTube automation",
    "summary": "YouTube channel automation — AI scripts, auto-publish, thumbnail generation and SEO metadata pipeline end-to-end.",
    "tech": [
      "Next.js",
      "OpenAI",
      "YouTube API",
      "n8n"
    ],
    "live": "https://autotube-signhify.vercel.app",
    "repo": null,
    "featured": false,
    "order": 43,
    "metrics": [],
    "enforced": []
  },
  {
    "slug": "cricket-king",
    "name": "Cricket King",
    "group": "marketing",
    "category": "Marketing",
    "tagline": "Telegram funnel",
    "summary": "High-conversion Telegram funnel for a cricket picks channel — social proof, scarcity mechanics and deep CRO architecture.",
    "tech": [
      "Astro",
      "Tailwind"
    ],
    "live": "https://cricket-king-rahul.vercel.app",
    "repo": null,
    "featured": false,
    "order": 44,
    "metrics": [],
    "enforced": []
  },
  {
    "slug": "hari-cricket",
    "name": "Hari Cricket",
    "group": "marketing",
    "category": "Marketing",
    "tagline": "Cricket community page",
    "summary": "Conversion-first landing page for a cricket Telegram community — engineered around trust signals and frictionless join flow.",
    "tech": [
      "React",
      "Tailwind"
    ],
    "live": "https://hari-cricket.vercel.app",
    "repo": null,
    "featured": false,
    "order": 45,
    "metrics": [],
    "enforced": []
  },
  {
    "slug": "tennis-king-jackpot",
    "name": "Tennis King Jackpot",
    "group": "marketing",
    "category": "Marketing",
    "tagline": "Sports picks page",
    "summary": "Sports picks landing page with urgency mechanics, animated win-rate counter, and Telegram CTA optimised for paid traffic.",
    "tech": [
      "Astro",
      "Tailwind"
    ],
    "live": "https://tennis-king-jackpot.vercel.app",
    "repo": null,
    "featured": false,
    "order": 46,
    "metrics": [],
    "enforced": []
  },
  {
    "slug": "examastra",
    "name": "ExamAstra",
    "group": "edtech",
    "category": "EdTech",
    "tagline": "Exam preparation",
    "summary": "AI-driven exam prep for UPSC, SSC & State PSC — personalised study paths, adaptive question banks and real-time timeline analytics.",
    "tech": [
      "Next.js",
      "Supabase",
      "OpenAI",
      "Tailwind"
    ],
    "live": "https://examastra.vercel.app",
    "repo": null,
    "featured": false,
    "order": 47,
    "metrics": [],
    "enforced": []
  },
  {
    "slug": "autogram",
    "name": "Autogram",
    "group": "ai",
    "category": "AI automation",
    "tagline": "Scheduled publishing pipeline",
    "summary": "A GitHub Actions pipeline that renders, stages and publishes short video to Instagram and YouTube, with content memory so a scheduled slot cannot republish an asset it already sent.",
    "tech": [
      "Python",
      "TypeScript",
      "GitHub Actions",
      "Remotion",
      "Composio"
    ],
    "live": null,
    "repo": "https://github.com/Warriorlegacy/Autogram",
    "featured": false,
    "order": 48,
    "metrics": [],
    "enforced": []
  },
  {
    "slug": "signhify-cli",
    "name": "Signhify CLI",
    "group": "devtools",
    "category": "Developer tools",
    "tagline": "Document workflow in the terminal",
    "summary": "A command line surface over the Signhify document flow, so repetitive signing and template work can run in a script instead of a browser.",
    "tech": [
      "TypeScript",
      "Node.js",
      "CLI"
    ],
    "live": "https://signhify-cli.vercel.app",
    "repo": null,
    "featured": false,
    "order": 49,
    "metrics": [],
    "enforced": []
  },
  {
    "slug": "signhify-studio",
    "name": "Signhify Studio",
    "group": "devtools",
    "category": "Showcase",
    "tagline": "Read-only automation showcase",
    "summary": "A static snapshot of the Signhify Autopilot dashboard. No signups, no writes, nothing behind the surface that a visitor can change.",
    "tech": [
      "React",
      "Static build",
      "Vercel"
    ],
    "live": null,
    "repo": "https://github.com/Warriorlegacy/signhify-showcase",
    "featured": false,
    "order": 50,
    "metrics": [],
    "enforced": []
  },
  {
    "slug": "dxfvec",
    "name": "DXFVec",
    "group": "devtools",
    "category": "Developer tools",
    "tagline": "Vector work on DXF drawings",
    "summary": "Reads CAD exchange files and works with their geometry as vectors. Built for drawings that need measuring or reshaping outside a heavyweight CAD seat.",
    "tech": [
      "TypeScript",
      "Geometry",
      "Web"
    ],
    "live": null,
    "repo": "https://github.com/Warriorlegacy/dxfvec",
    "featured": false,
    "order": 51,
    "metrics": [],
    "enforced": []
  }
]

export const FEATURED = PROJECTS.filter((p) => p.featured)

/** The five Bharat platforms, in launch order. The hub is listed separately. */
export const BHARAT_ECOSYSTEM = PROJECTS.filter((p) => p.bharat && p.slug !== 'bharat-os-hub')

/** The unified launcher and suite install. */
export const BHARAT_HUB = PROJECTS.find((p) => p.slug === 'bharat-os-hub')

/** @param {string} slug */
export function getProject(slug) {
  return PROJECTS.find((p) => p.slug === slug)
}

/** @param {string} group */
export function countGroup(group) {
  return group === 'all' ? PROJECTS.length : PROJECTS.filter((p) => p.group === group).length
}

export const CAPABILITIES = [
  {
    title: 'AI systems',
    body: 'Provider-agnostic LLM integration, retrieval, agent orchestration and in-browser inference. Shipped across fourteen AI products.',
  },
  {
    title: 'Product engineering',
    body: 'Full-stack TypeScript and Python. Cloudflare Workers and D1, Next.js and Supabase, schema and migrations versioned with the code.',
  },
  {
    title: 'Security',
    body: 'PBKDF2 over Web Crypto, double-submit CSRF, httpOnly sessions, SSRF-safe outbound requests, and audit logs chained by hash.',
  },
  {
    title: 'Verification',
    body: 'Vitest, Playwright and smoke suites that run against the deployed worker rather than a local build.',
  },
]
