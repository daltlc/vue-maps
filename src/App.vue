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
    background-color:rgb(22, 22, 22);
}
body{
    background-color:rgb(22, 22, 22);
}
</style>