<template>
    <div class="head">
        <div class="content">
          <img class="avatar" :src="seller.avatar">
          <div class="info">
            <div class="title">
              <i class="brand"></i>
              <span>{{seller.name}}</span>
            </div>
            <div class="send">
              <span>{{seller.description}}/{{seller.deliveryTime}}分钟送达</span>
            </div>
            <div class="supports" v-if="seller.supports&&seller.supports.length">
              <i  :class="[`icon`,classMap[seller.supports[0].type]]"></i>
              <span>{{seller.supports[0].description}}</span>
            </div>
          </div>
          <div class="btn" v-if="seller.supports&&seller.supports.length" @click="showMaskFn">
            <span>{{seller.supports.length}}个</span>
            <i class="icon-tux"></i>
          </div>
        </div>
        <div class="bulletin" @click="showMaskFn">
          <i class="icon"></i>
          <p class="text">{{seller.bulletin}}</p>
          <i class="icon-tux tux"></i>
        </div>
        <div class="bg">
          <img :src="seller.avatar" >
        </div>
        <transition name="mask">
          <div class="mask" v-show="maskShow">
            <div class="content-wrap">
              <div class="content">
                <h3 class="title">{{seller.name}}</h3>
                <elm-stars :size="48" :score="4.6" class="stars"></elm-stars>
                <elm-title>
                  <span class="text">优惠信息</span>
                </elm-title>
                <elm-list :supports="seller.supports" :classMap="classMap"></elm-list>
                <elm-title>
                  <span class="text">商家公告</span>
                </elm-title>
                <div class="text">
                  <p>
                    {{seller.bulletin}}
                  </p>
                </div>
              </div>
            </div>
            <div class="footer">
              <i class="icon-close close" @click="closeMask"></i>
            </div>
          </div>
        </transition>
    </div>
</template>

<script type="text/ecmascript-6">
    import stars from "@/components/stars/stars.vue"
    import title from "@/components/header/title/title.vue"
    import list from "@/components/header/list/list.vue"

    export default {
        name: "elm-header",
        data(){
          return{
            classMap:["decrease","discount","guarantee","invoice","special"],
            maskShow:false
          }
        },
        props:{
          seller:Object
        },
        methods:{
          showMaskFn(){
            this.maskShow = true;
          },
          closeMask(){
            this.maskShow = false;
          }
        },
        components:{
          "elm-stars":stars,
          "elm-title":title,
          "elm-list":list
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/mixin.styl"
  @import "../../common/transitions.styl"
  @import "../../common/extend.styl"
  .head
    position relative
    background-color rgba(7,17,27,0.5)
    overflow hidden
    & > .content
      font-size 0
      padding 24px 0 18px 24px
      .avatar
        width 64px
        height 64px
        vertical-align top
      .info
        display inline-block
        margin-left 16px
        .title
          margin-top 2px
          margin-bottom 8px
          .brand
              bg-image(brand)
              background-size 100% 100%
              display inline-block
              width 30px
              height 18px
              margin-right 6px
              vertical-align top
          span
              font-size 16px
              color rgb(255,255,255)
              font-weight bold
              line-height 18px
        .send
          span
            color rgb(255,255,255)
            font-size 12px
            line-height 12px
            font-weight 200
        .supports
          margin-top 10px
          margin-bottom 2px
          .icon
            background-size 100% 100%
            display inline-block
            width 12px
            height 12px
            margin-right 4px
            vertical-align top
            &.decrease
              bg-image(decrease_1)
            &.discount
              bg-image(discount_1)
            &.guarantee
              bg-image(guarantee_1)
            &.invoice
              bg-image(invoice_1)
            &.special
              bg-image(special_1)
          span
            font-size 10px
            line-height 12px
            font-weight 200
            color rgb(255,255,255)
      .btn
        position absolute
        right 10px
        bottom 35px
        border-radius 8px
        width 48px
        height 24px
        line-height 24px
        background rgba(0,0,0,0.2)
        font-size 10px
        font-weight 200
        text-align center
        span
          color rgb(255,255,255)
        i
          color rgb(0,0,0)
    .bulletin
      position relative
      height 28px
      line-height 28px
      padding 0 12px 0 12px
      background pink
      background rgba(7,17,27,0.2)
      .icon
        bg-image(bulletin)
        background-size 100% 100%
        float left
        width 22px
        height 12px
        margin-top 7px
        margin-right 4px
      .text
        color rgb(255,255,255)
        font-size 10px
        font-weight 200
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
      .tux
        color rgb(255,255,255)
        font-size 10px
        position absolute
        right 0
        top 7px
    .bg
      z-index -1
      position absolute
      left 0
      right 0
      top 0
      bottom 0
      filter blur(10px)
      img
        position absolute
        left 0
        top 0
        width 100%
        height 100%
    .mask
      position fixed
      z-index 99
      left 0
      top 0
      width 100%
      height 100%
      background rgba(7,17,27,.8)
      overflow auto
      .content-wrap
        @extend .clearfix
        min-height 100%
        .content
          @extend .clearfix
          color white
          font-size 12px
          padding-top 64px
          padding-bottom 64px
          text-align center
          .title
            font-size 16px
            font-weight 700
            line-height 16px
            color rgba(255,255,255,1)
          .stars
            margin-top 16px
            margin-bottom 28px
          & > .text
            width 80%
            margin 0 auto
            margin-top 24px
            & > p
              padding 0 12px
              font-size 12px
              line-height 24px
              color rgba(255,255,255,1)
              font-weight 200
              text-align left
      .footer
        margin-top -64px
        text-align center
        .close
            color rgba(255,255,255,.5)
            font-size 32px
</style>
