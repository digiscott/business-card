import type { UseCase } from "../profile";

export const portfolioUseCase: UseCase = {
  title: "Portfolio Site and AI Career Advocate",
  description:
    "Designed and built this static portfolio site as a product-style career leavebehind, pairing concise positioning with an external AI Career Advocate grounded in approved career materials.",
  cardImage: {
    src: "/images/portfolio-splash.png",
    alt: "Portfolio site splash screen with AI Career Advocate interaction",
  },
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
    visualImage: {
      src: "/images/portfolio-hero.png",
      alt: "Portfolio site hero experience",
    },
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
};
