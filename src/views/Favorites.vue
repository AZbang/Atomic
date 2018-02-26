<template lang="html">
  <list-substances :data="substances" :label="'Ваши сохраненные вещества для изучения'"/>
</template>

<script>
  import ListSubstances from '../components/ListSubstances'

  export default {
    components: {ListSubstances},
    computed: {
      substances() {
        return this.$store.state.database.favorites;
      }
    },
    mounted() {
      this.$store.commit('setHeader', true);
      this.$store.commit('setTitle', 'Отмеченные вещества');
    }
  }
</script>
