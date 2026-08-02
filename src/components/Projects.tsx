import { useState, useEffect } from "react";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { projects } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  // Detect screen size to switch between 1 item (mobile) and 2 items (desktop)
  useEffect(() => {
    const handleResize = () => {
      // Tailwind's 'lg' breakpoint is 1024px
      const isMobile = window.innerWidth < 1024;
      setItemsPerPage(isMobile ? 1 : 2);
    };

    // Run once on mount to set initial state
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  // Reset to first page if resizing causes the current page to disappear
  useEffect(() => {
    if (currentPage >= totalPages && totalPages > 0) {
      setCurrentPage(0);
    }
  }, [totalPages, currentPage]);

  // Slice the projects array to only show the ones for the current page
  const startIndex = currentPage * itemsPerPage;
  const visibleProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          tag="projects" 
          title="Featured Projects" 
          subtitle="Production-ready applications I've built and deployed" 
        />

        {/* 
          Added a min-height to prevent the section from jumping up and down 
          if projects have slightly different heights 
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[450px]">
          {visibleProjects.map((project, i) => (
            <div
              key={project.title}
              className="group rounded-xl border border-dark-border hover:border-terminal-green/40 bg-dark-card/50 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-terminal-green/5 hover:-translate-y-1 flex flex-col animate-in fade-in zoom-in-95"
            >
              {/* Terminal header bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-dark-surface/80 border-b border-dark-border">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-terminal-red/80" />
                  <span className="w-3 h-3 rounded-full bg-terminal-yellow/80" />
                  <span className="w-3 h-3 rounded-full bg-terminal-green/80" />
                </div>
                <span className="ml-2 font-mono text-xs text-dark-text-dimmer">
                  {/* Calculate absolute index to keep accurate file names across pages */}
                  project-{startIndex + i + 1}.yml
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

        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                aria-label={`Go to project page ${index + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  currentPage === index
                    ? "w-8 h-2.5 bg-terminal-green shadow-[0_0_8px_rgba(var(--terminal-green-rgb),0.4)]"
                    : "w-2.5 h-2.5 bg-dark-border hover:bg-terminal-green/50"
                }`}
              />
            ))}
          </div>
        )}

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
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
