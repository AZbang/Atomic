<template lang="html">
  <v-bottom-nav app :value="true" :active.sync="$route.meta" color="white">
    <v-btn to="/types" flat color="blue" value="substances">
      <span>Substances</span>
      <v-icon>book</v-icon>
    </v-btn>
    <v-btn to="/favorites" flat color="blue" value="favorites">
      <span>Favorites</span>
      <v-icon>favorite</v-icon>
    </v-btn>
    <v-btn to="/learn" flat color="blue" value="learn">
      <span>Learn</span>
      <v-icon>extension</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script>
export default {

}
</script>

<style lang="css">
</style>
