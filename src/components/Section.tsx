import type { ReactNode } from 'react'

type Props = {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
}

export default function Section({ id, title, subtitle, children }: Props) {
  return (
    <section id={id} className="scroll-mt-28 py-14">
      <div className="mb-6">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {title}
        </h2>
        {subtitle ? <p className="mt-2 max-w-2xl text-white/70">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  )
}
