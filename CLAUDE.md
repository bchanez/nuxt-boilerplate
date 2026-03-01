# CLAUDE.md

## Projet

Boilerplate Nuxt 4 pour sites vitrines. Sert de base pour créer de nouveaux projets.

## Stack

- **Framework** : Nuxt 4 + Vue 3 + TypeScript (strict mode)
- **CSS** : Tailwind CSS 4
- **Composants UI** : shadcn-nuxt (basé sur reka-ui)
- **Tests** : Playwright (visual regression via @nuxt/test-utils + E2E standalone), Vitest
- **Qualité** : ESLint 9 (stylistic), commitlint, husky
- **Package manager** : pnpm (monorepo workspace, app dans `nuxt-app/`)
- **Node** : 22.x
- **Déploiement** : SSR Node.js (Docker)

## Commandes

Depuis la racine :

```bash
pnpm install          # Installer les dépendances
pnpm dev              # Serveur de dev (proxy vers nuxt-app)
```

Depuis `nuxt-app/` :

```bash
pnpm dev              # Serveur de dev
pnpm build            # Build production
pnpm lint             # ESLint
pnpm lint:fix         # ESLint avec auto-fix
pnpm typecheck        # Vérification TypeScript (vue-tsc)
pnpm test:visual      # Tests visual regression (@nuxt/test-utils)
pnpm test:visualupdate # Mettre à jour les snapshots visuels
pnpm test:e2e         # Tests E2E Playwright (standalone, contre Docker)
```

## Structure

```
nuxt-app/
├── app/
│   └── pages/          # Routing fichier (index, mentions-legales, cgu, etc.)
├── components/
│   ├── customUi/       # Composants métier
│   └── ui/             # Composants shadcn-nuxt (auto-générés)
├── composables/        # Composables Vue
├── tests/
│   ├── e2e/            # Tests E2E Playwright
│   └── visual/         # Tests visual regression
├── layouts/            # Layouts Nuxt
├── plugins/            # Plugins Nuxt (ua-detect.server.ts)
├── public/img/         # Images statiques
├── server/api/         # Routes API serveur
├── assets/css/         # CSS global (Tailwind)
├── app.vue             # Composant racine
├── nuxt.config.ts      # Config Nuxt
└── playwright.config.ts # Config Playwright (projects: visual + e2e)
docker/
├── dev/                # Dockerfile dev (node 22 + outils)
└── test/               # Dockerfile prod multi-stage
```

## Conventions

- Vue 3 Composition API avec `<script setup lang="ts">`
- ESLint 9 flat config avec règles stylistic (pas de Prettier)
- Commits conventionnels (commitlint + husky)
- TypeScript strict mode activé
- Images optimisées via `@nuxt/image` (presets mobile 768px/60% et desktop 1920px/70%, format WebP)

## Variables d'environnement

Voir `nuxt-app/.env.example` :

- `NUXT_SITE_URL` - URL du site
- `GOOGLE_API_KEY` - Clé API Google Places
- `GOOGLE_PLACE_ID` - ID du lieu Google

## CI/CD

GitHub Actions (`.github/workflows/CI.yaml`) :

1. **CI** : commitlint (PR) → lint → typecheck → build → visual regression
2. **E2E** : démarre Docker → Playwright → cleanup
