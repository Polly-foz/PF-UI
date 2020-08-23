<template>
    <transition name="slide">
        <div class="sider" v-if="show">
            <slot></slot>
            <button class="close" @click="show=false">x</button>
        </div>
    </transition>

</template>

<script>
    export default {
        name: "PFSider",
        data() {
            return {
                show: true
            };
        }
    };
</script>

<style lang="scss" scoped>
    .sider {
        position: relative;

        .close {
            position: absolute;
            top: 0;
            right: 0;
            width: 1em;
            height: 1em;
            line-height: 1em;
            display: flex;
            justify-content: center;
            align-items: center;
        }


    }

    .slide-leave-active {
        transition: all .5s;
    }

    .slide-leave-to {
        margin-left: -150px;
    }

</style>
