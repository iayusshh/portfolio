import { motion } from 'framer-motion'
import { portfolio } from '../../data/portfolio'

function ExternalLink({ href, children }: { href: string; children: string }) {
  const external = href.startsWith('http')
  const download = !external && href.toLowerCase().endsWith('.pdf')

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      download={download ? 'Ayush_Anand_Resume.pdf' : undefined}
      className="rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/85 hover:bg-white/10"
    >
      {children}
    </a>
  )
}

export default function HeroSection() {
  return (
    <section id="top" className="pb-10 pt-8 sm:pb-16">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
          >
            Building full-stack products · Open to opportunities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl"
          >
            {portfolio.name}
            <span className="block bg-gradient-to-r from-indigo-300 via-pink-300 to-sky-200 bg-[length:200%_200%] bg-clip-text text-transparent animate-shimmer">
              {portfolio.title}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/75 sm:text-lg"
          >
            {portfolio.about}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="rounded-2xl bg-white px-4 py-2.5 text-sm font-semibold text-ink-950 hover:bg-white/90"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-2xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/90 hover:bg-white/10"
            >
              Contact me
            </a>
            <span className="ml-1 text-sm text-white/60">{portfolio.location}</span>
          </motion.div>

          <div className="mt-7 flex flex-wrap gap-2">
            {portfolio.socials.map((s) => (
              <ExternalLink key={s.href} href={s.href}>
                {s.label}
              </ExternalLink>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-glow backdrop-blur">
          <p className="text-sm font-semibold text-white/90">Highlights</p>
          <ul className="mt-3 space-y-3 text-sm text-white/75">
            <li className="flex gap-3">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-indigo-300" />
              <span>Clean, production-grade TypeScript + React.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-pink-300" />
              <span>3D UI with performance-conscious rendering.</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-sky-200" />
              <span>Strong focus on UX, accessibility, and shipping.</span>
            </li>
          </ul>

          <div className="mt-5 rounded-2xl border border-white/10 bg-ink-900/40 p-4">
            <p className="text-xs text-white/60">Quick contact</p>
            <a
              href={`mailto:${portfolio.email}`}
              className="mt-1 block text-sm font-semibold text-white hover:text-white/90"
            >
              {portfolio.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
