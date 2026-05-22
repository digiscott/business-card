export type MermaidDiagram = {
  slug: string;
  title: string;
  description: string;
  sourcePath: string;
  backHref?: string;
  backLabel?: string;
};

export const mermaidDiagrams: MermaidDiagram[] = [
  {
    slug: "tabletop-game-library",
    title: "Tabletop Game Library Manager System Diagram",
    description:
      "A Mermaid-rendered view of the Tabletop Game Library Manager concept, with a source-text view for readers who prefer the underlying diagram definition.",
    sourcePath: "/images/tabletop_game_library.mermaid",
    backHref: "/use-cases/tabletop-game-library-manager",
    backLabel: "Back to Tabletop Game Library Manager",
  },
  {
    slug: "portfolio-site-ai-career-advocate",
    title: "Portfolio Site and AI Career Advocate System Diagram",
    description:
      "A Mermaid-rendered view of the portfolio site and AI Career Advocate relationship, with the original diagram definition available as text.",
    sourcePath: "/images/portfolio-mermaid-diagram.mermaid",
    backHref: "/use-cases/portfolio-site-ai-career-advocate",
    backLabel: "Back to Portfolio Site and AI Career Advocate",
  },
];
