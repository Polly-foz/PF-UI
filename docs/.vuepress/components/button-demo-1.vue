<template>
    <div style="padding-top: 16px;">
        <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <pf-button>默认按钮</pf-button>
        <pf-button icon="settings">默认按钮</pf-button>
        <pf-button :loading="true">默认按钮</pf-button>
        <pf-button disabled>默认按钮</pf-button>
        <pf-button-group>
            <pf-button icon="left">
                上一页
            </pf-button>
            <pf-button>
                更多
            </pf-button>
            <pf-button icon="right" icon-position="right">
                下一页
            </pf-button>
        </pf-button-group>
        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{code1}}</code></pre>
    </div>


</template>

<script>
    import ButtonGroup from '../../../src/button-group';
    import Button from '../../../src/button';

    export default {
        name: "button-demo-1",
        components: {
            'pf-button-group': ButtonGroup,
            'pf-button': Button
        },
        data() {
            return {
                code1: (`
<pf-button>默认按钮</pf-button>
<pf-button icon="settings">默认按钮</pf-button>
<pf-button :loading="true">默认按钮</pf-button>
<pf-button disabled>默认按钮</pf-button>
<pf-button-group>
    <pf-button icon="left">
        上一页
    </pf-button>
    <pf-button>
        更多
    </pf-button>
    <pf-button icon="right" icon-position="right">
        下一页
    </pf-button>
</pf-button-group>`).trim()

            };
        }
    };
</script>

<style lang="scss" scoped>
    .pf-button{
        margin-bottom: 1em;
    }
    .pf-button-group{
        margin-bottom: 1em;
        .pf-button{
            margin-bottom: 0;
        }
    }
</style>
