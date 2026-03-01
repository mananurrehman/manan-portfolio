interface SectionHeadingProps {
  tag: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ tag, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-dark-card border border-dark-border mb-4">
        <span className="font-mono text-xs text-terminal-green">~/</span>
        <span className="font-mono text-xs text-dark-text-dim">{tag}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold text-dark-text mb-3">{title}</h2>
      {subtitle && <p className="text-dark-text-dim max-w-xl mx-auto">{subtitle}</p>}
    </div>
  );
}
