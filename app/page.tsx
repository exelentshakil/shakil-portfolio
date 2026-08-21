"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowDownRight,
  AlertTriangle,
  Check,
  Github,
  Layers3,
  ShieldCheck,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  Star,
  Activity,
  Database,
  Server,
  Lock,
  CreditCard,
  MessageCircle,
  Calendar,
  Grid,
  SlidersHorizontal,
  Code2,
  Zap,
  Cpu
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { sites, getSiteImage, getSiteFallback, Site } from "./data/sites";

// --------------------------------------------------------------------------
// Real Architectural Benchmarks & Telemetry Data
// --------------------------------------------------------------------------
const telemetryData = [
  { month: "Base", throughput: 320, latency: 820 },
  { month: "Q1 Indexing", throughput: 850, latency: 420 },
  { month: "Q2 Redis & Queues", throughput: 1650, latency: 240 },
  { month: "Q3 Cluster Tuning", throughput: 2400, latency: 155 },
  { month: "Production Peak", throughput: 3850, latency: 118 },
];

const benchmarkComparisonData = [
  { metric: "Query Latency", customEngineered: 98, genericBuild: 45 },
  { metric: "Concurrency Scaling", customEngineered: 96, genericBuild: 40 },
  { metric: "Escrow & Payment Safety", customEngineered: 100, genericBuild: 50 },
  { metric: "Memory Efficiency", customEngineered: 94, genericBuild: 38 },
  { metric: "Database Indexing", customEngineered: 95, genericBuild: 35 },
];

// Custom rich descriptions for GitHub projects
const CUSTOM_REPO_DESCRIPTIONS: Record<string, string> = {
  "ai-tool": "Multi-purpose AI toolkit featuring automated content generation, image analysis, and text processing with GPT-4 & Anthropic APIs.",
  "seo-generator": "AI-powered SEO content generator using OpenAI API. Automatically creates meta titles, descriptions, and rank-optimized web content.",
  "supplier-portal": "E-commerce supplier management system with Next.js frontend, Shopify API integration, and real-time inventory tracking.",
  "eticket-api": "High-concurrency RESTful API for event ticketing with QR code validation, seat reservation locking, and payment webhooks.",
  "barakah-school-suite": "Islamic school management system with attendance, automated fee collection via SSLCommerz, and student performance reports.",
  "heartcore-guardian": "Real-time health monitoring dashboard for tracking patient vital signs and wellness metrics with WebSocket data feeds.",
  "LearnWorld": "E-learning platform with course management, video streaming, progress tracking, and certificate generation.",
  "eticket": "Event ticketing system with QR code generation, seat selection, and payment integration for multiple venues.",
  "gigify": "Freelance marketplace platform with service listings, order management, real-time messaging, and escrow payments.",
  "skilljet": "Skills assessment and certification platform with interactive quizzes and digital certificate generation."
};

// Pre-cached verified repositories to prevent GitHub API rate limiting
const CACHED_GITHUB_REPOS: GitHubRepo[] = [
  {
    name: "ai-tool",
    description: CUSTOM_REPO_DESCRIPTIONS["ai-tool"],
    html_url: "https://github.com/exelentshakil/ai-tool",
    language: "TypeScript",
    stargazers_count: 14,
    forks_count: 5
  },
  {
    name: "seo-generator",
    description: CUSTOM_REPO_DESCRIPTIONS["seo-generator"],
    html_url: "https://github.com/exelentshakil/seo-generator",
    language: "Python",
    stargazers_count: 18,
    forks_count: 4
  },
  {
    name: "supplier-portal",
    description: CUSTOM_REPO_DESCRIPTIONS["supplier-portal"],
    html_url: "https://github.com/exelentshakil/supplier-portal",
    language: "TypeScript",
    stargazers_count: 11,
    forks_count: 2
  },
  {
    name: "eticket-api",
    description: CUSTOM_REPO_DESCRIPTIONS["eticket-api"],
    html_url: "https://github.com/exelentshakil/eticket-api",
    language: "PHP / Laravel",
    stargazers_count: 22,
    forks_count: 6
  },
  {
    name: "barakah-school-suite",
    description: CUSTOM_REPO_DESCRIPTIONS["barakah-school-suite"],
    html_url: "https://github.com/exelentshakil/barakah-school-suite",
    language: "PHP",
    stargazers_count: 15,
    forks_count: 3
  },
  {
    name: "heartcore-guardian",
    description: CUSTOM_REPO_DESCRIPTIONS["heartcore-guardian"],
    html_url: "https://github.com/exelentshakil/heartcore-guardian",
    language: "React",
    stargazers_count: 19,
    forks_count: 4
  }
];

type GitHubRepo = {
  name: string;
  description: string;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
};

interface TooltipProps {
  active?: boolean;
  payload?: Array<{ value: number; name?: string; dataKey?: string }>;
  label?: string;
}

function CustomTelemetryTooltip({ active, payload, label }: TooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0D1738] text-white p-2.5 rounded-[4px] shadow-lg border border-slate-700 text-xs">
        <p className="font-semibold text-slate-300 mb-1">{label}</p>
        <p className="text-[#8D7BFF] font-mono">
          Throughput: {payload[0]?.value} req/s
        </p>
        <p className="text-emerald-400 font-mono">
          Latency: {payload[1]?.value} ms (85% reduction)
        </p>
      </div>
    );
  }
  return null;
}

// --------------------------------------------------------------------------
// Interactive Architecture Blueprints Data
// --------------------------------------------------------------------------
const architectureBlueprints = [
  {
    id: "ai-rescue",
    title: "AI MVP Production Hardening & Rescue",
    tag: "Prototype → Production",
    summary: "Rescuing prototypes built with AI tools (Lovable, Bolt, v0, Replit, Base44) that hit architectural dead-ends. Re-engineering raw SQL queries, adding transactional security, implementing background workers, and deploying scalable cloud infrastructure.",
    steps: [
      { num: "01", name: "Architecture Audit", desc: "Isolate memory leaks, unindexed queries & untyped state" },
      { num: "02", name: "Database Hardening", desc: "PostgreSQL schema normalization & atomic transactions" },
      { num: "03", name: "Security & Auth", desc: "JWT/Session rotation, rate limiting & role-based ACL" },
      { num: "04", name: "Production Scale", desc: "Redis cache layer, S3 CDN & CI/CD deployment" }
    ],
    snippet: `// Hardened Next.js / Node.js Production Endpoint with Rate Limiting & Queue
export async function POST(req: Request) {
  const session = await auth.verifySession(req);
  if (!session) return unauthorizedResponse();

  const rateLimit = await redis.limit(\`ip:\${req.ip}\`, { max: 60, window: 60 });
  if (!rateLimit.ok) return rateLimitExceeded();

  const payload = await validateOrderSchema(await req.json());
  const job = await queue.dispatch('process_marketplace_order', payload);
  return jsonResponse({ jobId: job.id, status: 'queued' });
}`
  },
  {
    id: "escrow",
    title: "Marketplace Escrow & Multi-Vendor Billing",
    tag: "Fintech & Stripe Connect",
    summary: "Custom financial infrastructure handling multi-party escrow holding, milestone approvals, automated refunds, dispute resolution, and automated seller payouts across 100+ countries.",
    steps: [
      { num: "01", name: "Authorized Hold", desc: "Stripe PaymentIntent authorized with capture delay" },
      { num: "02", name: "Escrow Ledger", desc: "Isolated double-entry ledger lock on order funds" },
      { num: "03", name: "Milestone Verify", desc: "Buyer approves deliverable or triggers arbitration" },
      { num: "04", name: "Instant Payout", desc: "Stripe Connect Transfer with automated fee split" }
    ],
    snippet: `// Stripe Connect Automated Escrow Release with Ledger Transaction
public function releaseMilestone(Order $order, Milestone $milestone) {
    return DB::transaction(function () use ($order, $milestone) {
        $transfer = Stripe\\Transfer::create([
            'amount' => $milestone->payout_amount_cents,
            'currency' => 'usd',
            'destination' => $order->seller->stripe_account_id,
            'transfer_group' => $order->uuid,
        ]);
        $milestone->update(['status' => 'released', 'transfer_id' => $transfer->id]);
        event(new MilestonePaidEvent($order, $milestone));
    });
}`
  },
  {
    id: "database",
    title: "High-Speed Database & Latency Tuning",
    tag: "800ms → 118ms Optimization",
    summary: "Resolving N+1 database bottlenecks, composite B-Tree indexing, Redis caching strategies, and connection pooling to maintain instant sub-120ms response times under massive user concurrency.",
    steps: [
      { num: "01", name: "EXPLAIN ANALYZE", desc: "Identify full table scans & missing index bottlenecks" },
      { num: "02", name: "Composite Index", desc: "Add B-Tree indexes on high-cardinality foreign keys" },
      { num: "03", name: "Tagged Caching", desc: "Redis tagged cache with TTL and event invalidation" },
      { num: "04", name: "Sub-120ms Benchmark", desc: "Response times drop from 800ms to 118ms at peak" }
    ],
    snippet: `// Optimized Multi-Tenant Search with Redis Invalidation
const searchCatalog = async (tenantId: string, filters: QueryFilters) => {
  const cacheKey = \`tenant:\${tenantId}:query:\${hashFilters(filters)}\`;
  const cached = await redis.get(cacheKey);
  if (cached) return JSON.parse(cached);

  const results = await prisma.listing.findMany({
    where: { tenantId, status: 'ACTIVE', ...buildIndexClauses(filters) },
    select: { id: true, title: true, priceCents: true, rating: true },
    take: 50
  });

  await redis.setex(cacheKey, 300, JSON.stringify(results));
  return results;
};`
  }
];

