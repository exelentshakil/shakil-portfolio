import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Github,
  Layers,
  Server,
  ShieldCheck,
  Sparkles,
  Star,
  Terminal,
  Zap,
} from "lucide-react";
import HeroShowcase from "./HeroShowcase";
import { AVAILABILITY, ENGAGEMENT } from "./lib/profile";

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
    value: "$1M ARR",
    label: "Marketplace Scaled",
    sub: "Lead Engineer at Legiit, 400,000+ users",
  },
  {
    value: "100% JSS",
    label: "Upwork Job Success",
    sub: "5-star client feedback on Upwork",
  },
  {
    value: "9am ET",
    label: "Call overlap with the US",
    sub: "My day starts at 9am US Eastern, weekdays",
  },
];

const CLIENT_LOGOS = [
  { name: "Legiit", src: "/logos/legiit.png", h: 28 },
  { name: "Heartcore Growth", src: "/logos/heartcore-growth.png", h: 26 },
  { name: "No Half Cakes", src: "/logos/no-half-cakes.png", h: 30 },
  { name: "Superstar SEO", src: "/logos/superstar-seo.png", h: 22 },
  { name: "Audiit", src: "/logos/audiit.svg", h: 22 },
  { name: "Snapt", src: "/logos/snapt.png", h: 20 },
  { name: "Hubert Vester Auto Group", src: "/logos/hubert-vester.png", h: 24 },
  { name: "Lotus", src: "/logos/lotus.png", h: 32 },
  { name: "Express Diagnostics", src: "/logos/express-diagnostics.png", h: 30 },
  { name: "Suited", src: "/logos/looksuited.png", h: 22 },
  { name: "Riverode Sales", src: "/logos/riverode.png", h: 34 },
  { name: "BarakahSoft", src: "/logos/barakahsoft.png", h: 22 },
];

