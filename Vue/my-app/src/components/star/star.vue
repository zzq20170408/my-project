<template>
  <div class="star" :class="starType">
      <span 
        v-for="itemClass in itemClasses" 
        :class="itemClass" 
        class="star-item"
        :key="itemClass+Math.random()"
      ></span>
  </div>
</template>
<script>
    const LENGTH = 5;
    const CLS_ON = 'on';
    const CLS_HALF = 'half';
    const CLS_OFF = 'off';
    export default {
        props: {
            size: {
                type: Number
            },
            score: {
                type: Number
            }
        },
        computed: {
            starType () {
                return 'star-' + this.size;
            },
            itemClasses () {
                let result = [];
                const full = Math.floor(this.score);
                const half = Math.round(this.score) - full;
                for (let i = 0; i < full; i++) {
                    result.push(CLS_ON);
                }
                if (half) {
                    result.push(CLS_HALF);
                }
                while (result.length < LENGTH) {
                    result.push(CLS_OFF);
                }
                return result;
            }
        }
    };
</script>
<style lang="stylus">
@import "../../common/stylus/mixin.styl";
    .star
        .star-item
            font-size 0
            display inline-block
            background-repeat no-repeat
        &.star-48
            .star-item
                width 20px
                height 20px
                margin-right 22px
                background-size 20px 20px
                &.on
                    bg-image('./images/star48_on')
                &.half
                    bg-image('./images/star48_half')
                &.off
                    bg-image('./images/star48_off')
        &.star-36
            .star-item
                width 15px
                height 15px
                margin-right 16px
                background-size 15px 15px
                &.on
                    bg-image('./images/star36_on')
                &.half
                    bg-image('./images/star36_half')
                &.off
                    bg-image('./images/star36_off')
        &.star-24
            .star-item
                width 10px
                height 10px
                margin-right 3px
                background-size 10px 10px
                &.on
                    bg-image('./images/star24_on')
                &.half
                    bg-image('./images/star24_half')
                &.off
                    bg-image('./images/star24_off')
</style>

