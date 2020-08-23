<template>
    <div class="layout">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "PFLayout"
    };
</script>

<style lang="scss" scoped>
    .layout{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
</style>
