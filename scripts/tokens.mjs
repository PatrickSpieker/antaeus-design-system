import assert from 'node:assert/strict';

const object = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const alias = value => object(value) && Object.hasOwn(value, 'ref');
const finite = Number.isFinite;
const fraction = value => finite(value) && value >= 0 && value <= 1;
const types = new Set(['color', 'dimension', 'duration', 'tracking', 'number', 'fontFamily', 'cubicBezier', 'shadow']);

export function resolveTokens(document) {
  assert(object(document.tokens) && Object.keys(document.tokens).length, 'Expected a nonempty tokens object');
  const tokens = document.tokens;
  const resolved = new Map();
  function resolve(name, trail = []) {
    assert(Object.hasOwn(tokens, name), `Missing token: ${name}`);
    assert(!trail.includes(name), `Token cycle: ${[...trail, name].join(' -> ')}`);
    if (resolved.has(name)) return resolved.get(name);
    const token = tokens[name];
    assert(/^[a-z][a-z0-9-]*$/.test(name), `Invalid token name: ${name}`);
    assert(object(token) && types.has(token.type), `Invalid token type: ${name}`);
    let value = token.value;
    if (alias(value)) {
      assert(Object.keys(value).length === 1 && typeof value.ref === 'string', `Invalid alias: ${name}`);
      const target = resolve(value.ref, [...trail, name]);
      assert.equal(token.type, target.type, `Alias type mismatch: ${name}`);
      value = target.value;
    }
    const result = { type: token.type, value };
    resolved.set(name, result);
    return result;
  }
  for (const name of Object.keys(tokens)) resolve(name);
  for (const [name, { type, value }] of resolved) {
    const check = condition => assert(condition, `Invalid ${type} value: ${name}`);
    switch (type) {
      case 'color':
        check(object(value) && /^#[\da-f]{6}$/i.test(value.hex) && fraction(value.alpha));
        break;
      case 'dimension':
      case 'duration':
      case 'tracking': {
        const unit = { dimension: 'logical', duration: 'ms', tracking: 'em' }[type];
        check(object(value) && value.unit === unit && finite(value.value) && (type === 'tracking' || value.value >= 0));
        break;
      }
      case 'number':
        check(finite(value));
        break;
      case 'fontFamily':
        check(typeof value === 'string' && /^[\p{L}\p{N} -]+$/u.test(value) && value.trim().length > 0);
        break;
      case 'cubicBezier':
        check(Array.isArray(value) && value.length === 4 && value.every(finite) && fraction(value[0]) && fraction(value[2]));
        break;
      case 'shadow':
        check(Array.isArray(value) && value.length > 0);
        for (const layer of value) {
          check(object(layer) && ['x', 'y', 'blur', 'spread'].every(key => finite(layer[key]))
            && layer.blur >= 0 && fraction(layer.opacity) && typeof layer.inset === 'boolean');
          assert(resolved.get(layer.color)?.type === 'color', `Invalid shadow color reference: ${name}`);
        }
        break;
    }
  }
  return resolved;
}

function colorCSS({ hex, alpha }) {
  if (alpha === 1) return hex;
  const rgb = [1, 3, 5].map(start => parseInt(hex.slice(start, start + 2), 16));
  return `rgba(${rgb.join(', ')}, ${Number(alpha.toFixed(6))})`;
}

export function generateCSS(document) {
  const resolved = resolveTokens(document);
  function render({ type, value }) {
    switch (type) {
      case 'color': return colorCSS(value);
      case 'dimension': return `${value.value}px`;
      case 'duration': return `${value.value}ms`;
      case 'tracking': return `${value.value}em`;
      case 'number': return String(value);
      case 'fontFamily': return JSON.stringify(value);
      case 'cubicBezier': return `cubic-bezier(${value.join(', ')})`;
      case 'shadow': return value.map(layer => {
        const color = resolved.get(layer.color).value;
        return `${layer.inset ? 'inset ' : ''}${layer.x}px ${layer.y}px ${layer.blur}px ${layer.spread}px ${colorCSS({ ...color, alpha: color.alpha * layer.opacity })}`;
      }).join(', ');
    }
  }
  const lines = Object.entries(document.tokens).map(([name, token]) => {
    const value = alias(token.value) ? `var(--${token.value.ref})` : render(resolved.get(name));
    return `  --${name}: ${value};`;
  });
  return `/* Generated from tokens.json. Do not edit. */\n:root {\n${lines.join('\n')}\n}\n`;
}
