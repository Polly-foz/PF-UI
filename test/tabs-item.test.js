const expect = chai.expect;
import Vue from 'vue';
import Tabs from '../src/tabs'
import TabsHead from "../src/tabs-head";
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

describe('TabsItem', () => {
    it('存在',()=>{
        expect(TabsItem).to.exist
    })
    it('接受name属性',()=>{
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData:{
                name:'finance'
            }
        }).$mount()
        expect(vm.$el.getAttribute('data-name')).to.eq('finance')
    })
    it("接受disabled属性",(done)=>{
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData:{
                name:'xx',
                disabled:true
            }
        }).$mount()
        // expect(vm.$el.classList.contains('disabled')).to.eq(true)
        const callback = sinon.fake()
        vm.$on('click',callback)
        vm.$nextTick(()=>{
            vm.$el.click()
            expect(callback).to.have.not.been.called
            done()
        })
    })
})
