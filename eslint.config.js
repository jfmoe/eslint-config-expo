import globals from 'globals'

import expoConfig from './index.js'

export default [
  ...expoConfig,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
]
