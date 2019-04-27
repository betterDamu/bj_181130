import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex)
const store = new Vuex.Store({
  strict: true,
  state:{
    count:0
  },
  mutations:{
    inc(state,obj){
      state.count+=obj.amount
    },
    dec(state){
      state.count--
    },
    damu(state){
      //state.damu="达姆"
      Vue.set(state, 'damu', "达姆")
    }
  }
})
export default store