const CASE_STUDIES = [
  {
    tag: "Laravel 10 · React · Stripe & Escrow · Redis Queues · MongoDB",
    title: "Legiit.com: High-volume freelance services marketplace",
    context:
      "A live two-sided marketplace at $1M ARR with complex financial logic, escrow, instant messaging, and seller payouts for 400,000+ registered users.",
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

const UPWORK_REVIEWS = [
  {
    title: "AI article and WordPress publishing automation",
    detail:
      "Built an automated workflow that generates research-backed articles with AI, formats structured HTML, and publishes them directly to WordPress via REST API with custom taxonomies.",
    quote: "The final system works exactly as needed and has already started saving me significant time.",
  },
  {
    title: "AI-powered vehicle damage assessment web app",
    detail:
      "Developed a full-stack platform where users upload damaged vehicle photos to receive structured damage classifications, repair urgency scores, and preliminary repair cost estimates.",
    quote: "Good job. Thanks",
  },
  {
    title: "Ticket system and ongoing work",
    detail: "Ongoing development on a ticket system and related client work across multiple frameworks.",
    quote:
      "Excellent Freelancer, extremely skilled on multiple frameworks, and his reverse engineering is superb. I definitely recommend him.",
  },
];

const OTHER_PROJECTS = [
  {
    title: "Multi-service API sync and webhook ingestion",
    detail:
      "Architected a bi-directional synchronization pipeline connecting CRM contacts, payment processor webhooks, and internal PostgreSQL records with dead-letter queue recovery.",
  },
  {
    title: "Custom LLM prompt evaluation and guardrail engine",
    detail:
      "Created a validation layer that screens incoming prompt inputs, sanitizes output formats with strict JSON schemas, and logs token consumption across client accounts.",
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
    title: "US Eastern overlap for calls",
    desc: `${AVAILABILITY} Written updates on Slack in between, so you never have to wonder what is happening.`,
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
    a: `I am based in Rajshahi, Bangladesh. ${AVAILABILITY} Outside call times I keep the team updated in writing on Slack or Upwork.`,
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
    q: "What does your availability look like?",
    a: `${AVAILABILITY} ${ENGAGEMENT}`,
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

function UpworkButton({
  dark = false,
  size = "md",
  label = "Hire me on Upwork",
}: {
  dark?: boolean;
  size?: "sm" | "md" | "lg";
  label?: string;
}) {
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
      <span>{label}</span>
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
      <header className="sticky top-0 z-50 border-b border-[#E3E8EE]/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <a href="#top" className="group flex shrink-0 items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1D2939] bg-[#0A2540] p-1.5 shadow-sm transition-all group-hover:border-[#635BFF] group-hover:bg-[#635BFF]">
              <Image src="/logo.png" alt="Shakil Ahmed logo" width={22} height={22} className="object-contain" priority />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 text-sm font-semibold leading-none text-[#0A2540]">
                <span>Shakil Ahmed</span>
                <span className="relative flex h-2 w-2" title="Available for new projects">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
              </div>
              <span className="mt-1 text-[11px] font-medium leading-none text-[#697386]">
                Senior Full-Stack &amp; AI Engineer
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="whitespace-nowrap rounded-full px-3 py-1.5 text-[13px] font-medium text-[#425466] transition hover:bg-[#F6F9FC] hover:text-[#0A2540]"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <a
            href={UPWORK_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-[#635BFF] px-4 py-2 text-[13px] font-semibold text-white shadow-[0_6px_16px_-6px_rgba(99,91,255,0.6)] transition hover:bg-[#5851EA]"
          >
            <span>Hire on Upwork</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </header>

      <main id="top">
        {/* ================================================================== */}
        {/* Hero Section */}
        {/* ================================================================== */}
        <section className="relative overflow-hidden bg-white">
          {/* Soft gradient backdrop */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute inset-x-[-10%] top-0 h-[560px] origin-top-left -skew-y-6 bg-gradient-to-r from-[#EEF2FF] via-[#F5F3FF] to-[#FFF1F2]" />
            <div className="absolute -right-24 -top-32 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-[#A5B4FC] via-[#C4B5FD] to-[#FBCFE8] opacity-50 blur-3xl" />
            <div className="absolute -left-32 top-64 h-[360px] w-[360px] rounded-full bg-gradient-to-br from-[#BAE6FD] to-[#DDD6FE] opacity-40 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-14 sm:px-6 sm:pt-20 lg:pb-14 lg:pt-20">
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#E3E8EE] bg-white/80 px-3 py-1.5 text-xs font-medium text-[#425466] shadow-sm backdrop-blur">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="font-semibold text-[#0A2540]">Available for new projects</span>
                  <span className="text-[#C1C9D2]">·</span>
                  <span>Calls from 9am US Eastern</span>
                </div>

                <h1 className="mt-6 text-[34px] font-semibold leading-[1.07] tracking-[-0.035em] text-[#0A2540] sm:text-5xl lg:text-[56px]">
                  I build and run production web apps, and add AI to them{" "}
                  <span className="bg-gradient-to-r from-[#635BFF] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                    that actually works.
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-[#425466] sm:text-lg">
                  15+ years engineering software. I am Lead Engineer at Legiit, where I help scale the marketplace and
                  AI Command Center, now at $1M ARR across 400,000+ users. I work across Next.js, Laravel, Python, and
                  build production AI features: RAG, agents, and multi-model LLM integrations that stay fast and
                  reliable.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center">
                  <a
                    href={UPWORK_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#635BFF] px-7 py-3.5 sm:w-auto text-[15px] font-semibold text-white shadow-[0_12px_28px_-8px_rgba(99,91,255,0.65)] transition hover:bg-[#5851EA]"
                  >
                    <span>Hire me on Upwork</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href="#work"
                    className="group inline-flex w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-[#D5DBE1] sm:w-auto bg-white/80 px-6 py-3.5 text-[15px] font-semibold text-[#0A2540] shadow-sm backdrop-blur transition hover:border-[#B6BFCA] hover:bg-white"
                  >
                    <span>See my work</span>
                    <ChevronRight className="h-4 w-4 text-[#697386] transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>

              <HeroShowcase />
            </div>

            {/* Metrics strip */}
            <div className="mt-12 grid grid-cols-2 overflow-hidden rounded-2xl border border-[#E3E8EE] bg-white/80 shadow-sm backdrop-blur lg:grid-cols-4">
              {METRICS.map((m, i) => (
                <div
                  key={m.label}
                  className={`p-5 sm:p-6 ${i % 2 === 1 ? "border-l border-[#E3E8EE]" : ""} ${
                    i > 1 ? "border-t border-[#E3E8EE] lg:border-t-0" : ""
                  } ${i > 0 ? "lg:border-l" : ""}`}
                >
                  <p className="text-2xl font-semibold tracking-tight text-[#0A2540] sm:text-3xl">{m.value}</p>
                  <p className="mt-1 text-xs font-semibold text-[#635BFF]">{m.label}</p>
                  <p className="mt-1 text-xs leading-snug text-[#697386]">{m.sub}</p>
                </div>
              ))}
            </div>

          </div>
          {/* Client logo marquee, full width */}
          <div className="relative mt-2 border-t border-[#E3E8EE] bg-white/70 py-7 backdrop-blur">
            <p className="text-center text-xs font-medium uppercase tracking-[0.14em] text-[#8792A2]">
              Teams I have worked with
            </p>
            <div className="logo-marquee mt-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
              <ul className="marquee-track flex w-max items-center gap-14 pr-14">
                {[0, 1].map((copy) =>
                  CLIENT_LOGOS.map((l) => (
                    <li key={`${copy}-${l.name}`} aria-hidden={copy === 1} className="flex h-10 shrink-0 items-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={l.src}
                        alt={copy === 0 ? l.name : ""}
                        loading="lazy"
                        style={{ height: l.h, width: "auto", maxWidth: 140 }}
                        className="object-contain opacity-40 brightness-0 transition duration-300 hover:opacity-70"
                      />
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* CEO Video Endorsement & Client Reviews */}
        {/* ================================================================== */}
        <section id="endorsements" className="scroll-mt-16 border-b border-[#EAECF0] bg-[#FAFBFD]">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
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
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
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
                      <div className="flex flex-col justify-center border-t border-[#EAECF0] bg-[#F8F9FC] p-4 sm:p-6 lg:border-l lg:border-t-0">
                        <a
                          href={c.image}
                          target="_blank"
                          rel="noreferrer"
                          className="group/img block overflow-hidden rounded-xl border border-[#EAECF0] bg-white shadow-sm transition hover:border-[#D9D6FE] hover:shadow-md"
                          title="Click to view full screenshot"
                        >
                          <div className="flex items-center justify-between border-b border-[#EAECF0] bg-[#F2F4F7] px-3.5 py-2">
                            <div className="flex items-center gap-1.5">
                              <span className="h-2 w-2 rounded-full bg-slate-300" />
                              <span className="h-2 w-2 rounded-full bg-slate-300" />
                              <span className="h-2 w-2 rounded-full bg-slate-300" />
                              <span className="ml-2 font-mono text-[11px] text-slate-500">legiit.com</span>
                            </div>
                            <span className="flex items-center gap-1 text-[11px] font-medium text-[#533AFD] opacity-0 transition group-hover/img:opacity-100">
                              <span>Full size</span>
                              <ExternalLink className="h-3 w-3" />
                            </span>
                          </div>
                          <div className="relative aspect-[1555/1176] w-full bg-white">
                            <Image
                              src={c.image}
                              alt={c.title}
                              fill
                              sizes="(min-width: 1024px) 480px, 100vw"
                              className="object-contain"
                            />
                          </div>
                        </a>
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
                  <h3 className="text-lg font-bold text-[#0D1738]">Upwork Project Deliveries</h3>
                  <p className="text-sm text-[#667085]">Real client reviews from my Upwork profile.</p>
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

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {UPWORK_REVIEWS.map((p) => (
                  <a
                    key={p.title}
                    href={UPWORK_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col justify-between rounded-xl border border-[#EAECF0] bg-[#FAFBFD] p-5 shadow-sm transition hover:border-[#D9D6FE] hover:bg-white"
                  >
                    <div>
                      <div className="flex items-center gap-1 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-current" />
                        ))}
                      </div>
                      <h4 className="mt-2 text-sm font-bold text-[#0D1738]">{p.title}</h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-[#475467]">{p.detail}</p>
                    </div>
                    <p className="mt-3 border-t border-[#EAECF0] pt-2.5 text-xs italic text-[#344054]">
                      &ldquo;{p.quote}&rdquo;
                    </p>
                  </a>
                ))}
              </div>

              <h3 className="mt-10 text-sm font-bold text-[#0D1738]">Other projects</h3>
              <ul className="mt-3 space-y-3">
                {OTHER_PROJECTS.map((p) => (
                  <li key={p.title} className="flex gap-2.5 text-xs leading-relaxed text-[#475467]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#027A48]" />
                    <span>
                      <span className="font-semibold text-[#0D1738]">{p.title}.</span> {p.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* How I Work */}
        {/* ================================================================== */}
        <section id="how" className="scroll-mt-16 border-b border-[#EAECF0] bg-[#FAFBFD]">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
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
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
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
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
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
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-emerald-400 border border-white/10">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Available for new projects</span>
              </div>

              <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Looking for a senior engineer who shows up every day and ships?
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#D0D5DD]">
                {AVAILABILITY} {ENGAGEMENT} Send me an invite on Upwork and tell me about your codebase or roadmap.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <UpworkButton dark size="lg" label="Invite me on Upwork" />
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
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-xs text-[#667085] sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-[#0D1738] p-1">
              <Image src="/logo.png" alt="Shakil logo" width={14} height={14} className="object-contain" />
            </div>
            <span>© 2026 Shakil Ahmed. Rajshahi, Bangladesh. US Eastern overlap for calls.</span>
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