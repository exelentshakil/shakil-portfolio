export interface AiProject {
  id: string;
  title: string;
  subtitle: string;
  category: "autonomous-agents" | "rag-knowledge" | "multimodal-vision" | "workflow-orchestration" | "legal-fintech";
  categoryLabel: string;
  liveUrl?: string;
  githubUrl?: string;
  previewImage?: string;
  badge?: string;
  architecturalPrinciple: {
    headline: string;
    description: string;
  };
  keyFeatures: string[];
  clientValue: string;
  metrics?: string;
  stack: string[];
  featured?: boolean;
}

export const aiProjects: AiProject[] = [
  {
    id: "nightshift-ai-employee",
    title: "NightShift — Autonomous Inbox Agent & AI Employee",
    subtitle: "Enterprise inbox agent with grounded knowledge retrieval and human-in-the-loop approval gates.",
    category: "autonomous-agents",
    categoryLabel: "Autonomous Agents",
    liveUrl: "https://ai-employee-demo-mu.vercel.app",
    previewImage: "/screenshots/ai/nightshift-preview.png",
    badge: "Production Demo",
    featured: true,
    architecturalPrinciple: {
      headline: "Grounded RAG + Approval-Gated Actions",
      description: "Answers strictly cite ingested company documentation. Every external side effect (Gmail draft, CRM update, calendar booking) queues in 'pending' status — zero writes without explicit human approval."
    },
    keyFeatures: [
      "Strict citation-grounded RAG: Refuses to invent policies or hallucinate customer replies",
      "Human-in-the-loop approval queue: Operator clicks approve to fire downstream API mutations",
      "Model fallback chain (Claude / Gemini) to guarantee 99.9% inbox responsiveness",
      "Full audit trail tracking every reasoning step and data source cited"
    ],
    clientValue: "Allows companies to automate 80%+ of incoming inquiries with 100% architectural protection against rogue AI emails.",
    metrics: "100% Auditable Actions • 0 Unauthorized Writes",
    stack: ["Next.js 15", "TypeScript", "Gemini API", "Claude API", "Supabase", "Tailwind CSS", "Vercel"]
  },
  {
    id: "prospect-os",
    title: "Prospect OS — Autonomous Outbound Engine",
    subtitle: "End-to-end B2B sales automation engine powered by 8 specialized sub-agents with auditable rubric scoring.",
    category: "autonomous-agents",
    categoryLabel: "Autonomous Agents",
    liveUrl: "https://prospect-os-tau.vercel.app",
    githubUrl: "https://github.com/exelentshakil/prospect-os",
    previewImage: "/screenshots/ai/prospect-os.png",
    badge: "8 Sub-Agents",
    featured: true,
    architecturalPrinciple: {
      headline: "The Rubric Scores Qualification, The Model Never Does",
      description: "Every metric (visibility index, ranking trajectory, revenue leakage estimate, qualification score) is computed deterministically by version-pinned formulas. The LLM is confined strictly to summarization and copy synthesis."
    },
    keyFeatures: [
      "8 autonomous sub-agents: Sourcing, competitor analysis, leakage detection, scoring, outreach, CRM sync, and call booking",
      "Auditable 12-component rubric endpoint (/rubric) reproducible by hand",
      "Human-readable 'basis' string attached to every qualification number",
      "Traced step record for every execution run"
    ],
    clientValue: "Eliminates hallucinated qualification scores and builds predictable, mathematically defensible outbound pipelines.",
    metrics: "12 Auditable Scoring Factors • 8 Coordinated Sub-Agents",
    stack: ["Next.js", "TypeScript", "Claude 3.5 Sonnet", "Deterministic Rubric", "Tailwind CSS", "Vercel"]
  },
  {
    id: "parcelquote",
    title: "ParcelQuote — Instant Property Quoting Platform",
    subtitle: "High-precision commercial and residential property quoting engine using OpenStreetMap polygon geometry.",
    category: "workflow-orchestration",
    categoryLabel: "Quoting & Geospatial",
    liveUrl: "https://parcelquote.vercel.app",
    githubUrl: "https://github.com/exelentshakil/parcelquote",
    previewImage: "/screenshots/ai/parcelquote.png",
    badge: "Geospatial AI",
    featured: true,
    architecturalPrinciple: {
      headline: "OSM Shoelace Footprint Geometry + Confidence-Scored Routing",
      description: "Queries OpenStreetMap's Overpass API for real building polygons and computes roof area via shoelace formula. Blends geocode, parcel, and footprint accuracy into a confidence score; quotes below 72% route to exceptions triage."
    },
    keyFeatures: [
      "Real polygon geometry calculation via shoelace algorithm with lot-size fallback",
      "Versioned pricing rules table: Admin edits rules without modifying production code",
      "Confidence-scored routing: Sub-72% certainty automatically flags for manual review",
      "Swap-in adapter interfaces for Google Maps, County GIS, and Nearmap"
    ],
    clientValue: "Enables property service businesses to capture instant online bookings without under-quoting complex roofs.",
    metrics: "Sub-Second Geo-Quoting • <72% Exception Triage",
    stack: ["Next.js", "TypeScript", "OpenStreetMap API", "PostgreSQL", "Tailwind CSS", "Vercel"]
  },
  {
    id: "rehab-estimator-api",
    title: "Photo Condition & Rehab Estimator API",
    subtitle: "Multimodal property condition classifier and automated capital expenditure estimating engine.",
    category: "multimodal-vision",
    categoryLabel: "Multimodal AI",
    liveUrl: "https://rehab-estimator-api.vercel.app",
    githubUrl: "https://github.com/exelentshakil/rehab-estimator-api",
    previewImage: "/screenshots/ai/rehab-estimator.png",
    badge: "Computer Vision",
    featured: true,
    architecturalPrinciple: {
      headline: "Closed-Vocabulary Vision Observations + Versioned Cost Book",
      description: "The vision model reports physical observations from a closed taxonomy (never dollars). Every price is computed by a deterministic pricing engine reading a versioned cost book (v1.0.0) defensible to credit committees."
    },
    keyFeatures: [
      "Multi-photo analysis (5–50 photos) classifying structural, interior, and cosmetic condition",
      "Coverage gap detection flagging missing inspection angles",
      "Deterministic low / expected / high rehab cost calculation",
      "Zero prompt drift: Pricing reconciles 100% to audited cost benchmarks"
    ],
    clientValue: "Allows real estate funds and private lenders to underwrite property repair costs instantly from raw smartphone photos.",
    metrics: "40+ Standardized Repair Items • 100% Auditable Pricing",
    stack: ["Next.js", "Gemini 1.5 Pro", "OpenAI Vision", "TypeScript", "REST API", "Vercel"]
  },
  {
    id: "wp-content-autopilot",
    title: "WP Content Autopilot — Programmatic Legal Publishing",
    subtitle: "Enterprise legal content generation engine with statutory California legal depth and WordPress REST API publishing.",
    category: "legal-fintech",
    categoryLabel: "Legal AI & Publishing",
    liveUrl: "https://wp-content-autopilot.vercel.app",
    githubUrl: "https://github.com/exelentshakil/wp-content-autopilot",
    previewImage: "/screenshots/ai/wp-content-autopilot.png",
    badge: "Client Production",
    featured: true,
    architecturalPrinciple: {
      headline: "Statutory Legal Rigor + Complete 27-Subfield ACF Mapping",
      description: "Generates California employment law pages citing FEHA, CRD, and Labor Code §§ 98.6 & 1102.5. Synthesizes custom Imagen 3 / DALL-E 3 visual assets and maps all 27 ACF subfields directly to WordPress."
    },
    keyFeatures: [
      "Statutory precision: Cites California Labor Code, SB 497, and Yanowitz v. L'Oreal precedent",
      "Automated dual-AI visual asset generation (16:9 moody office banners & 4:3 illustrations)",
      "Complete ACF Field Group 348 payload mapping across 6 tabs",
      "Direct WordPress REST API publishing with Yoast SEO title & meta sync"
    ],
    clientValue: "Scaled practice-area organic search expansion for prominent Los Angeles employment litigation firm (Atoyan Law Firm).",
    metrics: "27 ACF Fields Mapped • 10x Content Velocity",
    stack: ["Next.js", "WordPress REST API", "Google Imagen 3", "DALL-E 3", "ACF Pro", "Yoast SEO"]
  },
  {
    id: "legal-ai-assistant",
    title: "Legal AI Workflow Assistant (27-Member Law Firm)",
    subtitle: "Internal legal document analysis and contract risk assessment platform powered by Google AI Studio.",
    category: "legal-fintech",
    categoryLabel: "Legal AI",
    liveUrl: "https://ai-legalassistant.vercel.app",
    githubUrl: "https://github.com/exelentshakil/legal-ai-assistant",
    previewImage: "/screenshots/ai/legal-ai-assistant.png",
    badge: "Enterprise Internal",
    featured: true,
    architecturalPrinciple: {
      headline: "Gemini 1.5 Pro Long-Context Analysis + Deterministic Demo Mode",
      description: "Engineered for high-volume legal contract review. Extracts key entities, obligations, and risk factors with confidence scores. Features a zero-downtime offline fallback for safe stakeholder demonstrations."
    },
    keyFeatures: [
      "Rapid extraction of contract entities, governing law, obligations, and termination clauses",
      "Risk factor scoring with specific paragraph citations and confidence metrics",
      "Google AI Studio & Google Cloud production architecture with enterprise guardrails",
      "Dual mode: Live Google AI execution + deterministic offline demo capability"
    ],
    clientValue: "Reduced initial contract review turnaround from 3 hours to under 45 seconds for commercial law attorneys.",
    metrics: "45s Contract Triage • 90%+ Review Time Saved",
    stack: ["Next.js", "Google AI Studio", "Gemini 1.5 Pro", "Google Cloud", "Tailwind CSS", "Vercel"]
  },
  {
    id: "ai-automation-hub",
    title: "AI Automation Hub — Multi-Pipeline Orchestrator",
    subtitle: "Confidence-routed operational ecosystem spanning customer email, CRM lead scoring, and automated task dispatch.",
    category: "workflow-orchestration",
    categoryLabel: "Workflow Orchestration",
    liveUrl: "https://ai-automationhub.vercel.app",
    githubUrl: "https://github.com/exelentshakil/ai-automation-hub",
    previewImage: "/screenshots/ai/ai-automation-hub.png",
    badge: "Event Orchestration",
    featured: false,
    architecturalPrinciple: {
      headline: "Confidence-Routed Autonomous Execution (>90% Auto, <90% Human Queue)",
      description: "High-confidence actions execute autonomously through downstream APIs (CRM, Email, PM). Low-confidence edge cases gracefully route to a human-in-the-loop triage UI. Dual model fallback ensures zero downtime."
    },
    keyFeatures: [
      "Multi-channel ingestion: Email inquiries, CRM events, and project status webhooks",
      "Confidence-weighted decision engine: Autonomous execution above 90% threshold",
      "Human-in-the-loop dashboard with single-click edit, approve, or reject controls",
      "Dual LLM fallback chain (Claude 3.5 Sonnet -> Gemini 1.5 Pro)"
    ],
    clientValue: "Gives operational teams hands-free automation for predictable tasks while keeping a strict human safeguard on exceptions.",
    metrics: "<2s Inference Latency • 99.9% Uptime Fallback",
    stack: ["Next.js 15", "Claude 3.5 Sonnet", "Gemini API", "TypeScript", "Tailwind CSS", "Vercel"]
  },
  {
    id: "callscore-ai",
    title: "CallScore AI — Deterministic Call Grading Engine",
    subtitle: "Voice call transcription, speaker diarization, and drift-free employee performance evaluation.",
    category: "rag-knowledge",
    categoryLabel: "Audio AI & QA",
    liveUrl: "https://callscoreai.vercel.app",
    githubUrl: "https://github.com/exelentshakil/callscore-ai",
    previewImage: "/screenshots/ai/callscore-ai.png",
    badge: "Deterministic QA",
    featured: false,
    architecturalPrinciple: {
      headline: "Model Observation of Evidence + Deterministic Mathematical Scoring",
      description: "Eliminates AI grading inconsistency where scores drift between runs. The LLM extracts quotes and rates 5 fixed qualitative categories (0–10); a published mathematical formula computes the weighted 0–100 total."
    },
    keyFeatures: [
      "Speaker-labeled transcript ingestion and key conversation milestone detection",
      "Categorical scoring (Greeting, Needs Discovery, Product Knowledge, Objection Handling, Closing)",
      "Published, versioned rubric endpoint (/api/rubric) reproducible by independent auditors",
      "Historical trend analysis identifying coaching opportunities per manager"
    ],
    clientValue: "Allows customer service centers to evaluate 100% of recorded calls with objective, defensible employee quality scores.",
    metrics: "100% Reproducible Scores • Zero Prompt Drift",
    stack: ["Next.js", "Whisper STT", "Claude API", "TypeScript", "PostgreSQL", "Tailwind CSS"]
  },
  {
    id: "intercapital-lending-ai",
    title: "InterCapital Funding — AI Commercial Lending Platform",
    subtitle: "Intelligent commercial real estate lending dashboard with automated OCR document extraction and RAG underwriting.",
    category: "legal-fintech",
    categoryLabel: "FinTech & Real Estate",
    liveUrl: "https://intercapital-lending-ai.vercel.app",
    githubUrl: "https://github.com/exelentshakil/intercapital-lending-ai",
    previewImage: "/screenshots/ai/intercapital-ai.png",
    badge: "FinTech RAG",
    featured: false,
    architecturalPrinciple: {
      headline: "RAG Underwriting Assistant + Inngest Event-Driven OCR Pipeline",
      description: "Combines conversational document intelligence over dense commercial loan packets with automated metric calculation (LTV, DSCR, occupancy rates) and expiring compliance alerts."
    },
    keyFeatures: [
      "AI Underwriting Assistant: Natural language queries over borrower tax returns and rent rolls",
      "Automated extraction and validation of Loan-to-Value (LTV) and Debt Service Coverage Ratio (DSCR)",
      "Compliance alert engine: Flags expiring hazard insurance and lease rollover risks",
      "Event-driven background processing using Inngest to prevent request timeouts"
    ],
    clientValue: "Accelerates commercial loan file packaging and underwriter review by 65%.",
    metrics: "Automated LTV & DSCR Extraction • 65% Faster Review",
    stack: ["Next.js 15", "Inngest", "OpenAI / Gemini", "pgvector", "Tailwind CSS", "shadcn/ui"]
  },
  {
    id: "carfix-ai",
    title: "CarFix AI — Multimodal Damage Assessment Engine",
    subtitle: "Automated vehicle damage detection and repair cost range estimation via multimodal vision and background queues.",
    category: "multimodal-vision",
    categoryLabel: "Multimodal AI",
    liveUrl: "https://aicarfix.vercel.app",
    githubUrl: "https://github.com/exelentshakil/carfix",
    previewImage: "/screenshots/ai/carfix-ai.png",
    badge: "Async Vision",
    featured: false,
    architecturalPrinciple: {
      headline: "Asynchronous Background Vision Inference (Inngest + Supabase)",
      description: "Photo upload requests return immediately with 'PROCESSING' state. Gemini multimodal inference runs inside Inngest background functions to guarantee execution without Vercel request timeouts."
    },
    keyFeatures: [
      "Multimodal vehicle identification (Make, Model, Year, Trim) from exterior photos",
      "Panel damage detection (scratches, dents, structural deformation, glass cracks)",
      "Rule-based repair cost range and OEM parts requirement estimation",
      "Real-time polling status endpoint flipping to 'COMPLETED' upon queue resolution"
    ],
    clientValue: "Empowers auto insurance adjusters and repair facilities to generate preliminary triage estimates in under 30 seconds.",
    metrics: "Non-Blocking Async Queues • Sub-30s Triage",
    stack: ["Next.js", "Gemini Vision", "Inngest", "Supabase", "TypeScript", "Tailwind CSS"]
  }
];

