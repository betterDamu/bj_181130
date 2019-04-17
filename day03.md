## Vue构造
    Vue.set()
    Vue.component()
    Vue.config.productionTip
## Vue的配置对象
    el (根组件有  子组件不能存在)
    data (根组件data可以是对象  子组件data一般都一个函数)
    components
    template(会覆盖el)
    
    
    beforeCreate(){
        console.log("beforeCreate")
    },
    created(){
        console.log("created")
    },
    beforeMount(){
        console.log("beforeMount")
    },
    mounted(){
        //操作dom都应该在当前这个钩子进行编写
        console.log("mounted")
    },
    beforeUpdate(){
        console.log("beforeUpdate")
    },
    updated(){
        console.log("updated")
    },
    beforeDestroy(){
        //做收尾工作  清除定时器
        console.log("beforeDestroy")
    },
    destroyed(){
        console.log("destroyed")
    }
    
    
    props:["自定义标签属性"]
    computed:{
        //1. 初始化的时候会调用一次对应的函数
        //2. 当关联的属性被修改时 对应的函数也会被调用一次
        //3. 有缓存的
        属性名(){
        
        },
        属性名:{
            get(){}  // 负责值的获取
            set(){}  // 负责值的设置
        }
    }
    watch:{
        属性名(){
              // 手动的修改值
        }
    }
    methods:{
        属性名(){
            
        }
    }
    
   
## vm
    $root
    $el
    $options
    $data
    
    $mount()
    $on()
    $once()
    $emit()
    $off()
    
    vm.$set()
    
    vm.$watch()
## 指令
    {{}}
    v-text
    v-html
    
    v-show
    v-if
    v-else-if
    v-else
    v-for
    
    v-on    @click.stop   @keyup.enter
    v-bind  :
        :class
            字符串
            对象 {className:布尔值}
            数组  [字符串,字符串]   [{className:布尔值},{className:布尔值}]
        :style
            对象  {css属性名:css属性名对应的值,css属性名:css属性名对应的值}
            数组  [{css属性名:css属性名对应的值},{css属性名:css属性名对应的值}]
    v-model
    
    v-pre
    v-cloak
        闪屏:  vue运行时编译!!!(静态编译webpack)
    v-once
    
## 组件
    全局组件
    局部组件
    父组件往子组件传值