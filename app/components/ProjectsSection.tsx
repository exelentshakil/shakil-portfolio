// components/ProjectsSection.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight, TrendingUp, ShieldCheck, Code2 } from "lucide-react";
import { sites, Site } from "../data/sites"; // Import your data file
import { cn } from "../lib/utils";

// ------------------------------------------------------------------
// 1. UI Components (Internal for this section)
// ------------------------------------------------------------------

const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <p className={cn("mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>
  );
};

// ------------------------------------------------------------------
// 2. Main Section Component
// ------------------------------------------------------------------

const categories = [
  "All",
  "marketplace",
  "agency",
  "healthcare",
  "business",
  "legal",
  "sports",
] as const;

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Filter logic
  const filteredSites = sites.filter((site) => {
    if (activeCategory === "All") return site.featured || site.category === "marketplace"; // Default view
    return site.category === activeCategory;
  });

  // Limit for performance/aesthetics if "All" is selected, otherwise show all in category
  const displaySites = activeCategory === "All" ? filteredSites.slice(0, 9) : filteredSites;

  return (
    <section className="py-20 bg-neutral-950 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-200 mb-4">
            Building Digital <span className="text-emerald-500">Excellence</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            A showcase of high-performance platforms, agencies, and tools.
            Driven by complex problem solving and real business metrics.
          </p>
        </div>

        {/* Animated Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200",
                activeCategory === category ? "text-white" : "text-neutral-400 hover:text-neutral-200"
              )}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-neutral-800 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 capitalize">{category}</span>
            </button>
          ))}
        </div>

        {/* Hover Grid (The Aceternity Effect) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
          <AnimatePresence mode="popLayout">
            {displaySites.map((site, idx) => (
              <motion.div
                key={site.url}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="relative group block p-2 h-full w-full"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Hover Background Animation */}
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.span
                      className="absolute inset-0 h-full w-full bg-neutral-800/[0.8] block rounded-3xl"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { duration: 0.15 } }}
                      exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                    />
                  )}
                </AnimatePresence>

                <Card className="h-full flex flex-col justify-between">
                  <div>
                    {/* Header: Icon & Category */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${site.featured ? 'bg-emerald-500' : 'bg-neutral-500'}`} />
                        <span className="text-xs font-mono uppercase text-neutral-500">{site.clientType || site.category}</span>
                      </div>
                      {site.featured && (
                        <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-bold uppercase tracking-wider">
                          Featured
                        </span>
                      )}
                    </div>

                    <CardTitle className="flex items-center gap-2">
                      {site.name}
                      <a href={`https://${site.url}`} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-emerald-400 transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </CardTitle>
                    
                    <CardDescription>
                      {site.hook || "A specialized platform solving unique business challenges."}
                    </CardDescription>

                    {/* Metrics / Problems Solved */}
                    <div className="mt-6 space-y-3">
                      {site.metric && (
                        <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                          <TrendingUp className="w-4 h-4" />
                          <span>{site.metric}</span>
                        </div>
                      )}
                      
                      {site.problems_solved && site.problems_solved.length > 0 && (
                        <ul className="space-y-1">
                          {site.problems_solved.slice(0, 2).map((prob, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-neutral-500">
                              <ShieldCheck className="w-3 h-3 mt-0.5 shrink-0 text-neutral-600" />
                              <span className="line-clamp-1">{prob}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* Footer: Tech Stack */}
                  <div className="mt-6 pt-4 border-t border-white/[0.1] flex flex-wrap gap-2">
                    {site.technologies ? (
                       site.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="px-2 py-1 rounded-md bg-neutral-900 border border-white/[0.1] text-[10px] text-neutral-400">
                          {tech}
                        </span>
                      ))
                    ) : (
                      <span className="px-2 py-1 rounded-md bg-neutral-900 border border-white/[0.1] text-[10px] text-neutral-400">
                        Web Platform
                      </span>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Call to Action Footer */}
        <div className="mt-16 text-center">
            <a 
              href="https://upwork.com" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-all shadow-[0_0_20px_-5px_rgba(16,185,129,0.5)]"
            >
              <Code2 className="w-4 h-4" />
              Start a Project
            </a>
        </div>
      </div>
    </section>
  );
}