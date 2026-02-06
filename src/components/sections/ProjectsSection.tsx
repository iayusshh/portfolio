import Section from '../Section'
import { portfolio } from '../../data/portfolio'

function Pill({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/75">
      {children}
    </span>
  )
}

export default function ProjectsSection() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="A few things I’ve built recently. Swap these out with your real work and links in src/data/portfolio.ts."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {portfolio.projects.map((p) => (
          <article
            key={p.title}
            className="group rounded-3xl border border-white/10 bg-white/5 p-5 shadow-glow backdrop-blur transition hover:bg-white/10"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <div className="flex gap-2">
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/85 hover:bg-white/10"
                  >
                    Live
                  </a>
                ) : null}
                {p.repo ? (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/85 hover:bg-white/10"
                  >
                    Code
                  </a>
                ) : null}
              </div>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-white/75">{p.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </div>

            <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <p className="mt-4 text-xs text-white/55">
              Tip: Quantify impact (e.g. “reduced load time by 35%”).
            </p>
          </article>
        ))}
      </div>
    </Section>
  )
}
