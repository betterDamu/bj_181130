import  {SEARCH_NAME,REQ_ING_USERS,REQ_FAIL_USERS,REQ_SUCCESS_USERS_HAS,REQ_SUCCESS_USERS_NONE} from "./mutation_names"
export default {
  [SEARCH_NAME](state,obj){
    state.searchName = obj.searchName
  },
  [REQ_ING_USERS](state){
    state.firstShow = false;
    state.loading = true
  },
  [REQ_FAIL_USERS](state,obj){
    state.firstShow = false;
    state.loading = false;
    state.errorMsg = obj.errorMsg
  },
  [REQ_SUCCESS_USERS_NONE](state){
    state.firstShow = false;
    state.loading = false;
    state.errorMsg = ""
    state.noneMsg = "查无此人";
  },
  [REQ_SUCCESS_USERS_HAS](state,users){
    state.firstShow = false;
    state.loading = false;
    state.errorMsg = ""
    state.users = users;
  },

}
