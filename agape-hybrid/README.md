# Agape Career Ladder — Hybrid App

Interactive career progression board for Agape caregivers. Built as a **hybrid app** with:

- **React + Vite + TypeScript** (web frontend)
- **Capacitor** (wraps the same web app as a native iOS / Android app)
- **Black + Light Gold + White** brand palette

The same codebase runs as:
1. A responsive PWA-ready website (deployable to Vercel / GitHub Pages)
2. A native Android / iOS app via Capacitor

---

## Quick start (web)

```bash
npm install
npm run dev          # local dev at http://localhost:5173
npm run build        # production bundle in /dist
npm run preview      # preview the prod build
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. On [vercel.com](https://vercel.com) → **New Project** → import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output dir: `dist`.
4. Click **Deploy**. The included `vercel.json` handles SPA rewrites.

Or via CLI:

```bash
npm i -g vercel
vercel
```

## GitHub Actions

`.github/workflows/build.yml` builds the project on every push to `main` and uploads
the `dist/` folder as an artifact. Works with any static host.

## Native mobile (Capacitor)

```bash
npm run build
npx cap add android      # one time
npx cap add ios          # one time (macOS + Xcode)
npx cap sync
npx cap open android     # opens Android Studio
npx cap open ios         # opens Xcode
```

App ID: `com.agape.careerladder`

---

## Project structure

```
agape-hybrid/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── vercel.json
├── capacitor.config.ts
├── .github/workflows/build.yml
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── board-data.ts
    └── styles.css
```

## License

© Agape Care. All rights reserved.
