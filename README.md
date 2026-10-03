# Al-Amin Portfolio

Reconstructed, editable Vite project for the existing Al-Amin Bin Ashad Ali portfolio. The original Git repository and original JSX/TypeScript source were unavailable. This project recovers the deployed application modules, retains their behavior and styling, gives them stable filenames, and rebuilds them with Vite. It is not a recovery of the original authoring source or a complete new JSX rewrite. React, Firebase and runtime dependencies are retained as recovered modules in `src` to avoid changing their APIs during restoration.

## Run

Requires Node 22.12+ (Node 24 also works).

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

Production output: `dist/`. GitHub Actions runs checks/builds and saves a downloadable `portfolio-dist` artifact.

## Existing services

- Existing public URL: https://portfolio-alamin.pages.dev/
- Existing Firebase project: `portfolio-alamin-79c1d`
- `site/config`: public portfolio content; `messages`: contact submissions.
- Google authentication and existing authorized admin email list retained.
- Admin entry: `/admin`; original Ctrl+Shift+A shortcut retained.
- Existing EmailJS integration retained in the home contact section. The contact page saves to Firestore as before.
- Existing externally hosted portfolio images are still referenced; this repository does not copy or replace the live database.

Firebase web configuration is public client configuration, not an Admin SDK credential. Firestore security rules must enforce admin access; client email checks alone are not security rules.

## Deploy to the existing pages.dev address

That address belongs to **Cloudflare Pages**, while Firebase supplies the backend. To retain the exact address, connect this repository to the existing Cloudflare Pages project if its project settings allow changing the source. Use branch `main`, build command `npm run build`, output directory `dist`, and Node 22.12+.

If the existing Cloudflare project cannot change Git sources, deploy the `dist` artifact through its supported deployment method. Do not delete the existing project or domain. `_redirects` supplies SPA routing; `_headers` supplies asset caching and basic response headers.

Cloudflare account access is required to configure the project. No Cloudflare configuration has been changed by this reconstruction.

## Firebase Hosting alternative

`firebase.json` and `.firebaserc` target the existing Firebase project. Set repository variable `DEPLOY_PROVIDER=firebase` to use Firebase instead of Cloudflare. The Firebase workflow runs on every main push and requires the repository secret `FIREBASE_SERVICE_ACCOUNT_PORTFOLIO_ALAMIN_79C1D`, supplied through GitHub settings, never committed.

Firebase Hosting does not publish to the Cloudflare `pages.dev` address. The default automatic deployment targets the existing Cloudflare address; selecting Firebase changes the deployment destination. Existing database/rules are not deployed by it.

If a hosting domain changes, authorize that domain in Firebase Authentication and any external service allowlists. Existing live domain settings have not been altered.

## Restoration fixes

- Recovered page styles are directly imported, including About, FAQ and admin login styles.
- Added a direct `/admin` entry while retaining the Google account restriction.
- Fixed portfolio image upload's undefined `apiKeys` reference; removed the embedded upload key. Configure your image upload key in the admin settings.
- Public visitors no longer subscribe to the admin-only settings document; snapshot errors are handled.
- New private provider/upload key updates go to the admin settings document, not public client settings. Existing remote key documents were not migrated.
- Blog content edited in Firebase takes precedence over bundled article fields.
- Removed broken Tools navigation destinations; these links now lead to Services.
- Removed sample projects and fictional testimonials from fallback rendering.
- Service worker caches versioned assets, not stale HTML, and no longer installs a missing favicon.
- Added repeatable builds, dependency lockfile, SPA hosting configuration and CI.

## Maintenance

Page modules and CSS are in `src/`, static assets in `public/`, and shared application/Firebase setup in `src/main.js`. Recovered variable/export names are retained where changing them could break module contracts. A later gradual conversion to named React components can preserve this working baseline.

## Verification and remaining checks

`npm run check` verifies module syntax, relative imports, PWA icons and hosting configuration. `npm run build` creates the production bundle successfully. Browser visual testing of the rebuilt local site was blocked by the environment's local-address restriction. Authenticated admin writes, contact delivery and production deployment still require account access and end-to-end validation. No test messages were submitted and no live records were changed.

## Automatic deployment

Every push to `main` triggers **Deploy live portfolio**. It checks Cloudflare access, builds, deploys to the existing `portfolio-alamin` project's verified production branch, then checks the live commit, SPA routes, and initial JS/CSS assets. It does not create a replacement project or modify Firestore rules/data. Concurrent production releases run in order.

Required repository Actions secrets:

- `CLOUDFLARE_ACCOUNT_ID`: account owning the existing Pages project.
- `CLOUDFLARE_API_TOKEN`: token scoped to that account with Cloudflare Pages Edit permission.

Keep `DEPLOY_PROVIDER` unset (or `cloudflare`) for the existing pages.dev URL. Set it to `firebase` only to select Firebase Hosting; in that case supply the Firebase service account secret described above. Only the chosen provider auto-deploys.

Until the credentials are configured, the workflow deliberately fails at preflight with the exact missing-secret names. A passed build alone is not a successful deployment. Secrets must be entered directly into GitHub, never committed or pasted into chat.

`deployment.json` exposes only the public Git commit and build time, allowing verification that the live domain actually serves the new release. The smoke check does not claim to test Google authentication, private admin operations, or delivery of contact messages.
