# Jared Portfolio — Unique 3D Carousel

A single-route React + TypeScript + Tailwind portfolio presented as a full-screen 3D carousel.

## Included

- One `/` URL with no React Router dependency.
- Keyboard, drag, dot, previous-arrow, and next-arrow navigation.
- Fixed pointer handling so buttons and links are not swallowed by drag capture.
- Floating, inset brand and SVG-icon navigation islands.
- Untinted project screenshots: no full-image dark wash, blur, colour filter, or desaturation.
- Individually art-directed slides for:
  - Hero
  - AnyHJS
  - Titus AI
  - JaredCalc
  - TkDraw
  - Fisher AI
  - Neural Net Linear
  - English → Japanese Translator
  - Spelling Correction AI
  - Geoid Project Management
  - Ekhaya
  - Core Expertise
  - How I Work
  - Technologies I Use
  - Contact
- Responsive layouts and reduced-motion support.

## Install and run

```bash
npm install
npm run dev
```

Vite normally opens the site at `http://localhost:5173/`.

## Production build

```bash
npm run build
npm run preview
```

## Validation

```bash
npx tsc -b
npm run build
```

## Main files

- `src/components/FullscreenCarousel.tsx` — carousel mechanics, explicit slide order, and navigation dots.
- `src/hooks/use_fullscreen_carousel.ts` — keyboard and pointer navigation.
- `src/slides/*.tsx` — bespoke slide components.
- `src/index.css` — carousel and individual slide art direction.
- `src/icons/*.svg` — local navigation and arrow SVG files.
