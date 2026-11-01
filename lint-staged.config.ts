/// <reference types="node" />

import { relative, sep } from 'node:path';
import process from 'node:process';

import type { Configuration } from 'lint-staged';

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
    if (filenames.length === 0) {
      return [];
    }

    const files = filenames.join(' ');

    const tasks = [
      `corepack pnpm exec oxlint --fix ${files}`,
      `corepack pnpm exec prettier --write ${files}`,
    ];

    const sourceFiles = filenames.filter(isSourceFile);
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
    if (filenames.length === 0) {
      return [];
    }

    return `corepack pnpm exec tsc --project ./tsconfig.json --noEmit`;
  },

  'src/**/*.html': (filenames) => {
    if (filenames.length === 0) {
      return [];
    }

    return `corepack pnpm exec markuplint ${filenames.join(' ')}`;
  },
};

export default config;
