module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended', // Accessibility checks
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true }, // Ensure JSX is recognized
  },
  settings: { react: { version: 'detect' } }, // Automatically detect the React version
  plugins: ['react-refresh', 'jsx-a11y'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/prop-types': 'off', // Disable prop-types as we're using TypeScript
    'no-unused-vars': 'warn', // Warn instead of error for unused variables
    'no-console': 'warn', // Warn instead of error for console statements
    'react/react-in-jsx-scope': 'off', // Not needed for React 17+
    'jsx-a11y/anchor-is-valid': 'off', // Disable specific accessibility rule if not needed
    // Add other rules as needed
  },
}
