import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('pf-button',Button)
Vue.component('pf-icon',Icon)
Vue.component('pf-button-group',ButtonGroup)

new Vue({
    el:'#app',
    data:{
        loading1:true,
        loading2:false,
        loading3:true
    }
})
