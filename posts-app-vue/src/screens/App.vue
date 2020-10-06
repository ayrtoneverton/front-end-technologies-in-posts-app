<template>
  <b-container fluid="md">
    <nav>
      <b-button variant="primary" to="/">HOME</b-button>
      <b-button variant="primary" to="/post/new">NEW POST</b-button>
    </nav>
    <router-view/>
  </b-container>
</template>

<script>
  export default {
    name: 'App'
  };
</script>

<style scoped>
  html {
    font-family: sans-serif;
  }
  nav {
    margin: 3rem 0 2rem 0;
    border-bottom: solid .05rem rgba(0, 0, 0, .12);
  }
  nav > * {
    margin: 0 .5rem .5rem 0;
  }
</style>
