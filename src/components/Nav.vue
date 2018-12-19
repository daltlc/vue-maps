<template lang="html">

  <section class="nav">
<div>
  <b-nav>
    <!-- <b-nav-item active>Home</b-nav-item>
    <b-nav-item>About</b-nav-item> -->
    <!-- <b-nav-item>Another Link</b-nav-item>
    <b-nav-item disabled>Disabled</b-nav-item> -->

    <router-link class="nav" v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}
      
    </router-link>

  </b-nav>
</div>
<!-- navbar-1.vue -->
</section>

</template>

<script lang="js">
  export default  {
    name: 'Nav',
    props: [],
    mounted() {

    },
    data() {
      return { 
        links: [
          {
            id:0,
            text:'Home',
            page:'/'
          },
          // {
          //   id:1,
          //   text:'About',
          //   page:'/About'
          // },
          {
            id:2,
            text:'Demo',
            page:'/Demo'
          },
          // {
          //   id:3,
          //   text:'Sign Up',
          //   page:'/Signup'
          // }
        ]

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  .nav {
    background-color:rgb(22, 22, 22);
    padding-left:50px;
    text-decoration: none;
    height: 40px;
  }
  a{
    color:white;
    padding-top: 5px;
  }
</style>
