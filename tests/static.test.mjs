import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { build, publishedFiles, root, sourceFiles, validateLinks } from '../scripts/build.mjs';
import { generateCSS, resolveTokens } from '../scripts/tokens.mjs';

const document = JSON.parse(readFileSync(join(root, 'tokens.json'), 'utf8'));

test('agreed palette, font and interaction values survive the migration', () => {
  const resolved = resolveTokens(document);
  const value = name => resolved.get(name).value;
  assert.deepEqual(value('bg-surface'), { hex: '#FBF9F6', alpha: 1 });
  assert.deepEqual(value('bg-page'), value('bg-surface'));
  assert.deepEqual(value('glass-bone'), { hex: '#FBF9F6', alpha: 0.78 });
  assert.equal(value('glass-plum').hex, '#432E5C');
  assert(!resolved.has('glass-white'));
  assert.equal(value('dur-hover').value, 140);
  assert.equal(value('dur-press').value, 80);
  assert.equal(value('press-scale'), 0.98);
  assert.equal(value('font-serif'), 'Faustina');
  assert.equal(value('font-sans'), 'IBM Plex Sans');
  assert.equal(value('font-mono'), 'JetBrains Mono');
  for (const [name, token] of resolved) {
    if (!name.startsWith('shadow-')) continue;
    for (const layer of token.value) assert.equal(value(layer.color).hex, '#1A1814');
  }
});

test('CSS translates structured units, colors, aliases, timing curves and shadows', () => {
  const css = generateCSS(document);
  for (const declaration of [
    '--bg-surface: var(--bone-50);', '--space-6: 24px;', '--dur-press: var(--dur-instant);',
    '--dur-instant: 80ms;', '--tracking-display: -0.02em;', '--leading-body: 1.55;',
    '--font-sans: "IBM Plex Sans";', '--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);',
    '--glass-bone: rgba(251, 249, 246, 0.78);',
    '--shadow-inset: inset 0px 1px 2px 0px rgba(26, 24, 20, 0.06);',
    '--ring-focus: 0px 0px 0px 3px rgba(90, 63, 122, 0.28);',
  ]) assert(css.includes(declaration), declaration);
  assert.equal((css.match(/\{/g) || []).length, 1);
  assert(!/@import|@font-face|https?:|glass-white/.test(css));
  assert.equal((css.match(/^  --/gm) || []).length, Object.keys(document.tokens).length);
});

test('aliases reject missing targets, cycles and type mismatches', () => {
  assert.throws(() => resolveTokens({ tokens: { a: { type: 'color', value: { ref: 'missing' } } } }), /Missing token/);
  assert.throws(() => resolveTokens({ tokens: {
    a: { type: 'color', value: { ref: 'b' } }, b: { type: 'color', value: { ref: 'a' } },
  } }), /Token cycle/);
  assert.throws(() => resolveTokens({ tokens: {
    a: { type: 'color', value: { ref: 'b' } }, b: { type: 'number', value: 2 },
  } }), /Alias type mismatch/);
  const resolved = resolveTokens({ tokens: {
    a: { type: 'number', value: { ref: 'b' } }, b: { type: 'number', value: { ref: 'c' } }, c: { type: 'number', value: 2 },
  } });
  assert.equal(resolved.get('a').value, 2);
});

test('malformed typed values fail before publication', () => {
  for (const [type, value] of [
    ['color', { hex: '#XYZXYZ', alpha: 1 }], ['color', { hex: '#000000', alpha: 2 }],
    ['dimension', { value: 4, unit: 'px' }], ['duration', { value: -1, unit: 'ms' }],
    ['number', '15'], ['tracking', { value: 2, unit: 'px' }],
    ['cubicBezier', [2, 0, 1, 1]], ['fontFamily', 'Faustina; color:red'], ['unknown', 1],
    ['shadow', [{ x: 0, y: 0, blur: 2, spread: 0, opacity: 1, inset: false, color: 'missing' }]],
  ]) assert.throws(() => resolveTokens({ tokens: { invalid: { type, value } } }));
});

test('shadow colors resolve aliases and multiply alpha', () => {
  const css = generateCSS({ tokens: {
    ink: { type: 'color', value: { hex: '#1A1814', alpha: 0.5 } },
    alias: { type: 'color', value: { ref: 'ink' } },
    shadow: { type: 'shadow', value: [{ x: -1, y: 2, blur: 3, spread: -2, color: 'alias', opacity: 0.5, inset: false }] },
  } });
  assert(css.includes('-1px 2px 3px -2px rgba(26, 24, 20, 0.25)'));
});

test('build publishes only the contract, resolves links, and removes stale files', () => {
  const destination = mkdtempSync(join(tmpdir(), 'antaeus-build-'));
  try {
    writeFileSync(join(destination, 'obsolete.html'), 'stale');
    build(destination);
    const files = readdirSync(destination, { recursive: true, withFileTypes: true })
      .filter(entry => entry.isFile()).map(entry => join(entry.parentPath, entry.name).slice(destination.length + 1));
    assert.deepEqual(files.sort(), [...sourceFiles, 'tokens.css'].sort());
    for (const file of sourceFiles) assert.deepEqual(readFileSync(join(destination, file)), readFileSync(join(root, file)));
    assert(!files.some(file => /latest\/|\.html$|\.jsx?$|\.woff2?$|\.ttf$|\.otf$|CONTEXT|README|manifest|package/.test(file)));
    assert.equal(readFileSync(join(destination, '_redirects'), 'utf8').trim(), '/ /index.md 302');
    const headers = readFileSync(join(destination, '_headers'), 'utf8');
    assert(headers.includes('Access-Control-Allow-Origin: *'));
    assert(headers.includes('Cache-Control: public, max-age=300'));
    const css = readFileSync(join(destination, 'tokens.css'), 'utf8');
    build(destination);
    assert.equal(readFileSync(join(destination, 'tokens.css'), 'utf8'), css);
  } finally { rmSync(destination, { recursive: true, force: true }); }
});

test('broken documentation links fail validation', () => {
  assert.throws(() => validateLinks({ 'index.md': '[Missing](preview/cards.html)' }, publishedFiles), /Broken publication link/);
  assert.throws(() => validateLinks({ 'guidance/layout.md': '[Internal](../CONTEXT.md)' }, publishedFiles), /Broken publication link/);
});
