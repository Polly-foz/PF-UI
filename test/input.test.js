import Button from "../src/button";

const expect = chai.expect;
import Vue from 'vue';
import Input from '../src/input'

Vue.config.productionTip = false;
Vue.config.devtools = false;


describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.ok;
    });
    describe('props',()=>{
        it('接收 value', () => {
            const Constructor = Vue.extend(Input);
            const vm = new Constructor({
                propsData: {
                    value: 'hello'
                }
            }).$mount();
            const inputElement = vm.$el.querySelector('input');
            // console.log(inputElement.outerHTML);
            // console.log(inputElement);
            expect(inputElement.value).to.equal('hello');
            vm.$destroy();
        });
        it('接收 disabled', () => {
            const Constructor = Vue.extend(Input);
            const vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount();
            const inputElement = vm.$el.querySelector('input');
            // console.log(inputElement.outerHTML);
            expect(inputElement.disabled).to.equal(true);
            vm.$destroy();
        });
        it('接收 readonly', () => {
            const Constructor = Vue.extend(Input);
            const vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount();
            const inputElement = vm.$el.querySelector('input');
            console.log(inputElement.outerHTML);
            expect(inputElement.readOnly).to.equal(true);
            vm.$destroy();
        });
        it('接收 error', () => {
            const Constructor = Vue.extend(Input);
            const vm = new Constructor({
                propsData: {
                    error: 'input错了'
                }
            }).$mount();
            const useElement = vm.$el.querySelector('use');
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error');
            const errorMessage = vm.$el.querySelector('.errorMessage');
            expect(errorMessage.innerText).to.equal('input错了')
            vm.$destroy();
        });
    })
    describe('事件',()=>{

    })
});
