# Getter
    有时候我们需要从 store 中的 state 中派生出一些状态.如果有多个组件需要用到此状态
    就可以在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样，
    getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。

    Getter 接受 state 作为其第一个参数：

  ``` js
    // 仓库文件
    import Vuex from "vuex"
    import Vue from "vue"
    Vue.use(Vuex)
    const store = new Vuex.Store({
      strict: true,
      state:{
        firstName:"T",
        lastName:"mac"
      },
      getters:{
        fullName(state){
          return state.firstName +"-"+ state.lastName
        }
      }
    })
    export default store
  ```

# 访问Getter
  Getter 会暴露为 `store.getters` 对象，你可以以属性的形式访问这些值
  ``` js
    //app.vue
    export default {
        name: "App",
        computed:{
          fullName(){
            return this.$store.getters.fullName
          }
        }
    }
  ```

# 源码
 > [code](code/getter)
 > [计算器](code/count2)
