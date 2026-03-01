import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-bg/90 backdrop-blur-xl border-b border-dark-border shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-terminal-green/10 border border-terminal-green/30 flex items-center justify-center group-hover:bg-terminal-green/20 transition-colors">
              <Terminal size={16} className="text-terminal-green" />
            </div>
            <span className="font-mono text-sm font-semibold text-terminal-green">
              {personalInfo.name.split(" ")[0].toLowerCase()}
              <span className="text-dark-text-dim">@</span>
              <span className="text-terminal-blue">devops</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-dark-text-dim hover:text-terminal-green font-mono transition-colors relative group"
              >
                <span className="text-terminal-green/0 group-hover:text-terminal-green/70 transition-colors">~/</span>
                {link.label.toLowerCase()}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-dark-text-dim hover:text-terminal-green transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-dark-surface/95 backdrop-blur-xl border-b border-dark-border">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 text-sm text-dark-text-dim hover:text-terminal-green font-mono transition-colors"
              >
                <span className="text-terminal-green/50">$ </span>
                cd {link.label.toLowerCase()}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
