export type ProfileLink = {
  label: string;
  href: string;
  description: string;
  external?: boolean;
};

export type Capability = {
  title: string;
  description: string;
};

export type UseCase = {
  title: string;
  description: string;
  tags?: string[];
  href?: string;
  linkLabel?: string;
  category?: string;
  featured?: boolean;
};


export type Profile = {
  name: string;
  role: string;
  availability: string;
  locationPreference: string;
  roleSoughtLine: string;
  positioning: string;
  shortBio: string;
  heroSupportingCopy: string;
  heroAvailabilityLine: string;
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
  capabilities: Capability[];
  useCases: UseCase[];
  learnMoreLinks: ProfileLink[];
};

export const profile: Profile = {
  name: "Scott Whitlock",
  role: "Product Manager",
  availability: "Available now",
  locationPreference: "Remote or Cincinnati-area",
  roleSoughtLine:
    "Product Manager for complex workflows, internal platforms, and AI-enabled product discovery.",
  positioning:
    "Scott helps teams clarify ambiguous needs, connect users and stakeholders, and turn complex workflows into practical product direction.",
  shortBio:
    "Scott Whitlock is a Product Manager who connects product discovery, UX-minded thinking, technical collaboration, and practical AI adoption to help teams improve complex workflows and internal platforms.",
  heroSupportingCopy:
    "Scott helps teams clarify ambiguous needs, connect users and stakeholders, and turn complex workflows into practical product direction.",
  heroAvailabilityLine: "Available for remote or Cincinnati-area Product Manager roles.",
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
  headshotUrl: "/images/scott-whitlock-profile.svg",
  lastUpdated: "May 2026",
  metadata: {
    title: "Scott Whitlock — Product Manager",
    description:
      "Scott Whitlock is a Product Manager for complex workflows, internal platforms, and AI-enabled product discovery, available for remote or Cincinnati-area roles.",
  },
  careerAdvocate: {
    title: "Ask Scott's Career Advocate",
    description:
      "Explore Scott's product management background, strengths, and fit through an AI-assisted chatbot grounded in his provided career materials. For role-specific conversations, contact Scott directly.",
    disclaimer:
      "This chatbot is a helpful guide, not a substitute for a direct conversation with Scott. It is based on materials Scott has provided and may not reflect every detail or current nuance.",
  },
  capabilities: [
    {
      title: "Product Discovery",
      description: "Clarifies user needs, workflows, and business goals in ambiguous spaces.",
    },
    {
      title: "UX-Minded Product Thinking",
      description: "Uses a design background to make tools clearer, more usable, and easier to adopt.",
    },
    {
      title: "Technical Collaboration",
      description:
        "Partners with engineering on APIs, internal platforms, dependencies, tradeoffs, and implementation-ready requirements.",
    },
    {
      title: "Practical AI Adoption",
      description:
        "Uses AI to accelerate discovery, prototyping, requirements, workflow improvement, and product exploration.",
    },
  ],
  useCases: [
    {
      title: "Portfolio Site and AI Career Advocate",
      description:
        "Designed and built this static portfolio site as a product-style career leavebehind, pairing concise positioning with an external AI Career Advocate grounded in approved career materials.",
      tags: ["Product positioning", "AI workflow", "Static site"],
      href: "https://chatgpt.com/g/g-6a09bab5746c819183713ef3cf9d1f87-digiscott-career-advocate",
      linkLabel: "Try the Career Advocate",
      category: "Portfolio product",
      featured: true,
    },
    {
      title: "Tic Tac Pro Game App",
      description:
        "A cross-platform game concept that reimagines Tic-Tac-Toe with a strategic twist: older moves disappear as new ones are placed. The project shows product strategy, UX decisions, technical planning, and AI-assisted development moving from concept toward prototype.",
      tags: ["Product strategy", "UX design", "AI-assisted development"],
      category: "Game app prototype",
      featured: false,
    },
    {
      title: "Tabletop Game Library Manager",
      description:
        "A mobile-first product concept for helping tabletop gamers organize what they own, track what they play, and choose the right game for the right group through explainable recommendations, play logging, and collection-health insights.",
      tags: ["PRD writing", "MVP definition", "User workflows"],
      category: "Product strategy",
      featured: false,
    },
    {
      title: "Desktop Buddy",
      description:
        "A practical companion-product concept for exploring how a lightweight desktop assistant can stay useful without becoming distracting, with emphasis on clear interaction boundaries, simple workflows, and responsible AI-enabled support.",
      tags: ["Product concept", "Interaction design", "AI workflows"],
      category: "Desktop experience",
      featured: false,
    },
    {
      title: "Exam Room Education",
      description:
        "Supported PatientPoint exam room education experiences by connecting product needs, healthcare content workflows, engineering implementation, and stakeholder expectations for point-of-care patient conversations.",
      tags: ["Product discovery", "Content workflows", "Healthcare education"],
      category: "PatientPoint use case",
      featured: false,
    },
    {
      title: "Practice Engagement",
      description:
        "Worked on PatientPoint practice engagement capabilities that helped healthcare practices communicate with staff, reinforce goals, and use digital signage as a repeatable communication hub.",
      tags: ["Workflow design", "Internal tools", "Content deployment"],
      category: "PatientPoint use case",
      featured: false,
    },
    {
      title: "Precision Patient Engagement",
      description:
        "Supported product thinking around targeted PatientPoint engagement experiences where data, content, trusted healthcare channels, and internal platform workflows need to align.",
      tags: ["Product strategy", "Platform thinking", "Targeted engagement"],
      category: "PatientPoint use case",
      featured: false,
    },
  ],
  learnMoreLinks: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/scott-whitlock/",
      description: "Career history, recommendations, and full experience.",
      external: true,
    },
    {
      label: "GitHub",
      href: "https://github.com/digiscott",
      description: "Public technical exploration and project work.",
      external: true,
    },
    {
      label: "Site Repo",
      href: "https://github.com/digiscott/business-card",
      description: "Source for this career site.",
      external: true,
    },
    {
      label: "Resume",
      href: "/resume/Scott-Whitlock-Product-Manager-Resume.pdf",
      description: "Formal resume for application review.",
    },
    {
      label: "Career Advocate",
      href: "https://chatgpt.com/g/g-6a09bab5746c819183713ef3cf9d1f87-digiscott-career-advocate",
      description: "Guided Q&A about Scott's background and fit.",
      external: true,
    },
  ],
};
