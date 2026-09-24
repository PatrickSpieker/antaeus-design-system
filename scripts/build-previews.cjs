const fs = require('node:fs');
const crypto = require('node:crypto');
const esbuild = require('esbuild');
const dir = 'ui_kits/consumer_app/';
const sources = ['ios-frame.jsx', 'Shared.jsx', 'TodayScreen.jsx', 'RecordScreen.jsx', 'CareScreen.jsx'];
const combined = sources.map(name => `// ${name}\n${fs.readFileSync(dir + name, 'utf8')}`).join('\n');
fs.writeFileSync(dir + '_bundle.jsx', combined);
fs.writeFileSync(dir + 'app.js', esbuild.transformSync(combined + '\n' + fs.readFileSync(dir + 'App.jsx', 'utf8'), { loader: 'jsx', format: 'iife' }).code);
const files = ['components/Button.jsx', ...sources.map(name => dir + name)];
const metadata = { format: 4, namespace: 'AntaeusHealthDesignSystem_ee3fc4', components: [{ name: 'Button', sourcePath: files[0] }], sourceHashes: Object.fromEntries(files.map(path => [path, crypto.createHash('sha256').update(fs.readFileSync(path)).digest('hex').slice(0,12)])), inlinedExternals: [], unexposedExports: [] };
const code = files.map(path => fs.readFileSync(path, 'utf8').replace('export function Button', 'function Button')).join('\n') + '\nwindow.AntaeusHealthDesignSystem_ee3fc4 = { Button };';
fs.writeFileSync('_ds_bundle.js', `/* @ds-bundle: ${JSON.stringify(metadata)} */\n` + esbuild.transformSync(code, { loader: 'jsx', format: 'iife' }).code);
const manifest = JSON.parse(fs.readFileSync('_ds_manifest.json'));
const css = fs.readFileSync('colors_and_type.css', 'utf8');
const old = new Map(manifest.tokens.map(t => [t.name, t]));
manifest.tokens = [...css.matchAll(/(--[\w-]+):\s*([^;]+);/g)].map(([, name, value]) => ({ ...old.get(name), name, value: value.trim(), kind: old.get(name)?.kind || (name.startsWith('--font-') || name.startsWith('--weight-') ? 'font' : name === '--scrim' || name === '--border-input' ? 'color' : 'spacing'), definedIn: 'colors_and_type.css' }));
manifest.brandFonts = [['IBM Plex Sans','--font-heading'],['Inter','--font-body'],['IBM Plex Mono','--font-mono']].map(([family, token]) => ({family, status:'ok', tokens:[token], path:'colors_and_type.css'}));
manifest.cards.forEach(card => {
 if(card.path==='preview/type-display.html') card.subtitle='IBM Plex Sans headings';
 if(card.path==='preview/type-ui.html') card.subtitle='Inter, 400–700';
 if(card.path==='preview/type-mono.html') card.subtitle='IBM Plex Mono, tabular-nums';
});
manifest.cards = manifest.cards.filter(card => card.path !== 'ui_kits/onboarding/index.html');
manifest.cards.push({ path: 'ui_kits/onboarding/index.html', group:'UI Kit — Onboarding', viewport:'1400x960', subtitle:'Eight static onboarding references', name:'Onboarding' });
fs.writeFileSync('_ds_manifest.json', JSON.stringify(manifest) + '\n');
const lintPath = '_adherence.oxlintrc.json';
const lint = JSON.parse(fs.readFileSync(lintPath));
const rules = lint.rules['no-restricted-syntax'];
for (const rule of rules) {
  if (typeof rule !== 'object') continue;
  if (rule.selector.includes('font-family')) {
    rule.selector = rule.selector.replace('Faustina|IBM Plex Sans|JetBrains Mono', 'IBM Plex Sans|Inter|IBM Plex Mono|var\\(');
    rule.message = 'Use design-system role tokens: --font-heading, --font-body, --font-mono.';
  }
  if (rule.selector.includes("name.name='variant'")) {
    rule.selector = rule.selector.replace('ghost|destructive', 'ghost|tertiary|destructive');
    rule.message = "<Button> variant must be primary, secondary, ghost, tertiary, or destructive.";
  }
}
lint['x-omelette'].tokens = manifest.tokens.map(t => t.name).sort();
lint['x-omelette'].tokenKinds = Object.fromEntries(manifest.tokens.map(t => [t.name,t.kind]));
lint['x-omelette'].fontFamilies = manifest.brandFonts.map(f => f.family);
fs.writeFileSync(lintPath, JSON.stringify(lint,null,2) + '\n');
