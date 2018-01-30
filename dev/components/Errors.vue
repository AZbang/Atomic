<template>
  <div id="errors" :error-log="showError">
  </div>
</template>

<script>
  module.exports = {
    props: ['errorLog'],
    computed: {
      showError() {
        Materialize.toast(this.errorLog, 10000, 'error-log');
        // this.$router.back();
        return this.errorLog;
      }
    }
  }
</script>

<style>
  .error-log {
    border-radius: 10px;
    top: 0px;
    margin-bottom: 12px;
    width: 90%;
    left: 50%;
    margin-left: -45%;
  }
</style>
