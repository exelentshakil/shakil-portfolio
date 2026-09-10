"use client";

import { 
  Wrench, 
  Database, 
  ShieldAlert, 
  CreditCard, 
  Zap, 
  Cpu, 
  Rocket, 
  ArrowUpRight, 
  Check, 
  AlertTriangle 
} from "lucide-react";
import { AI_MVP_RESCUE_SERVICES } from "../data/aiProjects";

const ICON_MAP = {
  BugOff: Database,
  ShieldAlert: ShieldAlert,
  CreditCard: CreditCard,
  Zap: Zap,
  Cpu: Cpu,
  Rocket: Rocket
};

const SUPPORTED_TOOLS = [
  { name: "Lovable", tag: "Full-Stack Rescue" },
  { name: "Bolt.new", tag: "Node / Vite Fixes" },
  { name: "v0 by Vercel", tag: "Next.js UI & Server Actions" },
  { name: "Supabase", tag: "RLS & Schema Architecture" },
  { name: "Replit", tag: "Python & Express Deployments" },
  { name: "Base44", tag: "No-Code / Low-Code Port" },
  { name: "Cursor", tag: "Production Refactoring" }
];

export function AiMvpRescueSection() {
  return (
    <section id="ai-rescue" className="section-pad bg-[#F8FAFC] border-b border-[#EAECF0]">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEF3F2] border border-[#FECDCA] text-[#B42318] text-xs font-semibold mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Specialized Engineering Lane</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D1738] tracking-tight">
            Did Your AI Tool Get You 80% There, <br className="hidden sm:inline" />
            <span className="text-[#533AFD]">And You Need a Real Engineer to Ship It?</span>
          </h2>
          <p className="text-sm sm:text-base text-[#475467] mt-3 leading-relaxed">
            I rescue, refactor, and ship AI-generated MVPs built with <strong>Lovable, Bolt.new, v0, Replit, Base44, and Supabase</strong> that stalled before production. I take prototypes with missing indexes, broken auth, failing webhooks, and request timeouts, and transform them into hardened, revenue-generating production SaaS platforms.
          </p>

          {/* Supported AI Builder Badges */}
          <div className="flex flex-wrap gap-2 mt-5">
            {SUPPORTED_TOOLS.map((tool) => (
              <span
                key={tool.name}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[4px] bg-white border border-[#D0D5DD] text-xs font-medium text-[#344054] shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#533AFD]" />
                <strong className="text-[#0D1738]">{tool.name}</strong>
                <span className="text-[#98A2B3]">· {tool.tag}</span>
              </span>
            ))}
          </div>
        </div>

        {/* 6 Rescue Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {AI_MVP_RESCUE_SERVICES.map((item, idx) => {
            const IconComponent = ICON_MAP[item.icon as keyof typeof ICON_MAP] || Wrench;
            return (
              <div
                key={idx}
                className="bg-white rounded-[4px] border border-[#D0D5DD] p-5 hover:border-[#533AFD] transition-all shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-[4px] bg-[#F4F3FF] text-[#533AFD] border border-[#D9D6FE] flex items-center justify-center">
                    <IconComponent className="w-4 h-4" />
                  </div>

                  <h3 className="font-bold text-sm sm:text-base text-[#0D1738] tracking-tight">
                    {item.title}
                  </h3>

                  {/* Problem Callout */}
                  <div className="p-2.5 rounded-[4px] bg-[#FEF3F2] border border-[#FEE4E2] text-[11px] text-[#B42318] leading-relaxed flex items-start gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#D92D20]" />
                    <span><strong>The Bottleneck:</strong> {item.problem}</span>
                  </div>

                  {/* Solution */}
                  <div className="text-xs text-[#344054] leading-relaxed flex items-start gap-2 pt-1">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Production Fix:</strong> {item.solution}</span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#EAECF0] text-[11px] font-semibold text-[#533AFD] flex items-center gap-1">
                  <span>Guaranteed Production Hardened</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="mt-10 bg-white rounded-[4px] border border-[#D0D5DD] p-6 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-bold text-base text-[#0D1738]">
              Ready to turn your prototype into a live, paying business?
            </h4>
            <p className="text-xs sm:text-sm text-[#475467]">
              Average MVP rescue turnaround is 5–14 days. Full code review, architectural blueprint, and fixed or hourly pricing ($150/hr).
            </p>
          </div>

          <a
            href="https://calendly.com/shakilhq/30min"
            target="_blank"
            rel="noreferrer"
            className="btn-primary text-xs sm:text-sm whitespace-nowrap shrink-0 w-full sm:w-auto text-center"
          >
            <span>Request MVP Architecture Review</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
