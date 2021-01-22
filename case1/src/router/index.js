import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Confirm  = () => import('../components/Confirm.vue')
const Succ  = () => import('../components/Succ.vue')

const routes = [
    {
        path: '/confirm',
        component: Confirm
    },
    {
        path: '/succ',
        component: Succ
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router