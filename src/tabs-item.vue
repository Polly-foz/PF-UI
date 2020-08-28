<template>
    <div class="tabs-item" :class="[active?'active':'']" @click="updateSelected">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "PFTabsItem",
        inject:['eventBus'],
        data(){
            return {
                active:false
            }
        },
        props:{
            name:{
                type:String,
                required: true
            },
            disabled:{
                type: Boolean,
                default: false
            }
        },
        methods:{
          updateSelected(){
              this.eventBus.$emit('update:selected',this.name)
          }
        },
        created() {
            this.eventBus.$on('update:selected',(value)=>{
                this.active = (value===this.name)
            })
        }
    };
</script>

<style lang="scss" scoped>
    .tabs-item.active{
        background: #bbbbbb;
    }
</style>
