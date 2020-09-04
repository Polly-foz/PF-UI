<template>
    <div style="padding-top: 16px;">
        <h2>将触发方式改为 hover</h2>
        <p>
            <strong>预览</strong>
        </p>
        <pf-popover trigger="hover">
            <pf-button>上方弹出</pf-button>
            <template slot="content">
                弹出内容
            </template>
        </pf-popover>
        <pf-popover position="bottom" trigger="hover">
            <pf-button>下方弹出</pf-button>
            <template slot="content">
                弹出内容
            </template>
        </pf-popover>
        <pf-popover position="left" trigger="hover">
            <pf-button>左边弹出</pf-button>
            <template slot="content">
                弹出内容
            </template>
        </pf-popover>
        <pf-popover position="right" trigger="hover">
            <pf-button>右边弹出</pf-button>
            <template slot="content">
                弹出内容
            </template>
        </pf-popover>

        <p>
            <strong>代码</strong>
        </p>
        <pf-button v-if="!showCode" @click="showCode=true">显示代码</pf-button>
        <pf-button v-else @click="showCode=false">隐藏代码</pf-button>
        <pre v-if="showCode"><code>{{code}}</code></pre>
    </div>
</template>

<script>
    import popover from "../../../src/popover";
    import button from "../../../src/button";

    export default {
        name: "",
        components: {
            'pf-popover':popover,
            'pf-button':button
        },
        data(){
            return {
                showCode:false,
                code: `
<pf-popover trigger="hover">
    <pf-button>上方弹出</pf-button>
    <template slot="content">
        弹出内容
    </template>
</pf-popover>
<pf-popover position="bottom" trigger="hover">
    <pf-button>下方弹出</pf-button>
    <template slot="content">
        弹出内容
    </template>
</pf-popover>
<pf-popover position="left" trigger="hover">
    <pf-button>左边弹出</pf-button>
    <template slot="content">
        弹出内容
    </template>
</pf-popover>
<pf-popover position="right" trigger="hover">
    <pf-button>右边弹出</pf-button>
    <template slot="content">
        弹出内容
    </template>
</pf-popover>
                `.trim()
            }
        }
    };
</script>

<style lang="scss" scoped>

</style>
