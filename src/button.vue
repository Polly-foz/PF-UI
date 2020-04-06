<template>
    <button class="pf-button"><slot></slot></button>
</template>

<script>
    export default {

    };
</script>

<style lang="scss" scoped>
    .pf-button{
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
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
    }

</style>
