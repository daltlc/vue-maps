
import Vue from 'vue';
import Router from 'vue-router';
import GoogleMap from '../components/GoogleMap';
import Home from '../components/Home';
import About from '../components/About';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },  
    {
      path: '/map',
      name: 'GoogleMap',
      component: GoogleMap,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],
});