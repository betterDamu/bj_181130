<template>
    <div>
      {{count}} 当前数是 <span style="font-size: 60px;color: red">{{countType}}</span><br>
      <button @click="inc({step:1,msg:`同步修改count数据`})">+</button>
      <button @click="dec({step:1,msg:`同步修改count数据`})">-</button>
      <br>  {{fullNmae}} <br>
      <button @click="asyncInc({step:1,msg:`2s之后异步修改count数据`})">async 2s later</button>
    </div>
</template>

<script type="text/ecmascript-6">
  import {mapState,mapGetters,mapMutations,mapActions} from "vuex"    // {mapState:fn}
  export default {
    name: 'count',
    data(){
      return {
        firstName:"T",
        lastName:"Mac"
      }
    },
    computed:{
      fullNmae(){
        return this.firstName + "-" + this.lastName
      },
      ...mapState(["count"]),
      ...mapGetters(["countType"]),
    },
    methods:{
      ...mapMutations(["inc","dec"]),
      ...mapActions(["asyncInc"])
      /*asyncInc(obj){
        // 调用(转发)一个action
        this.$store.dispatch("asyncInc",obj)
      }*/
    }
  }
</script>

<style  scoped>

</style>
