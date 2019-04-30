<template>
  <div class="info">
    <i class="line"></i>
    <slot>
      <span class="text">xxxx</span>
    </slot>
    <i class="line"></i>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "elm-title"
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .info
    width 80%
    margin 0 auto
    display flex
    align-items center
    & > .text
      margin 0 12px
    & > .line
      flex 1
      height 2px
      background rgba(255,255,255,.2)
</style>
