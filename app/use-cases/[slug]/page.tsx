import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { UseCaseVisual } from "../../../components/UseCaseVisual";
import { profile } from "../../../content/profile";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return profile.useCases.map((useCase) => ({ slug: useCase.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const useCase = profile.useCases.find((item) => item.slug === slug);

  if (!useCase) {
    return {};
  }

  return {
    title: `${useCase.title} — Scott Whitlock`,
    description: useCase.description,
    openGraph: {
      title: `${useCase.title} — Scott Whitlock`,
      description: useCase.description,
      type: "article",
    },
  };
}

export default async function UseCasePage({ params }: Props) {
  const { slug } = await params;
  const useCase = profile.useCases.find((item) => item.slug === slug);

  if (!useCase) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <Link
            className="inline-flex rounded-full border border-ink/15 px-4 py-2 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:border-accent focus:outline-none focus:ring-2 focus:ring-accent dark:border-white/15 dark:text-white"
            href="/#use-cases"
          >
            ← Back to use cases
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-wider text-accent">{useCase.detail.eyebrow}</p>
              <h1 className="mt-3 text-4xl font-black tracking-tight text-ink dark:text-white sm:text-5xl">
                {useCase.detail.headline}
              </h1>
              <p className="mt-5 text-xl leading-9 text-ink/75 dark:text-white/75">{useCase.detail.summary}</p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${useCase.title} tags`}>
                {useCase.tags?.map((tag) => (
                  <li
                    className="rounded-full border border-ink/10 bg-white/60 px-3 py-1 text-xs font-bold text-ink/70 dark:border-white/10 dark:bg-white/10 dark:text-white/70"
                    key={tag}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <UseCaseVisual title={useCase.title} visual={useCase.detail.visual} />
          </div>

          <section className="mt-12 rounded-[2rem] border border-ink/10 bg-white/65 p-6 dark:border-white/10 dark:bg-white/10">
            <h2 className="text-2xl font-black text-ink dark:text-white">Project snapshot</h2>
            <dl className="mt-6 grid gap-4 md:grid-cols-2">
              {useCase.detail.snapshot.map((item) => (
                <div className="rounded-2xl bg-paper/80 p-4 dark:bg-ink/50" key={item.label}>
                  <dt className="text-xs font-black uppercase tracking-wider text-accent">{item.label}</dt>
                  <dd className="mt-2 font-semibold leading-7 text-ink/80 dark:text-white/80">{item.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {useCase.detail.sections.map((section) => (
              <section
                className="rounded-[1.5rem] border border-ink/10 bg-white/70 p-6 dark:border-white/10 dark:bg-white/10"
                key={section.title}
              >
                <h2 className="text-2xl font-black text-ink dark:text-white">{section.title}</h2>
                <div className="mt-4 space-y-4 text-lg leading-8 text-ink/75 dark:text-white/75">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets?.length ? (
                  <ul className="mt-5 space-y-2 text-ink/75 dark:text-white/75">
                    {section.bullets.map((bullet) => (
                      <li className="flex gap-3" key={bullet}>
                        <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <section className="mt-6 rounded-[1.5rem] border border-accent/20 bg-accent/10 p-6 dark:border-cyan-200/20 dark:bg-cyan-200/10">
            <h2 className="text-2xl font-black text-ink dark:text-white">Outcome</h2>
            <p className="mt-4 text-lg leading-8 text-ink/75 dark:text-white/75">{useCase.detail.outcome}</p>
          </section>
        </article>
      </main>
      <Footer profile={profile} />
    </>
  );
}
