<template>
    <div class="popover" @click="onClick" ref="popover">
        <div class="contentWrapper" v-if="visible" ref="contentWrapper">
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
            onDocumentClick(e){
                if(this.$refs.popover.contains(e.target)
                    ||this.$refs.contentWrapper.contains(e.target)){
                    return
                }
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
            onClick(e) {
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
    $border-color: #333;
    $border-radius: 4px;
    .popover {
        display: inline-block;
    }
    .contentWrapper {
        position: absolute;
        border:1px solid $border-color;
        border-radius: $border-radius;
        filter: drop-shadow(0 1px 1px rgba(0,0,0,0.5));
        transform: translateY(-100%);
        background: white;
        padding: 0.5em 1em;
        max-width: 20em;
        word-break: break-all;
        margin-top: -10px;
        &::before,&::after{
            content:'';
            display: block;
            width: 0;
            height: 0;
            border: 10px solid transparent;
            position: absolute;
            left: 10px;
        }
        &::before{
            border-top:10px solid $border-color;
            top: 100%;
        }
        &::after{
            border-top:10px solid white;
            top: calc(100% - 1px);
        }
    }
</style>
