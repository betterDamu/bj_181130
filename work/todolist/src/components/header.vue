<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model.trim="text" @keyup.enter="handleKeyUp"/>
  </div>
</template>

<script type="text/ecmascript-6">
    var id = 10;
    export default {
        name: "todo-header",
        data(){
          return {
            text:""
          }
        },
        props:{
          addTodo:Function
        },
        methods:{
          handleKeyUp(){
            //判断输入的文本是不是空白字符 空格
            if(this.text === ""){
              alert("请输入一些数据");
              return;
            }
            //构建一个todo对象
            const todo ={
              id: id++,
              text:this.text,
              completed:false
            }

            // 往 app.vue组件的todos中加一个todo对象
            //this.$emit("addToDo",todo)
            this.addTodo(todo)

            //情况输入框
            this.text = "";
          }
        }
    }
</script>

<style  scoped>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
