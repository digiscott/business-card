import Image from "next/image";
import type { UseCaseVisual as UseCaseVisualName } from "../content/profile";

type Props = {
  visual: UseCaseVisualName;
  title: string;
  visualImage?: {
    src: string;
    alt: string;
  };
};

const visualThemes: Record<UseCaseVisualName, { label: string; accent: string; nodes: string[] }> = {
  portfolio: {
    label: "Portfolio flow",
    accent: "bg-accent",
    nodes: ["Positioning", "Career Advocate", "Contact"],
  },
  ticTacPro: {
    label: "Game board",
    accent: "bg-copper",
    nodes: ["X", "O", "Next move"],
  },
  tabletopLibrary: {
    label: "Collection dashboard",
    accent: "bg-accent",
    nodes: ["Own", "Play", "Choose"],
  },
  desktopBuddy: {
    label: "Desktop companion",
    accent: "bg-copper",
    nodes: ["Prompt", "Focus", "Assist"],
  },
  examRoom: {
    label: "Exam room education",
    accent: "bg-accent",
    nodes: ["Patient", "Provider", "Content"],
  },
  practiceEngagement: {
    label: "Practice communication",
    accent: "bg-copper",
    nodes: ["Staff", "Message", "Practice"],
  },
  precisionEngagement: {
    label: "Targeted journey",
    accent: "bg-accent",
    nodes: ["Data", "Content", "Channel"],
  },
};

export function UseCaseVisual({ visual, title, visualImage }: Props) {
  const theme = visualThemes[visual];

  if (visualImage) {
    return (
      <div
        aria-label={`${title} concept visual`}
        className="relative overflow-hidden rounded-[2rem] border border-ink/10 bg-white/75 p-5 shadow-soft dark:border-white/10 dark:bg-white/10"
        role="img"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(31,122,140,0.2),transparent_18rem),radial-gradient(circle_at_bottom_right,rgba(181,107,69,0.18),transparent_16rem)]" />
        <div className="relative overflow-hidden rounded-[1.5rem] border border-ink/10 bg-paper/80 p-5 dark:border-white/10 dark:bg-ink/70">
          <Image
            alt={visualImage.alt}
            src={visualImage.src}
            width={500}
            height={500}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </div>
    );
  }

  return (
    <div
      aria-label={`${title} concept visual`}
      className="relative overflow-hidden rounded-[2rem] border border-ink/10 bg-white/75 p-5 shadow-soft dark:border-white/10 dark:bg-white/10"
      role="img"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(31,122,140,0.2),transparent_18rem),radial-gradient(circle_at_bottom_right,rgba(181,107,69,0.18),transparent_16rem)]" />
      <div className="relative rounded-[1.5rem] border border-ink/10 bg-paper/80 p-5 dark:border-white/10 dark:bg-ink/70">
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs font-black uppercase tracking-wider text-ink/60 dark:text-white/60">
            {theme.label}
          </span>
          <span className={`h-3 w-3 rounded-full ${theme.accent}`} />
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3">
          {theme.nodes.map((node, index) => (
            <div
              className="flex min-h-28 flex-col justify-between rounded-2xl border border-ink/10 bg-white/80 p-4 dark:border-white/10 dark:bg-white/10"
              key={node}
            >
              <span className="text-3xl font-black text-ink dark:text-white">{index + 1}</span>
              <span className="text-sm font-bold text-ink/70 dark:text-white/70">{node}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-2xl border border-dashed border-ink/20 p-4 dark:border-white/20">
          <div className="h-3 w-2/3 rounded-full bg-ink/15 dark:bg-white/20" />
          <div className="mt-3 h-3 w-1/2 rounded-full bg-ink/10 dark:bg-white/15" />
          <div className="mt-3 h-3 w-5/6 rounded-full bg-ink/10 dark:bg-white/15" />
        </div>
      </div>
    </div>
  );
}
