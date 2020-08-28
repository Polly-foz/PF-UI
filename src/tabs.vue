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
            this.eventBus.$emit('update:selected',this.selected)
            this.eventBus.$on('update:selected',(value)=>{
                this.$emit('update:selected',value)
            })
        }
    };
</script>

<style scoped>

</style>
