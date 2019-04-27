# 插值表达式
    数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值：
        <span>Message: {{ msg }}</span
    在我们的模板中，我们一直都只绑定简单的属性键值。但实际上，对于所有的数据绑定，
    Vue.js 都提供了完全的 JavaScript 表达式支持    
        {{ number + 1 }}
        {{ ok ? 'YES' : 'NO' }}
        {{ message.split('').reverse().join('') }}
        
        <!-- 这是语句，不是表达式 -->
        {{ var a = 1 }}
        
        <!-- 流控制也不会生效，请使用三元表达式 -->
        {{ if (ok) { return message } }}
## 注意
    模板表达式都被放在沙盒中，只能访问全局变量的一个白名单，如 Math 和 Date 。
    你不应该在模板表达式中试图访问用户定义的全局变量。 
           
# vue指令
    指令 (Directives) 是带有 v- 前缀的特殊特性。指令特性的值预期是单个 JavaScript 表达式 (v-for
    是例外情况，稍后我们再讨论)。指令的职责是，当表达式的值改变时，将其产生的连带影响，
    响应式地作用于 DOM
### 指令详解(数据绑定)
    v-text
        更新元素的 textContent。如果要更新部分的 textContent ，需要使用 {{ Mustache }} 插值。
    v-html
        更新元素的 innerHTML   

### 指令详解(流程控制)
#### 分支
    v-show
       根据表达式之真假值，切换元素的 display CSS 属性。
    v-if
    v-else
    v-else-if
        根据表达式的值的真假条件渲染元素
        这三个指令一定要连用!
    
#### 循环
    v-for    
        基于源数据多次渲染元素或模板块。
            此指令的值，必须使用特定语法 alias in expression
            <div v-for="(item, index) in arr"></div>
            <div v-for="(val, key, index) in object"></div>
            
#### key值
     Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。
     这么做可以使 Vue 变得非常快. 但这样也不总是符合实际需求，
     所以 Vue 为你提供了一种方式来表达“这两个元素是完全独立的，不要复用它们”。
     只需添加一个具有唯一值的 key 属性即可  

#### 数组更新检测
    由于 JavaScript 的限制，Vue 不能检测以下变动的数组：
        当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue
        当你修改数组的长度时，例如：vm.items.length = newLength
        
    Vue 包含一组观察数组的变异方法，所以它们也将会触发视图更新。这些方法如下：
        push()
        pop()
        shift()
        unshift()
        splice()
        sort()
        reverse()
#### 对象更新检测    
    由于 JavaScript 的限制，Vue 不能检测对象属性的添加或删除   
    对于已经创建的实例，Vue 不能动态添加根级别的响应式属性。
        但是，可以使用 Vue.set(object, key, value) 方法向嵌套对象添加响应式属性
    你还可以使用 vm.$set 实例方法，它只是全局 Vue.set 的别名    

### 指令详解(事件)        
    v-on
        绑定事件监听器,用在普通元素上时，只能监听原生 DOM 事件    
            <button v-on:click="doThis"></button>
            <button @click.stop="doThis"></button>
            <button @click.prevent="doThis"></button>
            <button @click.stop.prevent="doThis"></button>
        修饰符
            .stop - 调用 event.stopPropagation()。
            .prevent - 调用 event.preventDefault()。
            .self - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
            .{keyCode | keyAlias} - 只当事件是从特定键触发时才触发回调。
                13|enter(tab delete esc space up down left  right)
            .once - 只触发一次回调。
            .left - (2.2.0) 只当点击鼠标左键时触发。
            .right - (2.2.0) 只当点击鼠标右键时触发。
            .middle - (2.2.0) 只当点击鼠标中键时触发。
        参数
            默认传递事件的event对象为回调函数的第一个参数
            如果回调函数的第一个参数被占用 则需显示的传递$event标识
 
### 指令详解(样式)
    操作元素的 class 列表和内联样式是数据绑定的一个常见需求。因为它们都是属性，
    所以我们可以用 v-bind 处理它们：只需要通过表达式计算出字符串结果即可。
    因此，在将 v-bind 用于 class 和 style 时，Vue.js 做了专门的增强。
    表达式结果的类型除了字符串之外，还可以是对象或数组。
#### class
    - 表达式的结果为字符串
    - 表达式的结果为对象   
    - 表达式的结果为数组  
           数组包字符串
           数组包对象
#### style
    - 表达式的结果为对象   
    - 表达式的结果为数组    
            数组包对象    
            
### 指令详解(其他)
     v-pre
        跳过这个元素和它的子元素的编译过程。
        可以用来显示原始的标签。
        跳过大量没有指令的节点会加快编译。
     v-cloak
        这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 [v-cloak] { display: none } 一起用时，
        这个指令可以隐藏未编译的标签直到实例准备完毕
     v-once   
        只渲染元素和组件一次。随后的重新渲染，
        元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能        