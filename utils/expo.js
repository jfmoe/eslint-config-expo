import expo from 'eslint-plugin-expo'

export default [
  {
    // JS files can end up in build intermediates, eg:
    // android/app/build/intermediates/assets/debug/EXDevMenuApp.android.js
    ignores: ['android/app/build'],
  },
  {
    plugins: {
      expo,
    },

    rules: {
      'expo/use-dom-exports': ['error'],
      'expo/no-env-var-destructuring': ['error'],
      'expo/no-dynamic-env-var': ['error'],
    },
  },
]
