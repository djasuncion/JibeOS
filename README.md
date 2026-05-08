# JibeOS Project Bootstrapper

> CLI that generates a new project folder with standard JibeOS markdown files in one command.

## Problem

Starting a new JibeOS project means manually creating the same five documentation files every time, leading to inconsistency and wasted setup time.

## Solution

A single CLI command scaffolds the full project skeleton — README, ROADMAP, MILESTONES, ARCHITECTURE, and CURRENT_STATE — with the project name injected and sensible starter content.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Runtime | Node.js (no dependencies) |
| Interface | CLI via `process.argv` |
| Templates | Plain markdown files in `templates/` |

## Usage

```bash
npx create-jibeos my-project
```

Or, after linking locally (see Development below):

```bash
create-jibeos my-project
```

This creates `./my-project/` in the current directory containing:

```
my-project/
  README.md
  ROADMAP.md
  MILESTONES.md
  ARCHITECTURE.md
  CURRENT_STATE.md
```

## Development

To test locally without publishing:

```bash
# From inside this repo:
npm link

# Now available globally on this machine:
create-jibeos my-project

# When done testing, unlink:
npm unlink -g create-jibeos
```

## Versioning

Follows [Semantic Versioning](https://semver.org/). All notable changes are recorded in [CHANGELOG.md](./CHANGELOG.md).

## Project Guidelines for AI Contributors

- No npm dependencies — keep this zero-dependency
- Templates live in `templates/` and use `{{PROJECT_NAME}}` as the only interpolation token
- Do not publish to npm until explicitly requested
- Validation rules are in `src/validateProjectName.js` — extend there, not in the bin script
