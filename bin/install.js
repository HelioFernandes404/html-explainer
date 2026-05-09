#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const os = require('os');

const PKG_DIR = path.dirname(__dirname);
const INSTALL_DIR = path.join(os.homedir(), '.claude', 'skills', 'holistic-html');

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function countFiles(dir, ext) {
  let count = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) count += countFiles(full, ext);
    else if (!ext || entry.name.endsWith(ext)) count++;
  }
  return count;
}

// 1. Install skill files
const skillSrc = path.join(PKG_DIR, '.claude', 'skills', 'holistic-html');
if (!fs.existsSync(skillSrc)) {
  console.error('Error: skill source not found at', skillSrc);
  process.exit(1);
}
copyDir(skillSrc, INSTALL_DIR);

// 2. Install examples alongside the skill
const examplesSrc = path.join(PKG_DIR, 'examples');
if (fs.existsSync(examplesSrc)) {
  copyDir(examplesSrc, path.join(INSTALL_DIR, 'examples'));
}

const htmlCount = fs.existsSync(examplesSrc) ? countFiles(examplesSrc, '.html') : 0;
const skillFiles = countFiles(INSTALL_DIR, null) - htmlCount;

console.log('');
console.log('holistic-html installed');
console.log('');
console.log('  skill   →', INSTALL_DIR);
console.log('  files   →', skillFiles, 'skill files,', htmlCount, 'example HTML files');
console.log('');
console.log('The skill is now available in all Claude Code projects.');
console.log('');
