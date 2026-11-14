"use client";

import Image from "next/image";
import { AnimatePresence, animate, motion, useReducedMotion } from "framer-motion";
import { Check, Clock } from "lucide-react";
import { useEffect, useState } from "react";

function CountUp({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const [v, setV] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      setV(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (x) => setV(Math.round(x)),
    });
    return () => controls.stop();
  }, [to, reduce]);

  return (
    <>
      {prefix}
      {v.toLocaleString("en-US")}
      {suffix}
    </>
  );
}

const STATS = [
  { to: 15, suffix: "+", label: "Years engineering" },
  { to: 1, prefix: "$", suffix: "M", label: "ARR marketplace scaled" },
  { to: 400000, suffix: "+", label: "Users on the platform" },
  { to: 100, suffix: "%", label: "Upwork Job Success" },
];

const SHIPPING = [
  "Multi-LLM gateway with automatic failover",
  "RAG over pgvector with HNSW indexing",
  "MCP server with OAuth for Claude",
  "Escrow payouts with strict idempotency",
  "60+ edge functions behind row level security",
];

const STACK = [
  "Next.js",
  "React",
  "Laravel",
  "Python",
  "FastAPI",
  "Supabase",
  "PostgreSQL",
  "Redis",
  "Kafka",
  "Docker",
  "AWS",
  "Claude API",
];

const SCENES = ["Impact", "Shipping", "Stack"] as const;

function Impact() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {STATS.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08, duration: 0.35 }}
          className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
        >
          <p className="text-2xl font-bold tracking-tight text-white">
            <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} />
          </p>
          <p className="mt-1 text-xs text-[#98A2B3]">{s.label}</p>
        </motion.div>
      ))}
    </div>
  );
}

function Shipping() {
  return (
    <ul className="space-y-2.5">
      {SHIPPING.map((line, i) => (
        <motion.li
          key={line}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.18, duration: 0.35 }}
          className="flex items-start gap-2.5 text-sm text-[#D0D5DD]"
        >
          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
            <Check className="h-3 w-3" />
          </span>
          <span>{line}</span>
        </motion.li>
      ))}
    </ul>
  );
}

function Stack() {
  return (
    <div className="flex flex-wrap gap-2">
      {STACK.map((s, i) => (
        <motion.span
          key={s}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.05, duration: 0.25 }}
          className="rounded-md border border-white/10 bg-white/[0.06] px-2.5 py-1.5 text-xs font-medium text-[#D0D5DD]"
        >
          {s}
        </motion.span>
      ))}
    </div>
  );
}

export default function HeroShowcase() {
  const [scene, setScene] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setScene((s) => (s + 1) % SCENES.length), 4200);
    return () => clearInterval(id);
  }, [reduce, scene]);

  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-[#533AFD]/15 via-transparent to-emerald-400/10 blur-2xl" />
      <div className="overflow-hidden rounded-2xl border border-[#1D2939] bg-[#0D1738] shadow-2xl">
        {/* Window bar */}
        <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="ml-3 text-[11px] font-medium text-[#98A2B3]">shakilhq.com</span>
        </div>

        {/* Identity */}
        <div className="flex items-center gap-4 px-5 pt-5">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-white/20">
            <Image src="/shakil-headshot.jpeg" alt="Shakil Ahmed" fill sizes="56px" className="object-cover" priority />
          </div>
          <div className="min-w-0">
            <p className="text-base font-bold text-white">Shakil Ahmed</p>
            <p className="truncate text-xs text-[#98A2B3]">Senior Full-Stack &amp; AI Systems Engineer</p>
            <p className="mt-1 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Available for new projects
            </p>
          </div>
        </div>

        {/* Scene tabs */}
        <div className="mt-5 flex gap-1 px-5">
          {SCENES.map((name, i) => (
            <button
              key={name}
              type="button"
              onClick={() => setScene(i)}
              className={`rounded-md px-3 py-1.5 text-xs font-semibold transition ${
                scene === i ? "bg-white/10 text-white" : "text-[#98A2B3] hover:text-white"
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        {/* Scene */}
        <div className="relative h-[210px] px-5 pb-2 pt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={scene}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {scene === 0 && <Impact />}
              {scene === 1 && <Shipping />}
              {scene === 2 && <Stack />}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer strip */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 px-5 py-3 text-[11px] text-[#98A2B3]">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            Online weekdays from 9am US Eastern
          </span>
          <span>Legiit · No Half Cakes · BarakahSoft</span>
        </div>
      </div>
    </div>
  );
}
