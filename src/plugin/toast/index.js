import toastPage from './index.vue'

const toast = {}

toast.install = (Vue) => {
    const ToastCon = Vue.extend(toastPage)
    const ins = new ToastCon()
    let element = ins.$mount(document.createElement('div')).$el

    document.body.appendChild(element)

    Vue.prototype.$toast = (msg, duration) => {
        ins.msg = msg
        ins.visible = true
        setTimeout(() => {
            ins.visible = false
        }, duration || 3000)
    }
}

export default toast