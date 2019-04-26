## 作用域&作用域链  
    变量的查找
## 执行上下文&执行上下文栈
    变量提升  函数提升 
    this的指向 & arguments
    闭包
## 原型&原型链
    所有的对象都有隐式原型 __proto__
    所有的函数都有显示原型 prototype
    对象的隐式原型 __proto__ 指向其构造函数的显示原型 prototype
    Object.prototype.__proto__  === null  原型链的头
        函数也是对象
        在js中不分构造函数 普通函数,只分函数的构造调用 普通调用
    
    原型链继承（找属性？）
        自定义构造函数？  
            function Person(age,name){
                this.age = age;
                this.name = name
            }
            var p = new Person(18,"damu");

    js属性: 数据描述符(writable value)  访问描述符(get set)
    js属性的特征
        writable value   控制属性的读写权限
        configurable     控制属性的可配置权限(可否重新配置  可否删除)
        enumerable       控制属性的可枚举权限(可否出现在对象的for in循环中)
        
        get set           控制属性的读写权限
    存在性检测
        in
    对象的不变性
        常量属性
        禁止对象的扩展
        密封对象
        冻结对象
    属性的查找与设置 (数据描述符)
        查找: 先在对象的直接属性中  找不到上原型链  原型链都没有返回undefined
        设置: 影响对象的直接属性 
    属性的查找与设置  (完整的规则)
        [[Get]]：
            1.在对象中查找是否具有相同名称的属性，如果找到，就会返回这个属性的值。
            2.如果没有找到，则遍历原型链
            3.无论·如何都没找到，返回undefined    
            4.如果属性是访问描述符 看get方法的逻辑
        [[put]]：
            1.如果属性直接存在于对象中　不在原型链上
                 找到直接存在于对象中的属性
                 -数据描述符(没有setter/getter)
                     直接修改对象中的属性(注意writbale的值)
                 -访问描述符
                     直接调用set方法
                 
            2.如果属性不直接存在于对象中也不在原型链上
            在对象的直接属性中添加一个属性（数据描述符）    
                 value:"a"
                 writable:true
                 configurable:true
                 enumerable:true
            
            3.如果属性不直接存在于对象中  在原型链上
                 ①.该属性是数据描述符(没有setter/getter)
                     -writbale为true
                 直接在对象中添加一个属性，我们称之为屏蔽属性
                     -writbale为false
                     报错，不会生成屏蔽属性
         
                 ②.该属性是访问描述符
                     调用set，不会生成屏蔽属性
         
                 
            4.如果属性直接存在于对象中  也在原型链上
                 找到直接存在于对象中的属性
                 -数据描述符(没有setter/getter)
                     直接修改对象中的属性(注意writbale的值)
                 -访问描述符
                     直接调用set方法    
                
## 异步编程
    回调地狱 + promise + generator + async
## 模块化
    cmd amd commonjs es6
    
    
    
        
    
  