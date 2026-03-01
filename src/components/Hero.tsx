import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ChevronDown, MapPin } from "lucide-react";
import { personalInfo, profile } from "../data/portfolioData";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = personalInfo.title;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg scanline overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-terminal-green/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-terminal-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-20">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-terminal-green/20 bg-terminal-green/5">
          <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse-dot" />
          <span className="text-xs font-mono text-terminal-green">Available for opportunities</span>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
          <span className="text-dark-text">Hi, I'm </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-terminal-green via-terminal-cyan to-terminal-blue">
            {personalInfo.name}
          </span>
        </h1>

        {/* Typing title */}
        <div className="flex items-center justify-center mb-6">
          <div className="font-mono text-lg sm:text-2xl text-dark-text-dim">
            <span className="text-terminal-green mr-2">$</span>
            <span className="text-terminal-yellow">echo</span>{" "}
            <span className="text-dark-text">"{displayedText}</span>
            <span className="animate-blink text-terminal-green">▋</span>
            <span className="text-dark-text">"</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-1 mb-8 text-dark-text-dimmer text-sm">
          <MapPin size={14} />
          <span>{personalInfo.location}</span>
        </div>

        {/* Profile summary */}
        <p className="max-w-2xl mx-auto text-dark-text-dim text-base sm:text-lg leading-relaxed mb-10">
          {profile}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="group px-8 py-3 rounded-lg bg-terminal-green text-dark-bg font-semibold text-sm hover:bg-terminal-green-dim transition-all hover:shadow-lg hover:shadow-terminal-green/20"
          >
            View Projects
            <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-dark-border hover:border-terminal-green/50 text-dark-text-dim hover:text-terminal-green font-semibold text-sm transition-all"
          >
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4">
          {[
            { icon: Github, href: personalInfo.github, label: "GitHub" },
            { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-lg border border-dark-border hover:border-terminal-green/50 bg-dark-surface/50 flex items-center justify-center text-dark-text-dim hover:text-terminal-green transition-all hover:shadow-lg hover:shadow-terminal-green/10"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <a href="#about" className="text-dark-text-dimmer hover:text-terminal-green transition-colors">
            <ChevronDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
