<template lang="html">

  <section class="nav">
<div>
  <b-nav>
    <b-nav-item active>Home</b-nav-item>
    <b-nav-item>About</b-nav-item>
    <!-- <b-nav-item>Another Link</b-nav-item>
    <b-nav-item disabled>Disabled</b-nav-item> -->
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
  }
  a{
    color:white;
  }
</style>
