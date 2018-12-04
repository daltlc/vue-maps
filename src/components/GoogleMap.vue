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
        <gmap-autocomplete style="width:200px;height:17px"
          @place_changed="setPlace">
        </gmap-autocomplete>
        <button style="color:green;font-size:16px;cursor:pointer;border-radius:5px;font-family: 'Sedgwick Ave', cursive;" @click="addMarker">Add</button>
        <button style="color:red;font-size:16px;cursor:pointer;border-radius:5px;font-family: 'Sedgwick Ave', cursive;" @click="deleteMarkers">Delete all</button>
        <button style="color:purple;font-size:16px;cursor:pointer;border-radius:5px;font-family: 'Sedgwick Ave', cursive;" @click="copyMarkers">Show marker JSON data</button>
      </label>
      <br/>

    </div>
    <br>
    <gmap-map
      :center="center"
      :zoom="12"
      style="width:100%;  height: 400px;  border:2px solid black;"
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
     let copy = JSON.stringify(localStorage.getItem('markers'));
     alert(copy);
     console.log(copy)
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
      },
      deep:true,
    }
  }
};
</script>
