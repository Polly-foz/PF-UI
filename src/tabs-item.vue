<template>
    <div class="tabs-item" :class="tabsItemClass" @click="onClicked" :data-name="name">
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
        computed:{
            tabsItemClass(){
                return {
                    'active':this.active,
                    'disabled':this.disabled
                }
            }
        },
        methods:{
          onClicked(){
              if(this.disabled) return;
              this.eventBus && this.eventBus.$emit('update:selected',this.name,this)
              this.$emit('click',this)
          }
        },
        created() {
            this.eventBus && this.eventBus.$on('update:selected',(value)=>{
                this.active = (value===this.name)
            })
        }
    };
</script>

<style lang="scss" scoped>
    $blue: dodgerblue;
    .tabs-item{
        flex-shrink:0;
        height: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-left: 1em;
        &:first-child{
            margin-left: 0;
        }
        &.active{
            color: $blue;
            font-weight: bold;
            > .icon{
                fill: $blue;
            }
        }
        &.disabled{
            cursor: not-allowed;
            opacity: 0.5;
        }
    }
</style>
