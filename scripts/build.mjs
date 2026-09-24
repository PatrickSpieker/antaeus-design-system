import { copyFileSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, posix, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
import { generateCSS } from './tokens.mjs';

export const root = fileURLToPath(new URL('../', import.meta.url));
export const sourceFiles = [
  'index.md', 'SKILL.md', 'tokens.json',
  'guidance/brand.md', 'guidance/color.md', 'guidance/typography.md',
  'guidance/layout.md', 'guidance/motion.md', 'guidance/iconography.md',
  'guidance/assets.md', 'guidance/tokens.md',
  'assets/logo-mark.svg', 'assets/logo-mark.png',
  'assets/logo-mark-inverse.svg', 'assets/logo-mark-inverse.png', 'assets/logo-wordmark.svg',
  '_headers', '_redirects',
];
export const publishedFiles = [...sourceFiles.filter(file => !file.startsWith('_')), 'tokens.css'];

export function validateLinks(documents, files) {
  const published = new Set(files);
  for (const [file, text] of Object.entries(documents)) {
    for (const [, href] of text.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
      if (/^(https?:|mailto:|#)/.test(href)) continue;
      const target = posix.normalize(posix.join(posix.dirname(file), href.split(/[?#]/)[0]));
      assert(published.has(target), `Broken publication link in ${file}: ${href}`);
    }
  }
}

export function build(destination = join(root, 'dist')) {
  const document = JSON.parse(readFileSync(join(root, 'tokens.json'), 'utf8'));
  const css = generateCSS(document);
  const docs = Object.fromEntries(sourceFiles.filter(file => file.endsWith('.md'))
    .map(file => [file, readFileSync(join(root, file), 'utf8')]));
  validateLinks(docs, publishedFiles);
  // Validate inputs before replacing the generated publication directory.
  rmSync(destination, { recursive: true, force: true });
  mkdirSync(destination, { recursive: true });
  for (const file of sourceFiles) {
    mkdirSync(dirname(join(destination, file)), { recursive: true });
    copyFileSync(join(root, file), join(destination, file));
  }
  writeFileSync(join(destination, 'tokens.css'), css);
  return { tokens: Object.keys(document.tokens).length, files: publishedFiles.length };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = build();
  console.log(`Built ${result.files} public files and ${result.tokens} tokens in dist/`);
}
