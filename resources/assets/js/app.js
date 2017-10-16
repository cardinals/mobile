/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

//import iview

import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);


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

//主入口组件
Vue.component('dsj', require('./components/index.vue'));


import store from './store'
import router from './router'
import axios from 'axios'

const app = new Vue({

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
}).$mount('#app');
