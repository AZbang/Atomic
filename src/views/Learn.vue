<template lang="html">
  <div id="learn">
    <v-toolbar app color="transparent">
      <v-btn icon to="">
        <v-icon>back</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>favorite</v-icon>
      </v-btn>
    </v-toolbar>
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
