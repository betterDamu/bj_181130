<template>
  <div>
    <counter></counter>
    {{damu}}
    <button @click="handleC">damu</button>
  </div>
</template>

<script type="text/ecmascript-6">
    import counter from "./components/count"
    import Vue from "vue"

    export default {
        name: "App",
        components:{
          counter
        },
        computed:{
          damu(){
            return this.$store.state.damu
          }
        },
        methods:{
          handleC(){
            //this.$store.state.damu="达姆"
            // Vue.set(this.$store.state, 'damu', "达姆")
            this.$store.commit("damu")
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
