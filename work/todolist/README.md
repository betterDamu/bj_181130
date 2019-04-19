# todolist

> A Vue.js project

## vue脚手架的使用
  1. npm i vue-cli -g
  2. vue -V 
  3. vue list 查看对应的模板类型
  4. vue init webpack 项目名

# vue 模板
  <template>
  #[[$END$]]#
  </template>
  
  <script type="text/ecmascript-6">
    export default {
      name: "${COMPONENT_NAME}"
    }
  </script>
  
  <style  scoped>
  
  </style>
  
  
  
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
