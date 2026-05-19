# Content Model

## Voice

Use third person throughout.

Good examples:

- Scott clarifies ambiguous needs.
- Scott is available now for Product Manager roles.
- Scott brings a design foundation and technical fluency.

Avoid first person:

- I clarify ambiguous needs.
- I am looking for a Product Manager role.

## Tone

Modern, personable, clear, confident, and concise.

Avoid:

- Long paragraphs
- Overly corporate language
- Buzzword stacking
- Dense resume-style lists
- Unsupported claims or metrics
- Confidential or employer-specific details

## Page structure

1. Header / persistent navigation
2. Hero
3. AI Career Advocate callout
4. Short bio
5. Product Management strengths
6. Collapsed About section
7. Learn More links
8. Contact panel
9. Footer

## Header / nav content

Brand:

> Scott Whitlock

Nav items:

- About
- Strengths
- Learn More
- Career Advocate
- Contact

Include a theme toggle in the header.

## Hero content

Name:

> Scott Whitlock

Role:

> Product Manager

Primary role line:

> Available now for Product Manager roles, remote or Cincinnati-area, where he can connect user needs, workflow design, technical teams, and practical AI adoption.

Supporting copy:

> Scott brings a design foundation, technical fluency, and cross-functional product leadership experience to teams building clearer workflows, stronger platforms, and practical product solutions.

Hero CTAs in order:

1. Contact Scott
2. View LinkedIn
3. Download Resume

## AI Career Advocate callout

This should feel like a newly added feature in the UI.

Badge:

> New

Title:

> Ask Scott's Career Advocate

Short callout copy:

> Explore Scott's product management background, strengths, and fit through an AI-assisted chatbot grounded in his provided career materials. For role-specific conversations, contact Scott directly.

Button label:

> Ask about Scott

Behavior:

- Open in a new tab.
- Use `target="_blank"`.
- Use `rel="noopener noreferrer"`.

Disclaimer:

> Scott's Career Advocate is an AI-assisted experience grounded in materials Scott has provided. It is intended to help hiring teams explore his background more easily, but it may not capture every nuance. For current availability, fit, or specific role discussions, please contact Scott directly.

## Short bio

Keep visible on the page.

Suggested copy:

> Scott Whitlock is a Product Manager with a design foundation, technical fluency, and deep experience connecting product, engineering, UX, creative, and business stakeholders. He helps teams clarify ambiguous needs, improve internal workflows, and deliver practical product solutions across complex digital ecosystems. He is especially interested in roles where product discovery, systems thinking, user empathy, and AI-enabled workflows can create meaningful business value.

## Product Management strength cards

Use six cards. Keep text concise. Use third person.

### Product Discovery

Clarifies ambiguous needs, maps workflows, and turns open-ended problems into product direction.

### Cross-functional Leadership

Aligns product, design, engineering, creative, operations, and stakeholders around practical outcomes.

### UX-minded Product Thinking

Brings a design foundation and user empathy into product decisions, workflows, and requirements.

### Technical Fluency

Partners with engineering on APIs, platforms, systems, dependencies, and implementation tradeoffs.

### Practical AI Adoption

Uses AI to accelerate discovery, prototyping, requirements, workflow improvement, and product exploration.

### Content & Internal Platforms

Improves tools, workflows, and systems that support content creation, management, and distribution.

## Collapsed About section

Use native `<details>` and `<summary>` where possible.

### Product Management Approach

Scott focuses on understanding user needs, clarifying business goals, and shaping product direction that teams can act on. He is strongest in ambiguous spaces where workflows, systems, people, and priorities need to be connected.

### Design and UX Foundation

Scott's background in digital design helps him think about how products actually feel to the people using them. He brings user empathy, workflow thinking, and visual communication into product conversations.

### Technical Collaboration

Scott works closely with engineering teams to translate needs into implementation-ready direction. He is comfortable discussing APIs, content systems, internal tools, automation, dependencies, and tradeoffs.

### Practical AI Adoption

Scott uses AI as a practical extension of product work: speeding up discovery, drafting requirements, creating prototypes, exploring workflow improvements, and helping teams evaluate where AI can create useful product value.

### Career History

For full career history, roles, and recommendations, visit LinkedIn or download the resume.

## Learn More links

Include:

1. Contact Scott
2. View LinkedIn
3. Download Resume
4. Ask Scott's Career Advocate
5. Read About section on page

Do not include project artifacts or case studies in v1.

## Contact panel

Intro copy:

> Interested in discussing a Product Management role? Use the options below to contact Scott directly.

Buttons:

- Email Scott
- View LinkedIn
- Call Scott

Scraping reduction:

- Do not show full email or phone in visible plain text.
- Use `mailto:` and `tel:` href values from config.
- LinkedIn URL may be visible because it is public.

## Resume link

Use a downloadable PDF only for v1.

Suggested path:

```text
/public/resume/Scott_Whitlock_Resume_Updated.pdf
```

Suggested link label:

> Download Resume

Accessible label:

> Download Scott Whitlock's Product Manager resume as a PDF

## Footer

Do not repeat links.

Suggested copy:

> © 2026 Scott Whitlock  
> Last updated: [Month Year]  
> Built as a responsive career leavebehind for Product Management opportunities.
