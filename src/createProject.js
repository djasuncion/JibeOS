'use strict';

const fs = require('fs');
const path = require('path');
const { loadTemplates } = require('./templates');

function createProject(projectName, targetDir) {
  const projectPath = path.join(targetDir, projectName);

  if (fs.existsSync(projectPath)) {
    throw new Error(`Folder already exists: ${projectPath}`);
  }

  fs.mkdirSync(projectPath, { recursive: true });

  const files = loadTemplates(projectName);
  for (const { filename, content } of files) {
    fs.writeFileSync(path.join(projectPath, filename), content, 'utf8');
  }

  return projectPath;
}

module.exports = { createProject };
