import Section from '../Section'
import { portfolio } from '../../data/portfolio'

export default function ExperienceSection() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Internships, placements, freelance work, or leadership. Keep it concise and outcome-driven."
    >
      <div className="space-y-4">
        {portfolio.experience.map((item) => (
          <article
            key={`${item.company}-${item.role}`}
            className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-glow backdrop-blur"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                <p className="text-sm text-white/70">{item.company}</p>
              </div>
              <p className="text-sm text-white/60">{item.period}</p>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {item.highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-white/45" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
