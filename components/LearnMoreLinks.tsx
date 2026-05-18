import type { Profile } from "../content/profile";

type Props = {
  profile: Profile;
};

export function LearnMoreLinks({ profile }: Props) {
  return (
    <section id="next-step" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] bg-ink p-8 text-white shadow-soft dark:bg-white dark:text-ink">
        <p className="text-sm font-black uppercase tracking-wider text-cyan-200 dark:text-accent">Next Step</p>
        <h2 className="mt-3 text-4xl font-black">Choose the Best Next Step</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {profile.learnMoreLinks.map((link) => (
            <a key={link.href} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined} className="rounded-[1.25rem] border border-white/15 bg-white/10 p-5 transition hover:-translate-y-1 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-cyan-200 dark:border-ink/10 dark:bg-ink/5 dark:hover:bg-ink/10">
              <h3 className="text-lg font-black">{link.label}</h3>
              <p className="mt-2 text-sm leading-6 opacity-80">{link.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
