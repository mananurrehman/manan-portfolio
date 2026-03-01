import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 px-4 sm:px-6 border-t border-dark-border bg-dark-surface/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-mono text-sm text-dark-text-dimmer">
            <span className="text-terminal-green">©</span>
            <span>{year} {personalInfo.name}.</span>
            <span className="hidden sm:inline">All rights reserved.</span>
          </div>

          <div className="flex items-center gap-1 text-xs text-dark-text-dimmer">
            <span>Built with</span>
            <Heart size={12} className="text-terminal-red fill-terminal-red" />
            <span>using React + Tailwind CSS</span>
          </div>

          <div className="flex items-center gap-3">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-dark-text-dimmer hover:text-terminal-green transition-colors" aria-label="GitHub">
              <Github size={16} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-dark-text-dimmer hover:text-terminal-blue transition-colors" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="text-dark-text-dimmer hover:text-terminal-yellow transition-colors" aria-label="Email">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
