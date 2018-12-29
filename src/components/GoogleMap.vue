<style>
     @import url('https://fonts.googleapis.com/css?family=Sedgwick+Ave');
     h2{
       color:white;
       background-color:black;
     }
</style>
<template>
  <div>
    <div style="margin:auto;text-align:center;">
      <h2 style="
      font-family: 'Sedgwick Ave', cursive;
      text-align:center;
      margin-bottom:20px;   
      margin-top:30px;   
      ">
      Search and add a pin</h2>
      <label>
        <gmap-autocomplete style="width:200px;height:32px"
          @place_changed="setPlace">
        </gmap-autocomplete>
        
        <b-button style="cursor:pointer;" @click="addMarker">Add</b-button>
        <b-button v-b-modal.modal2 style="cursor:pointer;" @click="deleteMarkers">Delete all</b-button>
        <b-button v-b-modal.modal1 style="cursor:pointer;" @click="">Share</b-button>
      </label>
      <br/>
      <b-modal id="modal1" title="Marker">
        <p class="my-4">Marker added</p>
        <p>{{markerData}}<p/>
      </b-modal>
      <b-modal id="modal2" title="Marker">
        <p class="my-4">All markers deleted</p>
      </b-modal>
    </div>
    <br>
    <gmap-map
      :center="center"
      :zoom="3"
      style="width:100%;  height: 400px;  border:2px solid black;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="addNotes"
        :clickable="true"
        :draggable="false"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
import VueLocalStorage from 'vue-localstorage';

export default {
  name: 'GoogleMap',
  data() {

    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 47.6062095, lng: -122.3320708 },
      markers: [],
      places: [],
      currentPlace: null,
      markerData: localStorage.getItem('markers'),
      notes: [],
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
        this.markers.push({ position:marker });
        console.log(this.markers)
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
        // need to update markerData prop here so that the bootstrap modal will update when adding a marker
        
      }
    },
    deleteMarkers() {
      localStorage.removeItem('markers');
      this.markers = [];
      console.log('deleted')
      this.markerData = [];
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
