// require('dotenv').config();
import Vue from 'vue';
import App from './App';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAnf_kOUcsgtxPjt2JCgQhJ-fIm70mfqBU',
    libraries: 'places', // necessary for places input
  },
});

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});