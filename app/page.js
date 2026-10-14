"use client";

import { useEffect, useState } from "react";
import BrandToggle from "./components/BrandToggle";
import PortraitImage from "./components/PortraitImage";
import TypewriterName from "./components/TypewriterName";
import { copy, profile, tokenNames, tokenSwatches } from "./content";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: "https://hamedjenabi.me",
  image: "https://hamedjenabi.me/me.png",
  email: profile.email,
  jobTitle: "Frontend Platform and Design Systems Lead",
  address: { "@type": "PostalAddress", addressLocality: "Vienna", addressCountry: "AT" },
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: ["Design Systems", "Frontend Platform Engineering", "React", "TypeScript", "Headless CMS"],
};

function Header({ language, setLanguage, c }) {
  const links = ["#system", "#work", "#contact"];
  return (
    <header className="command-bar" aria-label={language === "de" ? "Hauptnavigation" : "Primary navigation"}>
      <a className="brand" href="#top" aria-label={`${profile.name} home`}>
        <span className="brand-mark">hj</span><span className="brand-text">{profile.brand}</span>
      </a>
      <nav aria-label={language === "de" ? "Seitenbereiche" : "Page sections"}>
        {c.nav.map((label, i) => <a key={links[i]} href={links[i]}>{label}</a>)}
      </nav>
      <div className="header-actions">
        <div className="language-toggle" role="group" aria-label={c.brandLabel}>
          <button type="button" aria-pressed={language === "en"} onClick={() => setLanguage("en")}>EN</button>
          <button type="button" aria-pressed={language === "de"} onClick={() => setLanguage("de")}>DE</button>
        </div>
        <BrandToggle />
        <a className="nav-cta" href={`mailto:${profile.email}`}>{c.contactShort}</a>
      </div>
    </header>
  );
}

function Hero({ c }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="status-pill"><span className="pulse" />{c.liveLabel}</div>
        <TypewriterName />
        <p className="eyebrow">{c.eyebrow}</p>
        <h1 id="hero-title">{c.title}</h1>
        <p className="hero-lede">{c.summary}</p>
        <div className="hero-actions" aria-label="Primary actions">
          <a className="button primary" href="#system">{c.viewSystem}</a>
          <a className="button secondary" href="#work">{c.viewWork}</a>
          <a className="icon-link" href={profile.github} target="_blank" rel="noreferrer" aria-label={c.githubLabel}>GH</a>
          <a className="icon-link" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="Open LinkedIn">in</a>
        </div>
      </div>
      <div className="hero-panel" aria-label="Profile snapshot">
        <div className="portrait-frame"><PortraitImage /></div>
        <div className="status-grid">{c.status.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
      </div>
    </section>
  );
}

function TokenBoard({ c }) {
  return (
    <section id="system" className="section system-section" aria-labelledby="system-title">
      <div className="section-heading compact">
        <div><p className="section-kicker">{c.systemKicker}</p><h2 id="system-title">{c.systemTitle}</h2></div>
        <p>{c.systemIntro}</p>
      </div>
      <div className="system-grid">
        <div className="token-board" aria-label="Three-tier token board">
          {c.tokenTiers.map((tier, tierIndex) => (
            <article className="token-column" key={tier.title}>
              <div><p className="token-tier">{tier.title}</p><h3>{tier.summary}</h3></div>
              <ul>{tokenNames[tierIndex].map((name, i) => <li key={name}>
                <span className="token-swatch" style={{ background: tokenSwatches[tierIndex][i] }} aria-hidden="true" />
                <span>{name}</span><strong>{tier.values[i]}</strong>
              </li>)}</ul>
            </article>
          ))}
        </div>
        <div className="component-lab" aria-label="Live component samples">
          <div className="lab-header"><span>component.preview</span><strong>Tokenized</strong></div>
          <div className="sample-card">
            <p className="project-status">{c.componentLabel}</p><h3>{c.componentTitle}</h3><p>{c.componentBody}</p>
            <div className="tag-row">{c.componentTags.map(tag => <span key={tag}>{tag}</span>)}</div>
            <div className="sample-actions"><span className="button primary sample-button">{c.primary}</span><span className="button secondary sample-button">{c.secondary}</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SelectedWork({ c }) {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="section-heading compact">
        <div><p className="section-kicker">{c.workKicker}</p><h2 id="work-title">{c.workTitle}</h2></div>
        <p>{c.workIntro}</p>
      </div>
      <p className="leadership-proof">{c.leadership}</p>
      <div className="project-grid compact-projects">
        {c.cases.map(project => <article className="project-card" key={project.number} aria-labelledby={`project-${project.number}-title`}>
          <div className="project-marker" aria-hidden="true">{project.number}</div>
          <div className="project-body"><p className="project-status">{project.stage}</p><h3 id={`project-${project.number}-title`}>{project.title}</h3>
            <p className="project-role">{project.role}</p><p>{project.value}</p>
            <div className="tag-row">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
          </div>
        </article>)}
      </div>
      <p className="proof-note">{c.proofNote}</p>
    </section>
  );
}

function Contact({ c }) {
  return (
    <section id="contact" className="section contact-close" aria-labelledby="contact-title">
      <div><p className="section-kicker">{c.contactKicker}</p><h2 id="contact-title">{c.contactTitle}</h2><p className="contact-body">{c.contactBody}</p></div>
      <div className="contact-actions"><a className="button primary" href={`mailto:${profile.email}`}>{c.emailMe}</a>
        <a className="button secondary" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="button secondary" href={profile.github} target="_blank" rel="noreferrer">GitHub</a></div>
    </section>
  );
}

export default function Home() {
  const [language, setLanguage] = useState("en");
  useEffect(() => {
    try { if (localStorage.getItem("portfolio-language") === "de") setLanguage("de"); } catch {}
  }, []);
  useEffect(() => {
    document.documentElement.lang = language;
    try { localStorage.setItem("portfolio-language", language); } catch {}
  }, [language]);
  const c = copy[language];
  return (
    <div id="top" className="page-shell">
      <a className="skip-link" href="#content">{c.skip}</a>
      <Header language={language} setLanguage={setLanguage} c={c} />
      <main id="content"><Hero c={c} /><TokenBoard c={c} /><SelectedWork c={c} /><Contact c={c} /></main>
      <footer><span>{profile.name}</span><div><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a><a href={`mailto:${profile.email}`}>{c.footerEmail}</a></div></footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </div>
  );
}
