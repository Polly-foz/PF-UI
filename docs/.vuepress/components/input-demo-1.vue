<template>
    <div style="padding-top: 16px;">
        <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <pf-input></pf-input>
        <pf-input value="中文"></pf-input>
        <pf-input value="中文" disabled></pf-input>
        <pf-input value="中文" readonly></pf-input>
        <pf-input error="密码不能为空"></pf-input>
        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{code}}</code></pre>
    </div>
</template>

<script>
    import Input from '../../../src/input';

    export default {
        components: {
            'pf-input': Input
        },
        data() {
            return {
                code: `
<pf-input></pf-input>
<pf-input value="中文"></pf-input>
<pf-input value="中文" disabled></pf-input>
<pf-input value="中文" readonly></pf-input>
<pf-input error="密码不能为空"></pf-input>
                `.trim()
            };
        }
    };
</script>

<style lang="scss" scoped>

</style>
