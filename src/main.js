import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import HomeScreen from './components/HomeScreen'
import Projects from './components/Projects'
import History from './components/History'
import Contact from './components/Contact'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUserSecret)

Vue.use(VueRouter);
Vue.component('font-awesome-icon', FontAwesomeIcon)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: HomeScreen},
    {path: '/projects', component: Projects},
    {path: '/history', component: History},
    {path: '/contact', component: Contact},
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
