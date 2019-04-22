# mutation
 Mutation 必须是同步函数
 vue 的 devtool 中会记录每一条 mutation 日志。如果mutation中存在异步代码,会导致devtools中的记录变的混乱不可维护
 当我们在mutation中书写异步代码时,严格模式下vue会提出警告,非严格模式下vue不会做出任何反应
 
##源码
  [code](./code/mutation2) 
  
 
# 什么是Action
Action 类似于 mutation，不同在于：

- Action 提交的是 mutation，而不是直接变更状态。
- Action 可以包含任意异步操作。

## 使用
让我们来注册一个简单的 action：

``` js
import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex)
const store = new Vuex.Store({
  // strict: true,
  state:{
    count:0
  },
  getters:{
    flag(state){
      return state.count%2==0?"偶数":"奇数"
    }
  },
  mutations:{
    inc(state,obj){
      state.count+=obj.amount
    },
    dec(state){
      state.count--
    },
    asyncInc(state){
      state.count++
    }
  },
  actions:{
    asyncInc(store){
      setTimeout(()=>{
        store.commit("asyncInc")
      },2000)
    }
  }
})
export default store

```

Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 `context.commit` 提交一个 mutation，或者通过 `context.state` 和 `context.getters` 来获取 state 和 getters。当我们在之后介绍到 [Modules](modules.md) 时，你就知道 context 对象为什么不是 store 实例本身了。

实践中，我们会经常用到 ES2015 的 [参数解构](https://github.com/lukehoban/es6features#destructuring) 来简化代码（特别是我们需要调用 `commit` 很多次的时候）：

``` js
actions: {
  increment ({ commit }) {
    commit('increment')
  }
}
```

### 分发 Action

Action 通过 `store.dispatch` 方法触发：

``` js
store.dispatch('increment')
```


Actions 支持同样的载荷方式和对象方式进行分发：

``` js
// 以载荷形式分发
store.dispatch('incrementAsync', {
  amount: 10
})

// 以对象形式分发
store.dispatch({
  type: 'incrementAsync',
  amount: 10
})

//map辅助
methods:{
  ...mapMutations(["inc","dec"]),
  ...mapActions(["asyncInc"])
}
```


