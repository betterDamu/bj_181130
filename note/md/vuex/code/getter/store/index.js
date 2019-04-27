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
