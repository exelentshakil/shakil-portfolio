import Image from "next/image";

const UPWORK_URL = "https://www.upwork.com/freelancers/shakilhq";
const GITHUB_URL = "https://github.com/exelentshakil";

export default function Header() {
  return (
    <header className="sc-head">
      <div className="sc-bar2">
        <a href="#" className="sc-brand" aria-label="Shakil Ahmed home">
          <span className="sc-logo">
            <Image src="/logo.png" alt="" width={20} height={20} className="object-contain" priority />
          </span>
          <span>Shakil Ahmed</span>
        </a>
        <nav className="sc-nav">
          <a href="#pricing">The offer</a>
          <a href="#how-it-starts">How it starts</a>
          <a href="#work">Work</a>
          <a href="#proof">Proof</a>
          <a href="#faq">FAQ</a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="ghost">GitHub</a>
          <a href={UPWORK_URL} target="_blank" rel="noreferrer" className="cta">Start trial on Upwork</a>
        </nav>
        <a href={UPWORK_URL} target="_blank" rel="noreferrer" className="sc-mob">Start trial</a>
        <details className="sc-menu">
          <summary aria-label="Menu">Menu</summary>
          <div className="sc-drop">
            <a href="#pricing">The offer</a>
            <a href="#how-it-starts">How it starts</a>
            <a href="#work">Work</a>
            <a href="#proof">Proof</a>
            <a href="#faq">FAQ</a>
          </div>
        </details>
      </div>
    </header>
  );
}
