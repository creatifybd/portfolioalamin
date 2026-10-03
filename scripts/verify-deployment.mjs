const origin = new URL(process.argv[2]).origin;
const expected = process.env.GITHUB_SHA;
if (!expected) throw Error('GITHUB_SHA is required to verify the live release.');
async function get(path) {
  const response = await fetch(new URL(path, origin), {signal: AbortSignal.timeout(20000), cache: 'no-store'});
  if (!response.ok) throw Error(`Live check failed: ${path} returned ${response.status}`);
  return response;
}
let released = false;
for (let attempt = 0; attempt < 12; attempt++) {
  try {
    const metadata = await (await get(`/deployment.json?commit=${expected}&attempt=${attempt}`)).json();
    if (metadata.commit === expected) { released = true; break; }
  } catch { /* Allow CDN propagation before declaring failure. */ }
  if (attempt < 11) await new Promise(resolve => setTimeout(resolve, 10000));
}
if (!released) throw Error('Live domain has not published this commit. Inspect the hosting project and production branch.');
for (const route of ['/', '/portfolio', '/about', '/services', '/contact', '/blog', '/admin']) {
  const html = await (await get(route)).text();
  if (!html.includes('id="root"')) throw Error(`${route} does not serve the application shell.`);
  if (route !== '/') continue;
  const assets = [...html.matchAll(/(?:src|href)="(\/assets\/[^"?#]+\.(?:js|css))"/g)].map(match => match[1]);
  if (!assets.some(path => path.endsWith('.js'))) throw Error('The live page has no application bundle.');
  for (const asset of new Set(assets)) {
    const response = await get(asset);
    if (response.headers.get('content-type')?.includes('text/html')) throw Error(`${asset} incorrectly returns HTML.`);
  }
}
console.log(`Live deployment verified: ${origin}, commit ${expected}. Authentication and form delivery need separate end-to-end checks.`);
