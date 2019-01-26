<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<template>
  <div id="home">
    <div class = "banner">
    </div>
    <div class = "landing">
      <google-map />
      <!-- <h1>Start your path</h1>
      <p>Rethink basic outcome of app </p> -->
      <br/>
      <br/>
      <!-- <router-link class = "signup-link" to = "/signup">
      <b-button class = "link" style="cursor:pointer;background-color:#7849E7;color:white;border-color:black" @click="">Sign Up</b-button>
       </router-link>
      <router-link class = "login-link" to = "/login">
      <b-button class = "link" style="cursor:pointer;background-color:#5F36C6;color:white;border-color:black" @click="">Login</b-button>
      </router-link> -->
      

      <!-- <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link> -->

    </div>

  <!-- <router-view></router-view> -->
  </div>
</template>

<script lang="js">
import GoogleMap from "./GoogleMap";


export default {
  name: 'Home',
  components: {
    GoogleMap
    //just uncomment this and google maps will load
  }
};
</script>

<style scoped lang="scss">
#home{
    color:black;
  text-align: center;
}
.banner{
  width:100%;
  background-color: white;
}
img{
  background-color: black;
  width: 40%;
}
.landing {
  background-color:rgb(32, 32, 32);
  color:white;
  padding-bottom: 30px;
}
p{
  width:50%;
  text-align: center;
  margin: auto;
}
h1{
  padding-top: 30px;
}
body{
    background-color:rgb(32, 32, 32);
}
.link:hover{
  background-color: rgb(100, 49, 218);
}

</style>
