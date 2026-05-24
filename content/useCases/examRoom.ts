import type { UseCase } from "../profile";

export const examRoomUseCase: UseCase = {
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
};
