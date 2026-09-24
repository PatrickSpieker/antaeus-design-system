#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

# Rebuild the generated publication directory.
rm -rf dist
mkdir -p dist/latest

cp README.md dist/latest/rules.md
cp README.md SKILL.md dist/latest/
cp _ds_manifest.json dist/latest/manifest.json
cp styles.css colors_and_type.css controls.css addon.css _ds_bundle.js dist/latest/
cp -R components preview ui_kits dist/latest/
cp -R assets fonts dist/latest/
cp _headers dist/_headers
