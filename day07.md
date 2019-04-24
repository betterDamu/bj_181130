# vue-resource (vue的插件)
    npm i vue-resource 
    
    import Vue from "vue"
    import VueResource from "vue-resource"
    Vue.use(VueResource) // 会为所有的vm实例加上一个$http属性  {get:fn,post:fn}
    
    组件内部
        async mounted(){
            const response = await this.$http.get(url)
        }
# axios (第三方独立的库)
    npm i axios 
    
    组件内部
        import axios from "axios"
        async mounted(){
            const response = await axios.get(url)
        }
    
# vuex
    npm i vuex 
## 建仓库
    import Vue from "vue"
    import Vuex from "vuex"
    Vue.use(Vuex)
    
    const store = new Vuex.Stroe({
        //数据
        state:{
            key:value
        },
        //处理数据的工具
        getters:{},
        mutations:{}
    })
    
    export default store

## 注册仓库
    在 main.js 中注册
    import store from "./store"
    new Vue({
        store
    })
    
### 使用仓库中的数据
    所有的组件对象都会有一个$store属性  代表vuex的仓库
    仓库中所有配置都会挂给仓库对象
    {{this.$store.state.key}}
### 修改仓库中的数据   
#### 使用仓库中的数据的一个注意点  (希望修改了仓库数据后可以在页面上响应式的展示)
        最好不要直接使用仓库的数据   {{this.$store.state.key}}
        一般都要拿一个计算属性与仓库中数据做一一对应
            {{mykey}}
            computed:{
                myKey:this.$store.state.key
            }
            辅助函数
                import {mapState} from "vuex"
                {{mykey}}
                computed:{
                    ...mapState({
                        mykey:"key"
                    })
                }
            
            {{key}}
            computed:{
                key:this.$store.state.key
            }
             辅助函数
                import {mapState} from "vuex"
                {{key}}
                computed:{
                    ...mapState(["key"])
                }
            
          
    
    
    
#### 修改(定义mutations)
    如果需要修改仓库中的数据 一定要在仓库内部定义修改数据的工具(mutations)
     const store = new Vuex.Stroe({
        //数据
        state:{
            key:value
        },
        //处理数据的工具
        mutations:{
            name(state){
                修改仓库数据
                state.key = otherVal
            }
        }
      })
#### 提交mutation
    <span @click="name"></span>    
    methods:{
        name(){
            this.$store.commit(name,obj)
        }
    }
    
    辅助函数
        import {mapMutations} from "vuex"
         <span @click="name"></span>    
        computed:{
            ...mapMutations(["name"])
        }
           