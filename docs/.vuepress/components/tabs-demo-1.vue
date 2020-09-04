<template>
    <div style="padding-top: 16px;">
        <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <pf-tabs :selected="selected">
            <pf-tabs-head>
                <pf-tabs-item name="1">tab1</pf-tabs-item>
                <pf-tabs-item name="2">tab2</pf-tabs-item>
            </pf-tabs-head>
            <pf-tabs-body>
                <pf-tabs-pane name="1">content 1</pf-tabs-pane>
                <pf-tabs-pane name="2">content 2</pf-tabs-pane>
            </pf-tabs-body>
        </pf-tabs>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{code}}</code></pre>
    </div>
</template>

<script>
    import Tabs from '../../../src/tabs';
    import TabsHead from '../../../src/tabs-head';
    import TabsItem from '../../../src/tabs-item';
    import TabsBody from '../../../src/tabs-body';
    import TabsPane from '../../../src/tabs-pane';

    export default {
        name: "",
        components: {
            'pf-tabs': Tabs,
            'pf-tabs-head': TabsHead,
            'pf-tabs-item': TabsItem,
            'pf-tabs-body': TabsBody,
            'pf-tabs-pane': TabsPane
        },
        data() {
            return{
                selected: '2',
                code:`
data(){
    return {
        selected: '2'
    }
}

<pf-tabs :selected="selected">
    <pf-tabs-head>
        <pf-tabs-item name="1">tab1</pf-tabs-item>
        <pf-tabs-item name="2">tab2</pf-tabs-item>
    </pf-tabs-head>
    <pf-tabs-body>
        <pf-tabs-pane name="1">content 1</pf-tabs-pane>
        <pf-tabs-pane name="2">content 2</pf-tabs-pane>
    </pf-tabs-body>
</pf-tabs>
                `.trim()
            }
        }
    };
</script>

<style lang="scss" scoped>

</style>
