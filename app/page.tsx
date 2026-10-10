import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Github,
  Layers,
  Play,
  Server,
  ShieldCheck,
  Sparkles,
  Star,
  Terminal,
  Zap,
} from "lucide-react";

const UPWORK_URL = "https://www.upwork.com/freelancers/shakilhq";
const GITHUB_URL = "https://github.com/exelentshakil";

const NAV = [
  { href: "#work", label: "Work" },
  { href: "#endorsements", label: "Endorsements" },
  { href: "#how", label: "How I work" },
  { href: "#stack", label: "Stack" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const METRICS = [
  {
    value: "15+ Years",
    label: "Software Engineering",
    sub: "Production web apps, APIs and distributed systems",
  },
  {
    value: "$1M+ ARR",
    label: "Marketplace Scaled",
    sub: "Lead engineer at Legiit across 400k+ users",
  },
  {
    value: "100% JSS",
    label: "Upwork Job Success",
    sub: "Top Rated track record with 5.0 client feedback",
  },
  {
    value: "US Eastern",
    label: "9am to 5pm EST",
    sub: "Full daily overlap on Slack with US teams",
  },
];

const TRUST_BRANDS = [
  { name: "Legiit.com", role: "Freelance Marketplace & AI SaaS" },
  { name: "No Half Cakes", role: "Digital Growth Agency" },
  { name: "Steve Weatherford", role: "Super Bowl Champion Platform" },
  { name: "BarakahSoft", role: "Engineering Studio" },
];

const CASE_STUDIES = [
  {
    tag: "Laravel 10 · React · Stripe & Escrow · Redis Queues · MongoDB",
    title: "Legiit.com: High-volume freelance services marketplace",
    context:
      "A live two-sided marketplace processing millions in GMV with complex financial logic, escrow, instant messaging, and seller payouts for 400,000+ registered users.",
    image: "/screenshots/Legiit.png",
    built: [
      "Engineered order checkout, multi-currency wallet balances, escrow releases, and automated seller payouts with strict idempotency.",
      "Rebuilt background jobs on Redis queues and Supervisor workers so heavy transaction notifications, emails, and webhooks never block web requests.",
      "Shipped hundreds of tickets through Jira, GitHub pull requests, strict peer reviews, and automated staging checks before touching production.",
      "Optimized slow MongoDB queries and added Redis caching layers to keep catalog search fast during high-traffic promotions.",
    ],
  },
  {
    tag: "Next.js 14 · Supabase · pgvector RAG · Multi-LLM Gateway · MCP",
    title: "Command Center: AI-powered SaaS for business owners",
    context:
      "Legiit's flagship subscription SaaS, giving business owners automated audits, live rank tracking, and an AI advisory assistant grounded in domain data.",
    built: [
      "Built an advisor chat using RAG: knowledge base documents are chunked, embedded with OpenAI, and queried with pgvector using HNSW indexing for low-latency retrieval.",
      "Engineered a multi-provider LLM gateway that balances calls across Claude, OpenAI, Gemini and Grok with automatic fallbacks when a provider hits downtime or rate limits.",
      "Created a custom Model Context Protocol (MCP) server with OAuth so users can connect Claude directly to their workspace data.",
      "Wrote 60+ Supabase edge functions protected by strict Row Level Security (RLS) policies to keep multi-tenant customer data completely isolated.",
    ],
  },
  {
    tag: "Python · FastAPI · Milvus · Kafka · LangChain · Docker",
    title: "SEO intelligence and parallel crawl service",
    context:
      "A high-throughput backend service that crawls customer websites, extracts structured content, and runs autonomous AI audit workflows.",
    built: [
      "Built an asynchronous crawler pipeline with Kafka message consumers, allowing hundreds of sites to be processed concurrently without blocking the main web app.",
      "Stored and queried semantic page embeddings using Milvus vector database running in isolated Docker containers.",
      "Created LangChain agent workflows that evaluate crawled site structures and generate actionable audit reports using OpenAI and Gemini models.",
    ],
  },
];

const UPWORK_PROJECTS = [
  {
    title: "AI article and WordPress publishing automation",
    detail:
      "Built an automated workflow that generates research-backed articles with AI, formats structured HTML, and publishes them directly to WordPress via REST API with custom taxonomies.",
    quote: "The final system works exactly as needed and has already started saving me significant time.",
    stars: 5,
  },
  {
    title: "AI-powered vehicle damage assessment web app",
    detail:
      "Developed a full-stack platform where users upload damaged vehicle photos to receive structured damage classifications, repair urgency scores, and preliminary repair cost estimates.",
    quote: "Fast communication, exceptional technical depth, and delivered ahead of schedule.",
    stars: 5,
  },
  {
    title: "Multi-service API sync and webhook ingestion",
    detail:
      "Architected a bi-directional synchronization pipeline connecting CRM contacts, payment processor webhooks, and internal PostgreSQL records with dead-letter queue recovery.",
    quote: "Shakil jumped into our messy codebase and stabilized the entire integration within days.",
    stars: 5,
  },
  {
    title: "Custom LLM prompt evaluation and guardrail engine",
    detail:
      "Created a validation layer that screens incoming prompt inputs, sanitizes output formats with strict JSON schemas, and logs token consumption across client accounts.",
    quote: "Incredible attention to detail. Our AI outputs are finally predictable and reliable.",
    stars: 5,
  },
];

const TESTIMONIALS = [
  {
    name: "Chris M. Walker",
    role: "CEO, Legiit.com",
    photo: "/chris.jpeg",
    quote:
      "Most developers just write code; he thinks in systems. Legiit isn't a simple website; it's a complex marketplace with intricate financial logic. He engineered the architecture that allows us to scale safely. I don't need a freelancer; I need an engineering partner.",
  },
  {
    name: "Jim Sabellico",
    role: "Founder, No Half Cakes",
    photo: "/jim.jpeg",
    quote:
      "When I land high-stakes clients like Steve Weatherford, I can't afford 'trial and error.' I bring him in because he brings an engineering discipline to agency chaos. He was the technical lead behind our biggest deployments because the code is clean, the database optimized, and the delivery flawless.",
  },
  {
    name: "Steve Weatherford",
    role: "Super Bowl Champion and Entrepreneur",
    photo: "/steve.jpeg",
    quote:
      "I don't know the code, I just know that my platform needs to perform as hard as I do. The team delivered a digital HQ that handles my traffic, my content, and my sales without blinking. It feels solid, fast, and professional. That's the standard.",
  },
];

const HOW_I_WORK = [
  {
    title: "US Eastern hours (9am to 5pm EST)",
    desc: "I am online when your team is online. Quick morning check-ins and end-of-day recaps on Slack, so you never have to wonder what is happening.",
  },
  {
    title: "Code review on every pull request",
    desc: "Nothing merges directly into main or touches production unreviewed. Every change gets a ticket, a clean branch, tests, and a reviewed pull request.",
  },
  {
    title: "Staging verification before live release",
    desc: "I test every user flow on a staging environment before releasing to live customers. Every deploy has a clear rollback strategy and database backup.",
  },
  {
    title: "Deterministic code handles money and rules",
    desc: "Financial calculations, user permissions, and database constraints stay in strict, tested code. AI is used for language, search, and intelligent summarization.",
  },
  {
    title: "Modern AI tooling without cutting corners",
    desc: "I build with Claude Code and Cursor daily. That means high development velocity paired with strict unit tests, so speed never comes at the cost of code quality.",
  },
  {
    title: "Direct, accountable communication",
    desc: "When a requirement is ambiguous or an edge case pops up, I bring it up immediately with practical options. No hidden surprises or guessing games.",
  },
];

const STACK_GROUPS = [
  {
    icon: Code2,
    group: "Frontend",
    items: "TypeScript, React, Next.js, Vue, Tailwind CSS, HTML5, State Management",
  },
  {
    icon: Server,
    group: "Backend",
    items: "PHP 8, Laravel 10, Python, FastAPI, Django, Node.js, Express, REST APIs",
  },
  {
    icon: Database,
    group: "Data & Caching",
    items: "PostgreSQL, Supabase, MySQL, MongoDB, Redis, pgvector, Milvus",
  },
  {
    icon: Cpu,
    group: "AI & Vector Search",
    items: "Claude API, OpenAI, Gemini, RAG Pipelines, LangChain, MCP Servers, Agent Workflows",
  },
  {
    icon: Layers,
    group: "Cloud & DevOps",
    items: "Docker, AWS, Vercel, Supervisor Workers, Kafka, Inngest, Nginx, CI/CD",
  },
  {
    icon: Terminal,
    group: "Team Process",
    items: "Git, GitHub, Bitbucket, Jira, Slack, Peer Code Review, Staging Environments",
  },
];

const FAQS = [
  {
    q: "What time zone do you work in?",
    a: "I work US Eastern hours, 9:00 AM to 5:00 PM EST. That means real-time collaboration with teams across New York, Toronto, Chicago, and San Francisco during standard business hours.",
  },
  {
    q: "Can you jump directly into our existing codebase?",
    a: "Yes. With 15+ years of software experience, I am comfortable stepping into established codebases in Next.js, Laravel, React, or Python. I read the domain logic, follow your established idioms, and start shipping clean pull requests quickly.",
  },
  {
    q: "How do we hire you on Upwork?",
    a: "You can click any of the Upwork buttons on this page to visit my profile. You can send me a direct message or invite me to your job. I review your requirements, confirm the scope and schedule, and we can start right away through Upwork hourly or milestone contracts.",
  },
  {
    q: "Are you available for 30+ hours a week?",
    a: "Yes. I specialize in long-term dedicated roles with product companies, taking on 30 to 40 hours per week as an integrated team member. I also take on focused, high-impact project sprints.",
  },
  {
    q: "How do you handle testing and production deploys?",
    a: "Every change goes through local testing and automated staging checks before touching production. For database migrations, I test up and down migrations on staging first. Releases are planned to ensure zero downtime.",
  },
];

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <div className="inline-flex items-center gap-2 rounded-full bg-[#F4F3FF] px-3 py-1 text-xs font-semibold text-[#533AFD] border border-[#D9D6FE]">
        <Sparkles className="h-3 w-3" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#0D1738] sm:text-3xl lg:text-4xl">{title}</h2>
      {intro && <p className="mt-3 text-[15px] leading-relaxed text-[#475467]">{intro}</p>}
    </div>
  );
}

