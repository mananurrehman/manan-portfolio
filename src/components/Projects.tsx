import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { projects } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Drag states for desktop mouse users
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Detect screen size to determine how many items are visible at once
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 1024 ? 1 : 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate how many dots we actually need
  const maxDots = Math.max(0, projects.length - itemsPerPage) + 1;

  // Update active dot when user scrolls or swipes
  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

    // If scrolled to the very end, set to the last dot
    if (Math.round(scrollLeft + clientWidth) >= scrollWidth - 10) {
      setCurrentIndex(maxDots - 1);
      return;
    }

    // Otherwise, calculate dot based on scroll position
    const firstChild = carouselRef.current.firstElementChild as HTMLElement;
    if (firstChild) {
      const itemWidth = firstChild.clientWidth + 24; // 24px is the gap-6
      const newIndex = Math.round(scrollLeft / itemWidth);
      setCurrentIndex(newIndex);
    }
  };

  // Handle dot click
  const scrollToProject = (index: number) => {
    if (!carouselRef.current) return;
    const firstChild = carouselRef.current.firstElementChild as HTMLElement;
    
    if (firstChild) {
      const itemWidth = firstChild.clientWidth + 24;
      // If it's the last dot, just scroll to the maximum right to avoid overshooting
      const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      const scrollPosition = index === maxDots - 1 ? maxScroll : index * itemWidth;

      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  // Mouse drag handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    if (carouselRef.current) {
      setStartX(e.pageX - carouselRef.current.offsetLeft);
      setScrollLeft(carouselRef.current.scrollLeft);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handlePointerUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          tag="projects" 
          title="Featured Projects" 
          subtitle="Production-ready applications I've built and deployed" 
        />

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUpOrLeave}
            onPointerLeave={handlePointerUpOrLeave}
            // Inline styles added for strict Firefox/IE scrollbar hiding
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            // Added stricter WebKit scrollbar hiding classes (w-0, h-0)
            className={`flex gap-6 overflow-x-auto pb-4 [&::-webkit-scrollbar]:!hidden [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0 [-ms-overflow-style:none] [scrollbar-width:none] ${
              isDragging 
                ? "cursor-grabbing select-none" 
                : "cursor-grab snap-x snap-mandatory scroll-smooth"
            }`}
          >
            {projects.map((project, i) => (
              <div
                key={project.title}
                className="flex-none w-full lg:w-[calc(50%-12px)] snap-start group rounded-xl border border-dark-border hover:border-terminal-green/40 bg-dark-card/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-terminal-green/5 flex flex-col"
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
        </div>

        {/* Pagination Dots */}
        {maxDots > 1 && (
          <div className="flex justify-center items-center gap-3 mt-6">
            {Array.from({ length: maxDots }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToProject(index)}
                aria-label={`Go to project view ${index + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index
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
