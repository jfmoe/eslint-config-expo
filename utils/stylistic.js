import pluginStylistic from '@stylistic/eslint-plugin'
import pluginAntfu from 'eslint-plugin-antfu'

export default [
  pluginStylistic.configs.recommended,
  {
    plugins: {
      antfu: pluginAntfu,
      style: pluginStylistic,
    },
    rules: {
      'antfu/consistent-chaining': 'error',
      'antfu/consistent-list-newline': 'error',
      'antfu/curly': 'error',
      'antfu/if-newline': 'error',
      'antfu/top-level-function': 'error',
      'style/generator-star-spacing': ['error', { after: true, before: false }],
      'style/yield-star-spacing': ['error', { after: true, before: false }],
    },
  },
]
