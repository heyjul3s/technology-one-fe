/// <reference types="node" />

import { relative, sep } from 'node:path';
import process from 'node:process';

import type { Configuration } from 'lint-staged';

const ignoredFiles = new Set(['src/route-tree.gen.ts', 'plopfile.js']);

function filterIgnoredFiles(filenames: readonly string[]) {
  return filenames.filter((filename) => {
    const projectPath = relative(process.cwd(), filename).split(sep).join('/');
    return !ignoredFiles.has(projectPath) && !projectPath.startsWith('plop-templates/');
  });
}

function isSourceFile(filename: string) {
  return relative(process.cwd(), filename).split(sep).join('/').startsWith('src/');
}

const config: Configuration = {
  '**/*.{md,json}': (filenames) => {
    if (filenames.length === 0) {
      return [];
    }

    return `corepack pnpm exec prettier --write ${filenames.join(' ')}`;
  },

  '**/*.{ts,tsx,js,jsx}': (filenames) => {
    const matchedFiles = filterIgnoredFiles(filenames);

    if (matchedFiles.length === 0) {
      return [];
    }

    const files = matchedFiles.join(' ');

    const tasks = [
      `corepack pnpm exec oxlint --fix ${files}`,
      `corepack pnpm exec prettier --write ${files}`,
    ];

    const sourceFiles = matchedFiles.filter(isSourceFile);
    const markupFiles = sourceFiles.filter((filename) => /\.[jt]sx$/.test(filename));

    if (markupFiles.length > 0) {
      tasks.push(`corepack pnpm exec markuplint ${markupFiles.join(' ')}`);
    }

    if (sourceFiles.length > 0) {
      tasks.push(
        `corepack pnpm exec vitest related --passWithNoTests --run ${sourceFiles.join(' ')}`,
      );
    }

    return tasks;
  },

  'src/**/*.{module.css,css}': (filenames) => {
    if (filenames.length === 0) {
      return [];
    }

    const files = filenames.join(' ');
    return [`corepack pnpm exec stylelint ${files} --fix`];
  },

  'src/**/*.{ts,tsx}': (filenames) => {
    const files = filterIgnoredFiles(filenames);

    if (files.length === 0) {
      return [];
    }

    return `corepack pnpm exec tsc --project ./tsconfig.json --noEmit`;
  },

  'src/**/*.html': (filenames) => {
    const files = filterIgnoredFiles(filenames);

    if (files.length === 0) {
      return [];
    }

    return `corepack pnpm exec markuplint ${files.join(' ')}`;
  },
};

export default config;
