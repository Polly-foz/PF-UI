<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "PFToast",
        props:{
            autoClose:{
                type: Boolean,
                default: true
            },
            autoCloseDelay:{
                type: Number,
                default: 1
            }
        },
        methods:{},
        mounted(){
            if(this.autoClose){
                setTimeout(()=>{
                    this.$el.remove()
                    this.$destroy()
                },this.autoCloseDelay*1000)
            }
        }
    };
</script>

<style lang="scss" scoped>
    $toast-bg: rgba(0,0,0,0.75);
    $font-size: 14px;
    $toast-min-height: 40px;
    .toast{
        background: $toast-bg;
        font-size: $font-size;
        min-height: $toast-min-height;
        line-height: 1.8;
        display: flex;
        align-items: center;
        border-radius: 4px;
        padding:0 16px;
        position: fixed;
        top:0;
        left:50%;
        transform: translateX(-50%);
        box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.50);
        color:white;
    }
</style>
