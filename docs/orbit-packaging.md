# Orbit packaging collection

Source: user-supplied `orbit.zip`, 24 JPEG artwork sheets. The archive is unchanged.

All 24 sheets are matched to seven existing Orbit product projects. The 14 earlier bottle mockups remain available. Full artwork canvases, including print outlines and dimensions, are exported as web copies at a maximum 3200-pixel edge, WebP quality 94. These are display assets, not print-production files.

`scripts/import-orbit-artwork.py` is the reproducible importer; `orbit-artwork-manifest.json` records every filename and its destination. Mapping follows visible artwork rather than misleading filenames: the first ELITE file is Optima, and the third 5L NOVA file is a 3L label. The 16L pail design belongs to Elite HDE.

## Carton studies

Twelve carton designs are presented as interactive CSS 3D studies within six product projects. Front and side faces are viewports onto the supplied sheets; text, photography and logos are never regenerated. The scene switches among front, three-quarter and side views, with variant selectors for XPower and Nova. An inspect button opens the full sheet in the existing zoom viewer.

Carton width/depth/height ratios follow printed dimensions. The closure is an illustrative two-flap arrangement using the supplied broad flap on opposing halves; the original sheet remains the authoritative production reference. CSS lighting and perspective are presentation effects. Reduced-motion preferences disable transitions; controls wrap and the scene scales to its container on narrow screens.

No new raster mockups were generated or added. CSS projection preserves the source design while allowing an interactive folded-form presentation.
