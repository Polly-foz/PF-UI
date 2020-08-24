import Toast from './toast';
export default {
    install(Vue,options){
        Vue.prototype.$toast = function(message){
            // alert(message)
            let ToastConstructor = Vue.extend(Toast)
            let toast = new ToastConstructor()
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}
