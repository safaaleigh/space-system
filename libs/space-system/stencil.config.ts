import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'space-system',
  taskQueue: 'async',
  outputTargets: [
    { type: 'docs-readme', footer: 'Built for space 🚀' },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: '../../dist/libs/space-system/dist',
    },
    {
      type: 'www',
      dir: '../../dist/libs/space-system/www',
      serviceWorker: null, // disable service workers
    },
  ],
};
