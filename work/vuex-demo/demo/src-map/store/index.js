import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex) // 一旦使用了vuex插件 所有的组件对象都会有一个$store属性

//建仓库   所有Store配置对象里的属性都会转绑给store对象
const store = new Vuex.Store({
  // 数据    state中的所有数据在组件中都应该使用计算属性来与之匹配
  state:{
    count:0
  },
  getters:{
    countType(state){
      return state.count%2 === 0 ? "偶数":"奇数";
    }
  },
  //处理数据的工具
  mutations:{
    inc(state,obj){
      console.log(obj.step,obj.name)
      state.count+=obj.step;
    },
    dec(state,obj){
      console.log(obj.step,obj.name)
      state.count-=obj.step;
    }
  },

})



export default store
