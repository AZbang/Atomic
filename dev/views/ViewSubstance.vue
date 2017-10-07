<template>
  <div id="substance">
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
    computed: {
      structureData() {
        return this.$store.state.substance.data;
      }
    },
    mounted() {
      this.$store.dispatch('loadSubstance', {
        formula: this.$route.query.formula,
        label: this.$route.query.label,
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
