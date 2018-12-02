<style>
     @import url('https://fonts.googleapis.com/css?family=Sedgwick+Ave');
</style>
<template>
  <div>
    <div style="margin:auto;text-align:center;">
      <h2 style="
      color:black;
      font-family: 'Sedgwick Ave', cursive;
      text-align:center;
      margin-bottom:20+px;
      ">
      Search and add a pin</h2>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click="addMarker">Add</button>
        <button @click="deleteMarkers">Delete all</button>
        <button @click="copyMarkers">Show marker JSON data</button>
      </label>
      <br/>

    </div>
    <br>
    <gmap-map
      :center="center"
      :zoom="12"
      style="width:100%;  height: 400px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
import VueLocalStorage from 'vue-localstorage';

export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },

  mounted() {
    this.geolocate();
    console.log('App mounted!');
    if (localStorage.getItem('markers')) this.markers = JSON.parse(localStorage.getItem('markers'));
  },
  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        console.log(this.markers)
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    deleteMarkers() {
      localStorage.removeItem('markers');
      this.markers = [];
      console.log('deleted')

    },
    copyMarkers(){
     let copy = JSON.parse(localStorage.getItem(marker.position));
     alert(copy);
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    },
  },
  watch: {
    markers: {
      handler() {
        localStorage.setItem('markers', JSON.stringify(this.markers));
        console.log(this.markers)
      },
      deep:true,
    }
  }
};
</script>
