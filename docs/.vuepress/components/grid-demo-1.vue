<template>
    <div style="padding-top: 16px;">
        <h2>24格网格</h2>
        <p>
            <strong>预览</strong>
        </p>
        <pf-row class="demoRow">
            <pf-col span="8">
                <div class="demoCol">8</div>
            </pf-col>
            <pf-col span="8">
                <div class="demoCol">8</div>
            </pf-col>
            <pf-col span="8">
                <div class="demoCol">8</div>
            </pf-col>
        </pf-row>
        <pf-row class="demoRow">
            <pf-col span="6">
                <div class="demoCol">6</div>
            </pf-col>
            <pf-col span="6">
                <div class="demoCol">6</div>
            </pf-col>
            <pf-col span="6">
                <div class="demoCol">6</div>
            </pf-col>
            <pf-col span="6">
                <div class="demoCol">6</div>
            </pf-col>
        </pf-row>
        <pf-row class="demoRow">
            <pf-col span="4">
                <div class="demoCol">4</div>
            </pf-col>
            <pf-col span="4">
                <div class="demoCol">4</div>
            </pf-col>
            <pf-col span="4">
                <div class="demoCol">4</div>
            </pf-col>
            <pf-col span="4">
                <div class="demoCol">4</div>
            </pf-col>
            <pf-col span="4">
                <div class="demoCol">4</div>
            </pf-col>
            <pf-col span="4">
                <div class="demoCol">4</div>
            </pf-col>
        </pf-row>
        <pf-row class="demoRow">
            <pf-col span="2">
                <div class="demoCol">2</div>
            </pf-col>
            <pf-col span="2">
                <div class="demoCol">2</div>
            </pf-col>
            <pf-col span="2">
                <div class="demoCol">2</div>
            </pf-col>
            <pf-col span="2">
                <div class="demoCol">2</div>
            </pf-col>
            <pf-col span="2">
                <div class="demoCol">2</div>
            </pf-col>
            <pf-col span="2">
                <div class="demoCol">2</div>
            </pf-col>
            <pf-col span="2">
                <div class="demoCol">2</div>
            </pf-col>
            <pf-col span="2">
                <div class="demoCol">2</div>
            </pf-col>
            <pf-col span="2">
                <div class="demoCol">2</div>
            </pf-col>
            <pf-col span="2">
                <div class="demoCol">2</div>
            </pf-col>
            <pf-col span="2">
                <div class="demoCol">2</div>
            </pf-col>
            <pf-col span="2">
                <div class="demoCol">2</div>
            </pf-col>
        </pf-row>
        <pf-row class="demoRow">
            <pf-col span="4" class="demoCol">4</pf-col>
            <pf-col span="8" class="demoCol">8</pf-col>
            <pf-col span="12" class="demoCol">12</pf-col>
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
    <pf-col span="8">
        <div class="demoCol">8</div>
    </pf-col>
    <pf-col span="8">
        <div class="demoCol">8</div>
    </pf-col>
    <pf-col span="8">
        <div class="demoCol">8</div>
    </pf-col>
</pf-row>
<pf-row class="demoRow">
    <pf-col span="6">
        <div class="demoCol">6</div>
    </pf-col>
    <pf-col span="6">
        <div class="demoCol">6</div>
    </pf-col>
    <pf-col span="6">
        <div class="demoCol">6</div>
    </pf-col>
    <pf-col span="6">
        <div class="demoCol">6</div>
    </pf-col>
</pf-row>
<pf-row class="demoRow">
    <pf-col span="4">
        <div class="demoCol">4</div>
    </pf-col>
    <pf-col span="4">
        <div class="demoCol">4</div>
    </pf-col>
    <pf-col span="4">
        <div class="demoCol">4</div>
    </pf-col>
    <pf-col span="4">
        <div class="demoCol">4</div>
    </pf-col>
    <pf-col span="4">
        <div class="demoCol">4</div>
    </pf-col>
    <pf-col span="4">
        <div class="demoCol">4</div>
    </pf-col>
</pf-row>
<pf-row class="demoRow">
    <pf-col span="2">
        <div class="demoCol">2</div>
    </pf-col>
    <pf-col span="2">
        <div class="demoCol">2</div>
    </pf-col>
    <pf-col span="2">
        <div class="demoCol">2</div>
    </pf-col>
    <pf-col span="2">
        <div class="demoCol">2</div>
    </pf-col>
    <pf-col span="2">
        <div class="demoCol">2</div>
    </pf-col>
    <pf-col span="2">
        <div class="demoCol">2</div>
    </pf-col>
    <pf-col span="2">
        <div class="demoCol">2</div>
    </pf-col>
    <pf-col span="2">
        <div class="demoCol">2</div>
    </pf-col>
    <pf-col span="2">
        <div class="demoCol">2</div>
    </pf-col>
    <pf-col span="2">
        <div class="demoCol">2</div>
    </pf-col>
    <pf-col span="2">
        <div class="demoCol">2</div>
    </pf-col>
    <pf-col span="2">
        <div class="demoCol">2</div>
    </pf-col>
</pf-row>
<pf-row class="demoRow">
    <pf-col span="4" class="demoCol">4</pf-col>
    <pf-col span="8" class="demoCol">8</pf-col>
    <pf-col span="12" class="demoCol">12</pf-col>
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

    .demoRow {
        margin: 10px 0;
    }

    .demoCol {
        height: 50px;
        border: 1px solid #ccc;
        background: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