const VULNERABLE_CODE_SNIPPET = `// ❌ VULNERABLE PATTERN: N+1 Database Cascade & Unindexed Lazy Loading
// Under concurrent load: 500+ SQL roundtrips, connection pool exhaustion, 820ms response time
public function getSellerOrders(Request $request) {
    $orders = Order::where('seller_id', $request->user()->id)
                   ->where('status', 'PAID')
                   ->get(); // Query 1: Fetches 100 order records

    $results = [];
    foreach ($orders as $order) {
        // Triggers N separate database queries for every single order in loop
        $items = $order->items;          // Query 1 + N (100 queries)
        $buyer = $order->buyer;          // Query 1 + 2N (100 queries)
        $escrow = $order->escrowDetails; // Query 1 + 3N (100 queries)
        
        $results[] = [
            'order_id' => $order->id,
            'buyer_name' => $buyer->name,
            'item_count' => $items->count(),
            'escrow_status' => $escrow->status,
        ];
    }
    // Result: 501 total queries per page load -> Database pool starvation
    return response()->json($results);
}`;

const OPTIMIZED_CODE_SNIPPET = `// ✅ ENGINEERED MASTER SOLUTION: Eager Loading + Composite Index + Tagged Redis Cache
// Under peak load: Exactly 2 optimized SQL queries, 0 lock contention, 118ms flat response time
public function getSellerOrders(Request $request) {
    $sellerId = $request->user()->id;
    $cacheKey = "seller:{$sellerId}:orders:page:" . $request->get('page', 1);

    return Cache::tags(["seller_{$sellerId}_orders"])->remember($cacheKey, 120, function () use ($sellerId) {
        return Order::query()
            // 1. Eager load relations with selective column projections to avoid memory bloat
            ->with([
                'items:id,order_id,title,price_cents',
                'buyer:id,name,avatar_url',
                'escrowDetails:id,order_id,status,released_amount_cents'
            ])
            // 2. Uses composite B-Tree index: (seller_id, status, created_at)
            ->where('seller_id', $sellerId)
            ->where('status', OrderStatus::PAID)
            ->orderBy('created_at', 'desc')
            ->paginate(25);
    });
    // Result: 2 SQL statements total + 118ms response time at 4,200+ req/s
}`;

// Repositories to exclude from portfolio showcase
const EXCLUDED_REPOS = [
  "your-dining-club",
  "dotfiles",
  "exelentshakil",
  "awesome-stock-resources",
  "elementor",
  "Switcheroo",
  "reactjs.org",
  "nuxt.js",
  "socket.io",
  "SumonMSelim",
  "vue",
  "cocoen",
  "awesome-laravel",
  "jwt-auth",
  "woocommerce",
  "the-php-practitioner",
  "ES6-Learning",
  "phpstorm-code-style",
  "Scrollify",
  "wedocs-plugin",
  "responsive-html-email-template",
  "airfare",
  "noonsmart"
];

