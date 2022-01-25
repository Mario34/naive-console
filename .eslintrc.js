module.exports = {
  extends: ['@mario34/eslint-config-vue3'],
  rules: {
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 4,
      },
      multiline: {
        max: 1,
      },
    }],
    'vue/html-closing-bracket-spacing': ['warn', {
      startTag: 'never',
      endTag: 'never',
      selfClosingTag: 'always',
    }],
    'vue/multi-word-component-names': 'off',
    'object-curly-newline': ['error', {
      ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 6, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    }],
  },
  ecmaFeatures: {
    jsx: true,
  },
}
