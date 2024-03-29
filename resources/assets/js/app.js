/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

//import mint ui
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI);

//import element ui
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
// Vue.use(ElementUI);

//import museUI

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

Vue.use(MuseUI);

//import vuex
import vuex from 'vuex'

Vue.use(vuex);

import VueRouter from 'vue-router'

Vue.use(VueRouter);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('inform', require('./components/Example.vue'));
Vue.component('addItem', require('./components/addItem.vue'));
Vue.component('recent', require('./components/recent.vue'));
Vue.component('about', require('./components/about.vue'));

import store from './store'
import router from './router'
import axios from 'axios'

const inapp = new Vue({

    store,
    router,

    created() {

        axios.get('/place').then(response => {
            store.state.places = response.data;

        });

        axios.get('/item').then(response => {
            store.state.items = response.data;
        });






    }
    }).$mount('#inapp');
