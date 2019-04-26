<template>
    <div>
      {{count}} 当前数是 <span style="font-size: 60px;color: red">{{countType}}</span><br>
      <button @click="inc({step:1,name:`damu`})">+</button>
      <button @click="dec({step:1,name:`xfz`})">-</button>
      <br>  {{fullNmae}} <br>
      <button @click="asyncInc({step:1})">async 2s later</button>
    </div>
</template>

<script type="text/ecmascript-6">
  import {mapState,mapGetters,mapMutations} from "vuex"    // {mapState:fn}
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
      ...mapMutations(["inc","dec","asyncInc"]),
    }
  }
</script>

<style  scoped>

</style>
