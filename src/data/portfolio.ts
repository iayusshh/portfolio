export type SocialLink = {
  label: string
  href: string
}

export type Project = {
  title: string
  description: string
  tech: string[]
  href?: string
  repo?: string
}

export type ExperienceItem = {
  role: string
  company: string
  period: string
  highlights: string[]
}

export const portfolio = {
  name: 'Your Name',
  title: 'Software Engineer / Full-Stack Developer',
  location: 'City, Country',
  email: 'you@example.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/your-handle' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-handle/' },
    { label: 'Resume', href: '/resume.pdf' },
  ] satisfies SocialLink[],
  about:
    'I build modern web apps with strong UX, clean architecture, and measurable performance. I enjoy 3D interfaces, thoughtful motion, and shipping products.',
  skills: [
    'TypeScript',
    'React',
    'Node.js',
    'Next.js',
    'Three.js',
    'PostgreSQL',
    'Docker',
    'AWS',
  ],
  projects: [
    {
      title: 'Project One',
      description:
        'A production-ready app with authentication, dashboards, and a polished UI. Add a 1–2 line impact statement here.',
      tech: ['React', 'TypeScript', 'Node.js'],
      href: 'https://example.com',
      repo: 'https://github.com/your-handle/project-one',
    },
    {
      title: 'Project Two',
      description:
        'A 3D/creative project that demonstrates interaction, animation, and performance tuning.',
      tech: ['Three.js', '@react-three/fiber', 'Tailwind'],
      repo: 'https://github.com/your-handle/project-two',
    },
    {
      title: 'Project Three',
      description:
        'A backend-focused project showing APIs, databases, and reliability practices.',
      tech: ['Node.js', 'PostgreSQL', 'Redis'],
    },
  ] satisfies Project[],
  experience: [
    {
      role: 'Software Engineer Intern',
      company: 'Company Name',
      period: 'Jun 2025 – Aug 2025',
      highlights: [
        'Built feature X end-to-end and improved metric Y by Z%.',
        'Collaborated with product/design to ship A/B tested UI improvements.',
        'Wrote tests and monitoring to reduce regressions.',
      ],
    },
  ] satisfies ExperienceItem[],
} as const
