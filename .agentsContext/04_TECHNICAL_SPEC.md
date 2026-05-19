# Technical Specification

## Stack

Use:

- Next.js
- TypeScript
- Tailwind CSS
- Static export
- Light and dark mode
- GitHub Actions
- DreamHost static deployment

## Static export requirement

The site must build to static HTML/CSS/JS files in the `out/` directory.

Use this in `next.config.js`:

```js
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
```

## Hosting requirement

Target hosting is DreamHost as a static site.

Deploy the generated `out/` folder to the configured DreamHost web directory.

## Do not use

Do not use features that break static export:

- API routes
- Server actions
- Server-side rendering
- Dynamic backend rendering
- Runtime-only secrets
- Database calls
- Authentication
- Middleware that requires a server runtime
- Image optimization that requires a Next.js server

## Recommended project structure

```text
scott-whitlock-portfolio/
  .github/
    workflows/
      ci.yml
      deploy.yml
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    Header.tsx
    ThemeToggle.tsx
    Hero.tsx
    CareerAdvocateCallout.tsx
    StrengthCards.tsx
    AboutSection.tsx
    LearnMoreLinks.tsx
    ContactPanel.tsx
    Footer.tsx
  content/
    profile.ts
  lib/
    theme.ts
  public/
    resume/
      Scott_Whitlock_Resume_Updated.pdf
    images/
      headshot-placeholder.svg
  tests/
    profile.test.ts
  next.config.js
  tailwind.config.ts
  tsconfig.json
  package.json
  README.md
```

## Content config

Store editable content in:

```text
content/profile.ts
```

This allows Scott to update copy, links, resume file path, chatbot URL, email, phone, and last-updated date without hunting through components.

## Package scripts

Suggested scripts:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "lint": "next lint",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "test:watch": "vitest"
  }
}
```

If the installed Next.js version no longer supports `next lint`, configure ESLint directly and update the script accordingly.

## TypeScript

Use strict TypeScript where practical.

Recommended:

- Define types for profile content.
- Avoid `any`.
- Keep components simple and typed.
- Validate required URLs and content in tests.

## Tailwind CSS

Use Tailwind for layout, colors, spacing, and responsive behavior.

Dark mode:

- Use class or selector strategy compatible with the installed Tailwind version.
- Add `dark:` variants for color changes.
- Persist theme preference in localStorage.

## Theme implementation

Requirements:

- Detect stored theme preference.
- If no stored preference exists, use system preference.
- Apply theme class to the document root.
- Provide a button in the header to toggle theme.
- Add accessible label to the theme toggle.

## Contact implementation

Use hrefs from content config:

```ts
emailHref: "mailto:REPLACE_WITH_EMAIL",
phoneHref: "tel:REPLACE_WITH_PHONE"
```

Do not display full email or phone number in visible plain text.

## External links

For external links that open in a new tab, use:

```tsx
target="_blank" rel="noopener noreferrer"
```

The Career Advocate chatbot should open in a new tab.

## Resume implementation

Place PDF at:

```text
public/resume/Scott_Whitlock_Resume_Updated.pdf
```

Link to it with:

```text
/resume/Scott_Whitlock_Resume_Updated.pdf
```

## Routing

Single page only for v1.

Use anchor links to sections:

- `#about`
- `#strengths`
- `#learn-more`
- `#career-advocate`
- `#contact`

## README requirements

Create a `README.md` with:

- Project purpose
- Local setup
- Development command
- Build command
- Static export explanation
- Deployment overview
- Where to update content
- Where to replace resume
- Where to replace chatbot URL
- Where to replace headshot
- Required GitHub secrets
- Notes about DreamHost deployment paths
