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
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <a className="text-base font-bold tracking-tight text-ink dark:text-white" href="#top">
          Scott Whitlock
        </a>
        <div className="flex items-center justify-between gap-3 lg:justify-end">
          <nav aria-label="Primary navigation" className="overflow-x-auto">
            <ul className="flex min-w-max items-center gap-3 text-sm font-medium text-ink/75 dark:text-white/75 sm:gap-5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a className="transition hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
