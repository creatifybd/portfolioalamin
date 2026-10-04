# Al-Amin creative portfolio

A portfolio-first React website for Al-Amin Bin Ashad Ali: original artwork, responsive project grid, category/search filters, project pages, full-screen galleries, profile, experience, skills and contact.

## Development

Use Node 22. Run `npm ci`, `npm run dev`. Validate with `npm run check` and `npm run build`.

`src/main.jsx` and `src/portfolio.css` contain the public experience. `src/StudioAdmin.jsx` is the focused project/profile editor at `/admin`. Existing Firebase `site/config` content remains the source of truth. The bundled 17 publicly visible projects and profile provide a fallback when data cannot load. Admin saves merge only the edited section; legacy backend content is not deleted.

Firebase SDK and React runtime were recovered from the original public build and are retained in `src/firebase.js` and `src/vendor.js`. Replace these with audited package dependencies in a future dependency migration.

## Publishing

Firebase Hosting project: `portfolio-alamin-79c1d`.
Production URL: https://portfolio-alamin-79c1d.web.app/

Every push to `main` runs the Firebase deployment workflow. It requires the repository Actions secret `FIREBASE_SERVICE_ACCOUNT_PORTFOLIO_ALAMIN_79C1D` containing an authorized Firebase deployment service-account JSON. The workflow deliberately fails with a clear message when it is absent. It builds, publishes the live channel and verifies the deployed commit marker. Cloudflare deployment has been removed at the owner's request; the previous pages.dev URL is a separate deployment and is not updated by this workflow.

## Content

Sign in at `/admin` using an existing authorized Google account. Add/edit project descriptions, cover images, ordered gallery images, project links, featured/hidden state and profile history. New projects start hidden. Save changes explicitly to publish content. Hosted image URLs work directly; uploads use the existing restricted ImgBB configuration when available. Contact messages go to the existing Firebase messages collection.

Client-side admin checks are a UI convenience. Existing Firestore rules must enforce authorization; this redesign does not change database rules or permissions. Authentication, image uploads and contact delivery require live Firebase access for end-to-end verification.

Blog, utilities, theme switching and unrelated dashboard features are no longer exposed. Existing backend records are preserved.
