import slugify from 'slugify';


export interface Site {
  name: string;
  url: string;
  category: "marketplace" | "agency" | "business" | "lifestyle" | "healthcare" | "legal" | "sports" | "ecommerce" | "ai";
  image?: string;
  featured?: boolean;
  
  // Upwork hooks
  clientType?: string;
  hook?: string;
  problems_solved?: string[];
  metric?: string;
  technologies?: string[];
}

export const sites: Site[] = [
  // --------------------------------------------------------------------------
  // AI & AUTONOMOUS AGENTS
  // --------------------------------------------------------------------------
  {
    name: "NightShift AI Employee",
    url: "ai-employee-demo-mu.vercel.app",
    category: "ai",
    featured: true,
    image: "/screenshots/ai/nightshift-preview.png",
    clientType: "Autonomous Inbox Agent",
    hook: "Grounded RAG inbox agent with human-in-the-loop approval gates",
    problems_solved: [
      "Strict citation-grounded answers citing verified company docs",
      "Drafted queue holding Gmail/CRM mutations until human approval",
      "Dual model fallback chain (Claude & Gemini) for 99.9% uptime"
    ],
    metric: "100% Auditable Actions • 0 Rogue Writes",
    technologies: ["Next.js 15", "Gemini API", "Claude API", "Supabase", "TypeScript"]
  },
  {
    name: "Prospect OS",
    url: "prospect-os-tau.vercel.app",
    category: "ai",
    featured: true,
    image: "/screenshots/ai/prospect-os.png",
    clientType: "Autonomous Outbound Engine",
    hook: "8 sub-agents running ICP discovery to booking with auditable rubric scoring",
    problems_solved: [
      "The rubric scores qualification, the model never does",
      "12 auditable weighted components across fit, pain, timing",
      "Automated enrichment, competitive analysis, and multi-touch copy"
    ],
    metric: "12 Scoring Factors • 8 Sub-Agents",
    technologies: ["Next.js", "Claude 3.5 Sonnet", "TypeScript", "Deterministic Rubric"]
  },
  {
    name: "ParcelQuote",
    url: "parcelquote.vercel.app",
    category: "ai",
    featured: true,
    image: "/screenshots/ai/parcelquote.png",
    clientType: "Instant Property Quoting",
    hook: "Instant roof and property quoting using OpenStreetMap polygon geometry",
    problems_solved: [
      "Shoelace formula calculating building footprint area directly from OSM",
      "Confidence-scored routing triage: <72% flags to human exceptions queue",
      "Versioned pricing rules table: Admin edits rules without code redeploys"
    ],
    metric: "Sub-Second Quoting • <72% Exception Triage",
    technologies: ["Next.js", "OpenStreetMap API", "PostgreSQL", "TypeScript"]
  },
  {
    name: "Rehab Estimator API",
    url: "rehab-estimator-api.vercel.app",
    category: "ai",
    featured: true,
    image: "/screenshots/ai/rehab-estimator.png",
    clientType: "Computer Vision Property Estimator",
    hook: "Multi-photo condition classification with deterministic cost book pricing",
    problems_solved: [
      "Vision model observes condition from closed taxonomy (never outputs dollars)",
      "Deterministic pricing engine computes low/expected/high rehab budget",
      "Reconciles 100% to audited cost benchmarks defensible to credit committees"
    ],
    metric: "40+ Standardized Repair Items",
    technologies: ["Next.js", "Gemini 1.5 Pro", "OpenAI Vision", "REST API"]
  },
  {
    name: "Forward RAG OS",
    url: "forward-rag-os.vercel.app",
    category: "ai",
    featured: true,
    image: "/screenshots/ai/forward-rag-os.png",
    clientType: "Governed Enterprise RAG",
    hook: "Governed knowledge retrieval with de-identification quarantine and ChatGPT boundary protection",
    problems_solved: [
      "Air-gapped 3-layer data tiering preventing confidential client data leakage into shared AI",
      "De-identification quarantine pipeline with senior architect approval gate before indexing",
      "Content Registry metadata validation guaranteeing zero unauthorized AI retrieval"
    ],
    metric: "3-Tier Data Isolation • Zero Leakage Risk",
    technologies: ["Next.js 15", "TypeScript", "GPT-4o", "Gemini 2.0 Flash", "Tailwind CSS"]
  },
  {
    name: "LedgerFlow Core",
    url: "ledgerflow-core.vercel.app",
    category: "ai",
    featured: true,
    image: "/screenshots/ai/ledgerflow-core.png",
    clientType: "FinTech & Payments Engine",
    hook: "Production payment settlement with NACHA 94-char compilation, double-entry ledger, and dual AI compliance",
    problems_solved: [
      "Atomic UUIDv4 idempotency lock intercepting replay attacks in sub-10ms with zero duplicate debits",
      "Mathematical double-entry ledger invariant guaranteeing debit/credit equilibrium across all accounts",
      "PostgreSQL 16 composite B-Tree index scan dropping query latency from 142ms down to 1.4ms"
    ],
    metric: "0.00% Double-Debit Risk • Sub-2ms Queries",
    technologies: ["Next.js 15", "TypeScript", "PostgreSQL 16", "OpenAI", "Gemini", "Tailwind CSS"]
  },
  {
    name: "Legal AI Workflow Assistant",
    url: "ai-legalassistant.vercel.app",
    category: "ai",
    featured: true,
    image: "/screenshots/ai/legal-ai-assistant.png",
    clientType: "Enterprise Legal Workflow",
    hook: "Contract analysis and risk factor extraction for 27-member law firm",
    problems_solved: [
      "Gemini 1.5 Pro long-context document analysis and entity extraction",
      "Risk factor scoring with specific paragraph citations and confidence metrics",
      "Deterministic offline fallback mode for zero-downtime client demonstrations"
    ],
    metric: "45s Contract Triage • 90%+ Time Saved",
    technologies: ["Next.js", "Google AI Studio", "Gemini 1.5 Pro", "Google Cloud"]
  },
  {
    name: "AI Automation Hub",
    url: "ai-automationhub.vercel.app",
    category: "ai",
    featured: true,
    image: "/screenshots/ai/ai-automation-hub.png",
    clientType: "Multi-Pipeline Orchestrator",
    hook: "Confidence-routed AI orchestration across Email, CRM, and PM tools",
    problems_solved: [
      "Confidence routing: >90% autonomous execution, <90% human-in-the-loop review",
      "Multi-channel ingestion across emails, leads, and project events",
      "Dual LLM fallback chain (Claude 3.5 Sonnet -> Gemini 1.5 Pro)"
    ],
    metric: "<2s Inference Latency • 99.9% Uptime",
    technologies: ["Next.js 15", "Claude 3.5 Sonnet", "Gemini API", "TypeScript"]
  },

  {
    name: "CallScore AI",
    url: "callscoreai.vercel.app",
    category: "ai",
    featured: true,
    image: "/screenshots/ai/callscore-ai.png",
    clientType: "Deterministic Call Grading",
    hook: "Voice transcription and drift-free rubric quality scoring for customer service",
    problems_solved: [
      "Model extracts quotes and qualitative rating, formula computes 0-100 score",
      "Published /api/rubric reproducible by independent auditors",
      "Historical trend analysis identifying coaching opportunities per manager"
    ],
    metric: "100% Reproducible QA Scores",
    technologies: ["Next.js", "Whisper STT", "Claude API", "PostgreSQL"]
  },
  {
    name: "InterCapital Lending AI",
    url: "intercapital-lending-ai.vercel.app",
    category: "ai",
    featured: true,
    image: "/screenshots/ai/intercapital-ai.png",
    clientType: "Commercial Real Estate AI",
    hook: "AI commercial lending dashboard with automated OCR extraction and RAG underwriting",
    problems_solved: [
      "Natural language queries over dense borrower tax packets and rent rolls",
      "Automated extraction and validation of LTV and DSCR ratios",
      "Event-driven background processing with Inngest to eliminate timeouts"
    ],
    metric: "65% Faster Loan File Review",
    technologies: ["Next.js 15", "Inngest", "pgvector", "Tailwind CSS"]
  },
  {
    name: "CarFix AI",
    url: "aicarfix.vercel.app",
    category: "ai",
    featured: true,
    image: "/screenshots/ai/carfix-ai.png",
    clientType: "Multimodal Auto Estimator",
    hook: "Multimodal damage detection and preliminary repair pricing via async background queues",
    problems_solved: [
      "Vehicle Make, Model, Year, Trim identification from exterior smartphone photos",
      "Panel damage detection across scratches, dents, structural deformation",
      "Async queue architecture with polling status to prevent Vercel 504 timeouts"
    ],
    metric: "Sub-30s Triage Assessment",
    technologies: ["Next.js", "Gemini Vision", "Inngest", "Supabase"]
  },
  {
    name: "IsoCore SaaS \— Multi-Tenant Kernel RLS & Invariant Ledger",
    url: "isocore-saas.vercel.app",
    category: "ai",
    featured: true,
    image: "/screenshots/ai/isocore-saas.png",
    clientType: "Multi-Tenant RLS & Invariants",
    hook: "Enterprise SaaS kernel with multi-tenant row-level security, deterministic ledger invariants, and 5-role RBAC.",
    problems_solved: [
      "PostgreSQL 16 Row-Level Security (RLS) policies isolating tenant data at the query engine level",
      "Deterministic double-entry financial ledger enforcing Debits == Credits invariant across all accounts",
      "Granular 5-role Role-Based Access Control (Owner, Admin, Member, Auditor, Billing)",
    ],
    metric: "0.00% Cross-Tenant Bleed \• Sub-5ms Verification",
    technologies: ["Next.js 15", "TypeScript", "PostgreSQL 16", "Supabase", "Tailwind CSS", "Vercel"]
  },
  {
    name: "TaxFlow Core \— 14-Step Tax Pipeline OCR & Filing Engine",
    url: "taxflow-core.vercel.app",
    category: "ai",
    featured: true,
    image: "/screenshots/ai/taxflow-core.png",
    clientType: "Dual AI OCR & Form 8879 Gate",
    hook: "End-to-end tax practice automation pipeline with dual AI OCR extraction, Form 8879 gates, and Drake/UltraTax bridges.",
    problems_solved: [
      "14-stage finite state pipeline preventing premature tax return filing before verification gates",
      "Dual-provider vision OCR (GPT-4o + Gemini 2.5 Flash) parsing W-2, 1099-NEC, and 1040 forms",
      "Automated Form 8879 e-signature integration with Stripe fee gate release trigger",
    ],
    metric: "85% Manual Entry Reduction \• 99.4% OCR Field Accuracy",
    technologies: ["Next.js 15", "TypeScript", "OpenAI Vision", "Gemini 2.5 Flash", "Tailwind CSS", "Vercel"]
  },
  {
    name: "TheraScore AI \— Clinical Psychotherapy Quality & Adherence Platform",
    url: "therascore-ai.vercel.app",
    category: "ai",
    featured: true,
    image: "/screenshots/ai/therascore-ai.png",
    clientType: "DBT-ARS & CTRS Scoring Engine",
    hook: "HIPAA-compliant psychotherapy session evaluation engine computing DBT-ARS and CTRS adherence scores with inline safety firewalls.",
    problems_solved: [
      "DBT-ARS (Dialectical Behavior Therapy) and CTRS (Cognitive Therapy) adherence grading",
      "Inline HIPAA Safe Harbor de-identification filter redacting client PII prior to inference",
      "Sub-2.0s transcript evaluation latency with micro-observability token telemetry",
    ],
    metric: "100% PII De-Identification \• Sub-2s Turnaround",
    technologies: ["Next.js 15", "TypeScript", "OpenAI API", "Gemini API", "Tailwind CSS", "Vercel"]
  },
  {
    name: "SDR Resume OS \— Vector RAG Career Positioning & Transformation Engine",
    url: "sdr-resume-os.vercel.app",
    category: "ai",
    featured: true,
    image: "/screenshots/ai/sdr-resume-os.png",
    clientType: "Vector RAG & 5 Transformation Laws",
    hook: "Career positioning platform utilizing 50+ exemplar vector embeddings and a VP of Sales 6-second glance evaluation model.",
    problems_solved: [
      "50+ enterprise SDR exemplar vector bank indexed in Supabase pgvector",
      "5 strict SDR transformation laws converting task bullet points into revenue metrics",
      "VP of Sales 6-second glance evaluator scoring ATS match and quota impact",
    ],
    metric: "3.4x Callback Lift \• Sub-1s Vector Retrieval",
    technologies: ["Next.js 15", "TypeScript", "Supabase pgvector", "OpenAI API", "Gemini API", "Tailwind CSS"]
  },
  {
    name: "GearSignal AI \— Modular Social-Listening & Lead Discovery MVP",
    url: "gearsignal-ai.vercel.app",
    category: "ai",
    featured: true,
    image: "/screenshots/ai/gearsignal-ai.png",
    clientType: "Real-Time Social Listening & Intent AI",
    hook: "Autonomous social listening engine monitoring Reddit and guitar marketplaces with centralized keyword routing and Slack Block Kit alerts.",
    problems_solved: [
      "Real-time Reddit & marketplace crawler pipeline with rate-limit backoff guards",
      "Dual-provider intent classifier (GPT-4o-mini + Gemini 2.5 Flash) filtering noise",
      "Slack Block Kit interactive alert payload compiler with 1-click lead claim buttons",
    ],
    metric: "94% High-Intent Precision \• Sub-45s Alert Latency",
    technologies: ["Next.js 15", "TypeScript", "OpenAI API", "Gemini API", "Slack API", "Tailwind CSS"]
  },
  {
    name: "SquidERP \— Agentic Architecture Governance & Drift Firewall",
    url: "squiderp-agentic-governance.vercel.app",
    category: "ai",
    featured: true,
    image: "/screenshots/ai/squiderp-agentic-governance.png",
    clientType: "Agentic Control Plane & Drift Firewall",
    hook: "Enterprise ERP agentic control plane governing multi-agent ERP operations with drift detection and compliance gates.",
    problems_solved: [
      "Multi-agent orchestration cockpit coordinating procurement, inventory, and ledger agents",
      "Drift detection firewall flagging probabilistic hallucination before database writes",
      "Human-in-the-loop executive approval gates for high-value purchase orders",
    ],
    metric: "0 Unchecked DB Writes \• 100% Policy-Bounded",
    technologies: ["Next.js 15", "TypeScript", "Claude API", "OpenAI API", "Supabase", "Tailwind CSS"]
  },
  {
    name: "CallGuard Ops \— Trade Answering Voice AI & Dispatch Cockpit",
    url: "callguard-ops.vercel.app",
    category: "ai",
    featured: true,
    image: "/screenshots/ai/callguard-ops.png",
    clientType: "Retell Voice AI & Make.com DLQ",
    hook: "Voice AI telephone answering system with Retell Scottish trade prompt bench, Make.com DLQ handlers, and Twilio failover.",
    problems_solved: [
      "Retell AI voice prompt testing harness tuned for high-pressure emergency trade calls",
      "Make.com error-handling architecture with automatic Dead-Letter Queue (DLQ) retries",
      "Wappi WhatsApp webhook engine with seamless fallback to Twilio SMS on delivery failure",
    ],
    metric: "99.9% Call Intake Reliability \• Sub-800ms Voice Latency",
    technologies: ["Next.js 15", "TypeScript", "Retell AI", "Twilio API", "Make.com", "Tailwind CSS"]
  },
  {
    name: "RevOps Orchestrator \— Enterprise Revenue Automation Engine",
    url: "revops-orchestrator-ai.vercel.app",
    category: "ai",
    featured: true,
    image: "/screenshots/ai/revops-orchestrator-ai.png",
    clientType: "Multi-Agent RevOps & CRM Sync",
    hook: "Enterprise RevOps orchestration platform synchronizing Salesforce, HubSpot, and billing systems via multi-agent state machines.",
    problems_solved: [
      "Multi-agent RevOps pipeline resolving duplicate leads and conflicting lifecycle stages",
      "Bi-directional webhook synchronization with distributed atomic deduplication locks",
      "Automated quota attainment and revenue leakage diagnostic simulator",
    ],
    metric: "100% State Consistency \• Zero Duplicate Records",
    technologies: ["Next.js 15", "TypeScript", "Inngest", "Salesforce API", "HubSpot API", "Tailwind CSS"]
  },
  {
    name: "DocRef Vault \— Full-Stack Document Reference & Filing System",
    url: "docref-vault.vercel.app",
    category: "ai",
    featured: true,
    image: "/screenshots/ai/docref-vault.png",
    clientType: "Deterministic Filing & Semantic RAG",
    hook: "Regulatory document reference and semantic filing platform with deterministic section citation and metadata extraction.",
    problems_solved: [
      "Deterministic PDF parsing engine indexing regulatory filings with section-level fidelity",
      "Hybrid semantic + BM25 keyword search engine powered by pgvector embeddings",
      "Interactive split-pane viewer verifying generated claims against highlighted source text",
    ],
    metric: "70% Faster Review \• 100% Verified Citations",
    technologies: ["Next.js 15", "TypeScript", "PostgreSQL", "Supabase pgvector", "Tailwind CSS", "Vercel"]
  },
  {
    name: "Claude Dev Cockpit \— Anthropic Architecture & Workflow Bench",
    url: "claude-dev-cockpit.vercel.app",
    category: "ai",
    featured: false,
    image: "/screenshots/ai/claude-dev-cockpit.png",
    clientType: "Prompt Caching & Multi-Agent Bench",
    hook: "Production architecture workbench and evaluation cockpit for multi-agent workflows, prompt caching, and tool execution.",
    problems_solved: [
      "Anthropic prompt caching latency profiler demonstrating 85%+ TTFT acceleration",
      "Multi-agent code review harness with adversarial verification passes",
      "Structured JSON schema validation and defensive error boundary recovery",
    ],
    metric: "90% Cost Reduction \• 85% TTFT Acceleration",
    technologies: ["Next.js 15", "TypeScript", "Claude API", "Prompt Caching", "Tailwind CSS", "Vercel"]
  },
  {
    name: "E-Rate Procure IQ \— USAC Form 470 School Procurement Platform",
    url: "erate-procure-iq.vercel.app",
    category: "ai",
    featured: false,
    image: "/screenshots/ai/erate-procure-iq.png",
    clientType: "USAC Form 470 & RFP Parser",
    hook: "Public sector procurement intelligence engine parsing USAC E-Rate Form 470 RFP filings for school hardware and telecom contracts.",
    problems_solved: [
      "Automated USAC Form 470 filing scraper and structured data normalizer",
      "RFP requirement extraction identifying manufacturer restrictions and submission deadlines",
      "Match scoring engine connecting MSP hardware catalogs with school district bids",
    ],
    metric: "10x Faster Discovery \• 100% USAC Compliance",
    technologies: ["Next.js 15", "TypeScript", "Gemini API", "OpenAI API", "Supabase", "Tailwind CSS"]
  },
  {
    name: "Cozad Medical Ops \— Healthcare Prior Authorization AI",
    url: "cozad-priorauth.vercel.app",
    category: "ai",
    featured: false,
    image: "/screenshots/ai/cozad-priorauth.png",
    clientType: "Clinical Prior Auth & EHR Matching",
    hook: "Clinical documentation and prior authorization engine matching patient EHR records to insurance payer medical necessity rubrics.",
    problems_solved: [
      "Automated clinical note summarization aligned with specific commercial payer policies",
      "ICD-10 and CPT code validation verifying medical necessity documentation completeness",
      "1-click generation of physician attestation letters and appeal packets",
    ],
    metric: "88% Denial Reduction \• 24h Approval Turnaround",
    technologies: ["Next.js 15", "TypeScript", "OpenAI API", "HIPAA Compliance", "Tailwind CSS", "Vercel"]
  },
  {
    name: "Nassau Clean AI \— Residential Cleaning Booking & Route Dispatch",
    url: "nassau-clean-ai.vercel.app",
    category: "ai",
    featured: false,
    image: "/screenshots/ai/nassau-clean-ai.png",
    clientType: "Dynamic Route Dispatch & Quote AI",
    hook: "Autonomous residential cleaning quote and booking engine with real-time distance matrix calculations and crew scheduling.",
    problems_solved: [
      "Instant multi-parameter quote calculator based on square footage, room count, and deep-clean tiers",
      "Interactive Long Island route clustering engine cutting daily crew commute hours",
      "Stripe deposit capture gate reserving calendar slots with instant SMS confirmation",
    ],
    metric: "4.2x Booking Conversion \• 32% Travel Time Savings",
    technologies: ["Next.js 15", "TypeScript", "Stripe API", "Google Maps API", "Tailwind CSS", "Vercel"]
  },
  {
    name: "Influencer Reach CRM \— Platform-Compliant Creator Engine",
    url: "influencer-reach-crm.vercel.app",
    category: "ai",
    featured: false,
    image: "/screenshots/ai/influencer-reach-crm.png",
    clientType: "Official API Compliance & Deal CRM",
    hook: "Enterprise creator outreach platform built strictly around official Meta Graph and TikTok APIs with automated rate-card tracking.",
    problems_solved: [
      "100% platform-compliant API architecture protecting corporate accounts from suspension",
      "Engagement authenticity detector filtering fake followers and algorithmic pod activity",
      "Multi-tier deal pipeline tracking contracts, deliverable status, and affiliate payouts",
    ],
    metric: "0 Account Bans \• 99.2% Authenticity Accuracy",
    technologies: ["Next.js 15", "TypeScript", "Meta Graph API", "TikTok API", "Tailwind CSS", "Vercel"]
  },
  {
    name: "Pipedrive Integrations Hub \— Bi-Directional Webhook & SMS Sync",
    url: "pipedrive-integrations-hub.vercel.app",
    category: "ai",
    featured: false,
    image: "/screenshots/ai/pipedrive-integrations-hub.png",
    clientType: "Bi-Directional Pipedrive Webhooks",
    hook: "Unified integration hub connecting Pipedrive CRM to Sinch AI SMS agents, attribution tracking, and Power BI data pipelines.",
    problems_solved: [
      "Sinch SMS conversational AI triggering instant lead engagement upon Pipedrive deal creation",
      "Bi-directional stage sync updating CRM deal records as SMS qualifications advance",
      "Multi-touch marketing attribution tracking source campaigns through to closed-won revenue",
    ],
    metric: "100% Webhook Delivery \• Sub-500ms Stage Sync",
    technologies: ["Next.js 15", "TypeScript", "Pipedrive API", "Sinch API", "Tailwind CSS", "Vercel"]
  },
  {
    name: "N8N Hospitality CRM \— Multilingual Guest Orchestrator",
    url: "n8n-hospitality-crm-ai.vercel.app",
    category: "ai",
    featured: false,
    image: "/screenshots/ai/n8n-hospitality-crm-ai.png",
    clientType: "n8n Hospitality & Multilingual AI",
    hook: "Autonomous hospitality management engine orchestrating guest inquiries, upsells, and multilingual support via n8n workflows.",
    problems_solved: [
      "Interactive n8n flow simulator showing live execution paths for booking and concierge events",
      "Context-aware multilingual translation preserving formal hospitality etiquette",
      "Automated pre-arrival upsell engine offering room upgrades and dining reservations",
    ],
    metric: "28% Ancillary Lift \• 80% Ticket Deflection",
    technologies: ["Next.js 15", "TypeScript", "n8n", "OpenAI API", "Tailwind CSS", "Vercel"]
  },
  {
    name: "TrendPulse AI \— Social Intelligence & Video Scripting Agent",
    url: "trendpulse-ai-agent.vercel.app",
    category: "ai",
    featured: false,
    image: "/screenshots/ai/trendpulse-ai-agent.png",
    clientType: "Viral Trend Analytics & Script AI",
    hook: "Autonomous multi-channel intelligence agent analyzing viral TikTok and YouTube trends to generate validated video scripts.",
    problems_solved: [
      "Real-time viral velocity tracker detecting emerging video trends before peak saturation",
      "Automated script compiler structuring high-retention video hooks and storytelling beats",
      "Multi-platform visual dashboard tracking engagement velocity across social niches",
    ],
    metric: "5x Faster Scripting \• 42% Retention Lift",
    technologies: ["Next.js 15", "TypeScript", "OpenAI API", "Gemini API", "Tailwind CSS", "Vercel"]
  },
  {
    name: "NextDrip VA Phone \— Healthcare IVR & Concierge Telephony",
    url: "nextdrip-va-phone.vercel.app",
    category: "ai",
    featured: false,
    image: "/screenshots/ai/nextdrip-va-phone.png",
    clientType: "Healthcare IVR & Twilio Routing",
    hook: "Virtual assistant telephony and SMS routing engine for specialty medical wellness and concierge IV therapy practices.",
    problems_solved: [
      "Interactive Twilio IVR call tree with intelligent business hours and emergency routing",
      "Automated two-way SMS concierge answering treatment FAQs and sending booking links",
      "HIPAA-compliant voicemail transcription with inline medical record redaction",
    ],
    metric: "0 Missed Patient Calls \• Sub-15s Recovery",
    technologies: ["Next.js 15", "TypeScript", "Twilio Voice API", "Twilio SMS", "Tailwind CSS", "Vercel"]
  },
  {
    name: "VSL Pipeline QA \— Video Script Generation & Compliance Studio",
    url: "vsl-pipeline-qa.vercel.app",
    category: "ai",
    featured: false,
    image: "/screenshots/ai/vsl-pipeline-qa.png",
    clientType: "VSL Scripting & FTC Compliance QA",
    hook: "Autonomous video sales letter pipeline generator with psychological hook modeling and FTC compliance verification.",
    problems_solved: [
      "Modular VSL script generator with 8 classic direct-response storytelling frameworks",
      "Real-time FTC compliance scanner flagging misleading claims and missing disclaimers",
      "Retention curve simulator predicting viewer drop-off points along the script timeline",
    ],
    metric: "100% FTC Guardrails \• 2.8x Watch-Through",
    technologies: ["Next.js 15", "TypeScript", "Claude API", "OpenAI API", "Tailwind CSS", "Vercel"]
  },
  {
    name: "Freedom Motors Sync \— Automotive Inventory & Sanity CMS Bridge",
    url: "freedom-motors-sync.vercel.app",
    category: "ai",
    featured: false,
    image: "/screenshots/ai/freedom-motors-sync.png",
    clientType: "Sanity CMS & Real-Time Inventory",
    hook: "Automotive dealer inventory synchronization platform linking dealer management systems (DMS) to Next.js 15 and Sanity CMS.",
    problems_solved: [
      "High-speed automotive inventory synchronizer parsing CSV, XML, and dealer API feeds",
      "Sanity CMS schema architecture managing multi-image galleries, VIN specs, and wheelchair accessibility tiers",
      "On-demand cache revalidation updating vehicle status the second a deposit is placed",
    ],
    metric: "Sub-100ms Loads \• Real-Time VIN Sync",
    technologies: ["Next.js 15", "TypeScript", "Sanity CMS", "Tailwind CSS", "Vercel"]
  },
  {
    name: "FSM Protocol Studio \— Frequency Research & Code Compiler",
    url: "fsm-protocol-studio.vercel.app",
    category: "ai",
    featured: false,
    image: "/screenshots/ai/fsm-protocol-studio.png",
    clientType: "Medical Device Protocol Compiler",
    hook: "Clinical research and protocol compilation engine for Frequency Specific Microcurrent (FSM) hardware and medical devices.",
    problems_solved: [
      "Dual-channel frequency protocol compiler mapping pathology to targeted tissue frequencies",
      "Biomedical literature RAG engine grounding treatment plans in clinical case studies",
      "Embedded C/Rust firmware code generator with checksum verification",
    ],
    metric: "100% Deterministic Firmware \• Zero Faults",
    technologies: ["Next.js 15", "TypeScript", "Claude API", "Rust/C Codegen", "Tailwind CSS", "Vercel"]
  },
  {
    name: "Cal Realty Ops \— California Real Estate Autonomous Transaction Layer",
    url: "cal-realty-ops.vercel.app",
    category: "ai",
    featured: false,
    image: "/screenshots/ai/cal-realty-ops.png",
    clientType: "CAR Forms & Escrow Timeline AI",
    hook: "Autonomous real estate transaction coordinator platform managing California Association of Realtors (CAR) forms and escrow timelines.",
    problems_solved: [
      "CAR (California Association of Realtors) standard form compliance auditor",
      "Automated escrow contingency milestone tracker with calculated statutory deadlines",
      "Document packet generator compiling complete buyer/seller disclosure packages",
    ],
    metric: "0 Missed Deadlines \• 100% CAR Compliance",
    technologies: ["Next.js 15", "TypeScript", "Supabase", "OpenAI API", "Tailwind CSS", "Vercel"]
  },
  {
    name: "Augusta Lights AI \— Architectural Lighting Visualization & Quote Platform",
    url: "augusta-lights-ai.vercel.app",
    category: "ai",
    featured: false,
    image: "/screenshots/ai/augusta-lights-ai.png",
    clientType: "Vision Canvas & Multi-Zone Quoting",
    hook: "Mobile-first architectural holiday and commercial lighting quotation platform with interactive multi-zone rendering.",
    problems_solved: [
      "Interactive photo canvas allowing customers to preview holiday lighting layouts on their home",
      "Automatic linear footage and bulb count estimator based on architectural roofline inputs",
      "Multi-zone color palette selector (Warm White, Commercial RGB, Festive Accents)",
    ],
    metric: "3.1x Close Rate \• Sub-60s Instant Estimate",
    technologies: ["Next.js 15", "TypeScript", "HTML5 Canvas", "Tailwind CSS", "Vercel"]
  },
  {
    name: "PersonaFlow AI \— Consumer AI Simulation & Qualitative Intelligence",
    url: "personaflow-ai-phi.vercel.app",
    category: "ai",
    featured: false,
    image: "/screenshots/ai/personaflow-ai.png",
    clientType: "Synthetic Focus Groups & Dossier AI",
    hook: "Consumer persona simulation engine conducting synthetic focus groups and generating automated PDF market research dossiers.",
    problems_solved: [
      "Autonomous synthetic focus group simulator modeling specific consumer demographics",
      "Adversarial product critique rounds revealing hidden purchase objections",
      "Automated market research dossier generator compiling quantitative sentiment charts",
    ],
    metric: "92% Focus Group Correlation \• 15m Turnaround",
    technologies: ["Next.js 15", "TypeScript", "OpenAI API", "Claude API", "Tailwind CSS", "Vercel"]
  },
  {
    name: "AI Systems Cockpit \— Fractional Systems Advisor & Cost Router",
    url: "ai-systems-cockpit.vercel.app",
    category: "ai",
    featured: false,
    image: "/screenshots/ai/ai-systems-cockpit.png",
    clientType: "Model Cost Router & Latency Bench",
    hook: "Fractional AI systems executive console featuring multi-model cost routing, latency benchmarking, and architecture governance.",
    problems_solved: [
      "Dynamic cost router evaluating task complexity to select optimal model tier",
      "Live latency and token burn telemetry benchmarking OpenAI, Anthropic, and Google",
      "Architecture decision record (ADR) generator compiling enterprise system blueprints",
    ],
    metric: "68% Token Cost Reduction \• Sub-200ms Router",
    technologies: ["Next.js 15", "TypeScript", "OpenAI API", "Claude API", "Gemini API", "Tailwind CSS"]
  },
  {
    name: "Ontario Student Voice \— Career College Enrollment Voice Agent",
    url: "ontario-student-voice.vercel.app",
    category: "ai",
    featured: false,
    image: "/screenshots/ai/ontario-student-voice.png",
    clientType: "Voice Admissions & Ministry Compliance",
    hook: "Autonomous outbound voice verification and qualification pipeline for Ontario career colleges adhering to Ministry standards.",
    problems_solved: [
      "Ultra-low-latency voice conversational agent conducting student admissions interviews",
      "Prerequisite verification engine checking secondary school prerequisites and program interest",
      "Automated appointment scheduling directly into admissions advisor calendars",
    ],
    metric: "3.2x Booking Lift \• Sub-60s Response Time",
    technologies: ["Next.js 15", "TypeScript", "Retell AI", "Twilio API", "Tailwind CSS", "Vercel"]
  },
  {
    name: "Retirement Scorecard \— Advisory Diagnostics & Wealth Simulator",
    url: "retirement-scorecard-app.vercel.app",
    category: "ai",
    featured: false,
    image: "/screenshots/ai/retirement-scorecard-app.png",
    clientType: "Financial Diagnostics & Wealth Sim",
    hook: "Wealth advisory diagnostics engine assessing retirement readiness, tax drag, and portfolio longevity across 4 risk vectors.",
    problems_solved: [
      "4-quadrant diagnostic scorecard evaluating Longevity, Healthcare, Taxes, and Market Volatility",
      "Interactive retirement timeline visualizer modeling safe withdrawal rates (4% rule)",
      "Automated PDF wealth readiness report compiling advisor-branded recommendations",
    ],
    metric: "4.8x Lead Conversion Lift \• 100% Invariants",
    technologies: ["Next.js 15", "TypeScript", "Chart.js", "OpenAI API", "Tailwind CSS", "Vercel"]
  },
  {
    name: "HomeLoanRev AI \— Mortgage Client Reactivation & Review Engine",
    url: "home-loan-review-ai.vercel.app",
    category: "ai",
    featured: false,
    image: "/screenshots/ai/home-loan-review-ai.png",
    clientType: "Mortgage Reactivation & Refinance AI",
    hook: "Conversational mortgage client engagement platform conducting annual home loan reviews and refinancing qualification.",
    problems_solved: [
      "Conversational loan review assistant qualifying equity position and current interest rates",
      "Dynamic refinancing savings calculator estimating lifetime interest reduction",
      "Automated booking integration with mortgage broker calendar systems",
    ],
    metric: "22% Dormant Reactivation \• Sub-2m Math",
    technologies: ["Next.js 15", "TypeScript", "OpenAI API", "Supabase", "Tailwind CSS", "Vercel"]
  },
  {
    name: "W\\u00e4rme Wimmer SHK Ops \— Plumbing & HVAC Autonomous Dispatch",
    url: "shk-process-ops.vercel.app",
    category: "ai",
    featured: false,
    image: "/screenshots/ai/shk-process-ops.png",
    clientType: "German HVAC Dispatch & n8n",
    hook: "German sanitary, heating, and air conditioning (SHK) business process platform with automated emergency dispatch and n8n pipelines.",
    problems_solved: [
      "Emergency heating breakdown triage dashboard with automated technician assignment",
      "Self-hosted n8n workflow engine syncing customer intake with field service ERPs",
      "Native German language conversational intake respecting Handwerk terminology",
    ],
    metric: "Sub-2h Emergency SLA \• 65% Dispatch Auto",
    technologies: ["Next.js 15", "TypeScript", "n8n", "OpenAI API", "Tailwind CSS", "Vercel"]
  },
  {
    name: "Atelier Grooming \— Bespoke Editorial Barbershop Platform",
    url: "atelier-barbershop.vercel.app",
    category: "ai",
    featured: false,
    image: "/screenshots/ai/atelier-barbershop.png",
    clientType: "Split-Drag Visualizer & Studio Booking",
    hook: "High-density editorial barbershop web platform featuring split-drag before/after visualizers and friction-free booking.",
    problems_solved: [
      "Interactive before/after split drag slider showcasing precision grooming transformations",
      "3-step friction-free appointment scheduling engine with barber selection and SMS reminders",
      "Owner no-code studio enabling instant service menu and pricing updates",
    ],
    metric: "45% Booking Lift \• 100/100 Lighthouse",
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Vercel"]
  },
  {
    name: "BuildInspect AI \— Computer Vision Construction & OSHA Compliance",
    url: "buildinspect-ai.vercel.app",
    category: "ai",
    featured: false,
    image: "/screenshots/ai/buildinspect-ai.png",
    clientType: "Vision Defect Detection & AS 4349.1",
    hook: "Computer vision building inspection platform detecting structural defects and OSHA code violations in real time.",
    problems_solved: [
      "Real-time computer vision defect classifier pinpointing structural risks on site photos",
      "Automated building code mapping linking visible defects to statutory inspection requirements",
      "Instant field inspection report generator compiling itemized repairs and photo evidence",
    ],
    metric: "96.4% Detection Precision \• 80% Time Savings",
    technologies: ["Next.js 15", "TypeScript", "OpenAI Vision", "Gemini 2.5 Flash", "Tailwind CSS", "Vercel"]
  },
  {
    name: "AgentOps Core \— Multi-Agent Swarm Orchestration & Trace Console",
    url: "agentops-core.vercel.app",
    category: "ai",
    featured: false,
    image: "/screenshots/ai/agentops-core.png",
    clientType: "Agent Swarm DAG & Trace Telemetry",
    hook: "Production-grade multi-agent governance platform providing DAG workflow scheduling, trace observability, and token telemetry.",
    problems_solved: [
      "Visual DAG pipeline editor orchestrating multi-agent dependencies and parallel execution",
      "Full trace span visualizer inspecting prompt tokens, reasoning chains, and tool inputs/outputs",
      "Automated circuit breakers halting runaway agent loops before token budgets exceed limits",
    ],
    metric: "0 Runaway Loops \• Sub-10ms Trace Overhead",
    technologies: ["Next.js 15", "TypeScript", "OpenAI API", "Claude API", "Tailwind CSS", "Vercel"]
  },
  {
    name: "ScaleOps Core \— SaaS Infrastructure Reliability & Chaos Console",
    url: "scaleops-core.vercel.app",
    category: "ai",
    featured: false,
    image: "/screenshots/ai/scaleops-core.png",
    clientType: "SaaS Autoscaling & Chaos Engine",
    hook: "SaaS backend reliability and autoscaling platform with automated failover testing, database query profiling, and queue monitors.",
    problems_solved: [
      "Interactive chaos simulator testing system resilience under simulated network latency and node death",
      "PostgreSQL query pool saturation monitor detecting connection starvation and locking bottlenecks",
      "Event queue lag monitor tracking message backlog and worker fleet auto-scaling triggers",
    ],
    metric: "99.99% Guaranteed Uptime \• Sub-100ms Load Shedding",
    technologies: ["Next.js 15", "TypeScript", "PostgreSQL", "Docker", "Tailwind CSS", "Vercel"]
  },

  // --------------------------------------------------------------------------
  // FEATURED
  // --------------------------------------------------------------------------
  { 
    name: "Legiit", 
    url: "legiit.com", 
    category: "marketplace",
    featured: true,
    image: "https://barakahsoft.com/wp-content/uploads/2026/01/legiit-1-scaled.jpeg",
    clientType: "Freelance Marketplace Platform",
    hook: "Payment processing handling 1000+ transactions daily",
    problems_solved: [
      "Stripe & PayPal integration with automated escrow system",
      "Real-time analytics dashboard for sellers and buyers",
      "Scaled platform from 500K to 2M users with zero downtime"
    ],
    metric: "2M+ active users",
    technologies: ["Laravel", "Django", "Node.js", "React", "MySQL", "Redis", "AWS", "Celery", "Channels"]
  },

  // --------------------------------------------------------------------------
  // MARKETPLACE
  // --------------------------------------------------------------------------

  { 
    name: "Legiit Advertising", 
    url: "advertise.legiit.com", 
    category: "marketplace",
    clientType: "Ad Management Portal",
    hook: "Self-serve ad purchasing for marketplace sellers",
    problems_solved: [
      "Automated ad slot booking system",
      "Impression and click-tracking dashboard",
      "Integration with main marketplace wallet"
    ],
    metric: "Automated Ad Sales",
    technologies: ["Laravel", "Stripe API", "Real-time Analytics"]
  },
  { 
    name: "Legiit Shop", 
    url: "shop.legiit.com", 
    category: "marketplace",
    clientType: "Merchandise Store",
    hook: "Brand swag store with global fulfillment integration",
    problems_solved: [
      "Print-on-demand API integration",
      "Inventory synchronization",
      "Loyalty point redemption for merchandise"
    ],
    technologies: ["Wordpress", "Custom Design", "POD Integration"]
  },

  // --------------------------------------------------------------------------
  // AGENCY
  // --------------------------------------------------------------------------
  { 
    name: "SuperStar SEO", 
    url: "superstarseo.com", 
    category: "agency",
    clientType: "SEO Marketing Agency",
    hook: "Local SEO campaigns ranking clients in top 3",
    problems_solved: [
      "Google Business Profile optimization for local rankings",
      "Citation building across 50+ directories",
      "Review management automation"
    ],
    metric: "#1 Rankings Achieved",
    technologies: ["WordPress", "SEO Tools", "Schema Markup"]
  },
  { 
    name: "Prescription PR", 
    url: "prescriptionpr.com", 
    category: "agency",
    clientType: "Healthcare PR Firm",
    hook: "Reputation management for 100+ medical professionals",
    problems_solved: [
      "Crisis management and press release distribution",
      "Social media automation for doctors",
      "Doctor-patient communication portals"
    ],
    metric: "100+ Clients Managed",
    technologies: ["WordPress", "Social APIs", "Analytics"]
  },
  { 
    name: "Easy Agency Builder", 
    url: "easyagencybuilder.com", 
    category: "agency",
    clientType: "SaaS Product",
    hook: "White-label website builder for marketing agencies",
    problems_solved: [
      "Rapid deployment of agency client sites",
      "Pre-built industry specific templates",
      "Integrated hosting and maintenance dashboard"
    ],
    metric: "Reduced Dev Time by 80%",
    technologies: ["SaaS Architecture", "Cloud Hosting", "React"]
  },

  // --------------------------------------------------------------------------
  // HEALTHCARE
  // --------------------------------------------------------------------------
  { 
    name: "Broadway Diagnostic & Rehabilitation", 
    url: "broadwaychiropt.com", 
    category: "healthcare",
    clientType: "Chiropractic Practice",
    hook: "Online booking system processing 200+ appointments monthly",
    problems_solved: [
      "HIPAA-compliant patient scheduling",
      "Automated SMS and email appointment reminders",
      "Insurance verification integration"
    ],
    metric: "200+ monthly bookings",
    technologies: ["WordPress", "Booking System", "Twilio API"]
  },
  { 
    name: "Heart Screen", 
    url: "heartscreennewyork.com", 
    category: "healthcare",
    clientType: "Cardiac Diagnostic Center",
    hook: "Patient portal with secure test result delivery",
    problems_solved: [
      "HIPAA-compliant document sharing",
      "Online test result access for patients",
      "Multi-location appointment scheduling"
    ],
    technologies: ["Secure Portal", "SSL/Encryption", "PHP"]
  },
  { 
    name: "Infusalounge", 
    url: "infusalounge.com", 
    category: "healthcare",
    clientType: "IV Therapy Clinic",
    hook: "Membership subscription system with recurring billing",
    problems_solved: [
      "Automated recurring payment processing",
      "Member portal with booking privileges",
      "Package and membership management"
    ],
    technologies: ["WooCommerce Subscriptions", "WordPress", "Stripe"]
  },
  { 
    name: "MJB Wellness Center", 
    url: "mjbwellnesscenter.com", 
    category: "healthcare",
    clientType: "Multi-Service Wellness Center",
    hook: "Multi-practitioner scheduling system",
    problems_solved: [
      "Calendar management for 5+ practitioners",
      "Service-based booking with duration control",
      "Patient intake forms and history tracking"
    ],
    technologies: ["WordPress", "Form Builder", "Calendar API"]
  },
  { 
    name: "Ortho Spine Care LI", 
    url: "orthospinecareli.com", 
    category: "healthcare",
    clientType: "Orthopedic Practice",
    hook: "Patient education portal with treatment guides",
    problems_solved: [
      "Educational content management system",
      "Treatment plan documentation",
      "Before/after gallery for procedures"
    ],
    technologies: ["WordPress", "Gallery Plugin", "SEO"]
  },
  { 
    name: "Dr. Sophia Argeropoulos", 
    url: "portjeffchiro.com", 
    category: "healthcare",
    clientType: "Chiropractic Practice",
    hook: "Local SEO success - ranking #1 for 'Port Jeff chiropractor'",
    problems_solved: [
      "Google Business Profile optimization",
      "Local citation building",
      "Review generation and management"
    ],
    metric: "#1 Local Ranking",
    technologies: ["Local SEO", "WordPress", "Schema"]
  },
  { 
    name: "Express Diagnostics", 
    url: "expdiag.com", 
    category: "healthcare",
    clientType: "Diagnostic Testing Center",
    hook: "Insurance eligibility verification system",
    problems_solved: [
      "Real-time insurance verification",
      "Multi-location test scheduling",
      "Lab result delivery portal"
    ],
    technologies: ["API Integration", "Secure Forms", "PHP"]
  },
  { 
    name: "Doctor Matthew Olesiak", 
    url: "matthewolesiak.com", 
    category: "healthcare", 
    clientType: "Medical Consultant Brand",
    hook: "Personal brand site for Medical Director/Entrepreneur",
    problems_solved: [
      "Thought leadership content distribution",
      "Media kit and press appearance showcasing",
      "Consulting inquiry funnels"
    ],
    technologies: ["WordPress", "Personal Branding", "Blog"]
  },
  { 
    name: "Dr Brian Capogna", 
    url: "briancapognamd.com", 
    category: "healthcare",
    clientType: "Orthopedic Surgeon",
    hook: "High-conversion site for Top Doctor (Castle Connolly)",
    problems_solved: [
      "Integration with ZocDoc/Healthgrades reviews",
      "Detailed procedure encyclopedias",
      "Accessibility compliance (ADA) for medical sites"
    ],
    metric: "Castle Connolly Top Doctor",
    technologies: ["WordPress", "Accessibility Tools", "Video"]
  },
  { 
    name: "Dr. Dennis Long", 
    url: "chiropractorinjamaicany.com", 
    category: "healthcare",
    clientType: "Chiropractic Practice",
    hook: "Hyper-local lead generation site",
    problems_solved: [
      "Geo-targeted SEO for Jamaica, Queens",
      "Click-to-call mobile optimization",
      "New patient special offer landing pages"
    ],
    technologies: ["Local SEO", "Landing Pages", "Call Tracking"]
  },
  { 
    name: "Dr Jay Riess", 
    url: "drjayriesschiropractor.com", 
    category: "healthcare",
    clientType: "Chiropractic Practice",
    hook: "Rehabilitation service showcase",
    problems_solved: [
      "Service-specific landing pages (Sciatica, Neck Pain)",
      "Integration with practice management software",
      "Patient testimonial video archive"
    ],
    technologies: ["WordPress", "Video Embedding", "SEO"]
  },
  { 
    name: "GetYouInShape", 
    url: "www.getyouinshape.com", 
    category: "healthcare",
    clientType: "Fitness & Wellness Program",
    hook: "Bootcamp registration and transformation tracking",
    problems_solved: [
      "Online liability waiver signing",
      "Success story/transformation gallery",
      "Integration with email marketing automation (AWeber/Mailchimp)"
    ],
    technologies: ["Forms", "Email Marketing", "WordPress"]
  },
  { 
    name: "Ligament Laxity Analysis", 
    url: "ligamentlaxityanalysis.com", 
    category: "healthcare",
    clientType: "Medical Software Sales",
    hook: "Sales platform for 'LigMaster' diagnostic software",
    problems_solved: [
      "Technical product specification display",
      "Software demo request workflow",
      "Distributor/reseller portal access"
    ],
    metric: "Niche Medical Tool",
    technologies: ["B2B Sales", "Lead Gen", "HTML/CSS"]
  },
  { 
    name: "Matthew Olesiak", 
    url: "drmatthewolesiak.com", 
    category: "healthcare",
    clientType: "Personal Brand",
    hook: "Showcase for CEO of Atlas Medical Marketing",
    problems_solved: [
      "Cross-linking to multiple business ventures",
      "Speaking engagement booking",
      "Article and publication library"
    ],
    technologies: ["WordPress", "Bio Page", "Social Aggregation"]
  },
  { 
    name: "Movement Concepts", 
    url: "movementconceptspt.com", 
    category: "healthcare",
    clientType: "Physical Therapy Clinic",
    hook: "Multi-location PT clinic site",
    problems_solved: [
      "Location finder with map integration",
      "Insurance acceptance search tool",
      "Downloadable patient intake packets"
    ],
    technologies: ["Google Maps API", "PDF Generation", "WordPress"]
  },
  { 
    name: "Optimize Wellness", 
    url: "optimizewellnesssolutions.com", 
    category: "healthcare",
    clientType: "Holistic Health Center",
    hook: "E-commerce for wellness supplements",
    problems_solved: [
      "WooCommerce shop for private label supplements",
      "Virtual consultation booking",
      "Health assessment quizzes"
    ],
    technologies: ["WooCommerce", "Quiz Plugin", "Scheduling"]
  },
  { 
    name: "Skin Apeel", 
    url: "skinapeel.com", 
    category: "healthcare",
    clientType: "Day Spa & Salon",
    hook: "Award-winning spa site (Boca Raton)",
    problems_solved: [
      "Gift card purchasing system",
      "Interactive service menu with pricing",
      "Mobile-responsive gallery of spa facilities"
    ],
    metric: "20+ Years in Business",
    technologies: ["WordPress", "E-commerce", "Gallery"]
  },
  { 
    name: "Wellpower Method", 
    url: "wellpowermethod.com", 
    category: "healthcare",
    clientType: "Health Coaching Program",
    hook: "Membership site for health coaching",
    problems_solved: [
      "Gated content for program members",
      "Weekly meal plan downloads",
      "Community forum integration"
    ],
    technologies: ["MemberPress", "Forum", "WordPress"]
  },
  { 
    name: "Assostefano Bambini E Marfan", 
    url: "www.assostefano-bambiniemarfan.it", 
    category: "healthcare",
    clientType: "Non-Profit Organization",
    hook: "Italian non-profit for Marfan Syndrome",
    problems_solved: [
      "Donation collection via PayPal/Credit Card",
      "Event calendar for fundraising",
      "Multi-language support (Italian/English)"
    ],
    technologies: ["Donation API", "Calendar", "WordPress"]
  },

  // --------------------------------------------------------------------------
  // LEGAL
  // --------------------------------------------------------------------------
  { 
    name: "Neblett Law", 
    url: "neblettlaw.com", 
    category: "legal",
    clientType: "Personal Injury Law Firm",
    hook: "Lead generation site bringing 50+ qualified leads monthly",
    problems_solved: [
      "SEO optimization ranking top 3 for high-value keywords",
      "Contact form with instant case evaluation",
      "Mobile-first design for on-the-go clients"
    ],
    metric: "50+ leads/month",
    technologies: ["WordPress", "SEO", "Lead Forms"]
  },
  { 
    name: "Flowers Law Group NY", 
    url: "flowerslawny.com", 
    category: "legal",
    clientType: "Family Law Practice",
    hook: "Client intake automation reducing admin time by 60%",
    problems_solved: [
      "Automated client intake forms",
      "Document upload portal",
      "Secure client communication system"
    ],
    technologies: ["Secure Forms", "Legal CRM", "WordPress"]
  },
  { 
    name: "Insurance Loss Lawyer", 
    url: "insurancelosslawyer.com", 
    category: "legal",
    clientType: "Niche Legal Lead Gen",
    hook: "Targeted landing page for high-value insurance claims",
    problems_solved: [
      "High-conversion copywriting for distress cases",
      "Click-to-call integration",
      "Speed-optimized for mobile 4G access"
    ],
    technologies: ["Landing Page", "Call Tracking", "SEO"]
  },
  { 
    name: "JDB Mediation", 
    url: "jdbmediation.com", 
    category: "legal",
    clientType: "Mediation Services",
    hook: "Personal branding for Justin Borer, Mediator",
    problems_solved: [
      "Appointment scheduling integration",
      "Resource library for divorce mediation",
      "Video introduction and explainer content"
    ],
    technologies: ["WordPress", "Video", "Scheduling"]
  },
  { 
    name: "Miami Maritime Law", 
    url: "miamimaritimelaw.com", 
    category: "legal",
    clientType: "Maritime Law Firm",
    hook: "Dominating niche SEO for 'Miami Boat Lawyer'",
    problems_solved: [
      "Specialized content for Admiralty Law",
      "Case result showcases (Million dollar verdicts)",
      "24/7 Emergency contact routing"
    ],
    metric: "High Value Verdicts",
    technologies: ["SEO", "Emergency Routing", "WordPress"]
  },

  // --------------------------------------------------------------------------
  // SPORTS
  // --------------------------------------------------------------------------
  { 
    name: "Long Island Loyalty", 
    url: "longislandloyalty.com", 
    category: "sports",
    clientType: "Youth Sports Organization",
    hook: "Registration system processing 500+ signups per season",
    problems_solved: [
      "Online registration with payment processing",
      "Team roster management and scheduling",
      "Parent communication portal"
    ],
    metric: "500+ registrations/season",
    technologies: ["Registration System", "Payment Gateway", "Database"]
  },
  { 
    name: "Steve Weatherford", 
    url: "thesteveweatherford.com", 
    category: "sports",
    clientType: "Professional Athlete Brand",
    hook: "Personal brand website with training program sales",
    problems_solved: [
      "E-commerce for digital training programs",
      "Video content management",
      "Email marketing integration"
    ],
    technologies: ["Wordpress/WooCommerce", "Video", "Marketing Automation"]
  },
  { 
    name: "Inside The Game Sports", 
    url: "insidethegamesports.com", 
    category: "sports",
    clientType: "Sports Media Platform",
    hook: "Content management system for sports journalism",
    problems_solved: [
      "Multi-author content platform",
      "Video and podcast hosting",
      "Subscription paywall system"
    ],
    technologies: ["WordPress", "Podcast Feed", "Membership"]
  },
  { 
    name: "Legacy Longhorns", 
    url: "longhorns.team", 
    category: "sports",
    clientType: "Youth Football & Cheer",
    hook: "Non-profit community team management",
    problems_solved: [
      "Donation and sponsorship processing",
      "Game schedule calendar sync",
      "Volunteer signup workflows"
    ],
    technologies: ["Calendar", "Donations", "WordPress"]
  },
  { 
    name: "Wall Baller", 
    url: "wallballer.com", 
    category: "sports",
    clientType: "Mobile Game Landing Page",
    hook: "Official site for Lacrosse-themed iOS Arcade Game",
    problems_solved: [
      "App Store conversion optimization",
      "Gameplay video trailers",
      "Support and changelog ticketing"
    ],
    metric: "iOS App Store Launch",
    technologies: ["Landing Page", "Video Background", "App Store API"]
  },
  { 
    name: "Baileys Dog Park", 
    url: "baileysdogpark.com", 
    category: "sports",
    clientType: "Community Park",
    hook: "Membership verification for private dog park",
    problems_solved: [
      "Vaccination record upload and verification",
      "Key fob access management integration",
      "Recurring membership billing"
    ],
    technologies: ["Membership Forms", "File Uploads", "Payments"]
  },
  { 
    name: "LaxEdits", 
    url: "laxedits.com", 
    category: "sports",
    clientType: "Video Production Service",
    hook: "High-energy recruiting videos for college athletes",
    problems_solved: [
      "Large video file submission portal",
      "Portfolio gallery of high-def sports edits",
      "Package pricing and checkout"
    ],
    technologies: ["Video Hosting", "File Transfer", "E-commerce"]
  },
  { 
    name: "Massapequa Farmingdale Mens Club", 
    url: "massapequafarmingdalemensclub.com", 
    category: "sports",
    clientType: "Social Club",
    hook: "Event management for local men's club",
    problems_solved: [
      "Event RSVP and ticketing",
      "Photo galleries from past events",
      "Newsletter subscription management"
    ],
    technologies: ["Events Calendar", "Gallery", "Email"]
  },
  { 
    name: "NYFBR", 
    url: "nyfbr.com", 
    category: "sports",
    clientType: "Local Sports League",
    hook: "League standings and stats tracking",
    problems_solved: [
      "Automated league table updates",
      "Player profile management",
      "Match result submission forms"
    ],
    technologies: ["SportsPress", "WordPress", "Data Tables"]
  },
  { 
    name: "Respect The Game", 
    url: "respectthegamebasketball.com", 
    category: "sports",
    clientType: "Basketball Training",
    hook: "Camp and clinic registration portal",
    problems_solved: [
      "Waiver integration for minors",
      "Inventory management for camp slots",
      "Coach bio and highlight reels"
    ],
    technologies: ["Registration", "Waivers", "Video"]
  },
  { 
    name: "Semper Strong", 
    url: "semperstrong.flywheelsites.com", 
    category: "sports",
    clientType: "Veteran Fitness Non-Profit",
    hook: "Fitness community for veterans",
    problems_solved: [
      "Community story sharing",
      "Merchandise sales for fundraising",
      "Event coordination"
    ],
    technologies: ["WordPress", "WooCommerce", "Blog"]
  },
  { 
    name: "Smoky Mountain Truck Show", 
    url: "smokymountaintruckfest.com", 
    category: "sports",
    clientType: "Event Website",
    hook: "Ticket sales for major automotive event",
    problems_solved: [
      "High-traffic ticket purchasing system",
      "Vendor application processing",
      "Interactive venue map"
    ],
    metric: "Thousands of Attendees",
    technologies: ["Ticketing", "Maps", "High Availability"]
  },

  // --------------------------------------------------------------------------
  // E-COMMERCE
  // --------------------------------------------------------------------------
  { 
    name: "The Foamory", 
    url: "thefoamory.com", 
    category: "ecommerce",
    clientType: "Specialty Product Store",
    hook: "Custom WooCommerce store with subscription products",
    problems_solved: [
      "Recurring subscription management",
      "Custom product configurator",
      "Wholesale pricing tiers"
    ],
    technologies: ["WooCommerce", "Stripe", "PHP"]
  },
  { 
    name: "Living Word", 
    url: "livingword.shop", 
    category: "ecommerce",
    clientType: "Religious Bookstore",
    hook: "Digital and physical product sales",
    problems_solved: [
      "Instant digital download delivery",
      "Inventory management for books/media",
      "Donation integration at checkout"
    ],
    technologies: ["Shopify", "Digital Downloads", "Payments"]
  },

  // --------------------------------------------------------------------------
  // BUSINESS
  // --------------------------------------------------------------------------
  { 
    name: "Hubert Vester Auto Group", 
    url: "hv.auto", 
    category: "business",
    clientType: "Auto Dealership",
    hook: "Inventory management with 200+ vehicles",
    problems_solved: [
      "Real-time inventory sync",
      "Lead capture and CRM integration",
      "Finance calculator and pre-approval"
    ],
    metric: "200+ Vehicle Inventory",
    technologies: ["Automotive CRM", "React", "API"]
  },
  { 
    name: "Pinnacle Restoration", 
    url: "pinnaclerestorations.com", 
    category: "business",
    clientType: "Emergency Restoration Services",
    hook: "24/7 emergency request system",
    problems_solved: [
      "Emergency contact forms with SMS alerts",
      "Service area mapping",
      "Insurance claim documentation"
    ],
    technologies: ["Twilio", "Maps API", "WordPress"]
  },
  { 
    name: "StarVox Capital", 
    url: "starvoxcapital.com", 
    category: "business",
    clientType: "Financial Services",
    hook: "Secure client portal for investment management",
    problems_solved: [
      "Password-protected client dashboards",
      "Document sharing and e-signatures",
      "Appointment scheduling with advisors"
    ],
    technologies: ["Secure Client Area", "Encryption", "PHP"]
  },
  { 
    name: "CPA Enterprises", 
    url: "cpa.enterprises", 
    category: "business",
    clientType: "Accounting Firm",
    hook: "Corporate tax service portfolio",
    problems_solved: [
      "Secure file upload for tax docs",
      "Service tier comparison tables",
      "Consultation booking workflow"
    ],
    technologies: ["WordPress", "File Security", "Forms"]
  },
  { 
    name: "Hire Regard", 
    url: "hireregard.com", 
    category: "business",
    clientType: "Recruitment Agency",
    hook: "Talent ecosystem connecting companies with top tier candidates",
    problems_solved: [
      "Job board integration",
      "Candidate resume submission portal",
      "Client login for search updates"
    ],
    technologies: ["Job Board Plugin", "CRM", "WordPress"]
  },
  { 
    name: "Canadian Home Style", 
    url: "canadianhomestyle.com", 
    category: "business",
    clientType: "Home Renovation",
    hook: "High-end flooring and cabinetry showcase",
    problems_solved: [
      "Visual project portfolio with filtering",
      "Manufacturer catalog integration",
      "Renovation quote calculator"
    ],
    metric: "Consumer Choice Award",
    technologies: ["Portfolio", "WordPress", "SEO"]
  },
  { 
    name: "Advanced Egress Solutions", 
    url: "advancedegresssolutions.com", 
    category: "business",
    clientType: "B2B Safety Products",
    hook: "Niche B2B catalog for emergency exit systems",
    problems_solved: [
      "Technical spec sheet downloads",
      "Bulk order request forms",
      "Government compliance documentation"
    ],
    technologies: ["Catalog", "B2B Forms", "WordPress"]
  },
  { 
    name: "Applied Construction", 
    url: "appliedconstructionservices.com", 
    category: "business",
    clientType: "Construction Company",
    hook: "Project bid management and showcase",
    problems_solved: [
      "Large scale project galleries",
      "Sub-contractor portal",
      "Safety certification display"
    ],
    technologies: ["Gallery", "Portal", "HTML/CSS"]
  },
  { 
    name: "Sprinklrite", 
    url: "sprinklrite.com", 
    category: "business",
    clientType: "Irrigation Services",
    hook: "Seasonal service scheduling automation",
    problems_solved: [
      "Spring start-up / Winterization booking",
      "Zip code service area validation",
      "Maintenance plan subscriptions"
    ],
    technologies: ["Booking", "Geo-fencing", "WooCommerce"]
  },
  { 
    name: "True Ventilation", 
    url: "trueventilation.com", 
    category: "business",
    clientType: "HVAC & Ventilation",
    hook: "Commercial ventilation system showcases",
    problems_solved: [
      "Case studies of large installs",
      "Energy efficiency calculators",
      "Maintenance request portal"
    ],
    technologies: ["Calculator", "WordPress", "Case Studies"]
  },
  { 
    name: "Evans Tree and Land Services LLC", 
    url: "evanstreeservicellc.flywheelsites.com", 
    category: "business",
    clientType: "Tree Service",
    hook: "Emergency storm response dispatch",
    problems_solved: [
      "Click-to-call emergency buttons",
      "Service area map visualizer",
      "Insurance liability proof display"
    ],
    technologies: ["Maps", "Click-to-Call", "WordPress"]
  },
  { 
    name: "Gulf Gate Security", 
    url: "gulfgatesecurity.com", 
    category: "business",
    clientType: "Security Systems",
    hook: "Residential and Commercial security configs",
    problems_solved: [
      "Product comparison charts",
      "Monitoring service signup",
      "Support ticket system"
    ],
    technologies: ["Comparison Tool", "Forms", "PHP"]
  },
  { 
    name: "Instant Cash Buyers", 
    url: "1-800instantcashbuyers.com", 
    category: "business",
    clientType: "Real Estate Investment",
    hook: "High-speed property offer generation",
    problems_solved: [
      "Multi-step property intake form",
      "Automated offer range calculation",
      "Distressed property lead management"
    ],
    metric: "Fast Offer Generation",
    technologies: ["Gravity Forms", "Real Estate Logic", "WordPress"]
  },
  { 
    name: "KW Wealth", 
    url: "www.mykwwealth.com", 
    category: "business",
    clientType: "Wealth Management",
    hook: "Financial planning for high net worth individuals",
    problems_solved: [
      "Secure document vault",
      "Advisor team bios and booking",
      "Market commentary blog"
    ],
    technologies: ["Secure Portal", "Blog", "Compliance"]
  },
  { 
    name: "BeWealthy", 
    url: "bewealthy.com", 
    category: "business",
    clientType: "Financial Education",
    hook: "Financial literacy course platform",
    problems_solved: [
      "LMS (Learning Management System) integration",
      "Progress tracking for students",
      "Webinar registration funnels"
    ],
    technologies: ["LMS", "Video", "Membership"]
  },
  { 
    name: "Next Level Specialists", 
    url: "nxtlvlspecialists.com", 
    category: "business",
    clientType: "Business Consulting",
    hook: "Corporate strategy consulting portfolio",
    problems_solved: [
      "White paper download gating",
      "Speaker booking management",
      "Strategic partnership showcases"
    ],
    technologies: ["Lead Magnets", "WordPress", "PDFs"]
  },
  { 
    name: "Riverrode", 
    url: "riverode.com", 
    category: "business",
    clientType: "Logistics/Transportation",
    hook: "Fleet management and logistics info",
    problems_solved: [
      "Route coverage mapping",
      "Driver application portal",
      "Freight quote request forms"
    ],
    technologies: ["Maps", "Forms", "Logistics"]
  },
  { 
    name: "imagemeta", 
    url: "imagemeta.io", 
    category: "business",
    clientType: "SaaS / Dev Tool",
    hook: "Metadata extraction API service",
    problems_solved: [
      "API documentation and sandbox",
      "Usage based billing integration",
      "Developer dashboard"
    ],
    metric: "API Uptime 99.9%",
    technologies: ["Node.js", "API", "Stripe"]
  },
  { 
    name: "indoorclimatesolutionstn", 
    url: "indoorclimatesolutionstn.com", 
    category: "business",
    clientType: "HVAC Services",
    hook: "Climate control solutions for Tennessee homes",
    problems_solved: [
      "Financing application integration",
      "Maintenance agreement signups",
      "Emergency repair dispatching"
    ],
    technologies: ["Financing Widget", "WordPress", "Forms"]
  },
  { 
    name: "779cash", 
    url: "779cash.com", 
    category: "business",
    clientType: "Real Estate Lead Gen",
    hook: "Local 'We Buy Houses' lead capture",
    problems_solved: [
      "High-converting landing page design",
      "SMS notification upon form submit",
      "Local SEO dominance"
    ],
    technologies: ["Landing Page", "SMS API", "SEO"]
  },
  { 
    name: "Boats Perry Neblett", 
    url: "boats.perryneblett.com", 
    category: "business",
    clientType: "Maritime Legal Asset",
    hook: "Subdomain for maritime legal resources",
    problems_solved: [
      "Resource library for boat accident claims",
      "Cross-linking to main firm site",
      "Specific boat-type accident guides"
    ],
    technologies: ["Knowledge Base", "SEO", "WordPress"]
  },
  { 
    name: "Main St. Stereo", 
    url: "mainststereo.com", 
    category: "business",
    clientType: "Car Audio & Electronics",
    hook: "Custom car audio installation showcase",
    problems_solved: [
      "Gallery of custom installs",
      "Brand authorization badges",
      "Appointment request for installations"
    ],
    technologies: ["Gallery", "Forms", "HTML/CSS"]
  },

  // --------------------------------------------------------------------------
  // LIFESTYLE
  // --------------------------------------------------------------------------
  { 
    name: "bellalimento", 
    url: "bellalimento.com", 
    category: "lifestyle",
    clientType: "Food & Recipe Blog",
    hook: "Popular food blog 'Beautiful Food Simple'",
    problems_solved: [
      "Recipe card schema integration for SEO",
      "Ad network integration (Mediavine/AdThrive)",
      "Pinterest rich pin optimization"
    ],
    metric: "High Organic Traffic",
    technologies: ["WordPress", "Ad Tech", "Schema"]
  },
  { 
    name: "Predominantly Paleo", 
    url: "predominantlypaleo.com", 
    category: "lifestyle",
    clientType: "Health & Diet Blog",
    hook: "Paleo diet resource and cookbook author site",
    problems_solved: [
      "Cookbook sales funnels",
      "Affiliate marketing integration",
      "Newsletter automation"
    ],
    technologies: ["WordPress", "Amazon Affiliates", "Mailchimp"]
  },
  { 
    name: "rachlmansfield", 
    url: "rachlmansfield.com", 
    category: "lifestyle",
    clientType: "Lifestyle Influencer",
    hook: "Brand partnerships and healthy recipe platform",
    problems_solved: [
      "Sponsored content management",
      "Instagram feed integration",
      "Recipe index with advanced filtering"
    ],
    metric: "Social Influencer",
    technologies: ["WordPress", "Social API", "Search"]
  },
  { 
    name: "Grazed and Enthused", 
    url: "grazedandenthused.com", 
    category: "lifestyle",
    clientType: "Wellness Blog",
    hook: "Autoimmune protocol (AIP) resource",
    problems_solved: [
      "Content categorization for dietary restrictions",
      "E-book delivery system",
      "Community comment management"
    ],
    technologies: ["WordPress", "Digital Downloads", "Blog"]
  },
  { 
    name: "Lotus Restaurant", 
    url: "lotusrestaurantny.com", 
    category: "lifestyle",
    clientType: "Restaurant",
    hook: "Online ordering for local dining",
    problems_solved: [
      "Menu management system",
      "Table reservation integration (OpenTable/Resy)",
      "Mobile-friendly food gallery"
    ],
    technologies: ["Online Ordering", "Reservations", "WordPress"]
  },
  { 
    name: "Beauty and the Boss", 
    url: "beautyandtheboss.net", 
    category: "lifestyle",
    clientType: "Beauty Blog",
    hook: "Beauty product reviews and tutorials",
    problems_solved: [
      "Affiliate link management",
      "Video tutorial embedding",
      "Social sharing optimization"
    ],
    technologies: ["WordPress", "YouTube", "Affiliates"]
  },
  { 
    name: "The Zen Kat", 
    url: "thezenkat.com", 
    category: "lifestyle",
    clientType: "Wellness Brand",
    hook: "Holistic wellness and yoga resources",
    problems_solved: [
      "Class scheduling",
      "Blog content strategy",
      "Newsletter integration"
    ],
    technologies: ["WordPress", "Scheduling", "Email"]
  },
  { 
    name: "La Beautique", 
    url: "labeautiquesalon.com", 
    category: "lifestyle",
    clientType: "Salon",
    hook: "High-end salon booking site",
    problems_solved: [
      "Stylist portfolio galleries",
      "Service menu with dynamic pricing",
      "Online appointment requests"
    ],
    technologies: ["Gallery", "Forms", "WordPress"]
  },
  { 
    name: "simpleweddingday", 
    url: "myrtlebeachsimpleweddingday.com", 
    category: "lifestyle",
    clientType: "Wedding Planner",
    hook: "Destination wedding package booking",
    problems_solved: [
      "Package selection wizard",
      "Photo gallery of past weddings",
      "Vendor coordination forms"
    ],
    technologies: ["WordPress", "Gallery", "Forms"]
  },
  { 
    name: "So Let's Hang Out", 
    url: "soletshangout.com", 
    category: "lifestyle",
    clientType: "Lifestyle Blog",
    hook: "Gluten-free living resources",
    problems_solved: [
      "Recipe index",
      "Newsletter capture",
      "Social media integration"
    ],
    technologies: ["WordPress", "Mailchimp", "Social"]
  },
  { 
    name: "Designing For A Difference", 
    url: "designingforadifference.com", 
    category: "lifestyle",
    clientType: "Interior Design Charity",
    hook: "Charitable design project showcase",
    problems_solved: [
      "Donation processing",
      "Project before/after sliders",
      "Volunteer signup"
    ],
    technologies: ["Donations", "Sliders", "WordPress"]
  },
  { 
    name: "Shine On Adventures", 
    url: "shineonadventures.com", 
    category: "lifestyle",
    clientType: "Travel Blog",
    hook: "Adventure travel guides and photography",
    problems_solved: [
      "High-res image optimization",
      "Map integration for travel routes",
      "Trip itinerary downloads"
    ],
    technologies: ["Maps", "Image CDN", "WordPress"]
  },
  { 
    name: "Faith Family Fulfillment Podcast", 
    url: "faithfamilyfulfillmentpodcast.com", 
    category: "lifestyle",
    clientType: "Podcast Site",
    hook: "Podcast episode hosting and show notes",
    problems_solved: [
      "Audio player integration",
      "RSS feed management",
      "Guest bio pages"
    ],
    technologies: ["Podcast Player", "RSS", "WordPress"]
  },
  { 
    name: "Fearfully and Wonderfully Avery", 
    url: "fearfullyandwonderfullyavery.com", 
    category: "lifestyle",
    clientType: "Family Blog",
    hook: "Personal family journey blog",
    problems_solved: [
      "Photo journaling",
      "Comment system",
      "Social sharing"
    ],
    technologies: ["WordPress", "Blog", "Social"]
  },
  { 
    name: "Align Your Nine", 
    url: "alignyournine.com", 
    category: "lifestyle",
    clientType: "Coaching",
    hook: "Enneagram coaching services",
    problems_solved: [
      "Assessment tools",
      "Coaching package sales",
      "Booking integration"
    ],
    technologies: ["Forms", "E-commerce", "Scheduling"]
  },
  { 
    name: "Answers From The Stairs", 
    url: "answersfromthestairs.com", 
    category: "lifestyle",
    clientType: "Blog/Advice",
    hook: "Parenting and lifestyle advice column",
    problems_solved: [
      "Anonymous question submission",
      "Content archiving",
      "Search functionality"
    ],
    technologies: ["WordPress", "Forms", "Search"]
  },
  { 
    name: "HeartCore Growth", 
    url: "heartcoregrowth.com", 
    category: "lifestyle",
    clientType: "Personal Development",
    hook: "Growth mindset coaching platform",
    problems_solved: [
      "Course delivery",
      "Membership area",
      "Event calendar"
    ],
    technologies: ["LMS", "Membership", "Calendar"]
  },
  { 
    name: "Jim Sabellico", 
    url: "jimsabellico.com", 
    category: "lifestyle",
    clientType: "Entrepreneur Brand",
    hook: "Personal brand for business coach",
    problems_solved: [
      "Lead generation for consulting",
      "Media appearances gallery",
      "Blog and insights"
    ],
    technologies: ["WordPress", "Lead Gen", "Media"]
  },
  { 
    name: "Show Up More", 
    url: "showupmore.com", 
    category: "lifestyle",
    clientType: "Motivation/Coaching",
    hook: "Motivational speaking and coaching",
    problems_solved: [
      "Video header background",
      "Speaking request forms",
      "Product sales"
    ],
    technologies: ["Video", "Forms", "WooCommerce"]
  },
  { 
    name: "Musical Piece", 
    url: "themusicalpiece.com", 
    category: "lifestyle",
    clientType: "Music Education",
    hook: "Music theory and instrument guides",
    problems_solved: [
      "Audio sample playback",
      "Sheet music downloads",
      "Lesson structuring"
    ],
    technologies: ["Audio Player", "Downloads", "WordPress"]
  },
  { 
    name: "Reef Tank Addict", 
    url: "reeftankaddict.com", 
    category: "lifestyle",
    clientType: "Hobbyist Blog",
    hook: "Aquarium hobbyist resource",
    problems_solved: [
      "Equipment reviews with affiliate links",
      "Tank setup guides",
      "Community interaction"
    ],
    technologies: ["Affiliates", "Blog", "WordPress"]
  },
  { 
    name: "PuppyPack", 
    url: "puppypack.co", 
    category: "lifestyle",
    clientType: "Pet Services",
    hook: "Dog walking and pet sitting service",
    problems_solved: [
      "Service area map",
      "Pricing tables",
      "New client intake forms"
    ],
    technologies: ["Maps", "Pricing", "Forms"]
  },
  { 
    name: "LA12", 
    url: "la12.org", 
    category: "lifestyle",
    clientType: "Community Org",
    hook: "Local community organization site",
    problems_solved: [
      "News and updates feed",
      "Events calendar",
      "Member directory"
    ],
    technologies: ["Directory", "Calendar", "WordPress"]
  },
];

export function getSiteImage(site: Site): string {
    if (site.name.toLowerCase() === "legiit") {
        return "/screenshots/Legiit.png";
    }

    if (site.image && site.image.startsWith("/")) {
        return site.image;
    }

    const slug = site.name
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');

    return `/screenshots/${slug}.jpg`;
}

export function getSiteFallback(site: Site): string {
  const gradients = [
    "from-purple-500 to-pink-500",
    "from-blue-500 to-cyan-500",
    "from-green-500 to-emerald-500",
    "from-orange-500 to-red-500",
    "from-indigo-500 to-purple-500",
    "from-pink-500 to-rose-500",
  ];
  
  const index = site.name.charCodeAt(0) % gradients.length;
  return gradients[index];
}

// Filter for display
export const topSites = sites.filter(site => 
  site.featured || 
  site.category === "ai" ||
  site.category === "marketplace" ||
  site.category === "agency" ||
  site.category === "legal" ||
  site.category === "healthcare" ||
  site.category === "sports" ||
  site.category === "ecommerce" ||
  (site.category === "business" && site.hook)
).slice(0, 40);

export const hiddenSites = sites.filter(site => !topSites.includes(site));