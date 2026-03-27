# Claude Code Instructions

This file contains project-specific instructions and conventions for working with Claude Code.

## Project Overview

This is a Next.js portfolio/blog project with work showcase and blog content.

**Key technologies:**

- Next.js (React framework)
- TypeScript
- Tailwind CSS

**Main branches:**

- `master` - main production branch
- `walkthrough` - current working branch

## Code Style & Conventions

- Use TypeScript for type safety
- Follow existing code patterns in the project
- Keep components focused and single-purpose
- Use Tailwind CSS for styling

## AI Agent Usage

See [Agents.md](./Agents.md) for guidance on when and how to use different Claude agents.

**Quick reference:**

- **Explore agent** - for codebase exploration and finding files
- **Plan agent** - for complex implementation planning
- **General-purpose agent** - for multi-step research and coding tasks

## Git Workflow

- Work on feature branches (e.g., `walkthrough`)
- Create PRs to `master` for code review
- Use conventional commit messages
- Avoid force-pushing to shared branches

## File Organization

- `app/` - Next.js app components and pages
- `components/` - Reusable React components
- `lib/` - Utility functions and helpers
- `data/` - Static data files
- `public/` - Static assets

## Working with the Codebase

Before making changes:

1. Read relevant files to understand existing patterns
2. Check if similar functionality already exists
3. Keep changes focused and minimal
4. Don't over-engineer solutions

Avoid:

- Unnecessary refactoring
- Adding unused code or premature abstractions
- Changing code you haven't read
- Creating new files when editing existing ones is better
