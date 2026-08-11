# Repository Guidelines

## Project Structure & Module Organization

- `src/components/base/index.tsx` – shared React wrapper managing the G2Plot lifecycle.
- `src/plots/<plot-name>/index.tsx` – one wrapper per G2Plot chart; exports a PascalCase component and props type (e.g. `LineChart`, `LineChartProps`).
- `src/index.ts` – public entry point. Add new chart exports and prop types here.
- `docs/api/<plot-name>.md` – per-chart API documentation for the dumi site.
- `__tests__/` – Jest specs and setup files; `__tests__/plots/` holds generated per-chart specs.
- `assets/` – static assets; `scripts/sync.ts` scaffolds wrappers, exports, docs, and tests from the installed G2Plot package.
- `lib/` and `es/` – generated build output; never edit by hand.

## Build, Test, and Development Commands

- `npm run build` – runs tests, transpiles `src/` into `lib/` and `es/` with Babel, and emits type declarations.
- `npm run build:types` – regenerates declarations only.
- `npm test` – runs Jest with coverage.
- `npm run dev` – starts the local dumi documentation site.
- `npm run build:docs` – builds the documentation site.
- `npm run lint` / `npm run lint:fix` – lints the project with ESLint, optionally auto-fixing.
- `npm run sync` – generates wrappers for charts newly available in G2Plot.

## Coding Style & Naming Conventions

- Use 2-space indentation, LF line endings, UTF-8 encoding, and a final newline, as defined in `.editorconfig`.
- Follow the ESLint and Prettier configs from `@pixas`; `lint-staged` runs on commits.
- Use kebab-case directory names (`src/plots/word-cloud`), PascalCase components (`WordCloudChart`), and `<ChartName>Props` type names.
- Implement chart components with `forwardRef` over `BaseChart`, and import lodash helpers per module (e.g. `lodash/cloneDeep`).
- Keep TypeScript strict mode enabled; declarations are produced by `tsc`.

## Testing Guidelines

- Tests use Jest with jsdom, `@testing-library/react`, and `jest-canvas-mock`.
- Place specs in `__tests__`, name them `<name>.spec.tsx`, and update them when changing behavior or APIs.
- Coverage is collected on every run and uploaded to Codecov by CI.

## Commit & Pull Request Guidelines

- Use Conventional Commits, enforced by `@commitlint/config-conventional` (e.g. `feat(plots): add XChart`, `fix(base): handle data updates`, `docs(api): update line.md`).
- Branch from `master` and open pull requests against `master`.
- Describe the change, link related issues, and include screenshots for visual or chart-rendering changes.
- Make sure `npm run lint` and `npm test` pass; CI runs the full build on every push and PR. PRs are squash-merged, and dependency PRs may auto-merge.
