/*
 * @Author: zihao.chen
 * @Date: 2021-06-23 15:47:58
 * @LastEditors: zihao.chen
 * @LastEditTime: 2021-06-30 19:26:01
 * @Description: 
 */
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import eslint from '@rollup/plugin-eslint'
import ts from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
import path from 'path'
const extensions = [
  '.js',
  '.ts',
  '.tsx'
]


export default {
  input: './src/index.ts',
  output: {
    format: 'umd', //模块化类型 支持amd 将变量挂载window
    name: 'xbbApp',
    file: path.resolve('dist/xbbApp.js'),
    sourcemap: true
  },
  plugins: [
    resolve({
      extensions
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      extensions
    }),
    serve({
      port: 3000,
      contentBase: '',
      openPage: '/index.html' //打开指定页面
    }),
    ts({
      tsconfig: path.resolve(__dirname,'tsconfig.json')
    }),
    eslint({
      throwOnError: true,
      include: ['src/**']
    })
  ]
}
