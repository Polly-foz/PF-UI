<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue';

    export default {
        name: "PFTabs",
        data() {
            return {eventBus: new Vue()};
        },
        provide() {
            return {'eventBus': this.eventBus};
        },
        props: {
            selected: {
                type: String,
                required: true
            },
            direction: {
                type: String,
                default: 'horizontal',
                validator(value) {
                    return ['horizontal', 'vertical'].indexOf(value) >= 0;
                }
            }
        },
        mounted() {
            this.$children.forEach((vm)=>{
                if(['PFTabsHead','PFTabsBody'].indexOf(vm.$options.name)<0){
                    console && console.warn && console.warn('Tabs的子组件必须是TabsHead或TabsBody')
                }
                if(vm.$options.name === 'PFTabsHead'){
                    vm.$children.forEach(item=>{
                        if(item.$options.name==='PFTabsItem' && item.name===this.selected){
                            this.eventBus.$emit('update:selected',this.selected,item)
                        }
                    })
                }
            })
            this.eventBus.$on('update:selected',(value)=>{
                this.$emit('update:selected',value)
            })
        }
    };
</script>

<style scoped>

</style>
