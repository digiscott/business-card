import type { UseCase } from "../profile";

export const precisionEngagementUseCase: UseCase = {
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
};
