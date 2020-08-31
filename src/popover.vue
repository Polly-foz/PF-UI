<template>
    <div class="popover" @click.stop="onClick" ref="popover">
        <div class="contentWrapper" v-if="visible" @click.stop ref="contentWrapper">
            <slot name="content"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    import content from "./content";

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
                    const {top,left} = this.$refs.popover.getBoundingClientRect()
                    document.body.appendChild(this.$refs.contentWrapper)
                    this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
                    this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
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
    }
    .contentWrapper {
        position: absolute;
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
        transform: translateY(-100%);
    }
</style>
