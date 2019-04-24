import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex)

//建仓库
import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
