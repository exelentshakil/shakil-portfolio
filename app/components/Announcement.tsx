const UPWORK_URL = "https://www.upwork.com/freelancers/shakilhq";

export default function Announcement() {
  return (
    <div className="sc-bar">
      <span className="sc-tag">Risk-free trial</span>
      <p>Close 3 real tickets in the 2 week trial or you pay nothing.</p>
      <a href={UPWORK_URL} target="_blank" rel="noreferrer">Start on Upwork</a>
    </div>
  );
}
