<template lang="html">
  <v-list two-line subheader style="margin: -20px">
    <v-subheader>{{type.label}}</v-subheader>
    <substance-preview v-for="item in substances" :data="item" :type="type" :key="item.formula"/>
  </v-list>
</template>

<script>
  import SubstancePreview from '../components/SubstancePreview';

  export default {
    components: {SubstancePreview},
    computed: {
      type() {
        return this.$store.state.database.substances[this.$route.params.type]
      },
      substances() {
        return this.type.substances
      }
    }
  }
</script>

<style lang="css">
</style>
