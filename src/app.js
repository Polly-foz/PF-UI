import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';

Vue.component('pf-button', Button);
Vue.component('pf-icon', Icon);
Vue.component('pf-button-group', ButtonGroup);

new Vue({
    el: '#app',
    data: {
        loading1: true,
        loading2: false,
        loading3: true
    }
});


import chai from 'chai';
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect;

//单元测试
//测试props:icon
{
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    });
    vm.$mount();
    let useElement = vm.$el.querySelector('use');
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-settings');
    vm.$el.remove()
    vm.$destroy()
}
//测试props:loading
{
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true
        }
    });
    vm.$mount();
    let useElement = vm.$el.querySelector('use');
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading');
    //会报错，应为#i-settings
    vm.$el.remove()
    vm.$destroy()
}
//测试order
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true
        }
    });
    vm.$mount(div);
    let svg = vm.$el.querySelector('svg');
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition:'right',
            loading: true
        }
    });
    vm.$mount(div);
    let svg = vm.$el.querySelector('svg');
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
}
//测试button click
{
    //mock
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition:'right',
            loading: true
        }
    });
    vm.$mount();
    let spy = chai.spy(function () {})
    vm.$on('click',spy)
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()

}
