<template>
  <div>
    <p>value is <span class="count">{{count}}</span> 是一个<span class="flag">{{flag}}</span></p>
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
          },
          flag(){
            return this.$store.getters.flag
          }
        },
        methods:{
          inc(){
            this.$store.commit({
              type: 'inc',
              amount: 1
            })
          },
          dec(){
            this.$store.commit("dec")
          }
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
