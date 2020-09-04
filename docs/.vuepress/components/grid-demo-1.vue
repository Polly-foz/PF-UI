<template>
    <div style="padding-top: 16px;">
        <h2>简单使用</h2>
        <p>
            <strong>预览</strong>
        </p>
        <pf-row class="demoRow">
            <pf-col span="8" class="demoCol"></pf-col>
            <pf-col span="8" class="demoCol"></pf-col>
            <pf-col span="8" class="demoCol"></pf-col>
        </pf-row>
        <pf-row class="demoRow" gutter="20" align="left">
            <pf-col span="4" class="demoCol"></pf-col>
            <pf-col span="8" class="demoCol"></pf-col>
            <pf-col span="12" class="demoCol"></pf-col>
        </pf-row>
        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{code}}</code></pre>
    </div>
</template>

<script>
    import Row from '../../../src/row';
    import Col from '../../../src/col';

    export default {
        components: {
            'pf-row': Row,
            'pf-col': Col
        },
        data() {
            return {
                code: `
<pf-row class="demoRow">
    <pf-col span="8" class="demoCol"></pf-col>
    <pf-col span="8" class="demoCol"></pf-col>
    <pf-col span="8" class="demoCol"></pf-col>
</pf-row>
<pf-row class="demoRow" gutter="20" align="left">
    <pf-col span="4" class="demoCol"></pf-col>
    <pf-col span="8" class="demoCol"></pf-col>
    <pf-col span="12" class="demoCol"></pf-col>
</pf-row>
                `.trim()
            };
        }
    };
</script>

<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }
    .demoRow{
    }
    .demoCol {
        height: 50px;
        border: 1px solid #ccc;
        background: #eee;

    }
</style>
