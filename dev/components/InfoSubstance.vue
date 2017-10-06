<template>
  <div class="card">
    <h1>{{data.title}}</h1>
    <h3>{{data.formula}}</h3>
    <p>{{data.extract}}</p>
  </div>
</template>

<script>
  module.exports = {
    computed: {
      data() {
        return this.$store.state.substance.info;
      }
    }
  }
</script>

<style scoped>
  .card {
    margin-top: 90%;
    width: 100%;
  }
</style>
