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
    default: "Shakil Ahmed | Senior Systems & Integration Engineer | Next.js, Laravel, Python, AI",
    template: "%s | Shakil Ahmed",
  },
  icons: {
    icon: '/icon.png?v=2',
  },
  description:
      "Senior Systems and Integration Engineer, Full-Stack Developer, and Founder of BarakahSoft LLC. 15 years engineering mission-critical architectures. Former Engineering Team Lead at Legiit (scaled core marketplace and AI Command Center to $1M ARR across 400K+ users). Specializing in Next.js, PHP/Laravel, Python, resilient API integrations, database syncing, and secure AI governance.",
  keywords: [
    "Senior Systems Engineer",
    "API Integration Expert",
    "Database Sync Expert",
    "PHP Laravel Developer",
    "Next.js Developer",
    "SaaS Platform Architect",
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
    title: "Shakil Ahmed | Senior Systems and Integration Engineer",
    description: "Production SaaS platforms, secure API syncing, PHP Laravel, Next.js, and mobile apps. Former Engineering Team Lead at Legiit (scaled core marketplace and AI command center to $1M ARR). 125+ five-star reviews.",
    siteName: "Shakil Ahmed Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shakil Ahmed - Senior Systems Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shakil Ahmed | Senior Systems and Integration Engineer",
    description: "Former Lead Engineer at Legiit. 115+ verified production integrations, automated syncing workflows, high-concurrency SaaS platforms, and secure AI systems. 15 years systems engineering.",
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
    "jobTitle": "Senior Systems and Integration Engineer - Next.js, Laravel, Python, AI",
    "url": BASE_URL,
    "image": `${BASE_URL}/profile-photo.jpg`,
    "sameAs": [
      "https://www.upwork.com/freelancers/shakilhq",
      "https://legiit.com",
      "https://barakahsoft.com"
    ],
    "description": "Senior Full-Stack & Integration Engineer with 15 years experience. Founder of BarakahSoft and Lead Engineer at Legiit.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Rajshahi",
      "addressCountry": "Bangladesh"
    },
    "knowsAbout": ["Systems Integration", "API Database Sync", "Next.js", "PHP Laravel", "Python FastAPI", "React Native", "PostgreSQL", "Supabase", "Stripe Billing", "AI Integration", "AWS DevOps"],
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