export type SocialLink = {
  label: string
  href: string
}

export type Project = {
  title: string
  description: string
  tech: string[]
  highlights?: string[]
  href?: string
  repo?: string
}

export type ExperienceItem = {
  role: string
  company: string
  period: string
  highlights: string[]
}

export type EducationItem = {
  program: string
  institution: string
  period: string
  details?: string[]
}

export type SkillCategory = {
  label: string
  items: string[]
}

export const portfolio = {
  name: 'Ayush Anand',
  title: 'Full-Stack Developer',
  location: 'Patna, Bihar, India',
  email: 'ayush.doingwork@gmail.com',
  website: 'https://porfolio-ayush-doingwork.vercel.app',
  socials: [
    { label: 'GitHub', href: 'https://github.com/iayusshh' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ayush-anand-122b67326/' },
    { label: 'LeetCode', href: 'https://leetcode.com/u/iayusshh/' },
    // Google Drive share link converted to direct download.
    { label: 'Resume', href: 'https://drive.google.com/file/d/1o2MbPtOMQ2BcNpm1Hqb3TwjH2DzKByIY/view?usp=sharing' },
  ] satisfies SocialLink[],
  about:
    'I build production-grade full-stack web apps with modern UX, strong auth/data modeling, and a focus on shipping. I enjoy automation and creative web experiences.',
  skillCategories: [
    {
      label: 'Languages',
      items: ['JavaScript', 'TypeScript', 'Java', 'C'],
    },
    {
      label: 'Frontend',
      items: ['React', 'Next.js (App Router)', 'Vite', 'Tailwind CSS'],
    },
    {
      label: 'Backend & Data',
      items: ['Node.js', 'Supabase (Auth, Postgres, RLS)', 'Prisma ORM', 'PostgreSQL'],
    },
    {
      label: 'DevOps & Tooling',
      items: ['Git', 'Docker', 'Jira', 'Vercel'],
    },
    {
      label: 'Automation',
      items: ['n8n'],
    },
    {
      label: 'CS Fundamentals',
      items: ['DSA', 'OOP', 'OS', 'RDBMS', 'Computer Networks'],
    },
  ] satisfies SkillCategory[],
  projects: [
    {
      title: 'DeltaxGamma',
      description:
        'Internal membership management platform handling registrations, subscriptions, coupons, content delivery, and analytics with security-first data access.',
      tech: [
        'Next.js 15',
        'TypeScript',
        'React 19',
        'Supabase (Auth/Postgres/RLS)',
        'Nodemailer',
        'Vercel Analytics',
      ],
      highlights: [
        'Implemented Supabase magic links/OTP with SSR integration and admin role gating.',
        'Enforced Row-Level Security (RLS) with layered protection (middleware + server checks).',
        'Built email delivery failover (Resend → Gmail) and tracking/coupon validation endpoints.',
      ],
      href: 'https://www.deltaxgamma.in',
      repo: 'https://github.com/iayusshh/deltaxgamma',
    },
    {
      title: 'RemindifyCircle',
      description:
        'Social reminder platform for trusted contact circles with a full reminder lifecycle (snooze, done, undo) and multi-state filtering.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Supabase (PostgreSQL/Auth)', 'JavaScript'],
      highlights: [
        'Built circle connections via username-based requests with accept/reject flows.',
        'Implemented real-time reminder state transitions and filtering (All/Pending/Snoozed/Done).',
        'Shipped as a PWA with installable mobile-friendly UX and live deployment.',
      ],
      href: 'https://remindify-circle.vercel.app/',
      repo: 'https://github.com/iayusshh/RemindifyCircle',
    },
    {
      title: 'Sellar — Creator Monetization Platform',
      description:
        'Creator-first commerce platform (Cosmofeed/Graphy-style) with storefronts and product pages, plus a ledger-backed wallet system and Stripe payments (demo).',
      tech: [
        'Next.js (App Router)',
        'TypeScript',
        'Tailwind CSS',
        'Prisma',
        'SQLite (dev)',
        'Postgres-ready',
        'NextAuth',
        'Stripe (Checkout/Webhooks)',
        'Resend',
      ],
      highlights: [
        'Implemented a wallet/ledger system with auditable transactions and commission deduction.',
        'Added Stripe Checkout + idempotent webhook processing for reliable order state changes.',
        'Triggered fulfillment emails and provided admin visibility across creators/buyers/orders.',
      ],
      href: 'https://sellar.vercel.app',
      repo: 'https://github.com/iayusshh/sellar',
    },
  ] satisfies Project[],
  education: [
    {
      program: 'B.Tech — Computer Science & Engineering',
      institution: 'Manipal University Jaipur',
      period: 'Aug 2023 – Jul 2027',
      details: ['Current CGPA: 7.04'],
    },
    {
      program: 'Class XII',
      institution: 'B.D. Public School, Patna, Bihar',
      period: '2022',
      details: ['84.40%'],
    },
    {
      program: 'Class X',
      institution: 'B.D. Public School, Patna, Bihar',
      period: '2020',
      details: ['94.40%'],
    },
  ] satisfies EducationItem[],
  experience: [] as ExperienceItem[],
  extras: {
    automation: 'Built Instagram reels automation pipelines using n8n and AI-assisted workflows.',
    hobbies: ['Stock market derivatives', 'Automation', 'Content creation'],
  },
} as const
