import { Server, GitBranch, Container, Cloud, ChevronRight } from "lucide-react";
import { experience } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

const iconMap: Record<string, React.ReactNode> = {
  server: <Server size={20} />,
  pipeline: <GitBranch size={20} />,
  container: <Container size={20} />,
  cloud: <Cloud size={20} />,
};

const colorCycle = [
  { line: "from-terminal-green to-terminal-cyan", dot: "bg-terminal-green", icon: "text-terminal-green bg-terminal-green/10 border-terminal-green/30" },
  { line: "from-terminal-cyan to-terminal-blue", dot: "bg-terminal-cyan", icon: "text-terminal-blue bg-terminal-blue/10 border-terminal-blue/30" },
  { line: "from-terminal-blue to-terminal-purple", dot: "bg-terminal-blue", icon: "text-terminal-purple bg-terminal-purple/10 border-terminal-purple/30" },
  { line: "from-terminal-purple to-terminal-yellow", dot: "bg-terminal-purple", icon: "text-terminal-yellow bg-terminal-yellow/10 border-terminal-yellow/30" },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 bg-dark-surface/30 relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeading tag="experience" title="Professional Experience" subtitle="Hands-on DevOps practice and project work" />

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-terminal-green via-terminal-blue to-terminal-purple hidden sm:block" />

          <div className="space-y-8">
            {experience.map((exp, i) => {
              const color = colorCycle[i % colorCycle.length];
              return (
                <div key={exp.title} className="relative flex gap-6 group">
                  {/* Timeline dot */}
                  <div className="hidden sm:flex flex-col items-center shrink-0">
                    <div className={`w-12 h-12 rounded-xl ${color.icon} border flex items-center justify-center z-10 group-hover:scale-110 transition-transform`}>
                      {iconMap[exp.icon]}
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="flex-1 rounded-xl border border-dark-border hover:border-dark-border-hover bg-dark-card/50 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-black/10">
                    <div className="flex items-center gap-2 mb-1 sm:hidden">
                      <div className={`w-8 h-8 rounded-lg ${color.icon} border flex items-center justify-center`}>
                        {iconMap[exp.icon]}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-dark-text mb-4 mt-2 sm:mt-0">{exp.title}</h3>
                    <ul className="space-y-3">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-dark-text-dim leading-relaxed">
                          <ChevronRight size={14} className="text-terminal-green shrink-0 mt-1" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
