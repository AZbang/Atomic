<template lang="html">
  <v-btn icon flat ripple :color="isFavorite ? 'pink' : (color || 'grey')" @click="toggleFavorite">
    <v-icon :color="isFavorite ? 'pink lighten-1' : (color || 'grey lighten-1')">favorite</v-icon>
  </v-btn>
</template>

<script>
export default {
  props: ['data', 'color'],
  data() {
    return {
      isFavorite: this.$store.getters.isFavotite(this.data.title)
    }
  },
  watch: {
    data(v) {
      this.isFavorite = this.$store.getters.isFavotite(this.data.title);
    }
  },
  methods: {
    toggleFavorite() {
      this.isFavorite = !this.isFavorite;
      if(this.isFavorite) this.$store.commit('addFavorite', this.data);
      else this.$store.commit('removeFavorite', this.data);
    }
  }
}
</script>

<style lang="css">
</style>
