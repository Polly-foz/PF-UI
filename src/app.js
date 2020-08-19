import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';
import Input from './input'
Vue.component('pf-button', Button);
Vue.component('pf-icon', Icon);
Vue.component('pf-button-group', ButtonGroup);
Vue.component('pf-input',Input)
new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
        loading4: false,
        loading5: false,
        value:'default value'
    },

});


