import type { UseCase } from "../profile";

export const practiceEngagementUseCase: UseCase = {
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
};
