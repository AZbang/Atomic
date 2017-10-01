<template>
  <div id="substance" class="container">
    <h1>Запрос "{{query}}":</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        query: this.$route.query.q
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
