<template>
    <div class="pf-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "PFButtonGroup",
        mounted() {
            for(let node of this.$el.children){
                if(node.nodeName !== 'BUTTON'){
                    console.warn("pf-button-group的子元素应全为pf-button")
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    .pf-button-group{
        display: inline-flex;
        vertical-align: middle;
        > .pf-button{
            border-radius: 0;
            &:not(:first-child){
                margin-left:-1px;
            }
            &:first-child{
                border-bottom-left-radius: var(--border-radius);
                border-top-left-radius: var(--border-radius);
            }
            &:last-child{
                border-bottom-right-radius: var(--border-radius);
                border-top-right-radius: var(--border-radius);
            }
            &:hover{
                z-index: 1;
                position:relative;
            }
        }
    }
</style>
