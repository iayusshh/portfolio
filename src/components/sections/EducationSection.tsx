import Section from '../Section'
import { portfolio } from '../../data/portfolio'

export default function EducationSection() {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="Academic background."
    >
      <div className="space-y-4">
        {portfolio.education.map((item) => (
          <article
            key={`${item.institution}-${item.program}-${item.period}`}
            className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-glow backdrop-blur"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">{item.program}</h3>
                <p className="text-sm text-white/70">{item.institution}</p>
              </div>
              <p className="text-sm text-white/60">{item.period}</p>
            </div>

            {item.details?.length ? (
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                {item.details.map((d) => (
                  <li key={d} className="flex gap-3">
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-white/45" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  )
}