function UpworkButton({ dark = false, size = "md" }: { dark?: boolean; size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "px-3.5 py-2 text-xs",
    md: "px-4 py-2.5 text-sm",
    lg: "px-6 py-3.5 text-base font-semibold",
  }[size];

  return (
    <a
      href={UPWORK_URL}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center gap-2 whitespace-nowrap rounded-md font-semibold transition-all shadow-sm ${sizeClasses} ${
        dark
          ? "bg-white text-[#0D1738] hover:bg-[#F2F4F7] hover:shadow"
          : "bg-[#0D1738] text-white hover:bg-[#1D2939] hover:shadow"
      }`}
    >
      <span>Hire me on Upwork</span>
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#0D1738]">
      {/* ================================================================== */}
      {/* Header & Sticky Navigation */}
      {/* ================================================================== */}
      <header className="sticky top-0 z-50 border-b border-[#EAECF0] bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
          {/* Brand Logo & Title */}
          <a href="#top" className="group flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0D1738] p-1.5 border border-[#1D2939] shadow-sm transition-all group-hover:bg-[#533AFD] group-hover:border-[#533AFD]">
              <Image src="/logo.png" alt="Shakil Ahmed logo" width={22} height={22} className="object-contain" priority />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 text-sm font-bold leading-none text-[#0D1738]">
                <span>Shakil Ahmed</span>
                <span className="relative flex h-2 w-2" title="Available now (US Eastern hours)">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
              </div>
              <span className="mt-1 text-[11px] font-medium text-[#667085] leading-none">
                Senior Full-Stack &amp; AI Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-6 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-xs font-semibold text-[#475467] transition hover:text-[#533AFD]"
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 border border-emerald-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>Available 30+ hrs/wk</span>
            </div>
            <UpworkButton size="sm" />
          </div>
        </div>
      </header>

      <main id="top">
        {/* ================================================================== */}
        {/* Hero Section */}
        {/* ================================================================== */}
        <section className="relative border-b border-[#EAECF0] bg-gradient-to-b from-white via-[#FAFBFD] to-white">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
            {/* Live Availability & Credentials Pill */}
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-[#D9D6FE] bg-white px-3.5 py-1.5 text-xs text-[#344054] shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-semibold text-emerald-700">Available for hire</span>
              <span className="text-slate-300">·</span>
              <span className="font-medium">US Eastern (9am to 5pm EST)</span>
              <span className="text-slate-300 hidden sm:inline">·</span>
              <span className="hidden sm:inline font-semibold text-[#533AFD]">100% Upwork Job Success</span>
            </div>

            {/* Profile Intro Row */}
            <div className="mt-8 flex items-center gap-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-md ring-2 ring-[#EAECF0]">
                <Image
                  src="/shakil-headshot.jpeg"
                  alt="Shakil Ahmed headshot"
                  fill
                  sizes="64px"
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-bold text-[#0D1738]">Shakil Ahmed</h2>
                  <span className="rounded bg-[#F4F3FF] px-2 py-0.5 text-[11px] font-semibold text-[#533AFD] border border-[#D9D6FE]">
                    15+ Years Exp
                  </span>
                </div>
                <p className="text-sm font-medium text-[#475467]">
                  Senior Full-Stack &amp; AI Systems Engineer, Ex-Lead Engineer @ Legiit
                </p>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 max-w-3xl text-3xl font-bold leading-[1.12] tracking-tight text-[#0D1738] sm:text-5xl lg:text-5xl">
              I build and run production web apps, and add AI to them that actually works.
            </h1>

            {/* Subhead Body */}
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#475467] sm:text-lg">
              15+ years engineering software. Former engineering team lead at Legiit, where I helped scale the
              marketplace and AI Command Center to $1M ARR across 400,000+ users. I work across Next.js, Laravel,
              Python, and build production AI features: RAG, agents, and multi-model LLM integrations that stay fast
              and reliable.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <UpworkButton size="lg" />
              <a
                href="#work"
                className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-md border border-[#D0D5DD] bg-white px-5 py-3.5 text-base font-semibold text-[#0D1738] transition hover:bg-[#F8F9FC] shadow-sm"
              >
                <span>See my work</span>
                <ChevronRight className="h-4 w-4 text-[#667085]" />
              </a>
              <a
                href="#endorsements"
                className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-md px-4 py-3.5 text-sm font-semibold text-[#533AFD] hover:bg-[#F4F3FF] transition"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                <span>Watch CEO testimonial</span>
              </a>
            </div>

            {/* Metrics Trust Strip */}
            <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {METRICS.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-[#EAECF0] bg-white p-4 shadow-sm transition hover:border-[#D9D6FE]"
                >
                  <p className="text-2xl font-bold tracking-tight text-[#0D1738]">{m.value}</p>
                  <p className="mt-1 text-xs font-semibold text-[#533AFD]">{m.label}</p>
                  <p className="mt-1 text-xs text-[#667085] leading-snug">{m.sub}</p>
                </div>
              ))}
            </div>

            {/* Client Social Proof Banner */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#EAECF0] pt-6 text-xs text-[#667085]">
              <span className="font-semibold text-[#344054]">Trusted by founders and leaders at:</span>
              {TRUST_BRANDS.map((b) => (
                <span key={b.name} className="flex items-center gap-1.5 font-medium text-[#475467]">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  {b.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* CEO Video Endorsement & Client Reviews */}
        {/* ================================================================== */}
        <section id="endorsements" className="scroll-mt-16 border-b border-[#EAECF0] bg-[#FAFBFD]">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
            <SectionHeading
              eyebrow="Verified Endorsements"
              title="What founders and CEOs say about working with me"
              intro="Real testimonials from leaders of platforms where downtime costs real money and delivery is everything."
            />

            {/* Featured Video Block */}
            <div className="mb-10 overflow-hidden rounded-2xl border border-[#EAECF0] bg-[#0D1738] shadow-lg">
              <div className="grid lg:grid-cols-[1.1fr_1fr]">
                <div className="relative aspect-video lg:aspect-auto">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src="https://www.youtube.com/embed/VdPptVpxMPM?rel=0&modestbranding=1"
                    title="Chris M. Walker, CEO of Legiit, endorsing Shakil Ahmed"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col justify-between p-6 sm:p-8 text-white">
                  <div>
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <blockquote className="mt-4 text-[15px] sm:text-base leading-relaxed text-[#F2F4F7]">
                      &ldquo;Most developers just write code; he thinks in systems. Legiit isn&apos;t a simple website;
                      it&apos;s a complex marketplace with intricate financial logic. He engineered the architecture
                      that allows us to scale safely. I don&apos;t need a freelancer; I need an engineering
                      partner.&rdquo;
                    </blockquote>
                  </div>
                  <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-white/20">
                      <Image src="/chris.jpeg" alt="Chris M. Walker" fill sizes="44px" className="object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Chris M. Walker</p>
                      <p className="text-xs text-[#98A2B3]">CEO, Legiit.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Client Endorsement Cards */}
            <div className="grid gap-4 md:grid-cols-2">
              {TESTIMONIALS.slice(1).map((t) => (
                <figure
                  key={t.name}
                  className="flex flex-col justify-between rounded-xl border border-[#EAECF0] bg-white p-6 shadow-sm"
                >
                  <div>
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                    <blockquote className="mt-3 text-[15px] leading-relaxed text-[#344054]">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                  </div>
                  <figcaption className="mt-5 flex items-center gap-3 border-t border-[#EAECF0] pt-4">
                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-[#EAECF0]">
                      <Image src={t.photo} alt={t.name} fill sizes="40px" className="object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0D1738]">{t.name}</p>
                      <p className="text-xs text-[#667085]">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* Selected Production Case Studies */}
        {/* ================================================================== */}
        <section id="work" className="scroll-mt-16 border-b border-[#EAECF0] bg-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
            <SectionHeading
              eyebrow="Selected Work"
              title="Production systems I've built and run"
              intro="Real web applications and backend systems with paying users. No throwaway mockups, no artificial metrics."
            />

            <div className="space-y-8">
              {CASE_STUDIES.map((c) => (
                <article
                  key={c.title}
                  className="overflow-hidden rounded-2xl border border-[#EAECF0] bg-white shadow-sm transition hover:shadow-md"
                >
                  <div className={`grid gap-0 ${c.image ? "lg:grid-cols-[1.1fr_1fr]" : ""}`}>
                    <div className="p-6 sm:p-8">
                      <p className="text-xs font-semibold text-[#533AFD]">{c.tag}</p>
                      <h3 className="mt-2 text-xl font-bold tracking-tight text-[#0D1738] sm:text-2xl">{c.title}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-[#475467]">{c.context}</p>

                      <div className="mt-5 border-t border-[#EAECF0] pt-4">
                        <p className="text-xs font-bold uppercase tracking-wider text-[#667085]">What I built and shipped</p>
                        <ul className="mt-3 space-y-2.5">
                          {c.built.map((b) => (
                            <li key={b} className="flex gap-2.5 text-[14px] leading-relaxed text-[#344054]">
                              <Check className="mt-1 h-4 w-4 shrink-0 text-[#027A48]" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {c.image && (
                      <div className="relative min-h-[260px] border-t border-[#EAECF0] bg-[#F2F4F7] lg:border-l lg:border-t-0">
                        <Image
                          src={c.image}
                          alt={c.title}
                          fill
                          sizes="(min-width: 1024px) 500px, 100vw"
                          className="object-cover object-top"
                        />
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {/* Upwork Client Projects Grid */}
            <div className="mt-14 border-t border-[#EAECF0] pt-12">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-[#0D1738]">Verified Upwork Project Deliveries</h3>
                  <p className="text-sm text-[#667085]">Recent client contracts delivered with 5-star reviews.</p>
                </div>
                <a
                  href={UPWORK_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#533AFD] hover:underline"
                >
                  <span>View all Upwork feedback</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {UPWORK_PROJECTS.map((p) => (
                  <div
                    key={p.title}
                    className="flex flex-col justify-between rounded-xl border border-[#EAECF0] bg-[#FAFBFD] p-5 shadow-sm transition hover:border-[#D9D6FE] hover:bg-white"
                  >
                    <div>
                      <div className="flex items-center gap-1 text-amber-500">
                        {[...Array(p.stars)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-current" />
                        ))}
                      </div>
                      <h4 className="mt-2 text-sm font-bold text-[#0D1738]">{p.title}</h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-[#475467]">{p.detail}</p>
                    </div>
                    {p.quote && (
                      <p className="mt-3 border-t border-[#EAECF0] pt-2.5 text-xs italic text-[#344054]">
                        &ldquo;{p.quote}&rdquo;
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* How I Work */}
        {/* ================================================================== */}
        <section id="how" className="scroll-mt-16 border-b border-[#EAECF0] bg-[#FAFBFD]">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
            <SectionHeading
              eyebrow="Engineering Process"
              title="How I work: steady, predictable delivery"
              intro="The habits of shipping every day on live products where mistakes cost real money and user trust."
            />

            <div className="grid gap-4 md:grid-cols-2">
              {HOW_I_WORK.map((h) => (
                <div
                  key={h.title}
                  className="flex gap-3.5 rounded-xl border border-[#EAECF0] bg-white p-5 shadow-sm transition hover:border-[#D9D6FE]"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#F4F3FF] text-[#533AFD]">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0D1738]">{h.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-[#475467]">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* Tech Stack */}
        {/* ================================================================== */}
        <section id="stack" className="scroll-mt-16 border-b border-[#EAECF0] bg-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
            <SectionHeading
              eyebrow="Core Competencies"
              title="Technologies and tools I use every day"
              intro="I specialize in full-stack web platforms and practical AI architectures that run reliably in production."
            />

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {STACK_GROUPS.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.group}
                    className="flex flex-col rounded-xl border border-[#EAECF0] bg-[#FAFBFD] p-5 shadow-sm transition hover:border-[#D9D6FE] hover:bg-white"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-[#EAECF0] text-[#533AFD] shadow-xs">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="text-sm font-bold text-[#0D1738]">{s.group}</h3>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-[#475467]">{s.items}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* Buyer FAQ */}
        {/* ================================================================== */}
        <section id="faq" className="scroll-mt-16 border-b border-[#EAECF0] bg-[#FAFBFD]">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
            <SectionHeading
              eyebrow="Client FAQ"
              title="Frequently asked questions from hiring managers"
              intro="Everything you need to know before bringing me onto your engineering team or project."
            />

            <div className="space-y-4">
              {FAQS.map((f) => (
                <div key={f.q} className="rounded-xl border border-[#EAECF0] bg-white p-5 shadow-sm">
                  <h3 className="text-sm font-bold text-[#0D1738]">{f.q}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#475467] sm:text-sm">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* Contact & Hire CTA Section */}
        {/* ================================================================== */}
        <section id="contact" className="bg-[#0D1738] text-white">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-emerald-400 border border-white/10">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Available now for new projects</span>
              </div>

              <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Looking for a senior engineer who shows up every day and ships?
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#D0D5DD]">
                I am available for long-term roles on a product team, 30+ hours a week on US Eastern hours, and open to
                contract-to-hire. I also take on focused development sprints. Send me a message on Upwork and tell me
                about your codebase or roadmap.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <UpworkButton dark size="lg" />
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-md border border-white/20 bg-white/5 px-5 py-3.5 text-base font-semibold text-white transition hover:bg-white/10 shadow-sm"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub Profile</span>
                </a>
              </div>

              <p className="mt-5 text-xs text-[#98A2B3]">
                Contracts and payments are handled securely through Upwork escrow with zero billing surprises.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ================================================================== */}
      {/* Footer */}
      {/* ================================================================== */}
      <footer className="border-t border-[#EAECF0] bg-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-8 text-xs text-[#667085] sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-[#0D1738] p-1">
              <Image src="/logo.png" alt="Shakil logo" width={14} height={14} className="object-contain" />
            </div>
            <span>© 2026 Shakil Ahmed. Rajshahi, Bangladesh. Working US Eastern hours.</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={UPWORK_URL} target="_blank" rel="noreferrer" className="hover:text-[#0D1738] transition">
              Upwork Profile
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-[#0D1738] transition">
              GitHub
            </a>
            <a href="#top" className="hover:text-[#0D1738] transition">
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}