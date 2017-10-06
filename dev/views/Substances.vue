<template>
  <div id="substances" class="container">
    <h1>Тип "{{data.label}}":</h1>
    <card-substance v-for="item in data.substances" :data="item"></card-substance>
  </div>
</template>

<script>
  const CardSubstance = require('../components/CardSubstance.vue');

  module.exports = {
    components: {
      CardSubstance
    },
    data() {
      return {
        type: this.$route.params.type,
      }
    },
    computed: {
      data() {
        return this.$store.getters.substances(this.type)
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
