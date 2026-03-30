import { GithubIcon, LinkedinIcon } from "@/assets/icons";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface w-full py-12">
      <div className="bg-gradient-to-r from-transparent via-surface-low to-transparent h-[1px] mb-12"></div>
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-8 gap-6 text-sm">
        <div className="text-secondary font-mono font-bold">
          Olutunde // {new Date().getFullYear()}
        </div>

        <div className="flex gap-8">
          <Link
            className="text-muted-foreground hover:text-secondary transition-colors duration-150 ease"
            href="https://www.linkedin.com/in/tunde-solabi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon className="w-4 h-4" />
          </Link>
          <Link
            className="text-muted-foreground hover:text-secondary transition-colors duration-150 ease"
            href="https://github.com/Olutunde22"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="w-4 h-4" />
          </Link>
          <Link
            className="text-muted-foreground hover:text-secondary transition-colors duration-150 ease"
            href="mailto:solabi.tunde@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            solabi.tunde@hotmail.com
          </Link>
        </div>

        <p className="text-muted-foreground text-center md:text-right">
          © {new Date().getFullYear()} Olutunde Solabi. Engineered for Performance.
        </p>
      </div>
    </footer>
  );
}
