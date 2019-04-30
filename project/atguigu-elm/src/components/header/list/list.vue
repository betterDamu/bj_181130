<template>
  <ul class="list">
    <li v-for="item in supports">
      <i class="icon" :class="classMap[item.type]"></i>
      <span>{{item.description}}</span>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "elm-list",
        props:{
          supports:Array,
          classMap:Array
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/mixin.styl"
  .list
    width 80%
    margin 0 auto
    padding-left 12px
    margin-top 24px
    margin-bottom 28px
    li
      text-align: left;
      margin-bottom 12px
      &:last-child
        margin-bottom 0px
      .icon
        background-size 100% 100%
        display inline-block
        width 16px
        height 16px
        margin-right 6px
        vertical-align top
        &.decrease
          bg-image(decrease_2)
        &.discount
          bg-image(discount_2)
        &.guarantee
          bg-image(guarantee_2)
        &.invoice
          bg-image(invoice_2)
        &.special
          bg-image(special_2)
</style>
