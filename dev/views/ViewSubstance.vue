<template>
  <div id="substance" class="container">
    <model-substance :data="structureData"></model-substance>
    <info-substance></info-substance>
  </div>
</template>

<script>
  const ModelSubstance = require('../components/ModelSubstance.vue');
  const InfoSubstance = require('../components/InfoSubstance.vue');

  module.exports = {
    components: {
      ModelSubstance,
      InfoSubstance
    },
    data() {
      return {
        query: this.$route.query.q
      }
    },
    computed: {
      structureData() {
        return this.$store.state.substance.data;
      }
    },
    mounted() {
      this.$store.dispatch('loadSubstance', this.query);
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
