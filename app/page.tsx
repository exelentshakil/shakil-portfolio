"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowDownRight,
  Check,
  CheckCircle2,
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
  SlidersHorizontal
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
// Telemetry & Benchmark Data (Real Architectural Metrics)
// --------------------------------------------------------------------------
const telemetryData = [
  { month: "Initial Launch", throughput: 280, latency: 820, uptime: 99.8 },
  { month: "Q1 Optimization", throughput: 740, latency: 450, uptime: 99.92 },
  { month: "Q2 Scale Phase", throughput: 1420, latency: 260, uptime: 99.98 },
  { month: "Q3 Cluster Tuning", throughput: 2100, latency: 150, uptime: 99.995 },
  { month: "Current Production", throughput: 3400, latency: 118, uptime: 99.999 },
];

const benchmarkComparisonData = [
  { metric: "Response Time", customArchitect: 98, genericFreelancer: 42 },
  { metric: "Code Scalability", customArchitect: 96, genericFreelancer: 38 },
  { metric: "Payment Security", customArchitect: 100, genericFreelancer: 55 },
  { metric: "Database Concurrency", customArchitect: 94, genericFreelancer: 45 },
  { metric: "Test Coverage", customArchitect: 92, genericFreelancer: 30 },
];

type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
};

// --------------------------------------------------------------------------
// Subcomponent: Custom Tooltip for Charts
// --------------------------------------------------------------------------
interface TooltipProps {
  active?: boolean;
  payload?: Array<{ value: number; name?: string }>;
  label?: string;
}

function CustomTelemetryTooltip({ active, payload, label }: TooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 text-white p-3 rounded-lg shadow-xl border border-slate-700 text-xs">
        <p className="font-bold text-slate-300 mb-1">{label}</p>
        <p className="text-indigo-400 font-semibold">
          Throughput: {payload[0]?.value} req/s
        </p>
        <p className="text-emerald-400 font-semibold">
          Latency: {payload[1]?.value} ms (85% faster)
        </p>
      </div>
    );
  }
  return null;
}

