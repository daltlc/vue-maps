require('dotenv').config();
import Vue from "vue";
import App from "./App";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "process.env.GOOGLE_MAP_KEY",
    libraries: "places" // necessary for places input
  }
});

new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});