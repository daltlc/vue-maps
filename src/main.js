// require('dotenv').config();
import Vue from 'vue';
import App from './App';
import * as VueGoogleMaps from 'vue2-google-maps';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from './router';

Vue.use(VueGoogleMaps, {
  load: {
    key: '',
    libraries: 'places', // necessary for places input
  },
});
Vue.use(BootstrapVue);
Vue.config.productionTip = false;


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});