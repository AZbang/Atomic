<template lang="html">
  <div class="loading-wrap" v-show="loading">
    <v-progress-circular class="loading" :size="50" indeterminate color="primary"></v-progress-circular>
  </div>
</template>

<script>
  export default {
    computed: {
      loading() {
        return this.$store.state.loading;
      }
    }
  }
</script>

<style lang="css">
  .loading-wrap {
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, .5);
  }
  .loading {
    position: fixed;
    z-index: 100000000;
    top: 50%;
    left: 50%;
    margin: -25px;
  }
</style>
