# Portfolio Modernization PRD

## Summary

Modernize Hamed Jenabi's portfolio at `hamedjenabi.me` into a recruiter-friendly live design-system demo. The homepage should prove design-system and frontend-platform skill through tokenized brand expressions, compact content, accessible interactions, and a clear path to contact.

## Background / Current State

The portfolio is now a Next.js App Router one-page site with a reduced page shape:

- Hero
- System token demo
- Selected work
- Contact

The site uses a three-tier token model: primitive, semantic, and component tokens. It also includes a persistent `Brand: Terminal / Product` toggle that demonstrates multibrand capability without duplicating page content.

The current technical foundation uses:

- Next.js 16.2.9
- React 19.2.7
- Node 24.18.0 or newer
- Yarn v1 lockfile
- `app/page.js`, `app/content.js`, `app/layout.js`, `app/globals.css`

## Target Users

Primary user: recruiters and hiring managers evaluating Hamed for design-system, frontend-platform, staff frontend, CMS/DXP, and AI-enabled product roles.

Secondary users:

- Technical peers reviewing system thinking
- Collaborators checking contact and GitHub links
- Design-system teams looking for token and multibrand experience

## Goals

- Make Hamed's positioning clear within 10 seconds.
- Let the website itself demonstrate design-system skill.
- Keep copy density low and scanning fast.
- Show multibrand capability through token changes across color, typography, spacing, radius, surfaces, and layout rhythm.
- Keep the experience accessible across keyboard, motion preferences, contrast, and mobile layout.
- Keep SEO metadata aligned with `https://hamedjenabi.me`.

## Non-Goals

- Build a CMS or blog system in this phase.
- Add a full case-study detail route.
- Add authentication, dashboards, or backend product features.
- Add a UI library or token build pipeline before the simple CSS-token system needs it.
- Add decorative effects that distract from the design-system proof.

## User Stories

- As a recruiter, I want to understand Hamed's role, focus, location, proof, and contact path quickly.
- As a hiring manager, I want to see that Hamed can think in tokens, components, brand systems, and frontend platform constraints.
- As a design-system reviewer, I want to see the same interface adapt across brand expressions without duplicated content.
- As a keyboard or reduced-motion user, I want the site to remain usable and calm.
- As Hamed, I want to update content from a clear content module instead of editing dense JSX.

## Requirements

### Content Requirements

- The public domain is `https://hamedjenabi.me`.
- Contact email is `hamed.jenabi@gmail.com`.
- GitHub points to `https://github.com/hamedJenabi`.
- The homepage should render only the essential sections: hero, system, work, contact.
- Selected work cards should stay compact: title, role, one-line value, and tags.
- Supporting expertise data can remain in `app/content.js` for future reuse, but should not crowd the homepage.

### Design Requirements

- Terminal is the default brand expression.
- Product is the alternate brand expression.
- Terminal should feel darker, sharper, denser, and more mono/engineering-led.
- Product should feel lighter, softer, more spacious, and more product-system-led.
- The Product brand should not use the square/grid page background.
- The fixed header should remain visible while scrolling.
- Hover transitions should ease in and out smoothly.
- Cards should remain at 8px radius or less.
- The interface should avoid text-heavy explanatory blocks.

### Token Requirements

- Use CSS custom properties as the v1 token system.
- Model tokens in three tiers:
  - Primitive tokens
  - Semantic tokens
  - Component tokens
- Brand switching should change more than color: font, radius, spacing, surface, shadow, and layout rhythm should also differ.
- The active brand should persist in `localStorage`.

### Accessibility Requirements

- Use one H1.
- Keep heading levels sequential.
- Provide a skip link.
- Keep section landmarks labelled.
- Ensure interactive controls have accessible names.
- Avoid focusable decorative controls.
- Respect `prefers-reduced-motion`.
- Preserve readable contrast in both brands.
- Avoid horizontal overflow on mobile.

### SEO Requirements

- Use `https://hamedjenabi.me` as the canonical domain.
- Render title, description, robots, Googlebot, Open Graph, Twitter, and canonical metadata.
- Provide `robots.txt`.
- Provide `sitemap.xml`.
- Include JSON-LD Person structured data.
- Use the portrait as the social preview image until a dedicated Open Graph image is created.

## Milestones

### Milestone 1: Live Design-System Homepage

Acceptance criteria:

- Homepage renders hero, system, work, and contact sections.
- Token board shows primitive, semantic, and component tiers.
- Brand toggle switches between Terminal and Product.
- Copy density is significantly lower than the previous version.

### Milestone 2: Multibrand Polish

Acceptance criteria:

- Terminal and Product feel meaningfully different.
- Product removes the square/grid background.
- Header stays fixed while scrolling.
- Hover transitions feel smooth in and out.
- Mobile layout has no horizontal overflow.

### Milestone 3: SEO and Accessibility

Acceptance criteria:

- `yarn build` passes.
- `/robots.txt` and `/sitemap.xml` are generated.
- Metadata and structured data use `https://hamedjenabi.me`.
- Browser checks confirm one H1, labelled focusable controls, image alt text, labelled landmarks, and acceptable contrast.

## Current Verification

- `yarn build` passes.
- SEO metadata renders for title, description, canonical, Open Graph, Twitter, robots, and JSON-LD.
- `robots.txt` and `sitemap.xml` are generated as static routes.
- Browser accessibility checks passed for heading order, labelled focusables, image alt text, landmarks, contrast, skip-link visibility, and mobile overflow.

## Open Decisions

- Whether to add LinkedIn to the header, footer, or selected work area.
- Whether to add a downloadable CV or keep the contact path email-first.
- Whether to create a dedicated Open Graph image instead of using the portrait.
- Whether to add individual project pages later.
- Whether to add privacy-conscious analytics.

## Future Enhancements

- Add project detail pages under `app/projects/[slug]/page.js`.
- Add a small writing or notes section for technical credibility.
- Add a dedicated Open Graph image.
- Add a CV link if a current resume is ready.
- Add a minimal analytics solution only if it supports the site's privacy posture.
