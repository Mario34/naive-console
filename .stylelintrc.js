module.exports = {
  'extends': ['stylelint-config-standard'],
  'plugins': [
    'stylelint-scss'
  ],
  'rules': {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'block-no-empty': null,
  },
  'ignoreFiles': ['dist/**'],
}
