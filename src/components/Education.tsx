import { GraduationCap, Award, Trophy, ChevronRight } from "lucide-react";
import { education, certifications, achievements } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 bg-dark-surface/30 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading tag="education" title="Education & Credentials" subtitle="Academic background, certifications, and achievements" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Education Card */}
          <div className="rounded-xl border border-terminal-blue/30 hover:border-terminal-blue/60 bg-dark-card/50 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-black/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-terminal-blue/10 border border-terminal-blue/30 flex items-center justify-center text-terminal-blue">
                <GraduationCap size={20} />
              </div>
              <h3 className="font-semibold text-dark-text">Education</h3>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-bold text-dark-text">{education.degree}</h4>
              <p className="text-sm text-dark-text-dim">{education.university}</p>
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-terminal-blue/10 text-terminal-blue border border-terminal-blue/20">
                  {education.years}
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-terminal-green/10 text-terminal-green border border-terminal-green/20">
                  CGPA: {education.cgpa}
                </span>
              </div>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="rounded-xl border border-terminal-yellow/30 hover:border-terminal-yellow/60 bg-dark-card/50 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-black/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-terminal-yellow/10 border border-terminal-yellow/30 flex items-center justify-center text-terminal-yellow">
                <Award size={20} />
              </div>
              <h3 className="font-semibold text-dark-text">Certifications</h3>
            </div>

            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li key={cert.name} className="flex items-start gap-2">
                  <ChevronRight size={14} className="text-terminal-yellow shrink-0 mt-1" />
                  <div>
                    <span className="text-sm text-dark-text">{cert.name}</span>
                    <span className="block text-xs text-dark-text-dimmer font-mono">{cert.provider}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements Card */}
          <div className="rounded-xl border border-terminal-purple/30 hover:border-terminal-purple/60 bg-dark-card/50 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-black/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-terminal-purple/10 border border-terminal-purple/30 flex items-center justify-center text-terminal-purple">
                <Trophy size={20} />
              </div>
              <h3 className="font-semibold text-dark-text">Achievements</h3>
            </div>

            <ul className="space-y-4">
              {achievements.map((a, i) => (
                <li key={i} className="flex items-start gap-2">
                  <ChevronRight size={14} className="text-terminal-purple shrink-0 mt-1" />
                  <span className="text-sm text-dark-text-dim leading-relaxed">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
