const expect = chai.expect;
import Vue from 'vue';
import Col from '../src/col'

Vue.config.productionTip = false;
Vue.config.devtools = false;


describe('Col', () => {
    it('Col存在',()=>{
        expect(Col).to.exist
    })
    it('接收span属性',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col);
        const vm = new Constructor({
            propsData: {
                span: '3'
            }
        }).$mount(div);
        const colElement = vm.$el;
        expect(colElement.classList.contains('span-3')).to.equal(true);
        div.remove()
        vm.$destroy();
    })
    it('接收offset属性',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col);
        const vm = new Constructor({
            propsData: {
                offset: '3'
            }
        }).$mount(div);
        const colElement = vm.$el;
        expect(colElement.classList.contains('offset-3')).to.equal(true);
        div.remove()
        vm.$destroy();
    })
    it('接收pad属性',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col);
        const vm = new Constructor({
            propsData: {
                pad:{
                    offset: 2,
                    span: 10
                }
            }
        }).$mount(div);
        const colElement = vm.$el;
        expect(colElement.classList.contains('offset-pad-2')).to.equal(true);
        expect(colElement.classList.contains('span-pad-10')).to.equal(true);
        div.remove()
        vm.$destroy();
    })
    it('接收narrowPc属性',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col);
        const vm = new Constructor({
            propsData: {
                narrowPc:{
                    offset: 2,
                    span: 10
                }
            }
        }).$mount(div);
        const colElement = vm.$el;
        expect(colElement.classList.contains('offset-narrowPc-2')).to.equal(true);
        expect(colElement.classList.contains('span-narrowPc-10')).to.equal(true);
        div.remove()
        vm.$destroy();
    })
    it('接收pc属性',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col);
        const vm = new Constructor({
            propsData: {
                pc:{
                    offset: 2,
                    span: 10
                }
            }
        }).$mount(div);
        const colElement = vm.$el;
        expect(colElement.classList.contains('offset-pc-2')).to.equal(true);
        expect(colElement.classList.contains('span-pc-10')).to.equal(true);
        div.remove()
        vm.$destroy();
    })
    it('接收widePc属性',()=>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col);
        const vm = new Constructor({
            propsData: {
                widePc:{
                    offset: 2,
                    span: 10
                }
            }
        }).$mount(div);
        const colElement = vm.$el;
        expect(colElement.classList.contains('offset-widePc-2')).to.equal(true);
        expect(colElement.classList.contains('span-widePc-10')).to.equal(true);
        div.remove()
        vm.$destroy();
    })

});
