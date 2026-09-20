import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://shakilhq.com";

export const viewport: Viewport = {
  themeColor: "#f3f3f1",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Shakil Ahmed | Principal AI & Systems Architect | 50+ Production AI Systems",
    template: "%s | Shakil Ahmed",
  },
  icons: {
    icon: '/icon.png?v=2',
  },
  description:
      "Principal AI & Systems Architect and Founder of BarakahSoft LLC. 12+ years engineering mission-critical architectures. Former Engineering Team Lead at Legiit (scaled AI Command Center to $1M ARR across 1,500+ businesses). Shipped 50+ verified production AI applications, autonomous agent swarms, and enterprise SaaS systems. Securiti Certified AI Security & Governance Architect.",
  keywords: [
    "AI Full Stack Developer",
    "AI MVP Developer",
    "Autonomous Agents Engineer",
    "SaaS Platform Architect",
    "Next.js Developer",
    "React Native Developer",
    "Lovable MVP Rescue",
    "Bolt.new Rescue",
    "v0 by Vercel Rescue",
    "Supabase Expert",
    "Claude API Integration",
    "Gemini API Integration",
    "Legiit AI Command Center",
    "BarakahSoft Founder",
    "Enterprise AI Security & Governance"
  ],
  authors: [{ name: "Shakil Ahmed", url: BASE_URL }],
  creator: "Shakil Ahmed",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "profile",
    firstName: "Shakil",
    lastName: "Ahmed",
    username: "shakil_dev",
    gender: "male",
    locale: "en_US",
    url: BASE_URL,
    title: "Shakil Ahmed | AI Full Stack, Web, Mobile, SaaS & MVP Developer",
    description: "Production SaaS platforms, AI applications, and mobile apps. Former Engineering Team Lead at Legiit (scaled AI Command Center to $1M ARR). 125+ five-star reviews.",
    siteName: "Shakil Ahmed Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shakil Ahmed - Senior Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shakil Ahmed | Principal AI & Systems Architect",
    description: "Architected $1M ARR AI Command Center at Legiit. 50+ verified production AI systems, autonomous swarms & high-concurrency SaaS platforms. 12+ years systems engineering.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Shakil Ahmed",
    "jobTitle": "Principal AI & Systems Architect",
    "url": BASE_URL,
    "image": `${BASE_URL}/profile-photo.jpg`,
    "sameAs": [
      "https://www.upwork.com/freelancers/shakilhq",
      "https://legiit.com",
      "https://barakahsoft.com"
    ],
    "description": "Senior Full-Stack Engineer with 12+ years experience. Founder of BarakahSoft and Lead Engineer at Legiit.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Rajshahi",
      "addressCountry": "Bangladesh"
    },
    "knowsAbout": ["AI Full Stack Engineering", "Autonomous Multi-Agent Systems", "Grounded RAG", "Next.js", "React Native", "PostgreSQL", "Supabase", "Stripe Billing", "System Architecture"],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Bangladesh University"
    }
  };

  return (
      <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

      {/* --- GOOGLE ANALYTICS START --- */}
      <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8YSWCH2FTB"
          strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-8YSWCH2FTB');
          `}
      </Script>
      {/* --- GOOGLE ANALYTICS END --- */}

      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
      </body>
      </html>
  );
}
