# Mayela — portfolio site

Implementation of the **2a "Paper Terminal: AI security edition"** design from the Claude Design handoff (Cyber Portfolio, exported from Claude Design).

Vite + React 19 + TypeScript, plain CSS Modules, with no runtime dependencies beyond React.

## Commands

```bash
npm install
npm run dev        # local dev server
npm run build      # typecheck + production build → dist/
npm run preview    # serve the built site
npm test           # unit tests (vitest)
```

The build uses a relative `base`, so `dist/` can be deployed to any static host or sub-path (GitHub Pages, Netlify, Vercel, S3…).

## Structure

```
./
├── index.html                 # HTML shell, meta tags
├── public/
│   ├── favicon.svg
│   ├── projects/*.webp        # project covers (resized covers)
│   └── resume/MayelaA_Resume.pdf
└── src/
    ├── main.tsx / App.tsx     # entry + page composition, animation clock
    ├── data/                  # ALL copy lives here — edit content without touching UI
    │   ├── site.ts            #   name, hero phrases, links, timing settings
    │   ├── experience.ts
    │   ├── projects.ts
    │   └── about.ts           #   toolkit + education
    ├── lib/keyboard.ts        # key layout, key mapping, auto-typer frames (+ tests)
    ├── hooks/
    │   ├── useTicker.ts               # the page's animation clock
    │   ├── useTypingKeyboard.ts       # auto-typing ↔ live visitor typing
    │   └── usePrefersReducedMotion.ts
    ├── components/            # Nav, Hero, Keyboard, ExperienceLog, ProjectList, About, Footer, ui
    └── styles/global.css      # design tokens (colours, fonts, gutters) + resets
```

## Behaviour

- The hero keyboard auto-types the phrases in `data/site.ts`. When a visitor types anywhere on the page, the keyboard and typed line echo their keystrokes. After ~6s of no typing, the auto-typer resumes.
- Experience rows expand on hover, focus or tap, and one row always stays open. Project rows expand while hovered (or on focus or tap).
- With `prefers-reduced-motion`, the hero shows a static line, the caret stops blinking and transitions are disabled.
- Layout is responsive: the hero stacks below 1100px, list rows reflow below 900px and 560px, and the keyboard scales to fit phone widths.

Tweak typing speed (`tickMs`: 140 calm / 95 normal / 60 fast) and keyboard tilt in `src/data/site.ts`.
