const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve('dist/latest');
const css = fs.readFileSync(path.join(root, 'colors_and_type.css'), 'utf8');
const values = new Map([...css.matchAll(/(--[\w-]+):\s*([^;]+);/g)].map(([, k, v]) => [k, v.trim()]));
function resolve(name) {
  const value = values.get(name);
  assert.ok(value, `Missing token ${name}`);
  return /^var\((--[\w-]+)\)$/.test(value) ? resolve(value.slice(4,-1)) : value;
}
function luminance(hex) {
  return hex.slice(1).match(/../g).map(v => parseInt(v,16)/255).map(v => v <= .04045 ? v/12.92 : ((v+.055)/1.055)**2.4).reduce((sum,v,i) => sum+v*[.2126,.7152,.0722][i],0);
}
function contrast(a,b) {
  const l = [luminance(resolve(a)),luminance(resolve(b))].sort((a,b)=>b-a);
  return (l[0]+.05)/(l[1]+.05);
}
for (const bg of ['--bg-page','--bg-surface','--bg-sunken']) {
  assert.ok(contrast('--fg-3',bg)>=4.5, `Text contrast on ${bg}`);
  if(bg !== '--bg-sunken') assert.ok(contrast('--border-input',bg)>=3, `Input contrast on ${bg}`);
}
assert.ok(contrast('--fg-inverse','--plum-500')>=4.5);
function walk(dir) {
  for (const item of fs.readdirSync(dir,{withFileTypes:true})) {
    const file=path.join(dir,item.name);
    if(item.isDirectory()) { walk(file); continue; }
    if(!/\.(html|css|js|jsx|svg)$/.test(file)) continue;
    const source=fs.readFileSync(file,'utf8');
    assert.ok(!/Faustina|JetBrains|var\(--font-serif\)/.test(source),`Old font in ${file}`);
    if(!/\.(html|css)$/.test(file)) continue;
    const refs=[...source.matchAll(/(?:src|href)="([^"#]+)"|@import url\(['"]([^'"]+)['"]\)/g)];
    for(const match of refs) {
      const ref=match[1]||match[2];
      if(/^(https?:|data:|#|mailto:|tel:)/.test(ref)) continue;
      assert.ok(fs.existsSync(path.resolve(path.dirname(file),ref.split(/[?#]/)[0])),`Broken local reference: ${file} -> ${ref}`);
    }
  }
}
walk(root);
const manifest=JSON.parse(fs.readFileSync(path.join(root,'manifest.json')));
for(const card of manifest.cards) assert.ok(fs.existsSync(path.join(root,card.path)),`Missing card ${card.path}`);
for(const token of manifest.tokens) assert.equal(token.value,values.get(token.name),`Stale manifest token ${token.name}`);
console.log('Published references, manifest tokens, font migration, and contrast checks passed.');
