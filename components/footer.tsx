import { Reveal } from "@/components/ui/reveal";

export function Footer() {
  return (
    <footer
      className="border-line scroll-mt-20 border-t bg-[radial-gradient(circle_at_80%_100%,rgb(255_107_0/0.08),transparent_50%)] px-6 py-20 md:px-9"
      id="contact"
    >
      <Reveal>
        <p className="text-accent font-mono text-[14px]">olutunde@web ~ $ sudo hire-me</p>

        <p className="text-fg-mute mt-2.5 mb-6.5 font-mono text-[13px]">
          [sudo] permission granted <span className="text-ok">✓</span> — opening channel…
        </p>

        <a
          href="mailto:solabi.tunde@hotmail.com"
          className="hover:text-accent inline-block bg-[linear-gradient(var(--accent),var(--accent))] bg-[length:0%_4px] bg-[position:0_100%] bg-no-repeat font-mono text-[22px] font-bold tracking-[-1px] break-all [transition:background-size_.35s_ease,color_.2s_ease] hover:bg-[length:100%_4px] min-[700px]:text-[52px]"
        >
          solabi.tunde@hotmail.com
        </a>

        <div className="text-fg-mute mt-7.5 flex flex-wrap gap-x-7 gap-y-3 font-mono text-[13px]">
          <a
            href="https://github.com/Olutunde22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-mute hover:text-accent"
          >
            github/Olutunde22 ↗
          </a>
          <a
            href="https://www.linkedin.com/in/tunde-solabi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-mute hover:text-accent"
          >
            linkedin/tunde-solabi ↗
          </a>
          <span className="w-full md:ml-auto md:w-auto">
            © {new Date().getFullYear()} — engineered for performance
          </span>
        </div>
      </Reveal>
    </footer>
  );
}
