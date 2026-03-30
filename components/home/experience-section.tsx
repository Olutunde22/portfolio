import { CheckCircle2, Gauge, Database } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function ExperienceSection() {
  return (
    <section className="py-24 px-8 bg-surface" id="experience">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <Reveal delay={0}>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground">
              Career Trajectory
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-muted-foreground font-mono text-sm max-w-xs text-right hidden md:block">
              Engineered for peak performance and memory efficiency.
            </p>
          </Reveal>
        </div>

        <div className="space-y-12">
          <Reveal delay={0.16}>
            <div className="group relative bg-surface-low p-8 rounded-2xl hover:bg-surface-container transition-colors duration-200 ease-out">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Autochek Africa</h3>
                  <p className="text-primary font-medium">Engineer</p>
                </div>
                <div className="text-muted-foreground font-mono text-sm bg-surface-highest px-4 py-1 rounded-full">
                  2025 — Present
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex gap-3">
                    <CheckCircle2 className="text-secondary text-sm shrink-0 mt-1" size={16} />
                    <span className="text-xl">
                      Spearheaded a complete architectural overhaul resulting in a 97% performance
                      improvement across core flows.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="text-secondary text-sm shrink-0 mt-1" size={16} />
                    <span className="text-xl">
                      Implemented aggressive tree-shaking and lazy loading strategies, achieving a
                      90% memory reduction.
                    </span>
                  </li>
                </ul>

                <div className="bg-surface-lowest p-6 rounded-xl border-l-4 border-secondary">
                  <span className="text-xs uppercase tracking-widest text-secondary font-bold mb-2 block">
                    Key Achievement
                  </span>
                  <p className="text-foreground font-medium leading-relaxed text-base">
                    Achieved a 97% performance improvement by implementing Incremental Static
                    Regeneration (ISR) for non-dynamic pages, cutting page load times from 2+
                    seconds to under 50ms within one week of deployment.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="group relative bg-surface-low p-8 rounded-2xl hover:bg-surface-container transition-colors duration-200 ease-out">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Vaulthill</h3>
                  <p className="text-primary font-medium">Full Stack Engineer</p>
                </div>
                <div className="text-muted-foreground font-mono text-sm bg-surface-highest px-4 py-1 rounded-full">
                  Dec 2023 – May 2025
                </div>
              </div>

              <div className="mt-6">
                <p className="text-muted-foreground mb-4 text-xl">
                  Architected the real-time interaction layer for a decentralized metaverse
                  ecosystem.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-surface-container p-3 rounded-lg border border-primary/5">
                    <Gauge className="text-primary" size={20} />
                    <span className="text-sm font-mono">Custom WebSocket Layer</span>
                  </div>
                  <div className="flex items-center gap-2 bg-surface-container p-3 rounded-lg border border-primary/5">
                    <Database className="text-primary" size={20} />
                    <span className="text-sm font-mono">Real-time State Sync</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="group relative bg-surface-low p-8 rounded-2xl hover:bg-surface-container transition-colors duration-200 ease-out">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Spur SMB</h3>
                  <p className="text-primary font-medium">Frontend Engineer</p>
                </div>
                <div className="text-muted-foreground font-mono text-sm bg-surface-highest px-4 py-1 rounded-full">
                  Jul – Nov 2023
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-surface-lowest rounded-lg">
                  <span className="text-4xl font-black text-secondary block mb-2">15%</span>
                  <span className="text-xs text-muted-foreground uppercase text-base">
                    Faster Load Times
                  </span>
                </div>
                <div className="p-4 bg-surface-lowest rounded-lg">
                  <span className="text-4xl font-black text-primary block mb-2">WCAG</span>
                  <span className="text-xs text-muted-foreground uppercase text-base">
                    100% Compliance
                  </span>
                </div>
                <div className="p-4 bg-surface-lowest rounded-lg">
                  <span className="text-4xl font-black text-foreground block mb-2">7+</span>
                  <span className="text-xs text-muted-foreground uppercase text-base">
                    Projects Delivered
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
