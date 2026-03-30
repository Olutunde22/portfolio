import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const projects = [
  {
    id: 1,
    image: "/projects/tredbase.png",
    title: "Tredbase",
    description:
      "School payment management platform streamlining fee collection and financial tracking for educational institutions.",
    tags: ["NEXT.JS", "EDTECH"],
    link: "https://www.tredbase.com/",
  },
  {
    id: 2,
    image: "/projects/bash.png",
    title: "Bash",
    description:
      "All-in-one event management platform for seamless planning and execution of celebrations.",
    tags: ["NEXT.JS", "EVENTS"],
    link: "https://www.usebash.io/",
  },
  {
    id: 3,
    image: "/projects/hancaly.png",
    title: "Hancaly",
    description:
      "Handy calendar for managing all your appointments with seamless scheduling and booking capabilities.",
    tags: ["NEXT.JS", "SAAS"],
    link: "https://hancaly.com/",
  },
  {
    id: 4,
    image: "/projects/alliance-chemicals.png",
    title: "Alliance Chemicals",
    description:
      "At Alliance Chemicals, we specialize in delivering high-quality chemical solutions tailored to diverse industries across the globe. Our commitment to innovation, quality, and sustainability drives us to meet the evolving needs of our clients.",
    tags: ["NEXT.JS", "REACT"],
    link: "https://www.alliancechemicalsglobal.com/",
  },
];

export function ProjectsSection() {
  return (
    <section className="py-24 px-8 bg-surface-low" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <Reveal delay={0}>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground mb-4">
              Craft & Contributions
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-muted-foreground max-w-xl">
              A selection of enterprise-grade applications and technical literature.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={0.16 + index * 0.08}>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-surface-container p-2 rounded-2xl hover:scale-[1.02] transition-transform duration-200 ease-out"
              >
                <div className="relative h-52 rounded-xl overflow-hidden mb-6 bg-surface-high">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    loading={index < 3 ? "eager" : "lazy"}
                    priority={index === 0}
                  />
                </div>
                <div className="px-4 pb-6 flex flex-col mt-auto">
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-base mb-6">{project.description}</p>
                  <div className="flex gap-2 mt-10">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="default" className="text-[10px]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}

          <Reveal delay={0.48}>
            <div className="lg:col-span-1 bg-gradient-to-br from-primary-container to-surface-container p-1 rounded-2xl h-full">
              <Link
                className="bg-surface-lowest h-full p-8 rounded-2xl flex flex-col cursor-pointer"
                href="https://medium.com/@olutunde/a-cleaner-way-to-inject-runtime-configs-in-react-with-docker-and-nginx-0c6e75af476f"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-2 mb-6">
                  <Badge variant="secondary" className="text-[10px]">
                    FEATURED WRITING
                  </Badge>
                  <span className="text-muted-foreground text-xs font-mono">10 min read</span>
                </div>
                <h3 className="text-2xl font-black text-foreground leading-tight mb-6">
                  A Cleaner Way to Inject Runtime Configs in React with Docker and nginx
                </h3>
                <p className="text-muted-foreground text-sm mb-8">
                  Exploring DevOps patterns for frontend engineers: How to achieve environment
                  parity without rebuilding your container.
                </p>
                <div className="mt-auto">
                  <span className="flex items-center gap-3 text-primary font-bold hover:gap-5 transition-all duration-200 ease-out">
                    Read Article <TrendingUp size={20} />
                  </span>
                </div>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
