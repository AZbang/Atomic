<template>
  <v-app id="app">
    <alerts/>
    <toolbar-header/>
    <v-content>
      <loading/>
      <v-container fluid>
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
  import Loading from './components/Loading.vue'

  export default {
    name: 'App',
    components: {
      NavBar,
      Alerts,
      Loading,
      ToolbarHeader
    }
  }
</script>

<style>
  @import 'vuetify/dist/vuetify.min.css';
</style>
