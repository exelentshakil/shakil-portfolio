"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import {sites, getSiteImage, getSiteFallback, topSites, hiddenSites, Site} from "./data/sites";

import { ProjectsSection } from "./components/ProjectsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { DisclosureSection } from "./components/DisclosureSection";
import Image from "next/image";
import {FeaturedVideoTestimonial} from "@/app/components/FeaturedVideoTestimonial";
import {ExternalLink} from "lucide-react";

// GitHub Repo Interface
interface GitHubRepo {
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  created_at: string;
  fork: boolean;
  archived: boolean;
}

// Custom descriptions for projects
const CUSTOM_DESCRIPTIONS: Record<string, string> = {
  "seo-generator": "AI-powered SEO content generator using OpenAI API. Automatically creates meta titles, descriptions, and optimized content for websites.",
  "ai-tool": "Multi-purpose AI toolkit featuring content generation, image analysis, and text processing. Leverages GPT-4 API for intelligent automation.",
  "supplier-portal": "E-commerce supplier management system with Next.js frontend and Shopify integration. Features inventory tracking and order management.",
  "barakah-school-suite": "Comprehensive Islamic school management system with attendance, fee collection via SSLCommerz, and automated reports.",
  "Scholarship_Form": "Dynamic scholarship application platform with multi-step forms, document uploads, and admin review dashboard.",
  "heartcore-guardian": "Health monitoring dashboard for tracking vital signs and wellness metrics. Real-time data visualization with React.",
  "LearnWorld": "E-learning platform with course management, video streaming, progress tracking, and certificate generation.",
  "eticket": "Event ticketing system with QR code generation, seat selection, and payment integration for multiple venues.",
  "noonsmart": "Smart baby products e-commerce platform with Bengali localization and Facebook Pixel integration.",
  "gigify": "Freelance marketplace clone with service listings, order management, real-time messaging, and escrow payments.",
  "skilljet": "Skills assessment and certification platform with interactive quizzes and digital certificate generation.",
  "freelancer-network": "Professional networking platform for freelancers with profile showcase and project collaboration.",
  "eticket-api": "RESTful API for event ticketing system handling authentication, ticket validation, and payment webhooks.",
  "easycoupons": "Coupon and deal aggregation platform with web scraping and user-submitted coupons.",
  "airfare": "Flight booking comparison tool aggregating prices from multiple airlines with real-time search.",
  "react-shopping-cart": "Modern e-commerce shopping cart with React hooks and localStorage persistence.",
  "shopping-cart-server": "Node.js backend for e-commerce platform with Stripe payment integration."
};

