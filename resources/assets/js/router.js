import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter);

//引入定义路由组件
import addItem from './components/addItem.vue'
import about from './components/about.vue'
import recent from './components/recent.vue'

//定义路由,数组，每一个路由就是一个对象在数组里面
const routes = [
    {path: '/additem', name: 'additem', component: addItem},
    {path: '/recent', component: recent},
    {path: '/about', component: about},
   //重定向根目录到/additem
    {path: '/', redirect: '/additem'}
];

//创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
    // （缩写）相当于 routes: routes
    routes
});


export default router;




