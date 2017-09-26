<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
  const Navigation = require('../components/Navigation.vue');

  module.exports = {
    name: 'app',
    components: {
      Navigation
    }
  }
</script>
