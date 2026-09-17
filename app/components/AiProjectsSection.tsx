"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import Image from "next/image";
import { 
  Bot, 
  Sparkles, 
  ExternalLink, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  ArrowUpRight, 
  Layers, 
  Workflow, 
  TrendingUp,
  FileCode2,
  Search,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Github,
  Grid2X2,
  TableProperties,
  Compass,
  ArrowRight,
  Terminal,
  Activity,
  Layers3,
  Eye,
  Scale
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { AnimatePresence, motion } from "framer-motion";
import { aiProjects, AiProject } from "../data/aiProjects";

interface FilterCategory {
  id: "all" | "autonomous-agents" | "rag-knowledge" | "multimodal-vision" | "legal-fintech" | "workflow-orchestration";
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const FILTER_CATEGORIES: readonly FilterCategory[] = [
  { id: "all", label: "All AI Systems", icon: Sparkles },
  { id: "autonomous-agents", label: "Autonomous Agents", icon: Bot },
  { id: "rag-knowledge", label: "Governed RAG & Knowledge", icon: ShieldCheck },
  { id: "multimodal-vision", label: "Computer Vision & Multimodal", icon: Eye },
  { id: "legal-fintech", label: "Legal & FinTech AI", icon: Scale },
  { id: "workflow-orchestration", label: "Orchestration & Quoting", icon: Workflow }
];

type ViewMode = "spotlight" | "grid" | "matrix";

export function AiProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<ViewMode>("spotlight");
  const [selectedProjectId, setSelectedProjectId] = useState<string>(aiProjects[0]?.id || "");
  const [inspectModalProject, setInspectModalProject] = useState<AiProject | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const PAGE_SIZE = 6; // 6 cards per page = 3 rows of 2-column grid (strictly even parity)

  // Embla Carousel hook for thumbnail navigation
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true
  });

  // Filter projects by category and real-time search query
  const filteredProjects = useMemo(() => {
    return aiProjects.filter((p) => {
      const matchesCategory = activeCategory === "all" || p.category === activeCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q) ||
        p.architecturalPrinciple.headline.toLowerCase().includes(q) ||
        p.architecturalPrinciple.description.toLowerCase().includes(q) ||
        p.stack.some((tech) => tech.toLowerCase().includes(q)) ||
        (p.metrics && p.metrics.toLowerCase().includes(q))
      );
    });
  }, [activeCategory, searchQuery]);

  // Keep selected project aligned with filtered list
  useEffect(() => {
    if (filteredProjects.length > 0) {
      const exists = filteredProjects.some((p) => p.id === selectedProjectId);
      if (!exists) {
        setSelectedProjectId(filteredProjects[0].id);
      }
    }
  }, [filteredProjects, selectedProjectId]);

  // Reset page number on filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  // Handle keyboard navigation for modal (Escape key)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setInspectModalProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Category counts calculation
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: aiProjects.length };
    aiProjects.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Active spotlight project
  const spotlightProject = useMemo(() => {
    return aiProjects.find((p) => p.id === selectedProjectId) || filteredProjects[0] || aiProjects[0];
  }, [selectedProjectId, filteredProjects]);

  // Carousel navigation callbacks
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Select project and scroll into view
  const handleSelectSpotlight = useCallback((project: AiProject, index: number) => {
    setSelectedProjectId(project.id);
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  }, [emblaApi]);

  // Pagination calculations for Grid View
  const totalPages = Math.ceil(filteredProjects.length / PAGE_SIZE) || 1;
  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredProjects.slice(start, start + PAGE_SIZE);
  }, [filteredProjects, currentPage]);

  return (
    <section id="ai-systems" className="section-pad bg-[#FAFBFD] border-b border-[#EAECF0]">
      <div className="site-container">
        
        {/* ==================================================================== */}
        {/* SECTION HEADER: FUTURISTIC COMMAND CENTER EYEBROW */}
        {/* ==================================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F3FF] border border-[#D9D6FE] text-[#533AFD] text-xs font-semibold">
              <span className="h-2 w-2 rounded-full bg-[#533AFD] animate-pulse" />
              <Sparkles className="w-3.5 h-3.5" />
              <span>Production AI Systems &amp; Autonomous Agents Catalog</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D1738] tracking-tight">
              Production AI Architectures. <br className="hidden sm:inline" />
              <span className="text-[#533AFD]">Interactive Systems Cockpit.</span>
            </h2>

            <p className="text-sm text-[#475467] leading-relaxed">
              Browse <strong>44 verified live applications</strong> spanning autonomous agent swarms, governed RAG pipelines, computer vision estimators, and financial state machines with deterministic zero-drift boundaries.
            </p>
          </div>

          {/* Institutional Telemetry Pill & View Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 shrink-0">
            <div className="px-3.5 py-2 rounded-[6px] bg-white border border-[#E4E7EC] shadow-xs flex items-center gap-3 text-xs text-[#344054]">
              <div className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>44 / 44 Verified Live</span>
              </div>
              <span className="text-slate-300">|</span>
              <span className="font-mono text-[11px] text-[#667085]">Zero-Drift Invariants</span>
            </div>

            {/* View Mode Switcher Toggle */}
            <div className="inline-flex items-center p-1 rounded-[6px] bg-white border border-[#D0D5DD] shadow-xs">
              <button
                onClick={() => setViewMode("spotlight")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] text-xs font-semibold transition-all ${
                  viewMode === "spotlight"
                    ? "bg-[#0D1738] text-white shadow-xs"
                    : "text-[#475467] hover:text-[#0D1738] hover:bg-[#F2F4F7]"
                }`}
                title="Command Deck Spotlight View"
              >
                <Compass className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Spotlight</span>
              </button>

              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] text-xs font-semibold transition-all ${
                  viewMode === "grid"
                    ? "bg-[#0D1738] text-white shadow-xs"
                    : "text-[#475467] hover:text-[#0D1738] hover:bg-[#F2F4F7]"
                }`}
                title="Paginated Bento Grid View"
              >
                <Grid2X2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Grid (6/pg)</span>
              </button>

              <button
                onClick={() => setViewMode("matrix")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] text-xs font-semibold transition-all ${
                  viewMode === "matrix"
                    ? "bg-[#0D1738] text-white shadow-xs"
                    : "text-[#475467] hover:text-[#0D1738] hover:bg-[#F2F4F7]"
                }`}
                title="Executive Systems Matrix Table"
              >
                <TableProperties className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Matrix</span>
              </button>
            </div>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* INTERACTIVE CONTROLS BAR: SEARCH + CATEGORY FILTER PILLS */}
        {/* ==================================================================== */}
        <div className="bg-white rounded-[8px] border border-[#EAECF0] p-4 mb-8 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            
            {/* Real-Time Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#98A2B3] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by system, stack (Next.js 15, pgvector, Retell), or invariant..."
                className="w-full pl-9 pr-8 py-2 rounded-[6px] border border-[#D0D5DD] text-xs text-[#0D1738] placeholder-[#98A2B3] focus:outline-hidden focus:border-[#533AFD] focus:ring-1 focus:ring-[#533AFD] transition-all bg-white"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Active Match Counter Pill */}
            <div className="flex items-center gap-2 text-xs text-[#475467]">
              <span>Showing</span>
              <span className="font-mono font-bold text-[#0D1738] bg-[#F2F4F7] px-2 py-0.5 rounded-[4px] border border-[#EAECF0]">
                {filteredProjects.length}
              </span>
              <span>of {aiProjects.length} production systems</span>
            </div>
          </div>

          {/* Category Filter Navigation Bar - Fixed Single-Row Command Rail (No Next-Line Wrapping) */}
          <div className="pt-3 border-t border-[#EAECF0]">
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar scrollbar-none whitespace-nowrap py-1">
              {FILTER_CATEGORIES.map((cat) => {
                const count = categoryCounts[cat.id] || 0;
                const isActive = activeCategory === cat.id;
                const Icon = cat.icon;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`group shrink-0 inline-flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-[6px] text-xs font-semibold transition-all duration-150 cursor-pointer whitespace-nowrap border ${
                      isActive
                        ? "bg-[#0D1738] text-white border-[#0D1738] shadow-xs"
                        : "bg-white text-[#344054] border-[#D0D5DD] hover:border-[#98A2B3] hover:bg-[#F8F9FC] hover:text-[#0D1738]"
                    }`}
                  >
                    <Icon
                      className={`w-3.5 h-3.5 shrink-0 transition-colors ${
                        isActive
                          ? "text-[#A488FC]"
                          : "text-[#667085] group-hover:text-[#533AFD]"
                      }`}
                    />
                    <span>{cat.label}</span>
                    <span
                      className={`inline-flex items-center justify-center min-w-[20px] px-1.5 py-0.5 rounded-full text-[10px] font-mono font-bold leading-none shrink-0 ${
                        isActive
                          ? "bg-white/15 text-white border border-white/20"
                          : "bg-[#F2F4F7] text-[#475467] border border-[#EAECF0] group-hover:bg-[#EAECF0] group-hover:text-[#0D1738]"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* VIEW MODE 1: SPOTLIGHT COMMAND DECK (DEFAULT FUTURISTIC HERO) */}
        {/* ==================================================================== */}
        {viewMode === "spotlight" && (
          <div className="space-y-6">
            {/* Active Spotlight Hero Card */}
            {spotlightProject ? (
              <div className="bg-white rounded-[8px] border border-[#D0D5DD] shadow-sm overflow-hidden transition-all">
                
                {/* Browser-Simulated Frame Header */}
                <div className="bg-[#0D1738] px-4 py-3 text-white flex flex-wrap items-center justify-between gap-3 border-b border-[#1A264F]">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="flex items-center gap-1.5 mr-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                    </div>
                    
                    {/* Simulated URL Bar */}
                    <div className="px-3 py-1 rounded-[4px] bg-[#1A264F] text-[#98A2B3] text-[11px] font-mono flex items-center gap-1.5 truncate max-w-xs sm:max-w-md">
                      <span className="text-emerald-400">https://</span>
                      <span className="text-white truncate">{(spotlightProject.liveUrl || '').replace('https://', '')}</span>
                    </div>
                  </div>

                  {/* Top Action Pills */}
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => setInspectModalProject(spotlightProject)}
                      className="px-2.5 py-1 rounded-[4px] bg-white/10 hover:bg-white/20 text-xs text-white font-medium inline-flex items-center gap-1.5 transition-colors border border-white/15"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Architecture Spec</span>
                    </button>

                    <a
                      href={spotlightProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1 rounded-[4px] bg-[#533AFD] hover:bg-[#4326EB] text-xs text-white font-bold inline-flex items-center gap-1.5 transition-colors shadow-xs"
                    >
                      <span>Launch Live App</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Hero Showcase Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  
                  {/* Left Column: High-Res Viewport Screenshot Preview */}
                  <div className="lg:col-span-7 p-5 sm:p-6 bg-slate-950 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#EAECF0]">
                    <div className="relative aspect-[16/9] w-full rounded-[6px] overflow-hidden border border-slate-800 shadow-xl group">
                      <Image
                        src={spotlightProject.previewImage || "/screenshots/ai/nightshift-preview.png"}
                        alt={spotlightProject.title}
                        fill
                        priority
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-xs text-white font-mono flex items-center gap-1.5 bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-[4px]">
                          <Eye className="w-3.5 h-3.5 text-emerald-400" />
                          <span>1920x832 High-Resolution Desktop Capture</span>
                        </span>
                      </div>
                    </div>

                    {/* Screenshot Footer Strip */}
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                      <div className="flex items-center gap-2 text-slate-300">
                        <Activity className="w-3.5 h-3.5 text-[#533AFD]" />
                        <span>System ID: <strong className="text-white">{spotlightProject.id}</strong></span>
                      </div>
                      {spotlightProject.githubUrl && (
                        <a
                          href={spotlightProject.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-slate-400 hover:text-white inline-flex items-center gap-1 transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>github.com/exelentshakil/{spotlightProject.id}</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Architectural Principles & Key Invariants */}
                  <div className="lg:col-span-5 p-5 sm:p-6 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      
                      {/* Eyebrow & Badge */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2.5 py-0.5 rounded-[2px] bg-[#F4F3FF] border border-[#D9D6FE] text-[#533AFD] text-[11px] font-bold uppercase tracking-wider">
                          {spotlightProject.categoryLabel}
                        </span>
                        {spotlightProject.badge && (
                          <span className="px-2 py-0.5 rounded-[2px] bg-[#ECFDF3] border border-[#A6F4C5] text-[#027A48] text-[10px] font-semibold">
                            {spotlightProject.badge}
                          </span>
                        )}
                      </div>

                      {/* Project Title & Subtitle */}
                      <h3 className="text-lg sm:text-xl font-bold text-[#0D1738] tracking-tight">
                        {spotlightProject.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                        {spotlightProject.subtitle}
                      </p>

                      {/* Architectural Invariant Box */}
                      <div className="p-3.5 rounded-[6px] bg-[#F8F9FC] border border-[#E4E7EC] space-y-1.5">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-[#0D1738]">
                          <Cpu className="w-3.5 h-3.5 text-[#533AFD] shrink-0" />
                          <span>Core Principle: {spotlightProject.architecturalPrinciple.headline}</span>
                        </div>
                        <p className="text-xs text-[#475467] leading-relaxed">
                          {spotlightProject.architecturalPrinciple.description}
                        </p>
                      </div>

                      {/* Key Features Bullets */}
                      <div className="space-y-1.5 pt-1">
                        {spotlightProject.keyFeatures.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-[#344054]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="leading-snug">{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Client Value Statement */}
                      <div className="pt-2 border-t border-[#EAECF0] flex items-start gap-2 text-xs text-[#0D1738]">
                        <TrendingUp className="w-3.5 h-3.5 text-[#533AFD] shrink-0 mt-0.5" />
                        <span><strong>Client ROI:</strong> {spotlightProject.clientValue}</span>
                      </div>

                      {/* Metrics Pill */}
                      {spotlightProject.metrics && (
                        <div className="text-[11px] font-semibold text-emerald-700 bg-[#ECFDF3] border border-[#A6F4C5] px-2.5 py-1 rounded-[4px] inline-flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{spotlightProject.metrics}</span>
                        </div>
                      )}
                    </div>

                    {/* Tech Stack Chips & Direct Links */}
                    <div className="pt-4 border-t border-[#EAECF0] space-y-3">
                      <div className="flex flex-wrap gap-1">
                        {spotlightProject.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-[2px] bg-[#F2F4F7] text-[#344054] font-mono text-[10px] font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between gap-3 pt-2">
                        <button
                          onClick={() => setInspectModalProject(spotlightProject)}
                          className="text-xs font-semibold text-[#533AFD] hover:text-[#4326EB] inline-flex items-center gap-1 transition-colors"
                        >
                          <span>Inspect Full Architectural Blueprint</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ) : (
              <div className="p-12 text-center bg-white rounded-[8px] border border-[#EAECF0]">
                <p className="text-sm text-[#667085]">No systems matched your search filter.</p>
              </div>
            )}

            {/* Futuristic Horizontal Thumbnail Scroller (Embla Carousel) */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#533AFD]" />
                  <span className="text-xs font-bold text-[#0D1738] uppercase tracking-wider">
                    Interactive Systems Deck ({filteredProjects.length} Available)
                  </span>
                </div>

                {/* Carousel Next / Prev Controls */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={scrollPrev}
                    className="p-1.5 rounded-[4px] border border-[#D0D5DD] bg-white hover:bg-[#F2F4F7] text-[#344054] transition-colors"
                    title="Previous System"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={scrollNext}
                    className="p-1.5 rounded-[4px] border border-[#D0D5DD] bg-white hover:bg-[#F2F4F7] text-[#344054] transition-colors"
                    title="Next System"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Embla Viewport */}
              <div className="overflow-hidden rounded-[8px] -mx-1 px-1 py-1" ref={emblaRef}>
                <div className="flex gap-4">
                  {filteredProjects.map((project, idx) => {
                    const isSelected = project.id === spotlightProject?.id;

                    return (
                      <div
                        key={project.id}
                        onClick={() => handleSelectSpotlight(project, idx)}
                        className={`flex-none w-[260px] sm:w-[280px] p-3 rounded-[6px] bg-white border cursor-pointer transition-all ${
                          isSelected
                            ? "border-[#533AFD] shadow-md ring-2 ring-[#533AFD]/20 translate-y-[-2px]"
                            : "border-[#D0D5DD] hover:border-[#533AFD]/60 hover:shadow-xs"
                        }`}
                      >
                        <div className="relative aspect-[16/9] w-full rounded-[4px] overflow-hidden bg-slate-950 mb-2.5 border border-[#EAECF0]">
                          <Image
                            src={project.previewImage || "/screenshots/ai/nightshift-preview.png"}
                            alt={project.title}
                            fill
                            className="object-cover object-top"
                          />
                          {isSelected && (
                            <div className="absolute top-1.5 right-1.5 px-2 py-0.5 rounded-[2px] bg-[#533AFD] text-white text-[9px] font-bold tracking-wider uppercase">
                              Active Stage
                            </div>
                          )}
                        </div>

                        <div className="space-y-1">
                          <span className="text-[10px] font-bold text-[#533AFD] uppercase tracking-wider block">
                            {project.categoryLabel}
                          </span>
                          <h4 className="text-xs font-bold text-[#0D1738] truncate" title={project.title}>
                            {project.title}
                          </h4>
                          <p className="text-[11px] text-[#667085] line-clamp-2 leading-relaxed">
                            {project.subtitle}
                          </p>
                        </div>

                        <div className="mt-2.5 pt-2 border-t border-[#EAECF0] flex items-center justify-between text-[10px] font-mono text-[#475467]">
                          <span className="truncate max-w-[170px]">{project.badge || "Live Verified"}</span>
                          <span className="text-[#533AFD] font-bold">Select ↗</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* VIEW MODE 2: PAGINATED BENTO GRID (STRICT EVEN PARITY) */}
        {/* ==================================================================== */}
        {viewMode === "grid" && (
          <div className="space-y-6">
            {/* 2-Column Responsive Grid (6 cards per page) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {paginatedProjects.map((project) => (
                <AiProjectCard 
                  key={project.id} 
                  project={project} 
                  onInspect={() => setInspectModalProject(project)} 
                />
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-8 pt-4 border-t border-[#EAECF0] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#475467]">
                  Showing <strong className="text-[#0D1738]">{(currentPage - 1) * PAGE_SIZE + 1}</strong> to{" "}
                  <strong className="text-[#0D1738]">
                    {Math.min(currentPage * PAGE_SIZE, filteredProjects.length)}
                  </strong>{" "}
                  of <strong className="text-[#0D1738]">{filteredProjects.length}</strong> systems
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1.5 rounded-[4px] border border-[#D0D5DD] bg-white text-xs font-semibold text-[#344054] hover:bg-[#F2F4F7] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    Previous
                  </button>

                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                      <button
                        key={num}
                        onClick={() => setCurrentPage(num)}
                        className={`w-8 h-8 rounded-[4px] text-xs font-semibold transition-all ${
                          currentPage === num
                            ? "bg-[#0D1738] text-white shadow-xs"
                            : "bg-white border border-[#D0D5DD] text-[#344054] hover:bg-[#F2F4F7]"
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1.5 rounded-[4px] border border-[#D0D5DD] bg-white text-xs font-semibold text-[#344054] hover:bg-[#F2F4F7] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ==================================================================== */}
        {/* VIEW MODE 3: EXECUTIVE SYSTEMS MATRIX (INTERACTIVE TABLE) */}
        {/* ==================================================================== */}
        {viewMode === "matrix" && (
          <div className="bg-white rounded-[8px] border border-[#D0D5DD] shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#0D1738] text-white font-mono text-[11px] uppercase tracking-wider border-b border-[#1A264F]">
                    <th className="py-3 px-4 font-semibold">System &amp; Category</th>
                    <th className="py-3 px-4 font-semibold hidden md:table-cell">Architectural Invariant</th>
                    <th className="py-3 px-4 font-semibold hidden lg:table-cell">Production Telemetry</th>
                    <th className="py-3 px-4 font-semibold hidden xl:table-cell">Technology Stack</th>
                    <th className="py-3 px-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAECF0]">
                  {filteredProjects.map((project, idx) => (
                    <tr 
                      key={project.id} 
                      className={`hover:bg-[#F8F9FC] transition-colors ${idx % 2 === 0 ? "bg-white" : "bg-[#FAFBFD]"}`}
                    >
                      {/* Name & Category */}
                      <td className="py-3.5 px-4">
                        <div className="space-y-1 max-w-xs sm:max-w-sm">
                          <div className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                            <span className="font-bold text-[#0D1738] text-xs sm:text-sm tracking-tight">{project.title}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-[10px] text-[#533AFD] font-semibold">
                            <span>{project.categoryLabel}</span>
                            {project.badge && (
                              <>
                                <span>•</span>
                                <span className="text-[#027A48]">{project.badge}</span>
                              </>
                            )}
                          </div>
                        </div>
                      </td>

                      {/* Invariant */}
                      <td className="py-3.5 px-4 hidden md:table-cell max-w-xs">
                        <div className="space-y-0.5">
                          <div className="font-semibold text-[#0D1738] text-[11px] truncate">
                            {project.architecturalPrinciple.headline}
                          </div>
                          <p className="text-[11px] text-[#667085] line-clamp-2 leading-relaxed">
                            {project.architecturalPrinciple.description}
                          </p>
                        </div>
                      </td>

                      {/* Telemetry Metric */}
                      <td className="py-3.5 px-4 hidden lg:table-cell">
                        {project.metrics ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[4px] bg-[#ECFDF3] border border-[#A6F4C5] text-[#027A48] font-mono text-[10px] font-semibold">
                            <ShieldCheck className="w-3 h-3 text-[#027A48]" />
                            <span>{project.metrics}</span>
                          </span>
                        ) : (
                          <span className="text-slate-400 font-mono text-[10px]">Verified Invariant</span>
                        )}
                      </td>

                      {/* Stack */}
                      <td className="py-3.5 px-4 hidden xl:table-cell max-w-[200px]">
                        <div className="flex flex-wrap gap-1">
                          {project.stack.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-1.5 py-0.5 rounded-[2px] bg-[#F2F4F7] text-[#344054] font-mono text-[9px]"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.stack.length > 3 && (
                            <span className="text-[9px] font-mono text-[#667085] self-center">
                              +{project.stack.length - 3}
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Action Buttons */}
                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => setInspectModalProject(project)}
                            className="px-2.5 py-1 rounded-[4px] border border-[#D0D5DD] bg-white hover:bg-[#F2F4F7] text-xs font-semibold text-[#344054] transition-colors"
                          >
                            Inspect
                          </button>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="px-2.5 py-1 rounded-[4px] bg-[#533AFD] hover:bg-[#4326EB] text-xs font-bold text-white transition-colors inline-flex items-center gap-1 shadow-xs"
                          >
                            <span>Live</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* BOTTOM BANNER: STRATEGY CONSULTATION CTA (NO RATE REFERENCES) */}
        {/* ==================================================================== */}
        <div className="mt-12 p-6 rounded-[8px] bg-gradient-to-r from-[#0D1738] to-[#1A264F] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Bot className="w-4 h-4" />
              <span>Enterprise Systems Architecture Standard</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold tracking-tight">
              Designing or scaling an autonomous AI platform?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              I architect, benchmark, and ship high-reliability AI platforms with grounded retrieval, multi-agent state machines, and mathematical financial invariants.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href="https://calendly.com/shakilhq/30min"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-[4px] bg-[#533AFD] hover:bg-[#4326EB] text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 w-full md:w-auto shadow-sm"
            >
              <span>Book Strategy Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/13075336678?text=Hi%20Shakil,%20I'd%20like%20to%20discuss%20an%20AI%20project."
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-[4px] bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 w-full md:w-auto border border-white/20"
            >
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>

      {/* ==================================================================== */}
      {/* DEEP ARCHITECTURE INSPECTION MODAL (FRAMER-MOTION ANIMATEPRESENCE) */}
      {/* ==================================================================== */}
      <AnimatePresence>
        {inspectModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setInspectModalProject(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-xs"
            />

            {/* Modal Dialog Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[10px] shadow-2xl overflow-y-auto border border-slate-700 z-10 flex flex-col"
            >
              {/* Modal Top Chrome Header */}
              <div className="sticky top-0 z-20 bg-[#0D1738] px-5 py-3.5 text-white flex items-center justify-between border-b border-[#1A264F]">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="flex items-center gap-1.5 mr-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-300 truncate">
                    Architecture Inspection: {inspectModalProject.id}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={inspectModalProject.liveUrl || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 rounded-[4px] bg-[#533AFD] hover:bg-[#4326EB] text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5 shadow-xs"
                  >
                    <span>Launch Live</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setInspectModalProject(null)}
                    className="p-1 rounded-[4px] text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Content Body */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* High-Res Viewport Preview */}
                <div className="relative aspect-[16/9] w-full rounded-[6px] overflow-hidden border border-[#EAECF0] bg-slate-950 shadow-md">
                  <Image
                    src={inspectModalProject.previewImage || "/screenshots/ai/nightshift-preview.png"}
                    alt={inspectModalProject.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                {/* Title & Category Tags */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-[2px] bg-[#F4F3FF] border border-[#D9D6FE] text-[#533AFD] text-xs font-bold uppercase tracking-wider">
                      {inspectModalProject.categoryLabel}
                    </span>
                    {inspectModalProject.badge && (
                      <span className="px-2.5 py-0.5 rounded-[2px] bg-[#ECFDF3] border border-[#A6F4C5] text-[#027A48] text-xs font-semibold">
                        {inspectModalProject.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#0D1738] tracking-tight">
                    {inspectModalProject.title}
                  </h3>
                  <p className="text-sm text-[#475467] leading-relaxed">
                    {inspectModalProject.subtitle}
                  </p>
                </div>

                {/* Architectural Principle Deep-Dive Box */}
                <div className="p-4 rounded-[6px] bg-[#F8F9FC] border border-[#E4E7EC] space-y-2">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#0D1738]">
                    <Cpu className="w-4 h-4 text-[#533AFD] shrink-0" />
                    <span>Architectural Principle: {inspectModalProject.architecturalPrinciple.headline}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                    {inspectModalProject.architecturalPrinciple.description}
                  </p>
                </div>

                {/* Key Technical Wins */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D1738]">
                    Key Technical Wins &amp; Engineering Invariants
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {inspectModalProject.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="p-3 rounded-[6px] bg-[#FAFBFD] border border-[#EAECF0] flex items-start gap-2 text-xs text-[#344054]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Client Value & Metrics */}
                <div className="p-4 rounded-[6px] bg-[#F4F3FF]/40 border border-[#D9D6FE] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#533AFD] uppercase tracking-wider">
                    <TrendingUp className="w-4 h-4 text-[#533AFD]" />
                    <span>Client Business Value &amp; Return</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#0D1738] font-medium leading-relaxed">
                    {inspectModalProject.clientValue}
                  </p>
                  {inspectModalProject.metrics && (
                    <div className="pt-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[4px] bg-[#ECFDF3] border border-[#A6F4C5] text-emerald-700 text-xs font-semibold font-mono">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>{inspectModalProject.metrics}</span>
                      </span>
                    </div>
                  )}
                </div>

                {/* Tech Stack & Links Footer */}
                <div className="pt-4 border-t border-[#EAECF0] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {inspectModalProject.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-[4px] bg-[#F2F4F7] text-[#344054] font-mono text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {inspectModalProject.githubUrl && (
                      <a
                        href={inspectModalProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-2 rounded-[4px] border border-[#D0D5DD] bg-white hover:bg-[#F2F4F7] text-xs font-semibold text-[#344054] inline-flex items-center gap-1.5 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>
                    )}
                    <a
                      href={inspectModalProject.liveUrl || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 rounded-[4px] bg-[#533AFD] hover:bg-[#4326EB] text-white text-xs font-bold inline-flex items-center gap-1.5 transition-colors shadow-xs"
                    >
                      <span>Launch Live Application</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

function AiProjectCard({ 
  project, 
  onInspect 
}: { 
  project: AiProject;
  onInspect: () => void;
}) {
  return (
    <div className="bg-white rounded-[6px] border border-[#D0D5DD] hover:border-[#533AFD] transition-all p-5 sm:p-6 shadow-xs flex flex-col justify-between group">
      <div>
        
        {/* Top Badges & Live Status */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 py-0.5 rounded-[2px] bg-[#F4F3FF] border border-[#D9D6FE] text-[#533AFD] text-[11px] font-bold uppercase tracking-wider">
              {project.categoryLabel}
            </span>
            {project.badge && (
              <span className="px-2 py-0.5 rounded-[2px] bg-[#ECFDF3] border border-[#A6F4C5] text-[#027A48] text-[10px] font-semibold">
                {project.badge}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onInspect}
              className="text-xs font-medium text-[#667085] hover:text-[#533AFD] transition-colors"
            >
              Inspect
            </button>
            <span className="text-slate-300">|</span>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#533AFD] hover:text-[#4326EB] transition-colors"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Screenshot Preview */}
        {project.previewImage && (
          <div 
            onClick={onInspect}
            className="relative aspect-[16/9] mb-4 rounded-[4px] overflow-hidden border border-[#EAECF0] bg-slate-950 cursor-pointer group"
          >
            <Image
              src={project.previewImage || "/screenshots/ai/nightshift-preview.png"}
              alt={project.title}
              fill
              className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="px-3 py-1.5 rounded-[4px] bg-white text-[#0D1738] text-xs font-bold shadow-md flex items-center gap-1.5">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Quick Inspect Architecture</span>
              </span>
            </div>
          </div>
        )}

        {/* Project Title */}
        <h3 className="text-base sm:text-lg font-bold text-[#0D1738] group-hover:text-[#533AFD] transition-colors tracking-tight">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm text-[#475467] mt-1.5 leading-relaxed">
          {project.subtitle}
        </p>

        {/* Architectural Principle Box */}
        <div className="mt-4 p-3.5 rounded-[4px] bg-[#F8F9FC] border border-[#E4E7EC] space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#0D1738]">
            <Cpu className="w-3.5 h-3.5 text-[#533AFD] shrink-0" />
            <span>Architecture: {project.architecturalPrinciple.headline}</span>
          </div>
          <p className="text-xs text-[#475467] leading-relaxed">
            {project.architecturalPrinciple.description}
          </p>
        </div>

        {/* Key Technical Wins Bullets */}
        <div className="mt-4 space-y-1.5">
          {project.keyFeatures.slice(0, 3).map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-[#344054]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span className="leading-snug">{feat}</span>
            </div>
          ))}
        </div>

        {/* Client Value Statement */}
        <div className="mt-4 pt-3 border-t border-[#EAECF0] flex items-start gap-2 text-xs text-[#0D1738]">
          <TrendingUp className="w-3.5 h-3.5 text-[#533AFD] shrink-0 mt-0.5" />
          <span><strong>Client Value:</strong> {project.clientValue}</span>
        </div>

        {/* Metrics Strip */}
        {project.metrics && (
          <div className="mt-2.5 text-[11px] font-semibold text-emerald-700 bg-[#ECFDF3] border border-[#A6F4C5] px-2.5 py-1 rounded-[2px] inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>{project.metrics}</span>
          </div>
        )}

      </div>

      {/* Card Footer: Tech Stack Pills & Action Link */}
      <div className="mt-5 pt-4 border-t border-[#EAECF0] flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-[2px] bg-[#F2F4F7] text-[#344054] font-mono text-[10px] font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={onInspect}
            className="text-xs font-semibold text-[#667085] hover:text-[#0D1738] transition-colors"
          >
            Inspect Spec
          </button>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold text-[#533AFD] hover:text-[#4326EB] flex items-center gap-1 transition-colors"
          >
            <span>Launch Live App</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
