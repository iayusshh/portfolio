import { useState } from 'react'
import Section from '../Section'
import { portfolio } from '../../data/portfolio'

export default function ContactSection() {
  const [copied, setCopied] = useState(false)
  const resumeHref = portfolio.socials.find((s) => s.label === 'Resume')?.href
  const resumeExternal = resumeHref?.startsWith('http') ?? false

  const subject = encodeURIComponent('Interview / Opportunity')
  const body = encodeURIComponent(
    `Hi ${portfolio.name},\n\nI found your portfolio and would like to connect about a role.\n\n—`,
  )
  const mailto = `mailto:${portfolio.email}?subject=${subject}&body=${body}`

  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="If you’re hiring or want to collaborate, I’m easy to reach."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-glow backdrop-blur">
          <p className="text-sm text-white/70">Email</p>
          <a
            href={mailto}
            className="mt-2 block text-lg font-semibold text-white hover:text-white/90"
          >
            {portfolio.email}
          </a>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              className="rounded-2xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/90 hover:bg-white/10"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(portfolio.email)
                  setCopied(true)
                  window.setTimeout(() => setCopied(false), 1200)
                } catch {
                  // Clipboard may be blocked; user can still copy manually.
                }
              }}
            >
              {copied ? 'Copied' : 'Copy email'}
            </button>
            <a
              href={mailto}
              className="rounded-2xl bg-white px-4 py-2.5 text-sm font-semibold text-ink-950 hover:bg-white/90"
            >
              Open email
            </a>

            {resumeHref ? (
              <a
                href={resumeHref}
                target={resumeExternal ? '_blank' : undefined}
                rel={resumeExternal ? 'noreferrer' : undefined}
                download={!resumeExternal ? 'Ayush_Anand_Resume.pdf' : undefined}
                className="rounded-2xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/90 hover:bg-white/10"
              >
                Download resume
              </a>
            ) : null}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-glow backdrop-blur">
          <p className="text-sm font-semibold text-white/90">Elsewhere</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {portfolio.socials
              .filter((s) => s.label !== 'Resume')
              .map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/85 hover:bg-white/10"
                >
                  {s.label}
                </a>
              ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
