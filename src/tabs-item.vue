<template>
    <div class="tabs-item">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "PFTabsItem",
        props:{
            name:{
                type:String,
                required: true
            },
            disabled:{
                type: Boolean,
                default: false
            }
        }
    };
</script>

<style scoped>

</style>
