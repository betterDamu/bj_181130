# 辅助函数
    import { mapState,mapGetters,mapMutations } from 'vuex'
  > 简化业务组件的开发
  - mapState({})  或者  mapState([])
  - mapGetters({}) 或者 mapGetters([])
  - mapMutations({}) 或者 mapMutations([])
  - mapActions({}) 或者 mapActions([])
# 一般规律
  > - vuex中的state 我们在组件中使用时通常需要有对应的computed
  > - vuex中的getters 我们在组件中使用时通常需要有对应的computed
  > - vuex中的mutations 我们在组件中使用时通常需要有对应的methods    
  > - vuex中的actions 我们在组件中使用时通常需要有对应的methods      
  
### mapState用法
    mapState({                            mapState(["count" ])
      myCount:"count"         
    })
    
  > 返回值:
    {                                   {
      myCount: state => state.count        count: state => state.count
    }                                    }
 
### mapGetters用法
    mapGetters({                            
      myFlag: 'flag'
    })
   
  >- 返回值1
    {
       myFlag: () => this.$store.getters.doneTodosCount
    } 
  
    mapGetters(["flag"])  
  >-  返回值2
    {
        flag: () => this.$store.getters.doneTodosCount
    }
 
# 源码
  > [code](code/map)
