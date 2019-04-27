# vue安装
   > 直接下载并用 `<script>` 标签引入，Vue(本身是一个构造函数) 会被注册为一个全局变量
#  hello world(声明式渲染)
   > Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统
    
    当创建一个 Vue 实例时，你可以传入一个选项对象(vue的配置对象)
    html:
        <div id="app">
          {{ message }}
        </div>
    js:
        var app = new Vue({
          el: '#app',
          data: {
            message: 'Hello Vue!'
          }
        })
#  响应式
  > vue data对象的所有属性都会转绑给对应的vue实例  
  
    var data = { a: 1 }
    var vm = new Vue({
      data: data
    })
    vm.a == data.a // => true
    
  > vue中的数据都是响应式的  修改数据会引发页面的重新绘制(数据单向流)
    
    当一个 Vue 实例被创建时，它将 data 对象中的所有的属性加入到 Vue 的响应式系统中。
    当这些属性的值发生改变时，视图将会产生“响应”，即匹配更新为新的值.
    
  > 值得注意的是只有当实例被创建时 data 中存在的属性才是响应式的
  
    如果你知道你会在晚些时候需要一个属性，但是一开始它为空或不存在，
    那么你仅需要设置一些初始值。比如：
    data: {
      newTodoText: '',
      visitCount: 0,
      hideCompletedTodos: false,
      todos: [],
      error: null
    }
      
        
#  数据双向绑定(数据双向流)
  > 数据单向流是由modle层指向view层 
  
  > 数据的双向流则是由modle层指向view层 &&& 由view层指向modle层 
        
        你可以用 v-model 指令在表单 <input>、<textarea> 及 <select> 元素上创建双向数据绑定。
        它会根据控件类型自动选取正确的方法来更新元素。它负责监听用户的输入事件以更新数据
        
        html:
            <input v-model="message" placeholder="edit me">
            <p>Message is: {{ message }}</p>
        js:
            var app = new Vue({
                el:"#app",
                data:{
                    message:"hello vue"
                }
            })
    
     
  
  
   







