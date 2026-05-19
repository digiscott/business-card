# Content Config Example

Create this file:

```text
content/profile.ts
```

Suggested implementation:

```ts
export type Strength = {
  title: string;
  body: string;
};

export type AboutItem = {
  title: string;
  body: string;
};

export const profile = {
  name: "Scott Whitlock",
  role: "Product Manager",
  availability: "Available now",
  locationPreference: "Remote or Cincinnati-area",
  roleSought:
    "Available now for Product Manager roles, remote or Cincinnati-area, where he can connect user needs, workflow design, technical teams, and practical AI adoption.",
  heroSupport:
    "Scott brings a design foundation, technical fluency, and cross-functional product leadership experience to teams building clearer workflows, stronger platforms, and practical product solutions.",
  shortBio:
    "Scott Whitlock is a Product Manager with a design foundation, technical fluency, and deep experience connecting product, engineering, UX, creative, and business stakeholders. He helps teams clarify ambiguous needs, improve internal workflows, and deliver practical product solutions across complex digital ecosystems. He is especially interested in roles where product discovery, systems thinking, user empathy, and AI-enabled workflows can create meaningful business value.",
  linkedInUrl: "https://www.linkedin.com/in/scott-whitlock-a73953a/",
  resumeUrl: "/resume/Scott_Whitlock_Resume_Updated.pdf",
  careerAdvocateUrl: "https://chatgpt.com/g/your-custom-gpt-placeholder",
  emailHref: "mailto:REPLACE_WITH_EMAIL",
  phoneHref: "tel:REPLACE_WITH_PHONE",
  headshotUrl: "/images/headshot-placeholder.svg",
  headshotAlt: "Professional headshot placeholder for Scott Whitlock",
  lastUpdated: "TBD",
  strengths: [
    {
      title: "Product Discovery",
      body: "Clarifies ambiguous needs, maps workflows, and turns open-ended problems into product direction."
    },
    {
      title: "Cross-functional Leadership",
      body: "Aligns product, design, engineering, creative, operations, and stakeholders around practical outcomes."
    },
    {
      title: "UX-minded Product Thinking",
      body: "Brings a design foundation and user empathy into product decisions, workflows, and requirements."
    },
    {
      title: "Technical Fluency",
      body: "Partners with engineering on APIs, platforms, systems, dependencies, and implementation tradeoffs."
    },
    {
      title: "Practical AI Adoption",
      body: "Uses AI to accelerate discovery, prototyping, requirements, workflow improvement, and product exploration."
    },
    {
      title: "Content & Internal Platforms",
      body: "Improves tools, workflows, and systems that support content creation, management, and distribution."
    }
  ] satisfies Strength[],
  aboutItems: [
    {
      title: "Product Management Approach",
      body: "Scott focuses on understanding user needs, clarifying business goals, and shaping product direction that teams can act on. He is strongest in ambiguous spaces where workflows, systems, people, and priorities need to be connected."
    },
    {
      title: "Design and UX Foundation",
      body: "Scott's background in digital design helps him think about how products actually feel to the people using them. He brings user empathy, workflow thinking, and visual communication into product conversations."
    },
    {
      title: "Technical Collaboration",
      body: "Scott works closely with engineering teams to translate needs into implementation-ready direction. He is comfortable discussing APIs, content systems, internal tools, automation, dependencies, and tradeoffs."
    },
    {
      title: "Practical AI Adoption",
      body: "Scott uses AI as a practical extension of product work: speeding up discovery, drafting requirements, creating prototypes, exploring workflow improvements, and helping teams evaluate where AI can create useful product value."
    },
    {
      title: "Career History",
      body: "For full career history, roles, and recommendations, visit LinkedIn or download the resume."
    }
  ] satisfies AboutItem[],
  careerAdvocate: {
    badge: "New",
    title: "Ask Scott's Career Advocate",
    body:
      "Explore Scott's product management background, strengths, and fit through an AI-assisted chatbot grounded in his provided career materials. For role-specific conversations, contact Scott directly.",
    buttonLabel: "Ask about Scott",
    disclaimer:
      "Scott's Career Advocate is an AI-assisted experience grounded in materials Scott has provided. It is intended to help hiring teams explore his background more easily, but it may not capture every nuance. For current availability, fit, or specific role discussions, please contact Scott directly."
  },
  metadata: {
    title: "Scott Whitlock | Product Manager",
    description:
      "Scott Whitlock is a Product Manager available now for remote or Cincinnati-area roles focused on workflow design, technical collaboration, internal tools, and practical AI adoption.",
    keywords: [
      "Scott Whitlock",
      "Product Manager",
      "Product Owner",
      "Product Management",
      "UX",
      "technical product management",
      "AI adoption",
      "internal tools",
      "workflow platforms",
      "Cincinnati product manager",
      "remote product manager"
    ]
  }
} as const;
```

## Placeholder values Scott must replace

Before production launch, replace:

- `careerAdvocateUrl`
- `emailHref`
- `phoneHref`
- `lastUpdated`
- Resume PDF file
- Headshot image, if available
- Canonical production URL in metadata, if implemented
