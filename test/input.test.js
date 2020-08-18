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
        const Constructor = Vue.extend(Input);
        let vm;
        afterEach(function () {
            // runs after each test in this block
            vm.$destroy();
        });

        it('接收 value', () => {
            vm = new Constructor({
                propsData: {
                    value: 'hello'
                }
            }).$mount();
            const inputElement = vm.$el.querySelector('input');
            // console.log(inputElement.outerHTML);
            // console.log(inputElement);
            expect(inputElement.value).to.equal('hello');
        });
        it('接收 disabled', () => {
            const vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount();
            const inputElement = vm.$el.querySelector('input');
            // console.log(inputElement.outerHTML);
            expect(inputElement.disabled).to.equal(true);
        });
        it('接收 readonly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount();
            const inputElement = vm.$el.querySelector('input');
            console.log(inputElement.outerHTML);
            expect(inputElement.readOnly).to.equal(true);
        });
        it('接收 error', () => {
            vm = new Constructor({
                propsData: {
                    error: 'input错了'
                }
            }).$mount();
            const useElement = vm.$el.querySelector('use');
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error');
            const errorMessage = vm.$el.querySelector('.errorMessage');
            expect(errorMessage.innerText).to.equal('input错了')
        });
    })
    describe('事件',()=>{
        const Constructor = Vue.extend(Input);
        let vm;
    })
});
