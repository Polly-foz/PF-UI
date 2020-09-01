const expect = chai.expect;
import Vue from 'vue';
import Popover from '../src/popover';

Vue.config.productionTip = false;
Vue.config.devtools = false;

Vue.component('pf-popover', Popover);

describe('Popover', () => {
    it('存在', () => {
        expect(Popover).to.exist;
    });
    it('接受 position', (done) => {
        const div = document.createElement('div')
        div.innerHTML = `
            <pf-popover position="left">
                <template slot="content">
                    气泡
                </template>
                <button>点击</button>
            </pf-popover>
        `
        document.body.appendChild(div)
        const vm = new Vue().$mount(div)
        const button = vm.$el.querySelector('button')
        button.click()
        vm.$nextTick(()=>{
            const contentWrapper = document.querySelector('.contentWrapper')
            expect(contentWrapper.classList.contains('position-left')).to.be.true
            done()
        })
    });
});
