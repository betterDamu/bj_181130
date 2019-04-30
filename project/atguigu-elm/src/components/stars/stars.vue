<template>
    <div class="stars" :class="starsType">
      <span v-for="itemClass in itemClasses" class="star" :class="itemClass"></span>
      <!--<span class="star on"></span>
      <span class="star on"></span>
      <span class="star on"></span>
      <span class="star half"></span>
      <span class="star off"></span>-->
    </div>
</template>

<script type="text/ecmascript-6">
    const LENGTH = 5;
    const ON = "on";
    const HALF = "half";
    const OFF = "off";

    export default {
        name: "stars",
        props:{
          size:Number,
          score:Number
        },
        computed:{
          starsType(){
            return "stars-"+this.size
          },
          itemClasses(){
            let result =[];

            // 4.1   [ON,ON,ON,ON.OFF]
            // 4.6   [ON,ON,ON,ON.HALF]
            // 3.9   [ON,ON,ON,HALF.OFF]

            //  0  0.5  1  1.5  2  2.5  3  3.5  4  4.5   5
            let score = Math.floor(this.score*2)/2;
            let fullStarSize = Math.floor(score);
            let hasSmallNum = score%1 !==0;

            for(let i=0;i<fullStarSize;i++){
              result.push(ON)
            }
            if(hasSmallNum){
              result.push(HALF)
            }
            while (result.length < LENGTH){
              result.push(OFF)
            }

            return result;
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import "../../common/mixin.styl"
    .stars
      font-size 0
      .star
        display inline-block
        background-size 100% 100%
        background-repeat no-repeat
      &.stars-48
        .star
          width 20px
          height 19px
          margin-right 15px
          &:last-child
            margin-right 0
          &.on
            bg-image("star48_on")
          &.half
            bg-image("star48_half")
          &.off
            bg-image("star48_off")
      &.stars-36
        .star
          width 15px
          height 15px
          margin-right 10px
          &:last-child
            margin-right 0
          &.on
            bg-image("star36_on")
          &.half
            bg-image("star36_half")
          &.off
            bg-image("star36_off")
      &.stars-24
        .star
          width 10px
          height 10px
          margin-right 5px
          &:last-child
            margin-right 0
          &.on
            bg-image("star24_on")
          &.half
            bg-image("star24_half")
          &.off
            bg-image("star24_off")

</style>
