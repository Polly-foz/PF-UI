<template>
    <div class="popover" @click.stop="onClick">
        <div class="contentWrapper" v-if="visible" @click.stop>
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
            onDocumentClick(){
                this.visible = false;
                document.removeEventListener('click', this.onDocumentClick);
            },
            open(){
                this.visible = true;
                this.$nextTick(()=>{
                    document.addEventListener('click', this.onDocumentClick);
                })
            },
            close(){
                this.visible = false
                document.removeEventListener('click', this.onDocumentClick);
            },
            onClick() {
                if(this.visible){
                    this.close()
                }else{
                    this.open()
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    .popover {
        display: inline-block;
        position: relative;
        .contentWrapper {
            position: absolute;
            bottom: 100%;
            box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
        }

    }
</style>
