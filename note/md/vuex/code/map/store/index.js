import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex)
const store = new Vuex.Store({
  strict: true,
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
    }
  }
})
export default store
