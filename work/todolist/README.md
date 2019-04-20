# todolist

> A Vue.js project

## vue脚手架的使用
  1. npm i vue-cli -g
  2. vue -V 
  3. vue list 查看对应的模板类型
  4. vue init webpack 项目名
  5. npm run dev(npm start)
      npm run build
## 开发环境的启动流程
   webpack.dev.conf.js
   webpack.base.conf.js
     entry :  main.js : webpack整个的入口文件
     output:  app.js
   
   HtmlWebpackPlugin
    指定了项目的模板!!!  ---> el!!! 
    app.js注入到index.html中
    
   所有的静态资源都应该放在指定的 static 目录下
   
## vue 模板
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
              初始化渲染
              父向子   props
    2.  header.vue --新构建的todo对象--> app.vue
              头部的添加功能
              子向父   事件的形式   (props 父组件主动 自己练 √)
                  ---> 重新再走流程1
    3. item的删除功能 
              孙向爷  
                -   list.vue  --index-->  item.vue --index--> list.vue  --index-->  app.vue    
                      子向父   事件的形式   (props 父组件主动 自己练)
                -   item.vue --id--> list.vue  --id-->  app.vue       
                      子向父   事件的形式   (props 父组件主动 自己练)
                -    item.vue  --id-->  app.vue       
                      pubsub (总线 自己练√)
                        ---> 重新再走流程1
    4.  footer.vue --val--> app.vue
        全选全不选
            子向父    事件的形式   (props 父组件主动 自己练)                  
                  
  
