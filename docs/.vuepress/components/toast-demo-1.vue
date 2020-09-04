<template>
    <div style="padding-top: 16px;">
        <h2>支持 HTML</h2>
        <p>
            <strong>预览</strong>
        </p>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{code}}</code></pre>
    </div>
</template>

<script>
    export default {
        name: "",
        components: {
        },
        data(){
            return {
                code: ``.trim()
            }
        }
    };
</script>

<style lang="scss" scoped>

</style>
