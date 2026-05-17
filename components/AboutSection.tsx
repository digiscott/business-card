import type { Profile } from "../content/profile";

type Props = {
  profile: Profile;
};

export function AboutSection({ profile }: Props) {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-black uppercase tracking-wider text-accent">About</p>
        <h2 className="mt-3 text-4xl font-black text-ink dark:text-white">A practical Product Manager for ambiguous, cross-functional work.</h2>
        <p className="mt-5 text-lg leading-8 text-ink/75 dark:text-white/75">{profile.shortBio}</p>
      </div>
      <div className="mt-8 divide-y divide-ink/10 rounded-[1.5rem] border border-ink/10 bg-white/70 dark:divide-white/10 dark:border-white/10 dark:bg-white/10">
        {profile.about.map((item, index) => (
          <details key={item.title} className="group p-6" open={index === 0}>
            <summary className="cursor-pointer list-none text-xl font-bold text-ink focus:outline-none focus:ring-2 focus:ring-accent dark:text-white">
              <span className="inline-flex w-full items-center justify-between gap-4">
                {item.title}
                <span aria-hidden="true" className="text-accent transition group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="mt-4 max-w-4xl text-base leading-7 text-ink/70 dark:text-white/70">{item.body}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
