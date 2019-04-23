var MyPlugin ={};
MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或属性(静态方法)
    Vue.myGlobalMethod = function () {
        console.log("myGlobalMethod")
    }

    // 2. 添加全局资源
    Vue.directive('move', {
        bind (el,binding) {
            el.style.transition="3s";
            setTimeout(()=>{
                el.style.transform=`translateX(${binding.value}px)`;
            },1000)
        }
    })

    // 3. 注入组件选项
   Vue.component("damu",{
       template:"<span>达姆</span>"
   })

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
        // 逻辑...
    }
}