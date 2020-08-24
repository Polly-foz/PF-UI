<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "PFLayout",
        data(){
          return {
              layoutClass:{
                  hasSider:false
              }
          }
        },
        mounted() {
            this.$children.forEach((vm) => {
                if (vm.$options.name === 'PFSider') {
                    this.layoutClass.hasSider = true
                }
            })
        }
    };
</script>

<style lang="scss" scoped>
    .layout{
        display: flex;
        flex-direction: column;
        flex:auto;
        width: 100%;
        overflow: auto;
        &.hasSider{
            flex-direction: row;
        }
    }
</style>
