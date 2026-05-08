'use strict';

const fs = require('fs');
const path = require('path');

const TEMPLATES_DIR = path.join(__dirname, '..', 'templates');

const TEMPLATE_FILES = [
  'README.md',
  'ROADMAP.md',
  'MILESTONES.md',
  'ARCHITECTURE.md',
  'CURRENT_STATE.md',
];

function loadTemplates(projectName) {
  return TEMPLATE_FILES.map((filename) => {
    const templatePath = path.join(TEMPLATES_DIR, filename);
    const raw = fs.readFileSync(templatePath, 'utf8');
    const content = raw.replaceAll('{{PROJECT_NAME}}', projectName);
    return { filename, content };
  });
}

module.exports = { loadTemplates };
