import Toast from './toast';

let currentToast

export default {
    install(Vue,options){
        Vue.prototype.$toast = function(message,propsData){
            if(currentToast){
                currentToast.close();
            }
            currentToast = createToast({Vue,message,propsData})
        }
    }
}


function createToast({Vue,message,propsData}){
    let ToastConstructor = Vue.extend(Toast)
    let toast = new ToastConstructor({propsData})
    toast.$slots.default = [message]
    toast.$on('close',()=>{toast = null;})
    toast.$mount()
    document.body.appendChild(toast.$el)
    return toast
}
