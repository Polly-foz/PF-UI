<template>
    <div class="collapseItem">
        <div class="title" @click="visible=!visible">{{title}}</div>
        <div class="content" v-if="visible">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PFCollapseItem",
        data() {
            return {
                visible: false
            };
        },
        props: {
            title: {
                type: String,
                required: true
            }
        }
    };
</script>

<style lang="scss" scoped>
    $grey: #ddd;
    $border-radius: 4px;
    .collapseItem {
        > .title {
            border: 1px solid $grey;
            padding: 0 8px;
            min-height: 32px;
            display: flex;
            align-items: center;
            margin-top: -1px;
            margin-left: -1px;
            margin-right: -1px;
        }

        &:first-child {
            > .title {
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;


            }
        }

        &:last-child {
            > .title:last-child {
                border-bottom-left-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
                margin-bottom: -1px;
            }
        }

        > .content {
            padding: 8px;
        }
    }
</style>
