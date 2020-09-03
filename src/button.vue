<template>
    <button class="pf-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
        <pf-icon v-if="loading" name="loading" class="icon loading"></pf-icon>
        <pf-icon v-if="icon&&!loading" :name="icon" class="icon"></pf-icon>
        <div class="content"><slot></slot></div>
    </button>
</template>

<script>
    import Icon from "./icon";

    export default {
        // props:['icon','iconPosition']
        name:'PFButton',
        components:{
            "pf-icon":Icon
        },
        props: {
            icon: {},
            iconPosition: {
                type: String,
                default: 'left',
                validator(value){
                    return value==='left'||value==='right'
                }
            },
            loading:{
                type: Boolean,
                default: false
            }
        }
    };
</script>

<style lang="scss" scoped>
    $button-height: 32px;
    $font-size: 14px;
    $button-bg: white;
    $button-active-bg: #eee;
    $border-radius: 4px;
    $color: #333;
    $border-color: #999;
    $border-color-hover: #666;
    @keyframes spin{
        0%{transform:rotate(0deg);}
        100%{transform:rotate(360deg);}
    }
    .pf-button {
        font-size: $font-size;
        height: $button-height;
        padding: 0 1em;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        background: $button-bg;
        display:inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover {
            border-color: $border-color-hover;
        }

        &:active {
            background-color: $button-active-bg;
            > .content{
                background-color: $button-active-bg;
            }
        }

        /*取消按钮按下时的默认样式轮廓*/
        &:focus {
            outline: none;
        }

        > .icon{order:1; margin-right:.3em;}
        > .content{order:2;}

        &.icon-right {
            > .content {order:1;}
            > .icon {order:2; margin-right:0; margin-left:.3em;}
        }

        .loading{
            animation: spin 2s infinite linear;
        }
    }


</style>
