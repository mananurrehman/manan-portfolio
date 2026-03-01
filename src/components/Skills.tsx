import { Cloud, GitBranch, Terminal, Shield, Network, Code } from "lucide-react";
import { skills } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

const iconMap: Record<string, React.ReactNode> = {
  cloud: <Cloud size={20} />,
  pipeline: <GitBranch size={20} />,
  terminal: <Terminal size={20} />,
  shield: <Shield size={20} />,
  network: <Network size={20} />,
  code: <Code size={20} />,
};

const colorMap: Record<string, { border: string; bg: string; text: string; badge: string }> = {
  cloud: {
    border: "border-terminal-blue/30 hover:border-terminal-blue/60",
    bg: "bg-terminal-blue/10",
    text: "text-terminal-blue",
    badge: "bg-terminal-blue/10 text-terminal-blue border-terminal-blue/20",
  },
  pipeline: {
    border: "border-terminal-green/30 hover:border-terminal-green/60",
    bg: "bg-terminal-green/10",
    text: "text-terminal-green",
    badge: "bg-terminal-green/10 text-terminal-green border-terminal-green/20",
  },
  terminal: {
    border: "border-terminal-yellow/30 hover:border-terminal-yellow/60",
    bg: "bg-terminal-yellow/10",
    text: "text-terminal-yellow",
    badge: "bg-terminal-yellow/10 text-terminal-yellow border-terminal-yellow/20",
  },
  shield: {
    border: "border-terminal-red/30 hover:border-terminal-red/60",
    bg: "bg-terminal-red/10",
    text: "text-terminal-red",
    badge: "bg-terminal-red/10 text-terminal-red border-terminal-red/20",
  },
  network: {
    border: "border-terminal-purple/30 hover:border-terminal-purple/60",
    bg: "bg-terminal-purple/10",
    text: "text-terminal-purple",
    badge: "bg-terminal-purple/10 text-terminal-purple border-terminal-purple/20",
  },
  code: {
    border: "border-terminal-orange/30 hover:border-terminal-orange/60",
    bg: "bg-terminal-orange/10",
    text: "text-terminal-orange",
    badge: "bg-terminal-orange/10 text-terminal-orange border-terminal-orange/20",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading tag="skills" title="Core Competencies" subtitle="Technologies and tools I work with" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill) => {
            const colors = colorMap[skill.icon] || colorMap.code;
            return (
              <div
                key={skill.category}
                className={`group rounded-xl border ${colors.border} bg-dark-card/50 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-1`}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center ${colors.text}`}>
                    {iconMap[skill.icon]}
                  </div>
                  <h3 className="font-semibold text-dark-text text-sm">{skill.category}</h3>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className={`px-2.5 py-1 rounded-md text-xs font-mono border ${colors.badge} transition-all`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
