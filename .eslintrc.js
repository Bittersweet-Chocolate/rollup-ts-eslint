/*
 * @Author: zihao.chen
 * @Date: 2021-06-29 11:10:55
 * @LastEditors: czh
 * @LastEditTime: 2021-07-01 00:19:15
 * @Description:
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier',
    'prettier/@typescript-eslint'
  ], //定义文件继承的子规范
  plugins: ["prettier"], //定义了该eslint文件所依赖的插件
  rules: {
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/ban-ts-ignore': ['off'],
    '@typescript-eslint/member-delimiter-style': ['off'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
};
