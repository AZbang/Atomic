<template>
  <div id="substance" class="container">
    <model-substance></model-substance>
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
    mounted() {
      this.$store.dispatch('loadSubstance', {
        req: this.query,
        cb: (data) => this.$emit('generateStructure', data)
      });
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
