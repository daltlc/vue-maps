<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<template>
  <div id="home">
    <google-map />
    <div class = "banner">
          <img src="../assets/logo.jpg" alt="">
    </div>
    <div class = "landing">
      <h1>Start your path</h1>
      <p>Whereabouts gives the world a community of individuals searching and sharing adventures. Focusing on backpacking and road trips, we give users a simple way to route their trip and share important details along the way. Using our google map API, you're able to pin point each stop you make as well as any special locations you found interesting along your travels. We also encourage travelers to share other knowledge or advice through a series of quetions before submitting your adventure. This gives adventureres like yourself an option to search different adventures to give them a better understanding of what will be needed if they are to do a similar trip.</p>
      <br/>
      <br/>
      <b-button style="cursor:pointer;" @click="">Get Started</b-button>
      <!-- <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link> -->

    </div>

  <router-view></router-view>


  </div>
</template>

<script lang="js">
import GoogleMap from "./GoogleMap";

export default {
  name: "Home",
  components: {
    // GoogleMap 
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
</style>
