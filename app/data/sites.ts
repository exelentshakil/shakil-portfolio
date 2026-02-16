import slugify from 'slugify';


export interface Site {
  name: string;
  url: string;
  category: "marketplace" | "agency" | "business" | "lifestyle" | "healthcare" | "legal" | "sports" | "ecommerce";
  image?: string;
  featured?: boolean;
  
  // Upwork hooks
  clientType?: string;
  hook?: string;
  problems_solved?: string[];
  metric?: string;
  technologies?: string[];
}

export const sites: Site[] = [
  // --------------------------------------------------------------------------
  // FEATURED
  // --------------------------------------------------------------------------
  { 
    name: "Legiit", 
    url: "legiit.com", 
    category: "marketplace",
    featured: true,
    image: "https://barakahsoft.com/wp-content/uploads/2026/01/legiit-1-scaled.jpeg",
    clientType: "Freelance Marketplace Platform",
    hook: "Payment processing handling 1000+ transactions daily",
    problems_solved: [
      "Stripe & PayPal integration with automated escrow system",
      "Real-time analytics dashboard for sellers and buyers",
      "Scaled platform from 500K to 2M users with zero downtime"
    ],
    metric: "2M+ active users",
    technologies: ["Laravel", "Django", "Node.js", "React", "MySQL", "Redis", "AWS", "Celery", "Channels"]
  },

  // --------------------------------------------------------------------------
  // MARKETPLACE
  // --------------------------------------------------------------------------

  { 
    name: "Legiit Advertising", 
    url: "advertise.legiit.com", 
    category: "marketplace",
    clientType: "Ad Management Portal",
    hook: "Self-serve ad purchasing for marketplace sellers",
    problems_solved: [
      "Automated ad slot booking system",
      "Impression and click-tracking dashboard",
      "Integration with main marketplace wallet"
    ],
    metric: "Automated Ad Sales",
    technologies: ["Laravel", "Stripe API", "Real-time Analytics"]
  },
  { 
    name: "Legiit Shop", 
    url: "shop.legiit.com", 
    category: "marketplace",
    clientType: "Merchandise Store",
    hook: "Brand swag store with global fulfillment integration",
    problems_solved: [
      "Print-on-demand API integration",
      "Inventory synchronization",
      "Loyalty point redemption for merchandise"
    ],
    technologies: ["Wordpress", "Custom Design", "POD Integration"]
  },

  // --------------------------------------------------------------------------
  // AGENCY
  // --------------------------------------------------------------------------
  { 
    name: "SuperStar SEO", 
    url: "superstarseo.com", 
    category: "agency",
    clientType: "SEO Marketing Agency",
    hook: "Local SEO campaigns ranking clients in top 3",
    problems_solved: [
      "Google Business Profile optimization for local rankings",
      "Citation building across 50+ directories",
      "Review management automation"
    ],
    metric: "#1 Rankings Achieved",
    technologies: ["WordPress", "SEO Tools", "Schema Markup"]
  },
  { 
    name: "Prescription PR", 
    url: "prescriptionpr.com", 
    category: "agency",
    clientType: "Healthcare PR Firm",
    hook: "Reputation management for 100+ medical professionals",
    problems_solved: [
      "Crisis management and press release distribution",
      "Social media automation for doctors",
      "Doctor-patient communication portals"
    ],
    metric: "100+ Clients Managed",
    technologies: ["WordPress", "Social APIs", "Analytics"]
  },
  { 
    name: "Easy Agency Builder", 
    url: "easyagencybuilder.com", 
    category: "agency",
    clientType: "SaaS Product",
    hook: "White-label website builder for marketing agencies",
    problems_solved: [
      "Rapid deployment of agency client sites",
      "Pre-built industry specific templates",
      "Integrated hosting and maintenance dashboard"
    ],
    metric: "Reduced Dev Time by 80%",
    technologies: ["SaaS Architecture", "Cloud Hosting", "React"]
  },

  // --------------------------------------------------------------------------
  // HEALTHCARE
  // --------------------------------------------------------------------------
  { 
    name: "Broadway Diagnostic & Rehabilitation", 
    url: "broadwaychiropt.com", 
    category: "healthcare",
    clientType: "Chiropractic Practice",
    hook: "Online booking system processing 200+ appointments monthly",
    problems_solved: [
      "HIPAA-compliant patient scheduling",
      "Automated SMS and email appointment reminders",
      "Insurance verification integration"
    ],
    metric: "200+ monthly bookings",
    technologies: ["WordPress", "Booking System", "Twilio API"]
  },
  { 
    name: "Heart Screen", 
    url: "heartscreennewyork.com", 
    category: "healthcare",
    clientType: "Cardiac Diagnostic Center",
    hook: "Patient portal with secure test result delivery",
    problems_solved: [
      "HIPAA-compliant document sharing",
      "Online test result access for patients",
      "Multi-location appointment scheduling"
    ],
    technologies: ["Secure Portal", "SSL/Encryption", "PHP"]
  },
  { 
    name: "Infusalounge", 
    url: "infusalounge.com", 
    category: "healthcare",
    clientType: "IV Therapy Clinic",
    hook: "Membership subscription system with recurring billing",
    problems_solved: [
      "Automated recurring payment processing",
      "Member portal with booking privileges",
      "Package and membership management"
    ],
    technologies: ["WooCommerce Subscriptions", "WordPress", "Stripe"]
  },
  { 
    name: "MJB Wellness Center", 
    url: "mjbwellnesscenter.com", 
    category: "healthcare",
    clientType: "Multi-Service Wellness Center",
    hook: "Multi-practitioner scheduling system",
    problems_solved: [
      "Calendar management for 5+ practitioners",
      "Service-based booking with duration control",
      "Patient intake forms and history tracking"
    ],
    technologies: ["WordPress", "Form Builder", "Calendar API"]
  },
  { 
    name: "Ortho Spine Care LI", 
    url: "orthospinecareli.com", 
    category: "healthcare",
    clientType: "Orthopedic Practice",
    hook: "Patient education portal with treatment guides",
    problems_solved: [
      "Educational content management system",
      "Treatment plan documentation",
      "Before/after gallery for procedures"
    ],
    technologies: ["WordPress", "Gallery Plugin", "SEO"]
  },
  { 
    name: "Dr. Sophia Argeropoulos", 
    url: "portjeffchiro.com", 
    category: "healthcare",
    clientType: "Chiropractic Practice",
    hook: "Local SEO success - ranking #1 for 'Port Jeff chiropractor'",
    problems_solved: [
      "Google Business Profile optimization",
      "Local citation building",
      "Review generation and management"
    ],
    metric: "#1 Local Ranking",
    technologies: ["Local SEO", "WordPress", "Schema"]
  },
  { 
    name: "Express Diagnostics", 
    url: "expdiag.com", 
    category: "healthcare",
    clientType: "Diagnostic Testing Center",
    hook: "Insurance eligibility verification system",
    problems_solved: [
      "Real-time insurance verification",
      "Multi-location test scheduling",
      "Lab result delivery portal"
    ],
    technologies: ["API Integration", "Secure Forms", "PHP"]
  },
  { 
    name: "Doctor Matthew Olesiak", 
    url: "matthewolesiak.com", 
    category: "healthcare", 
    clientType: "Medical Consultant Brand",
    hook: "Personal brand site for Medical Director/Entrepreneur",
    problems_solved: [
      "Thought leadership content distribution",
      "Media kit and press appearance showcasing",
      "Consulting inquiry funnels"
    ],
    technologies: ["WordPress", "Personal Branding", "Blog"]
  },
  { 
    name: "Dr Brian Capogna", 
    url: "briancapognamd.com", 
    category: "healthcare",
    clientType: "Orthopedic Surgeon",
    hook: "High-conversion site for Top Doctor (Castle Connolly)",
    problems_solved: [
      "Integration with ZocDoc/Healthgrades reviews",
      "Detailed procedure encyclopedias",
      "Accessibility compliance (ADA) for medical sites"
    ],
    metric: "Castle Connolly Top Doctor",
    technologies: ["WordPress", "Accessibility Tools", "Video"]
  },
  { 
    name: "Dr. Dennis Long", 
    url: "chiropractorinjamaicany.com", 
    category: "healthcare",
    clientType: "Chiropractic Practice",
    hook: "Hyper-local lead generation site",
    problems_solved: [
      "Geo-targeted SEO for Jamaica, Queens",
      "Click-to-call mobile optimization",
      "New patient special offer landing pages"
    ],
    technologies: ["Local SEO", "Landing Pages", "Call Tracking"]
  },
  { 
    name: "Dr Jay Riess", 
    url: "drjayriesschiropractor.com", 
    category: "healthcare",
    clientType: "Chiropractic Practice",
    hook: "Rehabilitation service showcase",
    problems_solved: [
      "Service-specific landing pages (Sciatica, Neck Pain)",
      "Integration with practice management software",
      "Patient testimonial video archive"
    ],
    technologies: ["WordPress", "Video Embedding", "SEO"]
  },
  { 
    name: "GetYouInShape", 
    url: "www.getyouinshape.com", 
    category: "healthcare",
    clientType: "Fitness & Wellness Program",
    hook: "Bootcamp registration and transformation tracking",
    problems_solved: [
      "Online liability waiver signing",
      "Success story/transformation gallery",
      "Integration with email marketing automation (AWeber/Mailchimp)"
    ],
    technologies: ["Forms", "Email Marketing", "WordPress"]
  },
  { 
    name: "Ligament Laxity Analysis", 
    url: "ligamentlaxityanalysis.com", 
    category: "healthcare",
    clientType: "Medical Software Sales",
    hook: "Sales platform for 'LigMaster' diagnostic software",
    problems_solved: [
      "Technical product specification display",
      "Software demo request workflow",
      "Distributor/reseller portal access"
    ],
    metric: "Niche Medical Tool",
    technologies: ["B2B Sales", "Lead Gen", "HTML/CSS"]
  },
  { 
    name: "Matthew Olesiak", 
    url: "drmatthewolesiak.com", 
    category: "healthcare",
    clientType: "Personal Brand",
    hook: "Showcase for CEO of Atlas Medical Marketing",
    problems_solved: [
      "Cross-linking to multiple business ventures",
      "Speaking engagement booking",
      "Article and publication library"
    ],
    technologies: ["WordPress", "Bio Page", "Social Aggregation"]
  },
  { 
    name: "Movement Concepts", 
    url: "movementconceptspt.com", 
    category: "healthcare",
    clientType: "Physical Therapy Clinic",
    hook: "Multi-location PT clinic site",
    problems_solved: [
      "Location finder with map integration",
      "Insurance acceptance search tool",
      "Downloadable patient intake packets"
    ],
    technologies: ["Google Maps API", "PDF Generation", "WordPress"]
  },
  { 
    name: "Optimize Wellness", 
    url: "optimizewellnesssolutions.com", 
    category: "healthcare",
    clientType: "Holistic Health Center",
    hook: "E-commerce for wellness supplements",
    problems_solved: [
      "WooCommerce shop for private label supplements",
      "Virtual consultation booking",
      "Health assessment quizzes"
    ],
    technologies: ["WooCommerce", "Quiz Plugin", "Scheduling"]
  },
  { 
    name: "Skin Apeel", 
    url: "skinapeel.com", 
    category: "healthcare",
    clientType: "Day Spa & Salon",
    hook: "Award-winning spa site (Boca Raton)",
    problems_solved: [
      "Gift card purchasing system",
      "Interactive service menu with pricing",
      "Mobile-responsive gallery of spa facilities"
    ],
    metric: "20+ Years in Business",
    technologies: ["WordPress", "E-commerce", "Gallery"]
  },
  { 
    name: "Wellpower Method", 
    url: "wellpowermethod.com", 
    category: "healthcare",
    clientType: "Health Coaching Program",
    hook: "Membership site for health coaching",
    problems_solved: [
      "Gated content for program members",
      "Weekly meal plan downloads",
      "Community forum integration"
    ],
    technologies: ["MemberPress", "Forum", "WordPress"]
  },
  { 
    name: "Assostefano Bambini E Marfan", 
    url: "www.assostefano-bambiniemarfan.it", 
    category: "healthcare",
    clientType: "Non-Profit Organization",
    hook: "Italian non-profit for Marfan Syndrome",
    problems_solved: [
      "Donation collection via PayPal/Credit Card",
      "Event calendar for fundraising",
      "Multi-language support (Italian/English)"
    ],
    technologies: ["Donation API", "Calendar", "WordPress"]
  },

  // --------------------------------------------------------------------------
  // LEGAL
  // --------------------------------------------------------------------------
  { 
    name: "Neblett Law", 
    url: "neblettlaw.com", 
    category: "legal",
    clientType: "Personal Injury Law Firm",
    hook: "Lead generation site bringing 50+ qualified leads monthly",
    problems_solved: [
      "SEO optimization ranking top 3 for high-value keywords",
      "Contact form with instant case evaluation",
      "Mobile-first design for on-the-go clients"
    ],
    metric: "50+ leads/month",
    technologies: ["WordPress", "SEO", "Lead Forms"]
  },
  { 
    name: "Flowers Law Group NY", 
    url: "flowerslawny.com", 
    category: "legal",
    clientType: "Family Law Practice",
    hook: "Client intake automation reducing admin time by 60%",
    problems_solved: [
      "Automated client intake forms",
      "Document upload portal",
      "Secure client communication system"
    ],
    technologies: ["Secure Forms", "Legal CRM", "WordPress"]
  },
  { 
    name: "Insurance Loss Lawyer", 
    url: "insurancelosslawyer.com", 
    category: "legal",
    clientType: "Niche Legal Lead Gen",
    hook: "Targeted landing page for high-value insurance claims",
    problems_solved: [
      "High-conversion copywriting for distress cases",
      "Click-to-call integration",
      "Speed-optimized for mobile 4G access"
    ],
    technologies: ["Landing Page", "Call Tracking", "SEO"]
  },
  { 
    name: "JDB Mediation", 
    url: "jdbmediation.com", 
    category: "legal",
    clientType: "Mediation Services",
    hook: "Personal branding for Justin Borer, Mediator",
    problems_solved: [
      "Appointment scheduling integration",
      "Resource library for divorce mediation",
      "Video introduction and explainer content"
    ],
    technologies: ["WordPress", "Video", "Scheduling"]
  },
  { 
    name: "Miami Maritime Law", 
    url: "miamimaritimelaw.com", 
    category: "legal",
    clientType: "Maritime Law Firm",
    hook: "Dominating niche SEO for 'Miami Boat Lawyer'",
    problems_solved: [
      "Specialized content for Admiralty Law",
      "Case result showcases (Million dollar verdicts)",
      "24/7 Emergency contact routing"
    ],
    metric: "High Value Verdicts",
    technologies: ["SEO", "Emergency Routing", "WordPress"]
  },

  // --------------------------------------------------------------------------
  // SPORTS
  // --------------------------------------------------------------------------
  { 
    name: "Long Island Loyalty", 
    url: "longislandloyalty.com", 
    category: "sports",
    clientType: "Youth Sports Organization",
    hook: "Registration system processing 500+ signups per season",
    problems_solved: [
      "Online registration with payment processing",
      "Team roster management and scheduling",
      "Parent communication portal"
    ],
    metric: "500+ registrations/season",
    technologies: ["Registration System", "Payment Gateway", "Database"]
  },
  { 
    name: "Steve Weatherford", 
    url: "thesteveweatherford.com", 
    category: "sports",
    clientType: "Professional Athlete Brand",
    hook: "Personal brand website with training program sales",
    problems_solved: [
      "E-commerce for digital training programs",
      "Video content management",
      "Email marketing integration"
    ],
    technologies: ["Wordpress/WooCommerce", "Video", "Marketing Automation"]
  },
  { 
    name: "Inside The Game Sports", 
    url: "insidethegamesports.com", 
    category: "sports",
    clientType: "Sports Media Platform",
    hook: "Content management system for sports journalism",
    problems_solved: [
      "Multi-author content platform",
      "Video and podcast hosting",
      "Subscription paywall system"
    ],
    technologies: ["WordPress", "Podcast Feed", "Membership"]
  },
  { 
    name: "Legacy Longhorns", 
    url: "longhorns.team", 
    category: "sports",
    clientType: "Youth Football & Cheer",
    hook: "Non-profit community team management",
    problems_solved: [
      "Donation and sponsorship processing",
      "Game schedule calendar sync",
      "Volunteer signup workflows"
    ],
    technologies: ["Calendar", "Donations", "WordPress"]
  },
  { 
    name: "Wall Baller", 
    url: "wallballer.com", 
    category: "sports",
    clientType: "Mobile Game Landing Page",
    hook: "Official site for Lacrosse-themed iOS Arcade Game",
    problems_solved: [
      "App Store conversion optimization",
      "Gameplay video trailers",
      "Support and changelog ticketing"
    ],
    metric: "iOS App Store Launch",
    technologies: ["Landing Page", "Video Background", "App Store API"]
  },
  { 
    name: "Baileys Dog Park", 
    url: "baileysdogpark.com", 
    category: "sports",
    clientType: "Community Park",
    hook: "Membership verification for private dog park",
    problems_solved: [
      "Vaccination record upload and verification",
      "Key fob access management integration",
      "Recurring membership billing"
    ],
    technologies: ["Membership Forms", "File Uploads", "Payments"]
  },
  { 
    name: "LaxEdits", 
    url: "laxedits.com", 
    category: "sports",
    clientType: "Video Production Service",
    hook: "High-energy recruiting videos for college athletes",
    problems_solved: [
      "Large video file submission portal",
      "Portfolio gallery of high-def sports edits",
      "Package pricing and checkout"
    ],
    technologies: ["Video Hosting", "File Transfer", "E-commerce"]
  },
  { 
    name: "Massapequa Farmingdale Mens Club", 
    url: "massapequafarmingdalemensclub.com", 
    category: "sports",
    clientType: "Social Club",
    hook: "Event management for local men's club",
    problems_solved: [
      "Event RSVP and ticketing",
      "Photo galleries from past events",
      "Newsletter subscription management"
    ],
    technologies: ["Events Calendar", "Gallery", "Email"]
  },
  { 
    name: "NYFBR", 
    url: "nyfbr.com", 
    category: "sports",
    clientType: "Local Sports League",
    hook: "League standings and stats tracking",
    problems_solved: [
      "Automated league table updates",
      "Player profile management",
      "Match result submission forms"
    ],
    technologies: ["SportsPress", "WordPress", "Data Tables"]
  },
  { 
    name: "Respect The Game", 
    url: "respectthegamebasketball.com", 
    category: "sports",
    clientType: "Basketball Training",
    hook: "Camp and clinic registration portal",
    problems_solved: [
      "Waiver integration for minors",
      "Inventory management for camp slots",
      "Coach bio and highlight reels"
    ],
    technologies: ["Registration", "Waivers", "Video"]
  },
  { 
    name: "Semper Strong", 
    url: "semperstrong.flywheelsites.com", 
    category: "sports",
    clientType: "Veteran Fitness Non-Profit",
    hook: "Fitness community for veterans",
    problems_solved: [
      "Community story sharing",
      "Merchandise sales for fundraising",
      "Event coordination"
    ],
    technologies: ["WordPress", "WooCommerce", "Blog"]
  },
  { 
    name: "Smoky Mountain Truck Show", 
    url: "smokymountaintruckfest.com", 
    category: "sports",
    clientType: "Event Website",
    hook: "Ticket sales for major automotive event",
    problems_solved: [
      "High-traffic ticket purchasing system",
      "Vendor application processing",
      "Interactive venue map"
    ],
    metric: "Thousands of Attendees",
    technologies: ["Ticketing", "Maps", "High Availability"]
  },

  // --------------------------------------------------------------------------
  // E-COMMERCE
  // --------------------------------------------------------------------------
  { 
    name: "The Foamory", 
    url: "thefoamory.com", 
    category: "ecommerce",
    clientType: "Specialty Product Store",
    hook: "Custom WooCommerce store with subscription products",
    problems_solved: [
      "Recurring subscription management",
      "Custom product configurator",
      "Wholesale pricing tiers"
    ],
    technologies: ["WooCommerce", "Stripe", "PHP"]
  },
  { 
    name: "Living Word", 
    url: "livingword.shop", 
    category: "ecommerce",
    clientType: "Religious Bookstore",
    hook: "Digital and physical product sales",
    problems_solved: [
      "Instant digital download delivery",
      "Inventory management for books/media",
      "Donation integration at checkout"
    ],
    technologies: ["Shopify", "Digital Downloads", "Payments"]
  },

  // --------------------------------------------------------------------------
  // BUSINESS
  // --------------------------------------------------------------------------
  { 
    name: "Hubert Vester Auto Group", 
    url: "hv.auto", 
    category: "business",
    clientType: "Auto Dealership",
    hook: "Inventory management with 200+ vehicles",
    problems_solved: [
      "Real-time inventory sync",
      "Lead capture and CRM integration",
      "Finance calculator and pre-approval"
    ],
    metric: "200+ Vehicle Inventory",
    technologies: ["Automotive CRM", "React", "API"]
  },
  { 
    name: "Pinnacle Restoration", 
    url: "pinnaclerestorations.com", 
    category: "business",
    clientType: "Emergency Restoration Services",
    hook: "24/7 emergency request system",
    problems_solved: [
      "Emergency contact forms with SMS alerts",
      "Service area mapping",
      "Insurance claim documentation"
    ],
    technologies: ["Twilio", "Maps API", "WordPress"]
  },
  { 
    name: "StarVox Capital", 
    url: "starvoxcapital.com", 
    category: "business",
    clientType: "Financial Services",
    hook: "Secure client portal for investment management",
    problems_solved: [
      "Password-protected client dashboards",
      "Document sharing and e-signatures",
      "Appointment scheduling with advisors"
    ],
    technologies: ["Secure Client Area", "Encryption", "PHP"]
  },
  { 
    name: "CPA Enterprises", 
    url: "cpa.enterprises", 
    category: "business",
    clientType: "Accounting Firm",
    hook: "Corporate tax service portfolio",
    problems_solved: [
      "Secure file upload for tax docs",
      "Service tier comparison tables",
      "Consultation booking workflow"
    ],
    technologies: ["WordPress", "File Security", "Forms"]
  },
  { 
    name: "Hire Regard", 
    url: "hireregard.com", 
    category: "business",
    clientType: "Recruitment Agency",
    hook: "Talent ecosystem connecting companies with top tier candidates",
    problems_solved: [
      "Job board integration",
      "Candidate resume submission portal",
      "Client login for search updates"
    ],
    technologies: ["Job Board Plugin", "CRM", "WordPress"]
  },
  { 
    name: "Canadian Home Style", 
    url: "canadianhomestyle.com", 
    category: "business",
    clientType: "Home Renovation",
    hook: "High-end flooring and cabinetry showcase",
    problems_solved: [
      "Visual project portfolio with filtering",
      "Manufacturer catalog integration",
      "Renovation quote calculator"
    ],
    metric: "Consumer Choice Award",
    technologies: ["Portfolio", "WordPress", "SEO"]
  },
  { 
    name: "Advanced Egress Solutions", 
    url: "advancedegresssolutions.com", 
    category: "business",
    clientType: "B2B Safety Products",
    hook: "Niche B2B catalog for emergency exit systems",
    problems_solved: [
      "Technical spec sheet downloads",
      "Bulk order request forms",
      "Government compliance documentation"
    ],
    technologies: ["Catalog", "B2B Forms", "WordPress"]
  },
  { 
    name: "Applied Construction", 
    url: "appliedconstructionservices.com", 
    category: "business",
    clientType: "Construction Company",
    hook: "Project bid management and showcase",
    problems_solved: [
      "Large scale project galleries",
      "Sub-contractor portal",
      "Safety certification display"
    ],
    technologies: ["Gallery", "Portal", "HTML/CSS"]
  },
  { 
    name: "Sprinklrite", 
    url: "sprinklrite.com", 
    category: "business",
    clientType: "Irrigation Services",
    hook: "Seasonal service scheduling automation",
    problems_solved: [
      "Spring start-up / Winterization booking",
      "Zip code service area validation",
      "Maintenance plan subscriptions"
    ],
    technologies: ["Booking", "Geo-fencing", "WooCommerce"]
  },
  { 
    name: "True Ventilation", 
    url: "trueventilation.com", 
    category: "business",
    clientType: "HVAC & Ventilation",
    hook: "Commercial ventilation system showcases",
    problems_solved: [
      "Case studies of large installs",
      "Energy efficiency calculators",
      "Maintenance request portal"
    ],
    technologies: ["Calculator", "WordPress", "Case Studies"]
  },
  { 
    name: "Evans Tree and Land Services LLC", 
    url: "evanstreeservicellc.flywheelsites.com", 
    category: "business",
    clientType: "Tree Service",
    hook: "Emergency storm response dispatch",
    problems_solved: [
      "Click-to-call emergency buttons",
      "Service area map visualizer",
      "Insurance liability proof display"
    ],
    technologies: ["Maps", "Click-to-Call", "WordPress"]
  },
  { 
    name: "Gulf Gate Security", 
    url: "gulfgatesecurity.com", 
    category: "business",
    clientType: "Security Systems",
    hook: "Residential and Commercial security configs",
    problems_solved: [
      "Product comparison charts",
      "Monitoring service signup",
      "Support ticket system"
    ],
    technologies: ["Comparison Tool", "Forms", "PHP"]
  },
  { 
    name: "Instant Cash Buyers", 
    url: "1-800instantcashbuyers.com", 
    category: "business",
    clientType: "Real Estate Investment",
    hook: "High-speed property offer generation",
    problems_solved: [
      "Multi-step property intake form",
      "Automated offer range calculation",
      "Distressed property lead management"
    ],
    metric: "Fast Offer Generation",
    technologies: ["Gravity Forms", "Real Estate Logic", "WordPress"]
  },
  { 
    name: "KW Wealth", 
    url: "www.mykwwealth.com", 
    category: "business",
    clientType: "Wealth Management",
    hook: "Financial planning for high net worth individuals",
    problems_solved: [
      "Secure document vault",
      "Advisor team bios and booking",
      "Market commentary blog"
    ],
    technologies: ["Secure Portal", "Blog", "Compliance"]
  },
  { 
    name: "BeWealthy", 
    url: "bewealthy.com", 
    category: "business",
    clientType: "Financial Education",
    hook: "Financial literacy course platform",
    problems_solved: [
      "LMS (Learning Management System) integration",
      "Progress tracking for students",
      "Webinar registration funnels"
    ],
    technologies: ["LMS", "Video", "Membership"]
  },
  { 
    name: "Next Level Specialists", 
    url: "nxtlvlspecialists.com", 
    category: "business",
    clientType: "Business Consulting",
    hook: "Corporate strategy consulting portfolio",
    problems_solved: [
      "White paper download gating",
      "Speaker booking management",
      "Strategic partnership showcases"
    ],
    technologies: ["Lead Magnets", "WordPress", "PDFs"]
  },
  { 
    name: "Riverrode", 
    url: "riverode.com", 
    category: "business",
    clientType: "Logistics/Transportation",
    hook: "Fleet management and logistics info",
    problems_solved: [
      "Route coverage mapping",
      "Driver application portal",
      "Freight quote request forms"
    ],
    technologies: ["Maps", "Forms", "Logistics"]
  },
  { 
    name: "imagemeta", 
    url: "imagemeta.io", 
    category: "business",
    clientType: "SaaS / Dev Tool",
    hook: "Metadata extraction API service",
    problems_solved: [
      "API documentation and sandbox",
      "Usage based billing integration",
      "Developer dashboard"
    ],
    metric: "API Uptime 99.9%",
    technologies: ["Node.js", "API", "Stripe"]
  },
  { 
    name: "indoorclimatesolutionstn", 
    url: "indoorclimatesolutionstn.com", 
    category: "business",
    clientType: "HVAC Services",
    hook: "Climate control solutions for Tennessee homes",
    problems_solved: [
      "Financing application integration",
      "Maintenance agreement signups",
      "Emergency repair dispatching"
    ],
    technologies: ["Financing Widget", "WordPress", "Forms"]
  },
  { 
    name: "779cash", 
    url: "779cash.com", 
    category: "business",
    clientType: "Real Estate Lead Gen",
    hook: "Local 'We Buy Houses' lead capture",
    problems_solved: [
      "High-converting landing page design",
      "SMS notification upon form submit",
      "Local SEO dominance"
    ],
    technologies: ["Landing Page", "SMS API", "SEO"]
  },
  { 
    name: "Boats Perry Neblett", 
    url: "boats.perryneblett.com", 
    category: "business",
    clientType: "Maritime Legal Asset",
    hook: "Subdomain for maritime legal resources",
    problems_solved: [
      "Resource library for boat accident claims",
      "Cross-linking to main firm site",
      "Specific boat-type accident guides"
    ],
    technologies: ["Knowledge Base", "SEO", "WordPress"]
  },
  { 
    name: "Main St. Stereo", 
    url: "mainststereo.com", 
    category: "business",
    clientType: "Car Audio & Electronics",
    hook: "Custom car audio installation showcase",
    problems_solved: [
      "Gallery of custom installs",
      "Brand authorization badges",
      "Appointment request for installations"
    ],
    technologies: ["Gallery", "Forms", "HTML/CSS"]
  },

  // --------------------------------------------------------------------------
  // LIFESTYLE
  // --------------------------------------------------------------------------
  { 
    name: "bellalimento", 
    url: "bellalimento.com", 
    category: "lifestyle",
    clientType: "Food & Recipe Blog",
    hook: "Popular food blog 'Beautiful Food Simple'",
    problems_solved: [
      "Recipe card schema integration for SEO",
      "Ad network integration (Mediavine/AdThrive)",
      "Pinterest rich pin optimization"
    ],
    metric: "High Organic Traffic",
    technologies: ["WordPress", "Ad Tech", "Schema"]
  },
  { 
    name: "Predominantly Paleo", 
    url: "predominantlypaleo.com", 
    category: "lifestyle",
    clientType: "Health & Diet Blog",
    hook: "Paleo diet resource and cookbook author site",
    problems_solved: [
      "Cookbook sales funnels",
      "Affiliate marketing integration",
      "Newsletter automation"
    ],
    technologies: ["WordPress", "Amazon Affiliates", "Mailchimp"]
  },
  { 
    name: "rachlmansfield", 
    url: "rachlmansfield.com", 
    category: "lifestyle",
    clientType: "Lifestyle Influencer",
    hook: "Brand partnerships and healthy recipe platform",
    problems_solved: [
      "Sponsored content management",
      "Instagram feed integration",
      "Recipe index with advanced filtering"
    ],
    metric: "Social Influencer",
    technologies: ["WordPress", "Social API", "Search"]
  },
  { 
    name: "Grazed and Enthused", 
    url: "grazedandenthused.com", 
    category: "lifestyle",
    clientType: "Wellness Blog",
    hook: "Autoimmune protocol (AIP) resource",
    problems_solved: [
      "Content categorization for dietary restrictions",
      "E-book delivery system",
      "Community comment management"
    ],
    technologies: ["WordPress", "Digital Downloads", "Blog"]
  },
  { 
    name: "Lotus Restaurant", 
    url: "lotusrestaurantny.com", 
    category: "lifestyle",
    clientType: "Restaurant",
    hook: "Online ordering for local dining",
    problems_solved: [
      "Menu management system",
      "Table reservation integration (OpenTable/Resy)",
      "Mobile-friendly food gallery"
    ],
    technologies: ["Online Ordering", "Reservations", "WordPress"]
  },
  { 
    name: "Beauty and the Boss", 
    url: "beautyandtheboss.net", 
    category: "lifestyle",
    clientType: "Beauty Blog",
    hook: "Beauty product reviews and tutorials",
    problems_solved: [
      "Affiliate link management",
      "Video tutorial embedding",
      "Social sharing optimization"
    ],
    technologies: ["WordPress", "YouTube", "Affiliates"]
  },
  { 
    name: "The Zen Kat", 
    url: "thezenkat.com", 
    category: "lifestyle",
    clientType: "Wellness Brand",
    hook: "Holistic wellness and yoga resources",
    problems_solved: [
      "Class scheduling",
      "Blog content strategy",
      "Newsletter integration"
    ],
    technologies: ["WordPress", "Scheduling", "Email"]
  },
  { 
    name: "La Beautique", 
    url: "labeautiquesalon.com", 
    category: "lifestyle",
    clientType: "Salon",
    hook: "High-end salon booking site",
    problems_solved: [
      "Stylist portfolio galleries",
      "Service menu with dynamic pricing",
      "Online appointment requests"
    ],
    technologies: ["Gallery", "Forms", "WordPress"]
  },
  { 
    name: "simpleweddingday", 
    url: "myrtlebeachsimpleweddingday.com", 
    category: "lifestyle",
    clientType: "Wedding Planner",
    hook: "Destination wedding package booking",
    problems_solved: [
      "Package selection wizard",
      "Photo gallery of past weddings",
      "Vendor coordination forms"
    ],
    technologies: ["WordPress", "Gallery", "Forms"]
  },
  { 
    name: "So Let's Hang Out", 
    url: "soletshangout.com", 
    category: "lifestyle",
    clientType: "Lifestyle Blog",
    hook: "Gluten-free living resources",
    problems_solved: [
      "Recipe index",
      "Newsletter capture",
      "Social media integration"
    ],
    technologies: ["WordPress", "Mailchimp", "Social"]
  },
  { 
    name: "Designing For A Difference", 
    url: "designingforadifference.com", 
    category: "lifestyle",
    clientType: "Interior Design Charity",
    hook: "Charitable design project showcase",
    problems_solved: [
      "Donation processing",
      "Project before/after sliders",
      "Volunteer signup"
    ],
    technologies: ["Donations", "Sliders", "WordPress"]
  },
  { 
    name: "Shine On Adventures", 
    url: "shineonadventures.com", 
    category: "lifestyle",
    clientType: "Travel Blog",
    hook: "Adventure travel guides and photography",
    problems_solved: [
      "High-res image optimization",
      "Map integration for travel routes",
      "Trip itinerary downloads"
    ],
    technologies: ["Maps", "Image CDN", "WordPress"]
  },
  { 
    name: "Faith Family Fulfillment Podcast", 
    url: "faithfamilyfulfillmentpodcast.com", 
    category: "lifestyle",
    clientType: "Podcast Site",
    hook: "Podcast episode hosting and show notes",
    problems_solved: [
      "Audio player integration",
      "RSS feed management",
      "Guest bio pages"
    ],
    technologies: ["Podcast Player", "RSS", "WordPress"]
  },
  { 
    name: "Fearfully and Wonderfully Avery", 
    url: "fearfullyandwonderfullyavery.com", 
    category: "lifestyle",
    clientType: "Family Blog",
    hook: "Personal family journey blog",
    problems_solved: [
      "Photo journaling",
      "Comment system",
      "Social sharing"
    ],
    technologies: ["WordPress", "Blog", "Social"]
  },
  { 
    name: "Align Your Nine", 
    url: "alignyournine.com", 
    category: "lifestyle",
    clientType: "Coaching",
    hook: "Enneagram coaching services",
    problems_solved: [
      "Assessment tools",
      "Coaching package sales",
      "Booking integration"
    ],
    technologies: ["Forms", "E-commerce", "Scheduling"]
  },
  { 
    name: "Answers From The Stairs", 
    url: "answersfromthestairs.com", 
    category: "lifestyle",
    clientType: "Blog/Advice",
    hook: "Parenting and lifestyle advice column",
    problems_solved: [
      "Anonymous question submission",
      "Content archiving",
      "Search functionality"
    ],
    technologies: ["WordPress", "Forms", "Search"]
  },
  { 
    name: "HeartCore Growth", 
    url: "heartcoregrowth.com", 
    category: "lifestyle",
    clientType: "Personal Development",
    hook: "Growth mindset coaching platform",
    problems_solved: [
      "Course delivery",
      "Membership area",
      "Event calendar"
    ],
    technologies: ["LMS", "Membership", "Calendar"]
  },
  { 
    name: "Jim Sabellico", 
    url: "jimsabellico.com", 
    category: "lifestyle",
    clientType: "Entrepreneur Brand",
    hook: "Personal brand for business coach",
    problems_solved: [
      "Lead generation for consulting",
      "Media appearances gallery",
      "Blog and insights"
    ],
    technologies: ["WordPress", "Lead Gen", "Media"]
  },
  { 
    name: "Show Up More", 
    url: "showupmore.com", 
    category: "lifestyle",
    clientType: "Motivation/Coaching",
    hook: "Motivational speaking and coaching",
    problems_solved: [
      "Video header background",
      "Speaking request forms",
      "Product sales"
    ],
    technologies: ["Video", "Forms", "WooCommerce"]
  },
  { 
    name: "Musical Piece", 
    url: "themusicalpiece.com", 
    category: "lifestyle",
    clientType: "Music Education",
    hook: "Music theory and instrument guides",
    problems_solved: [
      "Audio sample playback",
      "Sheet music downloads",
      "Lesson structuring"
    ],
    technologies: ["Audio Player", "Downloads", "WordPress"]
  },
  { 
    name: "Reef Tank Addict", 
    url: "reeftankaddict.com", 
    category: "lifestyle",
    clientType: "Hobbyist Blog",
    hook: "Aquarium hobbyist resource",
    problems_solved: [
      "Equipment reviews with affiliate links",
      "Tank setup guides",
      "Community interaction"
    ],
    technologies: ["Affiliates", "Blog", "WordPress"]
  },
  { 
    name: "PuppyPack", 
    url: "puppypack.co", 
    category: "lifestyle",
    clientType: "Pet Services",
    hook: "Dog walking and pet sitting service",
    problems_solved: [
      "Service area map",
      "Pricing tables",
      "New client intake forms"
    ],
    technologies: ["Maps", "Pricing", "Forms"]
  },
  { 
    name: "LA12", 
    url: "la12.org", 
    category: "lifestyle",
    clientType: "Community Org",
    hook: "Local community organization site",
    problems_solved: [
      "News and updates feed",
      "Events calendar",
      "Member directory"
    ],
    technologies: ["Directory", "Calendar", "WordPress"]
  },
];

export function getSiteImage(site: Site): string {
    // 1. Use the manual image if you set one (like for Legiit)
    if (site.image) return site.image;

    // 2. Otherwise, use the generated screenshot path
    // This logic creates a "slug" from the name (e.g. "Jim Sabellico" -> "jim-sabellico")
    const slug = site.name
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');

    return `/screenshots/${slug}.jpg`;
}

export function getSiteFallback(site: Site): string {
  const gradients = [
    "from-purple-500 to-pink-500",
    "from-blue-500 to-cyan-500",
    "from-green-500 to-emerald-500",
    "from-orange-500 to-red-500",
    "from-indigo-500 to-purple-500",
    "from-pink-500 to-rose-500",
  ];
  
  const index = site.name.charCodeAt(0) % gradients.length;
  return gradients[index];
}

// Filter for display
export const topSites = sites.filter(site => 
  site.featured || 
  site.category === "marketplace" ||
  site.category === "agency" ||
  site.category === "legal" ||
  site.category === "healthcare" ||
  site.category === "sports" ||
  site.category === "ecommerce" ||
  (site.category === "business" && site.hook)
).slice(0, 40);

export const hiddenSites = sites.filter(site => !topSites.includes(site));