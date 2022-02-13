module.exports = {
  'extends': ['stylelint-config-standard-scss'],
  'plugins': [
    'stylelint-scss'
  ],
  'overrides': [
    {
      // sfc语法解析
      files: ['*.vue', '**/*.vue', '*.html', '**/*.html'],
      customSyntax: 'postcss-html',
    },
  ],
  'rules': {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'block-no-empty': null,
    'selector-class-pattern': null,
  },
  'ignoreFiles': ['dist/**'],
}
