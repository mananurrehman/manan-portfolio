import { Mail, Phone, Linkedin, Github, Send, MapPin } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-card border border-dark-border mb-4">
            <span className="font-mono text-xs text-terminal-green">~/</span>
            <span className="font-mono text-xs text-dark-text-dim">contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-text mb-3">Let's Connect</h2>
          <p className="text-dark-text-dim max-w-xl mx-auto">
            I'm actively looking for Junior/Intern DevOps Engineer roles. Feel free to reach out!
          </p>
        </div>

        {/* Terminal-style contact card */}
        <div className="rounded-xl border border-dark-border bg-dark-card/50 overflow-hidden max-w-2xl mx-auto">
          {/* Terminal bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-dark-surface/80 border-b border-dark-border">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-terminal-red/80" />
              <span className="w-3 h-3 rounded-full bg-terminal-yellow/80" />
              <span className="w-3 h-3 rounded-full bg-terminal-green/80" />
            </div>
            <span className="ml-2 font-mono text-xs text-dark-text-dimmer">contact-info.sh</span>
          </div>

          <div className="p-6 sm:p-8 font-mono text-sm space-y-4">
            <div className="text-dark-text-dimmer">
              <span className="text-terminal-green">manan</span>
              <span className="text-dark-text-dim">@</span>
              <span className="text-terminal-blue">portfolio</span>
              <span className="text-dark-text-dim">:~$ </span>
              <span className="text-terminal-yellow">cat</span>
              <span className="text-dark-text"> contact.json</span>
            </div>

            <div className="pl-4 border-l-2 border-dark-border space-y-3 py-2">
              <ContactLine icon={<Mail size={15} />} label="email" value={personalInfo.email} href={`mailto:${personalInfo.email}`} />
              <ContactLine icon={<Phone size={15} />} label="phone" value={personalInfo.phone} href={`tel:${personalInfo.phone}`} />
              <ContactLine icon={<MapPin size={15} />} label="location" value={personalInfo.location} />
              <ContactLine icon={<Linkedin size={15} />} label="linkedin" value="mananurrehman" href={personalInfo.linkedin} />
              <ContactLine icon={<Github size={15} />} label="github" value="mananurrehman" href={personalInfo.github} />
            </div>

            <div className="text-dark-text-dimmer pt-2">
              <span className="text-terminal-green">manan</span>
              <span className="text-dark-text-dim">@</span>
              <span className="text-terminal-blue">portfolio</span>
              <span className="text-dark-text-dim">:~$ </span>
              <span className="animate-blink text-terminal-green">▋</span>
            </div>
          </div>
        </div>

        {/* Quick action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a
            href={`mailto:${personalInfo.email}`}
            className="group inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-terminal-green text-dark-bg font-semibold text-sm hover:bg-terminal-green-dim transition-all hover:shadow-lg hover:shadow-terminal-green/20"
          >
            <Send size={16} />
            Send Email
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-dark-border hover:border-terminal-blue/50 text-dark-text-dim hover:text-terminal-blue font-semibold text-sm transition-all"
          >
            <Linkedin size={16} />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactLine({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-center gap-3 text-dark-text-dim">
      <span className="text-terminal-green/60">{icon}</span>
      <span className="text-terminal-yellow">"{label}"</span>
      <span className="text-dark-text-dimmer">:</span>
      {href ? (
        <a href={href} target={label === "email" || label === "phone" ? undefined : "_blank"} rel="noopener noreferrer" className="text-dark-text hover:text-terminal-green transition-colors underline-offset-4 hover:underline">
          "{value}"
        </a>
      ) : (
        <span className="text-dark-text">"{value}"</span>
      )}
    </div>
  );
}
