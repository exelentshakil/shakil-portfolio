import Image from "next/image";
import { Check, ExternalLink, Star } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScripts from "./components/HomeScripts";
import { PART1, PART2 } from "./components/home-data";

const UPWORK_URL = "https://www.upwork.com/freelancers/shakilhq";

const CASE_STUDIES = [
  {
    tag: "Laravel 10 · React · Stripe & Escrow · Redis Queues · MongoDB",
    title: "Legiit.com: High-volume freelance services marketplace",
    context:
      "A live two-sided marketplace at 400,000+ users with complex financial logic, escrow, instant messaging, and seller payouts for 400,000+ registered users.",
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

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#533AFD]">{eyebrow}</p>
      <h2 className="mt-3 text-[28px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#1A182B] sm:text-4xl lg:text-[42px]">
        {title}
      </h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-[#425466] sm:text-lg">{intro}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#F9F6F3] text-[#1A182B]">
      <Header />
      <main>
        <div id="vz" dangerouslySetInnerHTML={{ __html: PART1 }} />
        <section id="work" className="scroll-mt-24 border-b border-[#E4DFDD] bg-[#F9F6F3]">
                  <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
                    <SectionHeading
                      eyebrow="Selected Work"
                      title="Production systems I've built and run"
                      intro="Real web applications and backend systems with paying users. No throwaway mockups, no artificial metrics."
                    />
        
                    <div className="space-y-6 lg:space-y-8">
                      {CASE_STUDIES.map((c, i) => (
                        <div
                          key={c.title}
                          className="lg:sticky"
                          style={{ top: `calc(5.5rem + ${i * 1.25}rem)` }}
                        >
                        <article
                          className="card-float overflow-hidden rounded-3xl border border-[#E4DFDD] bg-white"
                        >
                          <div className={`grid gap-0 ${c.image ? "lg:grid-cols-[1.1fr_1fr]" : ""}`}>
                            <div className="p-6 sm:p-8">
                              <p className="text-xs font-semibold text-[#533AFD]">{c.tag}</p>
                              <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-[#1A182B] sm:text-2xl">{c.title}</h3>
                              <p className="mt-2 text-[15px] leading-relaxed text-[#425466]">{c.context}</p>
        
                              <div className="mt-5 border-t border-[#E4DFDD] pt-4">
                                <p className="text-xs font-semibold uppercase tracking-wider text-[#697386]">What I built and shipped</p>
                                <ul className="mt-3 space-y-2.5">
                                  {c.built.map((b) => (
                                    <li key={b} className="flex gap-2.5 text-[14px] leading-relaxed text-[#3C4257]">
                                      <Check className="mt-1 h-4 w-4 shrink-0 text-[#027A48]" />
                                      <span>{b}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
        
                            {c.image && (
                              <div className="flex flex-col justify-center border-t border-[#E4DFDD] bg-[#F9F6F3] p-4 sm:p-6 lg:border-l lg:border-t-0">
                                <a
                                  href={c.image}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="group/img block overflow-hidden rounded-xl border border-[#E4DFDD] bg-white shadow-sm transition hover:border-[#DAD7FF] hover:shadow-md"
                                  title="Click to view full screenshot"
                                >
                                  <div className="flex items-center justify-between border-b border-[#E4DFDD] bg-[#EDF1F6] px-3.5 py-2">
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
                        </div>
                      ))}
                    </div>
        
                    {/* Upwork Client Projects Grid */}
                    <div className="mt-14 border-t border-[#E4DFDD] pt-12">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                        <div>
                          <h3 className="text-lg font-semibold text-[#1A182B]">Upwork Project Deliveries</h3>
                          <p className="text-sm text-[#697386]">Real client reviews from my Upwork profile.</p>
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
                            className="card-soft flex flex-col justify-between rounded-2xl border border-[#E4DFDD] bg-white p-6"
                          >
                            <div>
                              <div className="flex items-center gap-1 text-amber-500">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="h-3 w-3 fill-current" />
                                ))}
                              </div>
                              <h4 className="mt-2 text-sm font-semibold text-[#1A182B]">{p.title}</h4>
                              <p className="mt-1.5 text-xs leading-relaxed text-[#425466]">{p.detail}</p>
                            </div>
                            <p className="mt-3 border-t border-[#E4DFDD] pt-2.5 text-xs italic text-[#3C4257]">
                              &ldquo;{p.quote}&rdquo;
                            </p>
                          </a>
                        ))}
                      </div>
        
                      <h3 className="mt-10 text-sm font-semibold text-[#1A182B]">Other projects</h3>
                      <ul className="mt-3 space-y-3">
                        {OTHER_PROJECTS.map((p) => (
                          <li key={p.title} className="flex gap-2.5 text-xs leading-relaxed text-[#425466]">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#027A48]" />
                            <span>
                              <span className="font-semibold text-[#1A182B]">{p.title}.</span> {p.detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
        <div id="vz" dangerouslySetInnerHTML={{ __html: PART2 }} />
      </main>
      <Footer />
      <HomeScripts />
    </div>
  );
}
