<template>
  <div v-show="!loading" class="card-panel">
    <div class="wrap">
      <span class="title">{{data.title}}</span>
      <p class="formula">{{data.formula}}</p class="formula">
      <star-button :data="briefData"></star-button>
    </div>

    <div class="description" v-html="$options.filters.replaceNLtoBr(data.extract)"></div>
  </div>
</template>

<script>
  const StarButton = require('./StarButton.vue');

  module.exports = {
    components: {
      StarButton
    },
    filters: {
      replaceNLtoBr(str) {
        if(!str) return '';
        return str.replace('\n', '<br><br>');
      }
    },
    computed: {
      data() {
        return this.$store.state.substance.info;
      },
      briefData() {
        return this.$store.state.database.currentData;
      },
      loading() {
        return this.$store.state.loading;
      }
    }
  }
</script>

<style scoped>
  .wrap {
    width: 100%;
    position: relative;
  }
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
    margin-bottom: 0;
  }
</style>
