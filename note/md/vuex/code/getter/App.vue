<template>
  <div>
    {{fullName}}
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "App",
        computed:{
          fullName(){
            return this.$store.getters.fullName
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
