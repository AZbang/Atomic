<template>
  <v-layout row wrap id="types">
    <card-substance-type v-for="item in types" :key="item.type" :data="item"/>
  </v-layout>
</template>

<script>
import CardSubstanceType from '../components/CardSubstanceType.vue'

export default {
  components: {CardSubstanceType},
  computed: {
    types () {
      return this.$store.state.database.types
    }
  }
}
</script>
