## 原注释
The boilerplate comes with webpack, and react installed along with enzyme as a testing suite and chai for asserions

NPM install to download all the modules

The environment also uses babel-eslint as a linter core for es-lint, the configuration for which can be changed in .eslintrc

## 个人总结
## 步骤
### 1. git克隆代码到react-basic文件夹
>`git clone https://github.com/veebuv/React-BoilerPlate-Udemy.git react-basic`
### 2.打开编辑器 (使用Atom的话，atom .)
>`cd react-basic  code .`
### 3.npm安装依赖
`npm install`
### 4.启动项目
`npm start`
```javascript
可能会报错，一般情况是端口占用问题。
解决办法：
"scripts": {
    "start": "node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js",
通过配置文件修改,修改前package.json文件中内容
"scripts": {
    "start": "node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --port=8006",   
```