import Section from '../Section'
import { portfolio } from '../../data/portfolio'

export default function SkillsSection() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Core tools I use. Keep this focused on what you want to be hired for."
    >
      <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-glow backdrop-blur">
        <div className="flex flex-wrap gap-2">
          {portfolio.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-2xl border border-white/10 bg-ink-900/40 px-3 py-2 text-sm text-white/80"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Section>
  )
}
