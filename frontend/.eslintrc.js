// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    //'plugin:vue/essential', 
    //'standard',
    //'standard',
    //'eslint:recommended',
    //'plugin:prettier/recommended',
    //'plugin:vue/recommended',
    "prettier",
    "prettier/vue",
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
  ],
  // add your custom rules here
  rules: {
  }
}
