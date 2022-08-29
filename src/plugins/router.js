import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        component: () => import('../components/pages/login/login-first')
    },
    {
        path: '/login-second',
        component: () => import('../components/pages/login/login-second')
    },
    {
        path: '/login-third',
        component: () => import('../components/pages/login/login-third')
    },
    {
        path: '/login-fourth',
        component: () => import('../components/pages/login/login-fourth')
    },
    {
        path: '/login-fifth',
        component: () => import('../components/pages/login/login-fifth')
    },
    {
        path: '/login-sixth',
        component: () => import('../components/pages/login/login-sixth')
    },
    {
        path: '/home',
        component: () => import('../components/pages/home/home')
    },
    {
        path: '/audio-book/:id',
        component: () => import('../components/pages/home/audio-book')
    },
    {
        path: '/book/:id',
        component: () => import('../components/pages/home/book')
    },
    {
        path: '/listen/:bookId',
        component: () => import('../components/pages/home/listen')
    },
    {
        path: '/setting',
        component: () => import('../components/pages/setting/setting')
    },
    {
        path: '/progress-audio',
        component: () => import('../components/pages/setting/progress-audio')
    },
    {
        path: '/edit-aim',
        component: () => import('../components/pages/setting/modal/edit-aim')
    },
    {
        path: '/profile-about',
        component: () => import('../components/pages/setting/profile-about')
    },
    {
        path: '/setting-language',
        component: () => import('../components/pages/setting/setting-language')
    },
    {
        path: '/devices',
        component: () => import('../components/pages/setting/setting-devices')
    },
    {
        path: '/security',
        component: () => import('../components/pages/setting/setting-security')
    },
    {
        path: '/notification',
        component: () => import('../components/pages/setting/setting-notification')
    },
    {
        path: '/buy',
        component: () => import('../components/pages/setting/setting-buy')
    },
    {
        path: '/theme',
        component: () => import('../components/pages/setting/setting-theme')
    },
    {
        path: '/subscriptions',
        component: () => import('../components/pages/setting/setting-ab-subs')
    },
    {
        path: '/about-app',
        component: () => import('../components/pages/setting/setting-ab-app')
    },
    {
        path: '/library',
        component: () => import('../components/pages/library/library')
    },
    {
        path: '/my-shelves',
        component: () => import('../components/pages/library/my-shelves')
    },
    {
        path: '/saved',
        component: () => import('../components/pages/library/saved')
    },
    {
        path: '/currently-reading',
        component: () => import('../components/pages/library/currently-reading')
    },
    {
        path: '/off-line',
        component: () => import('../components/pages/library/off-line')
    },
    {
        path: '/support-service',
        component: () => import('../components/pages/support-service/support-service')
    },
    {
        path: '/search',
        component: () => import('../components/pages/search/search')
    },
    {
        path: '/my-feedback',
        component: () => import('../components/pages/library/my-feedback')
    },
    {
        path: '/my-quotes',
        component: () => import('../components/pages/library/my-quotes')
    },
    {
        path: '/finished-book',
        component: () => import('../components/pages/library/finished-book')
    },
]

export default new VueRouter({
    mode: 'history',
    routes
})
