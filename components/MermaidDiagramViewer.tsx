"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  definition: string;
  title: string;
  slug: string;
};

type ViewMode = "preview" | "text";
type PanPosition = { x: number; y: number };
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
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState<PanPosition>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<PanPosition>({ x: 0, y: 0 });
  const [fitWidth, setFitWidth] = useState(1);
  const previewRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new MutationObserver(() => setThemeKey((value) => value + 1));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = -e.deltaY;
      const scaleFactor = delta > 0 ? 1.1 : 0.9;
      setZoom((prevZoom) => Math.max(0.5, Math.min(prevZoom * scaleFactor, 5)));
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragStart, pan]);

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

          // Calculate fit-to-width zoom after rendering
          const container = containerRef.current;
          if (container) {
            const svgElement = previewRef.current.querySelector("svg");
            if (svgElement) {
              const svgWidth = svgElement.getBoundingClientRect().width;
              const containerWidth = container.clientWidth - 32; // Account for padding
              const calculatedZoom = Math.min(containerWidth / svgWidth, 1);
              setFitWidth(calculatedZoom);
              setZoom(calculatedZoom);
              setPan({ x: 0, y: 0 });
            }
          }
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
        <div className="mt-6 flex flex-col gap-3">
          <div className="flex items-center justify-between gap-2 rounded-2xl border border-ink/10 bg-white/50 p-3 dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-ink/60 dark:text-white/60">Zoom: {Math.round(zoom * 100)}%</span>
              <div className="flex gap-1">
                <button
                  onClick={() => setZoom((z) => Math.max(0.5, z - 0.2))}
                  className="rounded px-2 py-1 text-xs font-bold text-ink/60 transition hover:bg-accent/20 hover:text-accent dark:text-white/60 dark:hover:text-cyan-200"
                  title="Zoom out"
                  type="button"
                >
                  −
                </button>
                <button
                  onClick={() => setZoom(fitWidth)}
                  className="rounded px-2 py-1 text-xs font-bold text-ink/60 transition hover:bg-accent/20 hover:text-accent dark:text-white/60 dark:hover:text-cyan-200"
                  title="Fit to width"
                  type="button"
                >
                  Fit
                </button>
                <button
                  onClick={() => setZoom((z) => Math.min(5, z + 0.2))}
                  className="rounded px-2 py-1 text-xs font-bold text-ink/60 transition hover:bg-accent/20 hover:text-accent dark:text-white/60 dark:hover:text-cyan-200"
                  title="Zoom in"
                  type="button"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() => {
                setZoom(fitWidth);
                setPan({ x: 0, y: 0 });
              }}
              className="rounded px-2 py-1 text-xs font-bold text-ink/60 transition hover:bg-accent/20 hover:text-accent dark:text-white/60 dark:hover:text-cyan-200"
              title="Reset view to fit width"
              type="button"
            >
              ↺ Reset
            </button>
          </div>
          <div
            className="overflow-auto rounded-2xl border border-ink/10 bg-white p-4 dark:border-white/10 dark:bg-ink/60"
            ref={containerRef}
            style={{ cursor: isDragging ? "grabbing" : "grab", height: "500px" }}
          >
            {error ? (
              <p className="text-sm font-semibold text-copper dark:text-orange-200">{error}</p>
            ) : (
              <div
                className="mermaid-preview inline-block min-w-[42rem]"
                ref={previewRef}
                style={{
                  transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                  transformOrigin: "0 0",
                  transition: isDragging ? "none" : "transform 0.1s ease-out",
                }}
              />
            )}
          </div>
        </div>
      ) : (
        <pre className="mt-6 max-h-[40rem] overflow-auto rounded-2xl border border-ink/10 bg-ink p-4 text-sm leading-6 text-white dark:border-white/10">
          <code>{definition}</code>
        </pre>
      )}
    </section>
  );
}
