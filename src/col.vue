<template>
    <div class="col" :class="[`col-${span}`,`offset-${offset}`]"
    :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PFCol",
        props:{
            span:{type:[Number,String]},
            offset:{type:[Number,String]},
        },
        data(){
            return {
                gutter:0
            }
        },
    };
</script>

<style lang="scss" scoped>
    .col{
        height: 100px;
        width: 50%;
    }

    $class-prefix: col-;
    @for $n from 1 through 24 {
        .#{$class-prefix}#{$n} {
            width: ($n/24)*100%;
        }
    }
    $class-prefix: offset-;
    @for $n from 1 through 24 {
        .#{$class-prefix}#{$n} {
            margin-left: ($n/24)*100%;
        }
    }

    .content{
        border: 1px solid blue;
        height: 100%;
    }
</style>
