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
    default: "Shakil Ahmed | AI Full Stack, Web, Mobile, SaaS & MVP Developer ($150/hr)",
    template: "%s | Shakil Ahmed",
  },
  icons: {
    icon: '/icon.png?v=2',
  },
  description:
      "AI Full Stack, Web, Mobile, SaaS & MVP Developer. Former Engineering Team Lead at Legiit (scaled AI Command Center to $1M ARR). Shipped Legiit Mobile (10K+ downloads), 10+ production AI systems, and rescued AI MVPs (Lovable, Bolt, v0, Supabase). 12+ years engineering, 125+ 5-star reviews.",
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
    "Upwork Top Talent $150/hr"
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
    title: "Shakil Ahmed | AI Full Stack & SaaS Developer ($150/hr)",
    description: "Shipped 1,000+ projects. Architect for 2M+ user marketplace. Available for US-based projects.",
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
    "jobTitle": "Senior Full-Stack Engineer",
    "url": BASE_URL,
    "image": `${BASE_URL}/profile-photo.jpg`,
    "sameAs": [
      "https://www.upwork.com/freelancers/~01e19084859cda495e",
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
