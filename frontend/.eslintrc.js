// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    "ecmaVersion": 7, 
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true
    }
  },
  env: {
    browser: true,
    node: true
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
    'prettier',
    'vue',
  ],
  // add your custom rules here
  rules: {
  }
}
