import type { UseCase } from "../profile";

export const precisionEngagementUseCase: UseCase = {
  title: "PatientPoint Precision",
  description:
    "A PatientPoint use case focused on translating targeted patient engagement into the content, metadata, workflow, and platform considerations needed to deliver relevant healthcare messaging across trusted digital touchpoints.",
  cardImage: {
    src: "/images/precision-splash.png",
    alt: "PatientPoint Precision splash illustration showing targeted patient engagement across digital healthcare touchpoints",
  },
  tags: ["Product strategy", "Platform thinking", "Targeted engagement"],
  href: "/use-cases/precision-patient-engagement",
  linkLabel: "View use case",
  category: "PatientPoint use case",
  featured: false,
  slug: "precision-patient-engagement",
  detail: {
    eyebrow: "PatientPoint use case",
    headline: "Making patient engagement more relevant without losing trust",
    summary:
      "PatientPoint Precision extends patient engagement into check-in and patient portal experiences, where patients are already managing appointments, reviewing results, and communicating with their care teams. Scott's product work focused on the operational and platform implications behind that kind of targeted engagement: content readiness, metadata, internal workflows, delivery systems, and stakeholder alignment.",
    visual: "precisionEngagement",
    visualImage: {
      src: "/images/precision-hero.png",
      alt: "PatientPoint Precision hero experience showing personalized healthcare engagement across patient touchpoints",
    },
    snapshot: [
      { label: "Context", value: "PatientPoint Precision / check-in and patient portal engagement" },
      { label: "Focus", value: "Product strategy, platform alignment, metadata, and workflow implications" },
      { label: "Core question", value: "How can relevant healthcare messages reach the right patient, in the right context, through trusted care channels?" },
      { label: "Contribution", value: "Content system thinking, workflow mapping, stakeholder alignment, and implementation support" },
    ],
    imagePlaceholders: [
      { title: "Engagement journey", type: "UX flow" },
      { title: "Targeting and content workflow", type: "Diagram" },
      { title: "Platform relationship diagram", type: "Diagram" },
    ],
    productLinks: [
      {
        label: "PatientPoint Precision",
        href: "https://lifesciences.patientpoint.com/patientpoint-precision/",
      },
    ],
    sections: [
      {
        title: "The challenge",
        body: [
          "Targeted patient engagement depends on more than reaching an audience. The experience has to be timely, relevant, privacy-conscious, and delivered in a trusted healthcare context.",
          "For product and platform teams, that creates a systems problem. Audience strategy, approved content, campaign rules, metadata, delivery channels, compliance expectations, and internal operations all need to work together before a patient ever sees a message.",
        ],
      },
      {
        title: "Product approach",
        body: [
          "Scott helped frame Precision as a product and workflow challenge, not just a distribution channel. The work required thinking through how content and platform systems could support more precise patient engagement while still fitting into healthcare review, deployment, and maintenance processes.",
          "A key product principle was relevance with guardrails: making engagement more specific and useful while respecting the trust expectations of healthcare settings.",
        ],
        bullets: [
          "Connected patient engagement goals to content and platform workflows",
          "Considered how metadata and targeting logic affect content readiness",
          "Mapped implications for internal tools, campaign setup, and delivery systems",
          "Balanced brand needs, patient relevance, care-context trust, and operational feasibility",
          "Helped translate a high-level engagement strategy into clearer product and implementation considerations",
        ],
      },
    ],
    outcome:
      "The work supported a broader shift from broad content distribution toward more relevant, data-informed patient engagement that could be planned, governed, and delivered through trusted healthcare channels.",
  },
};
