"use client";

import { useState } from "react";
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
  FileCode2
} from "lucide-react";
import { aiProjects, AiProject } from "../data/aiProjects";

const FILTER_CATEGORIES = [
  { id: "all", label: "All AI Systems" },
  { id: "autonomous-agents", label: "Autonomous Agents" },
  { id: "multimodal-vision", label: "Computer Vision & Multimodal" },
  { id: "legal-fintech", label: "Legal & FinTech AI" },
  { id: "workflow-orchestration", label: "Orchestration & Quoting" }
] as const;

export function AiProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProjects = activeCategory === "all"
    ? aiProjects
    : aiProjects.filter((p) => {
        if (activeCategory === "workflow-orchestration") {
          return p.category === "workflow-orchestration" || p.category === "rag-knowledge";
        }
        return p.category === activeCategory;
      });

  return (
    <section id="ai-systems" className="section-pad bg-white border-b border-[#EAECF0]">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4F3FF] border border-[#D9D6FE] text-[#533AFD] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Production AI Applications & Autonomous Agents</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D1738] tracking-tight">
            AI Architectures Built for Real Production. <br className="hidden sm:inline" />
            <span className="text-[#533AFD]">Not Demos That Die After the Pitch Deck.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#475467] mt-3 leading-relaxed">
            Every AI application I build follows strict production engineering rules: <strong>grounded retrieval</strong> with source citations, <strong>deterministic calculation engines</strong> that prevent model hallucination, and <strong>approval-gated human-in-the-loop workflows</strong> before any external state is mutated.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-6 pt-3 border-t border-[#EAECF0]">
            {FILTER_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-[4px] text-xs font-semibold transition-all ${
                  activeCategory === cat.id
                    ? "bg-[#0D1738] text-white shadow-sm"
                    : "bg-[#F2F4F7] text-[#475467] hover:bg-[#EAECF0]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* AI Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <AiProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-12 p-6 rounded-[4px] bg-gradient-to-r from-[#0D1738] to-[#1A264F] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Bot className="w-4 h-4" />
              <span>Full-Stack AI Engineering Standard</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold tracking-tight">
              Have an AI project or agent architecture in mind?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              I consult, architect, and ship high-reliability AI platforms at $150/hr. From RAG knowledge systems to autonomous multi-agent pipelines and vision classification APIs.
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
    </section>
  );
}

function AiProjectCard({ project }: { project: AiProject }) {
  return (
    <div className="bg-white rounded-[4px] border border-[#D0D5DD] hover:border-[#533AFD] transition-all p-5 sm:p-6 shadow-sm flex flex-col justify-between group">
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

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#533AFD] hover:text-[#4326EB] transition-colors"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {/* Optional Screenshot Preview */}
        {project.previewImage && (
          <div className="relative aspect-[16/9] mb-4 rounded-[4px] overflow-hidden border border-[#EAECF0] bg-slate-900">
            <Image
              src={project.previewImage}
              alt={project.title}
              fill
              className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        )}

        {/* Project Title */}
        <h3 className="text-base sm:text-lg font-bold text-[#0D1738] group-hover:text-[#533AFD] transition-colors tracking-tight">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm text-[#475467] mt-1.5 leading-relaxed">
          {project.subtitle}
        </p>

        {/* Architectural Principle Box (The "Why It Works In Production" Box) */}
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
        <div className="mt-4 space-y-2">
          {project.keyFeatures.map((feat, idx) => (
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

        {/* Metrics Strip if available */}
        {project.metrics && (
          <div className="mt-2.5 text-[11px] font-semibold text-emerald-700 bg-[#ECFDF3] px-2.5 py-1 rounded-[2px] inline-flex items-center gap-1.5">
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

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-semibold text-[#0D1738] hover:text-[#533AFD] flex items-center gap-1 transition-colors"
          >
            <span>Launch Live App</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}
