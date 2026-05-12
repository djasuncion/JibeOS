#!/usr/bin/env node
'use strict';

const path = require('path');
const { validateProjectName } = require('../src/validateProjectName');
const { createProject } = require('../src/createProject');

const [, , projectName] = process.argv;

if (!projectName) {
  console.error('Usage: npx create-jibeos <project-name>');
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
