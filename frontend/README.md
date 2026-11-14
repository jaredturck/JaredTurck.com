# Jared Portfolio - Unique 3D Carousel

A single-route React + TypeScript + Tailwind portfolio presented as a full-screen 3D carousel.

## Included

- One `/` URL with no React Router dependency.
- Button and dot navigation, with previous/next wraparound.
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
  - English -> Japanese Translator
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

- `src/components/FullscreenCarousel.tsx` - slide state, explicit slide order, and navigation controls.
- `src/components/slides.tsx` - main slide components styled with Tailwind utilities.
- `src/components/slide_helpers.tsx` - slide helper components and shared props.
- `src/index.css` - shared Tailwind palette, Ekhaya brand green, font, and two text effects.
- `src/images/` - screenshots, logos, and SVG icons imported by components.
