<template>
    <div class="pf-toast" :class="toastClass">
        <div class="toast" ref="toast" >
            <div v-if="enableHtml" v-html="$slots.default[0]">
            </div>
            <slot v-else></slot>
            <div v-if="closeButton" class="line" ref="line"></div>
            <div v-if="closeButton" class="close" @click="onCloseClicked">{{closeButton.text}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PFToast",
        props: {
            autoClose: {
                type: [Boolean,Number],
                default: 2,
                validator(value){
                    return value === false || typeof value === 'number'
                }
            },
            closeButton: {
                type: Object,
                validator: function (obj) {
                    //obj有2个属性：text和callback
                    if (obj.text === undefined || obj.text === null) {
                        return false;
                    }
                    return true;
                }
            },
            enableHtml:{
                type: Boolean,
                default: false
            },
            position:{
                type: String,
                default: 'top',
                validator(value){
                    return ['top','middle','bottom'].indexOf(value)>=0
                }
            }
        },
        computed:{
            toastClass(){
                return {[`position-${this.position}`]:true}
            }
        },
        methods: {
            close() {
                this.$el.remove();
                this.$emit('close')
                this.$destroy();
            },
            onCloseClicked() {
                const callback = this.closeButton.callback
                if(callback && typeof callback==="function"){
                    this.closeButton.callback(this);
                }
                this.close();
            },
            updateStyle() {
                if(!this.$refs.line){
                    return
                }else{
                    this.$nextTick(function () {
                        this.$refs.line.style.height = this.$refs.toast.getBoundingClientRect().height + 'px';
                    });
                }
            },
            executeAutoClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close();
                    }, this.autoClose * 1000);
                }
            },
        },
        mounted() {
            this.updateStyle();
            this.executeAutoClose();
        }
    };
</script>

<style lang="scss" scoped>
    $toast-bg: rgba(0, 0, 0, 0.75);
    $font-size: 14px;
    $toast-min-height: 40px;
    $animation-duration: 300ms;
    @keyframes fade-in {
        0%{opacity: 0;}
        100%{opacity: 1;}
    }
    @keyframes slide-down {
        0%{opacity: 0;transform: translateY(-100%);}
        100%{opacity: 1;transform: translateY(0);}
    }
    @keyframes slide-up {
        0%{opacity: 0;transform: translateY(100%);}
        100%{opacity: 1;transform: translateY(0);}
    }
    .pf-toast{
        position: fixed;
        left: 50%;
        &.position-top{
            top: 0;
            transform: translateX(-50%);
            .toast{
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                animation: slide-down $animation-duration;
            }
        }
        &.position-middle{
            top: 50%;
            transform: translate(-50%,-50%);
            .toast{
                animation: fade-in $animation-duration;
            }
        }
        &.position-bottom{
            bottom:0;
            transform: translateX(-50%);
            .toast{
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                animation: slide-up $animation-duration;
            }
        }
        .toast {
            background: $toast-bg;
            font-size: $font-size;
            min-height: $toast-min-height;
            line-height: 1.8;
            display: flex;
            align-items: center;
            border-radius: 4px;
            padding: 0 16px;
            box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.50);
            color: white;
            .line {
                border-left: 1px solid white;
                margin-left: 16px;
            }
            .close {
                flex-shrink:0;
                padding-left: 16px;
            }
        }
    }



</style>
