<template>
  <div id="app">
    <elm-header></elm-header>
    <nav class="nav">
      <div class="seller">
        <router-link to="/seller">seller</router-link>
      </div>
      <div class="goods">
        <router-link to="/goods">goods</router-link>
      </div>
      <div class="ratings">
        <router-link to="/ratings">ratings</router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from "@/components/elm-header.vue"
  export default {
    name: 'App',
    components:{
      "elm-header":header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    #app
      .nav
        display flex
        &>div
          flex 1
          text-align center
          &.seller
            background pink
          &.goods
            background deeppink
          &.ratings
            background gray
</style>
