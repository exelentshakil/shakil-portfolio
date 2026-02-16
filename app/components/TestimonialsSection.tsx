"use client";

import { motion } from "framer-motion";
import { Quote, Star, Terminal, Cpu, Zap } from "lucide-react";
import Image from "next/image"; // Imported Next.js Image component
import { cn } from "../lib/utils";

// ------------------------------------------------------------------
// 1. Data: The "Engineering First" Reviews
// ------------------------------------------------------------------
const testimonials = [
    {
        name: "Chris M. Walker",
        role: "CEO, Legiit.com",
        image: "/chris.jpeg", // Refers to public/chris.jpeg
        content:
            "Most developers just write code; he thinks in systems. Legiit isn't a simple website; it's a complex marketplace with intricate financial logic. He didn't just patch features together—he engineered the architecture that allows us to scale safely. I don't need a freelancer; I need an engineering partner. That is what he is.",
        highlight: "CEO",
        icon: <Terminal className="w-4 h-4" />
    },
    {
        name: "Jim Sabellico",
        role: "Founder, No Half Cakes",
        image: "/jim.jpeg", // Refers to public/jim.jpeg
        content:
            "When I land high-stakes clients like Steve Weatherford, I can't afford 'trial and error.' I bring him in because he brings an engineering discipline to agency chaos. He was the technical lead behind our biggest deployments because I know the code will be clean, the database optimized, and the delivery flawless.",
        highlight: "Owner",
        icon: <Cpu className="w-4 h-4" />
    },
    {
        name: "Steve Weatherford",
        role: "Super Bowl Champ & Entrepreneur",
        image: "/steve.jpeg", // Refers to public/steve.jpeg
        content:
            "I don't know the code, I just know that my platform needs to perform as hard as I do. The team delivered a digital HQ that handles my traffic, my content, and my sales without blinking. It feels solid, fast, and professional. That's the standard.",
        highlight: "Celeb.",
        isCelebrity: true,
        icon: <Zap className="w-4 h-4" />
    },
];

// ------------------------------------------------------------------
// 2. UI Helper Components
// ------------------------------------------------------------------
const StarRating = () => (
    <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
        ))}
    </div>
);

// ------------------------------------------------------------------
// 3. Main Component
// ------------------------------------------------------------------
export function TestimonialsSection() {
    return (
        <section className="py-24 bg-neutral-950 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Engineering <span className="text-emerald-500">Mindset</span>, Not Just Code
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                        Clients don't hire me to just "build a website."
                        They hire me to architect solutions, solve complex business logic,
                        and ensure technical stability for their most important projects.
                    </p>
                </div>

                {/* The Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            className={cn(
                                "relative group rounded-3xl p-8 h-full flex flex-col justify-between",
                                "bg-neutral-900/50 border border-white/10 hover:border-emerald-500/50 transition-colors duration-300",
                                testimonial.isCelebrity && "bg-gradient-to-b from-neutral-900/80 to-purple-900/10 border-purple-500/20 hover:border-purple-500/50"
                            )}
                        >
                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                            <div>
                                {/* Quote Icon */}
                                <div className="mb-10 relative">
                                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                        <Quote className="w-5 h-5 text-emerald-500" />
                                    </div>
                                </div>

                                <StarRating />

                                {/* The Review */}
                                <p className="text-neutral-300 leading-relaxed mb-8 relative z-10 text-sm md:text-base">
                                    "{testimonial.content}"
                                </p>
                            </div>

                            {/* Footer: User Info & Metric */}
                            <div className="pt-6 border-t border-white/10 flex items-center justify-between mt-auto">
                                <div className="flex items-center gap-3">
                                    {/* Image Container */}
                                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                                        <p className="text-neutral-500 text-xs">{testimonial.role}</p>
                                    </div>
                                </div>

                                {/* Key Stat/Badge */}
                                <div className={cn(
                                    "flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border",
                                    testimonial.isCelebrity
                                        ? "bg-purple-500/10 text-purple-400 border-purple-500/20"
                                        : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                                )}>
                                    {testimonial.icon}
                                    <span>{testimonial.highlight}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}