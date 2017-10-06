<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
    <errors :errorLog="errorLog"></errors>
    <preloader v-show="loading"></preloader>
  </div>
</template>

<script>
  const Navigation = require('../components/Navigation.vue');
  const Errors = require('../components/Errors.vue');
  const Preloader = require('../components/Preloader.vue');

  module.exports = {
    name: 'app',
    components: {
      Navigation,
      Errors,
      Preloader
    },
    computed: {
      errorLog() {
        return this.$store.state.errorLog;
      },
      loading() {
        return this.$store.state.loading;
      }
    }
  }
</script>

<style>
  html {
    background: rgb(246, 246, 246);
  }
</style>
