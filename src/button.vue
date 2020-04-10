<template>
    <button class="pf-button" :class="{[`icon-${iconPosition}`]:true}">
        <pf-icon v-if="icon" :name="icon" class="icon"></pf-icon>
        <div class="content"><slot></slot></div>
    </button>
</template>

<script>
    export default {
        // props:['icon','iconPosition']
        props: {
            icon: {},
            iconPosition: {
                type: String,
                default: 'left',
                validator(value){
                    return value==='left'||value==='right'
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    .pf-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display:inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            background-color: var(--button-active-bg);
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
    }


</style>
