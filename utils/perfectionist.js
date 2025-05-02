import pluginPerfectionist from 'eslint-plugin-perfectionist'

export default [
  {
    plugins: {
      perfectionist: pluginPerfectionist,
    },
    rules: {
      'perfectionist/sort-exports': ['error', { order: 'asc', type: 'natural' }],
      'perfectionist/sort-imports': [
        'error',
        {
          groups: [
            'type',
            ['parent-type', 'sibling-type', 'index-type', 'internal-type'],

            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'side-effect',
            'object',
            'unknown',
          ],
          internalPattern: ['^~/.+', '^@/.+'],
          newlinesBetween: 'ignore',
          order: 'asc',
          type: 'natural',
        },
      ],
      'perfectionist/sort-named-exports': ['error', { order: 'asc', type: 'natural' }],
      'perfectionist/sort-named-imports': ['error', { order: 'asc', type: 'natural' }],
    },
  },
]
