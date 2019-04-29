<template>
    <div class="head">
        <div class="content">
          <img class="avatar" src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg">
          <div class="info">
            <div class="title">
              <i class="brand"></i>
              <span>粥品香坊（回龙观）</span>
            </div>
            <div class="send">
              <span>蜂鸟专送/38分钟送达</span>
            </div>
            <div class="supports">
              <i class="icon guarantee"></i>
              <span>在线支付满100送老板</span>
            </div>
          </div>
          <div class="btn">
            <span>5个</span>
            <i class="icon-tux"></i>
          </div>
        </div>
        <div class="bulletin"></div>
        <div class="bg"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "elm-header"
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/mixin.styl"
  .head
    position relative
    background-color rgba(7,17,27,0.5)
    overflow hidden
    .content
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
        bottom 10px
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
      zoom 1
    .bg
      z-index -1
      position absolute
      left 0
      right 0
      top 0
      bottom 0
      background-image url("http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg")
      background-size 90%
      filter blur(10px)
</style>
