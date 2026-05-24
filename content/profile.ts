import { profileImageDataUrl } from "./profileImage";
import { useCases } from "./useCases";

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

export type UseCaseVisual =
  | "portfolio"
  | "ticTacPro"
  | "tabletopLibrary"
  | "desktopBuddy"
  | "examRoom"
  | "practiceEngagement"
  | "precisionEngagement";

export type UseCaseSection = {
  title: string;
  body: string[];
  bullets?: string[];
};

export type UseCaseDetail = {
  eyebrow: string;
  headline: string;
  summary: string;
  snapshot: { label: string; value: string }[];
  imagePlaceholders?: { title: string; type: "UX flow" | "Wireframe" | "Diagram" | "PRD" }[];
  visualImage?: {
    src: string;
    alt: string;
  };
  productLinks?: { label: string; href: string }[];
  sections: UseCaseSection[];
  outcome: string;
  visual: UseCaseVisual;
};

export type UseCase = {
  title: string;
  description: string;
  cardImage?: {
    src: string;
    alt: string;
  };
  tags?: string[];
  href?: string;
  linkLabel?: string;
  category?: string;
  featured?: boolean;
  slug: string;
  detail: UseCaseDetail;
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
  linkedInUrl: "https://www.linkedin.com/in/scott-whitlock-a73953a/",
  githubUrl: "https://github.com/digiscott",
  careerSiteRepositoryUrl: "https://github.com/digiscott/business-card",
  resumeUrl: "/resume/Scott_Whitlock_Resume_Updated.pdf",
  careerAdvocateUrl: "https://chatgpt.com/g/g-6a09bab5746c819183713ef3cf9d1f87-digiscott-career-advocate",
  emailHref: "mailto:REPLACE_WITH_EMAIL",
  phoneHref: "tel:REPLACE_WITH_PHONE",
  headshotUrl: profileImageDataUrl,
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
  useCases,
  learnMoreLinks: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/scott-whitlock-a73953a/",
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
      href: "/resume/Scott_Whitlock_Resume_Updated.pdf",
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
