<template>
  <div id="app">
    <elm-header :seller="seller"></elm-header>
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
  import axios from "axios"
  import header from "@/components/header/elm-header.vue"

  const OK = 0;
  export default {
    name: 'App',
    components:{
      "elm-header":header
    },
    data(){
      return {
        seller:{}
      }
    },
    mounted(){
      axios.get("/api/seller").then((res)=>{
            const sellerData = res.data;
            if(sellerData.errno === OK){
                this.seller = sellerData.data;
            }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import "./common/mixin.styl"
    #app
      .nav
        border-1px(rgba(7,17,27.0.1))
        display flex
        height 40px
        line-height 40px
        font-size 14px
        color rgb(77,85,93)
        &>div
          flex 1
          text-align center
          a
            display block
            &.active
              color rgb(240,20,20)
</style>
