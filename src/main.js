// require('dotenv').config();
import Vue from 'vue';
import App from './App';
import * as VueGoogleMaps from 'vue2-google-maps';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAnf_kOUcsgtxPjt2JCgQhJ-fIm70mfqBU',
    libraries: 'places', // necessary for places input
  },
});
Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});