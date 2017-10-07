<template lang="html">
  <div class="card-panel waves-effect">
    <router-link :to="link">
      <span>{{data.label}}</span>
      <br>
      <span class="card-title">{{data.formula}}</span>
    </router-link>
    <star-button :data="data"></star-button>
  </div>
</template>

<script>
  const StarButton = require('./StarButton.vue');

  module.exports = {
    props: ['data'],
    components: {
      StarButton
    },
    computed: {
      link() {
        return "/substance?label=" + this.data.label + '&formula=' + this.data.formula;
      }
    }
  }
</script>

<style scoped>
  .card-panel {
    width: 100%;
    margin-bottom: 5px;
  }
  a {
    color: #333;
  }
  span {
    font-size: 1.4em;
  }
</style>
