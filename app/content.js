export const profile = {
  name: "Hamed Jenabi",
  brand: "hamedjenabi.me",
  email: "hamed.jenabi@gmail.com",
  github: "https://github.com/hamedJenabi",
  location: "Vienna / Remote",
  title: "Design systems that scale across brands.",
  summary:
    "I build token-driven frontend platforms, reusable component systems, and content-rich product experiences for teams that need consistency without slowing down.",
};

export const navItems = [
  { label: "System", href: "#system" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const statusItems = [
  ["Focus", "Design systems"],
  ["Model", "Primitive -> semantic -> component"],
  ["Brands", "Terminal + Product"],
  ["Base", "Vienna / Remote"],
];

export const tokenTiers = [
  {
    title: "Primitive",
    summary: "Raw design values with no product meaning yet.",
    tokens: [
      { name: "accent-mint", value: "Color", swatch: "var(--primitive-mint)" },
      { name: "accent-amber", value: "Color", swatch: "var(--primitive-amber)" },
      { name: "space-4", value: "Spacing", swatch: "var(--primitive-space)" },
      { name: "radius-2", value: "Shape", swatch: "var(--primitive-radius)" },
    ],
  },
  {
    title: "Semantic",
    summary: "Role-based decisions shared by the interface.",
    tokens: [
      { name: "surface-raised", value: "Surface", swatch: "var(--surface-raised)" },
      { name: "text-primary", value: "Content", swatch: "var(--text-primary)" },
      { name: "border-subtle", value: "Boundary", swatch: "var(--border-subtle)" },
      { name: "action-primary", value: "Intent", swatch: "var(--action-primary)" },
    ],
  },
  {
    title: "Component",
    summary: "Local decisions for repeated portfolio patterns.",
    tokens: [
      { name: "toggle-track", value: "Control", swatch: "var(--toggle-track)" },
      { name: "card-accent", value: "Work card", swatch: "var(--card-accent)" },
      { name: "chip-fill", value: "Tag", swatch: "var(--chip-fill)" },
      { name: "panel-shadow", value: "Depth", swatch: "var(--shadow-swatch)" },
    ],
  },
];

export const caseStudies = [
  {
    number: "01",
    title: "Frontend Platform / Design System",
    role: "Design Systems Expert / Frontend Platform Lead",
    value:
      "Tokenized components, governance, accessibility, and release paths for reusable product UI.",
    summary:
      "A production-style frontend foundation that connects design tokens, reusable components, documentation, testing, accessibility, and release governance.",
    problem:
      "Product teams need consistent UI delivery without every application rebuilding patterns, accessibility behavior, and release decisions from scratch.",
    architecture: [
      "Design Tokens",
      "Component Library",
      "Frontend Platform",
      "Product Apps",
    ],
    decisions: [
      "Treat components as governed platform assets, not one-off UI fragments.",
      "Document adoption paths so teams can move quickly without losing consistency.",
      "Protect quality through typed APIs, accessibility checks, and automated tests.",
    ],
    stack: ["React", "TypeScript", "Storybook", "Design Tokens", "CI/CD"],
  },
  {
    number: "02",
    title: "AI Content Platform",
    role: "Frontend Architect / AI Integration Lead",
    value:
      "A retrieval-first content workflow for search, reuse, summarization, and channel adaptation.",
    summary:
      "An AI-enabled headless content platform for helping editorial teams search, reuse, summarize, and adapt structured content across channels.",
    problem:
      "Content teams often manage large content libraries without a reliable way to find, recombine, and govern reusable information.",
    architecture: ["Next.js App", "CMS APIs", "Retrieval Layer", "LLM Workflow"],
    decisions: [
      "Use retrieval before generation to ground responses in approved content.",
      "Validate structured outputs before they enter editorial workflows.",
      "Track usage and response quality so AI cost and reliability stay visible.",
    ],
    stack: ["Next.js", "TypeScript", "Headless CMS", "RAG", "LLM APIs"],
  },
  {
    number: "03",
    title: "Engineering Knowledge Agent",
    role: "AI Product / Integration Engineer",
    value:
      "A tool-calling knowledge interface with structured answers, auditability, and evaluation loops.",
    summary:
      "An AI workflow product that searches technical documentation, calls tools, returns structured answers, and evaluates response quality.",
    problem:
      "Engineering teams lose time finding trustworthy project knowledge across docs, APIs, issue trackers, and code-adjacent systems.",
    architecture: ["User", "AI Orchestrator", "Tool Calling", "Docs / APIs / Data"],
    decisions: [
      "Separate orchestration, retrieval, and tool execution for safer evolution.",
      "Use structured outputs and evaluations to make answers inspectable.",
      "Design rate limits, audit logs, and fallback states as product features.",
    ],
    stack: ["Next.js", "MCP", "Tool Calling", "Vector Search", "Observability"],
  },
];

export const expertiseAreas = [
  {
    title: "Design Systems",
    description:
      "Creating design systems that connect product, design, and engineering through reusable components, tokens, accessibility, documentation, and governance.",
    topics: [
      "Component architecture",
      "Design tokens",
      "Storybook",
      "Accessibility",
      "Governance",
      "Reusable UI",
      "Multi-brand systems",
    ],
  },
  {
    title: "Frontend Platforms",
    description:
      "Building scalable frontend foundations that allow multiple teams and products to move quickly without sacrificing quality.",
    topics: [
      "React",
      "Next.js",
      "TypeScript",
      "Frontend architecture",
      "Performance",
      "Testing",
      "CI/CD",
      "Developer experience",
    ],
  },
  {
    title: "Content Platforms & DXP",
    description:
      "Designing content platforms that separate content, presentation, and business logic while supporting multiple teams and channels.",
    topics: [
      "Headless CMS",
      "Content architecture",
      "CMS integrations",
      "Sitecore",
      "Contentful",
      "Sanity",
      "APIs",
      "Multi-site platforms",
    ],
  },
  {
    title: "Applied AI",
    description:
      "Integrating AI into real products and workflows rather than building isolated AI demos.",
    topics: [
      "LLM APIs",
      "RAG",
      "Agents",
      "AI workflows",
      "MCP",
      "Structured outputs",
      "Vector search",
      "AI-assisted interfaces",
    ],
  },
];

export const leadershipHighlights = [
  "Designed reusable design-system architecture for content-heavy digital products, improving consistency and reducing duplicated implementation work.",
  "Built component, token, accessibility, and documentation patterns that help teams ship polished interfaces from a shared foundation.",
  "Led CMS and DXP frontend initiatives from platform decisions through delivery standards, code review, and team mentoring.",
  "Shaped integrations between headless content systems and frontend applications so content can be reused across multiple digital channels.",
  "Established technical patterns for API integration, performance, governance, and maintainable frontend delivery.",
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Architecture",
    skills: [
      "Frontend Architecture",
      "Design Systems",
      "Micro Frontends",
      "Monorepos",
      "API Architecture",
      "Performance",
    ],
  },
  {
    title: "Content Platforms",
    skills: [
      "Headless CMS",
      "Sitecore",
      "Contentful",
      "Sanity",
      "Content Modeling",
      "DXP",
    ],
  },
  {
    title: "AI Engineering",
    skills: [
      "LLM APIs",
      "RAG",
      "AI Agents",
      "Tool Calling",
      "MCP",
      "Structured Outputs",
      "Vector Search",
      "AI Workflows",
    ],
  },
  {
    title: "Engineering",
    skills: ["Node.js", "PostgreSQL", "Testing", "CI/CD", "GitHub Actions"],
  },
  {
    title: "Leadership",
    skills: [
      "Technical Leadership",
      "Architecture Reviews",
      "Mentoring",
      "Engineering Standards",
      "Cross-functional Collaboration",
    ],
  },
];
