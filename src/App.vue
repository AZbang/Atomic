<template>
  <v-app id="app">
    <toolbar-header/>
    <v-content>
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

export default {
  name: 'App',
  components: {
    NavBar,
    ToolbarHeader
  }
}
</script>

<style>
  @import 'vuetify/dist/vuetify.min.css'
</style>
