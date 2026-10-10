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
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const TITLE = "Shakil Ahmed | Senior Full-Stack & AI Engineer | Next.js, Laravel, Python, RAG";
const DESCRIPTION =
  "Senior full-stack engineer with 15+ years of experience. I build and run production web apps on Next.js, Laravel and Python, and add AI features that work: RAG, agents and LLM integrations. US Eastern hours.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: TITLE,
    template: "%s | Shakil Ahmed",
  },
  icons: {
    icon: "/icon.png?v=2",
  },
  description: DESCRIPTION,
  keywords: [
    "Senior Full-Stack Engineer",
    "AI Engineer",
    "Next.js Developer",
    "Laravel Developer",
    "Python FastAPI",
    "RAG",
    "LLM Integration",
    "Supabase",
    "PostgreSQL",
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
    locale: "en_US",
    url: BASE_URL,
    title: "Shakil Ahmed | Senior Full-Stack & AI Engineer",
    description: DESCRIPTION,
    siteName: "Shakil Ahmed",
    images: [{ url: "/og-image.jpg", width: 320, height: 320, alt: "Shakil Ahmed, Senior Full-Stack & AI Engineer" }],
  },
  twitter: {
    card: "summary",
    title: "Shakil Ahmed | Senior Full-Stack & AI Engineer",
    description: DESCRIPTION,
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
    name: "Shakil Ahmed",
    jobTitle: "Senior Full-Stack & AI Engineer",
    url: BASE_URL,
    image: `${BASE_URL}/shakil-headshot.jpeg`,
    sameAs: ["https://www.upwork.com/freelancers/shakilhq", "https://github.com/exelentshakil"],
    description: DESCRIPTION,
    address: { "@type": "PostalAddress", addressLocality: "Rajshahi", addressCountry: "Bangladesh" },
    knowsAbout: ["Next.js", "TypeScript", "Laravel", "PHP", "Python", "FastAPI", "PostgreSQL", "Supabase", "RAG", "LLM Integration", "AI Agents", "Docker", "AWS"],
    alumniOf: { "@type": "CollegeOrUniversity", name: "Bangladesh University" },
  };

  return (
      <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

      {/* GOOGLE ANALYTICS START */}
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
      {/* GOOGLE ANALYTICS END */}

      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
      </body>
      </html>
  );
}