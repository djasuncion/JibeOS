'use strict';

const MAX_LENGTH = 100;
const VALID_PATTERN = /^[a-zA-Z0-9_-]+$/;

function validateProjectName(name) {
  if (!name || name.trim() === '') {
    return { valid: false, error: 'Project name cannot be empty.' };
  }

  if (name.length > MAX_LENGTH) {
    return { valid: false, error: `Project name must be ${MAX_LENGTH} characters or fewer.` };
  }

  if (!VALID_PATTERN.test(name)) {
    return {
      valid: false,
      error: 'Project name may only contain letters, numbers, hyphens, and underscores.',
    };
  }

  return { valid: true };
}

module.exports = { validateProjectName };
