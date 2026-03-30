import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-8 overflow-hidden bg-surface"
      id="hero"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/50 blur-[120px] rounded-full animate-pulse-slow"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/50 blur-[120px] rounded-full animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-4xl text-center">
        <Reveal delay={0}>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-foreground mb-4">
            Olutunde Solabi
          </h1>
        </Reveal>
        <Reveal delay={0.08}>
          <Badge variant="secondary" className="mb-8">
            ENGINEER
          </Badge>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Building <span className="text-primary font-semibold">scalable</span>, high-performing,
            and accessible web applications for the next generation of digital experiences.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Button size="lg" asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="/Olutunde-Solabi-CV.pdf" download>
                Download CV
              </a>
            </Button>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden lg:block w-full max-w-xl dark:opacity-40">
        <div className="bg-surface-lowest rounded-xl overflow-hidden shadow-2xl">
          <div className="bg-surface-container px-4 py-2 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-secondary"></div>
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-[10px] font-mono text-muted-foreground ml-2">
              architecture.ts
            </span>
          </div>
          <div className="p-4 font-mono text-xs text-secondary-fixed leading-relaxed">
            <span className="text-primary">interface</span> PerformanceMetrics {"{"}
            <br />
            {"  "}fcp: <span className="text-primary">number</span>;<br />
            {"  "}memoryUsage: <span className="text-primary">&quot;optimized&quot;</span>;<br />
            {"}"}
            <br />
            <span className="text-primary">const</span> engineer = () =&gt;{" "}
            <span className="text-primary">new</span> Specialist(
            <span className="text-primary">&quot;Olutunde&quot;</span>);
          </div>
        </div>
      </div>
    </section>
  );
}
