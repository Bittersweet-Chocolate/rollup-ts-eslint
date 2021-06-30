/*
 * @Author: zihao.chen
 * @Date: 2021-06-29 11:10:55
 * @LastEditors: zihao.chen
 * @LastEditTime: 2021-06-30 19:10:41
 * @Description: 
 */
module.exports = {
  env: {
    browser: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  parser: "@typescript-eslint/parser",
  extends: ['plugin:@typescript-eslint/recommended'], //定义文件继承的子规范
  plugins: ['@typescript-eslint'], //定义了该eslint文件所依赖的插件
  rules: {
    "@typescript-eslint/no-explicit-any": ["off"],
    "@typescript-eslint/ban-ts-ignore": ["off"],
    "@typescript-eslint/member-delimiter-style": ["off"],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
};
