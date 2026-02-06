import Section from '../Section'
import { portfolio } from '../../data/portfolio'

export default function SkillsSection() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Core tools I use. Keep this focused on what you want to be hired for."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {portfolio.skillCategories.map((group) => (
          <div
            key={group.label}
            className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-glow backdrop-blur"
          >
            <p className="text-sm font-semibold text-white/90">{group.label}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={`${group.label}:${skill}`}
                  className="rounded-2xl border border-white/10 bg-ink-900/40 px-3 py-2 text-sm text-white/80"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
