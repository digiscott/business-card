import type { UseCase } from "../profile";

export const desktopBuddyUseCase: UseCase = {
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
};
