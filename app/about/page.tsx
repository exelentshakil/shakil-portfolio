import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ABOUT_HTML } from "./about-data";
import "../chat-window.css";
import "../site-chrome.css";
import "../about.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "Shakil Ahmed: 15+ years in software, freelancing since 2015, lead engineer at a marketplace with 400,000+ users. One named on-call engineer for your live product.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#F9F6F3] text-[#1A182B]">
      <Header />
      <main>
        <div id="vz" dangerouslySetInnerHTML={{ __html: ABOUT_HTML }} />
      </main>
      <Footer />
    </div>
  );
}
