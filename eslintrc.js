module.exports = {
  // Base ESLint configuration for the entire project
  root: true,
  parserOptions: {
    ecmaVersion: 2023, // or the ECMAScript version you are using
    sourceType: 'module',
  },
  env: {
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended'], // You can extend other configurations as needed
  rules: {
    'no-console': 'off',
  },

  // Overrides for specific files or directories
  overrides: [
    {
      files: [
        '.gitignore',
        '.dockerignore',

      ],
      rules: {
        // Set rules specific to the ignored files
        // For example, to disable all warnings for these files:
        'no-warning-comments': 'off',
      },
    },
    // Add more overrides if needed
  ],
}
