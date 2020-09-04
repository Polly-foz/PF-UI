<template>
    <div style="padding-top: 16px;">
        <h2>this.$toast</h2>
        <p>
            <strong>预览</strong>
        </p>
        <pf-button @click="$toast('点击弹出提示')">上方弹出</pf-button>
        <pf-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</pf-button>
        <pf-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</pf-button>
        <p>
            <strong>代码</strong>
        </p>
        <pf-button v-if="!showCode" @click="showCode=true">显示代码</pf-button>
        <pf-button v-else @click="showCode=false">隐藏代码</pf-button>
        <pre v-if="showCode"><code>{{code}}</code></pre>
    </div>
</template>

<script>
    import button from "../../../src/button";
    import plugin from '../../../src/plugin'
    import Vue from 'vue'

    Vue.use(plugin)

    export default {
        components: {
            'pf-button': button,
        },
        data() {
            return {
                showCode: false,
                code: `
<style>
  .pf-toast{
        z-index: 30 !important;
  }
</style>
<pf-button @click="$toast('点击弹出提示')">上方弹出</pf-button>
<pf-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</pf-button>
<pf-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</pf-button>
                `.trim()
            };
        }
    };
</script>

<style lang="scss">
    .pf-toast{
        z-index: 30 !important;
    }
</style>
