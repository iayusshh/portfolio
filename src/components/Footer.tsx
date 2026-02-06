import { portfolio } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950/30 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {portfolio.name}. Built with React + Three.js.
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <a href="#top" className="hover:text-white/80">
            Back to top
          </a>
          {portfolio.socials
            .filter((s) => s.href.startsWith('http'))
            .map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white/80"
              >
                {s.label}
              </a>
            ))}
        </div>
      </div>
    </footer>
  )
}
