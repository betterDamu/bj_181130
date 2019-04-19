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
  
## todolist 数据传递
    因为footer.vue header.vue list.vue 都有使用todos数据  
    所以todos数据应该放在App.vue中进行定义
    1.  app.vue --todos--> list.vue --todo--> item.vue
    2.  header.vue --新构建的todo对象--> app.vue
              事件的形式
  
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
