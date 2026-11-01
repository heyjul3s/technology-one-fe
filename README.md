# Technology One FE

React and TypeScript app built with Vite.

## Scope

The implementation covers the responsive sign-in interface and client-side validation.

Authentication is outside the scope:

- Sign-in does not call an API or create a session.
- Google and Facebook buttons are presentational.
- “Remember me” does not persist a session.
- Registration and password recovery pages are not implemented.

## Engineering decisions

- **Kept the architecture small.** A single page does not need routing or global state management. Shared form controls provide consistency without introducing a full component library.
- **Used React Hook Form with Zod.** Native, uncontrolled inputs avoid manual state wiring, while the schema keeps validation rules and inferred TypeScript types together.
- **Used CSS Modules and shared variables.** Component styles remain isolated, while common spacing, colours, and typography can be adjusted centrally.
- **Handled responsiveness in CSS.** Layout changes do not require JavaScript. Smaller screens prioritise the form; wider screens include supporting copy and illustrations.
- **Added focused interaction tests.** Tests cover validation, keyboard navigation, and focus after invalid submission—the behaviours most likely to affect form usability.

## Setup

Install [nvm](https://github.com/nvm-sh/nvm), then run from the repository root:

```sh
nvm install
nvm use
npm install --global corepack
corepack enable
corepack pnpm install
```

`.nvmrc` pins Node.js. Corepack uses the pnpm version pinned in `package.json`.
Use `corepack pnpm` for project commands to avoid picking up a different standalone
pnpm installation. Dependency installation also sets up the Husky Git hooks.

## Run, test, and build

```sh
corepack pnpm dev       # Start the development server; open the URL it prints
corepack pnpm test -- --run
corepack pnpm build     # Type-check and build for production into dist/
```

The project is pinned to Node.js 26 via `.nvmrc` and the repo package manager is pnpm 12.15.0 via `package.json`.

## Project structure

```text
.
├── README.md
├── .nvmrc
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── tsconfig.json
├── vite.config.ts
├── vitest.config.ts
├── vitest.setup.ts
├── src/
│   ├── app.tsx
│   ├── app.module.css
│   ├── styles.css
│   ├── index.html
│   ├── main.tsx
│   ├── assets/
│   └── components/
│       ├── index.tsx
│       ├── checkbox/
│       ├── form/
│       ├── header/
│       ├── login/
│       ├── login-turtle-scene/
│       └── text-field/
└── test-reports/
    └── junit.xml
```

## Scripts

Run scripts with `corepack pnpm run <script>`.

| Script              | Description                                                     |
| ------------------- | --------------------------------------------------------------- |
| `dev`               | Start the Vite development server.                              |
| `build`             | Type-check and build for production into `dist/`.               |
| `browserlist`       | List the browsers targeted by the project.                      |
| `browserslist:lint` | Check the Browserslist configuration.                           |
| `lint`              | Run all lint, formatting, and TypeScript checks.                |
| `lint:fix`          | Apply available lint and formatting fixes.                      |
| `lint:css`          | Check styles with Stylelint.                                    |
| `lint:css-fix`      | Apply Stylelint fixes.                                          |
| `lint:es`           | Check JavaScript and TypeScript with Oxlint.                    |
| `lint:es-fix`       | Apply Oxlint fixes.                                             |
| `lint:markup`       | Check HTML and JSX with markuplint.                             |
| `lint:markup-fix`   | Apply markuplint fixes.                                         |
| `lint:prettier`     | Check formatting with Prettier.                                 |
| `lint:prettier-fix` | Format files with Prettier.                                     |
| `lint:types`        | Check TypeScript without emitting files.                        |
| `prepare`           | Set up Husky Git hooks; runs automatically during installation. |
| `test`              | Run tests with Vitest.                                          |

## Dependencies

```sh
corepack pnpm add <package>
corepack pnpm add --save-dev <package>
corepack pnpm install --frozen-lockfile # Install the committed dependency versions
```
