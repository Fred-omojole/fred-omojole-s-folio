# Agents

This file documents agents and AI-assisted workflows used in this project.

## Available Agents

### Explore Agent

Fast agent specialized for exploring codebases. Use for:

- Finding files by patterns
- Searching code for keywords
- Understanding codebase structure
- Quick file and keyword searches

**Use when:** You need to quickly find files or understand the codebase structure.

### Plan Agent

Software architect agent for designing implementation plans. Use for:

- Planning implementation strategy
- Identifying critical files
- Considering architectural trade-offs
- Breaking down complex tasks

**Use when:** You're about to start a complex implementation and need a step-by-step plan.

### General-Purpose Agent

For researching complex questions, searching for code, and executing multi-step tasks.

**Use when:** You need to perform complex, multi-step research or coding tasks.

## Working with Agents

When delegating to agents:

- Provide clear, detailed task descriptions
- Specify if you need research only or code generation
- Let agents work autonomously - don't interrupt with duplicate searches
- Use foreground agents when you need results before proceeding
- Use background agents for independent parallel work

See CLAUDE.md for agent usage guidelines.

## Development Guidelines

Before implementing any features, follow these rules:

1. **Avoid unnecessary useEffect** - Do not use useEffect unless fully required. This is for performance optimization. Check if state updates or side effects are truly needed.

2. **Refer to Next.js documentation** - Before any implementation, go through [Next.js documentation](https://nextjs.org/docs) for proper guidelines and understand recommended patterns and trade-offs.

3. **Check Tailwind CSS documentation** - Before any styling implementation, refer to [Tailwind CSS documentation](https://tailwindcss.com/) to use current utility classes and techniques. Avoid outdated or deprecated patterns.

4. **Understand the codebase first** - Before implementing anything, scan the codebase and review `package.json` to understand:
   - What dependencies are available
   - What's already implemented
   - Existing patterns and conventions
   - Current project setup
