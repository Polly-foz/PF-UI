<template>
    <div class="tabs-pane">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "PFTabsPane",
        props:{
            name:{
                type: String,
                required: true
            }
        }
    };
</script>

<style scoped>

</style>
