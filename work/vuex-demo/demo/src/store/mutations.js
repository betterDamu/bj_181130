import  {SEARCH_NAME} from "./mutation_names"
export default {
  [SEARCH_NAME](state,obj){
    state.searchName = obj.searchName
  }
}
