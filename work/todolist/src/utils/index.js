const todokey = "todos";
const idkey = "itemId";

export default {
  getTodos(){
    return JSON.parse(localStorage.getItem(todokey)?localStorage.getItem(todokey):"[]");
  },
  setTodos(val){
    console.log(val)
    localStorage.setItem(todokey,JSON.stringify(val))
  },

  getIdkey(){
    return JSON.parse(localStorage.getItem(idkey)?localStorage.getItem(idkey):"1");
  },
  setIdkey(val){
    console.log(val)
    localStorage.setItem(idkey,JSON.stringify(val))
  }
}