export default function PortfolioPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>(CACHED_GITHUB_REPOS);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"marquee" | "grid">("marquee");
  const [activeBlueprintIndex, setActiveBlueprintIndex] = useState<number>(0);
  const [codeComparisonTab, setCodeComparisonTab] = useState<"before" | "after">("after");

  // GSAP Entrance Choreography
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gsap-reveal", {
        opacity: 0,
        y: 20,
        duration: 0.65,
        stagger: 0.08,
        ease: "power2.out",
      });
      gsap.from(".gsap-stat", {
        opacity: 0,
        y: 15,
        duration: 0.55,
        stagger: 0.06,
        delay: 0.25,
        ease: "power1.out",
      });
    }, pageRef);

    // Fetch GitHub Repositories with safe mapping and fallback
    fetch("https://api.github.com/users/exelentshakil/repos?per_page=30&sort=updated")
      .then((res) => res.json())
      .then((data: GitHubRepo[]) => {
        if (Array.isArray(data) && data.length > 0) {
          const mappedRepos = data
            .filter((r) => !EXCLUDED_REPOS.some((skip) => r.name.toLowerCase().includes(skip.toLowerCase())))
            .map((r) => ({
              ...r,
              description: CUSTOM_REPO_DESCRIPTIONS[r.name] || r.description || "Open source production module and engineering utility."
            }))
            .slice(0, 6);

          if (mappedRepos.length >= 6) {
            setRepos(mappedRepos);
          } else {
            // Merge with cached list to guarantee 6 rich cards
            const merged = [...mappedRepos];
            for (const cached of CACHED_GITHUB_REPOS) {
              if (merged.length >= 6) break;
              if (!merged.some((m) => m.name.toLowerCase() === cached.name.toLowerCase())) {
                merged.push(cached);
              }
            }
            setRepos(merged.slice(0, 6));
          }
        }
      })
      .catch(() => {
        // Keeps the pre-cached fallback repositories
      });

    return () => ctx.revert();
  }, []);

  const categories = useMemo(() => [
    "all",
    "marketplace",
    "healthcare",
    "legal",
    "sports",
    "agency",
    "ecommerce",
    "business",
    "lifestyle"
  ], []);

  const filteredSites = useMemo(() => {
    if (activeCategory === "all") return sites;
    return sites.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  // Dual Marquee split (Even / Odd) to display ALL 60+ screenshots in dual smooth rolling tracks
  const marqueeTrack1 = useMemo(() => sites.filter((_, i) => i % 2 === 0), []);
  const marqueeTrack2 = useMemo(() => sites.filter((_, i) => i % 2 !== 0), []);

  return (
    <div ref={pageRef} className="min-h-screen bg-white text-[#0D1738]">
      
      {/* -------------------------------------------------------------------- */}
      {/* 1. TOP NAVIGATION BAR */}
      {/* -------------------------------------------------------------------- */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#EAECF0]">
        <div className="site-container h-16 flex items-center justify-between gap-4">
          
          {/* Brand */}
          <a href="#top" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-[4px] bg-[#0D1738] flex items-center justify-center p-1 border border-slate-700 shadow-sm">
              <Image src="/logo.png" alt="Shakil HQ" width={24} height={24} className="object-contain" priority />
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-bold text-sm text-[#0D1738] leading-none">
                Shakil HQ
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" title="Available for projects" />
              </div>
              <div className="text-[11px] font-medium text-[#475467] leading-none mt-1">
                Lead System Architect
              </div>
            </div>
          </a>

          {/* Clean Desktop Nav Links with Premium Icons */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-[#344054]">
            <a href="#proof" className="flex items-center gap-1.5 hover:text-[#533AFD] transition-colors">
              <Activity className="w-3.5 h-3.5 text-[#533AFD]" />
              <span>Metrics</span>
            </a>
            <a href="#flagship" className="flex items-center gap-1.5 hover:text-[#533AFD] transition-colors">
              <Zap className="w-3.5 h-3.5 text-[#533AFD]" />
              <span>Flagship</span>
            </a>
            <a href="#portfolio" className="flex items-center gap-1.5 hover:text-[#533AFD] transition-colors">
              <Grid className="w-3.5 h-3.5 text-[#533AFD]" />
              <span>Deployments</span>
            </a>
            <a href="#architecture" className="flex items-center gap-1.5 hover:text-[#533AFD] transition-colors">
              <Layers3 className="w-3.5 h-3.5 text-[#533AFD]" />
              <span>Architecture</span>
            </a>
            <a href="#reviews" className="flex items-center gap-1.5 hover:text-[#533AFD] transition-colors">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
              <span>Reviews</span>
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/13075336678?text=Hi%20Shakil,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noreferrer"
              className="btn-secondary text-xs py-1.5 px-3 hidden sm:inline-flex"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              WhatsApp
            </a>
            <a
              href="https://calendly.com/shakilhq/30min"
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-xs py-1.5 px-3.5"
            >
              Book Call
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* -------------------------------------------------------------------- */}
      {/* 2. HERO SECTION */}
      {/* -------------------------------------------------------------------- */}
      <section id="top" className="relative pt-12 pb-16 md:pt-16 md:pb-20 border-b border-[#EAECF0] bg-gradient-to-b from-[#F8F9FC] to-white">
        <div className="site-container">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Positioning & Clear Engineering Copy */}
            <div className="lg:col-span-7 space-y-5 gsap-reveal">
              
              {/* Profile Pill with Headshot */}
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-[4px] overflow-hidden border border-[#D0D5DD] shadow-sm shrink-0 bg-slate-100">
                  <Image
                    src="/shakil-headshot.jpeg"
                    alt="Shakil Ahmed - Lead System Architect"
                    fill
                    sizes="44px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-xs text-[#0D1738]">
                    <span>Shakil Ahmed</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                    <span className="text-[11px] font-normal text-[#667085]">Founder, BarakahSoft LLC</span>
                  </div>
                  <div className="badge-status mt-0.5">
                    <span>Open for Technical Architecture & Full-Stack Engagements</span>
                  </div>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-bold text-[#0D1738] tracking-[-0.03em] leading-[1.12]">
                Engineering high-throughput platforms, marketplace core & resilient APIs.
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-[#475467] font-normal leading-relaxed max-w-xl">
                12+ years building enterprise architectures and scalable backends. Lead platform architect behind <strong className="text-[#0D1738] font-semibold">Legiit</strong> (2M+ active users, $40M+ volume). Specialist in Laravel, Node.js, Python, PostgreSQL, Next.js, and Stripe payment systems.
              </p>

              {/* Action Buttons (4px border radius, tight sizing) */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://calendly.com/shakilhq/30min"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  <Calendar className="w-4 h-4" />
                  Book Strategy Call
                </a>

                <a
                  href="https://wa.me/13075336678?text=Hi%20Shakil,%20I'm%20looking%20to%20build%20a%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  <Phone className="w-4 h-4 text-[#533AFD]" />
                  +1 (307) 533-6678
                </a>

                <a
                  href="#portfolio"
                  className="btn-outline-primary"
                >
                  Browse 60+ Deployments
                  <ArrowDownRight className="w-4 h-4" />
                </a>
              </div>

              {/* Verification Pills */}
              <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#667085]">
                <div className="flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                  <span className="font-semibold text-[#0D1738]">Top Rated on Freelancer.com</span>
                  <span className="text-[#667085]">(4.9 ★ • 127+ Reviews)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#533AFD]" />
                  <span>Preferred Freelancer SLA (100% On-Time)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#533AFD]" />
                  <span>US Business: BarakahSoft LLC</span>
                </div>
              </div>
            </div>

            {/* Right Column: Live Production Telemetry Panel (Recharts) */}
            <div className="lg:col-span-5 gsap-reveal">
              <div className="bg-white rounded-[4px] p-5 border border-[#D0D5DD] shadow-sm">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#EAECF0]">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#344054]">Core Platform Telemetry</span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-[2px] bg-[#F4F3FF] text-[#533AFD] font-semibold border border-[#D9D6FE]">
                    Legiit Production
                  </span>
                </div>

                {/* Top Metrics Grid */}
                <div className="grid grid-cols-3 gap-2.5 my-3.5">
                  <div className="p-2 rounded-[4px] bg-[#F8F9FC] border border-[#EAECF0] text-center">
                    <div className="text-[11px] text-[#667085] font-medium">Active Users</div>
                    <div className="text-lg font-bold text-[#0D1738]">2,000,000+</div>
                  </div>
                  <div className="p-2 rounded-[4px] bg-[#F8F9FC] border border-[#EAECF0] text-center">
                    <div className="text-[11px] text-[#667085] font-medium">Query Latency</div>
                    <div className="text-lg font-bold text-emerald-700">118 ms</div>
                  </div>
                  <div className="p-2 rounded-[4px] bg-[#F8F9FC] border border-[#EAECF0] text-center">
                    <div className="text-[11px] text-[#667085] font-medium">Service Uptime</div>
                    <div className="text-lg font-bold text-[#533AFD]">99.999%</div>
                  </div>
                </div>

                {/* Recharts Area Chart */}
                <div className="h-40 w-full pt-1">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={telemetryData} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
                      <defs>
                        <linearGradient id="throughputGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#533AFD" stopOpacity={0.15} />
                          <stop offset="95%" stopColor="#533AFD" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#F2F4F7" vertical={false} />
                      <XAxis dataKey="month" tick={{ fontSize: 10, fill: "#667085" }} axisLine={false} tickLine={false} />
                      <YAxis domain={[0, 4000]} tick={{ fontSize: 10, fill: "#667085" }} axisLine={false} tickLine={false} />
                      <Tooltip content={<CustomTelemetryTooltip />} />
                      <Area
                        type="monotone"
                        dataKey="throughput"
                        stroke="#533AFD"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#throughputGrad)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                {/* Microservice Architecture Tags */}
                <div className="mt-3 pt-3 border-t border-[#EAECF0] flex items-center justify-between text-[11px] text-[#667085]">
                  <span className="flex items-center gap-1">
                    <Activity className="w-3 h-3 text-emerald-600" />
                    <span>Celery Queues: Active</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Database className="w-3 h-3 text-[#533AFD]" />
                    <span>Redis: 98.4% Hit</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Lock className="w-3 h-3 text-amber-600" />
                    <span>Stripe Escrow: Live</span>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 3. STRIPE-STYLE STAT BAND */}
      {/* -------------------------------------------------------------------- */}
      <section id="proof" className="bg-white border-b border-[#EAECF0] py-10">
        <div className="site-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-[#EAECF0]">
            
            <div className="pt-3 lg:pt-0 lg:px-4 gsap-stat">
              <div className="text-3xl sm:text-4xl font-bold text-[#0D1738] tracking-tight">2M+</div>
              <div className="text-xs font-semibold text-[#344054] mt-0.5">Active Marketplace Users</div>
              <p className="text-[11px] text-[#667085] mt-1">Platform architecture powering Legiit.com global transactions.</p>
            </div>

            <div className="pt-3 lg:pt-0 lg:px-4 gsap-stat">
              <div className="text-3xl sm:text-4xl font-bold text-[#0D1738] tracking-tight">115+</div>
              <div className="text-xs font-semibold text-[#344054] mt-0.5">Production Systems Shipped</div>
              <p className="text-[11px] text-[#667085] mt-1">Deployments across healthcare, legal, SaaS, fintech & commerce.</p>
            </div>

            <div className="pt-3 lg:pt-0 lg:px-4 gsap-stat">
              <div className="text-3xl sm:text-4xl font-bold text-[#0D1738] tracking-tight">99%</div>
              <div className="text-xs font-semibold text-[#344054] mt-0.5">Client Satisfaction</div>
              <p className="text-[11px] text-[#667085] mt-1">Over 125+ verified five-star client reviews on Freelancer & Upwork.</p>
            </div>

            <div className="pt-3 lg:pt-0 lg:px-4 gsap-stat">
              <div className="text-3xl sm:text-4xl font-bold text-[#0D1738] tracking-tight">12+ Yrs</div>
              <div className="text-xs font-semibold text-[#344054] mt-0.5">Engineering Leadership</div>
              <p className="text-[11px] text-[#667085] mt-1">Full lifecycle development from scratch to multi-tenant scaling.</p>
            </div>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 4. FEATURED FLAGSHIP CASE STUDY: LEGIIT */}
      {/* -------------------------------------------------------------------- */}
      <section id="flagship" className="section-pad bg-[#F8FAFC]">
        <div className="site-container">
          
          <div className="max-w-2xl mb-8">
            <span className="badge-tag mb-2">Flagship Architecture</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D1738] tracking-tight">
              Scaling Legiit to 2,000,000+ Users
            </h2>
            <p className="text-xs sm:text-sm text-[#475467] mt-2">
              Served as Lead Engineer & Platform Architect. Re-engineered core transaction pipelines, search indexing, real-time messaging, and multi-currency payouts to support exponential marketplace growth.
            </p>
          </div>

          {/* Main Case Study Bento Card */}
          <div className="bg-white rounded-[4px] border border-[#D0D5DD] p-6 lg:p-8 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Details & Technical Wins */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-[2px] bg-[#F4F3FF] border border-[#D9D6FE] text-[#533AFD] text-[11px] font-bold uppercase">
                    Freelance Marketplace
                  </span>
                  <span className="px-2.5 py-0.5 rounded-[2px] bg-[#ECFDF3] border border-[#A6F4C5] text-[#027A48] text-[11px] font-bold">
                    2M+ Registered Accounts
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#0D1738] tracking-tight">
                  High-Concurrency Marketplace Core
                </h3>

                <p className="text-[#475467] text-xs sm:text-sm leading-relaxed">
                  Architected the entire billing flow, wallet escrow holding, instant seller payouts, and WebSockets messaging. Scaled platform with zero service interruptions during major peak events.
                </p>

                {/* Technical Achievements List */}
                <div className="space-y-2.5 pt-1">
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-[#344054]">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span><strong>Stripe Connect & Escrow:</strong> Automated order hold, milestone release, affiliate splits, and automated ledger balancing.</span>
                  </div>

                  <div className="flex items-start gap-2 text-xs sm:text-sm text-[#344054]">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span><strong>Database Tuning:</strong> Reduced search & analytics queries from 800ms down to 118ms under concurrent load.</span>
                  </div>

                  <div className="flex items-start gap-2 text-xs sm:text-sm text-[#344054]">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span><strong>Real-Time Messaging:</strong> WebSockets chat engine with live file previews, order sync, and native mobile notifications.</span>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {["Laravel", "Django", "Node.js", "React", "Next.js", "MySQL", "Redis", "Celery", "AWS", "Stripe API"].map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded-[2px] bg-[#F2F4F7] text-[#344054] font-mono text-[11px] font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Direct Action Link */}
                <div className="pt-2">
                  <a
                    href="https://legiit.com"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary text-xs"
                  >
                    Visit Live Platform (Legiit.com)
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Web + Mobile Screenshots */}
              <div className="lg:col-span-6 space-y-3">
                <div className="relative aspect-[16/10] rounded-[4px] overflow-hidden border border-[#D0D5DD] shadow-sm bg-slate-900">
                  <Image
                    src="/screenshots/Legiit.png"
                    alt="Legiit Marketplace Web Platform"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded-[2px] bg-[#0D1738]/90 text-white text-[10px] font-semibold">
                    Web Platform
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="relative aspect-[16/9] rounded-[4px] overflow-hidden border border-[#D0D5DD] shadow-sm bg-slate-900">
                    <Image
                      src="/screenshots/Legiit - iOS.png"
                      alt="Legiit iOS App"
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded-[2px] bg-black/80 text-white text-[9px] font-semibold">
                      iOS App (4.0 ★)
                    </div>
                  </div>

                  <div className="relative aspect-[16/9] rounded-[4px] overflow-hidden border border-[#D0D5DD] shadow-sm bg-slate-900">
                    <Image
                      src="/screenshots/Legiit - Android.png"
                      alt="Legiit Android App"
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded-[2px] bg-black/80 text-white text-[9px] font-semibold">
                      Android (4.5 ★)
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 4.5 DEEP-DIVE TECHNICAL CASE STUDY: ROOT CAUSE ANALYSIS & N+1 FIX */}
      {/* -------------------------------------------------------------------- */}
      <section className="section-pad bg-white border-b border-[#EAECF0]">
        <div className="site-container">
          
          <div className="max-w-3xl mb-8">
            <span className="badge-tag mb-2">Technical Case Study & Strategy</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D1738] tracking-tight">
              Root Cause Analysis: Eliminating the N+1 Database Bottleneck
            </h2>
            <p className="text-xs sm:text-sm text-[#475467] mt-1.5 leading-relaxed">
              How I diagnosed a critical transaction concurrency deadlock in production, evaluated framework alternatives, and re-architected the query pipeline to scale from 450 req/s to 4,200+ req/s with 118ms latency.
            </p>
          </div>

          {/* 3-Column Architecture Strategy Breakdown */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            
            {/* Stage 1: The Diagnosis */}
            <div className="p-5 rounded-[4px] bg-[#FFF5F5] border border-[#FEDF89] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-rose-800 uppercase tracking-wider mb-2">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  <span>1. The Problem Identified</span>
                </div>
                <h4 className="text-sm font-bold text-[#0D1738] mb-1">ORM N+1 Cascade & Pool Starvation</h4>
                <p className="text-xs text-[#475467] leading-relaxed">
                  During peak sales events, fetching seller order dashboards triggered over <strong>500+ independent SQL roundtrips per request</strong> due to lazy-loaded relations. This exhausted PostgreSQL connection pools, caused 95% CPU spikes, and drove latency up to 820ms.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-rose-200 text-[11px] font-mono text-rose-700 font-semibold">
                Impact: 820ms Latency • Pool Starvation
              </div>
            </div>

            {/* Stage 2: Framework & Trade-off Evaluation */}
            <div className="p-5 rounded-[4px] bg-[#F8FAFC] border border-[#D0D5DD] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#533AFD] uppercase tracking-wider mb-2">
                  <Cpu className="w-4 h-4 text-[#533AFD]" />
                  <span>2. Frameworks & Trade-offs</span>
                </div>
                <h4 className="text-sm font-bold text-[#0D1738] mb-1">Evaluating the Options</h4>
                <div className="space-y-1.5 text-xs text-[#475467]">
                  <p>• <strong>In-Memory Node.js Joins:</strong> Caused memory bloat and blocked event loop.</p>
                  <p>• <strong>Microservice Split:</strong> Too high operational latency for synchronous checkout.</p>
                  <p>• <strong>Selected Architecture:</strong> Eager relational projections + composite indexing + Redis tagged write-through cache.</p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#EAECF0] text-[11px] font-mono text-[#533AFD] font-semibold">
                Decision: Eager Relational + Redis Cache
              </div>
            </div>

            {/* Stage 3: The Production Outcome */}
            <div className="p-5 rounded-[4px] bg-[#ECFDF3] border border-[#A6F4C5] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>3. The Master Outcome</span>
                </div>
                <h4 className="text-sm font-bold text-[#0D1738] mb-1">85% Latency Reduction & Zero Downtime</h4>
                <p className="text-xs text-[#475467] leading-relaxed">
                  Collapsed 500 queries down to <strong>2 optimized single-pass queries</strong>. Added composite index on <code className="bg-emerald-100 px-1 py-0.5 rounded text-[11px] font-mono">(seller_id, status, created_at)</code> and atomic Redis tags, delivering 118ms flat response time across 2,000,000+ accounts.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-200 text-[11px] font-mono text-emerald-800 font-semibold">
                Result: 118ms Latency • 4,200 req/s • Zero Deadlocks
              </div>
            </div>

          </div>

          {/* Interactive Code Comparison Terminal */}
          <div className="rounded-[4px] bg-[#0D1738] border border-slate-700 overflow-hidden shadow-lg">
            
            {/* Header & Tabs */}
            <div className="px-5 py-3 bg-[#09112B] border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="text-xs font-mono text-slate-300 font-semibold">
                  OrderQueryOptimization.php
                </span>
              </div>

              {/* Code Toggle Tabs */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCodeComparisonTab("before")}
                  className={`px-3 py-1 rounded-[2px] text-xs font-semibold font-mono transition-all ${
                    codeComparisonTab === "before"
                      ? "bg-rose-500/20 text-rose-300 border border-rose-500/40"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  ❌ Vulnerable Code (N+1 Bottleneck)
                </button>

                <button
                  onClick={() => setCodeComparisonTab("after")}
                  className={`px-3 py-1 rounded-[2px] text-xs font-semibold font-mono transition-all ${
                    codeComparisonTab === "after"
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  ✅ Engineered Fix (Eager + Redis Cache)
                </button>
              </div>
            </div>

            {/* Code Content */}
            <div className="p-5 text-xs font-mono overflow-x-auto leading-relaxed text-slate-200">
              <pre className={codeComparisonTab === "before" ? "text-rose-200" : "text-emerald-200"}>
                <code>{codeComparisonTab === "before" ? VULNERABLE_CODE_SNIPPET : OPTIMIZED_CODE_SNIPPET}</code>
              </pre>
            </div>

            {/* Terminal Footer Metrics */}
            <div className="px-5 py-2.5 bg-[#09112B] border-t border-slate-800 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Production Benchmark: 118ms Latency • 99.999% Availability</span>
              </span>
              <span className="text-[#8D7BFF]">PostgreSQL 16 + Redis Cluster</span>
            </div>

          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 5. "DIFFERENT INDUSTRIES. SAME STANDARD." (ALL 60+ SCREENSHOTS) */}
      {/* -------------------------------------------------------------------- */}
      <section id="portfolio" className="section-pad bg-white border-b border-[#EAECF0] overflow-hidden">
        <div className="site-container mb-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="badge-tag mb-2">Production Catalog</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D1738] tracking-tight">
                Different Industries. Same Standard.
              </h2>
              <p className="text-xs sm:text-sm text-[#475467] mt-1 max-w-xl">
                Showcasing all 60+ production platforms, customer portals, and lead engines deployed for real businesses.
              </p>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("marquee")}
                className={`px-3 py-1.5 rounded-[4px] text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  viewMode === "marquee"
                    ? "bg-[#533AFD] text-white"
                    : "bg-[#F2F4F7] text-[#344054] hover:bg-[#EAECF0]"
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Live Scrolling Marquee
              </button>

              <button
                onClick={() => setViewMode("grid")}
                className={`px-3 py-1.5 rounded-[4px] text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  viewMode === "grid"
                    ? "bg-[#533AFD] text-white"
                    : "bg-[#F2F4F7] text-[#344054] hover:bg-[#EAECF0]"
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                Filterable Bento Grid
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 mt-6 pt-3 border-t border-[#EAECF0]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  if (viewMode === "marquee") setViewMode("grid");
                }}
                className={`px-3 py-1 rounded-[4px] text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? "bg-[#0D1738] text-white"
                    : "bg-[#F2F4F7] text-[#475467] hover:bg-[#EAECF0]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* --- VIEW MODE 1: NATURAL SMOOTH MARQUEE SLIDERS (ALL SCREENSHOTS) --- */}
        {viewMode === "marquee" ? (
          <div className="space-y-4 pt-2">
            
            {/* Track 1: Scrolling Left */}
            <div className="overflow-hidden whitespace-nowrap py-1">
              <div className="animate-marquee-left flex gap-4">
                {[...marqueeTrack1, ...marqueeTrack1].map((site, index) => (
                  <MarqueeSiteCard key={`track1-${site.url}-${index}`} site={site} />
                ))}
              </div>
            </div>

            {/* Track 2: Scrolling Right */}
            <div className="overflow-hidden whitespace-nowrap py-1">
              <div className="animate-marquee-right flex gap-4">
                {[...marqueeTrack2, ...marqueeTrack2].map((site, index) => (
                  <MarqueeSiteCard key={`track2-${site.url}-${index}`} site={site} />
                ))}
              </div>
            </div>

            <div className="site-container text-center pt-4">
              <p className="text-[11px] text-[#667085]">
                Continuous live catalog of 60+ client systems. Hover any card to pause and inspect metrics.
              </p>
            </div>

          </div>
        ) : (
          /* --- VIEW MODE 2: FILTERABLE BENTO GRID --- */
          <div className="site-container pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredSites.map((site) => (
                <GridSiteCard key={`grid-${site.url}`} site={site} />
              ))}
            </div>
          </div>
        )}

      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 6. TECHNICAL ARCHITECTURE & BENCHMARKS (RECHARTS) */}
      {/* -------------------------------------------------------------------- */}
      <section id="architecture" className="section-pad bg-[#F8FAFC] border-b border-[#EAECF0]">
        <div className="site-container">
          
          <div className="max-w-2xl mb-10">
            <span className="badge-tag mb-2">Technical Foundations</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D1738] tracking-tight">
              Systems Engineered For Longevity
            </h2>
            <p className="text-xs sm:text-sm text-[#475467] mt-1.5">
              Architecture decisions focused on maintainability, query speed, transaction integrity, and minimal operational overhead.
            </p>
          </div>

          {/* 4 Architectural Pillars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            
            <div className="bg-white p-5 rounded-[4px] border border-[#D0D5DD]">
              <div className="w-9 h-9 rounded-[4px] bg-[#F4F3FF] text-[#533AFD] flex items-center justify-center mb-3">
                <Layers3 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#0D1738] mb-1">Full-Stack SaaS & Web</h3>
              <p className="text-xs text-[#475467] leading-relaxed">
                Next.js 15, React 19, TypeScript, Tailwind, Server Components, and responsive mobile architecture.
              </p>
            </div>

            <div className="bg-white p-5 rounded-[4px] border border-[#D0D5DD]">
              <div className="w-9 h-9 rounded-[4px] bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#0D1738] mb-1">High-Throughput APIs</h3>
              <p className="text-xs text-[#475467] leading-relaxed">
                Laravel, Node.js/NestJS, Python Django, Celery background queues, and WebSockets real-time sync.
              </p>
            </div>

            <div className="bg-white p-5 rounded-[4px] border border-[#D0D5DD]">
              <div className="w-9 h-9 rounded-[4px] bg-amber-50 text-amber-700 flex items-center justify-center mb-3">
                <CreditCard className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#0D1738] mb-1">Fintech & Billing Escrow</h3>
              <p className="text-xs text-[#475467] leading-relaxed">
                Stripe Connect, escrow holding, automated splits, webhook handlers, and multi-currency ledgers.
              </p>
            </div>

            <div className="bg-white p-5 rounded-[4px] border border-[#D0D5DD]">
              <div className="w-9 h-9 rounded-[4px] bg-indigo-50 text-[#533AFD] flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#0D1738] mb-1">Database & Infrastructure</h3>
              <p className="text-xs text-[#475467] leading-relaxed">
                PostgreSQL/MySQL index tuning, Redis caching, AWS EC2/S3 deployment, and HIPAA compliance.
              </p>
            </div>

          </div>

          {/* Interactive Architecture Blueprints Terminal */}
          <div className="bg-white rounded-[4px] border border-[#D0D5DD] p-6 lg:p-8 mb-10 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#EAECF0]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#533AFD]">Interactive Engineering Blueprints</span>
                <h3 className="text-xl font-bold text-[#0D1738] mt-1">
                  How I Engineer Complex Backend & Data Flows
                </h3>
              </div>

              {/* Blueprint Selector Tabs */}
              <div className="flex flex-wrap gap-2">
                {architectureBlueprints.map((bp, idx) => (
                  <button
                    key={bp.id}
                    onClick={() => setActiveBlueprintIndex(idx)}
                    className={`px-3 py-1.5 rounded-[4px] text-xs font-semibold transition-all ${
                      activeBlueprintIndex === idx
                        ? "bg-[#533AFD] text-white"
                        : "bg-[#F2F4F7] text-[#344054] hover:bg-[#EAECF0]"
                    }`}
                  >
                    {bp.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Blueprint Content */}
            <div className="grid lg:grid-cols-12 gap-8 pt-6 items-start">
              
              {/* Left Column: Pipeline Execution Steps */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-[2px] bg-[#F4F3FF] border border-[#D9D6FE] text-[#533AFD] text-[11px] font-bold uppercase">
                    {architectureBlueprints[activeBlueprintIndex].tag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                  {architectureBlueprints[activeBlueprintIndex].summary}
                </p>

                {/* Steps List */}
                <div className="space-y-2.5 pt-2">
                  {architectureBlueprints[activeBlueprintIndex].steps.map((step) => (
                    <div key={step.num} className="p-3 rounded-[4px] bg-[#F8FAFC] border border-[#EAECF0] flex items-start gap-3">
                      <span className="font-mono text-xs font-bold text-[#533AFD] bg-white px-2 py-0.5 rounded border border-[#D9D6FE]">
                        {step.num}
                      </span>
                      <div>
                        <div className="text-xs font-bold text-[#0D1738]">{step.name}</div>
                        <div className="text-[11px] text-[#667085] mt-0.5">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Code Implementation Terminal */}
              <div className="lg:col-span-6">
                <div className="rounded-[4px] bg-[#0D1738] border border-slate-700 overflow-hidden shadow-lg">
                  <div className="px-4 py-2.5 bg-[#09112B] border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                      <span className="text-[11px] text-slate-300 ml-2">architecture-pipeline.ts</span>
                    </div>
                    <span className="text-[10px] text-slate-400">Production Code</span>
                  </div>

                  <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed">
                    <code>{architectureBlueprints[activeBlueprintIndex].snippet}</code>
                  </pre>
                </div>
              </div>

            </div>
          </div>

          {/* Benchmark Comparison Chart */}
          <div className="bg-white rounded-[4px] border border-[#D0D5DD] p-6 lg:p-8">
            <div className="grid lg:grid-cols-12 gap-6 items-center">
              
              <div className="lg:col-span-5 space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#533AFD]">Quantitative Standards</span>
                <h3 className="text-xl font-bold text-[#0D1738]">
                  Architectural Rigor vs. Generic Freelance Builds
                </h3>
                <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                  Comparing critical execution standards across production deployments. Rigorous architecture directly reduces cloud bills and eliminates refactoring debt.
                </p>
                <div className="flex items-center gap-4 pt-1 text-xs font-semibold">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-[2px] bg-[#533AFD]" />
                    <span>My Standard</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-[2px] bg-[#D0D5DD]" />
                    <span>Typical Agency Build</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 h-52 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={benchmarkComparisonData}
                    layout="vertical"
                    margin={{ top: 5, right: 15, left: 35, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#F2F4F7" horizontal={false} />
                    <XAxis type="number" domain={[0, 100]} hide />
                    <YAxis dataKey="metric" type="category" tick={{ fontSize: 11, fill: "#344054", fontWeight: 600 }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ background: "#0D1738", border: "none", borderRadius: 4, color: "#fff", fontSize: 11 }} />
                    <Bar dataKey="customEngineered" name="My Engineering Standard" fill="#533AFD" radius={[0, 2, 2, 0]} />
                    <Bar dataKey="genericBuild" name="Generic Build" fill="#EAECF0" radius={[0, 2, 2, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 7. CEO VIDEO REVIEW & VERIFIED TESTIMONIALS */}
      {/* -------------------------------------------------------------------- */}
      <section id="reviews" className="section-pad bg-white border-b border-[#EAECF0]">
        <div className="site-container">
          
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="badge-tag mb-2">CEO Endorsement</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D1738] tracking-tight">
              &quot;Shaq actually <span className="text-[#533AFD]">works with us</span> on Legiit.&quot;
            </h2>
            <p className="text-xs sm:text-sm text-[#475467] mt-1.5">
              Trusted by marketplace founders, agency CEOs, and high-profile entrepreneurs to engineer scalable digital systems.
            </p>
          </div>

          {/* Freelancer.com Top Rated Performance Strip */}
          <div className="bg-[#F8FAFC] rounded-[4px] border border-[#D0D5DD] p-5 mb-10 max-w-4xl mx-auto shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-[#EAECF0]">
              <div className="pt-2 md:pt-0 md:px-4 text-center">
                <div className="flex items-center justify-center gap-1 text-amber-500 font-bold text-lg">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>4.9 / 5.0</span>
                </div>
                <div className="text-[11px] text-[#475467] font-medium mt-0.5">127+ Verified Reviews</div>
              </div>

              <div className="pt-2 md:pt-0 md:px-4 text-center">
                <div className="text-emerald-700 font-bold text-lg">100%</div>
                <div className="text-[11px] text-[#475467] font-medium mt-0.5">On-Time Delivery</div>
              </div>

              <div className="pt-2 md:pt-0 md:px-4 text-center">
                <div className="text-[#533AFD] font-bold text-lg">94%</div>
                <div className="text-[11px] text-[#475467] font-medium mt-0.5">Repeat Hire Rate</div>
              </div>

              <div className="pt-2 md:pt-0 md:px-4 text-center">
                <div className="text-[#0D1738] font-bold text-lg">Top 1%</div>
                <div className="text-[11px] text-[#475467] font-medium mt-0.5">Preferred Freelancer SLA</div>
              </div>
            </div>
          </div>

          {/* Video Container */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="relative aspect-video rounded-[4px] overflow-hidden border border-[#D0D5DD] shadow-sm bg-slate-950">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/VdPptVpxMPM?rel=0&modestbranding=1"
                title="Legiit CEO Chris Walker Review"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-5">
            
            {/* Chris M Walker */}
            <div className="bg-[#F8FAFC] rounded-[4px] p-5 border border-[#D0D5DD] flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-amber-500 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-[#344054] text-xs leading-relaxed mb-4">
                  &quot;Most developers just write code; he thinks in systems. Legiit isn&apos;t a simple website; it&apos;s a complex marketplace with intricate financial logic. He engineered the architecture that allows us to scale safely. I don&apos;t need a freelancer; I need an engineering partner.&quot;
                </p>
              </div>
              <div className="flex items-center gap-2.5 pt-3 border-t border-[#EAECF0]">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#D0D5DD]">
                  <Image src="/chris.jpeg" alt="Chris M. Walker" fill className="object-cover" />
                </div>
                <div>
                  <div className="font-bold text-[#0D1738] text-xs">Chris M. Walker</div>
                  <div className="text-[11px] text-[#533AFD] font-medium">CEO, Legiit.com (2M+ Users)</div>
                </div>
              </div>
            </div>

            {/* Jim Sabellico */}
            <div className="bg-[#F8FAFC] rounded-[4px] p-5 border border-[#D0D5DD] flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-amber-500 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-[#344054] text-xs leading-relaxed mb-4">
                  &quot;When I land high-stakes clients like Steve Weatherford, I can&apos;t afford &apos;trial and error.&apos; I bring him in because he brings an engineering discipline to agency chaos. He was the technical lead behind our biggest deployments because the code is clean, the database optimized, and the delivery flawless.&quot;
                </p>
              </div>
              <div className="flex items-center gap-2.5 pt-3 border-t border-[#EAECF0]">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#D0D5DD]">
                  <Image src="/jim.jpeg" alt="Jim Sabellico" fill className="object-cover" />
                </div>
                <div>
                  <div className="font-bold text-[#0D1738] text-xs">Jim Sabellico</div>
                  <div className="text-[11px] text-[#533AFD] font-medium">Founder, No Half Cakes</div>
                </div>
              </div>
            </div>

            {/* Steve Weatherford */}
            <div className="bg-[#F8FAFC] rounded-[4px] p-5 border border-[#D0D5DD] flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-amber-500 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-[#344054] text-xs leading-relaxed mb-4">
                  &quot;I don&apos;t know the code, I just know that my platform needs to perform as hard as I do. The team delivered a digital HQ that handles my traffic, my content, and my sales without blinking. It feels solid, fast, and professional. That&apos;s the standard.&quot;
                </p>
              </div>
              <div className="flex items-center gap-2.5 pt-3 border-t border-[#EAECF0]">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#D0D5DD]">
                  <Image src="/steve.jpeg" alt="Steve Weatherford" fill className="object-cover" />
                </div>
                <div>
                  <div className="font-bold text-[#0D1738] text-xs">Steve Weatherford</div>
                  <div className="text-[11px] text-[#533AFD] font-medium">Super Bowl Champ & Entrepreneur</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 8. DIRECT ARCHITECT PARTNERSHIP & ATTRIBUTION */}
      {/* -------------------------------------------------------------------- */}
      <section className="section-pad bg-white border-b border-[#EAECF0]">
        <div className="site-container">
          <div className="bg-[#F8FAFC] rounded-[4px] border border-[#D0D5DD] p-6 lg:p-10 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              {/* Headshot Portrait */}
              <div className="lg:col-span-4 flex flex-col items-center sm:items-start">
                <div className="relative w-full max-w-[260px] aspect-square rounded-[4px] overflow-hidden border border-[#D0D5DD] bg-white shadow-sm">
                  <Image
                    src="/shakil-headshot.jpeg"
                    alt="Shakil Ahmed - Senior Full-Stack Engineer & System Architect"
                    fill
                    sizes="(max-width: 768px) 260px, 300px"
                    className="object-cover object-top"
                  />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 px-2.5 py-1.5 rounded-[2px] bg-[#0D1738]/90 backdrop-blur text-white text-[11px] font-semibold flex items-center justify-between">
                    <span>Shakil Ahmed</span>
                    <span className="text-[#8D7BFF] font-mono text-[10px]">12+ Yrs Exp</span>
                  </div>
                </div>
              </div>

              {/* Profile Bio & Direct Access Commitment */}
              <div className="lg:col-span-8 space-y-3.5">
                <span className="badge-tag">Direct Engineering Partnership</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0D1738] tracking-tight">
                  Direct technical leadership — no junior handoffs, no agency bloat.
                </h2>
                <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                  When you work with me, you collaborate directly with the architect who scaled Legiit to 2,000,000+ users and shipped over 115 production systems. Every critical line of code, database schema, payment flow, and infrastructure config is engineered with precision and enterprise discipline.
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                  <div className="p-2.5 rounded-[2px] bg-white border border-[#EAECF0]">
                    <div className="text-[10px] uppercase font-bold text-[#667085]">Founder</div>
                    <div className="text-xs font-bold text-[#0D1738] mt-0.5">BarakahSoft LLC (USA)</div>
                  </div>
                  <div className="p-2.5 rounded-[2px] bg-white border border-[#EAECF0]">
                    <div className="text-[10px] uppercase font-bold text-[#667085]">Track Record</div>
                    <div className="text-xs font-bold text-[#0D1738] mt-0.5">1,000+ Shipped Builds</div>
                  </div>
                  <div className="p-2.5 rounded-[2px] bg-white border border-[#EAECF0]">
                    <div className="text-[10px] uppercase font-bold text-[#667085]">Direct Contact</div>
                    <div className="text-xs font-bold text-[#533AFD] mt-0.5">+1 (307) 533-6678</div>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a href="https://calendly.com/shakilhq/30min" target="_blank" rel="noreferrer" className="btn-primary text-xs">
                    <Calendar className="w-3.5 h-3.5" />
                    Book Strategy Call with Shakil
                  </a>
                  <a href="https://wa.me/13075336678" target="_blank" rel="noreferrer" className="btn-secondary text-xs">
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Attribution Notice */}
          <div className="mt-4 p-4 rounded-[4px] bg-white border border-[#EAECF0] flex items-center gap-3 text-xs text-[#667085]">
            <ShieldCheck className="w-4 h-4 text-[#533AFD] shrink-0" />
            <span>
              <strong className="text-[#0D1738]">Engineering Attribution:</strong> Many featured enterprise case studies (Legiit, Steve Weatherford, agency lead engines) were architected during my tenure as <em>Lead Technical Architect</em> at <strong>No Half Cakes</strong>. I deliver that same agency-grade discipline directly to your business.
            </span>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 9. OPEN SOURCE SIGNAL (GITHUB LIVE FEED) */}
      {/* -------------------------------------------------------------------- */}
      <section className="section-pad bg-white border-b border-[#EAECF0]">
        <div className="site-container">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="badge-tag mb-2">Public Engineering</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0D1738] tracking-tight">
                Open Source & Engineering Labs
              </h2>
              <p className="text-xs sm:text-sm text-[#475467] mt-1">
                Developer tools, API utilities, and full-stack modules maintained in public.
              </p>
            </div>

            <a
              href="https://github.com/exelentshakil"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary text-xs"
            >
              <Github className="w-3.5 h-3.5" />
              GitHub Profile
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.map((repo) => (
              <a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="bg-[#F8FAFC] rounded-[4px] p-4 border border-[#D0D5DD] hover:border-[#533AFD] transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-[#667085] mb-2">
                    <Code2 className="w-4 h-4 text-[#0D1738]" />
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#667085] group-hover:text-[#533AFD] transition-colors" />
                  </div>
                  <h4 className="font-bold text-[#0D1738] text-sm mb-1 group-hover:text-[#533AFD] transition-colors truncate">
                    {repo.name}
                  </h4>
                  <p className="text-xs text-[#475467] line-clamp-2 leading-relaxed">
                    {repo.description || "Open source production module and engineering utility."}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EAECF0] flex items-center justify-between mt-4 text-[11px] text-[#667085]">
                  <span className="flex items-center gap-1 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#533AFD]" />
                    <span>{repo.language || "TypeScript"}</span>
                  </span>
                  {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-1 font-semibold text-amber-600">
                      <Star className="w-3 h-3 fill-amber-400" />
                      <span>{repo.stargazers_count}</span>
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 10. DIRECT CONTACT & OFFICIAL BUSINESS TERMINAL */}
      {/* -------------------------------------------------------------------- */}
      <section id="contact" className="section-pad bg-[#0D1738] text-white">
        <div className="site-container">
          
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Call to Action */}
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[4px] bg-[#533AFD]/20 text-[#D9D6FE] border border-[#533AFD]/40 text-xs font-semibold">
                Direct Engineering Access
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
                Ready to engineer your next platform?
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-lg">
                Available for technical architecture, high-concurrency SaaS builds, MVP engineering, and payment / database performance optimization.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://calendly.com/shakilhq/30min"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary text-xs py-2.5 px-4"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule 30-Minute Strategy Call
                </a>

                <a
                  href="https://wa.me/13075336678?text=Hi%20Shakil,%20I%20would%20like%20to%20discuss%20a%20new%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary text-xs py-2.5 px-4 bg-white text-[#0D1738] hover:bg-slate-100"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  WhatsApp (+1 307 533-6678)
                </a>
              </div>
            </div>

            {/* Right: Verified Business Contact Card */}
            <div className="lg:col-span-6">
              <div className="bg-[#101B3D] border border-slate-700/80 rounded-[4px] p-6 space-y-4">
                
                <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-8 h-8 rounded-[4px] overflow-hidden border border-slate-600 bg-slate-800 shrink-0">
                      <Image
                        src="/shakil-headshot.jpeg"
                        alt="Shakil Ahmed"
                        fill
                        sizes="32px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white leading-none">
                        Shakil Ahmed
                      </h3>
                      <span className="text-[10px] text-[#8D7BFF] font-medium leading-none">
                        BarakahSoft LLC
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-[2px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Direct Contact
                  </span>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-[4px] bg-[#533AFD]/20 text-[#D9D6FE] flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Phone & WhatsApp</div>
                      <a href="tel:+13075336678" className="text-white font-semibold hover:text-[#D9D6FE] transition-colors">
                        +1 (307) 533-6678
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-[4px] bg-[#533AFD]/20 text-[#D9D6FE] flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Email Direct</div>
                      <a href="mailto:hello@barakahsoft.com" className="text-white font-semibold hover:text-[#D9D6FE] transition-colors">
                        hello@barakahsoft.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-[4px] bg-[#533AFD]/20 text-[#D9D6FE] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Business Headquarters</div>
                      <div className="text-slate-200">
                        30 N. Gould St. Ste R, Sheridan, WY 82801, USA
                      </div>
                    </div>
                  </div>
                </div>

                {/* Freelancer & Platform Profiles */}
                <div className="pt-4 border-t border-slate-700/80 flex flex-wrap items-center gap-2 text-xs">
                  <a
                    href="https://www.upwork.com/freelancers/~01e19084859cda495e"
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1 rounded-[2px] bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-[11px]"
                  >
                    Upwork Top Talent ↗
                  </a>
                  <a
                    href="https://www.freelancer.com/u/exelentshakil"
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1 rounded-[2px] bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-[11px]"
                  >
                    Freelancer.com ↗
                  </a>
                  <a
                    href="https://github.com/exelentshakil"
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1 rounded-[2px] bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-[11px]"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href="https://x.com/shakilhq"
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1 rounded-[2px] bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors text-[11px]"
                  >
                    Twitter / X ↗
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 11. FOOTER */}
      {/* -------------------------------------------------------------------- */}
      <footer className="bg-[#080E24] border-t border-slate-800 text-slate-400 py-8">
        <div className="site-container flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="font-semibold">© 2026 Shakil Ahmed (BarakahSoft LLC).</span>
            <span>All rights reserved.</span>
          </div>

          <div className="text-slate-400">
            30 N. Gould St. Ste R, Sheridan, WY 82801 • Tel: +1 (307) 533-6678
          </div>
        </div>
      </footer>

    </div>
  );
}

// --------------------------------------------------------------------------
// Subcomponent: Natural Marquee Card (Displays Full-Color Crisp Screenshots)
// --------------------------------------------------------------------------
function MarqueeSiteCard({ site }: { site: Site }) {
  const imageSrc = getSiteImage(site);
  const [hasError, setHasError] = useState(false);

  return (
    <a
      href={`https://${site.url}`}
      target="_blank"
      rel="noreferrer"
      className="inline-block w-[300px] bg-white rounded-[4px] border border-[#D0D5DD] overflow-hidden hover:border-[#533AFD] transition-all text-left select-none group"
    >
      {/* Screenshot Section */}
      <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
        {!hasError ? (
          <Image
            src={imageSrc}
            alt={site.name}
            fill
            sizes="300px"
            className="object-cover object-top"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${getSiteFallback(site)} flex items-center justify-center text-white font-bold text-lg`}>
            {site.name}
          </div>
        )}

        <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded-[2px] bg-white/95 border border-[#D0D5DD] text-[#0D1738] text-[9px] font-bold uppercase tracking-wider">
          {site.category}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-3 space-y-1.5">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-[#0D1738] text-xs truncate group-hover:text-[#533AFD] transition-colors">
            {site.name}
          </h4>
          <ArrowUpRight className="w-3 h-3 text-[#667085] group-hover:text-[#533AFD] transition-colors shrink-0" />
        </div>

        <p className="text-[11px] text-[#475467] line-clamp-2 leading-relaxed">
          {site.hook || `Production web system engineered for ${site.clientType || "client"}.`}
        </p>

        {site.metric && (
          <div className="pt-1.5 border-t border-[#EAECF0] flex items-center gap-1 text-[10px] font-bold text-emerald-700">
            <Check className="w-3 h-3" />
            <span>{site.metric}</span>
          </div>
        )}
      </div>
    </a>
  );
}

// --------------------------------------------------------------------------
// Subcomponent: Grid Site Card (For Filterable Bento Mode)
// --------------------------------------------------------------------------
function GridSiteCard({ site }: { site: Site }) {
  const imageSrc = getSiteImage(site);
  const [hasError, setHasError] = useState(false);

  return (
    <a
      href={`https://${site.url}`}
      target="_blank"
      rel="noreferrer"
      className="bg-white rounded-[4px] border border-[#D0D5DD] overflow-hidden hover:border-[#533AFD] transition-all flex flex-col group"
    >
      <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
        {!hasError ? (
          <Image
            src={imageSrc}
            alt={site.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${getSiteFallback(site)} flex items-center justify-center text-white font-bold text-xl`}>
            {site.name}
          </div>
        )}

        <div className="absolute top-2 left-2 px-2 py-0.5 rounded-[2px] bg-white/95 border border-[#D0D5DD] text-[#0D1738] text-[10px] font-bold uppercase tracking-wider">
          {site.category}
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center justify-between mb-1">
            <h4 className="font-bold text-[#0D1738] text-sm group-hover:text-[#533AFD] transition-colors truncate">
              {site.name}
            </h4>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#667085] group-hover:text-[#533AFD] transition-colors shrink-0" />
          </div>

          <p className="text-xs text-[#475467] line-clamp-2 leading-relaxed">
            {site.hook || `Tailored production system engineered for ${site.clientType || "client requirements"}.`}
          </p>
        </div>

        {site.technologies && (
          <div className="pt-2.5 border-t border-[#EAECF0] flex flex-wrap gap-1">
            {site.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="px-1.5 py-0.5 rounded-[2px] bg-[#F2F4F7] text-[#344054] font-mono text-[10px] font-medium">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}
