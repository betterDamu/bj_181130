<template>
  <li @mouseenter="isShow = !isShow" @mouseleave="isShow = !isShow" :class="{highlight:isShow}">
    <label>
      <input type="checkbox" v-model="todo.completed" />
      <span>{{todo.text}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="handleC">删除</button>
  </li>
</template>

<script type="text/ecmascript-6">
    import PubSub from "pubsub-js";
    export default {
        name: "todo-item",
        data(){
          return {
            isShow:false
          }
        },
        props:{
          todo:Object
        },
        methods:{
          handleC(){
            // PubSub.publish('deleteTodo', this.todo.id);
            this.todoBus.$emit("deleteTodo",this.todo.id)
          }
        }
    }
</script>

<style  scoped>
  li.highlight{
    background: pink;
  }

  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
