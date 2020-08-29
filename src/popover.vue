<template>
    <div class="popover" @click.stop="onClickTrigger">
        <div class="content" v-if="visible" @click.stop>
            <slot name="content"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "PFPopover",
        data() {
            return {
                visible: false
            };
        },
        methods: {
            onClickTrigger() {
                // console.log('click');
                this.visible = !this.visible;
                const documentClickEventListener = () => {
                    this.visible = false;
                    // console.log('document隐藏popover');
                    document.removeEventListener('click', documentClickEventListener);
                    // console.log('doc删除监听器');
                };
                if (this.visible) {
                    document.addEventListener('click', documentClickEventListener);
                    // console.log('添加监听器');
                } else {
                    //TODO: 不影响使用，但下面这行代码没有起作用。。。
                    document.removeEventListener('click', documentClickEventListener);
                    // console.log('vm删除监听器');
                    // console.log('vm隐藏popover');
                }

            }
        }
    };
</script>

<style lang="scss" scoped>
    .popover {
        display: inline-block;
        position: relative;
        .content {
            position: absolute;
            bottom: 100%;
            box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
        }

    }
</style>
