# Agent Build Prompt

Use this prompt with Claude Code, Codex, or another coding agent after providing the full context pack.

```text
You are building a static personal portfolio landing page for Scott Whitlock.

Read all Markdown files in the context pack before making implementation decisions.

Build a Next.js + TypeScript + Tailwind CSS site configured for static export. The site should be a single-page responsive career leavebehind for Product Management opportunities. It must be easy for hiring staff and AI screening tools to parse.

Core requirements:
- Single-page site.
- Next.js static export using output: "export".
- Tailwind CSS.
- TypeScript.
- Light and dark mode with a nav toggle.
- Persistent responsive nav.
- Semantic HTML.
- Editable content in content/profile.ts.
- Downloadable PDF resume link.
- LinkedIn link.
- Email and phone contact buttons without exposing the full email or phone as visible plain text.
- AI Career Advocate callout that opens a placeholder Custom GPT URL in a new tab and includes a visible AI disclaimer.
- Product Management strength cards.
- Short visible bio.
- Collapsed About sections using accessible details/summary elements.
- Minimal footer without repeated links.
- GitHub Actions for CI and deployment.
- Static deployment workflow for DreamHost using rsync over SSH.
- Tests for profile content.

Do not add:
- Case studies.
- Employer timeline.
- Work artifacts.
- Contact form.
- Calendar scheduler.
- Blog.
- CMS.
- Database.
- Authentication.
- Backend API routes.
- Server-side rendering.
- Embedded chatbot iframe.

Use the project structure described in the context files. If package or framework versions require minor adjustments, make pragmatic choices while preserving the intent.

After implementation, ensure these commands work:
- npm run dev
- npm run lint
- npm run typecheck
- npm run test
- npm run build

The build must produce a static export in out/.

Create or update README.md with setup, build, content update, and deployment instructions.
```
