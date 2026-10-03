import { readdir, readFile, access } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { execFileSync } from "node:child_process";
for (const file of await readdir("src")) {
  if (!file.endsWith(".js")) continue;
  const path = resolve("src", file);
  execFileSync(process.execPath, ["--check", path]);
  const text = await readFile(path, "utf8");
  for (const match of text.matchAll(
    /(?:from\s*|import\s*\(?\s*)["'`](\.\.?\/[^"'`]+)["'`]/g,
  )) {
    await access(resolve(dirname(path), match[1]));
  }
}
const manifest = JSON.parse(await readFile("public/manifest.json", "utf8"));
for (const icon of manifest.icons) await access("public" + icon.src);
const firebase = JSON.parse(await readFile("firebase.json", "utf8"));
if (firebase.hosting.public !== "dist") throw Error("Hosting must use dist");
console.log(
  "JavaScript syntax, local imports, PWA icons and hosting configuration passed.",
);
