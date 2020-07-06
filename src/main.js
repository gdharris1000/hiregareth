import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import HomeScreen from './components/HomeScreen'

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: HomeScreen}
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
