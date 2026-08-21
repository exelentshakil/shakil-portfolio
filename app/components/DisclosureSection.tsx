"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Handshake, Info } from "lucide-react";

export function DisclosureSection() {
    return (
        <div className="max-w-4xl mx-auto px-6 mb-16">

            {/* 1. Main Transparency Card (The "Flex") */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative rounded-[4px] bg-white border border-slate-200 p-8 md:p-10 overflow-hidden mb-4"
            >
                {/* Decorative Background Element */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-emerald-500/10 blur-[60px] rounded-full pointer-events-none" />

                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center relative z-10">

                    {/* Icon Badge */}
                    <div className="shrink-0">
                        <div className="w-14 h-14 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center shadow-lg shadow-black/50">
                            <ShieldCheck className="w-6 h-6 text-emerald-500" />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-neutral-200 flex items-center gap-2">
                            Transparency & Attribution
                        </h3>

                        <div className="text-sm md:text-base text-neutral-400 leading-relaxed space-y-2">
                            <p>
                                Integrity is the foundation of my work. Please note that many of the large-scale projects and case studies featured in this portfolio—including Legiit, Steve Weatherford, and others—were architected and executed during my tenure as the <span className="text-emerald-400 font-medium">Lead Technical Architect</span> at <span className="text-white font-medium">No Half Cakes</span>.
                            </p>
                            <p>
                                I was the technical engine behind these brands, delivering agency-level results with enterprise reliability.
                            </p>
                        </div>

                        {/* The "I can do it for you" Hook */}
                        <div className="pt-2 flex items-center gap-2 text-emerald-500 text-sm font-medium">
                            <Handshake className="w-4 h-4" />
                            <span>Now, I bring that same agency-grade execution directly to your project.</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 2. The Design Disclaimer (Subtle / Professional) */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex gap-4 items-start px-4 py-3 md:px-6"
            >
                <Info className="w-5 h-5 text-neutral-600 mt-0.5 shrink-0" />
                <p className="text-xs md:text-sm text-neutral-500 leading-relaxed">
                    <span className="text-neutral-400 font-semibold">Production Reality:</span> These case studies feature live, production systems built to solve specific business problems. Visual styles reflect client branding requirements, conversion strategies, and the design standards at the time of deployment. My focus is on the architecture that drives the revenue.
                </p>
            </motion.div>

        </div>
    );
}
