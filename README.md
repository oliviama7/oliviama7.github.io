# Olivia's Personal Portfolio Website

## Project Overview
A personal portfolio website showcasing my projects across four domains: consulting, economics, computer science, and design.
Design source: Figma Design file (accessed via Figma MCP server).

## Tech Stack
- **HTML5** (semantic tags: `<nav>`, `<section>`, `<article>`, etc.)
- **Tailwind CSS** (via CDN, no build step needed)
- **Vanilla JavaScript** (only when necessary: smooth scrolling, mobile menu toggle)
- **Fonts**: Google Fonts (exact font names per Figma design)

Do NOT use: React, Vue, build tools (Webpack/Vite), SCSS, or CSS-in-JS.
Keep it simple — this will be deployed to GitHub Pages.

## Page Structure

### Single-page sections (index.html)
The landing page is a scrolling single page with the following sections:
- `#hero`: Landing hero — name + headshot + one-liner intro
- `#consulting`: Consulting projects showcase

### Standalone pages
- `projects.html`: All projects (economics, CS, design) shown as a project card grid
- `projects/[project-slug].html`: Individual project detail pages (one HTML file per project)
- `art.html`: Experience in music and photography
- `about.html`: Background, skills, education
- `resume.pdf`: Resume PDF (placed in root, navbar links directly to it)

### Navbar (disappear as scroll down)
- **Logo / Name** → links to `index.html`
- **Consulting** → links to `index.html#consulting` (if on another page, navigate to the consulting section on home)
- **My Projects** → links to `projects.html`
- **Art** → links to `art.html`
- **About Me** → links to `about.html`
- **Resume** → opens `resume.pdf` in a new tab (use `target="_blank"`)

## File Structure
```
personal-website/
├── CLAUDE.md
├── index.html              # Landing + Consulting
├── projects.html           # All project cards
├── art.html                # Art
├── about.html              # About Me
├── resume.pdf              # Resume (manually placed)
├── projects/               # Project detail pages
│   ├── project-name-1.html
│   ├── project-name-2.html
│   └── ...
├── assets/
│   ├── images/             # Headshot, project screenshots, etc. (Figma-downloaded assets go here)
│   ├── icons/
│   └── fonts/              # If using local fonts
├── css/
│   └── custom.css          # Minimal custom styles beyond Tailwind
└── js/
    └── main.js             # Smooth scrolling, mobile menu, etc.
```

## Design Principles

### Colors and typography
- **Strictly follow the Figma design** - do not improvise
- Use exact hex values extracted via Figma MCP
- Load Google Fonts via `<link>` in `<head>`, using the exact font specified in Figma

### Responsiveness
- **Desktop-first design** (Figma file is desktop), but **must support mobile**
- Breakpoints: mobile <768px, tablet 768–1024px, desktop >1024px
- Use Tailwind's `md:` and `lg:` prefixes
- I have NOT designed the mobile version. **Auto-adapt using these principles**:
  - Multi-column grids → single column stack
  - Top navbar → hamburger menu
  - Font sizes scale down proportionally while maintaining hierarchy
  - Spacing tightened appropriately
  - Tap targets at least 44×44px

### Interaction effects
- **Keep it simple** — basic hover effects only
- Project card hover: subtle scale + slightly deeper shadow
- Nav link hover: color change or underline
- Do NOT add: parallax, complex animations, loading animations, scroll-triggered animations

## Project Card Click Behavior
Project cards have mixed click behavior — each card should have a Figma annotation specifying:
- Most projects → link to `projects/[project-slug].html` detail page
- Some projects → external links (GitHub, Behance, etc.) with `target="_blank"`
- If a card has no annotation, **ask me instead of guessing**

## Workflow Conventions

### Standard task flow
1. I'll provide a Figma frame link
2. You **read the design context first** using the Figma MCP tools (colors, typography, layout, components)
3. **Briefly explain your implementation plan** before writing code (high-level direction is enough)
4. After I confirm, write the code
5. After finishing, tell me which files changed and how to preview locally

### Asset handling
- For images in Figma: use MCP's download capability to save them under `assets/images/`
- Use semantic kebab-case filenames: `olivia-headshot.jpg`, `project-tableau-dashboard.png`
- Prefer `.webp` or compressed `.jpg`/`.png` — avoid bloated files

### Communication preferences
- **Reply to me in Chinese (Simplified)**
- For errors or issues, explain the cause first, then propose a fix
- When making multiple changes, list each file modified
- Don't over-engineer — if 10 lines solve it, don't write 50

## Workflow Rules
- Work on ONE section or page at a time. Do not generate multiple pages in a single response.
- After each step, stop and wait for my confirmation before moving on.
- When a task involves a Figma design, you MUST first use the Figma MCP tools to read the design context (colors, typography, spacing, component structure) BEFORE writing any code.
- Briefly explain your implementation plan (high-level direction, no code) and wait for my approval before writing code.
- Do not assume anything I haven't explicitly told you. If unsure, ask me instead of guessing.
- After finishing a step, list the files you changed and tell me how to preview locally.
- **All text content (titles, descriptions, body copy, captions, references, etc.) must be extracted verbatim from the Figma design. Never paraphrase, summarize, improve, or invent text. If a text node is unreadable or unclear, ask the user instead of guessing.**

## GitHub Pages Deployment Notes
- Use relative paths everywhere (avoid `/assets/...`, prefer `./assets/...` or `assets/...`)
- Do not use any server-side features (e.g., backend forms)

## Current Progress
- [x] Design: Figma Design file ready
- [x] Environment: Claude Code + Figma MCP connected
- [x] Project skeleton setup
- [ ] Landing + Consulting section (index.html)
- [x] My Projects page
- [ ] Project detail pages
- [ ] Art page
- [x] About Me page
- [ ] Mobile responsiveness check
- [x] Deploy to GitHub Pages
