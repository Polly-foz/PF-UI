<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue';

    export default {
        name: "PFCollapse",
        props: {
            selected: {
                type: Array,
                default: []
            },
            single:{
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                eventBus: new Vue()
            };
        },
        provide() {
            return {
                'eventBus': this.eventBus
            };
        },
        mounted() {
            this.eventBus.$emit('update:selected', this.selected);
            this.eventBus.$on('add:selected', (name) => {
                if(this.single){
                    this.eventBus.$emit('update:selected', [name]);
                    this.$emit('update:selected', [name]);
                }else{
                    let newSelected = JSON.parse(JSON.stringify((this.selected)));
                    newSelected.push(name);
                    this.eventBus.$emit('update:selected', newSelected);
                    this.$emit('update:selected', newSelected);
                }
            });
            this.eventBus.$on('remove:selected', (name) => {
                if(this.single){
                    this.eventBus.$emit('update:selected', []);
                    this.$emit('update:selected', []);
                }else{
                    let newSelected = JSON.parse(JSON.stringify((this.selected)));
                    const index = newSelected.indexOf(name);
                    newSelected.splice(index, 1);
                    this.eventBus.$emit('update:selected', newSelected);
                    this.$emit('update:selected', newSelected);
                }
            });
        }
    };
</script>

<style lang="scss" scoped>
    $grey: #ddd;
    $border-radius: 4px;
    .collapse {
        border: 1px solid $grey;
        border-radius: $border-radius;
    }
</style>
