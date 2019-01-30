<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>

<script>
import Nav from "./components/Nav";

export default {
  name: "App",
  components: {
    'Nav' : Nav,
  }

};
</script>

<style scoped lang="scss">
#app{
    background-color:white;
}
body{
    background-color:white;
}
</style>