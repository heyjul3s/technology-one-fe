# Technology One FE

React and TypeScript app built with Vite.

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

## Run and build

```sh
corepack pnpm dev       # Start the development server; open the URL it prints
corepack pnpm build     # Type-check and build for production into dist/
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

## Dependencies

```sh
corepack pnpm add <package>
corepack pnpm add --save-dev <package>
corepack pnpm install --frozen-lockfile # Install the committed dependency versions
```
