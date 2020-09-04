<template>
    <div style="padding-top: 16px;">
        <h2>排版</h2>
        <p>
            <strong>预览</strong>
        </p>
        <p class="alignTitle">
            <span class="title">align left</span>
            <span class="line"></span>
        </p>
        <pf-row class="demoRow" align="left">
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
        <p class="alignTitle">
            <span class="title">align center</span>
            <span class="line"></span>
        </p>
        <pf-row class="demoRow" align="center">
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
        <p class="alignTitle">
            <span class="title">align right</span>
            <span class="line"></span>
        </p>
        <pf-row class="demoRow" align="right">
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
        data(){
            return {
                code: `
<pf-row class="demoRow" align="left">
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

<pf-row class="demoRow" align="center">
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

<pf-row class="demoRow" align="right">
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
                `.trim()
            }
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

    .alignTitle{
        display: flex;
        align-items: center;
        .title{
            flex-shrink: 0;
        }
        .line{
            display:inline-block;
            height: 1px;
            width: 100%;
            margin-left: 1em;
            background: #ddd;
        }
    }
</style>
