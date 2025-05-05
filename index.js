import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'

import coreConfig from './utils/core.js'
import expoConfig from './utils/expo.js'
import { allExtensions } from './utils/extensions.js'
import perfectionistConfig from './utils/perfectionist.js'
import reactConfig from './utils/react.js'
import stylisticConfig from './utils/stylistic.js'
import typescriptConfig from './utils/typescript.js'

export default defineConfig([
  ...coreConfig,
  ...typescriptConfig,
  ...reactConfig,
  ...expoConfig,
  ...stylisticConfig,
  ...perfectionistConfig,
  {
    settings: {
      'import/extensions': allExtensions,
      'import/resolver': {
        node: { extensions: allExtensions },
      },
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        '__DEV__': 'readonly',
        'ErrorUtils': false,
        'FormData': false,
        'XMLHttpRequest': false,
        'alert': false,
        'cancelAnimationFrame': false,
        'cancelIdleCallback': false,
        'clearImmediate': false,
        'fetch': false,
        'navigator': false,
        'process': false,
        'requestAnimationFrame': false,
        'requestIdleCallback': false,
        'setImmediate': false,
        'window': false,
        'shared-node-browser': true,
      },
    },
  },
  {
    files: ['*.web.*'],
  },
  globalIgnores([
    '**/.expo/**',
    '**/bin/**',
    '**/dist/**',
    '**/ios/*',
    '**/android/**',
    '**/assets/**',
  ]),
])
