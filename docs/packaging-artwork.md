# Packaging artwork integration — 25 October 2026

Source: user-supplied New folder(5).zip, 27 JPG files.

The original ZIP is not modified. `scripts/import-design-artwork.py` maps every source file to its project, preserving the full canvas and aspect ratio. Web copies are exported at a maximum 3200-pixel edge, WebP quality 94. These are screen-optimized copies, not print-production masters.

The gallery separates mockup presentation from original artwork. Each original-artwork image has a descriptive caption, and the fullscreen viewer supports detail zoom. Different artwork versions and pack sizes are identified in captions, notably the Vix 275g wrapper and J-Flush 750ml label.

Three new shipping-carton projects: Vix (12 x 500ml), Mr. Glasso (12 x 350ml), n'Olive (12 x 230ml). The flat dielines are authoritative; generated mockups illustrate assembled appearance and are labeled as visualizations.

## Generated assets

Built-in image generation was used, not the API/CLI fallback.

- public/work/vix-carton-mockup.webp
- public/work/glasso-carton-final.webp
- public/work/nolive-carton-mockup.webp

Prompt direction: create a single photorealistic assembled kraft corrugated carton using the supplied dieline; show English broad front, English narrow right side and a little closed top. Preserve logo, typography, quantity band, manufacturer details, handling symbols and tan/black palette. No new copy, props, dimensions or fold guides. Soft studio lighting and transparent background. Match supplied dimensions: Vix 355 x 175 x 234 mm; Mr. Glasso 280 x 178 x 265 mm; n'Olive 240 x 155 x 170 mm.

Mr. Glasso refinement: remove extra handling icons from the broad front quantity band; keep only centered '12 Pcs x 350 ml' there and keep handling symbols on the narrow side, following the source dieline.
