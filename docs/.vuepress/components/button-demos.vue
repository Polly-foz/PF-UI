<template>
    <div>
        <pf-button :loading="loading1" @click="loading1=!loading1">
            按钮
        </pf-button>
        <pf-button :loading="loading2" @click="loading2=!loading2" icon="settings">
            设置
        </pf-button>
        <pf-button-group>
            <pf-button icon="left" :loading="loading3" @click="loading3=!loading3">
                上一页
            </pf-button>
            <pf-button>
                更多
            </pf-button>
            <pf-button icon="right" icon-position="right" :loading="loading4" @click="loading4=!loading4">
                下一页
            </pf-button>
        </pf-button-group>
        <pre>
            <code>{{code1}}</code>
        </pre>

    </div>


</template>

<script>
    import ButtonGroup from '../../../src/button-group';
    import Button from '../../../src/button';

    export default {
        name: "button-demos",
        components: {
            'pf-button-group': ButtonGroup,
            'pf-button': Button
        },
        data() {
            return {
                loading1: false,
                loading2: true,
                loading3: false,
                loading4: false,
                loading5: false,
                code1: `
<template>
    <pf-button :loading="loading1" @click="loading1=!loading1">
        按钮
    </pf-button>
    <pf-button :loading="loading2" @click="loading2=!loading2" icon="settings">
        设置
    </pf-button>
    <pf-button-group>
        <pf-button icon="left" :loading="loading3" @click="loading3=!loading3">
            上一页
        </pf-button>
        <pf-button>
            更多
        </pf-button>
        <pf-button icon="right" icon-position="right" :loading="loading4" @click="loading4=!loading4">
            下一页
        </pf-button>
    </pf-button-group>
</template>
<script>
     export default {
          data() {
            return {
                loading1: false,
                loading2: false,
                loading3: false,
                loading4: false,
                loading5: false,
            }
          }
     }
     }
</scrip` + 't>'

            };
        }
    };
</script>

<style lang="scss" scoped>

</style>
