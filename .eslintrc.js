module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': ['error', {
      html: {
        void: 'never',
        normal: 'any',
        component: 'any'
      },
      svg: 'always',
      math: 'always'
    }]
  }
}
