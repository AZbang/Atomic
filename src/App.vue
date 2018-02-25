<template>
  <v-app id="app">
    <alerts/>
    <toolbar-header/>
    <v-content>
      <v-container fluid>
        <v-progress-circular class="loading" v-show="loading" :size="50" indeterminate color="primary"></v-progress-circular>
        <router-view></router-view>
      </v-container>
    </v-content>
    <nav-bar/>
  </v-app>
</template>

<script>
  import NavBar from './components/NavBar.vue'
  import ToolbarHeader from './components/Header.vue'
  import Alerts from './components/Alerts.vue'

  export default {
    name: 'App',
    components: {
      NavBar,
      Alerts,
      ToolbarHeader
    },
    computed: {
      loading() {
        return this.$store.state.loading;
      }
    }
  }
</script>

<style>
  @import 'vuetify/dist/vuetify.min.css';

  .loading {
    position: fixed;
    z-index: 100000000;
    top: 50%;
    left: 50%;
    margin: -25px;
  }

</style>
