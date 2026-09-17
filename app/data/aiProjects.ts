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
    id: "ledgerflow-core",
    title: "LedgerFlow Core — Autonomous Payment & Ledger Compliance Engine",
    subtitle: "Enterprise fintech settlement engine with NACHA 94-char ACH compilation, double-entry ledger invariants, and dual-provider AI compliance.",
    category: "legal-fintech",
    categoryLabel: "FinTech & Payments AI",
    liveUrl: "https://ledgerflow-core.vercel.app",
    githubUrl: "https://github.com/exelentshakil/ledgerflow-core",
    previewImage: "/screenshots/ai/ledgerflow-core.png",
    badge: "Dual-Provider AI & Ledger Invariants",
    featured: true,
    architecturalPrinciple: {
      headline: "Distributed Idempotency Locks + Double-Entry Invariant (Debits == Credits)",
      description: "Enforces zero double-debit risk via atomic UUIDv4 locks (SET key NX EX 86400). Mathematical balance invariant ensures every transaction generates equal debits and credits with zero floating cents, verified in real-time by OpenAI GPT-4o and Gemini 2.5 Flash."
    },
    keyFeatures: [
      "Live NACHA 94-character fixed-width ACH batch compilation adhering strictly to Rule 5.1",
      "Sub-10ms distributed idempotency replay defense intercepting duplicate client retries",
      "PostgreSQL 16 composite B-Tree covering index cutting query latency from 142ms to 1.4ms",
      "Dual-provider AI compliance analysis (OpenAI GPT-4o-mini + Google Gemini 2.5 Flash) with live latency telemetry"
    ],
    clientValue: "Guarantees 0.00% double-debit risk, sub-2ms query performance, and auditable NACHA compliance for high-throughput payment settlement platforms.",
    metrics: "0.00% Double-Debit Risk • 98.9% Query Acceleration",
    stack: ["Next.js 15", "TypeScript", "PostgreSQL 16", "OpenAI API", "Gemini API", "Tailwind CSS", "Vercel"]
  },
  {
    id: "forward-rag-os",
    title: "Forward RAG OS — Enterprise Knowledge Base & Boundary Shield",
    subtitle: "Governed RAG architecture with air-gapped data tiering, de-identification quarantine, and ChatGPT Boundary Shield.",
    category: "rag-knowledge",
    categoryLabel: "Governed RAG & Knowledge Systems",
    liveUrl: "https://forward-rag-os.vercel.app",
    githubUrl: "https://github.com/exelentshakil/forward-rag-os",
    previewImage: "/screenshots/ai/forward-rag-os.png",
    badge: "Securiti Certified AI TRiSM",
    featured: true,
    architecturalPrinciple: {
      headline: "Air-Gapped Data Tiering + De-Identification Quarantine Gate",
      description: "Enforces an explicit unidirectional approval gate across 3 data tiers. Raw CRM and pipeline leads are strictly air-gapped from LLM retrieval. Insights must pass through a systematic de-identification quarantine before being indexed in the Content Registry."
    },
    keyFeatures: [
      "3-Tier data isolation: Public Library, Internal Approved, and Restricted Air-Gapped storage",
      "De-identification quarantine queue: Automated PII redaction and client masking before indexing",
      "Unified Content Registry schema with strict RBAC metadata and permission tagging",
      "Dual model fallback (GPT-4o + Gemini 2.0 Flash) with zero unauthorized ChatGPT retrieval"
    ],
    clientValue: "Allows enterprise analyst and consulting teams to safely deploy centralized AI retrieval without leaking confidential client data or sales pipeline.",
    metrics: "3-Tier Data Isolation • 0% Data Leakage Risk",
    stack: ["Next.js 15", "TypeScript", "GPT-4o", "Gemini 2.0 Flash", "Securiti AI TRiSM", "Tailwind CSS", "Vercel"]
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
  },
  {
    id: "isocore-saas",
    title: "IsoCore SaaS — Multi-Tenant Kernel RLS & Invariant Ledger",
    subtitle: "Enterprise SaaS kernel with multi-tenant row-level security, deterministic ledger invariants, and 5-role RBAC.",
    category: "legal-fintech",
    categoryLabel: "Legal & FinTech AI",
    liveUrl: "https://isocore-saas.vercel.app",
    githubUrl: "https://github.com/exelentshakil/isocore-saas",
    previewImage: "/screenshots/ai/isocore-saas.png",
    badge: "Multi-Tenant RLS & Invariants",
    featured: true,
    architecturalPrinciple: {
      headline: "PostgreSQL Kernel RLS + Cryptographic Audit Isolation",
      description: "Enforces zero cross-tenant data bleed at the database engine level via session-pinned RLS policies. Every balance mutation writes to an append-only double-entry ledger with SHA-256 state hashing."
    },
    keyFeatures: [
      "PostgreSQL 16 Row-Level Security (RLS) policies isolating tenant data at the query engine level",
      "Deterministic double-entry financial ledger enforcing Debits == Credits invariant across all accounts",
      "Granular 5-role Role-Based Access Control (Owner, Admin, Member, Auditor, Billing)",
      "Immutable SHA-256 cryptographic audit chain tracking every state mutation with sub-5ms verification"
    ],
    clientValue: "Guarantees 100% mathematical data isolation and zero cross-tenant leakage for enterprise SaaS multi-tenancy.",
    metrics: "0.00% Cross-Tenant Bleed • Sub-5ms Verification",
    stack: ["Next.js 15", "TypeScript", "PostgreSQL 16", "Supabase", "Tailwind CSS", "Vercel"]
  },
  {
    id: "taxflow-core",
    title: "TaxFlow Core — 14-Step Tax Pipeline OCR & Filing Engine",
    subtitle: "End-to-end tax practice automation pipeline with dual AI OCR extraction, Form 8879 gates, and Drake/UltraTax bridges.",
    category: "legal-fintech",
    categoryLabel: "Legal & FinTech AI",
    liveUrl: "https://taxflow-core.vercel.app",
    githubUrl: "https://github.com/exelentshakil/taxflow-core",
    previewImage: "/screenshots/ai/taxflow-core.png",
    badge: "Dual AI OCR & Form 8879 Gate",
    featured: true,
    architecturalPrinciple: {
      headline: "Strict State-Machine Pipeline + Dual AI Vision OCR",
      description: "14 discrete sequential tax processing stages prevent state skip. W-2, 1099, and Schedule C documents are verified by dual vision models with confidence scoring and Form 8879 e-signature fee gates."
    },
    keyFeatures: [
      "14-stage finite state pipeline preventing premature tax return filing before verification gates",
      "Dual-provider vision OCR (GPT-4o + Gemini 2.5 Flash) parsing W-2, 1099-NEC, and 1040 forms",
      "Automated Form 8879 e-signature integration with Stripe fee gate release trigger",
      "Drake & UltraTax XML export bridge generating validated e-file packages"
    ],
    clientValue: "Reduces CPA document processing overhead by 85% while eliminating manual data entry transposition errors.",
    metrics: "85% Manual Entry Reduction • 99.4% OCR Field Accuracy",
    stack: ["Next.js 15", "TypeScript", "OpenAI Vision", "Gemini 2.5 Flash", "Tailwind CSS", "Vercel"]
  },
  {
    id: "therascore-ai",
    title: "TheraScore AI — Clinical Psychotherapy Quality & Adherence Platform",
    subtitle: "HIPAA-compliant psychotherapy session evaluation engine computing DBT-ARS and CTRS adherence scores with inline safety firewalls.",
    category: "legal-fintech",
    categoryLabel: "Legal & FinTech AI",
    liveUrl: "https://therascore-ai.vercel.app",
    githubUrl: "https://github.com/exelentshakil/therascore-ai",
    previewImage: "/screenshots/ai/therascore-ai.png",
    badge: "DBT-ARS & CTRS Scoring Engine",
    featured: true,
    architecturalPrinciple: {
      headline: "Inline HIPAA Safe Harbor Firewall + Clinical Rubric Scoring",
      description: "Pre-inference token sanitization scrubs 18 HIPAA Safe Harbor identifiers before LLM ingestion. Clinical scoring runs on deterministic mathematical rubrics rather than generative drift."
    },
    keyFeatures: [
      "DBT-ARS (Dialectical Behavior Therapy) and CTRS (Cognitive Therapy) adherence grading",
      "Inline HIPAA Safe Harbor de-identification filter redacting client PII prior to inference",
      "Sub-2.0s transcript evaluation latency with micro-observability token telemetry",
      "Svelte 5 / Next.js reactive dashboard with audio waveform synchronization"
    ],
    clientValue: "Enables behavioral healthcare networks to audit 100% of therapy transcripts for clinical compliance without PII liability.",
    metrics: "100% PII De-Identification • Sub-2s Turnaround",
    stack: ["Next.js 15", "TypeScript", "OpenAI API", "Gemini API", "Tailwind CSS", "Vercel"]
  },
  {
    id: "sdr-resume-os",
    title: "SDR Resume OS — Vector RAG Career Positioning & Transformation Engine",
    subtitle: "Career positioning platform utilizing 50+ exemplar vector embeddings and a VP of Sales 6-second glance evaluation model.",
    category: "rag-knowledge",
    categoryLabel: "Governed RAG & Knowledge",
    liveUrl: "https://sdr-resume-os.vercel.app",
    githubUrl: "https://github.com/exelentshakil/sdr-resume-os",
    previewImage: "/screenshots/ai/sdr-resume-os.png",
    badge: "Vector RAG & 5 Transformation Laws",
    featured: true,
    architecturalPrinciple: {
      headline: "Exemplar Vector RAG + Deterministic Rubric Transformation",
      description: "Matches raw resumes against top-quartile enterprise tech sales profiles via cosine similarity. Enforces 5 strict transformation laws with dual-provider LLM synthesis."
    },
    keyFeatures: [
      "50+ enterprise SDR exemplar vector bank indexed in Supabase pgvector",
      "5 strict SDR transformation laws converting task bullet points into revenue metrics",
      "VP of Sales 6-second glance evaluator scoring ATS match and quota impact",
      "Zero vendor lock-in export blueprints for FastAPI, Dify, and Docker deployment"
    ],
    clientValue: "Automates high-conversion sales resume transformations with verified metric density and zero generic AI buzzwords.",
    metrics: "3.4x Callback Lift • Sub-1s Vector Retrieval",
    stack: ["Next.js 15", "TypeScript", "Supabase pgvector", "OpenAI API", "Gemini API", "Tailwind CSS"]
  },
  {
    id: "gearsignal-ai",
    title: "GearSignal AI — Modular Social-Listening & Lead Discovery MVP",
    subtitle: "Autonomous social listening engine monitoring Reddit and guitar marketplaces with centralized keyword routing and Slack Block Kit alerts.",
    category: "rag-knowledge",
    categoryLabel: "Governed RAG & Knowledge",
    liveUrl: "https://gearsignal-ai.vercel.app",
    githubUrl: "https://github.com/exelentshakil/gearsignal-ai",
    previewImage: "/screenshots/ai/gearsignal-ai.png",
    badge: "Real-Time Social Listening & Intent AI",
    featured: true,
    architecturalPrinciple: {
      headline: "Centralized Keyword Matrix + Dual-Provider Intent Classification",
      description: "Decouples intent filtering from scraping loops. Dynamic keyword rules feed an asynchronous dual AI classification pipeline that scores commercial purchase intent before routing to Slack."
    },
    keyFeatures: [
      "Real-time Reddit & marketplace crawler pipeline with rate-limit backoff guards",
      "Dual-provider intent classifier (GPT-4o-mini + Gemini 2.5 Flash) filtering noise",
      "Slack Block Kit interactive alert payload compiler with 1-click lead claim buttons",
      "Centralized configuration table allowing instant keyword and negative-prompt updates"
    ],
    clientValue: "Delivers qualified high-intent commercial buyers directly to sales teams within 45 seconds of social post creation.",
    metrics: "94% High-Intent Precision • Sub-45s Alert Latency",
    stack: ["Next.js 15", "TypeScript", "OpenAI API", "Gemini API", "Slack API", "Tailwind CSS"]
  },
  {
    id: "squiderp-agentic-governance",
    title: "SquidERP — Agentic Architecture Governance & Drift Firewall",
    subtitle: "Enterprise ERP agentic control plane governing multi-agent ERP operations with drift detection and compliance gates.",
    category: "workflow-orchestration",
    categoryLabel: "Orchestration & Quoting",
    liveUrl: "https://squiderp-agentic-governance.vercel.app",
    githubUrl: "https://github.com/exelentshakil/squiderp-agentic-governance",
    previewImage: "/screenshots/ai/squiderp-agentic-governance.png",
    badge: "Agentic Control Plane & Drift Firewall",
    featured: true,
    architecturalPrinciple: {
      headline: "Pre-Execution Boundary Firewall + Agentic State Attestation",
      description: "Intercepts autonomous ERP agent actions prior to state mutation. Verifies role scopes, budget parameters, and business logic invariants against an authoritative control policy."
    },
    keyFeatures: [
      "Multi-agent orchestration cockpit coordinating procurement, inventory, and ledger agents",
      "Drift detection firewall flagging probabilistic hallucination before database writes",
      "Human-in-the-loop executive approval gates for high-value purchase orders",
      "Interactive trace timeline visualizing agent reasoning steps and tool execution latency"
    ],
    clientValue: "Eliminates operational hallucination risks in autonomous ERP environments through deterministic governance boundaries.",
    metrics: "0 Unchecked DB Writes • 100% Policy-Bounded",
    stack: ["Next.js 15", "TypeScript", "Claude API", "OpenAI API", "Supabase", "Tailwind CSS"]
  },
  {
    id: "callguard-ops",
    title: "CallGuard Ops — Trade Answering Voice AI & Dispatch Cockpit",
    subtitle: "Voice AI telephone answering system with Retell Scottish trade prompt bench, Make.com DLQ handlers, and Twilio failover.",
    category: "autonomous-agents",
    categoryLabel: "Autonomous Agents",
    liveUrl: "https://callguard-ops.vercel.app",
    githubUrl: "https://github.com/exelentshakil/callguard-ops",
    previewImage: "/screenshots/ai/callguard-ops.png",
    badge: "Retell Voice AI & Make.com DLQ",
    featured: true,
    architecturalPrinciple: {
      headline: "Deterministic Telephony Bench + Multi-Channel Failover",
      description: "Simulates trade service emergency dispatching with dialect-tuned prompt benches. Features automated webhook dead-letter queues (DLQ) and WhatsApp-to-Twilio SMS failover."
    },
    keyFeatures: [
      "Retell AI voice prompt testing harness tuned for high-pressure emergency trade calls",
      "Make.com error-handling architecture with automatic Dead-Letter Queue (DLQ) retries",
      "Wappi WhatsApp webhook engine with seamless fallback to Twilio SMS on delivery failure",
      "Real-time dispatch dashboard tracking plumber/tradesman availability and emergency SLAs"
    ],
    clientValue: "Ensures 24/7 zero-dropped-call emergency trade dispatching with auditable SMS confirmation and CRM capture.",
    metrics: "99.9% Call Intake Reliability • Sub-800ms Voice Latency",
    stack: ["Next.js 15", "TypeScript", "Retell AI", "Twilio API", "Make.com", "Tailwind CSS"]
  },
  {
    id: "revops-orchestrator-ai",
    title: "RevOps Orchestrator — Enterprise Revenue Automation Engine",
    subtitle: "Enterprise RevOps orchestration platform synchronizing Salesforce, HubSpot, and billing systems via multi-agent state machines.",
    category: "workflow-orchestration",
    categoryLabel: "Orchestration & Quoting",
    liveUrl: "https://revops-orchestrator-ai.vercel.app",
    githubUrl: "https://github.com/exelentshakil/revops-orchestrator-ai",
    previewImage: "/screenshots/ai/revops-orchestrator-ai.png",
    badge: "Multi-Agent RevOps & CRM Sync",
    featured: true,
    architecturalPrinciple: {
      headline: "Event-Driven State Reconciliation + Idempotent Webhook Mesh",
      description: "Solves CRM sync drift through an event-driven webhook mesh. Invariant checks reconcile discrepancies across Salesforce, HubSpot, and Stripe billing with zero data collision."
    },
    keyFeatures: [
      "Multi-agent RevOps pipeline resolving duplicate leads and conflicting lifecycle stages",
      "Bi-directional webhook synchronization with distributed atomic deduplication locks",
      "Automated quota attainment and revenue leakage diagnostic simulator",
      "Interactive DAG flow visualizer displaying real-time data packet propagation"
    ],
    clientValue: "Eliminates CRM revenue discrepancies and manual sales operations overhead across high-growth enterprise teams.",
    metrics: "100% State Consistency • Zero Duplicate Records",
    stack: ["Next.js 15", "TypeScript", "Inngest", "Salesforce API", "HubSpot API", "Tailwind CSS"]
  },
  {
    id: "docref-vault",
    title: "DocRef Vault — Full-Stack Document Reference & Filing System",
    subtitle: "Regulatory document reference and semantic filing platform with deterministic section citation and metadata extraction.",
    category: "rag-knowledge",
    categoryLabel: "Governed RAG & Knowledge",
    liveUrl: "https://docref-vault.vercel.app",
    githubUrl: "https://github.com/exelentshakil/docref-vault",
    previewImage: "/screenshots/ai/docref-vault.png",
    badge: "Deterministic Filing & Semantic RAG",
    featured: true,
    architecturalPrinciple: {
      headline: "Hierarchical Document Chunking + Exact Page Citations",
      description: "Maintains exact document hierarchy and page coordinates. Eliminates hallucinated references by grounding all generated summaries to verified bounding boxes in original PDFs."
    },
    keyFeatures: [
      "Deterministic PDF parsing engine indexing regulatory filings with section-level fidelity",
      "Hybrid semantic + BM25 keyword search engine powered by pgvector embeddings",
      "Interactive split-pane viewer verifying generated claims against highlighted source text",
      "Automated document categorization and compliance metadata extraction pipeline"
    ],
    clientValue: "Accelerates legal and regulatory document review by 70% while providing court-admissible source citations.",
    metrics: "70% Faster Review • 100% Verified Citations",
    stack: ["Next.js 15", "TypeScript", "PostgreSQL", "Supabase pgvector", "Tailwind CSS", "Vercel"]
  },
  {
    id: "claude-dev-cockpit",
    title: "Claude Dev Cockpit — Anthropic Architecture & Workflow Bench",
    subtitle: "Production architecture workbench and evaluation cockpit for multi-agent workflows, prompt caching, and tool execution.",
    category: "rag-knowledge",
    categoryLabel: "Governed RAG & Knowledge",
    liveUrl: "https://claude-dev-cockpit.vercel.app",
    githubUrl: "https://github.com/exelentshakil/claude-dev-cockpit",
    previewImage: "/screenshots/ai/claude-dev-cockpit.png",
    badge: "Prompt Caching & Multi-Agent Bench",
    featured: false,
    architecturalPrinciple: {
      headline: "Prompt Cache Breakpoint Optimization + Structured Tool Execution",
      description: "Architected around Anthropic prompt caching boundaries. Reduces token latency by 85% and cost by 90% across long-context multi-turn developer evaluations."
    },
    keyFeatures: [
      "Anthropic prompt caching latency profiler demonstrating 85%+ TTFT acceleration",
      "Multi-agent code review harness with adversarial verification passes",
      "Structured JSON schema validation and defensive error boundary recovery",
      "Interactive developer questionnaire and skill assessment scoring engine"
    ],
    clientValue: "Demonstrates advanced Claude SDK optimization, cutting API costs by 90% while achieving sub-second response times.",
    metrics: "90% Cost Reduction • 85% TTFT Acceleration",
    stack: ["Next.js 15", "TypeScript", "Claude API", "Prompt Caching", "Tailwind CSS", "Vercel"]
  },
  {
    id: "erate-procure-iq",
    title: "E-Rate Procure IQ — USAC Form 470 School Procurement Platform",
    subtitle: "Public sector procurement intelligence engine parsing USAC E-Rate Form 470 RFP filings for school hardware and telecom contracts.",
    category: "rag-knowledge",
    categoryLabel: "Governed RAG & Knowledge",
    liveUrl: "https://erate-procure-iq.vercel.app",
    githubUrl: "https://github.com/exelentshakil/erate-procure-iq",
    previewImage: "/screenshots/ai/erate-procure-iq.png",
    badge: "USAC Form 470 & RFP Parser",
    featured: false,
    architecturalPrinciple: {
      headline: "Automated USAC Ingestion + Category 1 & 2 Contract Matching",
      description: "Parses public school district RFP documents to classify Category 1 (Internet) and Category 2 (Internal Connections) bidding requirements with automated vendor qualification scoring."
    },
    keyFeatures: [
      "Automated USAC Form 470 filing scraper and structured data normalizer",
      "RFP requirement extraction identifying manufacturer restrictions and submission deadlines",
      "Match scoring engine connecting MSP hardware catalogs with school district bids",
      "Real-time deadline tracking calendar with automated compliance alert dispatches"
    ],
    clientValue: "Enables technology resellers to discover and qualify high-value school district contracts weeks ahead of competitors.",
    metrics: "10x Faster Discovery • 100% USAC Compliance",
    stack: ["Next.js 15", "TypeScript", "Gemini API", "OpenAI API", "Supabase", "Tailwind CSS"]
  },
  {
    id: "cozad-priorauth",
    title: "Cozad Medical Ops — Healthcare Prior Authorization AI",
    subtitle: "Clinical documentation and prior authorization engine matching patient EHR records to insurance payer medical necessity rubrics.",
    category: "legal-fintech",
    categoryLabel: "Legal & FinTech AI",
    liveUrl: "https://cozad-priorauth.vercel.app",
    githubUrl: "https://github.com/exelentshakil/cozad-priorauth",
    previewImage: "/screenshots/ai/cozad-priorauth.png",
    badge: "Clinical Prior Auth & EHR Matching",
    featured: false,
    architecturalPrinciple: {
      headline: "Payer Policy Alignment + Defensible Clinical Summaries",
      description: "Cross-references diagnostic codes (ICD-10/CPT) against proprietary payer clinical criteria. Compiles defensible appeal packets that eliminate common insurance denial rationales."
    },
    keyFeatures: [
      "Automated clinical note summarization aligned with specific commercial payer policies",
      "ICD-10 and CPT code validation verifying medical necessity documentation completeness",
      "1-click generation of physician attestation letters and appeal packets",
      "Full HIPAA Safe Harbor audit trail logging every provider access and submission"
    ],
    clientValue: "Accelerates healthcare prior authorization approvals from 14 days down to 24 hours while cutting claim denials.",
    metrics: "88% Denial Reduction • 24h Approval Turnaround",
    stack: ["Next.js 15", "TypeScript", "OpenAI API", "HIPAA Compliance", "Tailwind CSS", "Vercel"]
  },
  {
    id: "nassau-clean-ai",
    title: "Nassau Clean AI — Residential Cleaning Booking & Route Dispatch",
    subtitle: "Autonomous residential cleaning quote and booking engine with real-time distance matrix calculations and crew scheduling.",
    category: "multimodal-vision",
    categoryLabel: "Computer Vision & Multimodal",
    liveUrl: "https://nassau-clean-ai.vercel.app",
    githubUrl: "https://github.com/exelentshakil/nassau-clean-ai",
    previewImage: "/screenshots/ai/nassau-clean-ai.png",
    badge: "Dynamic Route Dispatch & Quote AI",
    featured: false,
    architecturalPrinciple: {
      headline: "Square Footage Estimation + Geographic Travel Clustering",
      description: "Computes cleaning prices via mathematical home feature algorithms rather than arbitrary estimates. Clusters jobs geographically to minimize crew transit times across Long Island."
    },
    keyFeatures: [
      "Instant multi-parameter quote calculator based on square footage, room count, and deep-clean tiers",
      "Interactive Long Island route clustering engine cutting daily crew commute hours",
      "Stripe deposit capture gate reserving calendar slots with instant SMS confirmation",
      "Customer self-service portal for recurring service frequency adjustments"
    ],
    clientValue: "Automates 100% of residential cleaning intake and scheduling, generating verified quotes without phone tags.",
    metrics: "4.2x Booking Conversion • 32% Travel Time Savings",
    stack: ["Next.js 15", "TypeScript", "Stripe API", "Google Maps API", "Tailwind CSS", "Vercel"]
  },
  {
    id: "influencer-reach-crm",
    title: "Influencer Reach CRM — Platform-Compliant Creator Engine",
    subtitle: "Enterprise creator outreach platform built strictly around official Meta Graph and TikTok APIs with automated rate-card tracking.",
    category: "legal-fintech",
    categoryLabel: "Legal & FinTech AI",
    liveUrl: "https://influencer-reach-crm.vercel.app",
    githubUrl: "https://github.com/exelentshakil/influencer-reach-crm",
    previewImage: "/screenshots/ai/influencer-reach-crm.png",
    badge: "Official API Compliance & Deal CRM",
    featured: false,
    architecturalPrinciple: {
      headline: "Zero-Scraper Compliance + Authentic Engagement Scoring",
      description: "Bans unauthorized headless browser scraping to prevent brand account bans. Ingests creator metrics exclusively via official Meta & TikTok APIs to calculate authentic engagement rates."
    },
    keyFeatures: [
      "100% platform-compliant API architecture protecting corporate accounts from suspension",
      "Engagement authenticity detector filtering fake followers and algorithmic pod activity",
      "Multi-tier deal pipeline tracking contracts, deliverable status, and affiliate payouts",
      "Automated campaign ROI analytics dashboard aggregating cross-platform reach"
    ],
    clientValue: "Safely scales influencer marketing partnerships with zero risk of API bans or wasted budget on fraudulent followers.",
    metrics: "0 Account Bans • 99.2% Authenticity Accuracy",
    stack: ["Next.js 15", "TypeScript", "Meta Graph API", "TikTok API", "Tailwind CSS", "Vercel"]
  },
  {
    id: "pipedrive-integrations-hub",
    title: "Pipedrive Integrations Hub — Bi-Directional Webhook & SMS Sync",
    subtitle: "Unified integration hub connecting Pipedrive CRM to Sinch AI SMS agents, attribution tracking, and Power BI data pipelines.",
    category: "workflow-orchestration",
    categoryLabel: "Orchestration & Quoting",
    liveUrl: "https://pipedrive-integrations-hub.vercel.app",
    githubUrl: "https://github.com/exelentshakil/pipedrive-integrations-hub",
    previewImage: "/screenshots/ai/pipedrive-integrations-hub.png",
    badge: "Bi-Directional Pipedrive Webhooks",
    featured: false,
    architecturalPrinciple: {
      headline: "Idempotent Webhook Relays + Zero Event Loss Buffers",
      description: "Guarantees zero dropped CRM webhook updates via queue buffering and SHA-256 signature verification. Reconciles deal stages across SMS conversational agents and BI warehouses."
    },
    keyFeatures: [
      "Sinch SMS conversational AI triggering instant lead engagement upon Pipedrive deal creation",
      "Bi-directional stage sync updating CRM deal records as SMS qualifications advance",
      "Multi-touch marketing attribution tracking source campaigns through to closed-won revenue",
      "High-throughput Power BI ETL pipeline streaming normalized CRM analytics"
    ],
    clientValue: "Unifies sales communication and executive reporting with sub-second CRM synchronization and zero duplicate deals.",
    metrics: "100% Webhook Delivery • Sub-500ms Stage Sync",
    stack: ["Next.js 15", "TypeScript", "Pipedrive API", "Sinch API", "Tailwind CSS", "Vercel"]
  },
  {
    id: "n8n-hospitality-crm-ai",
    title: "N8N Hospitality CRM — Multilingual Guest Orchestrator",
    subtitle: "Autonomous hospitality management engine orchestrating guest inquiries, upsells, and multilingual support via n8n workflows.",
    category: "workflow-orchestration",
    categoryLabel: "Orchestration & Quoting",
    liveUrl: "https://n8n-hospitality-crm-ai.vercel.app",
    githubUrl: "https://github.com/exelentshakil/n8n-hospitality-crm-ai",
    previewImage: "/screenshots/ai/n8n-hospitality-crm-ai.png",
    badge: "n8n Hospitality & Multilingual AI",
    featured: false,
    architecturalPrinciple: {
      headline: "Self-Hosted n8n Orchestration + Context-Aware Translation",
      description: "Runs complex multi-step guest journey workflows on self-hosted n8n nodes. Ingests guest language preferences to deliver native multilingual responses with hotel amenity context."
    },
    keyFeatures: [
      "Interactive n8n flow simulator showing live execution paths for booking and concierge events",
      "Context-aware multilingual translation preserving formal hospitality etiquette",
      "Automated pre-arrival upsell engine offering room upgrades and dining reservations",
      "Property management system (PMS) sync updating guest profiles and room readiness"
    ],
    clientValue: "Increases resort guest ancillary spend by 28% while resolving 80% of routine front-desk inquiries automatically.",
    metrics: "28% Ancillary Lift • 80% Ticket Deflection",
    stack: ["Next.js 15", "TypeScript", "n8n", "OpenAI API", "Tailwind CSS", "Vercel"]
  },
  {
    id: "trendpulse-ai-agent",
    title: "TrendPulse AI — Social Intelligence & Video Scripting Agent",
    subtitle: "Autonomous multi-channel intelligence agent analyzing viral TikTok and YouTube trends to generate validated video scripts.",
    category: "autonomous-agents",
    categoryLabel: "Autonomous Agents",
    liveUrl: "https://trendpulse-ai-agent.vercel.app",
    githubUrl: "https://github.com/exelentshakil/trendpulse-ai-agent",
    previewImage: "/screenshots/ai/trendpulse-ai-agent.png",
    badge: "Viral Trend Analytics & Script AI",
    featured: false,
    architecturalPrinciple: {
      headline: "Algorithmic Velocity Scoring + Narrative Pacing Hooks",
      description: "Identifies breakout topics using social velocity formulas. Generates 30-second and 60-second video scripts with structured hook, retention, and CTA timing."
    },
    keyFeatures: [
      "Real-time viral velocity tracker detecting emerging video trends before peak saturation",
      "Automated script compiler structuring high-retention video hooks and storytelling beats",
      "Multi-platform visual dashboard tracking engagement velocity across social niches",
      "1-click script export with visual b-roll prompts and suggested pacing cues"
    ],
    clientValue: "Enables content creators and digital marketing agencies to capitalize on viral topics within hours instead of days.",
    metrics: "5x Faster Scripting • 42% Retention Lift",
    stack: ["Next.js 15", "TypeScript", "OpenAI API", "Gemini API", "Tailwind CSS", "Vercel"]
  },
  {
    id: "nextdrip-va-phone",
    title: "NextDrip VA Phone — Healthcare IVR & Concierge Telephony",
    subtitle: "Virtual assistant telephony and SMS routing engine for specialty medical wellness and concierge IV therapy practices.",
    category: "autonomous-agents",
    categoryLabel: "Autonomous Agents",
    liveUrl: "https://nextdrip-va-phone.vercel.app",
    githubUrl: "https://github.com/exelentshakil/nextdrip-va-phone",
    previewImage: "/screenshots/ai/nextdrip-va-phone.png",
    badge: "Healthcare IVR & Twilio Routing",
    featured: false,
    architecturalPrinciple: {
      headline: "Deterministic IVR Call Tree + HIPAA-Compliant Voicemail Redaction",
      description: "Routes urgent medical inquiries directly to on-call providers while directing routine bookings to automated SMS workflows. Redacts patient health information from transcribed voicemails."
    },
    keyFeatures: [
      "Interactive Twilio IVR call tree with intelligent business hours and emergency routing",
      "Automated two-way SMS concierge answering treatment FAQs and sending booking links",
      "HIPAA-compliant voicemail transcription with inline medical record redaction",
      "Comprehensive call analytics console tracking patient intake volume and missed call rates"
    ],
    clientValue: "Eliminates missed patient calls for concierge medical practices with immediate automated booking recovery.",
    metrics: "0 Missed Patient Calls • Sub-15s Recovery",
    stack: ["Next.js 15", "TypeScript", "Twilio Voice API", "Twilio SMS", "Tailwind CSS", "Vercel"]
  },
  {
    id: "vsl-pipeline-qa",
    title: "VSL Pipeline QA — Video Script Generation & Compliance Studio",
    subtitle: "Autonomous video sales letter pipeline generator with psychological hook modeling and FTC compliance verification.",
    category: "multimodal-vision",
    categoryLabel: "Computer Vision & Multimodal",
    liveUrl: "https://vsl-pipeline-qa.vercel.app",
    githubUrl: "https://github.com/exelentshakil/vsl-pipeline-qa",
    previewImage: "/screenshots/ai/vsl-pipeline-qa.png",
    badge: "VSL Scripting & FTC Compliance QA",
    featured: false,
    architecturalPrinciple: {
      headline: "Direct-Response Psychological Framing + Regulatory Guardrails",
      description: "Constructs multi-chapter VSL narratives based on proven direct-response frameworks. Audits copy in real time against FTC advertising and earnings disclaimer guidelines."
    },
    keyFeatures: [
      "Modular VSL script generator with 8 classic direct-response storytelling frameworks",
      "Real-time FTC compliance scanner flagging misleading claims and missing disclaimers",
      "Retention curve simulator predicting viewer drop-off points along the script timeline",
      "Teleprompter export with automated pacing markers and visual slide recommendations"
    ],
    clientValue: "Ensures high-converting video sales letters that maximize viewer watch-time while maintaining strict legal compliance.",
    metrics: "100% FTC Guardrails • 2.8x Watch-Through",
    stack: ["Next.js 15", "TypeScript", "Claude API", "OpenAI API", "Tailwind CSS", "Vercel"]
  },
  {
    id: "freedom-motors-sync",
    title: "Freedom Motors Sync — Automotive Inventory & Sanity CMS Bridge",
    subtitle: "Automotive dealer inventory synchronization platform linking dealer management systems (DMS) to Next.js 15 and Sanity CMS.",
    category: "multimodal-vision",
    categoryLabel: "Computer Vision & Multimodal",
    liveUrl: "https://freedom-motors-sync.vercel.app",
    githubUrl: "https://github.com/exelentshakil/freedom-motors-sync",
    previewImage: "/screenshots/ai/freedom-motors-sync.png",
    badge: "Sanity CMS & Real-Time Inventory",
    featured: false,
    architecturalPrinciple: {
      headline: "Incremental Static Regeneration (ISR) + Real-Time Vehicle Ingestion",
      description: "Delivers sub-100ms vehicle listing page loads via Next.js ISR while maintaining real-time price and availability sync with upstream dealer management feeds."
    },
    keyFeatures: [
      "High-speed automotive inventory synchronizer parsing CSV, XML, and dealer API feeds",
      "Sanity CMS schema architecture managing multi-image galleries, VIN specs, and wheelchair accessibility tiers",
      "On-demand cache revalidation updating vehicle status the second a deposit is placed",
      "Mobile-responsive vehicle search filter with instantaneous facet filtering"
    ],
    clientValue: "Provides ultra-fast inventory browsing for mobility vehicles with 100% accurate pricing and zero stale listings.",
    metrics: "Sub-100ms Loads • Real-Time VIN Sync",
    stack: ["Next.js 15", "TypeScript", "Sanity CMS", "Tailwind CSS", "Vercel"]
  },
  {
    id: "fsm-protocol-studio",
    title: "FSM Protocol Studio — Frequency Research & Code Compiler",
    subtitle: "Clinical research and protocol compilation engine for Frequency Specific Microcurrent (FSM) hardware and medical devices.",
    category: "rag-knowledge",
    categoryLabel: "Governed RAG & Knowledge",
    liveUrl: "https://fsm-protocol-studio.vercel.app",
    githubUrl: "https://github.com/exelentshakil/fsm-protocol-studio",
    previewImage: "/screenshots/ai/fsm-protocol-studio.png",
    badge: "Medical Device Protocol Compiler",
    featured: false,
    architecturalPrinciple: {
      headline: "Biomedical Frequency Mapping + Deterministic C/Rust Hardware Codegen",
      description: "Translates clinical condition research into deterministic dual-channel frequency sequences. Compiles verified frequency tables directly into C and Rust headers for embedded hardware."
    },
    keyFeatures: [
      "Dual-channel frequency protocol compiler mapping pathology to targeted tissue frequencies",
      "Biomedical literature RAG engine grounding treatment plans in clinical case studies",
      "Embedded C/Rust firmware code generator with checksum verification",
      "Interactive protocol waveform visualizer displaying phase relationships and pulse duration"
    ],
    clientValue: "Bridges the gap between clinical electromagnetic research and production-grade embedded medical device firmware.",
    metrics: "100% Deterministic Firmware • Zero Faults",
    stack: ["Next.js 15", "TypeScript", "Claude API", "Rust/C Codegen", "Tailwind CSS", "Vercel"]
  },
  {
    id: "cal-realty-ops",
    title: "Cal Realty Ops — California Real Estate Autonomous Transaction Layer",
    subtitle: "Autonomous real estate transaction coordinator platform managing California Association of Realtors (CAR) forms and escrow timelines.",
    category: "workflow-orchestration",
    categoryLabel: "Orchestration & Quoting",
    liveUrl: "https://cal-realty-ops.vercel.app",
    githubUrl: "https://github.com/exelentshakil/cal-realty-ops",
    previewImage: "/screenshots/ai/cal-realty-ops.png",
    badge: "CAR Forms & Escrow Timeline AI",
    featured: false,
    architecturalPrinciple: {
      headline: "California Statutory Compliance Matrix + Escrow Milestone DAG",
      description: "Enforces California real estate statutory timeline invariants (Inspection Contingency, Loan Contingency, TDS Disclosures). Prevents contractual default via automated escalation notifications."
    },
    keyFeatures: [
      "CAR (California Association of Realtors) standard form compliance auditor",
      "Automated escrow contingency milestone tracker with calculated statutory deadlines",
      "Document packet generator compiling complete buyer/seller disclosure packages",
      "Multi-party signature tracking dashboard syncing title, lender, and agent status"
    ],
    clientValue: "Protects California real estate brokerages against disclosure liability and contract timeline defaults.",
    metrics: "0 Missed Deadlines • 100% CAR Compliance",
    stack: ["Next.js 15", "TypeScript", "Supabase", "OpenAI API", "Tailwind CSS", "Vercel"]
  },
  {
    id: "augusta-lights-ai",
    title: "Augusta Lights AI — Architectural Lighting Visualization & Quote Platform",
    subtitle: "Mobile-first architectural holiday and commercial lighting quotation platform with interactive multi-zone rendering.",
    category: "multimodal-vision",
    categoryLabel: "Computer Vision & Multimodal",
    liveUrl: "https://augusta-lights-ai.vercel.app",
    githubUrl: "https://github.com/exelentshakil/augusta-lights-ai",
    previewImage: "/screenshots/ai/augusta-lights-ai.png",
    badge: "Vision Canvas & Multi-Zone Quoting",
    featured: false,
    architecturalPrinciple: {
      headline: "Roofline Measurement Calculation + Photorealistic Glow Synthesis",
      description: "Calculates precise linear footage along rooflines and architectural fascias. Renders photorealistic LED lighting color temperatures and patterns onto customer home photos."
    },
    keyFeatures: [
      "Interactive photo canvas allowing customers to preview holiday lighting layouts on their home",
      "Automatic linear footage and bulb count estimator based on architectural roofline inputs",
      "Multi-zone color palette selector (Warm White, Commercial RGB, Festive Accents)",
      "Instant formal PDF proposal generator with integrated deposit payment links"
    ],
    clientValue: "Triples closing rates for exterior lighting contractors by showing customers photorealistic renders before installation.",
    metrics: "3.1x Close Rate • Sub-60s Instant Estimate",
    stack: ["Next.js 15", "TypeScript", "HTML5 Canvas", "Tailwind CSS", "Vercel"]
  },
  {
    id: "personaflow-ai",
    title: "PersonaFlow AI — Consumer AI Simulation & Qualitative Intelligence",
    subtitle: "Consumer persona simulation engine conducting synthetic focus groups and generating automated PDF market research dossiers.",
    category: "autonomous-agents",
    categoryLabel: "Autonomous Agents",
    liveUrl: "https://personaflow-ai-phi.vercel.app",
    githubUrl: "https://github.com/exelentshakil/personaflow-ai",
    previewImage: "/screenshots/ai/personaflow-ai.png",
    badge: "Synthetic Focus Groups & Dossier AI",
    featured: false,
    architecturalPrinciple: {
      headline: "Psychographic Persona Anchoring + Divergent Multi-Agent Debate",
      description: "Simulates diverse consumer demographics with strictly anchored psychographic traits. Orchestrates multi-agent debate rounds to identify product objections and pricing sensitivities."
    },
    keyFeatures: [
      "Autonomous synthetic focus group simulator modeling specific consumer demographics",
      "Adversarial product critique rounds revealing hidden purchase objections",
      "Automated market research dossier generator compiling quantitative sentiment charts",
      "Exportable executive PDF briefing ready for product leadership and investors"
    ],
    clientValue: "Delivers comprehensive consumer qualitative research in 15 minutes that traditionally requires weeks of focus groups.",
    metrics: "92% Focus Group Correlation • 15m Turnaround",
    stack: ["Next.js 15", "TypeScript", "OpenAI API", "Claude API", "Tailwind CSS", "Vercel"]
  },
  {
    id: "ai-systems-cockpit",
    title: "AI Systems Cockpit — Fractional Systems Advisor & Cost Router",
    subtitle: "Fractional AI systems executive console featuring multi-model cost routing, latency benchmarking, and architecture governance.",
    category: "rag-knowledge",
    categoryLabel: "Governed RAG & Knowledge",
    liveUrl: "https://ai-systems-cockpit.vercel.app",
    githubUrl: "https://github.com/exelentshakil/ai-systems-cockpit",
    previewImage: "/screenshots/ai/ai-systems-cockpit.png",
    badge: "Model Cost Router & Latency Bench",
    featured: false,
    architecturalPrinciple: {
      headline: "Dynamic Model Fallback Routing + Cost-Performance Frontier Analysis",
      description: "Routes inference tasks dynamically based on complexity scoring. Shifts high-volume routine tasks to flash models while reserving frontier reasoning models for complex analytical edge cases."
    },
    keyFeatures: [
      "Dynamic cost router evaluating task complexity to select optimal model tier",
      "Live latency and token burn telemetry benchmarking OpenAI, Anthropic, and Google",
      "Architecture decision record (ADR) generator compiling enterprise system blueprints",
      "Comprehensive security posture audit assessing OWASP LLM Top 10 vulnerabilities"
    ],
    clientValue: "Provides enterprise founders with fractional AI architecture leadership, slashing token spend while improving response quality.",
    metrics: "68% Token Cost Reduction • Sub-200ms Router",
    stack: ["Next.js 15", "TypeScript", "OpenAI API", "Claude API", "Gemini API", "Tailwind CSS"]
  },
  {
    id: "ontario-student-voice",
    title: "Ontario Student Voice — Career College Enrollment Voice Agent",
    subtitle: "Autonomous outbound voice verification and qualification pipeline for Ontario career colleges adhering to Ministry standards.",
    category: "autonomous-agents",
    categoryLabel: "Autonomous Agents",
    liveUrl: "https://ontario-student-voice.vercel.app",
    githubUrl: "https://github.com/exelentshakil/ontario-student-voice",
    previewImage: "/screenshots/ai/ontario-student-voice.png",
    badge: "Voice Admissions & Ministry Compliance",
    featured: false,
    architecturalPrinciple: {
      headline: "Ministry Regulatory Script Adherence + Conversational Lead Qualification",
      description: "Conducts compliant educational discovery calls using natural voice synthesis. Validates prerequisite qualifications and booking readiness while strictly adhering to Ontario Ministry guidelines."
    },
    keyFeatures: [
      "Ultra-low-latency voice conversational agent conducting student admissions interviews",
      "Prerequisite verification engine checking secondary school prerequisites and program interest",
      "Automated appointment scheduling directly into admissions advisor calendars",
      "Full call audio recording, sentiment analysis, and structured CRM transcript logging"
    ],
    clientValue: "Engages 100% of student inquiries within 60 seconds of form submission, tripling college enrollment interview bookings.",
    metrics: "3.2x Booking Lift • Sub-60s Response Time",
    stack: ["Next.js 15", "TypeScript", "Retell AI", "Twilio API", "Tailwind CSS", "Vercel"]
  },
  {
    id: "retirement-scorecard-app",
    title: "Retirement Scorecard — Advisory Diagnostics & Wealth Simulator",
    subtitle: "Wealth advisory diagnostics engine assessing retirement readiness, tax drag, and portfolio longevity across 4 risk vectors.",
    category: "legal-fintech",
    categoryLabel: "Legal & FinTech AI",
    liveUrl: "https://retirement-scorecard-app.vercel.app",
    githubUrl: "https://github.com/exelentshakil/retirement-scorecard-app",
    previewImage: "/screenshots/ai/retirement-scorecard-app.png",
    badge: "Financial Diagnostics & Wealth Sim",
    featured: false,
    architecturalPrinciple: {
      headline: "Deterministic Actuarial Math + Personalized Advisory Synthesis",
      description: "Separates mathematical financial simulations from language models. Calculates retirement runway using deterministic Monte Carlo models and uses AI strictly for tailored narrative synthesis."
    },
    keyFeatures: [
      "4-quadrant diagnostic scorecard evaluating Longevity, Healthcare, Taxes, and Market Volatility",
      "Interactive retirement timeline visualizer modeling safe withdrawal rates (4% rule)",
      "Automated PDF wealth readiness report compiling advisor-branded recommendations",
      "High-conversion lead capture gate connecting prospects with licensed financial advisors"
    ],
    clientValue: "Generates highly qualified, pre-educated wealth management client leads with detailed financial profile dossiers.",
    metrics: "4.8x Lead Conversion Lift • 100% Invariants",
    stack: ["Next.js 15", "TypeScript", "Chart.js", "OpenAI API", "Tailwind CSS", "Vercel"]
  },
  {
    id: "home-loan-review-ai",
    title: "HomeLoanRev AI — Mortgage Client Reactivation & Review Engine",
    subtitle: "Conversational mortgage client engagement platform conducting annual home loan reviews and refinancing qualification.",
    category: "autonomous-agents",
    categoryLabel: "Autonomous Agents",
    liveUrl: "https://home-loan-review-ai.vercel.app",
    githubUrl: "https://github.com/exelentshakil/home-loan-review-ai",
    previewImage: "/screenshots/ai/home-loan-review-ai.png",
    badge: "Mortgage Reactivation & Refinance AI",
    featured: false,
    architecturalPrinciple: {
      headline: "Interest Rate Differential Modeling + Automated Review Prompts",
      description: "Calculates monthly savings based on live mortgage rate spreads. Automatically prompts past borrower databases to book annual reviews when refinancing yields positive return."
    },
    keyFeatures: [
      "Conversational loan review assistant qualifying equity position and current interest rates",
      "Dynamic refinancing savings calculator estimating lifetime interest reduction",
      "Automated booking integration with mortgage broker calendar systems",
      "Multi-channel SMS and email reactivation campaigns with personalization tokens"
    ],
    clientValue: "Reactivates dormant mortgage borrower databases, generating consistent refinancing and equity release commissions.",
    metrics: "22% Dormant Reactivation • Sub-2m Math",
    stack: ["Next.js 15", "TypeScript", "OpenAI API", "Supabase", "Tailwind CSS", "Vercel"]
  },
  {
    id: "shk-process-ops",
    title: "W\u00e4rme Wimmer SHK Ops — Plumbing & HVAC Autonomous Dispatch",
    subtitle: "German sanitary, heating, and air conditioning (SHK) business process platform with automated emergency dispatch and n8n pipelines.",
    category: "workflow-orchestration",
    categoryLabel: "Orchestration & Quoting",
    liveUrl: "https://shk-process-ops.vercel.app",
    githubUrl: "https://github.com/exelentshakil/shk-process-ops",
    previewImage: "/screenshots/ai/shk-process-ops.png",
    badge: "German HVAC Dispatch & n8n",
    featured: false,
    architecturalPrinciple: {
      headline: "German Localization Invariants + Emergency Heating Dispatch SLAs",
      description: "Designed specifically for German craft businesses (Handwerk). Prioritizes boiler breakdown emergency calls in winter based on severe cold weather SLAs and technician radius."
    },
    keyFeatures: [
      "Emergency heating breakdown triage dashboard with automated technician assignment",
      "Self-hosted n8n workflow engine syncing customer intake with field service ERPs",
      "Native German language conversational intake respecting Handwerk terminology",
      "Parts inventory lookup verifying heating replacement component availability"
    ],
    clientValue: "Eliminates administrative dispatch overhead for heating contractors while meeting sub-2-hour winter emergency SLAs.",
    metrics: "Sub-2h Emergency SLA • 65% Dispatch Auto",
    stack: ["Next.js 15", "TypeScript", "n8n", "OpenAI API", "Tailwind CSS", "Vercel"]
  },
  {
    id: "atelier-barbershop",
    title: "Atelier Grooming — Bespoke Editorial Barbershop Platform",
    subtitle: "High-density editorial barbershop web platform featuring split-drag before/after visualizers and friction-free booking.",
    category: "multimodal-vision",
    categoryLabel: "Computer Vision & Multimodal",
    liveUrl: "https://atelier-barbershop.vercel.app",
    githubUrl: "https://github.com/exelentshakil/atelier-barbershop",
    previewImage: "/screenshots/ai/atelier-barbershop.png",
    badge: "Split-Drag Visualizer & Studio Booking",
    featured: false,
    architecturalPrinciple: {
      headline: "Zero-Layout-Shift Media Loading + Frictionless 3-Step Appointment Flow",
      description: "Delivers instantaneous visual transitions with pre-computed aspect ratios and progressive image loading. Eliminates booking drop-offs through an atomic 3-step scheduling funnel."
    },
    keyFeatures: [
      "Interactive before/after split drag slider showcasing precision grooming transformations",
      "3-step friction-free appointment scheduling engine with barber selection and SMS reminders",
      "Owner no-code studio enabling instant service menu and pricing updates",
      "Local SEO schema integration driving high-ranking Google Maps visibility"
    ],
    clientValue: "Elevates barbershop brand perception to luxury studio tiers while boosting appointment booking conversions by 45%.",
    metrics: "45% Booking Lift • 100/100 Lighthouse",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Vercel"]
  },
  {
    id: "buildinspect-ai",
    title: "BuildInspect AI — Computer Vision Construction & OSHA Compliance",
    subtitle: "Computer vision building inspection platform detecting structural defects and OSHA code violations in real time.",
    category: "multimodal-vision",
    categoryLabel: "Computer Vision & Multimodal",
    liveUrl: "https://buildinspect-ai.vercel.app",
    githubUrl: "https://github.com/exelentshakil/buildinspect-ai",
    previewImage: "/screenshots/ai/buildinspect-ai.png",
    badge: "Vision Defect Detection & AS 4349.1",
    featured: false,
    architecturalPrinciple: {
      headline: "Multimodal Bounding-Box Detection + Statutory Code Cross-Referencing",
      description: "Analyzes site photographs to detect concrete spalling, moisture intrusion, and framing non-compliance. Cross-references detected anomalies directly against AS 4349.1 and NCC standards."
    },
    keyFeatures: [
      "Real-time computer vision defect classifier pinpointing structural risks on site photos",
      "Automated building code mapping linking visible defects to statutory inspection requirements",
      "Instant field inspection report generator compiling itemized repairs and photo evidence",
      "Contractor repair cost estimator calculating materials and labor ranges for defects"
    ],
    clientValue: "Accelerates commercial and residential building inspections from days to minutes with automated code-verified reporting.",
    metrics: "96.4% Detection Precision • 80% Time Savings",
    stack: ["Next.js 15", "TypeScript", "OpenAI Vision", "Gemini 2.5 Flash", "Tailwind CSS", "Vercel"]
  },
  {
    id: "agentops-core",
    title: "AgentOps Core — Multi-Agent Swarm Orchestration & Trace Console",
    subtitle: "Production-grade multi-agent governance platform providing DAG workflow scheduling, trace observability, and token telemetry.",
    category: "autonomous-agents",
    categoryLabel: "Autonomous Agents",
    liveUrl: "https://agentops-core.vercel.app",
    githubUrl: "https://github.com/exelentshakil/agentops-core",
    previewImage: "/screenshots/ai/agentops-core.png",
    badge: "Agent Swarm DAG & Trace Telemetry",
    featured: false,
    architecturalPrinciple: {
      headline: "Directed Acyclic Graph (DAG) Execution + End-to-End Span Telemetry",
      description: "Orchestrates complex multi-agent reasoning chains via validated DAG state graphs. Captures step-level latency, prompt token burn, and tool call returns for full observability."
    },
    keyFeatures: [
      "Visual DAG pipeline editor orchestrating multi-agent dependencies and parallel execution",
      "Full trace span visualizer inspecting prompt tokens, reasoning chains, and tool inputs/outputs",
      "Automated circuit breakers halting runaway agent loops before token budgets exceed limits",
      "Adversarial verification testing agent outputs against predefined safety and accuracy rubrics"
    ],
    clientValue: "Provides complete operational control and debugging visibility over complex enterprise multi-agent swarms.",
    metrics: "0 Runaway Loops • Sub-10ms Trace Overhead",
    stack: ["Next.js 15", "TypeScript", "OpenAI API", "Claude API", "Tailwind CSS", "Vercel"]
  },
  {
    id: "scaleops-core",
    title: "ScaleOps Core — SaaS Infrastructure Reliability & Chaos Console",
    subtitle: "SaaS backend reliability and autoscaling platform with automated failover testing, database query profiling, and queue monitors.",
    category: "workflow-orchestration",
    categoryLabel: "Orchestration & Quoting",
    liveUrl: "https://scaleops-core.vercel.app",
    githubUrl: "https://github.com/exelentshakil/scaleops-core",
    previewImage: "/screenshots/ai/scaleops-core.png",
    badge: "SaaS Autoscaling & Chaos Engine",
    featured: false,
    architecturalPrinciple: {
      headline: "Automated Load Shedding + Controlled Chaos Injection Harness",
      description: "Protects high-throughput microservices from cascading failures via adaptive concurrency limits and load shedding. Simulates regional outages and database saturation to verify failover."
    },
    keyFeatures: [
      "Interactive chaos simulator testing system resilience under simulated network latency and node death",
      "PostgreSQL query pool saturation monitor detecting connection starvation and locking bottlenecks",
      "Event queue lag monitor tracking message backlog and worker fleet auto-scaling triggers",
      "Executive SLA uptime dashboard tracking 99.99% availability and error budget consumption"
    ],
    clientValue: "Ensures mission-critical SaaS platforms survive traffic spikes and cloud provider disruptions without downtime.",
    metrics: "99.99% Guaranteed Uptime • Sub-100ms Load Shedding",
    stack: ["Next.js 15", "TypeScript", "PostgreSQL", "Docker", "Tailwind CSS", "Vercel"]
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
