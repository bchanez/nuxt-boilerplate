# Boilerplate Nuxt 4

Boilerplate Nuxt 4 pour sites vitrines. Sert de base pour créer de nouveaux projets.

## Stack

- **Framework** : Nuxt 4 + Vue 3 + TypeScript (strict mode)
- **CSS** : Tailwind CSS 4
- **Composants UI** : shadcn-nuxt (basé sur reka-ui)
- **Tests** : Playwright (visual regression + E2E), Vitest
- **Qualité** : ESLint 9 (stylistic), commitlint, husky
- **Package manager** : pnpm (monorepo workspace, app dans `nuxt-app/`)
- **Node** : 22.x
- **Deploiement** : SSR Node.js (Docker)

## Setup

```bash
pnpm install
```

## Development

Depuis la racine :

```bash
pnpm dev
```

Depuis `nuxt-app/` :

```bash
pnpm dev
```

## Qualite

Depuis `nuxt-app/` :

```bash
pnpm lint          # ESLint
pnpm lint:fix      # ESLint avec auto-fix
pnpm typecheck     # TypeScript (vue-tsc)
```

Le hook pre-commit Husky lance automatiquement `lint` et `typecheck` avant chaque commit.

## Tests

Depuis `nuxt-app/` :

```bash
pnpm test:visual        # Tests visual regression (@nuxt/test-utils)
pnpm test:visualupdate  # Mettre a jour les snapshots visuels
pnpm e2e                # Tests E2E Playwright (contre Docker)
```

## Production

Depuis `nuxt-app/` :

```bash
pnpm build
pnpm preview
```
