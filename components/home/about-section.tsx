import { Badge } from "@/components/ui/badge";
import { TerminalIcon } from "@/assets/icons";
import { Reveal } from "@/components/ui/reveal";

export function AboutSection() {
  const skills = [
    "React & Next.js",
    "TypeScript",
    "Vue.js",
    "Tailwind CSS",
    "GraphQL",
    "Redux / Zustand",
    "WebSockets",
    "Jest / Cypress",
    "Docker",
    "WCAG Compliance",
  ];

  return (
    <section className="py-24 px-8 bg-surface-low" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <Reveal delay={0}>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground mb-8">
                Architecting the Interface.
              </h2>
            </Reveal>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <Reveal delay={0.08}>
                <p className="text-xl">
                  With over 4 years of specialization in the frontend ecosystem, I focus on the
                  intersection of performance engineering and user-centric design.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="text-xl">
                  I specialize in transforming complex business logic into high-performance web
                  applications, leveraging modern frameworks to ensure accessibility (WCAG) and
                  technical excellence are never compromised.
                </p>
              </Reveal>
            </div>
          </div>

          <div>
            <Reveal delay={0.24}>
              <h3 className="text-foreground font-bold mb-6 flex items-center gap-2">
                <TerminalIcon className="text-secondary w-5 h-5" />
                Technical Arsenal
              </h3>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Badge key={skill} variant="default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
