import type { Profile } from "../content/profile";

type Props = {
  profile: Profile;
};

export function CareerAdvocateCallout({ profile }: Props) {
  return (
    <section id="career-advocate" className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-accent/20 bg-accent/10 p-8 shadow-soft dark:border-cyan-200/20 dark:bg-cyan-200/10">
        <span className="inline-flex rounded-full bg-copper px-3 py-1 text-xs font-black uppercase tracking-wider text-white">New</span>
        <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="text-3xl font-black text-ink dark:text-white">{profile.careerAdvocate.title}</h2>
            <p className="mt-3 max-w-3xl text-lg leading-8 text-ink/75 dark:text-white/75">{profile.careerAdvocate.description}</p>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-ink/60 dark:text-white/60">{profile.careerAdvocate.disclaimer}</p>
          </div>
          <a className="rounded-full bg-ink px-6 py-3 text-center font-bold text-white transition hover:-translate-y-0.5 hover:bg-ink/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:bg-white dark:text-ink dark:focus:ring-offset-ink" href={profile.careerAdvocateUrl} target="_blank" rel="noopener noreferrer">
            Ask about Scott
          </a>
        </div>
      </div>
    </section>
  );
}
