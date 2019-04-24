import  {REQ_ING_USERS,REQ_FAIL_USERS,REQ_SUCCESS_USERS_HAS,REQ_SUCCESS_USERS_NONE} from "./mutation_names"
import axios from "axios"
export default {
  async Search({commit,state}){
    const url = `https://api.github.com/search/users?q=${state.searchName}`;
    //请求中
    commit(REQ_ING_USERS)
    try {
      const response =  await axios.get(url);
      let  items = response.data.items;
      //请求成功
      if(items.length){
        //有用户
        items = items.map(item => ({
          href:item.html_url,
          src:item.avatar_url,
          name:item.login
        }))
        commit(REQ_SUCCESS_USERS_HAS,items)
      }else {
        //没用户
        commit(REQ_SUCCESS_USERS_NONE)
      }
    }catch (e) {
      //请求失败
      commit(REQ_FAIL_USERS,{errorMsg:e})
    }
  }
}
