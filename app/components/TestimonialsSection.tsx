"use client";

import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  { name: "Chris M. Walker", role: "CEO, Legiit.com", image: "/chris.jpeg", content: "Most developers just write code; he thinks in systems. Legiit isn't a simple website; it's a complex marketplace with intricate financial logic. He didn't just patch features together—he engineered the architecture that allows us to scale safely. I don't need a freelancer; I need an engineering partner. That is what he is." },
  { name: "Jim Sabellico", role: "Founder, No Half Cakes", image: "/jim.jpeg", content: "When I land high-stakes clients like Steve Weatherford, I can't afford 'trial and error.' I bring him in because he brings an engineering discipline to agency chaos. He was the technical lead behind our biggest deployments because I know the code will be clean, the database optimized, and the delivery flawless." },
  { name: "Steve Weatherford", role: "Super Bowl Champ & Entrepreneur", image: "/steve.jpeg", content: "I don't know the code, I just know that my platform needs to perform as hard as I do. The team delivered a digital HQ that handles my traffic, my content, and my sales without blinking. It feels solid, fast, and professional. That's the standard." },
];

export function TestimonialsSection() {
  return <section className="testimonial-section"><div className="testimonial-inner"><div className="section-heading"><div><p className="eyebrow purple">05 / Field notes</p><h2>Trusted by people<br /><em>who ship.</em></h2></div><p>High-stakes work needs a partner who can see the whole system, not just the ticket in front of them.</p></div><div className="testimonial-grid">{testimonials.map((testimonial) => <article className="testimonial-card" key={testimonial.name}><Quote className="quote-mark" size={28} /><p className="testimonial-copy">&quot;{testimonial.content}&quot;</p><div className="testimonial-person"><div className="testimonial-avatar"><Image src={testimonial.image} alt={testimonial.name} fill sizes="48px" /></div><div><strong>{testimonial.name}</strong><span>{testimonial.role}</span></div></div></article>)}</div></div></section>;
}
