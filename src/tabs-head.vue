<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PFTabsHead",
        inject:["eventBus"],
        mounted(){
            this.eventBus.$on('update:selected',(name,vm)=>{
                const leftOfHead = this.$el.getBoundingClientRect().left
                const {width,left} = vm.$el.getBoundingClientRect();
                this.$refs.line.style.width = width + 'px';
                this.$refs.line.style.left = (left-leftOfHead) + 'px';

            })
        }
    };
</script>

<style lang="scss" scoped>
    $tab-height: 40px;
    $blue: dodgerblue;
    .tabs-head{
        display: flex;
        align-items: center;
        height: $tab-height;
        position: relative;
        > .actions-wrapper{
            margin-left:auto;
            padding:0 1em;
        }
        > .line{
            border-bottom: 1px solid $blue;
            position: absolute;
            bottom:0;
            transition: all 300ms;
        }
    }
</style>
