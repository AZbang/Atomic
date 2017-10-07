<template>
  <div v-show="!loading" class="card-panel">
    <span class="title">{{data.title}}</span>
    <p class="formula">{{data.formula}}</p class="formula">
    <p class="description">{{data.extract}}</p>
  </div>
</template>

<script>
  module.exports = {
    computed: {
      data() {
        return this.$store.state.substance.info;
      },
      loading() {
        return this.$store.state.loading;
      }
    }
  }
</script>

<style scoped>
  .title {
    font-size: 2em;
  }
  .formula {
    font-size: 1.4em;
    margin-top: -4px;
  }
  .card-panel {
    margin-top: 90%;
    width: 100%;
  }
</style>
