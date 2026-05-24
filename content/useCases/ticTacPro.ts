import type { UseCase } from "../profile";

export const ticTacProUseCase: UseCase = {
  title: "Tic Tac Pro Game App",
  description:
    "A cross-platform game concept that reimagines Tic-Tac-Toe with a strategic twist: older moves disappear as new ones are placed. The project shows product strategy, UX decisions, technical planning, and AI-assisted development moving from concept toward prototype.",
  tags: ["Product strategy", "UX design", "AI-assisted development"],
  href: "/use-cases/tic-tac-pro-game-app",
  linkLabel: "View use case",
  category: "Game app prototype",
  featured: false,
  slug: "tic-tac-pro-game-app",
  detail: {
    eyebrow: "Game app prototype",
    headline: "Building a cross-platform game app with AI-assisted product development",
    summary:
      "Tic Tac Pro explores how a familiar game can become more strategic when older moves disappear as new ones are placed, creating a faster and more dynamic version of Tic-Tac-Toe.",
    visual: "ticTacPro",
    snapshot: [
      { label: "Type", value: "Mobile/web game prototype" },
      { label: "Focus", value: "Product strategy, UX design, game rules, AI-assisted development" },
      { label: "Platform direction", value: "Web, iOS, Android" },
      { label: "Technical direction", value: "Shared Expo / React Native codebase" },
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
          "The app needed to feel simple enough for anyone to understand quickly while adding enough strategy to make the familiar game feel fresh.",
          "It also needed a technical direction that could support future expansion across web, iOS, and Android without creating separate codebases for each platform.",
        ],
        bullets: [
          "Clarify the disappearing-move mechanic",
          "Design onboarding that makes the rule change obvious",
          "Separate prototype scope from future features",
          "Use AI tools to accelerate documentation and development planning",
        ],
      },
      {
        title: "Product thinking",
        body: [
          "Scott treated the game as a product exercise rather than just a code exercise. The work included rules, edge cases, player feedback, UI states, feature boundaries, and a path toward cross-platform delivery.",
          "AI-assisted workflows helped move quickly from idea to prototype while keeping decisions grounded in player clarity and product scope.",
        ],
      },
    ],
    outcome:
      "The concept demonstrates how Scott uses product judgment, UX thinking, technical planning, and AI-assisted workflows to turn a small idea into a structured prototype path.",
  },
};
