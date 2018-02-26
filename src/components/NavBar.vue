<template lang="html">
  <v-bottom-nav app :value="true" :active="section" color="white">
    <v-btn to="/favorites" flat color="blue" value="favorites">
      <span>Отмеченные</span>
      <v-icon>bookmark</v-icon>
    </v-btn>
    <v-btn to="/types" flat color="blue" value="substances">
      <span>Справочник</span>
      <v-icon>book</v-icon>
    </v-btn>
    <v-btn to="/learn" flat color="blue" value="learn">
      <span>Изучить</span>
      <v-icon>extension</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script>
export default {
  computed: {
    section() {
      return this.$route.meta;
    }
  }
}
</script>

<style lang="css">
</style>
