# Vishwa Jayathilaka — Portfolio

Premium, dark-themed personal portfolio for **Vishwa Jayathilaka**, Founder of Lumora Labs & Full-Stack Web Developer. Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** for animation
- **Lucide React** for icons
- Deployed on **Vercel**

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

Everything on the site is data-driven. To update content, edit the files in `/data` — no component code needs to change:

| File | Controls |
|---|---|
| `data/config.ts` | Name, role, contact links, nav, stats |
| `data/about.ts` | About paragraphs, focus areas, education, certifications |
| `data/skills.ts` | Technical expertise categories |
| `data/projects.ts` | Featured projects (cards, tech, highlights, links) |
| `data/experience.ts` | Career timeline |
| `data/process.ts` | 4-step delivery process |
| `data/leadership.ts` | Leadership pillars |
| `data/security.ts` | Security practices |
| `data/testimonials.ts` | Testimonial carousel (replace placeholders with real quotes) |

To add a project image later, extend the `Project` type in `types/index.ts` with an `image` field and swap it into `components/sections/ProjectCover.tsx`.

## Deployment

This project is ready to deploy on [Vercel](https://vercel.com):

1. Push to GitHub (already set up if you cloned this repo).
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no config needed.
4. Update `siteConfig.url` in `data/config.ts` to your production domain once assigned, and redeploy.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build locally
- `npm run lint` — run ESLint
