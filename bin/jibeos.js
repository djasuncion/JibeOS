#!/usr/bin/env node
'use strict';

const path = require('path');
const { validateProjectName } = require('../src/validateProjectName');
const { createProject, initHere } = require('../src/createProject');

const args = process.argv.slice(2);

if (args[0] === '--here') {
  const { written, skipped } = initHere(process.cwd());

  if (written.length > 0) {
    console.log('Files generated:');
    for (const f of written) console.log(`  ${f}`);
  }

  if (skipped.length > 0) {
    console.log('Files skipped (already exist):');
    for (const f of skipped) console.log(`  ${f}`);
  }

  if (written.length === 0) {
    console.log('All files already exist. Nothing to do.');
  }

  process.exit(0);
}

const projectName = args[0];

if (!projectName) {
  console.error('Usage: npx create-jibeos <project-name>');
  console.error('       npx create-jibeos --here');
  process.exit(1);
}

const { valid, error } = validateProjectName(projectName);
if (!valid) {
  console.error(`Invalid project name: ${error}`);
  process.exit(1);
}

try {
  const projectPath = createProject(projectName, process.cwd());
  console.log(`Project created: ${projectPath}`);
  console.log('Files generated:');
  console.log('  README.md');
  console.log('  ROADMAP.md');
  console.log('  MILESTONES.md');
  console.log('  ARCHITECTURE.md');
  console.log('  CURRENT_STATE.md');
  console.log('  AI_WORKFLOW.md');
} catch (err) {
  console.error(`Error: ${err.message}`);
  process.exit(1);
}
