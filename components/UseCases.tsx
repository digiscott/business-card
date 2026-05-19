import Link from "next/link";
import type { Profile, UseCase } from "../content/profile";

type Props = {
  profile: Profile;
};

type UseCaseCardProps = {
  useCase: UseCase;
};

function UseCaseCard({ useCase }: UseCaseCardProps) {
  const isExternal = useCase.href?.startsWith("http");

  return (
    <article className="flex h-full flex-col rounded-[1.5rem] border border-ink/10 bg-white/75 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/10">
      <div className="flex flex-wrap items-center gap-2">
        {useCase.category ? (
          <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-accent dark:bg-cyan-200/10 dark:text-cyan-200">
            {useCase.category}
          </span>
        ) : null}
        {useCase.featured ? (
          <span className="rounded-full bg-copper/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-copper dark:bg-orange-200/10 dark:text-orange-200">
            Featured
          </span>
        ) : null}
      </div>
      <h3 className="mt-4 text-xl font-black text-ink dark:text-white">{useCase.title}</h3>
      {useCase.cardImage ? (
        <div className="mt-4 overflow-hidden rounded-2xl border border-ink/10 bg-ink/5 dark:border-white/10 dark:bg-white/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="aspect-[16/10] w-full object-cover"
            src={useCase.cardImage.src}
            alt={useCase.cardImage.alt}
            loading="lazy"
          />
        </div>
      ) : null}
      <p className="mt-3 grow leading-7 text-ink/70 dark:text-white/70">{useCase.description}</p>
      {useCase.tags?.length ? (
        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${useCase.title} tags`}>
          {useCase.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-ink/10 px-3 py-1 text-xs font-semibold text-ink/65 dark:border-white/10 dark:text-white/70">
              {tag}
            </li>
          ))}
        </ul>
      ) : null}
      {useCase.href && useCase.linkLabel ? (
        isExternal ? (
          <a className="mt-5 inline-flex font-bold text-accent transition hover:text-copper focus:outline-none focus:ring-2 focus:ring-accent" href={useCase.href} rel="noopener noreferrer" target="_blank">
            {useCase.linkLabel} →
          </a>
        ) : (
          <Link className="mt-5 inline-flex font-bold text-accent transition hover:text-copper focus:outline-none focus:ring-2 focus:ring-accent" href={useCase.href}>
            {useCase.linkLabel} →
          </Link>
        )
      ) : null}
    </article>
  );
}

export function UseCases({ profile }: Props) {
  return (
    <section id="use-cases" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-black uppercase tracking-wider text-accent">Use Cases</p>
        <h2 className="mt-3 text-4xl font-black text-ink dark:text-white">How Scott Works in Practice</h2>
        <p className="mt-5 text-lg leading-8 text-ink/75 dark:text-white/75">
          These examples show how Scott uses product thinking, design judgment, technical collaboration, and AI-assisted workflows across portfolio, app concept, desktop experience, and healthcare product contexts.
        </p>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {profile.useCases.map((useCase) => (
          <UseCaseCard key={useCase.title} useCase={useCase} />
        ))}
      </div>
    </section>
  );
}
