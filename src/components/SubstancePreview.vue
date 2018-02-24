<template lang="html">
  <v-list-tile avatar>
    <v-list-tile-avatar :color="type.color">
      <v-icon color="white" style="line-height: 40px">bubble_chart</v-icon>
    </v-list-tile-avatar>
    <v-list-tile-content>
      <router-link :to="'/substance?formula=' + data.fomula" tag="div">
        <v-list-tile-title>{{ data.label }}</v-list-tile-title>
        <v-list-tile-sub-title>{{ data.formula }}</v-list-tile-sub-title>
      </router-link>
    </v-list-tile-content>
    <v-list-tile-action>
      <v-btn icon flat ripple :color="isFavotite ? 'pink' : 'grey'" @click="toggleFavorite">
        <v-icon :color="isFavotite ? 'pink lighten-1' : 'grey lighten-1'">favorite</v-icon>
      </v-btn>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
  export default {
    props: ['data', 'type'],
    data() {
      return {
        isFavotite: false
      }
    },
    methods: {
      toggleFavorite() {
        this.isFavotite = !this.isFavotite;
      }
    }
  }
</script>

<style lang="css">
</style>
