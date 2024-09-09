# edrw-turbo-starter

[![Checked with Biome](https://img.shields.io/badge/Checked_with-Biome-60a5fa?style=flat&logo=biome)](https://biomejs.dev)

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

### Format and Line

```bash
pnpm format-and-lint
```

```bash
pnpm format-and-lint:fix
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
- [Biomejs](https://biomejs.dev): a batteries-included formatter + linter, a unified replacement for `prettier` and `eslint`
