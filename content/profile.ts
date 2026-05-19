import { profileImageDataUrl } from "./profileImage";

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
  imagePlaceholders: { title: string; type: "UX flow" | "Wireframe" | "Diagram" }[];
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
  useCases: [
    {
      title: "Portfolio Site and AI Career Advocate",
      description:
        "Designed and built this static portfolio site as a product-style career leavebehind, pairing concise positioning with an external AI Career Advocate grounded in approved career materials.",
      tags: ["Product positioning", "AI workflow", "Static site"],
      href: "/use-cases/portfolio-site-ai-career-advocate",
      linkLabel: "View use case",
      category: "Portfolio product",
      featured: true,
      slug: "portfolio-site-ai-career-advocate",
      detail: {
        eyebrow: "Portfolio product",
        headline: "Turning a career leavebehind into a product experience",
        summary:
          "This portfolio site is treated as a focused product: a static, recruiter-friendly front door that makes Scott's positioning clear, routes visitors to the right next step, and connects to an external AI Career Advocate for guided exploration.",
        visual: "portfolio",
        snapshot: [
          { label: "Type", value: "Static portfolio site" },
          { label: "Focus", value: "Positioning, information architecture, AI-assisted follow-up" },
          { label: "Platform", value: "Next.js static export" },
          { label: "Status", value: "Live portfolio leavebehind" },
        ],
        imagePlaceholders: [
          { title: "Primary UX flow", type: "UX flow" },
          { title: "Interaction wireframe", type: "Wireframe" },
          { title: "System relationship diagram", type: "Diagram" },
        ],
        sections: [
          {
            title: "The challenge",
            body: [
              "Hiring teams need to understand Scott's target role, product strengths, and contact paths quickly without wading through a full resume or dense case-study archive.",
              "The site needed to stay lightweight and static while still supporting deeper follow-up through LinkedIn, a resume, and the Career Advocate experience.",
            ],
          },
          {
            title: "Product approach",
            body: [
              "Scott shaped the page around the first questions a recruiter or hiring manager would ask: what role he is seeking, what kind of Product Manager he is, and how to learn more or contact him.",
              "The Career Advocate is positioned as a guided external follow-up path, not a replacement for direct conversation.",
            ],
            bullets: [
              "Single-page career front door",
              "Clear CTA hierarchy",
              "Third-person, AI-readable copy",
              "Static deployment-friendly implementation",
            ],
          },
        ],
        outcome:
          "The result is a concise product-management leavebehind that demonstrates positioning, scope control, content strategy, and practical AI adoption in the artifact itself.",
      },
    },
    // Temporarily hidden; keep this use case available to restore later.
    // {
    //   title: "Tic Tac Pro Game App",
    //   description:
    //     "A cross-platform game concept that reimagines Tic-Tac-Toe with a strategic twist: older moves disappear as new ones are placed. The project shows product strategy, UX decisions, technical planning, and AI-assisted development moving from concept toward prototype.",
    //   tags: ["Product strategy", "UX design", "AI-assisted development"],
    //   href: "/use-cases/tic-tac-pro-game-app",
    //   linkLabel: "View use case",
    //   category: "Game app prototype",
    //   featured: false,
    //   slug: "tic-tac-pro-game-app",
    //   detail: {
    //     eyebrow: "Game app prototype",
    //     headline: "Building a cross-platform game app with AI-assisted product development",
    //     summary:
    //       "Tic Tac Pro explores how a familiar game can become more strategic when older moves disappear as new ones are placed, creating a faster and more dynamic version of Tic-Tac-Toe.",
    //     visual: "ticTacPro",
    //     snapshot: [
    //       { label: "Type", value: "Mobile/web game prototype" },
    //       { label: "Focus", value: "Product strategy, UX design, game rules, AI-assisted development" },
    //       { label: "Platform direction", value: "Web, iOS, Android" },
    //       { label: "Technical direction", value: "Shared Expo / React Native codebase" },
    //     ],
    //     imagePlaceholders: [
    //       { title: "Primary UX flow", type: "UX flow" },
    //       { title: "Interaction wireframe", type: "Wireframe" },
    //       { title: "System relationship diagram", type: "Diagram" },
    //     ],
    //     sections: [
    //       {
    //         title: "The challenge",
    //         body: [
    //           "The app needed to feel simple enough for anyone to understand quickly while adding enough strategy to make the familiar game feel fresh.",
    //           "It also needed a technical direction that could support future expansion across web, iOS, and Android without creating separate codebases for each platform.",
    //         ],
    //         bullets: [
    //           "Clarify the disappearing-move mechanic",
    //           "Design onboarding that makes the rule change obvious",
    //           "Separate prototype scope from future features",
    //           "Use AI tools to accelerate documentation and development planning",
    //         ],
    //       },
    //       {
    //         title: "Product thinking",
    //         body: [
    //           "Scott treated the game as a product exercise rather than just a code exercise. The work included rules, edge cases, player feedback, UI states, feature boundaries, and a path toward cross-platform delivery.",
    //           "AI-assisted workflows helped move quickly from idea to prototype while keeping decisions grounded in player clarity and product scope.",
    //         ],
    //       },
    //     ],
    //     outcome:
    //       "The concept demonstrates how Scott uses product judgment, UX thinking, technical planning, and AI-assisted workflows to turn a small idea into a structured prototype path.",
    //   },
    // },
    {
      title: "Tabletop Game Library Manager",
      description:
        "A mobile-first product concept for helping tabletop gamers organize what they own, track what they play, and choose the right game for the right group through explainable recommendations, play logging, and collection-health insights.",
      cardImage: {
        src: "/images/tabletop-splash.png",
        alt: "Tabletop Game Library Manager splash screen with board game collection artwork",
      },
      tags: ["PRD writing", "MVP definition", "User workflows"],
      href: "/use-cases/tabletop-game-library-manager",
      linkLabel: "View use case",
      category: "Product strategy",
      featured: false,
      slug: "tabletop-game-library-manager",
      detail: {
        eyebrow: "Product strategy",
        headline: "Turning a personal hobby problem into a focused product strategy",
        summary:
          "The Tabletop Game Library Manager is a mobile-first product concept for helping tabletop players organize collections, track play history, and choose the right game for the right group.",
        visual: "tabletopLibrary",
        snapshot: [
          { label: "Type", value: "Mobile-first responsive web app concept" },
          { label: "Focus", value: "PRD writing, MVP definition, user workflows, feature prioritization" },
          { label: "Core question", value: "What is owned, what has been played, and what should be played next?" },
          { label: "Status", value: "Product strategy and PRD foundation" },
        ],
        imagePlaceholders: [
          { title: "Primary UX flow", type: "UX flow" },
          { title: "Interaction wireframe", type: "Wireframe" },
          { title: "System relationship diagram", type: "Diagram" },
        ],
        sections: [
          {
            title: "The challenge",
            body: [
              "Tabletop game collections can grow quickly, but choosing what to play often gets harder over time. Players may own dozens of games while still struggling to find the right option for a group, time limit, or mood.",
              "The product needed to stay focused for an MVP, avoiding early scope creep into social networking, marketplaces, native apps, or full community features.",
            ],
          },
          {
            title: "Product approach",
            body: [
              "Scott defined the product around a simple workflow: Add, Organize, Find, Play, Learn. Users can add games, organize shelves, find something to play, log sessions, and review collection-health insights over time.",
              "A key design principle is that recommendations should be explainable and user-controlled instead of black-box suggestions.",
            ],
            bullets: [
              "Private collection management",
              "Manual, smart, and hybrid shelves",
              "Filter-based Find a Game experience",
              "Quick and detailed play logging",
              "Collection-health insights and export controls",
            ],
          },
        ],
        outcome:
          "The result is a clear product foundation that can support prototype design, user research, backlog creation, and future implementation planning.",
      },
    },
    {
      title: "Desktop Buddy",
      description:
        "A practical companion-product concept for exploring how a lightweight desktop assistant can stay useful without becoming distracting, with emphasis on clear interaction boundaries, simple workflows, and responsible AI-enabled support.",
      tags: ["Product concept", "Interaction design", "AI workflows"],
      href: "/use-cases/desktop-buddy",
      linkLabel: "View use case",
      category: "Desktop experience",
      featured: false,
      slug: "desktop-buddy",
      detail: {
        eyebrow: "Desktop experience",
        headline: "Designing a lightweight desktop companion with useful boundaries",
        summary:
          "Desktop Buddy is a product concept for a lightweight assistant that can help with reminders, workflow prompts, and contextual support without becoming another distracting app competing for attention.",
        visual: "desktopBuddy",
        snapshot: [
          { label: "Type", value: "Desktop companion concept" },
          { label: "Focus", value: "Interaction boundaries, workflow support, AI-enabled assistance" },
          { label: "Product question", value: "How can an assistant be helpful without becoming noisy?" },
          { label: "Status", value: "Concept and product direction" },
        ],
        imagePlaceholders: [
          { title: "Primary UX flow", type: "UX flow" },
          { title: "Interaction wireframe", type: "Wireframe" },
          { title: "System relationship diagram", type: "Diagram" },
        ],
        sections: [
          {
            title: "The challenge",
            body: [
              "Desktop utilities can easily become intrusive. The product needed a clear reason to exist, a small set of valuable jobs, and interaction patterns that respect focus.",
              "The concept explores what belongs in a lightweight desktop companion versus what should remain in existing productivity tools.",
            ],
          },
          {
            title: "Product approach",
            body: [
              "Scott framed the assistant around helpful constraints: visible but not demanding, proactive but not interruptive, and simple enough to understand without training.",
              "The concept emphasizes clear states, user-controlled prompts, lightweight personalization, and responsible AI-enabled support for everyday workflows.",
            ],
            bullets: [
              "Define useful assistant jobs to be done",
              "Set boundaries around notifications and interruption",
              "Explore simple desktop interaction states",
              "Use AI support where it makes workflow value clearer",
            ],
          },
        ],
        outcome:
          "The concept shows Scott's ability to reason through emerging AI-adjacent product ideas with scope control, interaction clarity, and user attention in mind.",
      },
    },
    {
      title: "Exam Room Education",
      description:
        "Supported PatientPoint exam room education experiences by connecting product needs, healthcare content workflows, engineering implementation, and stakeholder expectations for point-of-care patient conversations.",
      tags: ["Product discovery", "Content workflows", "Healthcare education"],
      href: "/use-cases/exam-room-education",
      linkLabel: "View use case",
      category: "PatientPoint use case",
      featured: false,
      slug: "exam-room-education",
      detail: {
        eyebrow: "PatientPoint use case",
        headline: "Supporting better conversations in the exam room",
        summary:
          "PatientPoint's exam room experience supports point-of-care education, helping providers explain conditions, procedures, and treatment options through relevant health content.",
        visual: "examRoom",
        snapshot: [
          { label: "Context", value: "IXR / Interactive Exam Room" },
          { label: "Focus", value: "Product discovery, content workflows, stakeholder alignment" },
          { label: "Users", value: "Patients, providers, clinical and content teams" },
          { label: "Contribution", value: "Requirements, workflows, internal tooling, cross-functional delivery" },
        ],
        imagePlaceholders: [
          { title: "Primary UX flow", type: "UX flow" },
          { title: "Interaction wireframe", type: "Wireframe" },
          { title: "System relationship diagram", type: "Diagram" },
        ],
        productLinks: [
          {
            label: "PatientPoint Exam Room",
            href: "https://patientpoint.com/healthcare-provider/exam-room/",
          },
        ],
        sections: [
          {
            title: "The problem",
            body: [
              "Exam room education needs to be timely, accurate, specialty-relevant, and easy for providers to use during real conversations with patients.",
              "The challenge was not only delivering content to screens, but making sure the right educational material could be created, organized, deployed, and maintained across a complex healthcare content ecosystem.",
            ],
          },
          {
            title: "Scott's contribution",
            body: [
              "Scott helped bridge content strategy, technical systems, and product execution by supporting requirements, workflows, and internal tooling connected to PatientPoint's exam room experience.",
              "The work connected clinical, creative, product, and technical teams so needs could become clearer requirements and implementation paths.",
            ],
          },
        ],
        outcome:
          "This work supported a more scalable content and platform foundation for patient education experiences used at the point of care.",
      },
    },
    {
      title: "Practice Engagement",
      description:
        "Worked on PatientPoint practice engagement capabilities that helped healthcare practices communicate with staff, reinforce goals, and use digital signage as a repeatable communication hub.",
      tags: ["Workflow design", "Internal tools", "Content deployment"],
      href: "/use-cases/practice-engagement",
      linkLabel: "View use case",
      category: "PatientPoint use case",
      featured: false,
      slug: "practice-engagement",
      detail: {
        eyebrow: "PatientPoint use case",
        headline: "Turning practice communication into a product experience",
        summary:
          "Practice Engagement work focused on helping healthcare practices communicate more effectively with staff, support practice initiatives, and create more consistent visibility across care teams.",
        visual: "practiceEngagement",
        snapshot: [
          { label: "Context", value: "PWR / PracticeWire" },
          { label: "Focus", value: "Product operations, workflow design, internal tools" },
          { label: "Users", value: "Practice staff, operations teams, content teams" },
          { label: "Contribution", value: "Requirements, workflow clarity, stakeholder communication" },
        ],
        imagePlaceholders: [
          { title: "Primary UX flow", type: "UX flow" },
          { title: "Interaction wireframe", type: "Wireframe" },
          { title: "System relationship diagram", type: "Diagram" },
        ],
        productLinks: [
          {
            label: "PatientPoint Practice Engagement",
            href: "https://patientpoint.com/healthcare-provider/practice-engagement/",
          },
        ],
        sections: [
          {
            title: "The problem",
            body: [
              "Healthcare practices need simple, visible, repeatable ways to communicate with staff without relying only on email, meetings, or fragmented tools.",
              "The product challenge was broader than displaying messages on a screen: teams needed reliable ways to manage communication, support staff engagement, and keep content relevant across varied healthcare environments.",
            ],
          },
          {
            title: "Scott's contribution",
            body: [
              "Scott helped connect business goals, customer needs, content operations, and platform capabilities.",
              "He supported the translation of stakeholder needs into product requirements and clarified how internal teams could manage, deploy, and support the experience over time.",
            ],
          },
        ],
        outcome:
          "The work supported PatientPoint's broader effort to make practice communication more consistent, visible, and actionable through digital engagement technology.",
      },
    },
    {
      title: "Precision Patient Engagement",
      description:
        "Supported product thinking around targeted PatientPoint engagement experiences where data, content, trusted healthcare channels, and internal platform workflows need to align.",
      tags: ["Product strategy", "Platform thinking", "Targeted engagement"],
      href: "/use-cases/precision-patient-engagement",
      linkLabel: "View use case",
      category: "PatientPoint use case",
      featured: false,
      slug: "precision-patient-engagement",
      detail: {
        eyebrow: "PatientPoint use case",
        headline: "Making patient engagement more relevant",
        summary:
          "Precision Patient Engagement explores product thinking around targeted healthcare experiences where data, content, compliance, customer needs, and trusted care channels need to work together.",
        visual: "precisionEngagement",
        snapshot: [
          { label: "Context", value: "Precision patient engagement" },
          { label: "Focus", value: "Product strategy, data-informed workflows, platform thinking" },
          { label: "Channels", value: "Point-of-care and digital patient touchpoints" },
          { label: "Contribution", value: "Workflow implications, metadata, content systems, platform alignment" },
        ],
        imagePlaceholders: [
          { title: "Primary UX flow", type: "UX flow" },
          { title: "Interaction wireframe", type: "Wireframe" },
          { title: "System relationship diagram", type: "Diagram" },
        ],
        productLinks: [
          {
            label: "PatientPoint Precision",
            href: "https://lifesciences.patientpoint.com/patientpoint-precision/",
          },
        ],
        sections: [
          {
            title: "The problem",
            body: [
              "Healthcare content becomes more valuable when it reaches the right audience in the right context, but that requires strong connections between data, content, targeting, and delivery systems.",
              "For product teams, this creates a complex challenge: the experience must connect data, content, compliance, targeting logic, customer needs, and patient-facing communication channels.",
            ],
          },
          {
            title: "Scott's contribution",
            body: [
              "Scott helped think through the product and workflow implications of delivering more targeted, relevant healthcare content.",
              "This included understanding how content systems, metadata, internal tools, and delivery platforms needed to support more precise patient engagement workflows.",
            ],
          },
        ],
        outcome:
          "This work supported a larger strategy of moving from broad content distribution toward more relevant, data-informed patient engagement.",
      },
    },
  ],
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
