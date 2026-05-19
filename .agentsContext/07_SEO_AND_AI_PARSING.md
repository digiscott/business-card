# SEO and AI Parsing Requirements

## Goal

The site should be easy for humans and AI-assisted hiring workflows to understand.

Use semantic HTML, structured headings, concise text, and descriptive links. Do not hide important information inside images, animations, canvas elements, or interactive-only UI.

## Metadata

Suggested title:

```text
Scott Whitlock | Product Manager
```

Suggested description:

```text
Scott Whitlock is a Product Manager available now for remote or Cincinnati-area roles focused on workflow design, technical collaboration, internal tools, and practical AI adoption.
```

Suggested keywords:

```text
Scott Whitlock, Product Manager, Product Owner, Product Management, UX, technical product management, AI adoption, internal tools, workflow platforms, Cincinnati product manager, remote product manager
```

Robots:

```text
index, follow
```

Canonical URL:

```text
TBD
```

Do not include an exact street address.

## Heading structure

Use one `h1`:

> Scott Whitlock

Suggested section headings:

- `h2` — Ask Scott's Career Advocate
- `h2` — About Scott
- `h2` — Product Management Strengths
- `h2` — Learn More
- `h2` — Contact Scott

Card titles can be `h3`.

## Structured text block

Include visible or screen-reader-friendly structured details on the page, not hidden for manipulation.

Suggested visible text near hero or About:

```text
Target role: Product Manager
Availability: Available now
Location preference: Remote or Cincinnati-area
Focus areas: Product discovery, workflow platforms, internal tools, technical collaboration, UX-minded product thinking, and practical AI adoption.
```

## JSON-LD Person schema

Add a JSON-LD Person schema. Keep it accurate and non-private.

Suggested shape:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Scott Whitlock",
  "jobTitle": "Product Manager",
  "url": "TBD",
  "sameAs": [
    "https://www.linkedin.com/in/scott-whitlock-a73953a/"
  ],
  "knowsAbout": [
    "Product Management",
    "Product Discovery",
    "Product Ownership",
    "UX",
    "Technical Product Management",
    "Internal Tools",
    "Workflow Platforms",
    "AI Adoption",
    "Cross-functional Leadership"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Cincinnati",
    "addressRegion": "OH",
    "addressCountry": "US"
  }
}
```

Do not include:

- Street address
- Full phone number in JSON-LD for v1
- Full email address in JSON-LD for v1

This aligns with the scraping-reduction preference.

## Link text

Use descriptive link text.

Good:

- Contact Scott
- View Scott's LinkedIn profile
- Download Scott Whitlock's Product Manager resume as a PDF
- Ask Scott's Career Advocate

Avoid:

- Click here
- Learn more
- Link

## AI readability rules

- Important content must be real text.
- Strength cards must render as HTML text.
- About details must render in the page markup.
- Do not rely on JavaScript to fetch core content from an external source.
- Do not obscure text for visual effects.
- Do not require a user interaction to reveal the primary positioning.
- Collapsed About content is acceptable if it is in the HTML via `<details>`.

## Privacy and professional boundaries

Do not include:

- Home address
- Full phone number as visible plain text
- Full email as visible plain text
- Confidential employer details
- Severance details
- Internal company details
- Private family details

## Open Graph

Suggested Open Graph metadata:

```text
og:title: Scott Whitlock | Product Manager
og:description: Product Manager available now for remote or Cincinnati-area roles focused on workflow design, technical collaboration, internal tools, and practical AI adoption.
og:type: website
og:url: TBD
og:image: TBD
```

If no branded social image exists yet, use a simple generated OG image later. Do not block v1 on this.
