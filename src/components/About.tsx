import { personalInfo } from "../data/portfolioData";

const stats = [
  { label: "Projects Deployed", value: "4+", color: "text-terminal-green" },
  { label: "CI/CD Pipelines", value: "4+", color: "text-terminal-blue" },
  { label: "Certifications", value: "6", color: "text-terminal-yellow" },
  { label: "CGPA", value: "3.45", color: "text-terminal-purple" },
];

const coreTools = [
  "Docker", "Jenkins", "AWS EC2", "Git/GitHub", "Linux", "Python", "Bash", "PostgreSQL",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 bg-dark-surface/30 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-card border border-dark-border mb-4">
            <span className="font-mono text-xs text-terminal-green">~/</span>
            <span className="font-mono text-xs text-dark-text-dim">about</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-text mb-3">About Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: Terminal card */}
          <div className="lg:col-span-3 rounded-xl border border-dark-border bg-dark-card/50 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-dark-surface/80 border-b border-dark-border">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-terminal-red/80" />
                <span className="w-3 h-3 rounded-full bg-terminal-yellow/80" />
                <span className="w-3 h-3 rounded-full bg-terminal-green/80" />
              </div>
              <span className="ml-2 font-mono text-xs text-dark-text-dimmer">about.sh</span>
            </div>

            <div className="p-6 font-mono text-sm space-y-3">
              <div>
                <span className="text-terminal-green">$</span>{" "}
                <span className="text-terminal-yellow">whoami</span>
              </div>
              <div className="text-dark-text pl-4">{personalInfo.name}</div>

              <div>
                <span className="text-terminal-green">$</span>{" "}
                <span className="text-terminal-yellow">cat</span>{" "}
                <span className="text-dark-text">role.txt</span>
              </div>
              <div className="text-dark-text pl-4">{personalInfo.title}</div>

              <div>
                <span className="text-terminal-green">$</span>{" "}
                <span className="text-terminal-yellow">cat</span>{" "}
                <span className="text-dark-text">focus.txt</span>
              </div>
              <div className="text-dark-text-dim pl-4 leading-relaxed">
                Building reliable CI/CD pipelines, containerizing applications,<br />
                deploying to cloud infrastructure, and automating everything in between.
              </div>

              <div>
                <span className="text-terminal-green">$</span>{" "}
                <span className="text-terminal-yellow">ls</span>{" "}
                <span className="text-dark-text">tools/</span>
              </div>
              <div className="pl-4 flex flex-wrap gap-2">
                {coreTools.map((tool) => (
                  <span key={tool} className="text-terminal-cyan">{tool}</span>
                ))}
              </div>

              <div className="pt-2">
                <span className="text-terminal-green">$</span>{" "}
                <span className="animate-blink text-terminal-green">▋</span>
              </div>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-dark-border bg-dark-card/50 p-5 flex flex-col items-center justify-center text-center hover:border-dark-border-hover transition-all"
              >
                <span className={`text-3xl font-bold font-mono ${stat.color}`}>{stat.value}</span>
                <span className="text-xs text-dark-text-dimmer mt-2 font-mono">{stat.label}</span>
              </div>
            ))}

            {/* Fun DevOps quote */}
            <div className="col-span-2 rounded-xl border border-dark-border bg-dark-card/50 p-5">
              <p className="text-sm text-dark-text-dim italic text-center leading-relaxed">
                "Automate everything. If you do something twice, write a script. If you do it three times, build a pipeline."
              </p>
              <p className="text-xs text-terminal-green/50 text-center mt-2 font-mono">— DevOps Philosophy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
