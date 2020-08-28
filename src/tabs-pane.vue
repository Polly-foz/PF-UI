<template>
    <div class="tabs-pane" v-if="active">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "PFTabsPane",
        inject:['eventBus'],
        data(){
          return {
              active: false
          }
        },
        props:{
            name:{
                type: String,
                required: true
            }
        },
        created() {
            this.eventBus.$on('update:selected',(value)=>{
                if(value===this.name){
                    this.active = true
                }else{
                    this.active = false
                }
            })
        }
    };
</script>

<style lang="scss" scoped>

</style>
