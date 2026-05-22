"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  definition: string;
  title: string;
  slug: string;
};

type ViewMode = "preview" | "text";
type MermaidApi = {
  initialize: (config: { startOnLoad: boolean; securityLevel: "strict"; theme: "default" | "dark" }) => void;
  render: (id: string, definition: string) => Promise<{ svg: string }>;
};

declare global {
  interface Window {
    mermaid?: MermaidApi;
  }
}

let mermaidLoadPromise: Promise<MermaidApi> | null = null;

function loadMermaid() {
  if (window.mermaid) {
    return Promise.resolve(window.mermaid);
  }

  if (mermaidLoadPromise) {
    return mermaidLoadPromise;
  }

  mermaidLoadPromise = new Promise((resolve, reject) => {
    const existingScript = document.getElementById("mermaid-renderer");

    if (existingScript) {
      existingScript.addEventListener("load", () => {
        if (window.mermaid) {
          resolve(window.mermaid);
        } else {
          reject(new Error("Mermaid loaded without exposing a renderer."));
        }
      });
      existingScript.addEventListener("error", () => reject(new Error("Unable to load Mermaid renderer.")));
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.id = "mermaid-renderer";
    script.src = "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js";
    script.addEventListener("load", () => {
      if (window.mermaid) {
        resolve(window.mermaid);
      } else {
        reject(new Error("Mermaid loaded without exposing a renderer."));
      }
    });
    script.addEventListener("error", () => reject(new Error("Unable to load Mermaid renderer.")));

    document.head.appendChild(script);
  });

  return mermaidLoadPromise;
}

export function MermaidDiagramViewer({ definition, title, slug }: Props) {
  const [mode, setMode] = useState<ViewMode>("preview");
  const [themeKey, setThemeKey] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new MutationObserver(() => setThemeKey((value) => value + 1));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (mode !== "preview" || !previewRef.current) {
      return;
    }

    let cancelled = false;

    async function renderDiagram() {
      try {
        setError(null);
        const mermaid = await loadMermaid();
        const isDark = document.documentElement.classList.contains("dark");
        const renderId = `mermaid-${slug.replace(/[^a-zA-Z0-9_-]/g, "-")}-${themeKey}`;

        mermaid.initialize({
          startOnLoad: false,
          securityLevel: "strict",
          theme: isDark ? "dark" : "default",
        });

        const { svg } = await mermaid.render(renderId, definition);

        if (!cancelled && previewRef.current) {
          previewRef.current.innerHTML = svg;
        }
      } catch (renderError) {
        if (!cancelled) {
          setError(renderError instanceof Error ? renderError.message : "Unable to render this Mermaid diagram.");
        }
      }
    }

    renderDiagram();

    return () => {
      cancelled = true;
    };
  }, [definition, mode, slug, themeKey]);

  return (
    <section className="rounded-[1.5rem] border border-ink/10 bg-white/70 p-4 shadow-soft dark:border-white/10 dark:bg-white/10 sm:p-6">
      <div className="flex flex-col gap-4 border-b border-ink/10 pb-4 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-black text-ink dark:text-white">{title}</h2>
        <div className="grid w-full grid-cols-2 rounded-full border border-ink/10 bg-paper/80 p-1 dark:border-white/10 dark:bg-ink/70 sm:w-auto">
          {(["preview", "text"] as const).map((viewMode) => (
            <button
              aria-pressed={mode === viewMode}
              className={`rounded-full px-4 py-2 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-accent ${
                mode === viewMode
                  ? "bg-accent text-white shadow-sm"
                  : "text-ink/70 hover:text-accent dark:text-white/70"
              }`}
              key={viewMode}
              onClick={() => setMode(viewMode)}
              type="button"
            >
              {viewMode === "preview" ? "Preview" : "Text"}
            </button>
          ))}
        </div>
      </div>

      {mode === "preview" ? (
        <div className="mt-6 overflow-auto rounded-2xl border border-ink/10 bg-white p-4 dark:border-white/10 dark:bg-ink/60">
          {error ? (
            <p className="text-sm font-semibold text-copper dark:text-orange-200">{error}</p>
          ) : (
            <div
              aria-label={`${title} rendered Mermaid diagram`}
              className="mermaid-preview min-w-[42rem]"
              ref={previewRef}
            />
          )}
        </div>
      ) : (
        <pre className="mt-6 max-h-[40rem] overflow-auto rounded-2xl border border-ink/10 bg-ink p-4 text-sm leading-6 text-white dark:border-white/10">
          <code>{definition}</code>
        </pre>
      )}
    </section>
  );
}
