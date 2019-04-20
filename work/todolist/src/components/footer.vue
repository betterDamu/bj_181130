<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="selectAll" />
    </label>
    <span>
          <span>已完成 <i style="color:red;font-size: 20px">{{completedCount}}</i> </span>
          ; 全部 <i style="color:green;font-size: 20px">{{todos.length}}</i>
        </span>
    <button class="btn btn-danger" v-show="completedCount" @click="_clearCompleted">清除已完成任务</button>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "todo-footer",
        props:{
          todos:Array,
          clearCompleted:Function
        },
        computed:{
          completedCount(){
            return this.todos.reduce((adder,item)=>{
                var val = item.completed?1:0;
                return adder + val;
            },0)
          },
          selectAll:{
            get(){
              return (this.completedCount === this.todos.length )&&(this.todos.length)
            },
            set(val){
              this.$emit("sellectAll",val)
            }
          }
        },
        methods:{
          _clearCompleted(){
            //this.$emit("clearCompleted");
            this.clearCompleted();
          }
        }
    }
</script>

<style  scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
