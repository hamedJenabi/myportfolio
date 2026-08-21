# Portfolio Design System

This context defines the language for Hamed Jenabi's portfolio as a live design-system artifact. It keeps the portfolio vocabulary precise while the site moves from copy-heavy positioning to visible system behavior.

## Language

**Live Design-System Demo**:
The portfolio itself acts as proof of design-system skill by showing reusable patterns, tokenized visual decisions, and brand adaptability.
_Avoid_: Portfolio redesign, visual refresh, landing page

**Primitive Token**:
A foundational design value with no product meaning on its own, such as a base color, size, or type value.
_Avoid_: Raw style, hardcoded value

**Semantic Token**:
A role-based design decision that gives a primitive value meaning within the interface, such as surface, text, accent, or border.
_Avoid_: Alias token, theme variable

**Component Token**:
A component-scoped design decision that adapts a specific pattern while preserving the shared semantic language.
_Avoid_: Component style override, one-off CSS

**Brand Expression**:
A complete visual identity for the same portfolio content and components, expressed through tokens that can change palette, typography, spacing, radius, layout rhythm, and component composition.
_Avoid_: Theme, skin, mode

**Terminal Brand Expression**:
The default brand expression, centered on engineering confidence, terminal-inspired surfaces, sharper radius, denser rhythm, monospace typography, and a restrained dark interface.
_Avoid_: Dark mode, hacker theme

**Product Brand Expression**:
The alternate brand expression, centered on polished product-system clarity, light surfaces, ink text, cobalt and mint accents, warmer spacing, softer radius, sans-serif typography, and a reordered product-page composition.
_Avoid_: Light mode, designer mode

**Multibrand Demonstration**:
The portfolio's ability to switch between different brand expressions while keeping the same structure, content intent, and component system.
_Avoid_: Dark mode, color toggle

**Token Board**:
A compact interface section that makes primitive, semantic, and component tokens visible through three labeled columns and live sample components.
_Avoid_: Token documentation, style guide page

**Copy Density**:
The amount of explanatory text competing for attention on the page.
_Avoid_: Content amount, wordiness

**Copy-Light Portfolio**:
A portfolio presentation that keeps headlines, one-line summaries, tags, selected work, the token board, and direct contact paths while removing repeated explanatory paragraphs.
_Avoid_: Minimal portfolio, sparse page

**Selected Work Card**:
A compact proof unit with a title, role, one-line value statement, and tags.
_Avoid_: Case study card, project article

**Compact Closing Section**:
A short contact area that closes the page without a large call-to-action band.
_Avoid_: Footer-only contact, full CTA band
