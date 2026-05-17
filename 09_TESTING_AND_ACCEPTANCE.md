# Testing and Acceptance Criteria

## Testing approach

Use lightweight tests appropriate for a static site.

Recommended:

- Vitest for simple content/config tests.
- TypeScript typecheck.
- ESLint.
- Build validation through `next build`.

## Suggested tests

Create:

```text
tests/profile.test.ts
```

Test cases:

1. Profile name exists and is `Scott Whitlock`.
2. Role is `Product Manager`.
3. Availability includes `Available now`.
4. LinkedIn URL exists and contains `linkedin.com/in/scott-whitlock`.
5. Resume URL exists and ends with `.pdf`.
6. Career Advocate URL exists.
7. Email href starts with `mailto:`.
8. Phone href starts with `tel:`.
9. Strength card count is exactly 6.
10. About items exist.
11. Metadata title and description exist.
12. No visible content field includes a street address.
13. No employer timeline content appears in v1 sections.

Example test skeleton:

```ts
import { describe, expect, it } from "vitest";
import { profile } from "../content/profile";

describe("profile content", () => {
  it("has core identity fields", () => {
    expect(profile.name).toBe("Scott Whitlock");
    expect(profile.role).toBe("Product Manager");
    expect(profile.availability).toContain("Available now");
  });

  it("has required links", () => {
    expect(profile.linkedInUrl).toContain("linkedin.com/in/scott-whitlock");
    expect(profile.resumeUrl).toMatch(/\.pdf$/);
    expect(profile.careerAdvocateUrl).toBeTruthy();
    expect(profile.emailHref).toMatch(/^mailto:/);
    expect(profile.phoneHref).toMatch(/^tel:/);
  });

  it("has six strengths", () => {
    expect(profile.strengths).toHaveLength(6);
  });
});
```

## Manual QA checklist

Desktop:

- Page loads successfully.
- Header sticks while scrolling.
- Nav anchors scroll to expected sections.
- Hero clearly communicates name, role, availability, and fit.
- Contact, LinkedIn, and Resume CTAs are visible.
- Career Advocate callout is visible and marked as new.
- Strength cards are readable.
- About details expand and collapse.
- Learn More links work.
- Contact buttons work.
- Footer is minimal and does not repeat links.

Mobile:

- Layout stacks cleanly.
- Header remains usable.
- Buttons are large enough to tap.
- Phone button uses `tel:`.
- No horizontal scrolling.
- Strength cards are single-column.
- Details sections are easy to expand.

Light/dark mode:

- Theme toggle works.
- Preference persists after refresh.
- System preference is respected when no stored preference exists.
- No contrast issues in either mode.

Accessibility:

- Keyboard navigation works.
- Focus states are visible.
- Buttons and links have accessible labels.
- Heading order is logical.
- Image alt text is meaningful.
- No important content is image-only.

AI parsing:

- Name, role, availability, location preference, and focus areas are present as text.
- Strength cards are present as text.
- Short bio is present as text.
- Contact methods are clear, even if email and phone values are not visible.
- LinkedIn and resume links are descriptive.

## First build acceptance criteria

The first build is complete when:

- The site runs locally with `npm run dev`.
- The static site builds with `npm run build`.
- The exported site is produced in `out/`.
- The page is responsive across mobile, tablet, and desktop.
- Header navigation works.
- Light/dark mode works.
- Contact, LinkedIn, resume, and chatbot links exist.
- Resume link points to a PDF path.
- Chatbot opens in a new tab.
- The chatbot disclaimer is visible.
- Strength cards render in third person.
- Short bio is visible.
- About details are collapsible.
- No employer timeline appears on the main page.
- No full email or phone number is visible as plain text.
- GitHub Actions can run lint, typecheck, tests, and build.
- Deploy workflow can upload the static `out/` artifact.
- Deploy workflow is ready for DreamHost secrets and target paths.

## Do not accept if

- The site requires a backend server.
- The build does not produce `out/`.
- The site exposes full email or phone as visible plain text.
- The main page becomes a full resume.
- The site includes case studies or work artifacts in v1.
- The chatbot is embedded instead of opening in a new tab.
- The content is mostly image-based.
- The page is not readable without JavaScript-enhanced interactions.
