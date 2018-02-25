<template lang="html">
  <div id="learn">
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$store.commit('setHeader', true);
      this.$store.commit('setTitle', 'Изучить');
    }
  }
</script>

<style lang="css">
</style>
