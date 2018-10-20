
/* Loading dependencies */
import './../../../node_modules/expose-loader/index.js'

require('./bootstrap');
window.axios = require('axios');
window.Vue = require('vue');

/* Vue app instantiation */
import router from './router/index'
import store from './store/index'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.config.productionTip = false;

/* App component */
import AppComponent from './components/AppComponent'

/* Auth */
import Auth from './auth'
Vue.use(Auth);

new Vue({
    el: '#app',
    created: function () {
        window.Vue = this
    },
    router,
    store,
    render: h => h(AppComponent)
})