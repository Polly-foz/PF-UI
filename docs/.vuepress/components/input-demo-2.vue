<template>
    <div style="padding-top: 16px;">
        <h2>双向绑定</h2>
        <p>
            <strong>预览</strong>
        </p>
        <pf-input v-model="value"></pf-input>
        <div>
            value: {{value}}
        </div>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{code}}</code></pre>
    </div>
</template>

<script>
    import Input from '../../../src/input'
    export default {
        name: "input-demo-2",
        components:{
          'pf-input':Input
        },
        data () {
            return {
                value: '1',
                code:`
data:{
    value: '1'
}

<pf-input v-model="value"></pf-input>
<div>
value: {{value}}
</div>
                `.trim()
            }
        }
    };
</script>

<style scoped>

</style>
