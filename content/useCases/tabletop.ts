import type { UseCase } from "../profile";

export const tabletopUseCase: UseCase = {
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
    visualImage: {
      src: "/images/game_library_hero.png",
      alt: "Tabletop Game Library Manager hero experience",
    },
    snapshot: [
      { label: "Type", value: "Mobile-first responsive web app concept" },
      { label: "Focus", value: "PRD writing, MVP definition, user workflows, feature prioritization" },
      { label: "Core question", value: "What is owned, what has been played, and what should be played next?" },
      { label: "Status", value: "Product strategy and PRD foundation" },
    ],
    imagePlaceholders: [
      { title: "System Diagram", type: "Diagram" },
      { title: "Product Requirements", type: "PRD" },
      { title: "Elevator Pitch", type: "PRD" },
    ],
    productLinks: [
      { label: "System Diagram", href: "/diagrams/tabletop-game-library" },
      { label: "PRD", href: "/images/tabletop_collection_manager_prd.pdf" },
      { label: "Elevator Pitch", href: "/documents/tabletop-elevator-pitch.pdf" },
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
};
