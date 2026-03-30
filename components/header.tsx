import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { href: "#hero", label: "Hero" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-20 w-full items-center bg-surface/80 shadow-[0px_12px_32px_-4px_rgba(180,197,255,0.08)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="text-xl font-black text-primary tracking-tighter">
          Olutunde Solabi
        </Link>

        <nav aria-label="Main navigation">
          <div className="hidden items-center gap-6 text-sm font-medium tracking-tight antialiased md:flex">
            {navLinks.map(({ href, label }) => {
              return (
                <Link
                  key={label}
                  href={href}
                  className="border-b-2 border-transparent pb-1 transition-colors duration-150 ease hover:text-primary hover:border-primary"
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          <Button size="sm" asChild>
            <a href="/Olutunde-Solabi-CV.pdf" download>
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
