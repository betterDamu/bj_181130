<template>
  <div>
    <p>value is <span class="count">{{count}}</span> 是一个<span class="flag">{{flag}}</span></p>
    <button @click="inc({amount:2})">+</button>
    <button @click="dec">-</button>
    <p>{{fullName}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
    import {mapGetters,mapState,mapMutations} from "vuex"

    export default {
        name: "count",
        data(){
          return{
            firstName:"T",
            lastName:"mac"
          }
        },
        computed:{
          fullName(){
            return this.firstName +"-"+ this.lastName
          },
          ...mapState(["count"]),
          ...mapGetters(["flag"])
        },
        methods:{
          ...mapMutations(["inc","dec"])
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .count
      color red
      font-weight 600
    .flag
      color red
      font-weight 600
</style>
