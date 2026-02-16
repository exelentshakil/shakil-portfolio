"use client";

import { motion } from "framer-motion";
import { Quote, TrendingUp, ShieldCheck, Play } from "lucide-react";
import Image from "next/image";

// ------------------------------------------------------------------
// CONFIGURATION
// ------------------------------------------------------------------
const VIDEO_ID = "VdPptVpxMPM"; // <--- PASTE ID HERE
const VIDEO_TITLE = "Legiit CEO Chris Walker Review";

export function FeaturedVideoTestimonial() {
    return (
        <section className="py-32 bg-neutral-950 relative overflow-hidden">

            {/* 1. VIBRANT BACKGROUND FX */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Top Center Spotlight */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-emerald-500/10 blur-[120px] rounded-full" />
                {/* Bottom accents */}
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[100px] rounded-full" />
                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 mix-blend-overlay"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                {/* 2. CENTERED HEADER: High Impact Typography */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-8 shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
                        CEO Verified Partner
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                        "Shaq actually <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">works with us</span> on Legiit."
                    </h2>

                    <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                        Trusted by the CEO to architect the platform itself. Not just a freelancer, but a core engineering partner.
                    </p>
                </motion.div>

                {/* 3. THE CINEMATIC VIDEO CONTAINER */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative max-w-5xl mx-auto mb-16 group"
                >
                    {/* Intense Glow Behind */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

                    {/* The Player Frame */}
                    <div className="relative rounded-2xl overflow-hidden bg-neutral-900 ring-1 ring-white/10 shadow-2xl aspect-video">
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`}
                            title={VIDEO_TITLE}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                        ></iframe>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-12 -right-12 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl hidden md:block"></div>
                    <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl hidden md:block"></div>
                </motion.div>


                {/* 4. THE TRUST GRID: Connecting the Video to Value */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Card 1: The Quote */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-2 p-8 rounded-3xl bg-neutral-900/50 border border-white/5 relative group hover:border-emerald-500/20 transition-colors"
                    >
                        <Quote className="absolute top-8 right-8 w-10 h-10 text-white/5 rotate-12 group-hover:text-emerald-500/10 transition-colors" />
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full border border-white/10 relative overflow-hidden">
                                <Image src="/chris.jpeg" alt="Chris M. Walker" fill className="object-cover" />
                            </div>
                            <div>
                                <div className="text-white font-bold">Chris M. Walker</div>
                                <div className="text-emerald-500 text-sm">CEO, Legiit.com</div>
                            </div>
                        </div>
                        <p className="text-neutral-300 italic text-lg leading-relaxed">
                            "Most people don't know this, but Shaq is the man. He builds the platform itself... He didn't just patch features together—he engineered the architecture that allows us to scale safely."
                        </p>
                    </motion.div>

                    {/* Card 2: The Vertical Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col gap-4"
                    >
                        <div className="flex-1 p-6 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 flex items-center gap-4 hover:bg-emerald-500/10 transition-colors">
                            <div className="bg-emerald-500/20 p-3 rounded-full text-emerald-400">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold">Platform Architect</h4>
                                <p className="text-neutral-400 text-xs">Core Logic & Security</p>
                            </div>
                        </div>

                        <div className="flex-1 p-6 rounded-3xl bg-purple-500/5 border border-purple-500/10 flex items-center gap-4 hover:bg-purple-500/10 transition-colors">
                            <div className="bg-purple-500/20 p-3 rounded-full text-purple-400">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold">Revenue Engineer</h4>
                                <p className="text-neutral-400 text-xs">Features that Sell</p>
                            </div>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}