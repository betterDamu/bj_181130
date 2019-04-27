# 创建计数器组件
  > [code](code/store&state)
  
      在整个组价的改造过程中,我们发现是需要修改计数器的值,
      当我们通过 `this.$store.state.count++` 这种方式去修改store中的数据时发现仓库数据变了
      可是界面上的数据没有更新.  在对仓库数据进行修改时 我们必须遵守 Vue 的响应规则
      
      所以仓库中的所有数据在使用时最好都定义成计算属性
## 严格模式
  开启严格模式，仅需在创建 store 的时候传入 `strict: true`：
  
  ``` js
  const store = new Vuex.Store({
    // ...
    strict: true
  })
  ```
  
  在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误。
  这能保证所有的状态变更都能被调试工具跟踪到。
## 源码
  > [code](code/count)  
       
       
# Mutation
  更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
  Vuex 中的 mutation 非常类似于事件：
      每个 mutation 都有一个字符串的 **事件类型 (type)** 和 一个 **回调函数 (handler)**。
      这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数
### 注册Mutation
``` js
    //改造仓库文件
    import Vuex from "vuex"
    import Vue from "vue"
    Vue.use(Vuex)
    const store = new Vuex.Store({
      strict: true,
      state:{
        count:0
      },
      mutations:{
        inc(state){
          state.count++
        },
        dec(state){
          state.count--
        }
      }
    })
    export default store
```
### 使用mutation
你不能直接调用一个 mutation handler。
  这个选项更像是事件注册：“当触发一个类型为 `increment` 的 mutation 时，调用此函数。”
  要唤醒一个 mutation handler，你需要以相应的 type 调用 **store.commit** 方法：

  ``` js
    store.commit('inc')
  ```
### 提交载荷（Payload）

你可以向 `store.commit` 传入额外的参数，即 mutation 的 **载荷（payload）**：

``` js
// ...
mutations: {
  inc (state, n) {
    state.count += n
  }
}
```
``` js
store.commit('increment', 10)
```

在大多数情况下，载荷应该是一个对象，这样可以包含多个字段并且记录的 mutation 会更易读：

``` js
// ...
mutations: {
  inc (state, obj) {
    state.count += obj.amount
  }
}
```

``` js
store.commit('increment', {
  amount: 10
})
```
### 对象风格的提交方式

提交 mutation 的另一种方式是直接使用包含 `type` 属性的对象：

``` js
store.commit({
  type: 'inc',
  amount: 10
})
```

当使用对象风格的提交方式，整个对象都作为载荷传给 mutation 函数，因此 handler 保持不变：

``` js
mutations: {
  inc (state, obj) {
    state.count += obj.amount
  }
}
```
# Mutation 需遵守 Vue 的响应规则

既然 Vuex 的 store 中的状态是响应式的，那么当我们变更状态时，监视状态的 Vue 组件也会自动更新。
这也意味着 Vuex 中的 mutation 也需要与使用 Vue 一样遵守一些注意事项：

1. 最好提前在你的 store 中初始化好所有所需属性。

2. 当需要在对象上添加新属性时，你应该

  - 使用 `Vue.set(obj, 'newProp', 123)`
#  源码
 > [code](code/mutation)
 
  


