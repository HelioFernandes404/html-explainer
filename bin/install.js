#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const os = require('os');

const PKG_DIR = path.dirname(__dirname);
const SKILL_INSTALL_DIR = path.join(os.homedir(), '.claude', 'skills', 'html-explainer');
const CLAUDE_COMMANDS_INSTALL_DIR = path.join(os.homedir(), '.claude', 'commands');
const OPENCODE_COMMANDS_INSTALL_DIR = path.join(os.homedir(), '.config', 'opencode', 'commands');
const args = new Set(process.argv.slice(2));
const installSkill = args.size === 0 || args.has('--all') || args.has('--skill');
const installPrompt = args.size === 0 || args.has('--all') || args.has('--prompt');

if (!installSkill && !installPrompt) {
  console.error('Usage: html-explainer [--skill] [--prompt] [--all]');
  process.exit(1);
}

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

let htmlCount = 0;
let skillFiles = 0;

if (installSkill) {
  const skillSrc = path.join(PKG_DIR, '.claude', 'skills', 'html-explainer');
  if (!fs.existsSync(skillSrc)) {
    console.error('Error: skill source not found at', skillSrc);
    process.exit(1);
  }
  copyDir(skillSrc, SKILL_INSTALL_DIR);

  const examplesSrc = path.join(PKG_DIR, 'examples');
  if (fs.existsSync(examplesSrc)) {
    copyDir(examplesSrc, path.join(SKILL_INSTALL_DIR, 'examples'));
    htmlCount = countFiles(examplesSrc, '.html');
  }

  skillFiles = countFiles(SKILL_INSTALL_DIR, null) - htmlCount;
}

let claudePromptDest = '';
let opencodePromptDest = '';
if (installPrompt) {
  const claudePromptSrc = path.join(PKG_DIR, '.claude', 'commands', 'html-explainer-prompt.md');
  const opencodePromptSrc = path.join(PKG_DIR, '.opencode', 'commands', 'html-explainer-prompt.md');
  if (!fs.existsSync(claudePromptSrc)) {
    console.error('Error: Claude prompt source not found at', claudePromptSrc);
    process.exit(1);
  }
  if (!fs.existsSync(opencodePromptSrc)) {
    console.error('Error: OpenCode prompt source not found at', opencodePromptSrc);
    process.exit(1);
  }
  fs.mkdirSync(CLAUDE_COMMANDS_INSTALL_DIR, { recursive: true });
  fs.mkdirSync(OPENCODE_COMMANDS_INSTALL_DIR, { recursive: true });
  claudePromptDest = path.join(CLAUDE_COMMANDS_INSTALL_DIR, 'html-explainer-prompt.md');
  opencodePromptDest = path.join(OPENCODE_COMMANDS_INSTALL_DIR, 'html-explainer-prompt.md');
  fs.copyFileSync(claudePromptSrc, claudePromptDest);
  fs.copyFileSync(opencodePromptSrc, opencodePromptDest);
}

console.log('');
console.log('html-explainer installed');
console.log('');
if (installSkill) {
  console.log('  skill   →', SKILL_INSTALL_DIR);
  console.log('  files   →', skillFiles, 'skill files,', htmlCount, 'example HTML files');
}
if (installPrompt) {
  console.log('  prompt  →', claudePromptDest);
  console.log('  opencode→', opencodePromptDest);
}
console.log('');
if (installSkill && installPrompt) {
  console.log('The skill and prompt are now available in all Claude Code projects.');
} else if (installSkill) {
  console.log('The skill is now available in all Claude Code projects.');
} else {
  console.log('The prompt is now available in all Claude Code projects.');
}
console.log('');
