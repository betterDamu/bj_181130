<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <todo-header :addTodo="addTodo"></todo-header>
        <todo-list :todos="todos" ></todo-list>
        <todo-footer :todos="todos" @sellectAll="sellectAll" @clearCompleted="clearCompleted"></todo-footer>
      </div>
    </div>
  </div>
</template>

<script >
  import header from "./components/header"
  import list from "./components/list"
  import footer from "./components/footer"
  import PubSub from "pubsub-js";
  export default {
    name: 'App',
    data(){
      return {
        todos:[
          {
            id:0,
            text:"吃饭xxxx",
            completed:false
          },
          {
            id:1,
            text:"睡觉",
            completed:false
          },
          {
            id:2,
            text:"敲代码",
            completed:false
          },
          {
            id:3,
            text:"打篮球",
            completed:false
          },
          {
            id:4,
            text:"吃把鸡",
            completed:false
          }
        ]
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
    components:{
      "todo-header":header,
      "todo-list":list,
      "todo-footer":footer
    },
    mounted(){
     /* PubSub.subscribe('deleteTodo', (msg, id)=> {
          this.todos = this.todos.filter((item)=>{
            return item.id !== id;
          })
      });*/
      this.todoBus.$on("deleteTodo",(id)=> {
        this.todos = this.todos.filter((item)=>{
          return item.id !== id;
        })
      })
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
