# vue计算属性
     模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。
     在模板中放入太多的逻辑会让模板过重且难以维护.
     所以，对于任何复杂逻辑，你都应当使用计算属性
     <div id="example">
       {{ message.split('').reverse().join('') }}
     </div>

    
## 使用计算属性     
     html
        <div id="example">
          <p>Original message: "{{ message }}"</p>
          <p>Computed reversed message: "{{ reversedMessage }}"</p>
        </div>
     
     js
        var vm = new Vue({
          el: '#example',
          data: {
            message: 'Hello'
          },
          computed: {
            // 计算属性的 getter
            reversedMessage: function () {
              // `this` 指向 vm 实例
              return this.message.split('').reverse().join('')
            }
          }
        })
        
    这里我们声明了一个计算属性 reversedMessage。我们提供的函数将用作属性 vm.reversedMessage 的 getter 函数
 
 ## 计算属性的特点
     vm.reversedMessage 的值始终取决于 vm.message 的值。  
     你可以像绑定普通属性一样在模板中绑定计算属性。Vue 知道 vm.reversedMessage 依赖于 vm.message，
     因此当 vm.message 发生改变时，所有依赖 vm.reversedMessage 的绑定也会更新
     
     计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值。
     多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数
 
 ## 计算属性的 setter
     计算属性默认只有 getter ，不过在需要时你也可以提供一个 setter ：
     
     computed: {
       fullName: {
         // getter
         get: function () {
           return this.firstName + ' ' + this.lastName
         },
         // setter
         set: function (newValue) {
           var names = newValue.split(' ')
           this.firstName = names[0]
           this.lastName = names[names.length - 1]
         }
       }
     }    
     
 ## 计算属性 vs 方法
    每当触发重新渲染时，调用方法将总会再次执行函数
    
 ## 计算属性 vs 侦听器
    Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：侦听属性。
    当你有一些数据需要随着其它数据变动而变动时，你很容易滥用 watch——特别是如果你之前使用过 AngularJS。
    然而，通常更好的做法是使用计算属性而不是命令式的 watch 回调
    
    <div id="demo">{{ fullName }}</div>
    var vm = new Vue({
      el: '#demo',
      data: {
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar'
      },
      watch: {
        firstName: function (val) {
          this.fullName = val + ' ' + this.lastName
        },
        lastName: function (val) {
          this.fullName = this.firstName + ' ' + val
        }
      }
    })
    
### vm.$watch
    除了 watch 选项之外，您还可以使用命令式的 vm.$watch API。
    vm.$watch('a.b.c', function (newVal, oldVal) {
      // 做点什么
    })
    
    

    
    
    
 
       
    
       