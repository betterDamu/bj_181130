<template>
  <div>
    <counter></counter>
  </div>
</template>

<script type="text/ecmascript-6">
    import counter from "./components/count"
    import Vue from "vue"

    export default {
        name: "App",
        components:{
          counter
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
