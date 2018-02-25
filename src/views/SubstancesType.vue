<template lang="html">
  <list-substances :data="substances" :label="type.label"/>
</template>

<script>
  import ListSubstances from '../components/ListSubstances'

  export default {
    components: {ListSubstances},
    computed: {
      type() {
        return this.$store.getters.getType(this.$route.params.type)
      },
      substances() {
        return this.$store.getters.getSubstances(this.$route.params.type)
      }
    },
    mounted() {
      this.$store.commit('setHeader', true);
      this.$store.commit('setTitle', this.type.label);
    }
  }
</script>
