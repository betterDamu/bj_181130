<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <todo-header></todo-header>
        <todo-list :todos="todos"></todo-list>
        <todo-footer></todo-footer>
      </div>
    </div>
  </div>
</template>

<script >
  import header from "./components/header"
  import list from "./components/list"
  import footer from "./components/footer"
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
    components:{
      "todo-header":header,
      "todo-list":list,
      "todo-footer":footer
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
