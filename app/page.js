import TypewriterName from "./components/TypewriterName";

const navItems = ["About", "Skills", "Contact"];

const statusItems = [
  ["Role", "Team Lead / Software Engineer"],
  ["Focus", "CMS, DXP, Frontend + AI"],
  ["Mode", "Open to recruiter conversations"],
  ["Location", "Vienna / Remote"],
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "CMS & DXP",
  "Headless CMS",
  "Design systems",
  "Team leadership",
  "AI integrations",
  "REST APIs",
  "PostgreSQL",
  "React Native",
  "Frontend systems",
  "Product thinking",
];

const logs = [
  "Booting portfolio shell",
  "Loading CMS and DXP leadership context",
  "Loading design-system delivery experience",
  "Mounting AI integration context",
  "Recruiter scan path ready",
];

function Header() {
  return (
    <header className="command-bar" aria-label="Primary navigation">
      <a className="brand" href="#top" aria-label="Hamed Jenabi home">
        <span className="brand-mark">hj</span>
        <span className="brand-text">hamed.dev</span>
      </a>
      <nav>
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </nav>
      <a className="nav-cta" href="mailto:hamed.jenabi@gmail.com">
        Contact
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="status-pill">
          <span className="pulse" />
          Available for software roles
        </div>
        <TypewriterName />
        <p className="eyebrow">Team Lead / CMS + DXP / Frontend + AI</p>
        <h1 id="hero-title">
          I lead and build scalable frontend platforms for content-rich
          products.
        </h1>
        <p className="hero-lede">
          Team Lead in CMS and DXP solutions with deep experience in design
          systems, headless CMS, frontend engineering, and practical AI
          integrations.
        </p>
        <div className="hero-actions" aria-label="Primary actions">
          <a className="button primary" href="mailto:hamed.jenabi@gmail.com">
            Contact Me
          </a>
          <a
            className="icon-link"
            href="https://github.com/hamedJenabi"
            target="_blank"
            rel="noreferrer"
            aria-label="Open GitHub"
          >
            GH
          </a>
        </div>
      </div>

      <div className="hero-panel" aria-label="Developer profile snapshot">
        <div className="panel-topbar">
          <span />
          <span />
          <span />
          <p>profile.config</p>
        </div>
        <div className="portrait-frame">
          <img src="/me.png" alt="Portrait of Hamed Jenabi" />
        </div>
        <div className="status-grid">
          {statusItems.map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section about-grid">
      <div>
        <p className="section-kicker">About</p>
        <h2>Practical engineering leadership for content platforms.</h2>
      </div>
      <div className="copy-block">
        <p>
          I work at the intersection of frontend engineering, CMS and DXP
          delivery, design systems, and AI-enabled workflows. My background is
          especially strong in headless CMS architecture, reusable UI systems,
          and helping teams ship consistent digital experiences.
        </p>
        <p>
          I bring both implementation depth and team-lead experience to
          content-heavy products, from platform decisions to the component
          systems that make delivery consistent.
        </p>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section split-section">
      <div className="terminal-card">
        <div className="terminal-header">
          <span>~/hamed/skills</span>
          <span>ready</span>
        </div>
        <div className="skill-cloud">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>

      <div className="terminal-card log-card">
        <div className="terminal-header">
          <span>system.log</span>
          <span>live</span>
        </div>
        <ul>
          {logs.map((log) => (
            <li key={log}>
              <span className="prompt">$</span>
              {log}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-band">
      <div>
        <p className="section-kicker">Contact</p>
        <h2>Need a team lead for CMS, DXP, frontend, or AI product work?</h2>
        <p>
          I am open to conversations around content platforms, design systems,
          frontend leadership, and practical AI integrations.
        </p>
      </div>
      <div className="contact-actions">
        <a className="button primary" href="mailto:hamed.jenabi@gmail.com">
          Email Me
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <span>Hamed Jenabi</span>
      <div>
        <a href="https://github.com/hamedJenabi">GitHub</a>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="page-shell">
      <Header />
      <main id="top">
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
