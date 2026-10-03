import { writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
const commit = process.env.GITHUB_SHA || execFileSync('git', ['rev-parse', 'HEAD'], {encoding: 'utf8'}).trim();
writeFileSync('dist/deployment.json', JSON.stringify({commit, builtAt: new Date().toISOString()}) + '\n');
