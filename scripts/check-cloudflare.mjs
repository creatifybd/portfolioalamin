import { appendFileSync } from 'node:fs';
const { CLOUDFLARE_ACCOUNT_ID: account, CLOUDFLARE_API_TOKEN: token } = process.env;
const missing = ['CLOUDFLARE_ACCOUNT_ID', 'CLOUDFLARE_API_TOKEN'].filter(key => !process.env[key]);
if (missing.length) throw Error(`Deployment credentials are missing. Add GitHub Actions repository secrets: ${missing.join(', ')}. No live deployment was attempted.`);
if (!/^[a-f0-9]{32}$/i.test(account)) throw Error('CLOUDFLARE_ACCOUNT_ID must be the 32-character account ID.');
const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${account}/pages/projects/portfolio-alamin`, {
  headers: { Authorization: `Bearer ${token}` }, signal: AbortSignal.timeout(30000)
});
const data = await response.json();
if (!response.ok || !data.success) throw Error(`Cannot access the existing Cloudflare Pages project (HTTP ${response.status}). Check the account ID and token's Cloudflare Pages Edit permission. No deployment was attempted.`);
const project = data.result;
if (project.subdomain !== 'portfolio-alamin.pages.dev') throw Error('The project does not match the intended live domain.');
if (!project.production_branch || !/^[a-z0-9_./-]+$/i.test(project.production_branch)) throw Error('Could not verify the existing production branch.');
appendFileSync(process.env.GITHUB_OUTPUT, `branch=${project.production_branch}\n`);
console.log(`Verified existing project and production branch: ${project.production_branch}`);
