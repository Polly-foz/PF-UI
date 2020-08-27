import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import plugin from './plugin'
import Toast from './toast'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsBody from './tabs-body'
import TabsPane from './tabs-pane'

Vue.component('pf-button', Button);
Vue.component('pf-icon', Icon);
Vue.component('pf-button-group', ButtonGroup);
Vue.component('pf-input',Input)
Vue.component('pf-row',Row)
Vue.component('pf-col',Col)
Vue.component('pf-layout',Layout)
Vue.component('pf-header',Header)
Vue.component('pf-sider',Sider)
Vue.component('pf-content',Content)
Vue.component('pf-footer',Footer)
Vue.component('pf-toast',Toast)
Vue.component('pf-tabs',Tabs)
Vue.component('pf-tabs-head',TabsHead)
Vue.component('pf-tabs-item',TabsItem)
Vue.component('pf-tabs-body',TabsBody)
Vue.component('pf-tabs-pane',TabsPane)

Vue.use(plugin)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
        loading4: false,
        loading5: false,
        value:'default value',
        selectedTab:'pets'
    },
    methods:{
        showToast(position){
            this.$toast('this is a <strong>toast</strong>!<br/><br/>...',{
                autoClose:1,
                closeButton:{
                    text: '关闭',
                    callback(toast){
                        console.log('关啦！',toast)
                    }
                },
                enableHtml: true,
                position
            })
        }
    }
});


