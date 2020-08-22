const expect = chai.expect;
import Vue from 'vue';
import Row from '../src/row';
import Col from '../src/col'

Vue.config.productionTip = false;
Vue.config.devtools = false;


describe('Row', () => {
    it('Row存在',()=>{
        expect(Row).to.exist
    })
    it('接收gutter属性',(done)=>{
        Vue.component('p-row',Row)
        Vue.component('p-col',Col)
        const div = document.createElement('div')
        div.innerHTML = `
            <p-row gutter="20">
                <p-col></p-col>
                <p-col></p-col>
            </p-row>
        `
        document.body.appendChild(div)
        const vm = new Vue({el:div})
        setTimeout(()=>{
            const row = vm.$el.querySelector('.row')
            expect(getComputedStyle(row).marginLeft).to.eq('-10px')
            expect(getComputedStyle(row).marginRight).to.eq('-10px')
            const cols = vm.$el.querySelectorAll('.col')
            expect(getComputedStyle(cols[0]).paddingLeft).to.eq('10px')
            expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
            vm.$el.remove()
            vm.$destroy()
            done()
        },0)
    })
    it('接收align属性',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Row)
        const vm = new Constructor({
            propsData:{
                align:'right'
            }
        }).$mount(div)
        const row = vm.$el
        expect(getComputedStyle(row).justifyContent).to.eq('flex-end')
        div.remove()
        vm.$destroy()
    })
});
