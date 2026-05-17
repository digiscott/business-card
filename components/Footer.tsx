import type { Profile } from "../content/profile";

type Props = {
  profile: Profile;
};

export function Footer({ profile }: Props) {
  return (
    <footer className="border-t border-ink/10 px-4 py-8 text-center text-sm text-ink/60 dark:border-white/10 dark:text-white/60 sm:px-6 lg:px-8">
      <p>© 2026 {profile.name}</p>
      <p className="mt-1">Last updated: {profile.lastUpdated}</p>
      <p className="mt-1">Built as a responsive career leavebehind for Product Management opportunities.</p>
    </footer>
  );
}
