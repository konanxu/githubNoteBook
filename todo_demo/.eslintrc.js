module.exports = {
  extends: "standard",
  plugins: [
    "html"
  ],
  parser: "babel-eslint",
  rules : {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': 0,
    'no-tabs': 0,
    'space-before-function-paren': 0,
    'no-multiple-empty-lines': ['error', { 'max': 2, 'maxBOF': 1 }]
  }
}
