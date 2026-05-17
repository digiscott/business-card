# Component Specification

## App layout

### `app/layout.tsx`

Responsibilities:

- Define page metadata.
- Include global styles.
- Set language to English.
- Include JSON-LD if implemented at layout level.
- Ensure theme initialization works with dark mode.

### `app/page.tsx`

Responsibilities:

- Compose the single-page site.
- Import content from `content/profile.ts`.
- Render sections in this order:
  1. Header
  2. Hero
  3. CareerAdvocateCallout
  4. AboutSection
  5. StrengthCards
  6. LearnMoreLinks
  7. ContactPanel
  8. Footer

## Components

### `Header.tsx`

Purpose:

Persistent navigation and brand identity.

Content:

- Scott Whitlock brand text.
- Anchor links.
- Theme toggle.

Requirements:

- Use semantic `<header>` and `<nav>`.
- Sticky top behavior.
- Keyboard accessible.
- Mobile responsive.
- Do not crowd the header on mobile.

Suggested nav items:

- About
- Strengths
- Learn More
- Career Advocate
- Contact

### `ThemeToggle.tsx`

Purpose:

Allow visitor to switch light/dark mode.

Requirements:

- Accessible button.
- Clear label such as “Toggle dark mode.”
- Store preference in `localStorage`.
- Respect system preference by default.
- Apply theme to document root.

### `Hero.tsx`

Purpose:

Quickly communicate Scott's identity, availability, role target, and primary actions.

Content:

- Scott Whitlock
- Product Manager
- Availability and role sought line
- Supporting statement
- Headshot placeholder
- CTA buttons

CTA order:

1. Contact Scott
2. View LinkedIn
3. Download Resume

Requirements:

- Use a single `h1` for Scott's name.
- Use semantic text for role and positioning.
- Make CTAs easy to see and tap.
- Use accessible alt text for image placeholder.

### `CareerAdvocateCallout.tsx`

Purpose:

Feature the chatbot as a newly added experience.

Content:

- “New” badge
- Title: Ask Scott's Career Advocate
- Short explanatory copy
- CTA: Ask about Scott
- Disclaimer

Behavior:

- Opens in a new tab.
- Uses `target="_blank"` and `rel="noopener noreferrer"`.

Requirements:

- Section id should be `career-advocate`.
- Make the callout visually distinct but not gimmicky.
- Include the AI disclaimer in visible text.

### `AboutSection.tsx`

Purpose:

Provide short bio and expandable deeper context.

Content:

- Short visible bio.
- Collapsible details sections.

Suggested collapsed sections:

- Product Management Approach
- Design and UX Foundation
- Technical Collaboration
- Practical AI Adoption
- Career History

Requirements:

- Section id should be `about`.
- Use native `<details>` and `<summary>` where possible.
- Keep content parseable in HTML.
- Do not include detailed employer timeline.

### `StrengthCards.tsx`

Purpose:

Summarize Scott's Product Management strengths.

Content:

Use six cards from profile config:

1. Product Discovery
2. Cross-functional Leadership
3. UX-minded Product Thinking
4. Technical Fluency
5. Practical AI Adoption
6. Content & Internal Platforms

Requirements:

- Section id should be `strengths`.
- Responsive grid.
- All card text visible as text.
- Use third-person copy.

### `LearnMoreLinks.tsx`

Purpose:

Provide curated next steps.

Links:

- Contact Scott
- View LinkedIn
- Download Resume
- Ask Scott's Career Advocate
- Read About

Requirements:

- Section id should be `learn-more`.
- Do not add project artifacts or case studies in v1.
- Use descriptive link labels.
- External links should be clear.

### `ContactPanel.tsx`

Purpose:

Make it easy to contact Scott without exposing full contact details as plain text.

Content:

Intro copy:

> Interested in discussing a Product Management role? Use the options below to contact Scott directly.

Buttons:

- Email Scott
- View LinkedIn
- Call Scott

Requirements:

- Section id should be `contact`.
- Do not display full email or phone in visible plain text.
- Use `mailto:` and `tel:` hrefs from config.
- Make phone tap-to-call on mobile.

### `Footer.tsx`

Purpose:

Minimal site footer.

Content:

- Copyright
- Last updated date
- Short purpose statement

Suggested copy:

> © 2026 Scott Whitlock  
> Last updated: [Month Year]  
> Built as a responsive career leavebehind for Product Management opportunities.

Requirements:

- Do not repeat navigation links.
- Keep it minimal.
