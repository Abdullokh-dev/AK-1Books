import Vue from 'vue'
import App from './App.vue'
import router from "./plugins/router";
import 'animate.css';
import i18n from './locales/i18n'
import '../src/plugins/apexchart'

Vue.config.productionTip = false

Vue.filter('totalVotes', function (list = []) {
    return Number(list.reduce((pr_val, cur_val) => pr_val + cur_val.rating, 0) / list.length).toFixed(1)
})

new Vue({
    render: h => h(App),
    data: {
        showOverlay: false,
    },

    i18n,
    router,
}).$mount('#app')
