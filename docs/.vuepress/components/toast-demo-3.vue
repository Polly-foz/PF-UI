<template>
    <div style="padding-top: 16px;">
        <h2>支持 HTML</h2>
        <p>
            <strong>预览</strong>
        </p>
        <div>
            <pf-button @click="onClickButton">上方弹出</pf-button>
        </div>


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
            'pf-button':button,
        },
        methods: {
            onClickButton () {
                this.$toast('<strong style="color:red;">加粗的提示</strong>', {
                    enableHtml: true
                })
            }
        },
        data(){
            return {
                showCode: false,
                code: `
<pf-button @click="onClickButton">上方弹出</pf-button>

 methods: {
    onClickButton () {
        this.$toast('<strong style="color:red;">加粗的提示</strong>', {
            enableHtml: true
        })
    }
},
                `.trim()
            }
        }
    };
</script>

<style lang="scss" scoped>

</style>
