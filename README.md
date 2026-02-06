# 3D Portfolio

A modern, working 3D portfolio built with React, TypeScript, Vite, and Three.js (via React Three Fiber).

## Run locally

```bash
npm install
npm run dev
```

## Customize your content

- Edit your name, links, projects, and experience in `src/data/portfolio.ts`.
- Drop your resume at `public/resume.pdf` (or change the link in `src/data/portfolio.ts`).

## Commands

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run format
```

## Deploy

### Vercel

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

### Netlify

- Build command: `npm run build`
- Publish directory: `dist`

### GitHub Pages

Use an action (recommended) or any static hosting that serves `dist/`.

## Notes

- The 3D background respects “Reduce motion” settings.
- Keep 3D assets lightweight for fast loads on mobile.
