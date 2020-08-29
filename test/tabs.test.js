import TabsHead from "../src/tabs-head";

const expect = chai.expect;
import Vue from 'vue';
import Tabs from '../src/tabs'
import TabsItem from "../src/tabs-item";
import TabsBody from "../src/tabs-body";
import TabsPane from "../src/tabs-pane";

Vue.component('pf-tabs',Tabs)
Vue.component('pf-tabs-head',TabsHead)
Vue.component('pf-tabs-item',TabsItem)
Vue.component('pf-tabs-body',TabsBody)
Vue.component('pf-tabs-pane',TabsPane)

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Tabs', () => {
    it('存在',()=>{
        expect(Tabs).to.exist
    });
    it('接受selected属性',(done)=>{
        const Constructor = Vue.extend(Tabs)
        const div = document.createElement("div")
        div.innerHTML = `
            <pf-tabs selected="games">
                 <pf-tabs-head>
                    <pf-tabs-item name="news">时事</pf-tabs-item>
                    <pf-tabs-item name="games">游戏</pf-tabs-item>
                    <pf-tabs-item name="pets">萌宠</pf-tabs-item>
                </pf-tabs-head>
            </pf-tabs>
        `
        const vm = new Vue({el:div}).$mount()
        vm.$nextTick(()=>{
            const games = vm.$el.querySelector('.tabs-item[data-name="games"]')
            expect(games.classList.contains('active')).to.be.true
            done()
        })

    })
})
