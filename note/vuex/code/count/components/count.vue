<template>
  <div>
    {{count}}
    <button @click="inc">+</button>
    <button @click="dec">-</button>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "count",
        computed:{
          count(){
            return this.$store.state.count
          }
        },
        methods:{
          inc(){
            this.$store.state.count++
          },
          dec(){
            this.$store.state.count--
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
