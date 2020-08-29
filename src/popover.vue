<template>
    <div class="popover">
        <div class="content" v-if="visible">
            <slot name="content"></slot>
        </div>
        <div class="trigger" @click="onClickTrigger">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PFPopover",
        data(){
            return {
                visible: false
            }
        },
        methods:{
            onClickTrigger(){
                this.visible = !this.visible
            }
        }
    };
</script>

<style lang="scss" scoped>
    .popover{
        display: inline-block;
        position:relative;
        .content{
            position: absolute;
            bottom:100%;
            box-shadow: 0 0 1px rgba(0,0,0,0.5);
        }
        .trigger{
        }
    }
</style>
