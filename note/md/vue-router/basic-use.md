#  基本使用
如果在一个模块化工程中使用它，必须要通过 `Vue.use()` 明确地安装路由功能：

``` js
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
```

# 起步

用 Vue.js + Vue Router 创建单页应用，是非常简单的。使用 Vue.js ，我们已经可以通过组合组件来组成应用程序，
当你要把 Vue Router 添加进来，我们需要做的是，将组件 (components) 映射到路由 (routes)，
然后告诉 Vue Router 在哪里渲染它们。下面是个基本例子：

## HTML

``` html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<div id="app">
  <h1>Hello App!</h1>
  <p>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
  </p>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</div>
```

## JavaScript

``` js
// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')

// 现在，应用已经启动了！
```

## 重定向
重定向也是通过 routes 配置来完成，下面例子是从 /a 重定向到 /b：
```
const router = new VueRouter({
  routes: [
    { path: '/a', redirect: '/b' }
  ]
})
```

##  路由器的配置
    routes: 注册路由
    mode
        类型: string
        默认值: "hash" (浏览器环境) 
        可选值: "hash" | "history" 
        配置路由模式:
            hash: 使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器。
            history: 依赖 HTML5 History API 和服务器配置。查看 HTML5 History 模式。
        
    linkActiveClass
        类型: string
        默认值: "router-link-active"
        全局配置 <router-link> 的默认“激活 class 类名”。
    
    linkExactActiveClass
        类型: string
        默认值: "router-link-exact-active"
        全局配置 <router-link> 精确激活的默认的 class。   
    
