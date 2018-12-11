<template>
  <div id="app">
    <nav/>
    <google-map />
  </div>
</template>

<script>
import GoogleMap from "./components/GoogleMap";

export default {
  name: "App",
  components: {
    GoogleMap
  }
};
</script>