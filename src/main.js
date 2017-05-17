import VueRouter from 'vue-router';
import Vue from 'vue';
import App from './App.vue';
import Message from './Message.vue';
import Users from './Users.vue';
import Home from './Home.vue';


Vue.use(VueRouter);

const routes = [
  { path: '/users' , component: Users },
  { path: '/', component: Home }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.component('app-message',Message);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
