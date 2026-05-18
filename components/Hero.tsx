import Image from "next/image";
import type { Profile } from "../content/profile";

type HeroProps = {
  profile: Profile;
};

export function Hero({ profile }: HeroProps) {
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
      <div>
        <p className="mb-4 inline-flex rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent dark:bg-accent/20 dark:text-cyan-200">
          {profile.heroAvailabilityLine}
        </p>
        <h1 className="text-5xl font-black tracking-tight text-ink dark:text-white sm:text-6xl">{profile.name}</h1>
        <p className="mt-4 max-w-3xl text-2xl font-semibold leading-9 text-copper dark:text-orange-200">
          {profile.roleSoughtLine}
        </p>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/75 dark:text-white/75">{profile.heroSupportingCopy}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a className="rounded-full bg-accent px-6 py-3 text-center font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:focus:ring-offset-ink" href="#contact">
            Contact Scott
          </a>
          <a className="rounded-full border border-ink/15 px-6 py-3 text-center font-bold text-ink transition hover:-translate-y-0.5 hover:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:border-white/15 dark:text-white dark:focus:ring-offset-ink" href={profile.linkedInUrl} target="_blank" rel="noopener noreferrer">
            View LinkedIn
          </a>
          <a className="rounded-full border border-ink/15 px-6 py-3 text-center font-bold text-ink transition hover:-translate-y-0.5 hover:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:border-white/15 dark:text-white dark:focus:ring-offset-ink" href={profile.resumeUrl}>
            Download Resume
          </a>
        </div>
        <a className="mt-5 inline-flex text-sm font-bold text-accent transition hover:text-copper focus:outline-none focus:ring-2 focus:ring-accent" href={profile.careerAdvocateUrl} target="_blank" rel="noopener noreferrer">
          Try the Career Advocate chatbot →
        </a>
      </div>
      <div className="rounded-[2rem] border border-ink/10 bg-white/70 p-6 shadow-soft dark:border-white/10 dark:bg-white/10">
        <Image className="mx-auto aspect-square w-full max-w-sm rounded-[1.5rem] object-cover" src={profile.headshotUrl} alt="Headshot placeholder for Scott Whitlock" width={600} height={600} priority />
      </div>
    </section>
  );
}