const SKIP_REPOS = [
  "awesome-stock-resources", "elementor", "Switcheroo", "reactjs.org",
  "nuxt.js", "socket.io", "SumonMSelim", "exelentshakil", "vue", "cocoen",
  "awesome-laravel", "jwt-auth", "woocommerce", "the-php-practitioner",
  "ES6-Learning", "phpstorm-code-style", "Scrollify", "wedocs-plugin",
  "responsive-html-email-template", "airfare", "noonsmart"
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [githubRepos, setGithubRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Smooth scroll progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Mouse position for spotlight effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll handling for nav and scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowScrollTop(currentScrollY > 500);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Fetch GitHub repos with filtering
  useEffect(() => {
    fetch("https://api.github.com/users/exelentshakil/repos?per_page=200")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data
          .filter((repo: GitHubRepo) => 
            !SKIP_REPOS.includes(repo.name) &&
            !repo.fork &&
            !repo.archived
          )
          .map((repo: GitHubRepo) => ({
            ...repo,
            description: CUSTOM_DESCRIPTIONS[repo.name] || repo.description
          }))
          .filter((repo: GitHubRepo) => 
            repo.description && repo.description.trim() !== ""
          );
        
        setGithubRepos(filtered);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = ["all", "marketplace", "ecommerce", "healthcare", "legal", "sports", "agency", "business"];
  const featuredSites = topSites.filter(s => s.featured);
  const regularSites = topSites.filter(s => !s.featured);
  const [showAllSites, setShowAllSites] = useState(false);
  
  const displaySites = showAllSites ? [...regularSites, ...hiddenSites] : regularSites;
  
  const filteredSites = activeCategory === "all" 
    ? displaySites
    : displaySites.filter((site) => site.category === activeCategory);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Floating Glassmorphism Navigation */}
      <AnimatePresence>
        {navVisible && (
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="fixed top-4 left-0 right-0 z-50 px-6"
          >
            <div className="max-w-4xl mx-auto px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl">
              <div className="flex items-center justify-between">
                {/* Logo Space */}
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                    <span className="text-xl font-black text-white">
                        <Image src="/logo.png" alt="Shakil HQ"
                               width="90" height="90"/>
                    </span>
                  </div>
                </div>

                {/* Navigation Links */}
                <div className="flex items-center gap-8">
                  <a href="#hero" className="text-sm font-bold hover:text-purple-400 transition-colors hidden md:inline">Home</a>
                  <a href="#featured" className="text-sm font-semibold hover:text-purple-400 transition-colors hidden md:inline">Featured</a>
                  <a href="#portfolio" className="text-sm font-semibold hover:text-purple-400 transition-colors hidden md:inline">Portfolio</a>
                  <a href="#projects" className="text-sm font-semibold hover:text-purple-400 transition-colors hidden md:inline">Projects</a>
                  <a
                    href="https://calendly.com/shakilhq/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                  >
                    Book a Call
                  </a>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-purple-500/50 transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Spotlight effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 80%)`,
        }}
      />

      {/* Animated background grid */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      {/* Floating orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-24 relative">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full mb-8"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-green-400">Open for New Projects</span>
              </motion.div>

              {/* Pain-Point Headline */}
              <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="block text-white"
                >
                  Ship
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                >
                  production-ready
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="block text-white"
                >
                  web apps
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="block text-gray-400 text-4xl md:text-6xl mt-4"
                >
                  in weeks, not months
                </motion.span>
              </h1>

              {/* Client Carousel */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mb-12"
              >
                <p className="text-gray-500 text-sm mb-6 uppercase tracking-wider">Trusted by</p>
                <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
                  <ClientBadge icon="🏢" label="Legiit" metric="2M+ users" />
                  <ClientBadge icon="🏥" label="8+ Healthcare" metric="Practices" />
                  <ClientBadge icon="⚖️" label="5+ Law Firms" metric="Premium" />
                  <ClientBadge icon="🎯" label="8+ Agencies" metric="Marketing" />
                  <ClientBadge icon="⚽" label="12+ Sports" metric="Organizations" />
                </div>
              </motion.div>

              {/* Stats with Glassmorphism */}
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
                <GlassStatsCard number="115+" label="Projects Delivered" delay={0.9} />
                <GlassStatsCard number="99%" label="Client Satisfaction" delay={1.0} />
                <GlassStatsCard number="12+" label="Years Experience" delay={1.1} />
              </div>

              <motion.a
                href="https://calendly.com/shakilhq/30min"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-block px-12 py-5 rounded-full font-bold text-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center gap-2">
                  <span className="group-hover:hidden">Got an Idea?</span>
                  <span className="hidden group-hover:inline">Let's Do It</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </motion.a>
            </motion.div>
          </div>
        </section>
<ProjectsSection />
        {/* Featured Projects - 3D MacBook Showcase */}
        <section id="featured" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">

            {
              featuredSites.length > 1 && <SectionHeader 
              title="Featured Projects" 
              subtitle="Production systems serving millions"
            />
            }

            {
              featuredSites.length <= 1 && <SectionHeader 
              title="Featured Project" 
              subtitle="Production system serving millions"
            />
            
            }

            <div className="grid gap-12">
              {featuredSites.map((site, index) => (
                <FeaturedProjectCard key={site.url} site={site} index={index} />
              ))}
            </div>
          </div>
        </section>

          <FeaturedVideoTestimonial />

        {/* All Sites - 3D Sliders */}
        <section id="portfolio" className="py-32 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <SectionHeader 
              title="Proven Systems That Deliver Results" 
              subtitle="Real projects solving real business problems"
            />

            {/* Slider 2: Booking & Automation */}
            <div className="mb-24">
              <div className="mb-8">
                <h3 className="text-3xl font-black mb-3 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Booking Systems Processing 200+ Appointments Monthly
                </h3>
                <p className="text-gray-400 text-lg">
                  HIPAA-compliant scheduling, automated reminders, and patient management portals
                </p>
              </div>
              <InfiniteMovingCards
                items={regularSites.filter(s => 
                  s.category === 'healthcare' ||
                  s.hook?.includes('booking') ||
                  s.hook?.includes('appointment') ||
                  s.hook?.includes('scheduling') ||
                  s.hook?.includes('HIPAA')
                )}
                direction="left"
                speed="slow"
              />
            </div>

            {/* Slider 3: Lead Generation */}
            <div className="mb-24">
              <div className="mb-8">
                <h3 className="text-3xl font-black mb-3 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                  Marketing Sites Generating 50+ Qualified Leads Monthly
                </h3>
                <p className="text-gray-400 text-lg">
                  SEO-optimized lead generation, conversion funnels, and automated client acquisition
                </p>
              </div>
              <InfiniteMovingCards
                items={regularSites.filter(s => 
                  s.category === 'legal' ||
                  s.category === 'agency' ||
                  s.hook?.includes('lead') ||
                  s.hook?.includes('SEO') ||
                  s.hook?.includes('marketing') ||
                  s.metric?.includes('leads')
                )}
                direction="right"
                speed="slow"
              />
            </div>

        <DisclosureSection />
            {/* View All Button */}
            {!showAllSites && hiddenSites.length > 0 && (
              <div className="text-center">
                <button
                  onClick={() => setShowAllSites(true)}
                  className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 rounded-full font-bold transition-all"
                >
                  View All {sites.length} Projects →
                </button>
              </div>
            )}




            {/* Hidden Sites Grid */}
            {showAllSites && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-16"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {hiddenSites.map((site, index) => (
                      <SiteCard key={site.url} site={site} />
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* GitHub Projects */}
        <section id="projects" className="py-32 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <SectionHeader 
              title="Open Source Projects" 
              subtitle="Building in public on GitHub"
            />

            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500" />
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {githubRepos.slice(0, 18).map((repo, index) => (
                    <GitHubCard key={repo.name} repo={repo} index={index} />
                  ))}
                </div>

                <div className="text-center mt-16">
                  <a
                    href="https://github.com/exelentshakil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-gray-800 hover:border-purple-500 transition-all duration-300"
                  >
                    <span>View All on GitHub</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </>
            )}
          </div>
        </section>

        <TestimonialsSection /> {/* The trust builders */}

        {/* CTA Section */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-purple-600 to-cyan-600 rounded-3xl opacity-20 blur-xl" />
              
              <div className="relative text-center">
                <h2 className="text-5xl md:text-7xl font-black mb-6">
                  Ready to Build Something{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Amazing?
                  </span>
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                  Available 30+ hours per week for new projects. Let's turn your vision into reality.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a
                      href="https://www.upwork.com/freelancers/shakilhq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative px-10 py-5 rounded-full font-bold text-lg overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600" />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative z-10">Upwork</span>
                  </a>
                    <a
                        href="https://legiit.com/exelentshakil"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-10 py-5 rounded-full font-bold text-lg overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600" />
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="relative z-10">Legiit</span>
                    </a>

                      <a
                          href="https://www.freelancer.com/u/exelentshakil"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative px-10 py-5 rounded-full font-bold text-lg overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600" />
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="relative z-10">Freelancer</span>
                      </a>

                  <a
                    href="https://calendly.com/shakilhq/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-10 py-5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 font-bold text-lg hover:bg-white/20 transition-all duration-300"
                  >
                    Book
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-6 mt-12">
                  <a href="https://x.com/shakilhq" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/1shakilhq/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a href="https://www.youtube.com/@1shakilhq" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                  <a href="https://github.com/exelentshakil" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-12 px-6">
          <div className="max-w-7xl mx-auto text-center text-gray-500">
            <p>© 2026 Shakil HQ. Senior Full-Stack Engineer.</p>
            <p className="mt-2 text-sm">Built with Next.js, Framer Motion, and Tailwind CSS</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Glassmorphism Stats Card
function GlassStatsCard({ number, label, delay }: { number: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring" }}
      className="group relative"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500" />
      <div className="relative px-8 py-6 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10">
        <div className="text-4xl font-black bg-gradient-to-br from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          {number}
        </div>
        <div className="text-gray-400 text-sm mt-1">{label}</div>
      </div>
    </motion.div>
  );
}

// Client Badge Component
function ClientBadge({ icon, label, metric }: { icon: string; label: string; metric: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      className="flex flex-col items-center gap-2 px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-purple-500/30 transition-all"
    >
      <span className="text-3xl">{icon}</span>
      <div className="text-center">
        <div className="text-white font-bold text-sm">{label}</div>
        <div className="text-gray-500 text-xs">{metric}</div>
      </div>
    </motion.div>
  );
}

// Component: Section Header
function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
        {title}
      </h2>
      <p className="text-xl text-gray-500">{subtitle}</p>
    </motion.div>
  );
}

// Component: Featured Project Card (3D MacBook Effect)
function FeaturedProjectCard({ site, index }: { site: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500" />
      
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12 border border-gray-800"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div style={{ transform: "translateZ(50px)" }}>
            <div className="flex gap-3 mb-6">
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-bold backdrop-blur-sm border border-purple-500/20">
                {site.category.toUpperCase()}
              </span>
              {site.url === "legiit.com" && (
                <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-bold backdrop-blur-sm border border-cyan-500/20">
                  2M+ USERS
                </span>
              )}
            </div>

            <h3 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
              {site.name}
            </h3>

            {site.url === "legiit.com" && (
              <>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Led development of core platform features. Built payment processing, real-time analytics, 
                  and microservices architecture serving millions of users.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "Payment system handling thousands of transactions monthly",
                    "Database optimization: 800ms → 120ms response time",
                    "Scaled platform from 500K to 2M users",
                  ].map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 flex-wrap mb-8">
                  {["Laravel", "Django", "Node.js", "React/Next.js", "Tailwind CSS", "MySQL", "Redis", "AWS", "Celery", "Channels", "Kafka"].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-lg text-sm font-semibold border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </>
            )}

            <a
              href={`https://${site.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              <span>Visit {site.name}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div style={{ transform: "translateZ(75px)" }} className="relative">
            {/* MacBook Pro Mockup */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-xl opacity-30" />
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-2xl">
                <SiteImage site={site} />
              </div>
              {/* MacBook notch */}
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Component: Regular Site Card
export function SiteCard({ site }: { site: Site }) {
    const [hasError, setHasError] = useState(false);

    const imageSrc = getSiteImage(site);

    return (
        <a
            href={`https://${site.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-full bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1"
        >
            {/* --- IMAGE SECTION --- */}
            {/* Changed aspect ratio slightly to 16/9 for a more standard 'screen' look */}
            <div className="relative aspect-video overflow-hidden bg-neutral-800">

                {!hasError ? (
                    <Image
                        src={imageSrc}
                        alt={`Screenshot of ${site.name}`}
                        fill
                        // CHANGE 1: Added 'object-top' to align the screenshot to the top edge
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        onError={() => setHasError(true)}
                        // CHANGE 2: Lowered quality for thumbnails (saves bandwidth)
                        quality={75}
                        // CHANGE 3: Refined sizes for better mobile optimization in grids
                        sizes="(max-width: 640px) 95vw, (max-width: 1024px) 45vw, 30vw"
                    />
                ) : (
                    // --- FALLBACK GRADIENT ---
                    <div className={`w-full h-full bg-gradient-to-br ${getSiteFallback(site)} flex items-center justify-center`}>
            <span className="text-4xl font-bold text-white/30 group-hover:text-white/50 transition-colors">
              {site.name.charAt(0)}
            </span>
                    </div>
                )}

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white text-neutral-950 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        Visit Site <ExternalLink className="w-4 h-4" />
                    </div>
                </div>
            </div>

            {/* --- TEXT CONTENT (Unchanged) --- */}
            <div className="p-6">
                <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-500">
                {site.category}
            </span>
                    {site.metric && (
                        <span className="text-[10px] px-2 py-0.5 rounded border border-white/10 text-neutral-400 bg-white/5">
                    {site.metric}
                </span>
                    )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors truncate">
                    {site.name}
                </h3>

                <p className="text-neutral-400 text-sm line-clamp-2 mb-4">
                    {site.hook || `Custom solution built for ${site.clientType || "client"}.`}
                </p>

                {/* Tech Stack Pills */}
                {site.technologies && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {site.technologies.slice(0, 3).map((tech) => (
                            <span key={tech} className="text-[10px] px-2 py-1 rounded-md bg-white/5 text-neutral-500 border border-white/5">
                        {tech}
                    </span>
                        ))}
                    </div>
                )}
            </div>
        </a>
    );
}

// Component: GitHub Card with Spotlight
function GitHubCard({ repo, index }: { repo: GitHubRepo; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="absolute -inset-px bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
      
      <div className="relative h-full bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gray-800 group-hover:border-gray-700 transition-colors">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
              {repo.name}
            </h3>
            <p className="text-gray-400 text-sm line-clamp-2">
              {repo.description || "No description available"}
            </p>
          </div>
          
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>

        {/* Language & Topics */}
        <div className="flex gap-3 flex-wrap mb-4">
          {repo.language && (
            <span className={`px-3 py-1 ${getLanguageColor(repo.language)} rounded-full text-xs font-bold`}>
              {repo.language}
            </span>
          )}
          {repo.topics.slice(0, 3).map((topic) => (
            <span key={topic} className="px-3 py-1 bg-gray-800/50 backdrop-blur-sm rounded-full text-xs font-semibold border border-gray-700">
              #{topic}
            </span>
          ))}
        </div>

        {/* Code preview effect on hover */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-2xl pointer-events-none"
          />
        )}
      </div>
    </motion.div>
  );
}

// Component: Magnetic Button
function MagneticButton({ children, active, onClick }: { children: React.ReactNode; active: boolean; onClick: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouse}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
        active
          ? "bg-gradient-to-r from-purple-600 to-cyan-600 shadow-lg shadow-purple-500/50"
          : "bg-gray-900 border border-gray-800 hover:border-gray-700"
      }`}
    >
      {children}
    </motion.button>
  );
}

// Component: Site Image with Gradient Fallback
function SiteImage({ site, onError }: { site: any; onError?: () => void }) {
  const imageUrl = getSiteImage(site);

  if (!imageUrl) {
    return (
      <div className={`w-full h-full bg-gradient-to-br ${getSiteFallback(site)} flex items-center justify-center`}>
        <span className="text-6xl font-black text-white/50">
          {site.name.charAt(0)}
        </span>
      </div>
    );
  }

  return (
    <img
      src={imageUrl}
      alt={site.name}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      onError={onError}
    />
  );
}

// Infinite Moving Cards Slider Component
function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "slow",
}: {
  items: any[];
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "60s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
    >
      <div
        ref={scrollerRef}
        className={`flex min-w-full shrink-0 gap-6 py-4 w-max flex-nowrap ${
          start && "animate-scroll"
        }`}
      >
        {items.map((site, idx) => (
          <div
            key={idx}
            className="relative w-[350px] h-[420px] max-w-full flex-shrink-0"
          >
            <a
              href={`https://${site.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full"
            >
              <div className="relative h-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
                
                <div className="relative h-full bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 group-hover:border-gray-700 transition-colors flex flex-col">
                  {/* Image */}
                  <div className="aspect-video relative overflow-hidden bg-gray-900 flex-shrink-0">
                    <SiteImage site={site} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {site.clientType && (
                      <div className="mb-3">
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-bold uppercase border border-purple-500/30">
                          {site.clientType}
                        </span>
                      </div>
                    )}
                    
                    <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                      {site.name}
                    </h3>
                    
                    {site.hook ? (
                      <p className="text-gray-400 text-sm mb-3 line-clamp-2 flex-1">{site.hook}</p>
                    ) : (
                      <p className="text-gray-500 text-sm mb-3 flex-1">{site.url}</p>
                    )}
                    
                    {site.metric && (
                      <div className="flex items-center gap-2 text-sm mt-auto">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-green-400 font-semibold">{site.metric}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50%));
          }
        }

        .animate-scroll {
          animation: scroll var(--animation-duration, 60s) var(--animation-direction, forwards) linear infinite;
        }

        .scroller:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

// Helper: Category Badge Color
function getCategoryBadge(category: string) {
  const badges: Record<string, string> = {
    marketplace: "bg-purple-500/20 text-purple-300 border border-purple-500/20",
    ecommerce: "bg-amber-500/20 text-amber-300 border border-amber-500/20",
    healthcare: "bg-blue-500/20 text-blue-300 border border-blue-500/20",
    corporate: "bg-indigo-500/20 text-indigo-300 border border-indigo-500/20",
    legal: "bg-pink-500/20 text-pink-300 border border-pink-500/20",
    restaurant: "bg-orange-500/20 text-orange-300 border border-orange-500/20",
    sports: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/20",
    agency: "bg-violet-500/20 text-violet-300 border border-violet-500/20",
    education: "bg-green-500/20 text-green-300 border border-green-500/20",
  };
  return badges[category] || "bg-gray-500/20 text-gray-300 border border-gray-500/20";
}

// Helper: Language Color
function getLanguageColor(language: string) {
  const colors: Record<string, string> = {
    TypeScript: "bg-blue-600/20 text-blue-300 border border-blue-600/20",
    JavaScript: "bg-yellow-500/20 text-yellow-300 border border-yellow-500/20",
    Python: "bg-green-600/20 text-green-300 border border-green-600/20",
    PHP: "bg-purple-600/20 text-purple-300 border border-purple-600/20",
    HTML: "bg-orange-600/20 text-orange-300 border border-orange-600/20",
    CSS: "bg-blue-400/20 text-blue-200 border border-blue-400/20",
    Go: "bg-cyan-600/20 text-cyan-300 border border-cyan-600/20",
    Rust: "bg-orange-700/20 text-orange-200 border border-orange-700/20",
  };
  return colors[language] || "bg-gray-600/20 text-gray-300 border border-gray-600/20";
}