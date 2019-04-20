<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <todo-header :addTodo="addTodo"></todo-header>
        <todo-list :todos="todos" ></todo-list>
        <todo-footer :todos="todos" @sellectAll="sellectAll" :clearCompleted="clearCompleted"></todo-footer>
      </div>
    </div>
  </div>
</template>

<script >
  /*
    1. 第三方库
    2. 本地文件
      都是相对于当前文件出发的
  */
  import header from "./components/header"
  import list from "./components/list"
  import footer from "./components/footer"
  import PubSub from "pubsub-js";
  import utils from "./utils"
  export default {
    name: 'App',
    data(){
      return {
        todos:[]
      }
    },
    methods:{
      addTodo(todo){
        this.todos.unshift(todo)
      },
      sellectAll(flag){
        this.todos.forEach((item)=>{
          item.completed = flag;
        })
      },
      clearCompleted(){
        this.todos = this.todos.filter((item)=>{
          return  !item.completed;
        })
      }
    },
    mounted(){
      PubSub.subscribe('todoCompleted', (msg, obj)=> {
         this.todos.forEach((item)=>{
           if(item.id === obj.id){
             item.completed = obj.val;
           }
         })
       });
      this.todoBus.$on("deleteTodo",(id)=> {
        this.todos = this.todos.filter((item)=>{
          return item.id !== id;
        })
      });
      //从localStorage中读取数据
      this.todos = utils.getTodos();
    },
    components:{
      "todo-header":header,
      "todo-list":list,
      "todo-footer":footer
    },
    watch:{
      todos:{
        deep:true,
        handler(newVal){
          ///往localStorage中设置数据
          utils.setTodos(newVal)
        }
      }
    }
  }
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
