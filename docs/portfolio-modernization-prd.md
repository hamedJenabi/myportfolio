# Portfolio Modernization PRD

## Summary

Modernize Hamed Jenabi's portfolio into a recruiter-focused developer website that presents him as a Team Lead and Software Engineer specializing in CMS, DXP solutions, design systems, headless CMS, frontend engineering, and AI integrations. The site should keep the terminal/engineering visual direction, replace placeholders with real proof, and mature the newly migrated Next.js App Router codebase into a maintainable production portfolio.

## Background / Current State

The portfolio has been redesigned as a dark terminal-inspired one-page site with a recruiter-facing hero, profile/status panel, skills section, coming-soon project cards, and contact area. The positioning now includes team leadership in CMS and DXP solutions, design-system experience, and headless CMS expertise.

The technical foundation has been upgraded from the legacy Pages Router to the Next.js App Router. The app now uses:

- Next.js 16.2.9
- React 19.2.7
- Node 24.18.0 via `.nvmrc` and `.node-version`
- `app/page.js`, `app/layout.js`, `app/globals.css`
- `app/api/hello/route.js`

The site still uses placeholder links and placeholder project content. The next phase should turn the polished shell into a credible recruiting asset.

## Target Users

Primary user: recruiters evaluating Hamed for software engineering roles.

Secondary users:

- Hiring managers scanning technical fit
- Technical peers reviewing project depth
- Collaborators checking contact and GitHub links

## Goals

- Make Hamed's positioning clear within 10 seconds: Team Lead and Software Engineer specializing in CMS, DXP, design systems, headless CMS, frontend, and AI integrations.
- Replace placeholder project cards with credible project summaries or case studies.
- Make contact paths real and easy to use.
- Keep the terminal/engineering aesthetic while preserving readability and recruiter scan speed.
- Improve code organization enough that future content updates are simple.
- Verify the site works across desktop and mobile.

## Non-Goals

- Build a full blog system in this phase.
- Add a CMS before content is stable.
- Create complex animation or 3D effects.
- Add authentication, dashboards, or backend product features.
- Over-optimize for novelty at the cost of recruiter clarity.

## User Stories

- As a recruiter, I want to understand Hamed's role, leadership experience, CMS/DXP focus, location, availability, and contact path without hunting.
- As a recruiter, I want to see 2-3 concrete examples of relevant work so I can decide whether to move him forward.
- As a hiring manager, I want to understand the technologies, tradeoffs, and outcomes behind each project.
- As Hamed, I want to update project content and contact links without editing a large monolithic component.
- As a mobile visitor, I want the same content hierarchy without horizontal scrolling or cramped controls.

## Requirements

### Content Requirements

- Contact email is set to `hamed.jenabi@gmail.com`.
- Replace placeholder GitHub and LinkedIn URLs with real links.
- Add a real CV file or point the CV button to a hosted resume.
- Add team lead experience in CMS and DXP solutions to the hero, about section, and proof areas.
- Add design-system and headless CMS experience to skills and project case-study requirements.
- Decide whether to show Vienna, remote availability, or a broader location label.
- Replace "Coming soon" project cards with either:
  - real case studies, or
  - honest "currently building" cards with concrete scope and tech.
- Add at least one proof point above the project grid if projects are not ready, such as GitHub, resume, skills matrix, or work experience.

### Project Card Requirements

Each project should include:

- Project title
- Short outcome-focused summary
- Role and responsibility
- Tech stack
- Problem solved
- What makes it relevant to CMS, DXP, design systems, frontend, headless CMS, or AI integration work
- Links when available: live demo, repository, case study, or private-code note

### Design Requirements

- Preserve the terminal/engineering direction: command bar, grid, status indicators, terminal panels, monospace metadata.
- Keep the primary CTA as "View Projects".
- Keep "Contact Me" as the secondary CTA.
- Keep GitHub as a tertiary icon/action.
- Avoid making every element visually equal; the page should guide the recruiter.
- Maintain readable contrast and font sizes on mobile and desktop.
- Keep cards at 8px border radius or less.
- Avoid decorative effects that do not support the developer/recruiter story.

### Technical Requirements

- Extract repeated data into a dedicated content module, for example `app/content.js`.
- Consider splitting page sections into components under `app/components/`.
- Keep global layout styles in `app/globals.css`.
- Remove the sample `/api/hello` route if it is not needed.
- Remove unused public assets from the old version after confirming they are not referenced.
- Use `next/image` for the portrait if image optimization is desired.
- Add linting/formatting scripts once tooling is chosen.
- Keep Node 24.18.0 as the project runtime until a newer LTS decision is made.
- Keep `yarn.lock` as the package manager lockfile unless intentionally migrating to npm/pnpm.

## Milestones

### Milestone 1: Real Contact & Identity

Replace all placeholder identity and contact values.

Acceptance criteria:

- Header/contact CTAs use real email or contact route.
- GitHub and LinkedIn links point to real profiles.
- CV link works or is temporarily removed.
- Metadata title and description still match the positioning.

### Milestone 2: Content Architecture

Move portfolio content out of JSX-heavy sections.

Acceptance criteria:

- Nav items, status items, skills, logs, projects, and social links live in a content module.
- Page sections consume content through props or imports.
- Updating project copy does not require editing layout markup.

### Milestone 3: Project Proof

Replace placeholder project cards with credible portfolio proof.

Acceptance criteria:

- At least three cards contain real or concrete in-progress work.
- Each card states problem, role, tech, and outcome/value.
- "Coming soon" language is removed or limited to clearly unfinished items.
- The primary CTA lands on useful content.

### Milestone 4: Production Polish

Prepare the site for real recruiter traffic.

Acceptance criteria:

- `yarn build` passes on Node 24.18.0.
- Desktop and mobile layouts have no horizontal overflow.
- Lighthouse/accessibility pass identifies no critical issues.
- Dead sample API routes and unused old assets are removed.
- README includes setup commands and Node version note.

## Acceptance Criteria

The next phase is complete when:

- A recruiter can identify role, focus, proof, and contact path in under 60 seconds.
- No primary content still says generic placeholder unless intentionally marked as in progress.
- The codebase has a clear App Router structure with styling separated from page logic.
- The site builds successfully with latest Next.js and the declared Node runtime.
- The design still feels like a developer website, not a generic landing page.

## Risks & Mitigations

- Risk: The site looks polished but lacks proof.
  Mitigation: Prioritize project substance over visual additions.

- Risk: Terminal styling reduces readability.
  Mitigation: Keep body copy plain, high-contrast, and scannable.

- Risk: Latest Next.js requires a Node version not installed globally.
  Mitigation: Keep `.nvmrc`, `.node-version`, and `engines` aligned; document setup.

- Risk: Placeholder CV/contact links accidentally ship.
  Mitigation: Add a final content checklist before deployment.

- Risk: Overbuilding content infrastructure slows launch.
  Mitigation: Use a simple content module before considering a CMS.

## Open Decisions

- What are the real email, GitHub, LinkedIn, and CV links?
- Should the location read "Vienna", "Vienna / Remote", or something broader?
- Which three projects should be featured first?
- Should the sample API route be removed entirely?
- Should the app keep Yarn or migrate to another package manager?
- Should the site include analytics, and if so, which privacy posture should it take?

## Future Enhancements

- Add individual project detail pages under `app/projects/[slug]/page.js`.
- Add a small writing or notes section if Hamed wants technical credibility through articles.
- Add light motion for terminal logs and status indicators.
- Add Open Graph image generation for better link previews.
- Add a simple contact form only if email links prove insufficient.
