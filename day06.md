## 0.初始化工作
    npm i vue-router --save
    Vue.use(vueRouter)
## 1.路由基本使用
   1.定义组件 
   2.定义路由 (path 和 组件的一个映射关系 [{},{}])
   3.定义路由器 (new VueRouter({routes}))
   4.new Vue({router})
## 2.嵌套路由
    千万不要以子路由的写法去定义兄弟路由
    /home/item(可能也是兄弟路由)
     [{
        path:"",
        component:组件,
        children:[
            {}
        ]
     },{}]
## 3.动态路由
    /home/123
    /home/234
    [{
        path:"/home/:id",
        component:组件,
     }]
## 4.数据传递（url --> 对应的路由组件；解耦！）
    --> 普通路由(没有与组件解耦)
        /home/123/about/damu?age=18&wife=zdy
        path:"/home/:id/about/:name",
        只要使用上vue-router所有的组件对象都会有两个属性
            vm.$route
                params   ({id:123,name:"damu"})
                query    ({age:18,wife:"zdy"})
            vm.$router
    --> 普通路由 + query + props函数
                 props函数的返回值(对象)  --> 为命中的组件来渲染props的
    --> 动态路由 + props:true
                 动态的传参 就是 为命中的组件来渲染props的
## 5.编程式导航   
    vm.$router
        push
        replace
        go(1)    forward
        go(-1)   back
            