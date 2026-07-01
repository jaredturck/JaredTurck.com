# Jared Turck 3D Portfolio Carousel

A single-page React portfolio where the introduction and every project are full-viewport slides in one looping 3D carousel.

## Included interactions

- Full-screen project artwork with glass text and action overlays
- Previous and next slides peeking from behind the active slide
- 3D translate, rotate, scale, depth, brightness, and content transitions
- Floating arrow controls with no route changes
- Keyboard left/right navigation
- Pointer and touch dragging
- Clickable position dots
- Responsive mobile navigation and layouts
- Reduced-motion support

## Run locally

```bash
npm install
npm run dev
```

Vite will print the local URL, normally `http://localhost:5173/`.

## Production build

```bash
npm run build
npm run preview
```

The production files are created in `dist/`.

## Validate the project

```bash
npm run lint
npm run build
```

## Edit slides

Project content, links, accent colours, image positions, and image scale values are in:

```text
src/data/slides.ts
```

The carousel component is in `src/components/FullscreenCarousel.tsx`, and the visual design is in `src/index.css`.
