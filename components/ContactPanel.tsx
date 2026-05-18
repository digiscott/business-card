import type { Profile } from "../content/profile";

type Props = {
  profile: Profile;
};

export function ContactPanel({ profile }: Props) {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-ink/10 bg-white/80 p-8 shadow-soft dark:border-white/10 dark:bg-white/10">
        <p className="text-sm font-black uppercase tracking-wider text-accent">Contact</p>
        <h2 className="mt-3 text-4xl font-black text-ink dark:text-white">Start a direct conversation with Scott.</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-ink/70 dark:text-white/70">
          Scott is available for Product Manager roles, remote or Cincinnati-area. Reach out directly by email, phone, or LinkedIn.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a className="rounded-full bg-accent px-6 py-3 text-center font-bold text-white transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:focus:ring-offset-ink" href={profile.emailHref} aria-label="Email Scott Whitlock">
            Email Scott
          </a>
          <a className="rounded-full border border-ink/15 px-6 py-3 text-center font-bold text-ink transition hover:-translate-y-0.5 hover:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:border-white/15 dark:text-white dark:focus:ring-offset-ink" href={profile.phoneHref} aria-label="Call Scott Whitlock">
            Call Scott
          </a>
          <a className="rounded-full border border-ink/15 px-6 py-3 text-center font-bold text-ink transition hover:-translate-y-0.5 hover:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:border-white/15 dark:text-white dark:focus:ring-offset-ink" href={profile.linkedInUrl} target="_blank" rel="noopener noreferrer">
            View LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
