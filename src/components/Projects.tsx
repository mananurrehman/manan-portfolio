import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { projects } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading tag="projects" title="Featured Projects" subtitle="Production-ready applications I've built and deployed" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group rounded-xl border border-dark-border hover:border-terminal-green/40 bg-dark-card/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-terminal-green/5 hover:-translate-y-1 flex flex-col"
            >
              {/* Terminal header bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-dark-surface/80 border-b border-dark-border">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-terminal-red/80" />
                  <span className="w-3 h-3 rounded-full bg-terminal-yellow/80" />
                  <span className="w-3 h-3 rounded-full bg-terminal-green/80" />
                </div>
                <span className="ml-2 font-mono text-xs text-dark-text-dimmer">
                  project-{i + 1}.yml
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                {/* Title & Links */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-dark-text group-hover:text-terminal-green transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 ml-3 w-9 h-9 rounded-lg border border-dark-border hover:border-terminal-green/50 flex items-center justify-center text-dark-text-dim hover:text-terminal-green transition-all"
                    aria-label="View on GitHub"
                  >
                    <Github size={16} />
                  </a>
                </div>

                {/* Description */}
                <p className="text-sm text-dark-text-dim leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6 flex-1">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-dark-text-dim">
                      <ChevronRight size={14} className="text-terminal-green shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-dark-border">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-terminal-green/5 text-terminal-green border border-terminal-green/15"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com/mananurrehman"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-dark-border hover:border-terminal-green/50 text-dark-text-dim hover:text-terminal-green font-mono text-sm transition-all"
          >
            <Github size={16} />
            View all repositories
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
