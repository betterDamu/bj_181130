# vuex使用
在一个模块化的打包系统中，您必须显式地通过 `Vue.use()` 来安装 Vuex：
``` js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
```
### 注意
 > 上述步骤必须在创建仓库之前完成!

# vuex核心概念
### 仓库
每一个 Vuex 应用的核心就是 store（仓库）。“store”基本上就是一个容器，
它包含着你的应用中大部分的**状态 (state)**。Vuex 和单纯的全局对象有以下两点不同：
1. Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，
    若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
2. 你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地
    **提交 (commit) mutation**。这样使得我们可以方便地跟踪每一个状态的变化，
    从而让我们能够实现一些工具帮助我们更好地了解我们的应用。


### 新建仓库
> Vuex  通过new Vuex.Store({配置对象})来新建一个仓库
> 仓库的所有数据保存在配置对象的state属性中
``` js
// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
// 在src目录下新建store目录   再新建index.js文件来存放仓库
import Vuex from "vuex" 
const store = new Vuex.Store({
  state: {
    count: 0
  }
})
export default store
```

### 注册仓库
> Vuex 通过 store 选项，提供了一种机制将状态从根组件“注入”到每一个子组件中（需调用 Vue.use(Vuex)）：
``` js
import App from './App'
import store from './store'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
```

### 访问仓库数据
> 由于上一步把 store 的实例注入了所有的子组件 所以任何组件都可以通过其自身的$store来访问仓库
``` js
<template>
  <div>
    {{count}}
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "App",
        data(){
          return {
            count:this.$store.state.count
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped></style>
```


### 源码
  [code](code/store&state)









