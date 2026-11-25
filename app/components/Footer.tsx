import Image from "next/image";

const UPWORK_URL = "https://www.upwork.com/freelancers/shakilhq";
const GITHUB_URL = "https://github.com/exelentshakil";

export default function Footer() {
  return (
    <footer className="sc-foot">
      <div className="pf">
        <div className="pf-g">
          <div className="pf-brand">
            <Image src="/logo.png" alt="Shakil Ahmed" width={52} height={52} className="object-contain" />
            <p>On-call engineer for live products. A real senior engineer in your Slack, Teams or inbox, 9 to 5 EST.</p>
            <a className="pf-btn" href={UPWORK_URL} target="_blank" rel="noreferrer">Start the 2 week trial on Upwork</a>
          </div>
          <div className="pf-c">
            <h4>The offer</h4>
            <a href="/#pricing">The 2 week trial</a>
            <a href="/#how-it-starts">How it starts</a>
            <a href="/#proof">What you win</a>
            <a href="/#faq">FAQ</a>
          </div>
          <div className="pf-c">
            <h4>Proof</h4>
            <a href="/#work">Selected work</a>
            <a href="/#work">Upwork reviews</a>
            <a href="/about">About</a>
          </div>
          <div className="pf-c">
            <h4>Elsewhere</h4>
            <a href={UPWORK_URL} target="_blank" rel="noreferrer">Upwork profile</a>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
        <div className="pf-b">
          <span>&copy; 2026 Shakil Ahmed. All contracts and payments run through Upwork.</span>
        </div>
        <div className="pf-wm" aria-hidden="true">shakilhq.com</div>
      </div>
    </footer>
  );
}
