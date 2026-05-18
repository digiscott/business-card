export type ProfileLink = {
  label: string;
  href: string;
  description: string;
  external?: boolean;
};

export type Strength = {
  title: string;
  description: string;
};

export type AboutItem = {
  title: string;
  body: string;
};

export type Profile = {
  name: string;
  role: string;
  availability: string;
  locationPreference: string;
  roleSoughtLine: string;
  positioning: string;
  shortBio: string;
  focusAreas: string[];
  linkedInUrl: string;
  githubUrl: string;
  careerSiteRepositoryUrl: string;
  resumeUrl: string;
  careerAdvocateUrl: string;
  emailHref: string;
  phoneHref: string;
  headshotUrl: string;
  lastUpdated: string;
  metadata: {
    title: string;
    description: string;
  };
  careerAdvocate: {
    title: string;
    description: string;
    disclaimer: string;
  };
  strengths: Strength[];
  about: AboutItem[];
  learnMoreLinks: ProfileLink[];
};

export const profile: Profile = {
  name: "Scott Whitlock",
  role: "Product Manager",
  availability: "Available now",
  locationPreference: "Remote or Cincinnati-area",
  roleSoughtLine:
    "Available now for Product Manager roles, remote or Cincinnati-area, where he can connect user needs, workflow design, technical teams, and practical AI adoption.",
  positioning:
    "Product Manager with a design foundation, technical fluency, cross-functional leadership experience, and a practical approach to AI-enabled workflows.",
  shortBio:
    "Scott Whitlock is a Product Manager with a design foundation, technical fluency, and deep experience connecting product, engineering, UX, creative, and business stakeholders. He helps teams clarify ambiguous needs, improve internal workflows, and deliver practical product solutions across complex digital ecosystems. He is especially interested in roles where product discovery, systems thinking, user empathy, and AI-enabled workflows can create meaningful business value.",
  focusAreas: [
    "Product Management",
    "Internal tools",
    "Workflow platforms",
    "AI adoption",
    "Cross-functional product leadership",
    "UX-minded discovery",
    "Technical collaboration",
  ],
  linkedInUrl: "https://www.linkedin.com/in/scott-whitlock/",
  githubUrl: "https://github.com/digiscott",
  careerSiteRepositoryUrl: "https://github.com/digiscott/business-card",
  resumeUrl: "/resume/Scott-Whitlock-Product-Manager-Resume.pdf",
  careerAdvocateUrl: "https://chatgpt.com/g/g-6a09bab5746c819183713ef3cf9d1f87-digiscott-career-advocate",
  emailHref: "mailto:REPLACE_WITH_EMAIL",
  phoneHref: "tel:REPLACE_WITH_PHONE",
  headshotUrl: "/images/headshot-placeholder.svg",
  lastUpdated: "May 2026",
  metadata: {
    title: "Scott Whitlock — Product Manager",
    description:
      "Scott Whitlock is available now for Product Manager roles, with strengths in product discovery, cross-functional leadership, workflow platforms, and practical AI adoption.",
  },
  careerAdvocate: {
    title: "Ask Scott's Career Advocate",
    description:
      "Explore Scott's product management background, strengths, and fit through an AI-assisted chatbot grounded in his provided career materials. For role-specific conversations, contact Scott directly.",
    disclaimer:
      "This chatbot is a helpful guide, not a substitute for a direct conversation with Scott. It is based on materials Scott has provided and may not reflect every detail or current nuance.",
  },
  strengths: [
    {
      title: "Product Discovery",
      description:
        "Clarifies ambiguous needs, maps workflows, and turns open-ended problems into product direction.",
    },
    {
      title: "Cross-functional Leadership",
      description:
        "Aligns product, design, engineering, creative, operations, and stakeholders around practical outcomes.",
    },
    {
      title: "UX-minded Product Thinking",
      description:
        "Brings a design foundation and user empathy into product decisions, workflows, and requirements.",
    },
    {
      title: "Technical Fluency",
      description:
        "Partners with engineering on APIs, platforms, systems, dependencies, and implementation tradeoffs.",
    },
    {
      title: "Practical AI Adoption",
      description:
        "Uses AI to accelerate discovery, prototyping, requirements, workflow improvement, and product exploration.",
    },
    {
      title: "Content & Internal Platforms",
      description:
        "Improves tools, workflows, and systems that support content creation, management, and distribution.",
    },
  ],
  about: [
    {
      title: "Product Management Approach",
      body: "Scott focuses on understanding user needs, clarifying business goals, and shaping product direction that teams can act on. He is strongest in ambiguous spaces where workflows, systems, people, and priorities need to be connected.",
    },
    {
      title: "Design and UX Foundation",
      body: "Scott's background in digital design helps him think about how products actually feel to the people using them. He brings user empathy, workflow thinking, and visual communication into product conversations.",
    },
    {
      title: "Technical Collaboration",
      body: "Scott works closely with engineering teams to translate needs into implementation-ready direction. He is comfortable discussing APIs, content systems, internal tools, automation, dependencies, and tradeoffs.",
    },
    {
      title: "Practical AI Adoption",
      body: "Scott uses AI as a practical extension of product work: speeding up discovery, drafting requirements, creating prototypes, exploring workflow improvements, and helping teams evaluate where AI can create useful product value.",
    },
    {
      title: "Career History",
      body: "For full career history, roles, and recommendations, visit LinkedIn or download the resume.",
    },
  ],
  learnMoreLinks: [
    {
      label: "View LinkedIn",
      href: "https://www.linkedin.com/in/scott-whitlock/",
      description: "Career history, roles, skills, and recommendations.",
      external: true,
    },
    {
      label: "View GitHub",
      href: "https://github.com/digiscott",
      description: "Public GitHub profile for code and technical exploration.",
      external: true,
    },
    {
      label: "Career Site Repo",
      href: "https://github.com/digiscott/business-card",
      description: "Source repository for this static Product Management career site.",
      external: true,
    },
    {
      label: "Download Resume",
      href: "/resume/Scott-Whitlock-Product-Manager-Resume.pdf",
      description: "A formal PDF resume for application review.",
    },
    {
      label: "Ask Scott's Career Advocate",
      href: "https://chatgpt.com/g/g-6a09bab5746c819183713ef3cf9d1f87-digiscott-career-advocate",
      description: "Guided Q&A grounded in approved career materials.",
      external: true,
    },
  ],
};
