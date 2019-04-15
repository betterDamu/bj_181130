# vue
## mvvm mvp       mvc
## 前后端分离  服务端渲染
## toc(用户)  tob(企业)


## Vue构造
    Vue.set()
    Vue.component()
    Vue.config.productionTip
## Vue的配置对象
    el (根组件有  子组件不能存在)
    data (根组件data可以是对象  子组件data一般都一个函数)
    methods(不能使用箭头函数  this指向问题)
    components
    template(会覆盖el)
    props
## vm
    $root
    $el
    $options
    $data
    
    $mount()
    $on()
    $once()
    $emit()
    $off()
    
    vm.$set()
## 指令
    {{}}
    v-text
    v-html
    
    v-show
    v-if
    v-else-if
    v-else
    v-for
    
    v-on
    v-bind
    v-model
## 组件
    全局组件
    局部组件
    父组件往子组件传值
