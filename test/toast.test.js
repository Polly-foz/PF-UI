const expect = chai.expect
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast',()=>{
    it('存在',()=>{
        expect(Toast).to.exist
    })

    describe('props',function(){
        it('接受 autoClose',(done)=>{
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData:{
                    autoClose: 1
                }
            }).$mount()
            vm.$on('close',()=>{
                expect(document.querySelector('.toast')).to.eq(null)
                done()
            })
            document.body.appendChild(vm.$el)
        })
        it('接受 closeButton',()=>{
            const callback = sinon.fake();
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    closeButton: {
                        text: '关闭吧',
                        callback,
                    },
                }
            }).$mount()
            let closeButton = vm.$el.querySelector('.close')
            expect(closeButton.textContent.trim()).to.eq('关闭吧')
            closeButton.click()
            expect(callback).to.have.been.called
        })
        it('接受 enableHtml',()=>{
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData:{
                    enableHtml: true
                }
            })
            vm.$slots.default = ['<strong id="test">强调</strong>']
            vm.$mount()
            let test = vm.$el.querySelector("#test")
            expect(test).to.exist
        })
        it('接受 position',()=>{
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData:{
                    position: 'middle'
                }
            }).$mount()
            expect(vm.$el.classList.contains('position-middle')).to.eq(true)
        })
    })
})
