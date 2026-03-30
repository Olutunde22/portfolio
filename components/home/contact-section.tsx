import Link from "next/link";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/assets/icons";
import { Reveal } from "@/components/ui/reveal";

export function ContactSection() {
  return (
    <section className="py-24 px-8 bg-surface" id="contact">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-16">
          <Reveal delay={0}>
            <span className="text-secondary font-mono text-sm tracking-widest uppercase mb-4 block">
              Available for collaboration
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground mb-8">
              Let&apos;s build something exceptional.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <Link
              className="text-2xl md:text-4xl font-bold text-primary hover:text-secondary transition-colors duration-150 ease underline decoration-primary/20 underline-offset-8"
              href="mailto:solabi.tunde@hotmail.com"
            >
              solabi.tunde@hotmail.com
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.24}>
          <div className="flex justify-center gap-12 mt-12">
            <Link
              className="group flex flex-col items-center gap-2"
              href="https://www.linkedin.com/in/tunde-solabi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary-container transition-all duration-150 ease-out">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono opacity-60 group-hover:opacity-100 transition-opacity duration-150 ease">
                LinkedIn
              </span>
            </Link>

            <Link
              className="group flex flex-col items-center gap-2"
              href="https://github.com/Olutunde22"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary-container transition-all duration-150 ease-out">
                <GithubIcon className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono opacity-60 group-hover:opacity-100 transition-opacity duration-150 ease">
                GitHub
              </span>
            </Link>

            <Link
              className="group flex flex-col items-center gap-2"
              href="mailto:solabi.tunde@hotmail.com"
            >
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary-container transition-all duration-150 ease-out">
                <MailIcon className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono opacity-60 group-hover:opacity-100 transition-opacity duration-150 ease">
                Email
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
