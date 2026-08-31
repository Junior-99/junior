# Theophilus Mensah Portfolio

A personal portfolio site built with React, Vite and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

Requires Node.js 18+.

## Project structure

```
src/
  data/content.js      ← ALL site copy, links, pricing and project facts live here.
                          Edit this one file to update almost anything on the site.
  sections/             One component per page section (Hero, About, Skills, Projects,
                          Services, Ideas, Journey, Contact)
  components/            Shared building blocks (Nav, Footer, cards, modal, etc.)
  assets/                Images
```

## Things still to add (marked as TODO in `src/data/content.js`)

- **Email address** `CONTACT_EMAIL` is a placeholder. Replace it with your real
  email so the contact form and mailto links work.
- **WhatsApp number** `WHATSAPP_NUMBER` is empty, so the WhatsApp link is
  currently hidden. Add a number (international format, digits only) to show it.
- **CV / resume file** drop a PDF into `public/` (e.g. `public/cv.pdf`) and wire
  the "Download CV" button in `src/sections/Contact.jsx` to link to it directly
  instead of showing the "coming soon" notice.
- **Project screenshots** add images to `src/assets/projects/flipmall/` and
  `src/assets/projects/argus/`, import them in `src/data/content.js` under each
  project's `images` array, and swap the `ProjectPlaceholder` component for an
  actual `<img>` once you have them.
- **Live links** `FlipMall` and `Argus`'s `links.live` / `links.github` fields
  are empty until you provide real URLs.
- **Journey / timeline dates** only durable, ongoing milestones are listed for
  now. Add earlier history (education, first project, etc.) with real dates.

## Deploying

The site is a static build `npm run build` outputs a `dist/` folder that can be
deployed to Vercel, Netlify, GitHub Pages, or any static host.
