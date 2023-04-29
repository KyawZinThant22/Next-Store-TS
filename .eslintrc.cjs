module.exports = {
   env: {
      browser: true,
      es2021: true,
   },
   extends: 'plugin:react/recommended',
   overrides: [],
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
   },
   plugins: ['react', '@typescript-eslint'],
   rules: {
      'jsx-a11y/anchor-is-valid': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'off',
      'react/no-unused-vars': 'off',
      'at-rule-no-unknown': [
         true,
         {
            ignoreAtRules: ['tailwind'],
         },
      ],
   },
};
