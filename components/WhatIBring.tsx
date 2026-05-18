import type { Profile } from "../content/profile";

type Props = {
  profile: Profile;
};

export function WhatIBring({ profile }: Props) {
  return (
    <section id="what-i-bring" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-black uppercase tracking-wider text-accent">Capabilities</p>
        <h2 className="mt-3 text-4xl font-black text-ink dark:text-white">What I Bring</h2>
        <p className="mt-5 text-lg leading-8 text-ink/75 dark:text-white/75">Focused capabilities for product teams working through complexity.</p>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {profile.capabilities.map((capability) => (
          <article key={capability.title} className="rounded-[1.5rem] border border-ink/10 bg-white/75 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/10">
            <h3 className="text-xl font-black text-ink dark:text-white">{capability.title}</h3>
            <p className="mt-3 leading-7 text-ink/70 dark:text-white/70">{capability.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
