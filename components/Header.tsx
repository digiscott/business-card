import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Strengths", href: "#strengths" },
  { label: "Learn More", href: "#learn-more" },
  { label: "Career Advocate", href: "#career-advocate" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur dark:border-white/10 dark:bg-ink/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <a className="text-base font-bold tracking-tight text-ink dark:text-white" href="#top">
          Scott Whitlock
        </a>
        <div className="flex items-center gap-3">
          <nav aria-label="Primary navigation" className="hidden lg:block">
            <ul className="flex items-center gap-5 text-sm font-medium text-ink/75 dark:text-white/75">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a className="transition hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <details className="group relative lg:hidden">
            <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-ink/15 bg-white/75 px-3 py-2 text-sm font-semibold text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:border-white/15 dark:bg-white/10 dark:text-white dark:focus:ring-offset-ink [&::-webkit-details-marker]:hidden">
              <span>Menu</span>
              <span aria-hidden="true" className="text-xs transition group-open:rotate-180">
                ▾
              </span>
            </summary>
            <nav
              aria-label="Mobile primary navigation"
              className="absolute right-0 top-full mt-3 w-64 rounded-2xl border border-ink/10 bg-paper p-2 shadow-xl dark:border-white/10 dark:bg-ink"
            >
              <ul className="flex flex-col text-sm font-medium text-ink/80 dark:text-white/80">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      className="block rounded-xl px-4 py-3 transition hover:bg-accent/10 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
