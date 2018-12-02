// require('dotenv').config();
import Vue from 'vue';
import App from './App';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
  load: {
    key: '',
    libraries: 'places', // necessary for places input
  },
});

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});