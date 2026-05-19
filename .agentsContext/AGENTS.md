# Agent Instructions

This repository builds Scott Whitlock's static Product Management portfolio landing page.

## Read first

Before making product, design, copy, or architecture changes, read the numbered context files in this directory in order:

1. `00_README_FOR_AGENT.md`
2. `01_PRODUCT_BRIEF.md`
3. `02_CONTENT_MODEL.md`
4. `03_DESIGN_DIRECTION.md`
5. `04_TECHNICAL_SPEC.md`
6. `05_COMPONENT_SPEC.md`
7. `06_CONTENT_CONFIG_EXAMPLE.md`
8. `07_SEO_AND_AI_PARSING.md`
9. `08_GITHUB_ACTIONS_AND_DEPLOYMENT.md`
10. `09_TESTING_AND_ACCEPTANCE.md`
11. `10_AGENT_BUILD_PROMPT.md`
12. `11_COPY_BANK.md`
13. `12_OUT_OF_SCOPE.md`

## Guardrails

- Keep v1 a single-page static site.
- Do not add API routes, server actions, databases, authentication, or runtime server dependencies.
- Do not add case studies, work samples, a detailed employer timeline, a blog, a contact form, or a scheduler for v1.
- Keep content third-person.
- Keep full email and phone values out of visible plain text; use `mailto:` and `tel:` hrefs from `content/profile.ts`.
- Keep the Career Advocate as an external link that opens in a new tab; do not embed it.

## Validation

Run these checks when dependencies are available:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```
