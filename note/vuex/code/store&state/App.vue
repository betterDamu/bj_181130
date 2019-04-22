<template>
  <div>
    {{count}}
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "App",
        data(){
          return {
            count:this.$store.state.count
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
