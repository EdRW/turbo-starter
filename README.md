# edrw-turbo-starter

A monorepo starter project powered by Turborepo.

## Install

Run the following command from the root directory:

```bash
pnpm install
```

## Apps

This monorepo includes the following apps:

- [`@edrw/calculator`](./apps/calculator/): an example app that imports the `@edrw/math` package

## Packages

This monorepo includes the following packages, which are published to npm:

- [`@edrw/math`](./packages/math/): an example package that exports a simple math function

It also includes the following configuration packages:

- [`@edrw/eslint-config`](./packages/eslint-config/): `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- [`@edrw/typescript-config`](./packages/tsconfig/): `tsconfig.json`s used throughout the monorepo
- [`@edrw/jest-config`](./packages/jest-config/): `jest` configurations used throughout the monorepo

## CLI Commands

The following commands will apply to all apps and packages if run from the root directory.
Alternatively, commands run from individual project directories will only apply to that project.

### Build

```bash
pnpm build
```

### Develop

Start dev servers or file watchers that auto reload on file changes.

```bash
pnpm dev
```

### Lint

```bash
pnpm lint
```

### Format

```bash
pnpm format
```

### Test

```bash
pnpm test
```

## Utilities

Read more about the tooling used in this monorepo:

- [Turborepo](https://turbo.build/repo/): a tool for managing monorepos
- [Changesets](https://github.com/changesets/changesets): a tool for managing changelogs and [semantic versioning](https://semver.org/)
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
