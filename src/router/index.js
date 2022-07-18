import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

// const axios = require('axios').default;
// axios.defaults.baseURL = 'http://127.0.0.1:8000/';

// axios
//   .post('http://127.0.0.1:8000/api/admin/products/create')
//   .then(response => {
//     console.log(response);
//   }).catch(error => {
//     console.log(error);
//   });


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'App',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about'
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
