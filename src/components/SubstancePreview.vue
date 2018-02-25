<template lang="html">
  <v-list-tile ripple avatar>
    <v-list-tile-avatar :color="type.color || 'grey lighten-1'">
      <v-icon color="white" style="line-height: 40px">bubble_chart</v-icon>
    </v-list-tile-avatar>
    <v-list-tile-content>
      <router-link :to="getLinkSubstance" tag="div">
        <v-list-tile-title>{{ data.title }}</v-list-tile-title>
        <v-list-tile-sub-title>{{ data.formula }}</v-list-tile-sub-title>
      </router-link>
    </v-list-tile-content>
    <v-list-tile-action>
      <toggle-favorite :data="data"/>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
  import ToggleFavorite from './ToggleFavorite';

  export default {
    components: {ToggleFavorite},
    props: ['data'],
    computed: {
      type() {
        return this.$store.getters.getType(this.data.type) || {}
      },
      getLinkSubstance() {
        return '/substance?label=' + this.data.title;
      }
    }
  }
</script>
