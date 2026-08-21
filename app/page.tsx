"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ArrowDownRight, ArrowUpRight, Check, Github, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { sites, getSiteImage, Site } from "./data/sites";
import { TestimonialsSection } from "./components/TestimonialsSection";

type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
};

const proofData = [
  { label: "Launch", value: 18 },
  { label: "Scale", value: 42 },
  { label: "Optimize", value: 67 },
  { label: "Compound", value: 92 },
];

const selectedProjects = sites.filter((site) => site.featured || ["marketplace", "healthcare", "legal", "business", "sports"].includes(site.category)).slice(0, 8);

export default function PortfolioPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".reveal", { opacity: 0, y: 24, duration: 0.7, stagger: 0.08, ease: "power2.out" });
      gsap.from(".orbit-line", { scaleX: 0, transformOrigin: "left center", duration: 1.2, delay: 0.35, ease: "power3.out" });
    }, pageRef);

    fetch("https://api.github.com/users/exelentshakil/repos?per_page=12")
      .then((response) => response.json())
      .then((data: GitHubRepo[]) => setRepos(data.filter((repo) => repo.description).slice(0, 6)))
      .catch(() => setRepos([]));

    return () => context.revert();
  }, []);

  const featured = selectedProjects[0];
  const featuredImage = featured.name === "Legiit" ? "/screenshots/Legiit.png" : getSiteImage(featured);

  return (
    <main ref={pageRef} className="portfolio-page">
      <nav className="topbar">
        <a href="#top" className="brand-mark" aria-label="Shakil HQ home">
          <span className="brand-orbit"><span /></span>
          <span>SHAKIL<span className="brand-dim">/HQ</span></span>
        </a>
        <div className="topbar-links">
          <a href="#work">Selected work</a>
          <a href="#systems">Systems</a>
          <a href="#proof">Proof</a>
        </div>
        <a className="nav-cta" href="https://calendly.com/shakilhq/30min" target="_blank" rel="noreferrer">Start a project <ArrowUpRight size={15} /></a>
      </nav>

      <section id="top" className="launch-section">
        <div className="launch-glow" />
        <div className="launch-grid" />
        <div className="launch-copy reveal">
          <p className="eyebrow"><span className="status-dot" /> Senior full-stack engineer / systems architect</p>
          <h1>Build the thing<br /><em>that moves</em><br />your business.</h1>
          <p className="hero-lede">I turn ambitious ideas into production systems that are fast, resilient, and built to compound. From first commit to millions of users.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="https://calendly.com/shakilhq/30min" target="_blank" rel="noreferrer">Book a discovery call <ArrowUpRight size={17} /></a>
            <a className="text-link" href="#work">Explore the work <ArrowDownRight size={17} /></a>
          </div>
        </div>
        <div className="launch-instrument reveal" aria-label="Production system dashboard preview">
          <div className="instrument-header"><span>LIVE / PRODUCTION</span><span>01—04</span></div>
          <div className="instrument-title"><span>Legiit</span><span className="instrument-badge">MARKETPLACE</span></div>
          <div className="instrument-chart"><ResponsiveContainer width="100%" height="100%"><AreaChart data={proofData}><defs><linearGradient id="proofFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#111111" stopOpacity={0.18} /><stop offset="100%" stopColor="#111111" stopOpacity={0} /></linearGradient></defs><CartesianGrid stroke="#11111118" vertical={false} /><XAxis dataKey="label" axisLine={false} tickLine={false} tick={{ fill: "#707070", fontSize: 10 }} /><YAxis hide domain={[0, 100]} /><Tooltip contentStyle={{ background: "#ffffff", border: "1px solid #dedede", borderRadius: 0, color: "#111111" }} /><Area type="monotone" dataKey="value" stroke="#111111" strokeWidth={3} fill="url(#proofFill)" /></AreaChart></ResponsiveContainer></div>
          <div className="instrument-metrics"><div><strong>2M+</strong><span>active users</span></div><div><strong>99.9%</strong><span>reliability</span></div><div><strong>12 yrs</strong><span>in the arena</span></div></div>
          <div className="instrument-foot"><span><span className="signal" /> Systems nominal</span><span>Scale is a feature.</span></div>
        </div>
        <div className="scroll-cue"><span className="orbit-line" /> Scroll to enter the flight path <ArrowDownRight size={14} /></div>
      </section>

      <section id="proof" className="proof-strip">
        <div><strong>2M+</strong><span>users reached</span></div><div><strong>115+</strong><span>systems shipped</span></div><div><strong>99%</strong><span>client satisfaction</span></div><div><strong>12+</strong><span>years experience</span></div>
      </section>

      <section id="work" className="content-section work-section">
        <div className="section-heading reveal"><div><p className="eyebrow purple">01 / Selected missions</p><h2>Proof, not promises.</h2></div><p>Production work for founders, operators, and teams who need software to perform under pressure.</p></div>
        <article className="case-study reveal">
          <div className="case-copy"><div className="case-index">01</div><p className="eyebrow purple">Flagship system / 2M+ users</p><h3>{featured.name}</h3><p className="case-description">{featured.hook}. Architected the platform foundations, payments, analytics, and systems that let the marketplace scale safely.</p><ul>{(featured.problems_solved || []).map((problem) => <li key={problem}><Check size={15} />{problem}</li>)}</ul><div className="tag-row">{(featured.technologies || []).slice(0, 6).map((technology) => <span key={technology}>{technology}</span>)}</div><a className="text-link dark-link" href={`https://${featured.url}`} target="_blank" rel="noreferrer">View live system <ArrowUpRight size={16} /></a></div>
           <div className="case-visual"><Image src={featuredImage} alt={`Screenshot of ${featured.name}`} fill sizes="(max-width: 900px) 100vw, 58vw" className="case-image" priority /></div>
        </article>
      </section>

      <section id="systems" className="content-section systems-section">
        <div className="section-heading reveal"><div><p className="eyebrow purple">02 / The systems atlas</p><h2>Different industries.<br /><em>Same standard.</em></h2></div><p>Every build is treated like a product: clear architecture, obsessive performance, and a path from today&apos;s constraint to tomorrow&apos;s advantage.</p></div>
        <div className="project-grid">{selectedProjects.slice(1).map((site, index) => <ProjectCard key={site.url} site={site} index={index} />)}</div>
      </section>

      <section className="content-section capability-section">
        <div className="capability-intro reveal"><p className="eyebrow purple">03 / Flight systems</p><h2>Built for the<br /><em>long mission.</em></h2><p>Good software gets launched. Great software keeps creating leverage long after launch.</p></div>
        <div className="capability-grid"><Capability icon={<Layers3 />} title="Product architecture" text="Turn complex business logic into a system your team can understand, extend, and trust." /><Capability icon={<Sparkles />} title="Conversion systems" text="Build the flows, interfaces, and automation that move users from interest to action." /><Capability icon={<ShieldCheck />} title="Scale & reliability" text="Performance budgets, resilient infrastructure, and the engineering discipline to keep shipping." /></div>
      </section>

      <section className="content-section open-source-section">
        <div className="section-heading reveal"><div><p className="eyebrow purple">04 / Open source signal</p><h2>Always building.</h2></div><a className="text-link dark-link" href="https://github.com/exelentshakil" target="_blank" rel="noreferrer">Follow the lab <Github size={16} /></a></div>
        <div className="repo-grid">{repos.map((repo) => <a href={repo.html_url} target="_blank" rel="noreferrer" className="repo-card" key={repo.name}><div><Github size={17} /><ArrowUpRight size={15} /></div><strong>{repo.name}</strong><p>{repo.description}</p><span>{repo.language || "Build in public"}</span></a>)}</div>
      </section>

      <TestimonialsSection />

      <section className="final-cta reveal"><div><p className="eyebrow">Ready when you are</p><h2>Let&apos;s build<br /><em>your unfair advantage.</em></h2></div><div className="cta-contact"><a className="button button-primary" href="https://calendly.com/shakilhq/30min" target="_blank" rel="noreferrer">Book a discovery call <ArrowUpRight size={17} /></a><div><a href="mailto:hello@barakahsoft.com">hello@barakahsoft.com</a><a href="https://wa.me/13075336678" target="_blank" rel="noreferrer">WhatsApp +1 (307) 533-6678</a></div></div></section>
      <footer className="footer"><span>© 2026 Shakil HQ</span><span>30 N. Gould St. Ste R, Sheridan, WY 82801</span><a href="tel:+13075336678">+1 (307) 533-6678 <ArrowUpRight size={14} /></a></footer>
    </main>
  );
}

function ProjectCard({ site, index }: { site: Site; index: number }) {
  return <a className={`project-card project-card-${index % 4}`} href={`https://${site.url}`} target="_blank" rel="noreferrer"><div className="project-image"><Image src={getSiteImage(site)} alt={`Screenshot of ${site.name}`} fill sizes="(max-width: 700px) 100vw, 33vw" /></div><div className="project-info"><div><span className="project-category">{site.category}</span><ArrowUpRight size={16} /></div><h3>{site.name}</h3><p>{site.hook || site.clientType}</p>{site.metric && <strong>{site.metric}</strong>}</div></a>;
}

function Capability({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return <article className="capability reveal"><div className="capability-icon">{icon}</div><h3>{title}</h3><p>{text}</p></article>;
}
