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
  themeColor: "#f8f9fc",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Shakil Ahmed | Senior Full-Stack Engineer (Laravel/Django/Node.js & React)",
    template: "%s | Shakil Ahmed",
  },
  icons: {
    icon: '/icon.png?v=2',
  },
  description:
      "Senior Full-Stack Engineer & Architect with 12+ years experience. Built core features for Legiit (2M+ users). Shipped 1,000+ projects. Expert in Laravel, React, and Scalable Systems.",
  keywords: [
    "Laravel Expert",
    "React Developer",
    "Full Stack Engineer",
    "Next.js Developer",
    "SaaS Architecture",
    "WordPress Malware Removal",
    "Database Optimization",
    "API Development",
    "Legiit Marketplace Developer",
    "BarakahSoft Founder",
    "Upwork Top Talent",
    "Bangladesh Software Engineer"
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
    title: "Shakil Ahmed | Senior Full-Stack Engineer",
    description: "12+ Years Building Production Systems. Architect behind Legiit (2M+ Users). Laravel/Django/Node.js & React Expert.",
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
    title: "Shakil Ahmed | Laravel/Django/Node.js & React Expert",
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
    "knowsAbout": ["Laravel", "React", "AWS", "WordPress Security", "System Architecture"],
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
