import { readFile } from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { MermaidDiagramViewer } from "../../../components/MermaidDiagramViewer";
import { mermaidDiagrams, type MermaidDiagram } from "../../../content/diagrams";
import { profile } from "../../../content/profile";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return mermaidDiagrams.map((diagram) => ({ slug: diagram.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const diagram = mermaidDiagrams.find((item) => item.slug === slug);

  if (!diagram) {
    return {};
  }

  return {
    title: `${diagram.title} — Scott Whitlock`,
    description: diagram.description,
    openGraph: {
      title: `${diagram.title} — Scott Whitlock`,
      description: diagram.description,
      type: "article",
    },
  };
}

async function readMermaidDefinition(sourcePath: string) {
  const relativePath = sourcePath.replace(/^\/+/, "");
  return readFile(path.join(process.cwd(), "public", relativePath), "utf8");
}

function getDiagramOrNotFound(slug: string): MermaidDiagram {
  const diagram = mermaidDiagrams.find((item) => item.slug === slug);

  if (!diagram) {
    notFound();
    throw new Error(`Diagram not found: ${slug}`);
  }

  return diagram;
}

export default async function MermaidDiagramPage({ params }: Props) {
  const { slug } = await params;
  const diagram = getDiagramOrNotFound(slug);

  const definition = await readMermaidDefinition(diagram.sourcePath);

  return (
    <>
      <Header />
      <main>
        <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-6 flex flex-wrap gap-3">
            <Link
              className="inline-flex rounded-full border border-ink/15 px-4 py-2 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:border-accent focus:outline-none focus:ring-2 focus:ring-accent dark:border-white/15 dark:text-white"
              href={diagram.backHref ?? "/#use-cases"}
            >
              {diagram.backLabel ?? "Back to use cases"}
            </Link>
          </div>

          <header className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-wider text-accent">Mermaid diagram</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-ink dark:text-white sm:text-5xl">
              {diagram.title}
            </h1>
            <p className="mt-5 text-xl leading-9 text-ink/75 dark:text-white/75">{diagram.description}</p>
          </header>

          <div className="mt-10">
            <MermaidDiagramViewer definition={definition} slug={diagram.slug} title="Diagram view" />
          </div>
        </article>
      </main>
      <Footer profile={profile} />
    </>
  );
}
