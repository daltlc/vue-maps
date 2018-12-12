<template>
  <div id="app">
    <Nav/>
    <home />
  </div>
</template>

<script>
import Home from "./components/Home";
import Nav from "./components/Nav";

export default {
  name: "App",
  components: {
    Nav,
    Home,
  }
};
</script>