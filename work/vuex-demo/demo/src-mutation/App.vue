<template>
  <div id="app">
    {{count}} 当前数是 <span style="font-size: 60px;color: red">{{countType}}</span><br>
    <button @click="inc({step:1,name:`damu`})">+</button>
    <button @click="dec({step:1,name:`xfz`})">-</button>
    <br>  {{fullNmae}}
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations} from "vuex"    // {mapState:fn}
export default {
  name: 'App',
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
  }
}
</script>

<style>

</style>
