import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex) // 一旦使用了vuex插件 所有的组件对象都会有一个$store属性

//建仓库   所有Store配置对象里的属性都会转绑给store对象
const store = new Vuex.Store({
  // 数据
  state:{
    count:0
  }
  //处理数据的工具
})


export default store
