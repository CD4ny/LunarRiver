// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: 'expo',
  ignorePatterns: ['/dist/*'],
  rules: {
    'no-unused-vars': 'warn', // Detecta variables no utilizadas
    '@typescript-eslint/no-unused-vars': 'warn', // Detecta variables no utilizadas en TypeScript
    'no-unused-expressions': 'warn', // Detecta expresiones inútiles
  },
  plugins: ['unused-imports', '@typescript-eslint'], // Plugin para manejar importaciones no utilizadas
};
