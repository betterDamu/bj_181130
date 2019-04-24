<template>
  <div id="app">
    {{count}} 当前数是 <span style="font-size: 60px;color: red">{{countType}}</span><br>
    <button @click="inc({step:1,name:`damu`})">+</button>
    <button @click="dec({step:1,name:`xfz`})">-</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations} from "vuex"    // {mapState:fn}
export default {
  name: 'App',
  computed:{
    /*
    {
      count:function(){
        return this.$store.state.count;
      }
    }
    */
    ...mapState(["count" ]),
    /*{
      countType:function(){
        return this.$store.getters.countType
      }
    }*/
    ...mapGetters(["countType"]),
  },
  methods:{
    ...mapMutations(["inc","dec"]),
    // inc(){
    //   // 改仓库中的数据  触发一个Mutation
    //   this.$store.commit('inc',{step:1,name:"damu"})
    // },
    // dec(){
    //   this.$store.commit('dec',{step:1,name:"xfz"})
    // }
  }
}
</script>

<style>

</style>
