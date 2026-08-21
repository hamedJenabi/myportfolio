import BrandToggle from "./components/BrandToggle";
import PortraitImage from "./components/PortraitImage";
import TypewriterName from "./components/TypewriterName";
import { caseStudies, navItems, profile, statusItems, tokenTiers } from "./content";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: "https://hamedjenabi.me",
  image: "https://hamedjenabi.me/me.png",
  email: profile.email,
  jobTitle: "Design Systems Expert and Frontend Platform Lead",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vienna",
    addressCountry: "AT",
  },
  sameAs: [profile.github],
  knowsAbout: [
    "Design Systems",
    "Design Tokens",
    "Frontend Platform Engineering",
    "React",
    "Next.js",
    "TypeScript",
    "Headless CMS",
    "AI Product Engineering",
  ],
};

function Header() {
  return (
    <header className="command-bar" aria-label="Primary navigation">
      <a className="brand" href="#top" aria-label={`${profile.name} home`}>
        <span className="brand-mark">hj</span>
        <span className="brand-text">{profile.brand}</span>
      </a>
      <nav aria-label="Page sections">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <BrandToggle />
        <a className="nav-cta" href={`mailto:${profile.email}`}>
          Contact
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="status-pill">
          <span className="pulse" />
          Live design-system portfolio
        </div>
        <TypewriterName />
        <p className="eyebrow">Tokens + Components + Multibrand</p>
        <h1 id="hero-title">{profile.title}</h1>
        <p className="hero-lede">{profile.summary}</p>
        <div className="hero-actions" aria-label="Primary actions">
          <a className="button primary" href="#system">
            View System
          </a>
          <a className="button secondary" href="#work">
            Selected Work
          </a>
          <a
            className="icon-link"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Open GitHub"
          >
            GH
          </a>
        </div>
      </div>

      <div className="hero-panel" aria-label="Profile snapshot">
        <div className="portrait-frame">
          <PortraitImage />
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

function TokenBoard() {
  return (
    <section
      id="system"
      className="section system-section"
      aria-labelledby="system-title"
    >
      <div className="section-heading compact">
        <div>
          <p className="section-kicker">System</p>
          <h2 id="system-title">Three token tiers. Two brand expressions.</h2>
        </div>
        <p>
          Switch the brand in the header; the same components keep their intent
          while the visual language changes.
        </p>
      </div>

      <div className="system-grid">
        <div className="token-board" aria-label="Three-tier token board">
          {tokenTiers.map((tier) => (
            <article className="token-column" key={tier.title}>
              <div>
                <p className="token-tier">{tier.title}</p>
                <h3>{tier.summary}</h3>
              </div>
              <ul>
                {tier.tokens.map((token) => (
                  <li key={token.name}>
                    <span
                      className="token-swatch"
                      style={{ background: token.swatch }}
                      aria-hidden="true"
                    />
                    <span>{token.name}</span>
                    <strong>{token.value}</strong>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="component-lab" aria-label="Live component samples">
          <div className="lab-header">
            <span>component.preview</span>
            <strong>Tokenized</strong>
          </div>
          <div className="sample-card">
            <p className="project-status">Component token</p>
            <h3>Reusable proof module</h3>
            <p>
              Surface, border, type, chip, and action styles are all driven by
              the active brand expression.
            </p>
            <div className="tag-row">
              <span>Accessible states</span>
              <span>Shared semantics</span>
              <span>Brand-safe UI</span>
            </div>
            <div className="sample-actions">
              <span className="button primary sample-button">
                Primary
              </span>
              <span className="button secondary sample-button">
                Secondary
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SelectedWork() {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="section-heading compact">
        <div>
          <p className="section-kicker">Work</p>
          <h2 id="work-title">Selected proof, kept scan-friendly.</h2>
        </div>
      </div>

      <div className="project-grid compact-projects">
        {caseStudies.map((project) => (
          <article
            className="project-card"
            key={project.title}
            aria-labelledby={`project-${project.number}-title`}
          >
            <div className="project-marker" aria-hidden="true">
              {project.number}
            </div>
            <div className="project-body">
              <p className="project-status">{project.role}</p>
              <h3 id={`project-${project.number}-title`}>{project.title}</h3>
              <p>{project.value}</p>
              <div className="tag-row">
                {project.stack.slice(0, 5).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-close" aria-labelledby="contact-title">
      <div>
        <p className="section-kicker">Contact</p>
        <h2 id="contact-title">Need a design-system lead for frontend platform work?</h2>
      </div>
      <div className="contact-actions">
        <a className="button primary" href={`mailto:${profile.email}`}>
          Email Me
        </a>
        <a
          className="button secondary"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <span>{profile.name}</span>
      <div>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={`mailto:${profile.email}`}>Email</a>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div id="top" className="page-shell">
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <Header />
      <main id="content">
        <Hero />
        <TokenBoard />
        <SelectedWork />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  );
}
