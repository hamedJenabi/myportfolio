import PortraitImage from "./components/PortraitImage";
import TypewriterName from "./components/TypewriterName";
import {
  caseStudies,
  expertiseAreas,
  leadershipHighlights,
  navItems,
  profile,
  proofPoints,
  skillGroups,
  statusItems,
} from "./content";

function Header() {
  return (
    <header className="command-bar" aria-label="Primary navigation">
      <a className="brand" href="#top" aria-label={`${profile.name} home`}>
        <span className="brand-mark">hj</span>
        <span className="brand-text">{profile.brand}</span>
      </a>
      <nav>
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="nav-cta" href={`mailto:${profile.email}`}>
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
          Design-system specialist for senior frontend platform roles
        </div>
        <TypewriterName />
        <p className="eyebrow">Design Systems + Architecture + Leadership</p>
        <h1 id="hero-title">{profile.title}</h1>
        <p className="hero-lede">{profile.summary}</p>
        <div className="hero-actions" aria-label="Primary actions">
          <a className="button primary" href="#work">
            View My Work
          </a>
          <a className="button secondary" href="#about">
            About Me
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

      <div className="hero-panel" aria-label="Developer profile snapshot">
        <div className="panel-topbar">
          <span />
          <span />
          <span />
          <p>profile.config</p>
        </div>
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

function ProofStrip() {
  return (
    <section className="proof-strip" aria-label="Positioning summary">
      {proofPoints.map((point) => (
        <p key={point}>{point}</p>
      ))}
    </section>
  );
}

function SelectedWork() {
  return (
    <section id="work" className="section">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Selected Work</p>
          <h2>Flagship case studies led by design-system and platform thinking.</h2>
        </div>
        <p>
          These projects are shaped around the roles I want the portfolio to
          support: Design Systems Lead, Staff Frontend Engineer, Frontend
          Architect, CMS/DXP Architect, and AI Integration Engineer.
        </p>
      </div>

      <div className="project-grid">
        {caseStudies.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-visual">
              <span>{project.number}</span>
              <div className="architecture-flow" aria-label="Architecture">
                {project.architecture.map((item) => (
                  <code key={item}>{item}</code>
                ))}
              </div>
            </div>
            <div className="project-body">
              <p className="project-status">{project.status}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <dl className="project-details">
                <div>
                  <dt>Role</dt>
                  <dd>{project.role}</dd>
                </div>
                <div>
                  <dt>Problem</dt>
                  <dd>{project.problem}</dd>
                </div>
              </dl>
              <div className="decision-list">
                {project.decisions.map((decision) => (
                  <p key={decision}>{decision}</p>
                ))}
              </div>
              <div className="tag-row">
                {project.stack.map((tag) => (
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

function Expertise() {
  return (
    <section id="expertise" className="section">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Expertise</p>
          <h2>Design systems first, with platform depth around them.</h2>
        </div>
        <p>
          The goal is to show design-system expertise as the center of the
          story, supported by architecture, product engineering, CMS/DXP, and
          practical AI experience.
        </p>
      </div>

      <div className="expertise-grid">
        {expertiseAreas.map((area) => (
          <article className="expertise-card" key={area.title}>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
            <div className="tag-row">
              {area.topics.map((topic) => (
                <span key={topic}>{topic}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section split-section">
      <div>
        <p className="section-kicker">Experience</p>
        <h2>Design-system leadership framed around ownership and impact.</h2>
      </div>
      <div className="leadership-list">
        {leadershipHighlights.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section className="section">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Technical Stack</p>
          <h2>Skills organized by capability, not as one long tool list.</h2>
        </div>
        <p>
          This makes the site easier to scan for platform, CMS, frontend, and
          applied AI roles.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-panel" key={group.title}>
            <h3>{group.title}</h3>
            <div className="tag-row">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section about-grid">
      <div>
        <p className="section-kicker">About</p>
        <h2>From frontend implementation to frontend platform leadership.</h2>
      </div>
      <div className="copy-block">
        <p>
          I started primarily in frontend engineering and gradually moved toward
          building the systems behind frontend teams: reusable platforms, design
          systems, content architectures, and technical standards.
        </p>
        <p>
          Today my focus is at the intersection of frontend platform
          engineering, content systems, and applied AI. I enjoy turning complex
          product and engineering requirements into scalable architectures that
          teams can actually maintain.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-band">
      <div className="section-title">
        <p className="section-kicker">Contact</p>
        <h2>Need a design systems expert for frontend platform work?</h2>
        <p>
          I am open to conversations around Design Systems Lead, Staff Frontend,
          Frontend Architect, CMS/DXP Architect, and AI product integration
          roles.
        </p>
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
    <div className="page-shell">
      <Header />
      <main id="top">
        <Hero />
        <ProofStrip />
        <SelectedWork />
        <Expertise />
        <Experience />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
