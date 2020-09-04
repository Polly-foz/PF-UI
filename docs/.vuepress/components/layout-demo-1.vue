<template>
    <div style="padding-top: 16px;">
        <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <pf-layout style="color: white;">
            <pf-header style="height: 50px; background:lightskyblue;">
                header
            </pf-header>
            <pf-content style="height: 100px; background:deepskyblue;">
                content
            </pf-content>
            <pf-footer style="height: 50px; background:lightskyblue;">
                footer
            </pf-footer>
        </pf-layout>
        <p>
            <strong>代码</strong>
        </p>
        <pf-button v-if="!showCode0" @click="showCode0=!showCode0">显示代码</pf-button>
        <pf-button v-else @click="showCode0=!showCode0">隐藏代码</pf-button>
        <pre v-if="showCode0"><code>{{code[0]}}</code></pre>

        <p style="margin-top:50px">
            <strong>预览</strong>
        </p>
        <pf-layout style="color: white;">
            <pf-header style="height: 50px; background:lightskyblue;">
                header
            </pf-header>
            <pf-layout>
                <pf-sider style="min-width: 4em; height: 100px; background:dodgerblue;">
                    sider
                </pf-sider>
                <pf-content style="height: 100px; background:deepskyblue;">
                    content
                </pf-content>
            </pf-layout>
            <pf-footer style="height: 50px; background:lightskyblue;">
                footer
            </pf-footer>
        </pf-layout>
        <p>
            <strong>代码</strong>
        </p>
        <pf-button v-if="!showCode1" @click="showCode1=!showCode1">显示代码</pf-button>
        <pf-button v-else @click="showCode1=!showCode1">隐藏代码</pf-button>
        <pre v-if="showCode1"><code>{{code[1]}}</code></pre>

        <p style="margin-top:50px">
            <strong>预览</strong>
        </p>
        <pf-layout style="color: white;">
            <pf-header style="height: 50px; background:lightskyblue;">
                header
            </pf-header>
            <pf-layout>
                <pf-content style="height: 100px; background:deepskyblue;">
                    content
                </pf-content>
                <pf-sider style="min-width: 4em; height: 100px; background:dodgerblue;">
                    sider
                </pf-sider>
            </pf-layout>
            <pf-footer style="height: 50px; background:lightskyblue;">
                footer
            </pf-footer>
        </pf-layout>
        <p>
            <strong>代码</strong>
        </p>
        <pf-button v-if="!showCode2" @click="showCode2=!showCode2">显示代码</pf-button>
        <pf-button v-else @click="showCode2=!showCode2">隐藏代码</pf-button>
        <pre v-if="showCode2"><code>{{code[2]}}</code></pre>

        <p style="margin-top:50px">
            <strong>预览</strong>
        </p>
        <pf-layout style="color: white;">
            <pf-sider style="min-width: 4em; height: 200px; background:dodgerblue;">
                sider
            </pf-sider>
            <pf-layout>
                <pf-header style="height: 50px; background:lightskyblue;">
                    header
                </pf-header>
                <pf-content style="height: 100px; background:deepskyblue;">
                    content
                </pf-content>

                <pf-footer style="height: 50px; background:lightskyblue;">
                    footer
                </pf-footer>
            </pf-layout>
        </pf-layout>

        <p>
            <strong>代码</strong>
        </p>
        <pf-button v-if="!showCode3" @click="showCode3=!showCode3">显示代码</pf-button>
        <pf-button v-else @click="showCode3=!showCode3">隐藏代码</pf-button>
        <pre v-if="showCode3"><code>{{code[3]}}</code></pre>
    </div>
</template>

<script>
    import Layout from '../../../src/layout';
    import Header from '../../../src/header';
    import Content from '../../../src/content';
    import Footer from "../../../src/footer";
    import Sider from "../../../src/sider";
    import Button from '../../../src/button';

    export default {
        components: {
            'pf-layout': Layout,
            'pf-header': Header,
            'pf-content': Content,
            'pf-footer': Footer,
            'pf-sider': Sider,
            'pf-button': Button
        },
        data() {
            return {
                showCode0: false,
                showCode1: false,
                showCode2: false,
                showCode3: false,
                code: [`
<pf-layout style="color: white; margin-bottom:50px;">
    <pf-header style="height: 50px; background:lightskyblue;">
        header
    </pf-header>
    <pf-content style="height: 100px; background:deepskyblue;">
        content
    </pf-content>
    <pf-footer style="height: 50px; background:lightskyblue;">
        footer
    </pf-footer>
</pf-layout>
                    `.trim(),
                    `
<pf-layout style="color: white; margin-bottom:50px;">
    <pf-header style="height: 50px; background:lightskyblue;">
        header
    </pf-header>
    <pf-layout>
        <pf-sider style="min-width: 4em; height: 100px; background:dodgerblue;">
            sider
        </pf-sider>
        <pf-content style="height: 100px; background:deepskyblue;">
            content
        </pf-content>
    </pf-layout>
    <pf-footer style="height: 50px; background:lightskyblue;">
        footer
    </pf-footer>
</pf-layout>
                    `.trim(),
                    `
<pf-layout style="color: white; margin-bottom:50px;">
    <pf-header style="height: 50px; background:lightskyblue;">
        header
    </pf-header>
    <pf-layout>
        <pf-content style="height: 100px; background:deepskyblue;">
            content
        </pf-content>
        <pf-sider style="min-width: 4em; height: 100px; background:dodgerblue;">
            sider
        </pf-sider>
    </pf-layout>
    <pf-footer style="height: 50px; background:lightskyblue;">
        footer
    </pf-footer>
</pf-layout>
                    `.trim(),
                    `
<pf-layout style="color: white; margin-bottom:50px;">
    <pf-sider style="min-width: 4em; height: 200px; background:dodgerblue;">
        sider
    </pf-sider>
    <pf-layout>
        <pf-header style="height: 50px; background:lightskyblue;">
            header
        </pf-header>
        <pf-content style="height: 100px; background:deepskyblue;">
            content
        </pf-content>

        <pf-footer style="height: 50px; background:lightskyblue;">
            footer
        </pf-footer>
    </pf-layout>
</pf-layout>
                `.trim()]
            };
        }
    };
</script>

<style lang="scss" scoped>

</style>