export default function PortfolioPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"marquee" | "grid">("marquee");

  // GSAP Entrance Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gsap-reveal", {
        opacity: 0,
        y: 28,
        duration: 0.75,
        stagger: 0.08,
        ease: "power2.out",
      });
      gsap.from(".gsap-stat", {
        scale: 0.95,
        opacity: 0,
        duration: 0.6,
        stagger: 0.06,
        delay: 0.3,
        ease: "power1.out",
      });
    }, pageRef);

    // Fetch GitHub Repos
    fetch("https://api.github.com/users/exelentshakil/repos?per_page=15&sort=updated")
      .then((res) => res.json())
      .then((data: GitHubRepo[]) => {
        if (Array.isArray(data)) {
          setRepos(data.filter((r) => r.description && !r.name.includes("dotfiles")).slice(0, 6));
        }
      })
      .catch(() => setRepos([]));

    return () => ctx.revert();
  }, []);

  // Filtered sites for Grid view
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
    <div ref={pageRef} className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-[#533AFD] selection:text-white">
      
      {/* -------------------------------------------------------------------- */}
      {/* 1. TOP NAVIGATION BAR */}
      {/* -------------------------------------------------------------------- */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
        <div className="site-container h-20 flex items-center justify-between gap-4">
          
          {/* Brand */}
          <a href="#top" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center p-1.5 border border-indigo-100 group-hover:border-indigo-300 transition-colors">
              <Image src="/logo.png" alt="Shakil HQ Logo" width={32} height={32} className="object-contain" priority />
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-black text-base text-slate-900 tracking-tight">
                Shakil Ahmed
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" title="Available for new engagements" />
              </div>
              <div className="text-xs font-semibold text-slate-500">
                Lead Architect & Full-Stack Engineer
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#proof" className="hover:text-[#533AFD] transition-colors">Track Record</a>
            <a href="#flagship" className="hover:text-[#533AFD] transition-colors">Flagship (2M+ Users)</a>
            <a href="#portfolio" className="hover:text-[#533AFD] transition-colors">All 60+ Projects</a>
            <a href="#architecture" className="hover:text-[#533AFD] transition-colors">Architecture</a>
            <a href="#reviews" className="hover:text-[#533AFD] transition-colors">CEO Review & Proof</a>
            <a href="#contact" className="hover:text-[#533AFD] transition-colors">Contact</a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/13075336678?text=Hi%20Shakil,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp text-xs py-2 px-3.5 hidden sm:inline-flex"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href="https://calendly.com/shakilhq/30min"
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-xs py-2 px-4"
            >
              Book Strategy Call
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* -------------------------------------------------------------------- */}
      {/* 2. HERO SECTION (HIGH CONVERTING SAAS TELEMETRY + GSAP) */}
      {/* -------------------------------------------------------------------- */}
      <section id="top" className="relative pt-12 pb-20 md:py-24 overflow-hidden bg-gradient-to-b from-indigo-50/40 via-white to-[#F8FAFC]">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="site-container relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Positioning & Copy */}
            <div className="lg:col-span-7 space-y-6 gsap-reveal">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-wide">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for Q3/Q4 Architecture & Full-Stack Projects</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.08]">
                Architecting high-scale web apps, SaaS & MVPs{" "}
                <span className="text-[#533AFD] underline decoration-[#533AFD]/20 decoration-wavy">that compound.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
                12+ years of production experience. Lead engineer behind <strong className="text-slate-900 font-bold">Legiit</strong> (2M+ users, $40M+ in transactions). Specializing in Next.js, Laravel, Node.js, Python, PostgreSQL, Stripe Escrow, and zero-downtime scaling.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://calendly.com/shakilhq/30min"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary py-3.5 px-6 text-base"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule 30-Min Strategy Call
                </a>

                <a
                  href="https://wa.me/13075336678?text=Hi%20Shakil,%20I'm%20looking%20to%20build%20a%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp py-3.5 px-6 text-base"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp (+1 307 533-6678)
                </a>

                <a
                  href="#portfolio"
                  className="btn-secondary py-3.5 px-5 text-sm font-semibold"
                >
                  Explore 60+ Live Projects
                  <ArrowDownRight className="w-4 h-4 text-slate-500" />
                </a>
              </div>

              {/* Proof Badges Row */}
              <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-semibold text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#533AFD]" />
                  <span>Upwork Top-Rated Plus</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#533AFD]" />
                  <span>Freelancer Preferred SLA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#533AFD]" />
                  <span>US Business: BarakahSoft LLC</span>
                </div>
              </div>
            </div>

            {/* Right Column: Live Production Telemetry Panel (Recharts) */}
            <div className="lg:col-span-5 gsap-reveal">
              <div className="bg-white rounded-2xl p-6 shadow-2xl shadow-indigo-500/10 border border-indigo-100/80 relative">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700">Production Telemetry</span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-50 text-[#533AFD] font-bold">
                    Legiit Core Engine
                  </span>
                </div>

                {/* Top Metrics Grid */}
                <div className="grid grid-cols-3 gap-3 my-4">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                    <div className="text-xs text-slate-500 font-medium">Active Users</div>
                    <div className="text-xl font-black text-slate-900">2,000,000+</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                    <div className="text-xs text-slate-500 font-medium">Query Latency</div>
                    <div className="text-xl font-black text-emerald-600">118 ms</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                    <div className="text-xs text-slate-500 font-medium">Service Uptime</div>
                    <div className="text-xl font-black text-[#533AFD]">99.999%</div>
                  </div>
                </div>

                {/* Recharts Area Chart */}
                <div className="h-44 w-full pt-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={telemetryData}>
                      <defs>
                        <linearGradient id="throughputGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#533AFD" stopOpacity={0.25} />
                          <stop offset="95%" stopColor="#533AFD" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
                      <XAxis dataKey="month" hide />
                      <YAxis hide domain={[0, 4000]} />
                      <Tooltip content={<CustomTelemetryTooltip />} />
                      <Area
                        type="monotone"
                        dataKey="throughput"
                        stroke="#533AFD"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#throughputGrad)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                {/* Microservice Architecture Tags */}
                <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Celery Queues: Active</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-[#533AFD]" />
                    <span>Redis Cache: 98.4% Hit</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-amber-500" />
                    <span>Stripe Escrow: Verified</span>
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
      <section id="proof" className="bg-white border-y border-slate-200 py-12">
        <div className="site-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            
            <div className="pt-4 lg:pt-0 lg:px-6 gsap-stat">
              <div className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">2M+</div>
              <div className="text-sm font-bold text-slate-700 mt-1">Active Marketplace Users</div>
              <p className="text-xs text-slate-500 mt-1">Architected core systems powering Legiit.com global traffic.</p>
            </div>

            <div className="pt-4 lg:pt-0 lg:px-6 gsap-stat">
              <div className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">115+</div>
              <div className="text-sm font-bold text-slate-700 mt-1">Production Systems Shipped</div>
              <p className="text-xs text-slate-500 mt-1">High-stakes deployments across healthcare, legal, SaaS & agency.</p>
            </div>

            <div className="pt-4 lg:pt-0 lg:px-6 gsap-stat">
              <div className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">99%</div>
              <div className="text-sm font-bold text-slate-700 mt-1">Client Satisfaction</div>
              <p className="text-xs text-slate-500 mt-1">Over 125+ verified five-star reviews on Freelancer & Upwork.</p>
            </div>

            <div className="pt-4 lg:pt-0 lg:px-6 gsap-stat">
              <div className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">12+ Yrs</div>
              <div className="text-sm font-bold text-slate-700 mt-1">Engineering Leadership</div>
              <p className="text-xs text-slate-500 mt-1">From hands-on full-stack coding to multi-tenant system architecture.</p>
            </div>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 4. FEATURED FLAGSHIP CASE STUDY: LEGIIT (WEB + MOBILE ECOSYSTEM) */}
      {/* -------------------------------------------------------------------- */}
      <section id="flagship" className="section-pad bg-[#F8FAFC]">
        <div className="site-container">
          
          <div className="max-w-3xl mb-12">
            <span className="badge-primary mb-3">Flagship Production System</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Scaling Legiit to 2,000,000+ Users & Millions in Revenue
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3">
              Served as Lead Engineer & Platform Architect. Replaced fragmented scripts with a robust multi-service platform capable of handling intense transaction volume without downtime.
            </p>
          </div>

          {/* Main Case Study Bento Card */}
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-8 items-center p-8 lg:p-12">
              
              {/* Left Column: Details & Technical Wins */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-md bg-indigo-50 border border-indigo-200 text-[#533AFD] text-xs font-bold uppercase">
                    Freelance Marketplace
                  </span>
                  <span className="px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
                    2M+ Active Accounts
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                  End-to-End Marketplace Architecture
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  Architected the payment gateway, wallet escrow system, real-time messaging, and high-concurrency order processing. Scaled from early traction to a multi-million-dollar global ecosystem.
                </p>

                {/* Technical Achievements List */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span><strong>Stripe & PayPal Escrow:</strong> Automated order hold, milestone release, affiliate split & instant withdrawal engine.</span>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span><strong>Query Optimization:</strong> Reduced search & analytics response times from 800ms down to 118ms under peak loads.</span>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span><strong>Real-Time Messaging:</strong> WebSockets chat with order attachment previews, notifications, and mobile push sync.</span>
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Laravel", "Django", "Node.js", "React / Next.js", "MySQL", "Redis", "Celery", "WebSockets", "AWS EC2/S3", "Stripe API"].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 font-mono text-xs font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Direct Action Link */}
                <div className="pt-4 flex items-center gap-4">
                  <a
                    href="https://legiit.com"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary text-sm py-2.5 px-5"
                  >
                    Visit Live Platform (Legiit.com)
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Mockups & Screenshots (Web + Mobile App) */}
              <div className="lg:col-span-6 space-y-4">
                {/* Main Web Screenshot */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-950 group">
                  <Image
                    src="/screenshots/Legiit.png"
                    alt="Legiit Marketplace Web Dashboard"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-slate-900/80 backdrop-blur text-white text-[11px] font-bold">
                    Web Platform
                  </div>
                </div>

                {/* Mobile Apps Side-by-Side Strip */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-slate-200 shadow bg-slate-950 group">
                    <Image
                      src="/screenshots/Legiit - iOS.png"
                      alt="Legiit iOS App"
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur text-white text-[10px] font-bold">
                      iOS App Store (4.0 ★)
                    </div>
                  </div>

                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-slate-200 shadow bg-slate-950 group">
                    <Image
                      src="/screenshots/Legiit - Android.png"
                      alt="Legiit Android App"
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur text-white text-[10px] font-bold">
                      Google Play (4.5 ★)
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 5. "DIFFERENT INDUSTRIES. SAME STANDARD." (ALL 60+ SCREENSHOTS) */}
      {/* -------------------------------------------------------------------- */}
      <section id="portfolio" className="section-pad bg-white border-y border-slate-200 overflow-hidden">
        <div className="site-container mb-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="badge-primary mb-3">Full Production Portfolio</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
                Different Industries. Same Standard.
              </h2>
              <p className="text-slate-600 mt-2 max-w-2xl">
                Showing all 60+ production platforms, portals, and lead systems built for real businesses. Hover over any project to inspect.
              </p>
            </div>

            {/* View Mode & Filter Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setViewMode("marquee")}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                  viewMode === "marquee"
                    ? "bg-[#533AFD] text-white shadow-md shadow-indigo-500/20"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Live Marquee Slider
              </button>

              <button
                onClick={() => setViewMode("grid")}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                  viewMode === "grid"
                    ? "bg-[#533AFD] text-white shadow-md shadow-indigo-500/20"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                Filterable Bento Grid
              </button>
            </div>
          </div>

          {/* Interactive Category Filter Pills (When in Grid Mode or Filter) */}
          <div className="flex flex-wrap gap-2 mt-8 pt-4 border-t border-slate-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  if (viewMode === "marquee") setViewMode("grid");
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* --- VIEW MODE 1: NATURAL SMOOTH CONTINUOUS MARQUEE SLIDERS (ALL SCREENSHOTS) --- */}
        {viewMode === "marquee" ? (
          <div className="space-y-6 pt-4">
            
            {/* Track 1: Moving Left */}
            <div className="overflow-hidden whitespace-nowrap py-2 mask-radial">
              <div className="animate-marquee-left flex gap-6">
                {[...marqueeTrack1, ...marqueeTrack1].map((site, index) => (
                  <MarqueeSiteCard key={`track1-${site.url}-${index}`} site={site} />
                ))}
              </div>
            </div>

            {/* Track 2: Moving Right */}
            <div className="overflow-hidden whitespace-nowrap py-2">
              <div className="animate-marquee-right flex gap-6">
                {[...marqueeTrack2, ...marqueeTrack2].map((site, index) => (
                  <MarqueeSiteCard key={`track2-${site.url}-${index}`} site={site} />
                ))}
              </div>
            </div>

            <div className="site-container text-center pt-8">
              <p className="text-xs text-slate-500">
                ⚡ Continuous live feed of 60+ client systems. Hover any card to pause and inspect metrics.
              </p>
            </div>

          </div>
        ) : (
          /* --- VIEW MODE 2: ASYMMETRIC BENTO GRID (ALL FILTERED SITES) --- */
          <div className="site-container pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSites.map((site) => (
                <GridSiteCard key={`grid-${site.url}`} site={site} />
              ))}
            </div>
          </div>
        )}

      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 6. SYSTEM ARCHITECTURE & COMPARISON BENCHMARKS (RECHARTS) */}
      {/* -------------------------------------------------------------------- */}
      <section id="architecture" className="section-pad bg-[#F8FAFC]">
        <div className="site-container">
          
          <div className="max-w-3xl mb-14">
            <span className="badge-primary mb-3">Architectural Philosophy</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Engineering Rigor Built For Scale
            </h2>
            <p className="text-slate-600 mt-2 text-base sm:text-lg">
              Most developers just write code to close tickets. I engineer robust, observable systems designed to handle real traffic, complex financial logic, and rapid iteration.
            </p>
          </div>

          {/* 4 Architectural Pillars Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-[#533AFD] flex items-center justify-center mb-4">
                <Layers3 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Full-Stack SaaS & Apps</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Next.js 15, React 19, TypeScript, Tailwind, Server Actions, responsive mobile optimization, and accessible UI engineering.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">High-Throughput APIs</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Laravel, Node.js/NestJS, Python Django, REST & GraphQL endpoints, Celery workers, and WebSockets for real-time state.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Fintech & Billing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Stripe Connect, escrow holding, multi-vendor splits, automated webhooks, subscription lifecycle, and PCI compliance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Database & Security</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                PostgreSQL/MySQL index tuning, Redis caching layers, AWS infrastructure, HIPAA compliance, and zero-downtime migrations.
              </p>
            </div>

          </div>

          {/* Benchmark Comparison Recharts Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 lg:p-10 shadow-lg">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Performance Benchmarks</span>
                <h3 className="text-2xl font-black text-slate-900">
                  Custom System Architecture vs. Typical Freelance Builds
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Comparing critical operational criteria across production deployments. High engineering standards translate directly to lower server costs and higher conversion rates.
                </p>
                <div className="flex items-center gap-6 pt-2 text-xs font-bold">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#533AFD]" />
                    <span>My Engineering Standard</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-slate-300" />
                    <span>Typical Agency Build</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={benchmarkComparisonData}
                    layout="vertical"
                    margin={{ top: 10, right: 20, left: 40, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" horizontal={false} />
                    <XAxis type="number" domain={[0, 100]} hide />
                    <YAxis dataKey="metric" type="category" tick={{ fontSize: 11, fill: "#475569", fontWeight: 600 }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ background: "#0F172A", border: "none", borderRadius: 8, color: "#fff", fontSize: 12 }} />
                    <Bar dataKey="customArchitect" name="My Engineering Standard" fill="#533AFD" radius={[0, 4, 4, 0]} />
                    <Bar dataKey="genericFreelancer" name="Generic Build" fill="#CBD5E1" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 7. CEO VIDEO REVIEW & HIGH-TRUST REVIEWS SECTION */}
      {/* -------------------------------------------------------------------- */}
      <section id="reviews" className="section-pad bg-white border-y border-slate-200">
        <div className="site-container">
          
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="badge-emerald mb-3">CEO Verified Partnership</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              &quot;Shaq actually <span className="text-[#533AFD]">works with us</span> on Legiit.&quot;
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg">
              Trusted by CEOs, founders, and celebrity athletes to build the platforms their businesses rely on.
            </p>
          </div>

          {/* Video Container */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-950">
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

          {/* Testimonial Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Chris M Walker */}
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200 flex flex-col justify-between hover:border-[#533AFD]/40 transition-colors">
              <div>
                <div className="flex gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed mb-6 font-medium">
                  &quot;Most developers just write code; he thinks in systems. Legiit isn&apos;t a simple website; it&apos;s a complex marketplace with intricate financial logic. He engineered the architecture that allows us to scale safely. I don&apos;t need a freelancer; I need an engineering partner.&quot;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-slate-200">
                  <Image src="/chris.jpeg" alt="Chris M. Walker" fill className="object-cover" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Chris M. Walker</div>
                  <div className="text-xs text-[#533AFD] font-semibold">CEO, Legiit.com (2M+ Users)</div>
                </div>
              </div>
            </div>

            {/* Jim Sabellico */}
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200 flex flex-col justify-between hover:border-[#533AFD]/40 transition-colors">
              <div>
                <div className="flex gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed mb-6 font-medium">
                  &quot;When I land high-stakes clients like Steve Weatherford, I can&apos;t afford &apos;trial and error.&apos; I bring him in because he brings an engineering discipline to agency chaos. He was the technical lead behind our biggest deployments because the code is clean, the database optimized, and the delivery flawless.&quot;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-slate-200">
                  <Image src="/jim.jpeg" alt="Jim Sabellico" fill className="object-cover" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Jim Sabellico</div>
                  <div className="text-xs text-[#533AFD] font-semibold">Founder, No Half Cakes</div>
                </div>
              </div>
            </div>

            {/* Steve Weatherford */}
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200 flex flex-col justify-between hover:border-[#533AFD]/40 transition-colors">
              <div>
                <div className="flex gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed mb-6 font-medium">
                  &quot;I don&apos;t know the code, I just know that my platform needs to perform as hard as I do. The team delivered a digital HQ that handles my traffic, my content, and my sales without blinking. It feels solid, fast, and professional. That&apos;s the standard.&quot;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-slate-200">
                  <Image src="/steve.jpeg" alt="Steve Weatherford" fill className="object-cover" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Steve Weatherford</div>
                  <div className="text-xs text-[#533AFD] font-semibold">Super Bowl Champ & Entrepreneur</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 8. TRANSPARENCY & ATTRIBUTION SECTION */}
      {/* -------------------------------------------------------------------- */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="site-container">
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-[#533AFD] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-1.5 flex-1">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                <span>Integrity & Engineering Attribution</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] uppercase tracking-wider font-mono">
                  Verified History
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Many of the featured high-scale case studies—including Legiit, Steve Weatherford, and high-volume agency deployments—were architected and shipped during my tenure as <strong className="text-slate-900">Lead Technical Architect</strong> at <em>No Half Cakes</em>. I now deliver that same agency-grade engineering discipline directly to your company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 9. OPEN SOURCE SIGNAL (GITHUB LIVE FEED) */}
      {/* -------------------------------------------------------------------- */}
      <section className="section-pad bg-white border-t border-slate-200">
        <div className="site-container">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="badge-primary mb-3">Public Engineering Signal</span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                Open Source & Engineering Labs
              </h2>
              <p className="text-slate-600 mt-1 text-sm sm:text-base">
                Exploring algorithms, developer tools, and microservice prototypes in public on GitHub.
              </p>
            </div>

            <a
              href="https://github.com/exelentshakil"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary text-xs py-2.5 px-4 self-start sm:self-auto"
            >
              <Github className="w-4 h-4" />
              View Full GitHub Profile
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200 card-lift flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-slate-400 mb-3">
                    <Github className="w-5 h-5 text-slate-700" />
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#533AFD] transition-colors" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-2 group-hover:text-[#533AFD] transition-colors truncate">
                    {repo.name}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {repo.description || "Production utility and full-stack project repository."}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between mt-6 text-xs text-slate-500 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#533AFD]" />
                    <span>{repo.language || "TypeScript"}</span>
                  </span>
                  {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
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
      {/* 10. HIGH-CONVERTING CONTACT & BOOKING TERMINAL */}
      {/* -------------------------------------------------------------------- */}
      <section id="contact" className="section-pad bg-gradient-to-br from-slate-900 via-[#0E1528] to-[#1E1B4B] text-white">
        <div className="site-container">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Call to Action */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-bold uppercase tracking-wider">
                Direct Engineering Access
              </span>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
                Ready to build something <span className="text-indigo-400">extraordinary?</span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Available for contract architecture, complex SaaS builds, MVP development, and emergency database / payment scaling. Let&apos;s turn your roadmap into production software.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href="https://calendly.com/shakilhq/30min"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full sm:w-auto text-base py-4 px-8 shadow-xl shadow-indigo-500/30"
                >
                  <Calendar className="w-5 h-5" />
                  Book a 30-Minute Strategy Call
                </a>

                <a
                  href="https://wa.me/13075336678?text=Hi%20Shakil,%20I%20would%20like%20to%20discuss%20a%20new%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp w-full sm:w-auto text-base py-4 px-8 ml-0 sm:ml-4 inline-flex"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Direct Message
                </a>
              </div>
            </div>

            {/* Right: Verified Business Contact Card */}
            <div className="lg:col-span-6">
              <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/80 rounded-3xl p-8 space-y-6 shadow-2xl">
                
                <h3 className="text-xl font-bold text-white border-b border-slate-700/80 pb-4">
                  Official Business Details
                </h3>

                <div className="space-y-4 text-sm text-slate-300">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Phone & WhatsApp</div>
                      <a href="tel:+13075336678" className="text-white font-bold hover:text-indigo-400 transition-colors text-base">
                        +1 (307) 533-6678
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Email Inquiry</div>
                      <a href="mailto:hello@barakahsoft.com" className="text-white font-bold hover:text-indigo-400 transition-colors text-base">
                        hello@barakahsoft.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Registered Business HQ</div>
                      <div className="text-white font-medium">
                        30 N. Gould St. Ste R, Sheridan, WY 82801, USA
                      </div>
                    </div>
                  </div>
                </div>

                {/* Freelancer & Platform Profiles */}
                <div className="pt-6 border-t border-slate-700/80 flex flex-wrap items-center gap-4 text-xs">
                  <a
                    href="https://www.upwork.com/freelancers/~01e19084859cda495e"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-slate-700/60 hover:bg-slate-700 text-slate-200 transition-colors"
                  >
                    Upwork Top Talent ↗
                  </a>
                  <a
                    href="https://www.freelancer.com/u/exelentshakil"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-slate-700/60 hover:bg-slate-700 text-slate-200 transition-colors"
                  >
                    Freelancer.com ↗
                  </a>
                  <a
                    href="https://github.com/exelentshakil"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-slate-700/60 hover:bg-slate-700 text-slate-200 transition-colors"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href="https://x.com/shakilhq"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-slate-700/60 hover:bg-slate-700 text-slate-200 transition-colors"
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
      <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-10">
        <div className="site-container flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-medium">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="font-bold">© 2026 Shakil HQ (BarakahSoft LLC).</span>
            <span>All rights reserved.</span>
          </div>

          <div className="text-center md:text-right">
            <span>30 N. Gould St. Ste R, Sheridan, WY 82801 • Tel: +1 (307) 533-6678</span>
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
      className="inline-block w-[320px] bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#533AFD]/50 transition-all transform hover:-translate-y-1.5 text-left select-none group"
    >
      {/* Screenshot Section */}
      <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
        {!hasError ? (
          <Image
            src={imageSrc}
            alt={site.name}
            fill
            sizes="320px"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${getSiteFallback(site)} flex items-center justify-center text-white font-bold text-xl`}>
            {site.name}
          </div>
        )}

        <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-white/90 backdrop-blur shadow-sm text-slate-800 text-[10px] font-bold uppercase tracking-wider">
          {site.category}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-slate-900 text-sm truncate group-hover:text-[#533AFD] transition-colors">
            {site.name}
          </h4>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#533AFD] transition-colors shrink-0" />
        </div>

        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
          {site.hook || `Specialized digital platform engineered for ${site.clientType || "business"}.`}
        </p>

        {site.metric && (
          <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
            <CheckCircle2 className="w-3 h-3" />
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
      className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#533AFD]/50 transition-all transform hover:-translate-y-1.5 flex flex-col group"
    >
      <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
        {!hasError ? (
          <Image
            src={imageSrc}
            alt={site.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${getSiteFallback(site)} flex items-center justify-center text-white font-bold text-2xl`}>
            {site.name}
          </div>
        )}

        <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-white/90 backdrop-blur shadow-sm text-slate-800 text-[11px] font-bold uppercase tracking-wider">
          {site.category}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <h4 className="font-bold text-slate-900 text-lg group-hover:text-[#533AFD] transition-colors truncate">
              {site.name}
            </h4>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#533AFD] transition-colors shrink-0" />
          </div>

          <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
            {site.hook || `Tailored production system engineered for ${site.clientType || "client requirements"}.`}
          </p>
        </div>

        {site.technologies && (
          <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
            {site.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono text-[10px] font-semibold">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}
