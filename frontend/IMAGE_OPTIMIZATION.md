# Image optimization — 14 November 2026

All 27 raster assets were compared across multiple Pillow encodes and visually
reviewed at native size, in enlarged detail crops, and in the local portfolio.
The tiny SVG icons were reviewed and retained unchanged.

Raster file total: **13,569,044 → 1,097,332 bytes (91.91% smaller)**.
The production output shrank from approximately **12.4 MB to 1.31 MB**.

| Assets | Selected encoding | Original bytes | New bytes |
| --- | --- | ---: | ---: |
| Hero | AVIF q55, speed 3, 4:4:4 | 2,284,534 | 112,034 |
| AnyHJS screenshots 1–3 | AVIF q65, speed 4, 4:4:4 | 2,374,531 | 128,352 |
| AnyHJS screenshots 4–6 | AVIF q60, speed 4, 4:4:4 | 1,125,515 | 72,598 |
| Ekhaya screenshot | AVIF q55, speed 4, 4:4:4 | 1,077,684 | 39,366 |
| Geoid screenshot | AVIF q55, speed 4, 4:4:4 | 1,156,064 | 46,375 |
| Fisher screenshot | AVIF q55, speed 4, 4:4:4 | 459,321 | 27,333 |
| TkDraw and both spelling screenshots | Lossless WebP, method 6, exact alpha | 74,783 | 33,420 |
| AnyHJS logo | 128px, 16-color palette, lossless WebP | 112,151 | 2,082 |
| Titus logo | 128px, 32-color palette, lossless WebP | 1,251,072 | 1,664 |
| Ekhaya logo | 128px, WebP q85, method 6 | 79,878 | 1,576 |
| Geoid logo | WebP q80, method 6 | 36,264 | 4,224 |
| Header portrait | 128px, WebP q80, method 6 | 40,513 | 4,312 |
| Public portrait | Progressive JPEG q75, optimized, 4:4:4 | 40,513 | 30,984 |
| Legacy source logo | AVIF q65, speed 4, 4:4:4 | 1,441,355 | 88,379 |
| Public OG and Apple/Android PNGs | libimagequant 256 colors, optimized PNG | 1,995,694 | 493,266 |
| Public favicon PNGs and ICO | Optimized PNG/ICO; 32px PNG uses 128 colors | 19,172 | 11,367 |

Full-screen images and screenshots retain their original pixel dimensions.
Only the small displayed logos and header portrait were resized using Lanczos;
their 128px versions retain headroom for high-density displays. Public filenames,
formats, and dimensions remain compatible with their existing URLs.

AVIF 4:4:4 retained screenshot text and colored edges better than similarly sized
lossy WebP. Lower hero qualities visibly softened foliage and wood grain, so q55
was retained. Flat interface screenshots use lossless WebP because lossy variants
damaged colored text. The Fisher source had two almost-opaque pixels (alpha 253)
that the selected AVIF encodes as opaque; this has no visible effect.

PNG palette choices were reviewed for gradients, dithering, and transparent
edges. The 16px PNG favicon and every 16/32/48px ICO frame remain pixel-identical.
The three lossless interface screenshots also retain their exact RGBA pixels.

Only asset references changed in React. Layout, carousel behavior, image loading,
dependencies, and deployment configuration are unchanged. The original files
remain recoverable from the parent Git commit.
