import { Reveal } from "@/components/ui/reveal";
import { BootPanel } from "@/components/home/boot-panel";
import { TypedLine } from "@/components/home/typed-line";

export function HeroSection() {
  return (
    <section
      className="grid gap-12 bg-[radial-gradient(circle_at_20%_10%,rgb(255_107_0/0.06),transparent_45%)] px-6 pt-16 pb-16 md:px-9 min-[700px]:pt-19 min-[1000px]:grid-cols-[1fr_380px]"
      id="hero"
    >
      <Reveal>
        <p className="text-accent mb-5.5 font-mono text-[14px]">olutunde@web ~ $ whoami</p>

        <h1 className="font-display text-[44px] leading-[0.98] font-extrabold tracking-[-1.5px] min-[700px]:text-[84px] min-[700px]:tracking-[-3px]">
          I make the web feel{" "}
          <span className="text-accent animate-glitch inline-block">instant.</span>
        </h1>

        <p className="text-fg-mute mt-7 font-mono text-[14px]">
          <TypedLine text="// Olutunde Solabi — Senior Frontend Engineer. React, Next.js, TypeScript." />
        </p>

        <p className="text-fg-dim mt-4 max-w-[560px] text-[18px] leading-[1.6]">
          Four years of turning heavy, complicated products into interfaces that load in
          milliseconds and pass every audit. Performance is not a nice-to-have — it&apos;s the
          product.
        </p>

        <div className="mt-9.5 flex flex-wrap gap-4 font-mono text-[14px]">
          <a
            href="#work"
            className="bg-accent text-bg hover:bg-accent-hover hover:text-bg px-5.5 py-3.5"
          >
            [ view work ]
          </a>
          <a
            href="/Olutunde-Solabi-CV.pdf"
            download
            className="border-line-strong hover:border-accent border px-5.5 py-[13px]"
          >
            [ download cv ]
          </a>
        </div>
      </Reveal>

      <Reveal delay={110} className="self-start">
        <BootPanel />
      </Reveal>
    </section>
  );
}