export const AI_MVP_RESCUE_SERVICES = [
  {
    icon: "BugOff",
    title: "Brittle Schema & DB Normalization",
    problem: "AI builders (Lovable, Bolt, v0) generate flat or disorganized tables without foreign keys, constraints, or indexes.",
    solution: "I re-architect your PostgreSQL / Supabase database with normalized tables, atomic transactions, foreign keys, and indexes that handle high concurrency."
  },
  {
    icon: "ShieldAlert",
    title: "Multi-Tenant Auth & Row Level Security (RLS)",
    problem: "AI tools often leave Supabase RLS disabled or write naive policies, exposing tenant data across user boundaries.",
    solution: "I implement production-grade Supabase / NextAuth RBAC, strict Row Level Security policies, and audit logging to guarantee data isolation."
  },
  {
    icon: "CreditCard",
    title: "Stripe Billing, Webhooks & Idempotency",
    problem: "Prototypes typically mock checkout or break when users cancel, switch tiers, or experience failed card renewals.",
    solution: "I wire up end-to-end Stripe Billing, customer portals, tiered usage metering, and robust idempotent webhook listeners that never drop billing events."
  },
  {
    icon: "Zap",
    title: "Async Background Queues & Timeout Protection",
    problem: "Running AI inference or heavy generation inside serverless HTTP requests hits 10s-30s Vercel timeouts and fails for users.",
    solution: "I extract long-running tasks into Inngest / BullMQ / Celery worker queues with automatic retries, progress polling, and zero dropped jobs."
  },
  {
    icon: "Cpu",
    title: "Deterministic Guardrails & Model Grounding",
    problem: "Raw LLM prompts hallucinate pricing, leak system prompts, or invent non-existent business policies.",
    solution: "I build strict validation layers, closed-vocabulary taxonomies, and deterministic mathematical calculation engines that keep your AI safe."
  },
  {
    icon: "Rocket",
    title: "Production Infrastructure & CI/CD",
    problem: "The code runs on localhost or a hosted sandbox, but can't build cleanly, lacks environment secrets management, and has zero monitoring.",
    solution: "I configure production Vercel/AWS environments, clean TypeScript compilation, Sentry error monitoring, PostHog analytics, and automated deployments."
  }
];
