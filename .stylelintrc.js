module.exports = {
  'extends': ['stylelint-config-standard-scss'],
  'plugins': [
    'stylelint-scss'
  ],
  'overrides': [
    {
      // sfc语法解析
      files: ['*.vue', '**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
  'rules': {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'block-no-empty': null,
  },
  'ignoreFiles': ['dist/**'],
}
