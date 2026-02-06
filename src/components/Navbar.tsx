import { useEffect, useState } from 'react'
import { portfolio } from '../data/portfolio'

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mt-3 rounded-2xl border border-white/10 bg-ink-950/55 backdrop-blur supports-[backdrop-filter]:bg-ink-950/45 shadow-glow">
          <div className="flex items-center justify-between px-4 py-3">
            <a
              href="#top"
              className="text-sm font-semibold tracking-wide text-white/90 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {portfolio.name}
              <span className="ml-2 hidden text-white/50 sm:inline">· {portfolio.title}</span>
            </a>

            <nav className="hidden items-center gap-6 sm:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/75 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={portfolio.socials.find((s) => s.label === 'Resume')?.href ?? '#contact'}
                className="rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/90 hover:bg-white/10"
              >
                Resume
              </a>
            </nav>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/90 hover:bg-white/10 sm:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              Menu
            </button>
          </div>

          {open ? (
            <div className="border-t border-white/10 px-4 py-3 sm:hidden">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-2 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}

                <div className="mt-2 flex flex-wrap gap-2">
                  {portfolio.socials.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/85 hover:bg-white/10"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  )
}
