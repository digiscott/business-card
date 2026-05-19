# Scott Whitlock Portfolio Site

A small static Product Management career landing page for Scott Whitlock. The site is designed as a responsive leavebehind for hiring staff and AI-assisted screening systems, not as a full resume, blog, or case-study portfolio.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Vitest
- Playwright
- ESLint
- Static export to `out/`
- GitHub Actions for CI and DreamHost deployment

## Local setup

```bash
npm install
npm run dev
```

Open the local URL printed by Next.js.

## Common commands

```bash
npm run dev        # Start local development server
npm run lint       # Run ESLint
npm run typecheck  # Run TypeScript without emitting files
npm test           # Run Vitest tests
npm run test:e2e   # Run Playwright responsive UI tests
npm run build      # Build static export into out/
```

## Static export

`next.config.js` sets `output: "export"` and disables server-based image optimization. `npm run build` should create static HTML, CSS, and JavaScript in `out/`, ready to copy to DreamHost.

## Content updates

Editable site content lives in `content/profile.ts`:

- Name, role, availability, positioning, and bio
- LinkedIn, GitHub, career site repository, resume, Career Advocate, email, and phone hrefs
- Strength cards
- Collapsed About copy
- Metadata and last-updated text

Do not place full email or phone values in visible page copy. Use `mailto:` and `tel:` hrefs in the content config.

## Replace launch assets

- Resume: replace `public/resume/Scott-Whitlock-Product-Manager-Resume.pdf` with the final PDF while keeping the same filename, or update `profile.resumeUrl`.
- Headshot: replace `public/images/headshot-placeholder.svg` with a final image and update `profile.headshotUrl` if the filename changes.
- Career Advocate: `profile.careerAdvocateUrl` points to the production chatbot URL.


## Optional analytics and cookie consent

Google Analytics is disabled by default. To enable it, set this environment variable:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

When enabled, the site shows a cookie consent banner and defaults analytics storage to denied until the visitor accepts.

## CI/CD

GitHub Actions workflows are in `.github/workflows/`:

- `ci.yml` runs lint, typecheck, tests, build, and uploads `out/` as `static-site`.
- `deploy.yml` runs the same checks, uploads `out/`, and deploys to DreamHost with `rsync`.

## Required GitHub environment configuration

Configure these variables in the appropriate GitHub environments before deploying:

- `DREAMHOST_HOST`
- `DREAMHOST_USER`
- `DREAMHOST_TARGET_PATH`
- `DREAMHOST_PORT` (optional; defaults to `22`)

Configure this secret in each deployment environment:

- `DREAMHOST_SSH_KEY`

Suggested target path placeholders:

- Production: `/home/USERNAME/DOMAIN/`
- Dev: `/home/USERNAME/DEV_DOMAIN/`

Use `--delete` only when `DREAMHOST_TARGET_PATH` is dedicated to this site.

## Agent context

The Markdown files in `.agentsContext/` are the source context pack for future agents. Start with `.agentsContext/00_README_FOR_AGENT.md`, then use the product, content, design, technical, component, SEO, deployment, testing, and scope files to guide changes.
