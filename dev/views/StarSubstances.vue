<template>
  <div id="substances" class="container">
    <h1>Отмеченные вещества:</h1>
    <card-substance v-for="item in data" :data="item"></card-substance>
  </div>
</template>

<script>
  const CardSubstance = require('../components/CardSubstance.vue');

  module.exports = {
    components: {
      CardSubstance
    },
    computed: {
      data() {
        return this.$store.state.database.stars;
      }
    }
  }
</script>

<style scoped>
  h1 {
    margin-top: 0;
    font-weight: 300;
    font-size: 2em;
  }
</style>
