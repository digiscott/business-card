# Scott Whitlock Portfolio Site — Agent Context Pack

This folder contains the context and implementation guidance needed to build Scott Whitlock's personal Product Management portfolio landing page.

The site is intended to be a small, static, responsive career leavebehind for prospective hiring staff before or after an initial interview. It should be human-readable, AI-parseable, easy to maintain, and deployable to DreamHost as static files.

## Recommended build stack

- Next.js
- TypeScript
- Tailwind CSS
- Static export
- Light and dark mode
- GitHub Actions CI/CD
- DreamHost static deployment

## Important project principles

1. Keep it simple.
2. Make it easy to parse by hiring staff and AI screening tools.
3. Do not turn the site into a full resume, case-study portfolio, or blog.
4. Use LinkedIn, PDF resume, bio content, and the Career Advocate chatbot as deeper follow-up paths.
5. Keep employer history and work artifacts out of the main page for v1.
6. Keep contact accessible while reducing scraping.
7. Use third-person copy throughout.

## Files in this context pack

- `01_PRODUCT_BRIEF.md` — Product goals, audience, positioning, and scope.
- `02_CONTENT_MODEL.md` — Site copy, sections, CTA hierarchy, and content structure.
- `03_DESIGN_DIRECTION.md` — Visual tone, responsive layout, accessibility, and theme guidance.
- `04_TECHNICAL_SPEC.md` — Stack, architecture, project structure, static export requirements.
- `05_COMPONENT_SPEC.md` — Component-by-component implementation guidance.
- `06_CONTENT_CONFIG_EXAMPLE.md` — Suggested `content/profile.ts` structure and sample copy.
- `07_SEO_AND_AI_PARSING.md` — Metadata, semantic HTML, and JSON-LD guidance.
- `08_GITHUB_ACTIONS_AND_DEPLOYMENT.md` — CI/CD workflows and DreamHost deployment notes.
- `09_TESTING_AND_ACCEPTANCE.md` — Test plan and acceptance criteria.
- `10_AGENT_BUILD_PROMPT.md` — A direct prompt to give to Codex or Claude Code.
- `11_COPY_BANK.md` — Reusable copy blocks and alternate phrasing.
- `12_OUT_OF_SCOPE.md` — Explicit v1 exclusions.

## Target outcome

A working static-exported Next.js site where:

- `npm run dev` runs locally.
- `npm run build` creates the static export.
- The exported site is deployable from the `out/` folder.
- GitHub Actions runs lint, typecheck, tests, and build.
- Merges to `main` deploy production after secrets are configured.
- Manual workflow dispatch can deploy dev after secrets are configured.
